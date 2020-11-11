export default () => `
<section>
<div class="content-layout">
  <div class="side-bar">
    <h2>Ease your load off!</h2><br>
    <hr>
        <p>A simple and easy to use reminder application to keep track of your warranties for your purchases, time-sensitive receipts and documents so you get the value for the money you put in as we happily take the effort to send you timely reminders.</p>
  </div>
  <div class="side-bar">
  <h2 id="search">Search your Car</h2>
  <hr>
  <form id="Carform" action="" method="POST">
      <label for="Carsearch"></label>
      <select id="Carsearch" name="Carsearch" value="Carsearch">
          <option id="SelectMake" value="SelectMake">Select Make</option>
          <option id="chevrolet" value="chevrolet">Chevrolet</option>
          <option id="honda" value="Honda">Honda</option>
          <option id="ford" value="Ford">Ford</option>
          <option id="toyota" value="Toyota">Toyota</option>
          <option id="gmc" value="GMC">GMC</option>
    <option id="chrysler" value="chrysler">Chrysler</option>
    <option id="volkswagen" value="Volkswagen">Volkswagen</option>
    <option id="jeep" value="Jeep">Jeep</option>
      </select> <br>
      <select id="model" name="model">
            <option id="selectmodel" value="Select Model">Select Model</option>
        </select>
        <br>
        <input type="submit" value="Select" id="select">

  </div>
  <div class="side-bar">
  <img src="https://github.com/Sridevi15k/myCapStoneProjectRepo/blob/master/Docs/WebsiteImages/Bunny%20clock.jpg?raw=true" alt="home image">
  </div>
</form>
      </div>
  </section>
  `;
