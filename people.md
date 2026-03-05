---
layout: page
title: Our Team
permalink: /people/
---

<h2>Principal Investigators</h2>
<div class="team-grid">
  {% assign pis = site.people | where: "role", "PI" %}
  {% for person in pis %}
  <article class="team-card">
    <div class="team-photo">
      {% if person.photo and person.photo != "" %}
      <img src="{{ person.photo | relative_url }}" alt="{{ person.name }}">
      {% else %}
      <div class="team-photo-placeholder">{{ person.name | slice: 0 }}</div>
      {% endif %}
    </div>
    <div class="team-info">
      <h3 class="team-name">{{ person.name }}</h3>
      <p class="team-role">{{ person.position }}</p>
      <a href="{{ person.url | relative_url }}" class="team-link">View Profile →</a>
    </div>
  </article>
  {% endfor %}
</div>

<h2>Researchers</h2>
<div class="team-grid">
  {% assign researchers = site.people | where: "role", "Researcher" %}
  {% for person in researchers %}
  <article class="team-card">
    <div class="team-photo">
      {% if person.photo and person.photo != "" %}
      <img src="{{ person.photo | relative_url }}" alt="{{ person.name }}">
      {% else %}
      <div class="team-photo-placeholder">{{ person.name | slice: 0 }}</div>
      {% endif %}
    </div>
    <div class="team-info">
      <h3 class="team-name">{{ person.name }}</h3>
      <p class="team-role">{{ person.position }}</p>
      <a href="{{ person.url | relative_url }}" class="team-link">View Profile →</a>
    </div>
  </article>
  {% endfor %}
</div>

<h2>PhD Students</h2>
<div class="team-grid">
  {% assign phds = site.people | where: "role", "PhD Student" %}
  {% for person in phds %}
  <article class="team-card">
    <div class="team-photo">
      {% if person.photo and person.photo != "" %}
      <img src="{{ person.photo | relative_url }}" alt="{{ person.name }}">
      {% else %}
      <div class="team-photo-placeholder">{{ person.name | slice: 0 }}</div>
      {% endif %}
    </div>
    <div class="team-info">
      <h3 class="team-name">{{ person.name }}</h3>
      <p class="team-role">{{ person.position }}</p>
      <a href="{{ person.url | relative_url }}" class="team-link">View Profile →</a>
    </div>
  </article>
  {% endfor %}
</div>
