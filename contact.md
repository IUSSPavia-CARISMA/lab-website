---
layout: page
title: Contact Us
permalink: /contact/
---

<div class="contact-info">
  <div class="contact-item">
    <h3>Email</h3>
    <p><a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a></p>
  </div>
  <div class="contact-item">
    <h3>Phone</h3>
    <p>{{ site.contact.phone }}</p>
  </div>
  <div class="contact-item">
    <h3>Address</h3>
    <address>
      {{ site.contact.address | newline_to_br }}
    </address>
  </div>
</div>
