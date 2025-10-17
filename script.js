// Pujax Music Website JS

document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a'); // Updated selector to target links in mobile menu
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Animate On Scroll Init
    if (window.AOS) {
        AOS.init({
            duration: 900,
            once: true,
        });
    }

    // Contact Form Submission with EmailJS and reCAPTCHA
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                // Get reCAPTCHA token (if available)
                let recaptchaToken = null;
                if (typeof grecaptcha !== 'undefined') {
                    try {
                        recaptchaToken = await grecaptcha.execute('6Le9jOsrAAAAAI-W498lWA1rxfQzmos_deo4w3V-', {action: 'contact_form'});
                        console.log('reCAPTCHA token obtained');
                    } catch (recaptchaError) {
                        console.warn('reCAPTCHA failed, proceeding without it:', recaptchaError);
                    }
                }
                
                // Add reCAPTCHA token to form data if available
                const submissionData = { ...data };
                if (recaptchaToken) {
                    submissionData['g-recaptcha-response'] = recaptchaToken;
                }
                
                // Method 1: Using Formspree (free service for static sites)
                // Current form ID: mwpraqkd
                console.log('Attempting to send via Formspree...');
                const response = await fetch('https://formspree.io/f/mwpraqkd', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submissionData)
                });
                
                console.log('Formspree response status:', response.status);
                
                if (response.ok) {
                    // Success
                    showNotification('✅ Message sent successfully! Pooya will get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    const errorText = await response.text();
                    console.log('Formspree error:', errorText);
                    throw new Error(`Formspree failed: ${response.status}`);
                }
            } catch (error) {
                console.error('Error sending message:', error);
                
                // Always use fallback for now until Formspree is properly set up
                // Fallback: Open email client
                // Email address for Pooya
                const emailAddress = 'pujaxmusic@gmail.com';
                const subject = encodeURIComponent(`${data.subject} - Message from ${data.name}`);
                const body = encodeURIComponent(`
From: ${data.name} (${data.email})
Subject: ${data.subject}

Message:
${data.message}

--
Sent via pujaxmusic.com contact form
                `.trim());
                
                const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
                
                // Try to open email client
                const opened = window.open(mailtoLink, '_blank');
                
                if (!opened || opened.closed || typeof opened.closed == 'undefined') {
                    // If popup was blocked, show copy-to-clipboard option
                    showEmailDetails(data, emailAddress);
                } else {
                    showNotification('📧 Opening your email client to send the message...', 'info');
                }
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

// Show notification to user
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full opacity-0`;
    
    // Set colors based on type
    if (type === 'success') {
        notification.classList.add('bg-green-600', 'text-white');
    } else if (type === 'error') {
        notification.classList.add('bg-red-600', 'text-white');
    } else {
        notification.classList.add('bg-blue-600', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span class="text-sm font-medium">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-3 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full', 'opacity-0');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Show email details if mailto doesn't work
function showEmailDetails(data, emailAddress) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-primary rounded-xl p-6 max-w-md w-full shadow-2xl">
            <h3 class="text-xl font-title text-accent mb-4">Send Email Manually</h3>
            <p class="text-muted mb-4">Please copy this information and send an email manually:</p>
            
            <div class="space-y-3 text-sm">
                <div>
                    <label class="text-accent font-medium">To:</label>
                    <div class="bg-secondary p-2 rounded text-text">${emailAddress}</div>
                </div>
                <div>
                    <label class="text-accent font-medium">Subject:</label>
                    <div class="bg-secondary p-2 rounded text-text">${data.subject} - Message from ${data.name}</div>
                </div>
                <div>
                    <label class="text-accent font-medium">Message:</label>
                    <div class="bg-secondary p-2 rounded text-text h-32 overflow-y-auto">
From: ${data.name} (${data.email})
Subject: ${data.subject}

Message:
${data.message}

--
Sent via pujaxmusic.com contact form
                    </div>
                </div>
            </div>
            
            <div class="flex gap-3 mt-6">
                <button onclick="copyEmailInfo('${emailAddress}', '${data.subject} - Message from ${data.name}', \`From: ${data.name} (${data.email})\\nSubject: ${data.subject}\\n\\nMessage:\\n${data.message}\\n\\n--\\nSent via pujaxmusic.com contact form\`)" 
                        class="flex-1 bg-accent hover:bg-green-400 text-primary px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Copy All
                </button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
                    Close
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Copy email information to clipboard
function copyEmailInfo(email, subject, message) {
    const textToCopy = `To: ${email}\nSubject: ${subject}\n\n${message}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showNotification('📋 Email details copied to clipboard!', 'success');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('📋 Email details copied to clipboard!', 'success');
    }
}

