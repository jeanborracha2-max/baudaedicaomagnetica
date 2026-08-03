import React, { useState } from 'react';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VSLPlayer } from './components/VSLPlayer';
import { SocialProof } from './components/SocialProof';
import { PainPoints } from './components/PainPoints';
import { PackVault } from './components/PackVault';
import { Differentials } from './components/Differentials';
import { TargetAudience } from './components/TargetAudience';
import { BonusesSection } from './components/BonusesSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Testimonials } from './components/Testimonials';
import { PricingOffer } from './components/PricingOffer';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { LiveSalesNotifier } from './components/LiveSalesNotifier';
import { CheckoutModal } from './components/CheckoutModal';
import { CHECKOUT_URL } from './data/packData';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById('vsl-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-100 font-sans selection:bg-accent-500 selection:text-black relative overflow-x-hidden">
      {/* SEO Metatags & JSON-LD Injection */}
      <SEOHead />

      {/* Sticky Header with countdown */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main VSL Page Sections */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onScrollToVideo={handleScrollToVideo}
        />

        {/* VSL VIDEO SECTION */}
        <VSLPlayer onOpenCheckout={handleOpenCheckout} />

        {/* PROVA / RESULTS / BEFORE-AFTER SLIDER */}
        <SocialProof />

        {/* PAIN POINTS & PROBLEMS */}
        <PainPoints />

        {/* PACK VAULT EXPLORER */}
        <PackVault onOpenCheckout={handleOpenCheckout} />

        {/* DIFFERENTIALS / WHY US */}
        <Differentials />

        {/* TARGET AUDIENCE */}
        <TargetAudience />

        {/* HIGH-VALUE BONUSES */}
        <BonusesSection onOpenCheckout={handleOpenCheckout} />

        {/* 7-DAY GUARANTEE */}
        <GuaranteeSection onOpenCheckout={handleOpenCheckout} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* MAIN PRICING OFFER */}
        <PricingOffer onOpenCheckout={handleOpenCheckout} />

        {/* FAQ ACCORDION */}
        <FAQSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* STICKY BOTTOM FLOATING CTA */}
      <FloatingCTA onOpenCheckout={handleOpenCheckout} />

      {/* LIVE SALES TOAST NOTIFIER */}
      <LiveSalesNotifier />

      {/* CHECKOUT SIMULATED MODAL */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
