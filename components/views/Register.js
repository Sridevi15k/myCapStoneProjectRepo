export default () => `
<section id="signup" class="container" method="POST" action="">
<form>
<h1>Register</h1>

    <p>Please fill in this form to create an account.</p>
    <hr>
  <div>
    <label for="First Name"><b>* First Name</b></label>
    <input type="text" placeholder="First Name" name="FirstName" required><br><br>
  </div>
  <div>
    <label for="Last Name"><b>* Last Name</b></label>
    <input type="text" placeholder="Last Name" name="LastName" required><br><br>
  </div>
  <div>
    <label for="email"><b>* Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required><br><br>
  </div>
  <div>
    <label for="psw"><b>* Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required><br><br>
  </div>
  <div>
    <label for="psw-repeat"><b>* Confirm Password</b></label>
    <input type="password" placeholder="Retype Password" name="psw-repeat" required><br><br>
  </div>

    <p>By creating an account you agree to our <a class="terms" href="#">Terms & Privacy</a></p>

    <div class="container-signin">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
</section>
`;
