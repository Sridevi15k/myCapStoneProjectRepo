import Toplinks from "../store/Toplinks";

export default toplinks => `
<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${Toplinks.map(
      link =>
        `<li><a id="Nav_${link.title}" href="${link.title}" data-navigo><i class="fa fa-fw ${link.icon}"></i> ${link.text}</a></li>`
    ).join("")}
  </ul>
  </nav>
  `;
