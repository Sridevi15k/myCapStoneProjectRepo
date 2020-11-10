export default () => `
<form class="product" id="product-box" action="" method="post">
<h2>Add your product details.</h2>

    <p>Please fill in this form to register the product.</p>
    <hr>

  <div>
    <label for="manufacturer">* Manufacturer</label>
    <input type="text" id="manufacturer" name="manufacturer_name" required>

  </div><br><br>
  <div>
    <label for="name">* Product Name</label>
    <input type="text" id="productname" name="product_name" required>

  </div><br><br>
  <div>
    <label for="model">* Model</label>
    <input type="varchar" id="model" name="model_no" required>

  </div><br><br>
  <div>
    <label for="purchasedate">* Date of Purchase</label>
    <input type="date" placeholder="mm-dd-yyyy" value=""
    min="01-01-2010" max="12-31-2050" id="purchasedate" name="purchase_date" required>

  </div><br><br>
  <div>
    <label for="expirydate">* Expiry Date</label>
    <input type="date" placeholder="mm-dd-yyyy" value=""
    min="11-01-2020" max="12-31-2050" id="expirydate" name="expiry_date" required>

  </div><br><br>
  <div>
    <label for="photo">Attach photo</label>
    <input type"file" id="photo" name="attach_photo" accept="image/png, image/jpeg"></input>
   </div><br><br>

  <div class="button">
  <input id="saveProduct" type="submit" name="commit" value="Save">
  </div>
</form>
`;
