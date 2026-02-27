{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Mobile nav\
const toggle = document.querySelector(".nav-toggle");\
const nav = document.querySelector("[data-nav]");\
if (toggle && nav) \{\
  toggle.addEventListener("click", () => \{\
    const open = nav.classList.toggle("open");\
    toggle.setAttribute("aria-expanded", open ? "true" : "false");\
  \});\
\}\
\
// Footer year\
const y = document.getElementById("year");\
if (y) y.textContent = new Date().getFullYear();\
\
// Subscribe form (demo)\
const subscribeForm = document.getElementById("subscribeForm");\
const subscribeMsg = document.getElementById("subscribeMsg");\
if (subscribeForm && subscribeMsg) \{\
  subscribeForm.addEventListener("submit", (e) => \{\
    e.preventDefault();\
    const formData = new FormData(subscribeForm);\
    const email = (formData.get("email") || "").toString().trim();\
    if (!email) return;\
\
    // Demo behavior (replace with Mailchimp/Klaviyo/etc)\
    subscribeMsg.textContent = `\uc0\u9989  You're on the list, $\{email\}. We'll notify you on the next drop.`;\
    subscribeForm.reset();\
  \});\
\}\
\
// Contact form (demo)\
const contactForm = document.getElementById("contactForm");\
const contactMsg = document.getElementById("contactMsg");\
if (contactForm && contactMsg) \{\
  contactForm.addEventListener("submit", (e) => \{\
    e.preventDefault();\
    const formData = new FormData(contactForm);\
    const name = (formData.get("name") || "").toString().trim();\
\
    // Demo behavior (replace with Formspree/Netlify Forms/etc)\
    contactMsg.textContent = `\uc0\u9989  Thanks$\{name ? `, $\{name\}` : ""\}! Message received. We'll reply soon.`;\
    contactForm.reset();\
  \});\
\}}