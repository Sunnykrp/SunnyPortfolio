# Sunny Kumar - Portfolio Website

A modern, professional portfolio website showcasing my skills as a **Full Stack MERN Developer**. Built with the latest technologies and optimized for both freelance opportunities and full-time positions.

🌐 **Live Demo:** [sunnykumar.dev](https://sunnykumar.dev)

---

## 🚀 Tech Stack

- **React 18.3** - Latest React with concurrent features
- **Vite 6.0.5** - Next-generation frontend tooling  
- **Framer Motion 12.34** - Professional animations
- **React Router v7** - Client-side routing
- **Material-UI v6** - Modern React UI framework
- **Styled Components** - CSS-in-JS styling
- **EmailJS** - Contact form integration
- **ESLint 9** - Modern linting with flat config

---

## ✨ Features

✅ **SEO Optimized** - Complete meta tags for social sharing  
✅ **Responsive Design** - Mobile-first approach for all devices  
✅ **Professional Animations** - Smooth scroll animations with Framer Motion  
✅ **Services Showcase** - 6 service cards with category badges  
✅ **Skills Section** - 31+ technologies across 5 categories  
✅ **Timeline Experience** - Center-aligned timeline with alternating cards  
✅ **Project Portfolio** - Filterable project showcase  
✅ **Contact Form** - Working email integration  
✅ **Dark Theme** - Modern purple/blue gradient design  
✅ **Performance Optimized** - Code splitting & lazy loading  
✅ **Zero Vulnerabilities** - Clean, secure codebase

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Sunnykrp/portfolio

# Navigate to project directory
cd SunnyPortfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🛠️ Development

The development server runs at `http://localhost:5173` with Hot Module Replacement (HMR) enabled for instant updates.

---

## 📂 Project Structure

```
SunnyPortfolio/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HeroSection/     # Landing section with stats
│   │   ├── Services/        # Service offerings grid
│   │   ├── Skills/          # Tech skills showcase
│   │   ├── Experience/      # Professional timeline
│   │   ├── Projects/        # Portfolio projects
│   │   ├── Contact/         # Contact form
│   │   ├── Footer/          # Social links
│   │   └── Navbar/          # Navigation
│   ├── data/
│   │   ├── constants.js     # Bio, skills, projects data
│   │   ├── experiences.js   # Work experience
│   │   └── services.js      # Service offerings
│   ├── utils/
│   │   └── Themes.js        # Theme configuration
│   └── App.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🎨 Customization

### Update Personal Info
Edit `src/data/constants.js`:
```javascript
export const Bio = {
  name: "Your Name",
  roles: ["Your Role"],
  description: "Your bio...",
  github: "your-github-url",
  linkedin: "your-linkedin-url",
  // ...
};
```

### Add Projects
Update projects array in `src/data/constants.js`

### Modify Services
Edit `src/data/services.js` to change service offerings

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

---

## 📧 Contact Form Setup

The contact form uses **EmailJS**. To set up:

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update in `src/components/Contact/index.jsx`:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
   ```

---

## 🔍 SEO Configuration

Update meta tags in `index.html`:
- Site title and description
- Open Graph tags for social sharing
- Twitter cards
- Update URLs after deployment

Update `sitemap.xml` with your deployed URL.

---

## 📱 Features Breakdown

### Hero Section
- Professional headline
- Tech stack display
- Call-to-action buttons (Contact, Resume, Projects)
- Stats showcase (50+ projects, 3+ years)
- Social links

### Services Section  
- 6 service cards with animations
- Color-coded category badges
- Tech icons
- Modal details on "Learn More"

### Skills Section
- 5 categories (Frontend, Backend, Database, DevOps, Tools)
- 31+ technologies
- Hover animations
- Professional badge styling

### Experience Section
- Center timeline design
- Alternating card layout
- Date badges
- Skill tags
- Bullet-point responsibilities

### Projects Section
- Filterable by category
- Live demo links
- GitHub repository links
- Technology tags

---

## 🎯 Built For

✅ Freelance client acquisition  
✅ Full-time job applications  
✅ Professional networking  
✅ Portfolio showcase  

---

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🔒 Zero vulnerabilities
- 📦 Optimized bundle size
- 🚀 Fast load times

---

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

---

## 👨‍💻 Author

**Sunny Kumar**  
Full Stack MERN Developer  

- 💼 [LinkedIn](https://www.linkedin.com/in/sunny-kumar-307a78191/)
- 🐙 [GitHub](https://github.com/Sunnykrp)
- 🐦 [Twitter](https://twitter.com/sunnykrp3)
- 📧 [Email](mailto:sunnykrp3@gmail.com)

---

## 🙏 Acknowledgments

Built with modern React best practices and inspired by top developer portfolios.

---

**⭐ If you found this portfolio helpful, please consider giving it a star!**

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── Navbar/
│   ├── HeroSection/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Education/
│   ├── Contact/
│   └── Footer/
├── data/            # Static data and constants
├── themes/          # Theme configuration
├── utils/           # Utility functions
├── App.jsx          # Main App component
└── main.jsx         # Entry point
```

## 🎨 Customization

1. Update personal information in `src/data/`
2. Modify theme colors in `src/themes/`
3. Add/edit projects in `src/data/constants.js`
4. Customize components in `src/components/`

## 📄 Build Configuration

- **Code Splitting**: Automatic chunking for optimal loading
- **Tree Shaking**: Removes unused code
- **Minification**: Production builds are fully optimized
- **Source Maps**: Disabled in production for security

## 🔧 Environment Variables

Create a `.env` file in the root directory for EmailJS configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Recent Updates

See [UPGRADE_SUMMARY.md](./UPGRADE_SUMMARY.md) for details on the latest upgrade to Vite 6 and modern dependencies.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and Vite
