# Ziyani Mouad - Full-Stack Developer Portfolio

A premium, modern, and professional portfolio website built with HTML5, TailwindCSS, and Vanilla JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern Animations**: Smooth scroll, particle effects, typing animation, and AOS scroll reveals
- **Professional Dark Theme**: Clean, minimal design with red gradient accent colors
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Performance Optimized**: Lightweight code with 60fps animations
- **Contact Form**: Functional contact form with Formspree integration

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure and accessibility
- **TailwindCSS**: Utility-first CSS framework for styling
- **Vanilla JavaScript**: Core functionality and interactions
- **Font Awesome**: Icon library for UI elements
- **AOS**: Animate On Scroll library for scroll animations
- **Typed.js**: Typing animation for hero section
- **Particles.js**: Interactive particle background
- **Formspree**: Contact form handling

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles and animations
├── js/
│   ├── main.js         # Core JavaScript functionality
│   └── animations.js   # Animation libraries and effects
├── img/                # Project and profile images
├── assets/
│   └── README.md       # Asset guidelines
└── README.md           # This file
```

## 🎨 Design Principles

### Mobile-First Responsive Design
- **Breakpoints**: 
  - Mobile: default (0px+)
  - Small: sm (640px+)
  - Medium: md (768px+)
  - Large: lg (1024px+)
  - Extra Large: xl (1280px+)

### Layout Rules
- **Containers**: `max-w-6xl` or `max-w-7xl` with `mx-auto`
- **Padding**: `px-4 sm:px-6 lg:px-8`
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Images**: `w-full h-auto object-cover`
- **Sections**: Consistent `py-16 lg:py-24` spacing

### Color Scheme
- **Background**: `#0B0F19` (Deep dark)
- **Sections**: `#111827` (Slightly lighter)
- **Cards**: `#1F2937` (Medium dark)
- **Accent**: Red gradient `#7f1d1d → #b91c1c`
- **Text**: White and gray variations

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Text editor (for customization)

### Installation
1. Clone or download the repository
2. Add your images to the `img/` folder:
   - `mouad-pic.png` - Profile picture
   - `valorunex.png` - Project 1 screenshot
   - `bankly.png` - Project 2 screenshot
   - `minerva.png` - Project 3 screenshot
3. Open `index.html` in your browser

### Customization

#### Personal Information
Edit the following in `index.html`:
- Name and title in hero section
- Contact information in about section
- Email in contact form and footer
- Social media links

#### Skills Section
Update the skill ratings by modifying the star icons in the skills section:
- `fas fa-star` - Filled star (proficient)
- `far fa-star` - Empty star (learning)

#### Projects Section
Replace project details:
- Image paths in `img/` folder
- Project titles and descriptions
- Technology tags
- Live demo and GitHub links

#### Contact Form
Update the Formspree endpoint in the form action:
```html
<form action="https://formspree.io/f/your-form-id" method="post">
```

## 📱 Responsive Features

### Mobile (< 640px)
- Stacked layout
- Hamburger menu
- Full-width buttons
- Single column grids
- Touch-friendly interactions

### Tablet (640px - 1024px)
- Two-column grids
- Horizontal navigation
- Optimized spacing
- Improved typography

### Desktop (> 1024px)
- Three-column grids
- Hover effects
- Enhanced animations
- Optimized layouts

## ⚡ Performance Features

### Optimization Techniques
- **Lazy Loading**: Images load as needed
- **Throttled Events**: Scroll and resize events are throttled
- **Reduced Animations**: Fewer particles on mobile
- **GPU Acceleration**: Hardware-accelerated animations
- **Minimal Dependencies**: Lightweight libraries only

### Animation Performance
- **60fps Target**: Optimized for smooth animations
- **Reduced Motion**: Respects user preferences
- **Mobile Optimization**: Reduced effects on mobile devices
- **Native Scrolling**: Uses browser's smooth scroll

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Safari**: 12+
- **Chrome Mobile**: 60+

## 📧 Contact Form

The contact form uses Formspree for handling submissions:
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace the form ID in `index.html`
4. Customize confirmation messages in `js/main.js`

## 🎯 SEO Optimization

### Meta Tags
- Title and description tags
- Keywords for search engines
- Author information
- Open Graph tags for social sharing

### Semantic HTML
- Proper heading hierarchy
- Semantic HTML5 elements
- Alt text for images
- Accessible navigation

## 🚀 Deployment

### Static Hosting
Compatible with any static hosting service:
- **Netlify**: Drag and drop deployment
- **Vercel**: Import from GitHub
- **GitHub Pages**: Free hosting for repositories
- **Surge.sh**: Simple CLI deployment
- **Firebase Hosting**: Google's hosting service

### Deployment Steps
1. Push code to GitHub repository
2. Connect repository to hosting service
3. Configure custom domain (optional)
4. Enable HTTPS (recommended)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ziyani Mouad**
- Full-Stack Developer
- YouCode Student
- Oujda, Morocco
- Email: contact@mouadziyani.com
- Website: mouadziyani.com

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: contact@mouadziyani.com
- GitHub: https://github.com/MOEUAED
- LinkedIn: https://www.linkedin.com/in/mouad-ziyani/

---

**Built with ❤️ and lots of ☕**
