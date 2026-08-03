import { PackItem, BonusItem, Testimonial, FAQItem, PricingTier, RecentSale } from '../types';

export const PACKS_DATA: PackItem[] = [
  {
    id: 'sfx-vault',
    category: 'sfx',
    title: 'Acervo SFX Magnético 8K Ultra Clean',
    badge: 'Essencial de Retenção',
    itemCount: '+3.500 Efeitos Sonoros HQ',
    size: '12.4 GB',
    description: 'Os mesmos sound effects utilizados pelos maiores canais de negócios, tecnologia e documentários no YouTube para hipnotizar o espectador.',
    highlights: [
      'Whooshes cinematográficos & Glitch Swipes',
      'Risers de Tensão, Impactos Sub-Bass 20Hz e Braams',
      'UI Clicks, Pop, Typing, Camera Shutter & Foley HD',
      'Organizados por Intencionalidade e Sensação Emocional'
    ],
    iconName: 'Volume2',
    isPopular: true
  },
  {
    id: 'overlay-vault',
    category: 'overlays',
    title: 'Overlay & Textures Vault 4K Pro',
    badge: 'Estética Hipnótica',
    itemCount: '+2.200 Texturas e Elementos Visual',
    size: '18.9 GB',
    description: 'Camadas visuais de textura, grãos de filme real de 35mm, vazamentos de luz e efeitos vintage para dar visual de produção de Hollywood ao vídeo.',
    highlights: [
      'Real 35mm Film Grain 4K ProRes & Film Damage',
      'CRT Monitor Scanlines, VHS Glitch & Retro Overlays',
      'Light Leaks & Lens Flares Anamórficos Dourados',
      'Dust Particles, Fumaça Cinematográfica & Film Burns'
    ],
    iconName: 'Layers',
    isPopular: true
  },
  {
    id: 'luts-grading',
    category: 'luts',
    title: 'Master LUTs & Color Grading Cinematic',
    badge: 'Colorometria de Cinema',
    itemCount: '+850 LUTs Profissionais (.CUBE)',
    size: '3.1 GB',
    description: 'Transforme gravações genéricas de celular ou câmera em cores cinematográficas profundas com 1 clique. Funciona em qualquer editor.',
    highlights: [
      'Hollywood Cinematic Moods (Blockbuster Warm & Teal)',
      'Cyberpunk Neon, Vintage Retro & Film Stock Look',
      'Vlog Clean Skin Tone (Tons de pele naturais e perfeitos)',
      'Packs otimizados para Rec.709, S-Log3, D-Cinelike e Apple ProRes'
    ],
    iconName: 'Palette'
  },
  {
    id: 'transitions-pack',
    category: 'transitions',
    title: 'Pack Transições Magnéticas Drag & Drop',
    badge: 'Ritmo Sem Interrupções',
    itemCount: '+1.400 Transições 4K',
    size: '8.7 GB',
    description: 'Elimine os cortes secos sem graça. Crie transições orgânicas de corte rápido e movimento fluido que mantêm o cérebro conectado.',
    highlights: [
      'Camera Whip Zoom, Seamless Spin & Pan',
      'Paper Cutout & Stop Motion Transitions',
      'Glitch Distortion, Light Wipe & Glass Fracture',
      'Totalmente customizáveis com controle de velocidade'
    ],
    iconName: 'Zap',
    isPopular: true
  },
  {
    id: 'templates-capcut-premiere',
    category: 'templates',
    title: 'Templates Virais (Shorts, Reels & TikTok)',
    badge: 'Pronto para Publicar',
    itemCount: '+1.800 Templates Editáveis',
    size: '14.2 GB',
    description: 'Projetos completos para vídeos verticais de alta retenção. Basta substituir o vídeo e o texto em menos de 3 minutos.',
    highlights: [
      'Ganchos Visuais de Entrada (First 3 Seconds Hooks)',
      'Legendas Dinâmicas Estilo Hormozi & MrBeast',
      'Lower Thirds Eletrônicos e Minimalistas Elegantes',
      'Projetos editáveis em CapCut, Premiere e After Effects'
    ],
    iconName: 'Video'
  },
  {
    id: 'fonts-bundle',
    category: 'fonts',
    title: 'Typography Bundle - Fontes de Alto Impacto',
    badge: 'Identidade Visual Forte',
    itemCount: '+450 Fontes Premium Licenciadas',
    size: '1.8 GB',
    description: 'A coleção de fontes display, condensed e sans-serif definitivas que os editores de ponta usam para títulos virais e thumbnails.',
    highlights: [
      'Fontes Display Modernas, Brutalistas e Elegantes',
      'Acentuação PT-BR Completa & Números Estilizados',
      'Variantes Bold, Heavy, Medium e Italic',
      'Inclui Guia de Combinações Tipográficas de Alto Impacto'
    ],
    iconName: 'Type'
  },
  {
    id: 'presets-pack',
    category: 'presets',
    title: 'Presets de Efeitos Magnéticos 1-Click',
    badge: 'Agilidade Suprema',
    itemCount: '+2.100 Presets .prfpset / .aep',
    size: '4.5 GB',
    description: 'Efeitos de animação pré-configurados. Arraste e solte para aplicar animações de texto, zooms dramáticos e shakes perfeitos.',
    highlights: [
      'Camera Shake Orgânico, Hit Pulse & Smooth Zoom',
      'Text Animators: Typewriter, Slide, Bounce, Wave',
      'Color Match & Equalizador de Áudio Automático',
      'Compatível com Premiere Pro, After Effects e DaVinci'
    ],
    iconName: 'Sliders'
  },
  {
    id: 'motion-graphics',
    category: 'templates',
    title: 'Motion Graphics 3D & Elementos HUD',
    badge: '3D & High-Tech',
    itemCount: '+1.200 Assets 3D & HUD 4K Alpha',
    size: '16.5 GB',
    description: 'Elementos 3D flutuantes com fundo transparente (Alpha) para enriquecer a narrativa visual e ilustrar conceitos complexos.',
    highlights: [
      'Ícones 3D Flutuantes (Redes Sociais, Cripto, Moedas, Ícones)',
      'Elementos Cyber HUD, Gráficos Futuristas & Callouts',
      'Efeitos de Partículas Douradas & Raios de Luz 4K',
      'Prontos com Fundo Transparente Alpha Channnel'
    ],
    iconName: 'Box'
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bonus-1',
    number: 1,
    title: 'Curso Express: Edição Magnética & Retenção Virótica',
    tagline: 'O Método Secreto dos Editores de 5 Dígitos',
    originalValue: 'R$ 297,00',
    description: 'Um passo a passo dinâmico direto ao ponto ensinando como aplicar o Baú para criar cortes que prendem a atenção do início ao fim.',
    iconName: 'PlayCircle',
    keyBenefits: [
      'Estruturação dos primeiros 3 segundos de vídeo (Hook Magnético)',
      'Uso estratégico de SFX para ancorar a atenção psicológica',
      'Anatomia dos cortes de ritmo e pacing de vídeo'
    ]
  },
  {
    id: 'bonus-2',
    number: 2,
    title: 'Kit de Prospecção & Contratos High-Ticket',
    tagline: 'Como Fechar Clientes de R$ 3k a R$ 10k por mês',
    originalValue: 'R$ 197,00',
    description: 'Modelos prontos de propostas comerciais de alto valor, contratos jurídicos protegidos e scripts de prospecção fria que funcionam.',
    iconName: 'FileText',
    keyBenefits: [
      'Template de Proposta Comercial em PDF altamente persuasiva',
      'Script de Abordagem Direct DM / E-mail para YouTubers e Criadores',
      'Contrato de Prestação de Serviços de Edição Pré-Pronto'
    ]
  },
  {
    id: 'bonus-3',
    number: 3,
    title: 'Comunidade VIP & Network de Editores Elite',
    tagline: 'Grupo Exclusivo de Troca de Vagas e Feedback',
    originalValue: 'R$ 397,00',
    description: 'Participe do ecossistema onde criadores, agências e infoprodutores postam vagas diárias buscando editores qualificados.',
    iconName: 'Users',
    keyBenefits: [
      'Mural de Oportunidades & Indicações de Projetos',
      'Feedback direto na sua timeline por editores experientes',
      'Acesso a assets raros compartilhados semanalmente'
    ]
  },
  {
    id: 'bonus-4',
    number: 4,
    title: 'Atualizações Mensais Vitalícias no Baú',
    tagline: 'Seu Acervo Nunca Fica Ultrapassado',
    originalValue: 'R$ 247,00',
    description: 'Todos os meses adicionamos novos packs das tendências virais mais recentes do mercado. Você recebe sem pagar 1 centavo a mais.',
    iconName: 'RefreshCw',
    keyBenefits: [
      'Novos packs adicionados na nuvem mensalmente',
      'Alertas no grupo assim que novos recursos sobem',
      'Zero custo adicional para todas as atualizações futuras'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Lucas Andrade',
    role: 'Editor de Vídeo Freelance',
    channelOrNiche: 'Canais de Negócios & Podcasting',
    subscribersOrIncome: 'Aumentou faturamento de R$ 2k para R$ 8.5k/mês',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    stars: 5,
    comment: 'O Baú da Edição Magnética mudou o jogo pra mim. Antes eu levava 12 horas pra editar um vídeo longo porque perdia tempo em sites genéricos buscando SFX. Hoje eu abro a pasta, arrasto e em 3 horas o vídeo fica parecendo uma produção de R$ 10 mil.',
    verifiedStudent: true,
    metricsResult: 'Tempo de edição reduzido em 75%'
  },
  {
    id: 't2',
    name: 'Matheus Resende',
    role: 'Editor Head na Agência Viral',
    channelOrNiche: 'Infoprodutos & Criativos de Tráfego',
    subscribersOrIncome: 'CTR dos anúncios subiu de 1.2% para 3.8%',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    stars: 5,
    comment: 'Os SFX de baixa frequência e as transições de corte rítmico do Baú são bizarros. Conseguimos dobrar a retenção dos Reels dos nossos clientes em 2 semanas. Vale 100x o valor cobrado.',
    verifiedStudent: true,
    metricsResult: '+210% de Retenção nos primeiros 5s'
  },
  {
    id: 't3',
    name: 'Camila Torres',
    role: 'Criadora de Conteúdo & UGC',
    channelOrNiche: 'Instagram & TikTok (+400k seguidores)',
    subscribersOrIncome: 'Vídeo atingiu 2.4 Milhões de views no Reels',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    stars: 5,
    comment: 'Eu edito tudo pelo CapCut e achava que o Baú era só para Premiere. Me enganei feio! Os templates de ganchos e overlays funcionam PERFEITAMENTE no CapCut do celular e do PC. Meu conteúdo ficou ultra profissional!',
    verifiedStudent: true,
    metricsResult: '2.4M Views no primeiro Reels usando o Baú'
  },
  {
    id: 't4',
    name: 'Gabriel Siqueira',
    role: 'Filmmaker & YouTuber',
    channelOrNiche: 'Documentários & Vlogs Cinematográficos',
    subscribersOrIncome: 'Fechou contrato fixo de R$ 6.000/mês',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    stars: 5,
    comment: 'A organização do drive é o diferencial supremo. Tudo categorizado por clima, BPM e tipo de emoção. Os LUTs dão uma cor surreal às minhas gravações em S-Log. O bônus do kit de contratos pagou o Baú 10 vezes no primeiro mês!',
    verifiedStudent: true,
    metricsResult: 'Contrato fechado com cliente grande'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Acesso & Licença',
    question: 'Como recebo o acesso após o pagamento?',
    answer: 'O acesso é imediato e enviado instantaneamente para o seu e-mail logo após a confirmação do pagamento. Pagamentos via PIX ou Cartão de Crédito liberam o acesso em menos de 1 minuto com login e senha para a plataforma exclusiva.'
  },
  {
    id: 'faq-2',
    category: 'Compatibilidade',
    question: 'Com quais programas e softwares o Baú é compatível?',
    answer: 'O Baú da Edição Magnética é 100% compatível com TODOS os programas do mercado! Funciona perfeitamente no Adobe Premiere Pro, After Effects, DaVinci Resolve, CapCut (PC e Celular), Final Cut Pro, Sony Vegas, Photoshop, Canva e VN.'
  },
  {
    id: 'faq-3',
    category: 'Pagamentos',
    question: 'O acesso é vitalício ou preciso pagar mensalidade?',
    answer: 'O acesso nesta oferta especial é VITALÍCIO! Você paga apenas uma única vez e tem acesso para sempre ao acervo completo, além de receber todas as futuras atualizações sem qualquer cobrança adicional ou mensalidade.'
  },
  {
    id: 'faq-4',
    category: 'Direitos Comerciais',
    question: 'Posso usar os elementos em vídeos comerciais de clientes?',
    answer: 'Com certeza! Todos os arquivos possuem licença comercial 100% livre de direitos autorais (Royalty-Free). Você pode usar em vídeos para seu canal, redes sociais, trabalhos para clientes, comerciais de TV e anúncios pagos.'
  },
  {
    id: 'faq-5',
    category: 'Downloads',
    question: 'Preciso baixar tudo de uma vez ou posso baixar só o que usar?',
    answer: 'Não precisa baixar tudo! O acervo fica hospedado em servidores de ultra alta velocidade na nuvem (Google Drive VIP). Você pode navegar pelas pastas, visualizar prévia dos arquivos e baixar apenas os itens que precisar para o projeto da vez.'
  },
  {
    id: 'faq-6',
    category: 'Iniciantes',
    question: 'Sou iniciante na edição, vou conseguir usar os recursos?',
    answer: 'Sim! Além dos arquivos serem organizados no modelo Drag & Drop (basta arrastar para a sua timeline), você recebe o BÔNUS #1 (Curso Express de Edição Magnética) que ensina exatamente onde e como aplicar cada recurso passo a passo.'
  },
  {
    id: 'faq-7',
    category: 'Garantia',
    question: 'E se eu não gostar ou achar que não é pra mim?',
    answer: 'Sua satisfação é 100% garantida! Oferecemos 7 dias inteiros de garantia incondicional. Se você acessar o Baú e entender que ele não facilitou sua vida, basta enviar uma única mensagem no suporte e devolvemos 100% do seu dinheiro sem perguntas.'
  }
];

export const CHECKOUT_URL = 'https://pay.cakto.com.br/xhf5xkq_280719';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'vitalicio-vip',
    name: 'BAÚ DA EDIÇÃO MAGNÉTICA - VIP VITALÍCIO',
    tagline: 'Acesso Completo + Todos os 4 Bônus Exclusivos + Atualizações Vitalícias',
    originalPrice: 997,
    price: 97,
    installments: {
      count: 12,
      value: 9.74
    },
    features: [
      '🔥 Acesso VITALÍCIO ao Acervo Completo (+15.000 Recursos 4K)',
      '🎬 Pack SFX Magnético 8K (Whooshes, Risers, Impactos, UI)',
      '💥 Overlay & Texture Vault 4K (Filme 35mm, VHS Glitch)',
      '🎨 Master LUTs & Color Grading Cinematic (.CUBE)',
      '⚡ Transições Magnéticas Drag & Drop 4K',
      '📱 Templates Virais editáveis para CapCut, Premiere & After',
      '🔤 Typography Bundle (+450 Fontes Display de Alto Impacto)',
      '⚙️ Presets de Efeitos 1-Click (Zoom, Shake, Color Match)',
      '🎁 BÔNUS #1: Curso Express "Edição Magnética & Retenção"',
      '🎁 BÔNUS #2: Kit de Prospecção & Contratos High-Ticket',
      '🎁 BÔNUS #3: Comunidade VIP & Network de Editores',
      '🎁 BÔNUS #4: Atualizações Mensais Gratuitas na Nuvem',
      '🛡️ Garantia Incondicional de 7 Dias'
    ],
    bonusesIncluded: true,
    lifetimeAccess: true,
    isPopular: true,
    checkoutUrl: CHECKOUT_URL
  }
];

