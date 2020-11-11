export default () => `
<section id="Contact">
<h3>Contact Us<h3>
<hr>
<form id="formspree" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xwkwknaq" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required=""><br><br>
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email address" required=""><br><br>
    <label  for="message">Message</label><br><br>
    <textarea class="messagebox" rows="5" name="message" id="message" placeholder="Your message here" required=""></textarea><br><br>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset><br>
  <input type="submit" value="Submit">
</form>

<div> <i class="fas fa-phone-square">  Phone </i> </div>
20 WARRANTY<br><br>
<div> <a href="#"> <i class="far fa-envelope"> Email </i> </div>
warrantyreminder@gmail.com</a><br><br>
<div> <a href="#"> <i class="fab fa-facebook"> Facebook </i> </div>
Warranty Reminder</a><br><br>
<div> <a href="#"> <i class="fab fa-twitter"> Twitter </i> </div>
Warranty Reminder </a>
</section>
`;
