import React, { useEffect } from 'react';
import { FAQ_DATA } from '../data/packData';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // Document Title
    document.title = 'Baú da Edição Magnética | +15.000 Recursos VIP para Editores de Vídeo';

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'O maior acervo cinematográfico para editores de vídeo, YouTubers e agências. +15.000 SFX 8K, Overlays 4K, LUTs, Presets, Templates CapCut e Premiere com acesso vitalício.'
    );

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Baú da Edição Magnética | Acervo Cinematográfico VIP' },
      { property: 'og:description', content: 'Transforme qualquer vídeo comum em uma produção de alto nível. +15.000 recursos VIP com acesso vitalício.' },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: `${window.location.origin}/src/assets/images/magnetic_chest_hero_1784827501379.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Baú da Edição Magnética - Recursos 4K para Editores' },
      { name: 'twitter:description', content: 'SFX, Overlays, LUTs, Presets e Templates de alta retenção para Premiere, CapCut e After Effects.' }
    ];

    ogTags.forEach((tag) => {
      const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (tag.property) el.setAttribute('property', tag.property);
        if (tag.name) el.setAttribute('name', tag.name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin);

    // JSON-LD Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQ_DATA.map((item) => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer
        }
      }))
    };

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Baú da Edição Magnética VIP',
      'image': [`${window.location.origin}/src/assets/images/magnetic_chest_hero_1784827501379.jpg`],
      'description': 'Acervo definitivo com mais de 15.000 recursos de edição de vídeo em 4K/8K, SFX, Overlays, LUTs, Presets e Templates de alta retenção.',
      'brand': {
        '@type': 'Brand',
        'name': 'Baú da Edição Magnética'
      },
      'offers': {
        '@type': 'Offer',
        'url': window.location.href,
        'priceCurrency': 'BRL',
        'price': '97.00',
        'priceValidUntil': '2027-12-31',
        'itemCondition': 'https://schema.org/NewCondition',
        'availability': 'https://schema.org/InStock',
        'seller': {
          '@type': 'Organization',
          'name': 'Baú da Edição Magnética'
        }
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.95',
        'reviewCount': '1420'
      }
    };

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify(faqSchema);
    scriptFaq.id = 'json-ld-faq';

    const scriptProduct = document.createElement('script');
    scriptProduct.type = 'application/ld+json';
    scriptProduct.text = JSON.stringify(productSchema);
    scriptProduct.id = 'json-ld-product';

    document.head.appendChild(scriptFaq);
    document.head.appendChild(scriptProduct);

    return () => {
      document.getElementById('json-ld-faq')?.remove();
      document.getElementById('json-ld-product')?.remove();
    };
  }, []);

  return null;
};
