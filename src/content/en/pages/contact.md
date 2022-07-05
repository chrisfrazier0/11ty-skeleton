---
title: Contact
css: ['forms.css']
---

<form class="contact" method="post">
    <fieldset>
        <input name="name" placeholder="Your name" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
        <input name="email" placeholder="Your Email Address" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
        <input name="phone" placeholder="Your Phone Number" type="tel" tabindex="3" required>
    </fieldset>
    <fieldset>
        <input name="site" placeholder="Your Web Site (start with https://)" type="url" tabindex="4" required>
    </fieldset>
    <fieldset>
        <textarea name="message" placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
        <button name="submit" type="submit">Submit</button>
    </fieldset>
</form>
