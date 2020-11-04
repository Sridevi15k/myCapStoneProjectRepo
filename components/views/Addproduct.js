export default () => `
<form action="" method="post">
<h1>Add your product details.</h1>

    <p>Please fill in this form to register the product.</p>
    <hr>
 <ul>
 <li>
    <label for="manufacturer">Manufacturer:</label>
    <input type="text" id="manufacturer" name="manufacturer_name">
    <abbr title="required" aria-label="required">*</abbr>
  </li>
  <li>
    <label for="name">Product Name:</label>
    <input type="text" id="productname" name="product_name">
    <abbr title="required" aria-label="required">*</abbr>
  </li>
  <li>
    <label for="model">Model:</label>
    <input type="varchar" id="model" name="model_no">
    <abbr title="required" aria-label="required">*</abbr>
  </li>
  <li>
    <label for="purchasedate">Date of Purchase:</label>
    <input type="date" placeholder="mm-dd-yyyy" value=""
    min="01-01-2010" max="12-31-2050" id="purchasedate" name="purchase_date">
    <abbr title="required" aria-label="required">*</abbr>
  </li>
  <li>
    <label for="expirydate">Expiry Date:</label>
    <input type="date" placeholder="mm-dd-yyyy" value=""
    min="11-01-2020" max="12-31-2050" id="expirydate" name="expiry_date">
    <abbr title="required" aria-label="required">*</abbr>
  </li>
  <li>
    <label for="photo">Attach photo:</label>
    <input type"img" id="photo" name="attach_photo"></input>
    <abbr title="required" aria-label="required">*</abbr>
  </li>
  <li class="button">
  <button type="submit">Save</button>
</li>
 </ul>

</form>
`;
// export default () => `
//   <div class="side-bar">
//     <h3>Sidebar Two</h3>
//     <div class="container">
//       <form id="register" method="POST" action="">
//         <div class="form-box">
//           <label for="username">Username:</label>
//           <input type="text" name="username" id="username" placeholder="Enter Your Username">
//         </div>
//         <div class="form-box">
//           <label for="password">Password:</label>
//           <input type="password" name="password" id="password">
//         </div>
//         <div class="form-box">
//           <label for="email">Email:</label>
//           <input type="email" name="email" id="email" placeholder="your@email.here">
//         </div>
//         <input type="submit" name="register" value="Register">
//       </form>
//       </div>
//     </div>
//     `;

//   <div class="login-wrap">
// 	<div class="login-html">
// 		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
// 		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
// 		<div class="login-form">
// 			<div class="sign-in-htm">
// 				<div class="group">
// 					<label for="user" class="label">Username</label>
// 					<input id="user" type="text" class="input">
// 				</div>
// 				<div class="group">
// 					<label for="pass" class="label">Password</label>
// 					<input id="pass" type="password" class="input" data-type="password">
// 				</div>
// 				<div class="group">
// 					<input id="check" type="checkbox" class="check" checked>
// 					<label for="check"><span class="icon"></span> Keep me Signed in</label>
// 				</div>
// 				<div class="group">
// 					<input type="submit" class="button" value="Sign In">
// 				</div>
// 				<div class="hr"></div>
// 				<div class="foot-lnk">
// 					<a href="#forgot">Forgot Password?</a>
// 				</div>
// 			</div>
// 			<div class="sign-up-htm">
// 				<div class="group">
// 					<label for="user" class="label">Username</label>
// 					<input id="user" type="text" class="input">
// 				</div>
// 				<div class="group">
// 					<label for="pass" class="label">Password</label>
// 					<input id="pass" type="password" class="input" data-type="password">
// 				</div>
// 				<div class="group">
// 					<label for="pass" class="label">Repeat Password</label>
// 					<input id="pass" type="password" class="input" data-type="password">
// 				</div>
// 				<div class="group">
// 					<label for="pass" class="label">Email Address</label>
// 					<input id="pass" type="text" class="input">
// 				</div>
// 				<div class="group">
// 					<input type="submit" class="button" value="Sign Up">
// 				</div>
// 				<div class="hr"></div>
// 				<div class="foot-lnk">
// 					<label for="tab-1">Already Member?</a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
