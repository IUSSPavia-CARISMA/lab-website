---
layout: page
title: About us
permalink: /about/
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<div class="prose-block">
  <h2>{{ site.lab.full_name }}</h2>
  {% for paragraph in site.lab.overview.intro %}
  <p>{{ paragraph }}</p>
  {% endfor %}
</div>

<div class="prose-block">
  <h2>Our Objectives</h2>
  <ul class="plain-list">
    {% for item in site.lab.overview.objectives %}
    <li>{{ item | markdownify }}</li>
    {% endfor %}
  </ul>
</div>

<div class="prose-block">
  <h2>Our Team Around the World</h2>
  <p>CARISMA brings together researchers from diverse backgrounds and nationalities, fostering a truly international research environment.</p>
  <div id="nationality-map"></div>
  <div id="nationality-legend"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Country coordinates (approximate centers)
  const countryCoords = {
    'Italy': [42.5, 12.5],
    'Greece': [39.0, 22.0],
    'Mexico': [23.6, -102.5],
    'Egypt': [26.8, 30.8],
    'Algeria': [28.0, 3.0],
    'Brazil': [-14.2, -51.9],
    'Croatia': [45.1, 15.2],
    'India': [20.6, 79.0],
    'Pakistan': [30.4, 69.3],
    'Viet Nam': [14.1, 108.3],
    'Kenya': [-1.3, 36.8],
    'Nigeria': [9.1, 8.7],
    'Turkiye': [39.0, 35.2],
    'UK': [55.4, -3.4]
  };

  // Parse CSV and count nationalities
  fetch('{{ site.baseurl }}/assets/carisma_people.csv')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const nationalities = {};

      // Skip header and empty rows
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(';');
        if (cols[0] && cols[0].trim() !== '' && cols[7]) {
          const country = cols[7].trim();
          if (country && country !== '') {
            nationalities[country] = (nationalities[country] || 0) + 1;
          }
        }
      }

      // Initialize map
      const map = L.map('nationality-map').setView([30, 10], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(map);

      // Add markers for each country
      let legendHtml = '<div class="nationality-stats"><h4>Team Members by Country</h4><ul>';
      const sortedCountries = Object.entries(nationalities).sort((a, b) => b[1] - a[1]);

      sortedCountries.forEach(([country, count]) => {
        if (countryCoords[country]) {
          const radius = Math.max(8, Math.min(25, count * 2 + 6));

          const marker = L.circleMarker(countryCoords[country], {
            radius: radius,
            fillColor: '#2563eb',
            color: '#1e40af',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
          }).addTo(map);

          marker.bindPopup(`<strong>${country}</strong><br>${count} team member${count > 1 ? 's' : ''}`);
        }
        legendHtml += `<li><span class="country-name">${country}</span><span class="country-count">${count}</span></li>`;
      });

      const total = Object.values(nationalities).reduce((a, b) => a + b, 0);
      legendHtml += `</ul><p class="total-count"><strong>Total: ${total} members from ${Object.keys(nationalities).length} countries</strong></p></div>`;
      document.getElementById('nationality-legend').innerHTML = legendHtml;
    });
});
</script>
