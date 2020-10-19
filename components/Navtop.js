import Toplinks from "../store/Toplinks";

export default links => `
<nav class="topnav">
    <ul class="hidden--mobile nav-links">
    ${Toplinks.map(
      link =>
        `<li><a href="#${link.title}" data-navigo><i class="fa fa-fw ${link.icon}"></i> ${link.text}</a></li>`
    ).join("")}
  </ul>
  </nav>
  `;
