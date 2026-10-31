import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. FAST, NATIVE 60/120FPS SCROLL REVEALS
// (Lenis virtual lag removed for 100% instant native response like Mayar.id)
// ==========================================

// A. Hero Dashboard Entrance Animation (Instant load reveal, zero scroll dragging)
const heroMockup = document.querySelector('.hero-mockup-wrapper');
if (heroMockup) {
  gsap.from(heroMockup, {
    y: 24,
    opacity: 0,
    duration: 0.7,
    delay: 0.15,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// B. Section Headers Stagger Reveal
document.querySelectorAll('.section-header').forEach((header) => {
  const tag = header.querySelector('.section-tag');
  const title = header.querySelector('.section-title');
  const desc = header.querySelector('.section-description');
  const elements = [tag, title, desc].filter(Boolean);

  if (elements.length) {
    gsap.from(elements, {
      scrollTrigger: {
        trigger: header,
        start: 'top 92%',
        once: true
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'transform,opacity'
    });
  }
});

// C. Bento Services 4 Parallel Cards Reveal
const bentoCards = document.querySelectorAll('.bento-card');
if (bentoCards.length) {
  gsap.from(bentoCards, {
    scrollTrigger: {
      trigger: '.bento-grid',
      start: 'top 90%',
      once: true
    },
    y: 24,
    opacity: 0,
    duration: 0.55,
    stagger: 0.08,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// D. Benefit 6 Cards Cascade Reveal
const benefitCards = document.querySelectorAll('.benefit-card');
if (benefitCards.length) {
  gsap.from(benefitCards, {
    scrollTrigger: {
      trigger: '.benefit-grid',
      start: 'top 90%',
      once: true
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.06,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// E. Partnership 3 Scheme Cards Reveal
const partnerCards = document.querySelectorAll('.partner-model-card');
if (partnerCards.length) {
  gsap.from(partnerCards, {
    scrollTrigger: {
      trigger: '.partner-models-grid',
      start: 'top 90%',
      once: true
    },
    y: 24,
    opacity: 0,
    duration: 0.55,
    stagger: 0.08,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// F. Workflow Steps Cascade Reveal
const stepCards = document.querySelectorAll('.step-card');
if (stepCards.length) {
  gsap.from(stepCards, {
    scrollTrigger: {
      trigger: '.workflow-steps',
      start: 'top 92%',
      once: true
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.07,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// G. Testimonials Cards Reveal
const testCards = document.querySelectorAll('.testimonial-card');
if (testCards.length) {
  gsap.from(testCards, {
    scrollTrigger: {
      trigger: '.testimonial-grid',
      start: 'top 90%',
      once: true
    },
    y: 22,
    opacity: 0,
    duration: 0.55,
    stagger: 0.08,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// H. FAQ Accordion Items Cascade Reveal
const faqList = document.querySelectorAll('.faq-item');
if (faqList.length) {
  gsap.from(faqList, {
    scrollTrigger: {
      trigger: '.faq-wrap',
      start: 'top 92%',
      once: true
    },
    y: 18,
    opacity: 0,
    duration: 0.45,
    stagger: 0.06,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// I. High-Impact CTA Banner Reveal
const ctaBanner = document.querySelector('.cta-banner');
if (ctaBanner) {
  gsap.from(ctaBanner, {
    scrollTrigger: {
      trigger: ctaBanner,
      start: 'top 90%',
      once: true
    },
    y: 24,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });
}

// ==========================================
// 2. FAQ ACCORDION INTERACTIVITY
// ==========================================
faqList.forEach((item) => {
  const trigger = item.querySelector('.faq-trigger');
  if (trigger) {
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqList.forEach((f) => f.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
      ScrollTrigger.refresh();
    });
  }
});

// ==========================================
// 3. ULTRA-FAST PASSIVE NAVBAR ELEVATION
// ==========================================
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  let isScrolled = false;
  const updateNav = () => {
    const shouldScroll = window.scrollY > 20;
    if (shouldScroll !== isScrolled) {
      isScrolled = shouldScroll;
      siteHeader.classList.toggle('scrolled', isScrolled);
    }
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}
