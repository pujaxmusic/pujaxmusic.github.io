# Pujax Music Website

A modern, responsive website for electronic music producer Pujax (Pooya), featuring clean design and professional presentation.

## 🎵 Features

- **Professional Design**: Clean, modern aesthetic focused on music and artistry
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Contact Form**: Integrated contact system with reCAPTCHA protection
- **Music Showcase**: Dedicated sections for releases and achievements
- **SEO Optimized**: Proper meta tags and social sharing support
- **Performance Optimized**: Fast loading with streamlined codebase

## � Website Sections

- **Hero Section**: Eye-catching introduction with call-to-action
- **About**: Artist biography with years of experience and latest releases
- **Music**: Showcase of featured releases and streaming links
- **Contact**: Professional contact form for collaborations and bookings

## 🚀 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

2. **Custom Domain Setup** (pujaxmusic.com):
   - Add `CNAME` file with your domain
   - Configure DNS settings with your domain provider:
     ```
     Type: CNAME
     Name: www
     Value: pujaxmusic.github.io
     ```

3. **SSL Certificate**: GitHub Pages automatically provides HTTPS

### File Structure

```
├── index.html              # Main website file with Tailwind CSS
├── script.js               # Contact form and interactive functionality
├── favicon*.svg            # Brand favicons (16x16, 192x192, main)
├── CNAME                   # Custom domain configuration
├── CONTACT_FORM_SETUP.md   # Contact form setup documentation
├── styles.css.backup       # Backup of original custom styles
└── README.md               # Project documentation
```

## 🎨 Customization

### Design Framework
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Dark Theme**: Professional dark color scheme
- **Mobile-First**: Responsive breakpoints for all device sizes

### Key Features
- **Contact Form**: Formspree integration with reCAPTCHA v3 protection
- **Hamburger Menu**: Mobile navigation with smooth animations
- **Social Links**: Direct integration with streaming platforms
- **Achievement Display**: Clean presentation of career milestones

### Updating Content

1. **Music Releases**: Edit the music section in `index.html`
2. **About Section**: Update biography and achievements
3. **Contact Form**: Configured with Formspree (see CONTACT_FORM_SETUP.md)
4. **Social Links**: Update streaming platform URLs

## 📈 Growing Your Audience

The website is designed to help grow your listener base:

1. **Professional Presence**: Clean, modern design builds credibility
2. **Direct Streaming Links**: Easy access to Spotify and other platforms  
3. **SEO Optimization**: Helps fans discover your music through search
4. **Contact Integration**: Enables collaboration and booking opportunities
5. **Mobile Experience**: Reaches fans on all devices seamlessly

## 🛠️ Development

### Local Development

```bash
# Serve locally for testing
python -m http.server 8000
# or use any static file server
npx serve .
```

### Making Updates

1. **Content Changes**: Edit `index.html` directly
2. **Styling**: Uses Tailwind CSS classes (no custom CSS compilation needed)
3. **Testing**: Use browser developer tools for responsive testing
4. **Deployment**: Push to GitHub main branch (auto-deploys via GitHub Pages)

## 🌐 Live Website

- **URL**: [pujaxmusic.com](https://pujaxmusic.com)
- **GitHub Pages**: [pujaxmusic.github.io](https://pujaxmusic.github.io)
- **Status**: ✅ Live and optimized

## 📞 Support

For technical support or customization requests, contact the development team.
The website is built with modern web standards and requires minimal maintenance. All functionality is client-side with reliable third-party services for contact form handling.

---

Made with ❤️ for electronic music. Keep creating those beats! 🎧🔥

Website developed with 💙 by [Milad Nayebi](https://miladnayebi.com)