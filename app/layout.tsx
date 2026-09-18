import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: '八街市食品衛生連合会', description: '八街市の食品事業者と地域の食の安全を支える八街市食品衛生連合会のウェブサイトです。' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
