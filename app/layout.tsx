import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yachishoku.jp'),
  title: { default: '八街市食品衛生連合会｜食品衛生・検便・講習会・共済', template: '%s｜八街市食品衛生連合会' },
  description: '八街市食品衛生連合会の公式サイトです。食品衛生講習会、検便・水質検査、年会費、入会案内、あんしんフード君などの情報をご案内します。',
  alternates: { canonical: 'https://yachishoku.jp/' },
  openGraph: { type: 'website', url: 'https://yachishoku.jp/', siteName: '八街市食品衛生連合会', locale: 'ja_JP', title: '八街市食品衛生連合会｜食品衛生・検便・講習会・共済', description: '八街市の食品事業者と地域の食の安全を支える公式サイトです。' },
  robots: { index: true, follow: true },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({ '@context':'https://schema.org', '@type':'WebSite', name:'八街市食品衛生連合会', alternateName:'八街市食品衛生連合会 公式サイト', url:'https://yachishoku.jp/' })}} /></body></html>}
