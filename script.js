
const CONTACT_EMAIL = 'REPLACE_WITH_RIT_EMAIL';

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contact-form');
const emailLink = document.getElementById('contact-email-link');

if (
CONTACT_EMAIL !== 'REPLACE_WITH_RIT_EMAIL' &&
emailLink
) {
emailLink.href = `mailto:${CONTACT_EMAIL}`;
}

if (!form) return;

form.addEventListener('submit', event => {
event.preventDefault();

if (!form.reportValidity()) return;

if (CONTACT_EMAIL === 'REPLACE_WITH_RIT_EMAIL') {
alert(
'Please set the RIT contact email in script.js first.'
);
return;
}

const name = document
.getElementById('visitor-name')
.value.trim();

const email = document
.getElementById('visitor-email')
.value.trim();

const message = document
.getElementById('visitor-message')
.value.trim();

const subject = encodeURIComponent(
'Message from Types of Birds website'
);

const body = encodeURIComponent(
`From: ${name}\nReply-to: ${email}\n\n${message}`
);

window.location.href =
`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
});
