import Links from "../store/Links";

export default links => `
<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${Links.map(
      link =>
        `<li><a href="${link.title}" data-navigo><i class="fa fa-fw ${link.icon}"></i> ${link.text}</a></li>`
    ).join("")}
  </ul>
  </nav>
  `;

/*export default () => `
<nav id="Nav">
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#FAQS">FAQS</a></li>
        <li><a href="#Specifics">Specifics</a></li>
      </ul>
    </nav>
  `;*/

/*<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="bio.html">Bio</a></li>
      <li><a href= "gallery.html">Gallery</a></li>
      <li><a href="register.html">Register</a></li>
    </ul>
  </nav>*/
