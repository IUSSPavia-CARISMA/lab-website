---
layout: page
title: Research Areas
permalink: /research/
---

<div class="research-grid">
  {% for project in site.research %}
  <article class="research-card">
    <div class="research-icon">{{ project.icon | default: "🔬" }}</div>
    <h3 class="research-title">{{ project.title }}</h3>
    <p class="research-excerpt">{{ project.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ project.url }}" class="research-link">Learn more →</a>
  </article>
  {% endfor %}
</div>
