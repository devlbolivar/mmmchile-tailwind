// Generar placeholders SVG optimizados para diferentes tipos de imágenes

export const generateBlurDataURL = (
  width: number,
  height: number,
  color?: string
): string => {
  const backgroundColor = color || "#f3f4f6";
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
      <circle cx="${width * 0.3}" cy="${height * 0.3}" r="${
    Math.min(width, height) * 0.05
  }" fill="#e5e7eb" opacity="0.5"/>
      <circle cx="${width * 0.7}" cy="${height * 0.6}" r="${
    Math.min(width, height) * 0.08
  }" fill="#d1d5db" opacity="0.3"/>
      <circle cx="${width * 0.5}" cy="${height * 0.8}" r="${
    Math.min(width, height) * 0.03
  }" fill="#e5e7eb" opacity="0.7"/>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};

export const generateGradientPlaceholder = (
  width: number,
  height: number
): string => {
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#e5e7eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d1d5db;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};

export const generateChurchPlaceholder = (): string => {
  const svg = `
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#f3f4f6"/>
      <path d="M200 50L250 100H150L200 50Z" fill="#d1d5db"/>
      <rect x="160" y="100" width="80" height="120" fill="#e5e7eb"/>
      <rect x="185" y="180" width="30" height="40" fill="#d1d5db"/>
      <path d="M195 170L205 170L200 160L195 170Z" fill="#9ca3af"/>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};

export const generateEventPlaceholder = (): string => {
  const svg = `
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#f3f4f6"/>
      <circle cx="120" cy="80" r="30" fill="#e5e7eb"/>
      <circle cx="200" cy="80" r="30" fill="#e5e7eb"/>
      <circle cx="280" cy="80" r="30" fill="#e5e7eb"/>
      <rect x="80" y="130" width="240" height="4" fill="#d1d5db" rx="2"/>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};

// Configuraciones de imágenes optimizadas
export const imageConfig = {
  hero: {
    width: 1920,
    height: 1080,
    priority: true,
    quality: 90,
    placeholder: generateGradientPlaceholder(1920, 1080),
  },
  church: {
    width: 400,
    height: 300,
    priority: false,
    quality: 85,
    placeholder: generateChurchPlaceholder(),
  },
  event: {
    width: 400,
    height: 200,
    priority: false,
    quality: 80,
    placeholder: generateEventPlaceholder(),
  },
  logo: {
    width: 200,
    height: 200,
    priority: true,
    quality: 95,
    placeholder: generateBlurDataURL(200, 200, "#3d98f4"),
  },
  gallery: {
    width: 800,
    height: 600,
    priority: false,
    quality: 75,
    placeholder: generateGradientPlaceholder(800, 600),
  },
} as const;
