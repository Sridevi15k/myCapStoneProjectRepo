import Navigo from "navigo";
import { capitalize } from "lodash";
// importing all as a Module object
//import * as components from "./components";
import * as state from "./store";
// importing all by name
import { Header, Nav, Main, Footer } from "./components";
import axios from "axios";
import "./env";
import { auth, db } from "./firebase";
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
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer()}
`;
  router.updatePageLinks();

  addNavEventListeners();
  addSiteListeners(st);
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
  // addLogInAndOutListener(state.User);
  // listenForAuthChange();
  // addNavEventListeners();
  listenForRegister(st);
  // listenForSignIn(st);
  // getDoggoPics(st);
  // addPicOnFormSubmit(st);
  // removePic(st);
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
        render(state.Home);
      });
    });
  }
}
function addUserToStateAndDb(first, last, email, pass) {
  console.log("State Username:", state.username);
  state.username = first + last;
  state.firstName = first;
  state.lastName = last;
  state.email = email;
  state.loggedIn = true;

  db.collection("users").add({
    FirstName: first,
    LastName: last,
    Email: email,
    Password: pass,
    signedIn: true
  });
}
