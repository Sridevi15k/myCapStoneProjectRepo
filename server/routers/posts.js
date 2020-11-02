// const { Router } = require("express");
// const router = Router();

// router
//   // routes will be specified at the app-level
//   .route("/:id") // equivalent to /posts
//   .get((request, response) => {
//     const id = request.params.id;
//     const posts = db
//       .get("posts")
//       .getById(id)
//       .value();
//     if (post) {
//       response.json(post);
//     } else {
//       response.json(404).json({ message: "Not Found" });
//     }
//   })
//   .patch((request, response) => {
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .updateById(id, request.body)
//       .write();
//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   })
//   .delete((request, response) => {
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .removeById(id)
//       .write();

//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   });

// // router export statement
// // don't forget to export the router Object
// module.exports = router;
