'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail, Menu, X, ArrowRight, Palette, Heart, Sparkles, BookOpen, Shield, Smile, Music, Users, GraduationCap, Lightbulb, MapPin } from 'lucide-react';
import './page.scss';

const coreValues = [
  { id: 1, title: 'Creative Activities', description: 'We encourage imagination and expression through arts, crafts, music, and storytelling helping every child discover their unique spark.', icon: <Palette size={24} />, colorClass: 'val-orange' },
  { id: 2, title: 'Happy Environment', description: 'A joyful, loving, and secure space where children feel safe to explore, play, and grow with confidence.', icon: <Heart size={24} />, colorClass: 'val-orange' },
  { id: 3, title: 'Amazing Playground', description: 'Our vibrant outdoor play areas promote physical development, social interaction, and loads of fun every single day.', icon: <Sparkles size={24} />, colorClass: 'val-orange' },
  { id: 4, title: 'Active Learning', description: 'We combine play with purpose — using hands on activities to build early literacy, numeracy, and life skills through joyful experiences.', icon: <BookOpen size={24} />, colorClass: 'val-orange' }
];

const teachers = [
  { name: 'Ms. Sarah Collins', role: 'Senior Instructor / Teacher', degree: 'PhD in Child Development' },
  { name: 'Mr. Michael Chang', role: 'Art & Play Specialist', degree: 'M.Ed in Early Childhood Education' },
  { name: 'Ms. Emily Watson', role: 'Language & Literacy Instructor', degree: 'PhD in Linguistics' },
  { name: 'Ms. Jessica Taylor', role: 'Mathematics & Science Guide', degree: 'PhD in Pedagogy' }
];

const advantages = [
  { text: 'Safe and child-friendly campus', icon: <Shield size={18} />, color: '#e91e63' },
  { text: 'Experienced and caring teachers', icon: <GraduationCap size={18} />, color: '#f26522' },
  { text: 'Fun, play-based curriculum', icon: <Smile size={18} />, color: '#fdd835' },
  { text: 'Skill development through music, art, etc', icon: <Music size={18} />, color: '#9c27b0' },
  { text: 'Personalized attention in small class sizes', icon: <Users size={18} />, color: '#03a9f4' },
  { text: 'Strong foundation in language, math, etc', icon: <Sparkles size={18} />, color: '#4caf50' }
];

