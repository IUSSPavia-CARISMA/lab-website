# CARISMA Lab Website Template

> Open source website template for the **CARISMA Centre** — Climate Change Impact Studies for Risk Management — at [IUSS Pavia](https://www.iusspavia.it).

---

## 🌍 About

This is a free, open source website template designed for research labs and academic centres. It was built for the CARISMA Centre at IUSS Pavia, which focuses on climate change, risk assessment, and sustainable development research — but anyone is welcome to use, adapt, and build on it.

---

## Features

- Clean, modern design suited for academic and research contexts
- Easy to customise for any lab or research group
- Sections for team members, publications, projects, and news
- Mobile-friendly and accessible
- No proprietary dependencies — fully open source

---

##  Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/IUSSPavia-CARISMA/lab-website.git

# Navigate into the project
cd lab-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open your browser at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
lab-website/
├── public/          # Static assets (images, icons, fonts)
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page templates
│   └── styles/      # Global styles
├── content/         # Editable content (team, publications, news)
├── LICENSE
├── SECURITY.md
└── README.md
```

---

## Customisation

Most content can be edited without touching the code. Update the files in the `/content` directory to change:

- **Team members** — names, roles, photos, bios
- **Publications** — titles, authors, links
- **Projects** — descriptions, status, funding info
- **News & events** — announcements and highlights

For deeper customisation (colours, layout, branding), edit the files in `/src/styles`.

---

##  Contributing

Contributions are welcome! If you find a bug, have a feature request, or want to improve the template:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit (`git commit -m 'Add your feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please be respectful and constructive in all interactions.

---

## Security

If you discover a security vulnerability, please follow our responsible disclosure process outlined in [SECURITY.md](./SECURITY.md). Do not open a public issue.

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.

You are free to use, modify, and distribute this template for any purpose, including commercially. We kindly ask that you credit CARISMA / IUSS Pavia in your project documentation or website footer if you use this template as a base — it's not required, but it's appreciated. 🙏

---

##  About CARISMA

The **CARISMA Centre** (Climate Change Impact Studies for Risk Management) at IUSS Pavia coordinates multidisciplinary research on climate change and sustainable development. Its core areas include:

- Climate modelling and extreme event analysis
- Environmental and human impact assessment
- Risk management and policy
- Sustainable development economics and law

Learn more at [iusspavia.it](https://www.iusspavia.it/en/research/reasearch-centres/climate-change-impact-studies-risk-management-carisma).

---

*Made with ❤️ at IUSS Pavia*
