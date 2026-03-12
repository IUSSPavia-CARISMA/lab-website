---
layout: page
title: Research
permalink: /research/
---

<div class="prose-block people-section">
  <h2>Main Research Activities</h2>
  <ul class="plain-list">
    {% for item in site.lab.overview.activities %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>

<div class="prose-block people-section">
  <h2>Research Areas</h2>
  <div class="editorial-sections">
    {% for area in site.lab.activity_sections %}
    <article class="editorial-item">
      <h3>{{ area.title }}</h3>
      {% for paragraph in area.paragraphs %}
      <p>{{ paragraph }}</p>
      {% endfor %}
    </article>
    {% endfor %}
  </div>
</div>

<div class="prose-block people-section">
  <h2>Research Projects</h2>
  <ul class="project-list">
    {% for item in site.lab.projects %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>

<div class="prose-block people-section">
  <h2>Collaborations</h2>
  <div class="two-column-grid">
    <div class="info-panel">
      <h3>National</h3>
      <ul class="plain-list">
        {% for item in site.lab.collaborations.national %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
    <div class="info-panel">
      <h3>International</h3>
      <ul class="plain-list">
        {% for item in site.lab.collaborations.international %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
