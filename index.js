import Navigo from "navigo";
import { capitalize } from "lodash";
// importing all as a Module object
//import * as components from "./components";
import * as state from "./store";
// importing all by name
import { Header, Nav, Main, Footer, UserNav } from "./components";
import axios from "axios";
import "./env";
import { auth, db } from "./firebase";
//import carMake from "./lib/carAPI";
// const coll = db.collection("Users");
// console.log("Collection:", coll);
// coll.doc("VGEcuxD9XYmO1m7EbZmD")
// .get()
// .then(documentSnapshot => console.log(documentSnapshot.data()));

// add menu toggle to bars icon in nav bar
/*document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");});*/
// get data from an API endpoint
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   // handle the response from the API
//   .then(response => {
//     // for each post in the response Array,
//     response.data.forEach(post => {
//       // add it to state.Blog.posts
//       state.Blog.posts.push(post);
//     });
//     const params = router.lastRouteResolved().params;
//     // if params exists (any page but Home),
//     if (params) {
//       // re-render the page
//       render(state[params.page]);
//     }
//   });

// axios
//.get(/* your API endpoint from above */)
//.then(response => {
//   state.Home.weather.city = response.name;
//   state.Home.weather.temp = response.main.temp;
//   state.Home.weather.description = response.weather.main;
// });
//remove the API key and put after ID= and before`${process.env.OPEN_WEATHER_API_KEY}`
//.catch(err => console.log(err));

axios
  .get(`https://api.github.com/users/Sridevi15k/repos`, {
    headers: {
      Authorization: `${process.env.GITHUB__TOKEN}`
    }
  })
  .then(response => console.log(response.data));

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  console.log("User LoggedIn State:", state.User.loggedIn);
  if (state.User.loggedIn) {
    document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${UserNav(state.TopLinks)}
      ${Main(st)}
      ${Footer()}`;
  } else {
    document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}`;
  }

  router.updatePageLinks();

  addNavEventListeners();
  addSiteListeners(st);
  //carMake();
}

render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

function addSiteListeners(st) {
  addLogInAndOutListener(state.User);
  listenForAuthChange();
  //addNavEventListeners();
  listenForRegister(st);
  listenForSignIn(st);
  // getDoggoPics(st);
  // addPicOnFormSubmit(st);
  // removePic(st);
}
function addLogInAndOutListener(user) {
  // select link in header
  document.querySelector("header a").addEventListener("click", event => {
    // if user is logged in,
    if (user.loggedIn) {
      event.preventDefault();
      // log out functionality
      auth.signOut().then(() => {
        console.log("user logged out");
        logOutUserInDb(user.email);
        resetUserInState();
        //update user in database
        db.collection("users").get;
        render(state.Addproduct);
      });
      console.log(state.User);
    }
    // if user is logged out, clicking the link will render sign in page (handled by <a>'s href)
  });
}
function logOutUserInDb(email) {
  if (state.loggedIn) {
    db.collection("users")
      .get()
      .then(snapshot =>
        snapshot.docs.forEach(doc => {
          if (email === doc.data().email) {
            let id = doc.id;
            db.collection("users")
              .doc(id)
              .update({ signedIn: false });
          }
        })
      );
    console.log("user signed out in db");
  }
}
function resetUserInState() {
  state.User.username = "";
  state.User.firstName = "";
  state.User.lastName = "";
  state.User.email = "";
  state.User.loggedIn = false;
}

function listenForAuthChange() {
  // log user object from auth if a user is signed in
  auth.onAuthStateChanged(user => (user ? console.log(user) : ""));
}

function listenForRegister(st) {
  if (st.view === "Register") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      const inputs = inputList.map(input => input.value);
      let firstName = inputs[0];
      let lastName = inputs[1];
      let email = inputs[2];
      let password = inputs[3];

      //create user in Firebase
      auth.createUserWithEmailAndPassword(email, password).then(response => {
        console.log("user registered");
        console.log(response);
        console.log(response.user);
        addUserToStateAndDb(firstName, lastName, email, password);
        render(state.Addproduct);
        router.navigate("/Addproduct");
      });
    });
  }
}
function addUserToStateAndDb(first, last, email, pass) {
  console.log("State Username:", state.User.username);
  state.User.username = first + last;
  state.User.firstName = first;
  state.User.lastName = last;
  state.User.email = email;
  state.User.loggedIn = true;
  console.log("State Username:", state.User.username);

  db.collection("users").add({
    FirstName: first,
    LastName: last,
    Email: email,
    Password: pass,
    signedIn: true
  });
}
function listenForSignIn(st) {
  if (st.view === "Login") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      const inputs = inputList.map(input => input.value);
      let email = inputs[0];
      let password = inputs[1];
      auth.signInWithEmailAndPassword(email, password).then(() => {
        console.log("user signed in");
        getUserFromDb(email).then(() => render(state.Addproduct));
      });
    });
  }
}
function getUserFromDb(email) {
  state.User.loggedIn = true;
  return db
    .collection("users")
    .get()
    .then(snapshot =>
      snapshot.docs.forEach(doc => {
        if (email === doc.data().email) {
          let id = doc.id;
          db.collection("users")
            .doc(id)
            .update({ signedIn: true });
          console.log("user signed in db");
          let user = doc.data();
          state.User.username = user.firstName + user.lastName;
          state.User.firstName = user.firstName;
          state.User.lastName = user.lastName;
          state.User.email = email;
          console.log("User from DB:", state.User.loggedIn);
        }
      })
    );
}