export const RECENT_SALES: RecentSale[] = [
  { id: 's1', name: 'Rodrigo M.', city: 'São Paulo - SP', timeAgo: 'há 2 minutos', plan: 'Baú Magnético VIP' },
  { id: 's2', name: 'Felipe A.', city: 'Curitiba - PR', timeAgo: 'há 4 minutos', plan: 'Baú Magnético VIP' },
  { id: 's3', name: 'Juliana C.', city: 'Belo Horizonte - MG', timeAgo: 'há 6 minutos', plan: 'Baú Magnético VIP' },
  { id: 's4', name: 'Vinícius K.', city: 'Rio de Janeiro - RJ', timeAgo: 'há 9 minutos', plan: 'Baú Magnético VIP' },
  { id: 's5', name: 'Lucas S.', city: 'Florianópolis - SC', timeAgo: 'há 11 minutos', plan: 'Baú Magnético VIP' },
  { id: 's6', name: 'Daniela P.', city: 'Brasília - DF', timeAgo: 'há 14 minutos', plan: 'Baú Magnético VIP' }
];

export const BEFORE_AFTER_COMPARISON = {
  beforeTitle: 'Edição Comum & Crua',
  beforeDesc: 'Vídeo estático, cortes secos, som sem graça, cores lavadas e baixa retenção nos primeiros 5 segundos.',
  beforeMetrics: { retention: '14%', avgWatchTime: '0:22s', ctr: '0.8%' },
  afterTitle: 'Edição Magnética 8K (Com o Baú)',
  afterDesc: 'SFX cirúrgicos, overlays film 35mm, color grading cinematográfico, transições de ritmo e ganchos hipnóticos.',
  afterMetrics: { retention: '68%', avgWatchTime: '2:15s', ctr: '4.2%' }
};
