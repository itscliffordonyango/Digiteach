import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import parse from 'html-react-parser';
import './site.css';
import home from './pages/home.html?raw';
import about from './pages/about.html?raw';
import digiteach from './pages/digiteach.html?raw';
import contact from './pages/contact.html?raw';
import getInvolved from './pages/get-involved.html?raw';

const pages = {
  '/': { source: home, title: 'Digital Confidence Initiative' },
  '/index.html': { source: home, title: 'Digital Confidence Initiative' },
  '/about.html': { source: about, title: 'About Us | Digital Confidence Initiative' },
  '/digiteach.html': { source: digiteach, title: 'DigiTeach | Digital Confidence Initiative' },
  '/contact.html': { source: contact, title: 'Contact | Digital Confidence Initiative' },
  '/getInvolved.html': { source: getInvolved, title: 'Get Involved | Digital Confidence Initiative' },
};

function getPageMarkup(documentSource) {
  const body = documentSource.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  return body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
}

function FormHandler() {
  useEffect(() => {
    const root = document.getElementById('root');
    const handleSubmit = async (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !['contactForm', 'getInvolvedForm'].includes(form.id)) return;
      event.preventDefault();

      let feedback = form.querySelector('.form-feedback');
      if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'form-feedback';
        form.appendChild(feedback);
      }
      const data = {};
      let valid = true;
      form.querySelectorAll('input, select, textarea').forEach((input) => {
        data[input.name] = input.type === 'checkbox' ? (input.checked ? 'Yes' : 'No') : input.value.trim();
        const missing = input.required && !data[input.name];
        input.classList.toggle('input-error', missing);
        if (missing) valid = false;
      });
      if (!valid) {
        feedback.textContent = 'Please fill in all required fields.';
        feedback.className = 'form-feedback error';
        feedback.style.display = 'block';
        return;
      }

      const button = form.querySelector("button[type='submit']");
      const originalLabel = button?.textContent ?? '';
      if (button) { button.disabled = true; button.textContent = 'Sending...'; }
      try {
        await fetch('https://script.google.com/macros/s/AKfycbzKmlDjt5P5euUXhNPfguNuu--sIFKMrPIxpkMZqbQkzmlzBZkSvRHMXLvQU4gAmlEF/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(data),
        });
        feedback.textContent = 'Thank you! Your message has been sent successfully.';
        feedback.className = 'form-feedback success';
        feedback.style.display = 'block';
        form.reset();
      } catch {
        feedback.textContent = 'Sorry, something went wrong. Please try again.';
        feedback.className = 'form-feedback error';
        feedback.style.display = 'block';
      } finally {
        if (button) { button.disabled = false; button.textContent = originalLabel; }
      }
    };
    root.addEventListener('submit', handleSubmit);
    return () => root.removeEventListener('submit', handleSubmit);
  }, []);
  return null;
}

function App() {
  const page = pages[window.location.pathname] ?? pages['/'];
  useEffect(() => { document.title = page.title; }, [page.title]);
  return (
    <>
      <main>{parse(getPageMarkup(page.source))}</main>
      <FormHandler />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