const galleryItems = [
  { src: '/about_2.png', alt: 'Outdoor playtime and garden activities', caption: 'Our Activities Gallery', isLarge: true },
  { src: '/about_3.png', alt: 'Reading circle and story time sessions', caption: 'Storytelling Circle', isLarge: false },
  { src: '/values.png', alt: 'Building block and cognitive games', caption: 'Creative Building Blocks', isLarge: false },
  { src: '/about_1.png', alt: 'Arts, crafts and finger painting fun', caption: 'Painting & Arts Crafts', isLarge: false },
  { src: '/hero_bg.png', alt: 'Group games and social skills development', caption: 'Joyful Playful Learning', isLarge: false }
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'admission', label: 'Admission' },
  { id: 'alumni', label: 'Alumni' },
  { id: 'contact', label: 'Contact', isContact: true }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="topbar">
          <div className="container topbar-content">
            <div className="topbar-right">
              <button onClick={() => scrollToSection('contact')} className="btn-topbar enquiry-btn"><Mail size={14} /> Enquiry</button>
              <a href="tel:1234567890" className="btn-topbar phone-btn"><Phone size={14} /> 1234567890</a>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-content">
            <div className="logo-container" onClick={() => scrollToSection('home')}>
              <Image src="/logo.png" alt="ABC Kindergarten Logo" width={140} height={55} priority className="logo-img" />
            </div>
            <div className="nav-links-desktop">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${item.isContact ? 'contact-nav-btn' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mobile-nav-link"
              >
                {item.label}
              </button>
            ))}
            <div className="mobile-drawer-footer">
              <a href="tel:1234567890" className="btn btn-primary"><Phone size={18} /> Call Us Now</a>
            </div>
          </div>
        </div>
      </header>

      <main >
        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="wave-top">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,45 C320,80 640,-20 960,30 C1280,75 1380,30 1440,20 L1440,0 L0,0 Z" fill="#ffffffff" />
            </svg>
          </div>
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Where Learning Begins with Love</h1>
              <p className="hero-subtitle">Nurturing curiosity, creativity, and confidence in every child through joyful early learning experiences.</p>
              <div className="hero-actions">
                <a href="tel:1234567890" className="btn btn-primary btn-hero"><Phone size={18} /> 1234567890</a>
                <a href="tel:1234567890" className="btn btn-secondary btn-hero"><Phone size={18} /> 1234567890</a>
              </div>
            </div>
          </div>
          <div className="wave-bottom">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,20 C240,-10 480,50 720,20 C960,-10 1200,45 1440,15 L1440,60 L0,60 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>
        <section id="about" className="section bg-white about-section">
          <div className="container about-grid">
            <div className="about-collage-container">
              <div className="about-shape-bg animate-pulse-slow"></div>
              {/* <div className="collage-img-main">
                <Image src="/about_1.png" alt="Kindergarten girl smiling" width={450} height={450} className="about-img main-img" />
              </div>
              <div className="collage-img-sub-2">
                <svg viewBox="0 0 1000 1000" xmlns="http://w3.org" width="450" height="450">
                  <defs>
                    <clipPath id="blob-clip">
                      <path d="M673 585.5q-117 85.5-299 112t-202-212Q152 247 378 214t319 126.5q93 159.5-24 245Z"/>
                    </clipPath>
                  </defs>
                  <image 
                    href="/about_3.png" 
                    width="1000" 
                    height="1000" 
                    clipPath="url(#blob-clip)" 
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <path 
                    d="M673 585.5q-117 85.5-299 112t-202-212Q152 247 378 214t319 126.5q93 159.5-24 245Z"
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="15" 
                  />
                </svg>
              </div> */}
              <svg width="100%" viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="blobClip">
                    <path d="M60,80 C40,20 160,-10 230,30 C300,70 370,10 410,70 C450,130 440,220 420,290 C400,360 430,430 370,460 C310,490 220,470 160,440 C100,410 50,380 40,310 C30,240 80,140 60,80Z" />
                  </clipPath>
                  <clipPath id="circleClip">
                    <circle cx="440" cy="360" r="145" />
                  </clipPath>
                </defs>
                <image href="/about_1.png" x="30" y="0" width="420" height="490"
                  clipPath="url(#blobClip)" preserveAspectRatio="xMidYMid slice" />
                <path d="M60,80 C40,20 160,-10 230,30 C300,70 370,10 410,70 C450,130 440,220 420,290 C400,360 430,430 370,460 C310,490 220,470 160,440 C100,410 50,380 40,310 C30,240 80,140 60,80Z"
                  fill="none" stroke="white" strokeWidth="5" />

                <circle cx="440" cy="360" r="148" fill="white" />
                <image href="/about_3.png" x="295" y="215" width="290" height="290"
                  clipPath="url(#circleClip)" preserveAspectRatio="xMidYMid slice" />
                <circle cx="440" cy="360" r="145" fill="none" stroke="white" strokeWidth="5" />

              </svg>
            </div>
            <div className="about-text-content">
              <span className="subtitle-handwritten">About Us</span>
              <h2 className="about-title">A Warm and Welcoming Start to Your Child&apos;s Learning Journey</h2>
              <div className="about-paragraphs">
                <p>At ABC Kindergarten, we believe that early childhood is a magical time to spark a lifelong love for learning. Our nurturing environment, experienced educators, and play-based curriculum are designed to support the growth of your child&apos;s social, emotional, physical, and cognitive skills.</p>
                <p className="emphasis-text">We don&apos;t just prepare kids for school — we prepare them for life.</p>
              </div>
              <div className="about-actions">
                <a href="#facilities" className="btn btn-primary btn-explore">Explore More <ArrowRight size={18} /></a>
                <div className="about-call">
                  <div className="call-icon-container"><Phone size={24} /></div>
                  <div className="call-text">
                    <span className="call-label">Call Us Now</span>
                    <a href="tel:1234567890" className="call-number">1234567890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="facilities" className="section bg-cream values-section">
          <div className="wave-top">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,45 C320,80 640,-20 960,30 C1280,75 1380,30 1440,20 L1440,0 L0,0 Z" fill="#ffffff" />
            </svg>
          </div>
          <div className="container">
            <div className="section-header">
              <span className="subtitle">Why Choose</span>
              <h2 className="title core-title">Our Core Values</h2>
            </div>
            <div className="values-grid">
              <div className="values-cards-container">
                {coreValues.map((val) => (
                  <div className="value-card" key={val.id}>
                    <div className={`value-icon-badge ${val.colorClass}`}>{val.icon}</div>
                    <div className="value-card-text">
                      <h3 className="value-card-title">{val.title}</h3>
                      <p className="value-card-desc">{val.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="values-illustration-container">
                <div className="values-blob-bg animate-pulse-slow"></div>
                <div className="values-circle-frame">
                  <Image src="/values.png" alt="Toddlers playing with blocks" width={360} height={360} className="values-image" />
                </div>
              </div>
            </div>
          </div>
          <div className="wave-bottom">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,20 C240,-10 480,50 720,20 C960,-10 1200,45 1440,15 L1440,60 L0,60 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>
        <section id="admission" className="section bg-white staff-section">
          <div className="container">
            <div className="section-header">
              <span className="subtitle">Experienced Educator Team</span>
              <h2 className="title">Our Qualified Staffs</h2>
            </div>
            <div className="staff-grid">
              {teachers.map((teacher, index) => (
                <div className="staff-card" key={index}>
                  <div className='staff-img'>
                    <img src="/user-placeholder.jpg" alt="" />
                  </div>
                  <div className="staff-info">
                    <span className="staff-role">Instructor / Teacher</span>
                    <h3 className="staff-name">Name Here (Phd)</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="wave-bottom">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,20 C240,-10 480,50 720,20 C960,-10 1200,45 1440,15 L1440,60 L0,60 Z" fill="#3174c1" />
            </svg>
          </div>
        </section>
        <section className="section bg-blue advantage-section">
          <div className="container advantage-grid">
            <div className="advantage-image-container">
              <div className="advantage-circle-outer">
                <div className="advantage-circle-inner">
                  <Image src="/about_1.png" alt="Child playing" width={320} height={320} className="advantage-child-image" />
                </div>
                <div className="advantage-decorative-badge animate-float">
                  <Lightbulb size={32} color="#ffffff" fill="#ffffff" />
                </div>
              </div>
            </div>
            <div className="advantage-text-container">
              <span className="subtitle-yellow">Why Choose</span>
              <h2 className="advantage-title">The ABC kindergarten Advantage</h2>
              <div className="advantages-list">
                {advantages.map((adv, idx) => (
                  <div className="advantage-item" key={idx} style={{ '--accent-color': adv.color } as React.CSSProperties}>
                    <span className="advantage-icon-box">{adv.icon}</span>
                    <span className="advantage-text" style={{ 'color': adv.color } as React.CSSProperties}>{adv.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-cream gallery-section">
          <div className="wave-top">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,35 C320,-15 640,85 960,35 C1280,-15 1380,35 1440,25 L1440,0 L0,0 Z" fill="#3174c1" />
            </svg>
          </div>
          <div className="container">
            <div className="section-header">
              <span className="subtitle">Gallery</span>
              <h2 className="title core-title">Peek Into Our World of Joyful Learning</h2>
              <p>Every moment is a memory in the making. Explore the smiles, activities, and vibrant experiences at ABC Kindergarten.</p>
            </div>
            <div className="gallery-grid">
              {galleryItems.map((item, idx) => (
                <div className={`gallery-card ${item.isLarge ? 'card-large' : ''}`} key={idx}>
                  <div className="gallery-img-wrapper">
                    <Image src={item.src} alt={item.alt} width={item.isLarge ? 500 : 300} height={item.isLarge ? 450 : 220} className="gallery-image" />
                  </div>
                  <div className="gallery-info"><p className="gallery-caption">{item.caption}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="wave-bottom">
            <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,0 C360,220 1080,220 1440,0 L1440,200 L0,200 Z" fill="#3174c1" />
            </svg>
          </div>
        </section>
        <div className="join-banner-wrapper">
          <div className="join-banner">
            <div className="join-banner-pattern"></div>
            <div className="join-content">
              <div className="join-text">
                <span className="join-subtitle">New World, New Education</span>
                <h2 className="join-title">JOIN NOW</h2>
              </div>
              <div className="join-actions">
                <a href="tel:1234567890" className="btn-join mail-btn">
                  <span className="join-icon-wrapper"><Phone size={16} /></span> 1234567890
                </a>
                <a href="mailto:contact@abckindergarten.com" className="btn-join mail-btn">
                  <span className="join-icon-wrapper"><Mail size={16} /></span> contact@abckindergarten.com
                </a>
              </div>
            </div>
            <div className="join-image-container">
              <div className="join-image-frame">
                <Image src="/about_2.png" alt="Excited preschool children" width={200} height={200} className="join-child-image" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer id="contact" className="footer-section">
        <div className="footer-wrapper">
          <div className="footer-badges-container">
            <div className="container footer-badges-grid">
              <div className="footer-badge-card">
                <div className="badge-icon-circle"><Phone size={24} /></div>
                <div className="badge-text-box">
                  <span className="badge-label">Call Us</span>
                  <a href="tel:1234567890" className="badge-value">1234567890</a>
                </div>
              </div>
              <div className="footer-badge-card">
                <div className="badge-icon-circle"><Mail size={24} /></div>
                <div className="badge-text-box">
                  <span className="badge-label">Make a Quote</span>
                  <a href="mailto:contact@abckindergarten.com" className="badge-value">contact@abckindergarten.com</a>
                </div>
              </div>
              <div className="footer-badge-card">
                <div className="badge-icon-circle"><MapPin size={24} /></div>
                <div className="badge-text-box">
                  <span className="badge-label">Locations</span>
                  <span className="badge-value">Ernakulam, Kerala</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container footer-main-content">
            <hr className="footer-divider" />
            <div className="footer-grid">
              <div className="footer-brand-col">
                <div className="footer-logo" onClick={() => scrollToSection('home')}>
                  <Image src="/logo.png" alt="ABC Kindergarten Logo" width={140} height={55} className="footer-logo-img" />
                </div>
                <p className="footer-desc">At ABC Kindergarten, we believe that early childhood is a magical time to spark a lifelong love for learning. Our nurturing environment, experienced educators, and play-based curriculum are designed to support growth.</p>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg>
                  </a>
                </div>
              </div>
              <div className="footer-links-col">
                <h3 className="footer-col-title">Main Links</h3>
                <ul className="footer-links-list">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button onClick={() => scrollToSection(item.id)} className="footer-btn-link">
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-links-col">
                <h3 className="footer-col-title">Facilities</h3>
                <ul className="footer-links-list">
                  <li><button onClick={() => scrollToSection('facilities')} className="footer-btn-link">Pre KG</button></li>
                  <li><button onClick={() => scrollToSection('facilities')} className="footer-btn-link">LKG</button></li>
                  <li><button onClick={() => scrollToSection('facilities')} className="footer-btn-link">UKG</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <div className="container footer-bottom-flex">
            <p>© 2026 - All Rights Reserved</p>
            <p>Made by ABC</p>
          </div>
        </div>
      </footer>
    </>
  );
}
