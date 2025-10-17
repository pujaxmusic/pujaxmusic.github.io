# 📧 Contact Form Setup Instructions for Pooya

## Current Status
✅ **Email Configured**: Messages will go to `pujaxmusic@gmail.com`
🔄 **Formspree Optional**: For automatic email delivery (recommended upgrade)
⚠️ **reCAPTCHA Setup Required**: To prevent spam (optional but recommended)

## What Happens Now
- Form shows a loading animation
- Opens visitor's email client with pre-filled message to `pujaxmusic@gmail.com`
- Visitor sends the email manually
- **You'll receive the messages in your Gmail inbox**
- **Basic spam protection** via Formspree

## Option 1: Formspree Setup (Recommended - FREE)

### Steps:
1. **Go to [formspree.io](https://formspree.io)**
2. **Sign up** with the email address where you want to receive messages
3. **Create a new form**
4. **Copy the form endpoint** (looks like `https://formspree.io/f/xabjklmn`)
5. **Update the code**:
   - Open `script.js`
   - Find line with `REPLACE_WITH_ACTUAL_FORM_ID`
   - Replace it with your form ID (just the part after `/f/`)

### Example:
```javascript
// Before
const response = await fetch('https://formspree.io/f/REPLACE_WITH_ACTUAL_FORM_ID', {

// After (if your form ID is xabjklmn)
const response = await fetch('https://formspree.io/f/xabjklmn', {
```

## Option 2: Update Email Address Only

If you just want the fallback email to work:

1. **Open `script.js`**
2. **Find this line**:
   ```javascript
   const emailAddress = 'pooya@pujaxmusic.com'; // Update this with Pooya's real email
   ```
3. **Replace with your actual email**:
   ```javascript
   const emailAddress = 'your.actual.email@gmail.com'; // Replace with your real email
   ```

## Option 3: Alternative Services

### EmailJS (More features)
- Go to [emailjs.com](https://emailjs.com)
- Free tier: 200 emails/month
- More customization options

### Netlify Forms (If using Netlify)
- Add `netlify` attribute to form
- Automatic spam protection

## Option 4: Add reCAPTCHA (Recommended for Spam Protection)

### Current Status
⚠️ **reCAPTCHA partially configured** - needs site key setup

### Setup Steps
1. **Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)**
2. **Create a new site** with these settings:
   - **Label**: Pujax Music Contact Form
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: `pujaxmusic.github.io` and `pujaxmusic.com`
3. **Copy the Site Key**
4. **Update the code**:
   - Open `index.html` 
   - Find `6LfYourSiteKey_REPLACE_THIS`
   - Replace with your actual site key
   - Open `script.js`
   - Find the same string and replace it there too

### Benefits
- ✅ **99% spam reduction**
- ✅ **Invisible to users** (no checkboxes)
- ✅ **Free for normal usage**
- ✅ **Works with Formspree**

## Recommended: Option 1 (Formspree)
- ✅ Free (1000 submissions/month)
- ✅ Spam protection included
- ✅ Email notifications
- ✅ Easy setup
- ✅ Works with GitHub Pages

## After Setup
1. Test the form by filling it out
2. Check your email for the message
3. Commit and push the changes to GitHub

---

**Need help?** The form currently works as a fallback (opens email client), but setting up Formspree will make it seamless for visitors.