import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from '@playwright/test';

const root = resolve(import.meta.dirname, '..');
const syne = readFileSync(resolve(root, 'node_modules/@fontsource-variable/syne/files/syne-latin-wght-normal.woff2')).toString('base64');
const vazir = readFileSync(resolve(root, 'node_modules/@fontsource-variable/vazirmatn/files/vazirmatn-arabic-wght-normal.woff2')).toString('base64');

const copy = {
  en: {
    dir: 'ltr', label: 'SYSTEMS / INFRASTRUCTURE / ERP', name: 'MAHDI<br/>HOOSHMAND',
    title: 'Systems & Infrastructure Specialist', statement: 'I make complex systems dependable.',
    location: 'MASHHAD, IRAN  •  REMOTE', textSide: 'left', topologySide: 'right', font: 'Syne',
  },
  fa: {
    dir: 'rtl', label: 'سیستم / زیرساخت / ERP', name: 'مهدی<br/>هوشمند',
    title: 'متخصص سیستم و زیرساخت', statement: 'سیستم‌های پیچیده را قابل‌اعتماد می‌کنم.',
    location: 'مشهد، ایران  •  دورکاری', textSide: 'right', topologySide: 'left', font: 'Vazir',
  },
};

function documentFor(locale) {
  const c = copy[locale];
  return `<!doctype html><html dir="${c.dir}"><head><meta charset="utf-8"><style>
    @font-face{font-family:Syne;src:url(data:font/woff2;base64,${syne}) format('woff2');font-weight:400 800}
    @font-face{font-family:Vazir;src:url(data:font/woff2;base64,${vazir}) format('woff2');font-weight:100 900}
    *{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:#0b0e10;color:#f2eee6}
    body{font-family:${c.font},Arial,sans-serif;background-image:linear-gradient(rgba(174,184,189,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(174,184,189,.08) 1px,transparent 1px);background-size:90px 90px}
    .copy{position:absolute;${c.textSide}:72px;top:68px;width:570px;text-align:${c.textSide}}
    .label{display:flex;align-items:center;justify-content:${c.textSide === 'left' ? 'flex-start' : 'flex-end'};gap:18px;color:#aeb8bd;font:500 17px/1 Vazir,Syne,sans-serif;letter-spacing:${locale === 'en' ? '2px' : '0'}}
    .diamond{width:14px;height:14px;background:#d7a05c;transform:rotate(45deg)}
    h1{margin:94px 0 0;font-size:${locale === 'en' ? '76px' : '84px'};font-weight:750;line-height:${locale === 'en' ? '.98' : '1.05'};letter-spacing:${locale === 'en' ? '-4px' : '-2px'}}
    h2{margin:24px 0 0;color:#d7a05c;font-size:${locale === 'en' ? '28px' : '34px'};font-weight:650}
    p{margin:45px 0 0;color:#aeb8bd;font-size:${locale === 'en' ? '23px' : '28px'};font-weight:450}
    small{position:absolute;${c.textSide}:0;top:470px;color:#7e8a90;font:500 ${locale === 'en' ? '16px' : '19px'}/1 Vazir,Syne,sans-serif;letter-spacing:${locale === 'en' ? '1px' : '0'}}
    .map{position:absolute;${c.topologySide}:58px;top:90px;width:470px;height:470px}
    .link{fill:none;stroke:#d7a05c;stroke-width:3}.node{fill:#0b0e10;stroke:#71b7af;stroke-width:3}.core{stroke:#d7a05c;stroke-width:4}
  </style></head><body>
    <div class="copy"><div class="label"><span class="diamond"></span><span>${c.label}</span></div><h1>${c.name}</h1><h2>${c.title}</h2><p>${c.statement}</p><small>${c.location}</small></div>
    <svg class="map" viewBox="0 0 470 470" ${locale === 'fa' ? 'style="transform:scaleX(-1)"' : ''} aria-hidden="true">
      <path class="link" d="M74 86l130 84 112-70 92 122-117 123-148-54-90 96"/>
      <circle class="node" cx="74" cy="86" r="15"/><circle class="node core" cx="204" cy="170" r="31"/><circle class="node" cx="316" cy="100" r="12"/><circle class="node" cx="408" cy="222" r="18"/><circle class="node" cx="291" cy="345" r="14"/><circle class="node" cx="143" cy="291" r="12"/><circle class="node" cx="53" cy="387" r="9"/>
    </svg>
  </body></html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const locale of ['en', 'fa']) {
  await page.setContent(documentFor(locale), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: resolve(root, `public/og/portfolio-${locale}.png`) });
}
await browser.close();
console.log('Social preview images generated.');
