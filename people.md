---
layout: page
title: People
permalink: /people/
---

<div class="prose-block people-section">
  <h2>Head of Research Centre</h2>
  {% assign head = site.people | where: "slug", "marco-gaetani" | first %}
  {% if head %}
  <div class="people-grid">
    <article class="person-card">
      <a href="{{ head.url | relative_url }}" class="person-card-link">
        <div class="person-card-photo">
          {% if head.photo and head.photo != "" %}
            <img src="{{ head.photo | relative_url }}" alt="{{ head.name }}">
          {% else %}
            <div class="person-photo-placeholder">{{ head.name | slice: 0 }}</div>
          {% endif %}
        </div>
        <div class="person-card-info">
          <h3 class="person-card-name">{{ head.name }}</h3>
          <p class="person-card-position">{{ head.position }}</p>
        </div>
      </a>
      <div class="person-card-links">
        {% if head.email and head.email != "" %}
          <a href="mailto:{{ head.email }}" title="Email" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        {% endif %}
        {% if head.website and head.website != "" %}
          <a href="{{ head.website }}" target="_blank" rel="noreferrer" title="Personal Website" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </a>
        {% endif %}
        {% if head.researchgate and head.researchgate != "" %}
          <a href="{{ head.researchgate }}" target="_blank" rel="noreferrer" title="ResearchGate" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 0C5.376 0 .002 5.373.002 12c0 6.628 5.374 12 11.999 12 6.626 0 12.001-5.372 12.001-12 0-6.627-5.375-12-12.001-12zm5.092 14.656c-.163.155-.748.692-2.503 1.85-1.963 1.295-3.467 1.486-4.542 1.486-1.074 0-2.043-.34-2.527-1.052-.484-.712-.53-1.633-.053-2.685.478-1.052 1.485-2.036 2.944-2.877.33-.19.702-.395 1.112-.608-.217-.403-.445-.846-.673-1.33-.673-1.426-1.159-2.953-1.159-4.004 0-1.05.486-1.98 1.458-2.77.973-.79 2.431-1.186 4.374-1.186 1.944 0 3.402.396 4.374 1.187.973.79 1.459 1.719 1.459 2.77 0 1.05-.486 2.577-1.16 4.003-.228.484-.456.927-.673 1.33.41.213.783.418 1.113.608 1.458.841 2.466 1.825 2.943 2.877.478 1.052.431 1.973-.052 2.685-.484.712-1.454 1.052-2.528 1.052-1.074 0-2.578-.191-4.541-1.486-1.755-1.158-2.34-1.695-2.503-1.85z"/></svg>
          </a>
        {% endif %}
        {% if head.linkedin and head.linkedin != "" %}
          <a href="{{ head.linkedin }}" target="_blank" rel="noreferrer" title="LinkedIn" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        {% endif %}
        {% if head.iuss_page and head.iuss_page != "" %}
          <a href="{{ head.iuss_page }}" target="_blank" rel="noreferrer" title="IUSS Page" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          </a>
        {% endif %}
      </div>
    </article>
  </div>
  {% endif %}
</div>

<div class="prose-block people-section">
  <h2>Team Members</h2>
  <div class="people-grid">
    {% assign all_members = site.people | where_exp: "person", "person.slug != 'marco-gaetani'" | sort: "name" %}
    {% for person in all_members %}
    <article class="person-card">
      <a href="{{ person.url | relative_url }}" class="person-card-link">
        <div class="person-card-photo">
          {% if person.photo and person.photo != "" %}
            <img src="{{ person.photo | relative_url }}" alt="{{ person.name }}">
          {% else %}
            <div class="person-photo-placeholder">{{ person.name | slice: 0 }}</div>
          {% endif %}
        </div>
        <div class="person-card-info">
          <h3 class="person-card-name">{{ person.name }}</h3>
          <p class="person-card-position">{{ person.position }}</p>
        </div>
      </a>
      <div class="person-card-links">
        {% if person.email and person.email != "" %}
          <a href="mailto:{{ person.email }}" title="Email" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        {% endif %}
        {% if person.website and person.website != "" %}
          <a href="{{ person.website }}" target="_blank" rel="noreferrer" title="Personal Website" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </a>
        {% endif %}
        {% if person.researchgate and person.researchgate != "" %}
          <a href="{{ person.researchgate }}" target="_blank" rel="noreferrer" title="ResearchGate" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 0C5.376 0 .002 5.373.002 12c0 6.628 5.374 12 11.999 12 6.626 0 12.001-5.372 12.001-12 0-6.627-5.375-12-12.001-12zm5.092 14.656c-.163.155-.748.692-2.503 1.85-1.963 1.295-3.467 1.486-4.542 1.486-1.074 0-2.043-.34-2.527-1.052-.484-.712-.53-1.633-.053-2.685.478-1.052 1.485-2.036 2.944-2.877.33-.19.702-.395 1.112-.608-.217-.403-.445-.846-.673-1.33-.673-1.426-1.159-2.953-1.159-4.004 0-1.05.486-1.98 1.458-2.77.973-.79 2.431-1.186 4.374-1.186 1.944 0 3.402.396 4.374 1.187.973.79 1.459 1.719 1.459 2.77 0 1.05-.486 2.577-1.16 4.003-.228.484-.456.927-.673 1.33.41.213.783.418 1.113.608 1.458.841 2.466 1.825 2.943 2.877.478 1.052.431 1.973-.052 2.685-.484.712-1.454 1.052-2.528 1.052-1.074 0-2.578-.191-4.541-1.486-1.755-1.158-2.34-1.695-2.503-1.85z"/></svg>
          </a>
        {% endif %}
        {% if person.linkedin and person.linkedin != "" %}
          <a href="{{ person.linkedin }}" target="_blank" rel="noreferrer" title="LinkedIn" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        {% endif %}
        {% if person.iuss_page and person.iuss_page != "" %}
          <a href="{{ person.iuss_page }}" target="_blank" rel="noreferrer" title="IUSS Page" class="person-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          </a>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</div>

<div class="prose-block people-section">
  <h2>Former Members</h2>
  <ul class="plain-list former-list">
    {% for person in site.lab.people.former_members %}
    <li>
      <span>{{ person.name }}</span>
    </li>
    {% endfor %}
  </ul>
</div>
