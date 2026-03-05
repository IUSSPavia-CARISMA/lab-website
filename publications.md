---
layout: page
title: Publications
permalink: /publications/
---

<div class="publication-list content-block">
  {% assign sorted_pubs = site.publications | sort: 'year' | reverse %}
  {% for pub in sorted_pubs %}
    <div class="publication-item">
      <h3 class="publication-title">{{ pub.title }}</h3>
      <p class="publication-authors">{{ pub.authors }}</p>
      <p class="publication-venue">
        <span class="publication-journal">{{ pub.journal }}</span>
        <span class="publication-year">({{ pub.year }})</span>
      </p>
      {% if pub.doi %}
        <a href="https://doi.org/{{ pub.doi }}" class="publication-doi" target="_blank">DOI: {{ pub.doi }}</a>
      {% endif %}
    </div>
  {% endfor %}
</div>
