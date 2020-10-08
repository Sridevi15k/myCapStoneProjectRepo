/*export default () => `
<form id="register" method="POST" action="">
    <div>
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" placeholder="Url">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="text" name="password" id="password">
    </div>


    <input type="submit" name="register" value="Click here">
  </form>
  `;*/
export default () => `
  <div class="side-bar">
    <h3>Sidebar Two</h3>
    <div class="container">
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
        <input type="submit" name="register" value="Register">
      </form>
      </div>
    </div>
    `;
