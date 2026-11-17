"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client-Side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!supabaseUrl || !supabaseAnonKey) {
      setErrorMessage("Configuration error: Missing Supabase credentials.");
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ name, email, message }]);

      if (error) throw error;
      
      setStatus('success');
    } catch (err) {
      console.error("Error submitting form:", err);
      setErrorMessage("An error occurred while sending your message. Please try again.");
      setStatus('error');
    }
  };

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <section className="section" style={{ flex: 1, padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px', letterSpacing: '-0.01em' }}>Contact Us</h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)' }}>
              Have questions about AquaRythu? We'd love to hear from you.
            </p>
          </div>
          
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(40, 167, 69, 0.1)', color: 'var(--color-success)', marginBottom: '24px' }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Your message has been sent successfully! We'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="btn-secondary" style={{ marginTop: '32px' }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div style={{ padding: '16px', backgroundColor: 'rgba(220, 53, 69, 0.1)', color: '#dc3545', borderRadius: '8px', marginBottom: '24px', fontSize: '0.95rem' }}>
                    {errorMessage}
                  </div>
                )}
                
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-main)' }}>Full Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-main)' }}>Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-main)' }}>Message</label>
                  <textarea id="message" name="message" required rows="5" placeholder="How can we help you farm smarter?" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', transition: 'border-color 0.2s' }}></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-primary" 
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    fontSize: '1.1rem', 
                    fontWeight: 600,
                    opacity: status === 'loading' ? 0.7 : 1,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px', color: 'var(--color-text-muted)' }}>
            <p>Or email us directly at <a href="mailto:support@aquarythu.com" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>support@aquarythu.com</a></p>
          </div>

          <div style={{ marginTop: '40px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '12px' }}>What we can help with</h2>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Setting up your farm, ponds and first crop in AquaRythu</li>
              <li>Feed plans, Smart Feed recommendations and tray checks</li>
              <li>Adding supervisors and workers to your farm</li>
              <li>Plans, billing and subscriptions</li>
              <li>Feedback and feature requests from your farm</li>
            </ul>
            <p style={{ marginTop: '16px' }}>
              New to AquaRythu? Read <a href="/how-it-works" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>how AquaRythu works</a> or the <a href="/#faq" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>frequently asked questions</a>. To delete your account and data, see <a href="/delete-account" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>account deletion</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
