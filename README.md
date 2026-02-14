# Portfolio Website

A modern, responsive portfolio website built with **React 18.3** and **Vite 6**.

## 🚀 Tech Stack

- **React 18.3** - Latest React with concurrent features
- **Vite 6.0.5** - Next-generation frontend tooling
- **React Router v7** - Client-side routing
- **Material-UI v6** - Modern React UI framework
- **Styled Components** - CSS-in-JS styling
- **EmailJS** - Contact form integration
- **ESLint 9** - Modern linting with flat config

## ✨ Features

- Responsive design for all devices
- Modern UI with Material-UI components
- Smooth animations and transitions
- Project showcase with filtering
- Experience and education timeline
- Contact form with email integration
- Dark theme design
- Optimized build with code splitting
- Zero vulnerabilities

## 📦 Installation

```bash
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

## 🛠️ Development

The development server will automatically open your browser at `http://localhost:3000` (or the next available port if 3000 is in use).

Hot Module Replacement (HMR) is enabled for instant updates during development.

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
