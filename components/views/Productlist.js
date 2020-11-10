export default st => `
<section id="producttable">
<div>
<button id="addproduct" type="button">Add Product</button>
</div>
<div>
<h3>Product list</h3>
</div>
<div>
<table>
<thead>
<tr>
<th> Manufacturer </th>
<th> Product Name </th>
<th> Model </th>
<th> Date of Purchase </th>
<th> Date of Expiry </th>
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
<td> ${product.dateOfPurchase}  </td>
<td> ${product.expiryDate}  </td>
</tr>
`
  )
  .join("")}
</tbody>
</table>
</div>
</section>
`;
