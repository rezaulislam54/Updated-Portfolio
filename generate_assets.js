import fs from 'fs';

const createSvg = (title, category, tags, bgGrad1, bgGrad2, accentCol) => {
  const tagElements = tags.map((t, idx) => `
    <g transform="translate(${20 + (idx % 2) * 135}, ${200 + Math.floor(idx / 2) * 40})">
      <rect width="125" height="30" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.05)" />
      <circle cx="14" cy="15" r="4" fill="${accentCol}" />
      <text x="26" y="19" fill="#cbd5e1" font-family="sans-serif" font-size="10.5" font-weight="600">${t}</text>
    </g>
  `).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad_${accentCol.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGrad1}" />
      <stop offset="100%" stop-color="${bgGrad2}" />
    </linearGradient>
    <linearGradient id="accentGrad_${accentCol.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accentCol}" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <rect width="800" height="480" fill="url(#bgGrad_${accentCol.replace('#','')})" />
  <rect width="800" height="480" fill="url(#grid)" />
  
  <circle cx="700" cy="80" r="180" fill="${accentCol}" opacity="0.2" filter="blur(40px)" />
  <circle cx="100" cy="400" r="140" fill="#8b5cf6" opacity="0.2" filter="blur(40px)" />
  
  <!-- Browser Mockup Window -->
  <g transform="translate(50, 40)">
    <rect width="700" height="400" rx="16" fill="#0b1120" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
    
    <!-- Top Bar -->
    <rect width="700" height="42" rx="16" fill="#0f172a" />
    <circle cx="28" cy="21" r="6" fill="#ef4444" />
    <circle cx="46" cy="21" r="6" fill="#f59e0b" />
    <circle cx="64" cy="21" r="6" fill="#10b981" />
    
    <!-- URL search bar -->
    <rect x="120" y="9" width="460" height="24" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.05)" />
    <text x="140" y="25" fill="#94a3b8" font-family="monospace" font-size="11">https://mdrezaul.dev/projects/${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}</text>
    
    <!-- Content Area -->
    <rect x="30" y="70" width="280" height="28" rx="6" fill="url(#accentGrad_${accentCol.replace('#','')})" opacity="0.25" />
    <text x="42" y="89" fill="${accentCol}" font-family="sans-serif" font-weight="bold" font-size="13">${category.toUpperCase()}</text>
    
    <text x="30" y="135" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="24">${title}</text>
    
    <!-- UI Elements -->
    <g transform="translate(30, 160)">
      <!-- Card 1 -->
      <rect width="290" height="90" rx="10" fill="#131e36" stroke="rgba(255,255,255,0.06)" />
      <circle cx="30" cy="35" r="14" fill="${accentCol}" opacity="0.3" />
      <rect x="55" y="25" width="140" height="10" rx="4" fill="#f8fafc" />
      <rect x="55" y="42" width="210" height="7" rx="3.5" fill="#64748b" />
      <rect x="55" y="56" width="120" height="7" rx="3.5" fill="#475569" />
      
      <!-- Card 2 -->
      <rect y="105" width="290" height="90" rx="10" fill="#131e36" stroke="rgba(255,255,255,0.06)" />
      <circle cx="30" cy="140" r="14" fill="#8b5cf6" opacity="0.3" />
      <rect x="55" y="130" width="160" height="10" rx="4" fill="#f8fafc" />
      <rect x="55" y="147" width="190" height="7" rx="3.5" fill="#64748b" />
      <rect x="55" y="161" width="100" height="7" rx="3.5" fill="#475569" />
    </g>
    
    <!-- Right UI Panel / Chart -->
    <g transform="translate(350, 70)">
      <rect width="310" height="295" rx="12" fill="#0e172a" stroke="rgba(255,255,255,0.08)" />
      <rect x="20" y="20" width="140" height="12" rx="4" fill="#f8fafc" />
      <rect x="20" y="40" width="80" height="8" rx="4" fill="#64748b" />
      
      <!-- Interactive dashboard visuals -->
      <rect x="20" y="65" width="270" height="115" rx="8" fill="#172554" stroke="${accentCol}" stroke-dasharray="4 4" opacity="0.4" />
      <path d="M 35 145 Q 80 95, 130 125 T 220 85 T 275 105" fill="none" stroke="${accentCol}" stroke-width="3.5" />
      
      <!-- Badges / Tags -->
      ${tagElements}
    </g>
  </g>
</svg>`;
};

if (!fs.existsSync('public/projects')) fs.mkdirSync('public/projects', { recursive: true });

fs.writeFileSync('public/projects/doctor-appointment.svg', createSvg('Doctor Appointment System', 'Healthcare Portal', ['React 18', 'Node.js', 'Express.js', 'MongoDB'], '#041624', '#0a233e', '#06b6d4'));
fs.writeFileSync('public/projects/car-service.svg', createSvg('Car Servicing Center', 'Automotive Portal', ['MERN Stack', 'Tailwind', 'Realtime Status', 'JWT Auth'], '#211304', '#3d2407', '#f59e0b'));
fs.writeFileSync('public/projects/giga-gadgets.svg', createSvg('Giga Gadgets Tech Store', 'E-Commerce Platform', ['Redux Toolkit', 'Stripe API', 'Cart & Wishlist', 'MongoDB'], '#15092a', '#29124e', '#8b5cf6'));
fs.writeFileSync('public/projects/coffee-shop.svg', createSvg('Aroma Artisan Roastery', 'Coffee Experience', ['React.js', 'Smooth UI', 'Custom Orders', 'Responsive'], '#230a0d', '#45121a', '#ec4899'));
fs.writeFileSync('public/projects/byte-blaze.svg', createSvg('Byte Blaze Tech Blogs', 'Developer Hub', ['Markdown Engine', 'REST APIs', 'Reading Stats', 'Bookmarks'], '#031c18', '#073830', '#10b981'));

console.log('Project SVG preview mockups generated!');
