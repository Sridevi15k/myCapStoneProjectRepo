export default () => `
<section>
<div class="content-layout">
  <div class="side-bar">
    <h2>Easing your load off!</h2><br>
        <p>A simple and easy to use reminder application to keep track of your warranties for your purchases, time-sensitive receipts and documents so you get the value for the money you put in as we happily take the effort to send you timely reminders.</p>
  </div>
  <div class="side-bar">
    <h3>Features</h3>
    <ul>
    <li>Simple, affordable and easy to use.</li><br>
    <li>Hassle free timely reminders.</li><br>
    <li>Safe and secure accounts/transactions.</li><br>
    <li>Easy uploads using scan/photograph.</li>
    </ul>
  </div>
  <div class="side-bar">
    <h3>Register/Login</h3>
    <div class="container1">
      <form id="register" method="POST" action="">
        <div class="form-box">
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" placeholder="Enter Your Username">
        </div>
        <div class="form-box">
          <label for="password">Password:</label>
          <input type="password" name="password" id="password">
        </div>
        <div class="form-box">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="your@email.here">
        </div>
        <input type="submit" name="Login" value="Login"><br><br>
        <input type="submit" name="register" value="Register">
        Not a member?
      </form>
      </div>


  </div>
  </section>
  `;
