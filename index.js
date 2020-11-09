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

const router = new Navigo(window.location.origin);
router.updatePageLinks();

function render(st = state.Home) {
  console.log("User Login State:", state.User.loggedIn);
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

  listenForAuthChange();
  addNavEventListeners();
  addSiteListeners(st);
  addProductListener();
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
  listenForRegister(st);
  listenForSignIn(st);
}

function listenForAuthChange() {
  // log user object from auth if a user is signed in
  auth.onAuthStateChanged(user => (user ? console.log(user) : ""));
}

function addProductListener() {
  // select link in header

  if (document.querySelector("#addproduct")) {
    document.querySelector("#addproduct").addEventListener("click", event => {
      // if user is logged in,
      if (state.User.loggedIn) {
        event.preventDefault();
        axios
          .get(`https://api.github.com/users/Sridevi15k/repos`, {
            headers: {
              Authorization: `${process.env.GITHUB__TOKEN}`
            }
          })
          .then(response => console.log(response.data));
        render(state.Addproduct);
        router.navigate("/Addproduct");
      }
      // if user is logged out, clicking the link will render sign in page (handled by <a>'s href)
    });
  }
}

function addLogInAndOutListener(user) {
  // select link in header
  if (document.querySelector("#Nav_Signout")) {
    document.querySelector("#Nav_Signout").addEventListener("click", event => {
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
          render(state.Home);
          router.navigate("/Home");
        });
        console.log(state.User);
      }
      // if user is logged out, clicking the link will render sign in page (handled by <a>'s href)
    });
  }
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
  state.User.uid = "";
  state.User.username = "";
  state.User.firstName = "";
  state.User.lastName = "";
  state.User.email = "";
  state.User.loggedIn = false;
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
        addUserToStateAndDb(response.user.uid, firstName, lastName, email);
        render(state.Productlist);
        router.navigate("/Productlist");
      });
    });
  }
}

function addUserToStateAndDb(uid, first, last, email) {
  state.User.uid = uid;
  state.User.username = first + last;
  state.User.firstName = first;
  state.User.lastName = last;
  state.User.email = email;
  state.User.loggedIn = true;

  console.log("User Id:", uid);
  db.collection("users")
    .doc(uid)
    .set({
      firstName: first,
      lastName: last,
      email: email,
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
      auth.signInWithEmailAndPassword(email, password).then(userRef => {
        state.User.loggedIn = true;
        getUserFromDb(userRef.user.uid).then(() => {
          state.User.loggedIn = true;
          render(state.Productlist);
          router.navigate("/Productlist");
        });
      });
    });
  }
}

function getUserFromDb(uid) {
  return db
    .collection("users")
    .doc(uid)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        const userData = doc.data();
        state.User.uid = uid;
        state.User.loggedIn = true;
        state.User.firstName = userData.firstName;
        state.User.lastName = userData.lastName;
        state.User.email = userData.email;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}

//Table for product list
// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// let table = document.querySelector("table");
// let data = Object.keys(users[0]);
// generateTableHead(table, users);
// generateTableHead(table, data);
