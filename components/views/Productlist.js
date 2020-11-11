var format = require('date-format');
export default st => `
<section id="producttable">
<div>
<button id="addproduct" type="button">Add Product</button>
</div>
<div>
<h3>Product list</h3>
</div>
<div>
<table id="customers" >
<thead>
<tr>
<th> Manufacturer </th>
<th> Product Name </th>
<th> Model </th>
<th> Date of Purchase </th>
<th> Date of Expiry </th>
<th colspan=2>&nbsp;</th>
</tr>
</thead>
<tbody>
${st.products
  .map(
    product => `
<tr>
<td> ${product.manufacturer} </td>
<td> ${product.productName} </td>
<td> ${product.modelNo}  </td>
<td> ${formatDate(product.dateOfPurchase)}  </td>
<td> ${formatDate(product.expiryDate)}  </td>
<td><a href="javascript://" onclick="editProduct('${product._id}')"><i class="fas fa-edit"></i></a></td>
<td><a href="javascript://" onclick="deleteProduct('${product._id}')"><i class="fas fa-trash-alt"></i></a></td>
</tr>
`
  )
  .join("")}
</tbody>
</table>
</div>
</section>
`;

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("-");
}
