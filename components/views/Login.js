export default () => `
<section id="login-form">
<h3>Login</h3><br>
<form id="" method="POST" action="">
        <div class="login-box">
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" placeholder="Enter Your Username" required>
        </div>
        <div class="login-box">
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" required>
        </div>

        <div class="login">
        <button type="button" class="loginbtn">Login</button><br><br>
        <a href="">Forgot username/password?</a><br><br>
       <button type="button" class="cancelbtn">Cancel</button>
      </div>
      </form>
</section>
`;
