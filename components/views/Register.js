export default () => `
<section id="signup" class="container" method="POST" action="">
<form>
<h1>Register</h1>

    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="First Name"><b>First Name</b></label>
    <input type="text" placeholder="First Name" name="First Name" required>

    <label for="Last Name"><b>Last Name</b></label>
    <input type="text" placeholder="Last Name" name="Last Name" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Retype Password</b></label>
    <input type="password" placeholder="Retype Password" name="psw-repeat" required><br><br>

    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>

    <p>By creating an account you agree to our <a class="terms" href="#">Terms & Privacy</a></p>

    <div class="container-signin">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
</section>
`;
