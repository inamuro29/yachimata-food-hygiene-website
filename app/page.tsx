'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, ClipboardCheck, ExternalLink, HandHeart, Pause, Play, ShieldCheck, ThermometerSun, Users } from 'lucide-react';

const slides = [
  { src: '/hero-kitchen.png', alt: '明るく清潔に整えられた業務用厨房' },
  { src: '/hero-cooking.png', alt: '清潔な厨房で笑顔で調理するスタッフ' },
  { src: '/hero-inspection.png', alt: '厨房で温度と衛生記録を確認する様子' },
];

const activities = [
  { icon: ClipboardCheck, title: '店舗の巡回指導', text: '食品衛生指導員が店舗を訪問し、現場に合わせた改善をサポートします。' },
  { icon: HandHeart, title: '衛生アドバイス', text: 'お店ごとの悩みに応じて、衛生管理を一緒に考えます。' },
  { icon: Users, title: '講習会の開催', text: '法令や衛生管理の新しい情報を、分かりやすくお伝えします。' },
  { icon: ThermometerSun, title: '検査・衛生用品', text: '検便・水質検査容器の配付や、衛生用品の案内を行います。' },
];

const usefulLinks = [
  ['入会のご案内', '会員特典や加入方法をご案内します。', '/join'],
  ['年会費', '年会費と業種別の会費一覧をご確認いただけます。', '/fees'],
  ['検便容器等配布', '指定日に手続きできなかった場合の対応をご案内します。', '/members'],
  ['よくある質問', 'お問い合わせの多い内容をまとめています。', '/faq'],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((v) => (v + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [playing]);
  const move = (direction: number) => setActive((v) => (v + direction + slides.length) % slides.length);

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="八街市食品衛生連合会 ホーム"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></a>
      <nav aria-label="メインメニュー"><a href="#news">お知らせ</a><a href="#schedule">今年度の行事</a><a href="#about">連合会について</a><a href="#member">会員の方へ</a><a href="#contact">お問い合わせ</a></nav>
    </header>

    <section id="top" className="hero" aria-roledescription="カルーセル">
      {slides.map((slide,index)=><img key={slide.src} className={`hero-image ${index===active?'is-active':''}`} src={slide.src} alt={slide.alt}/>)}
      <div className="hero-shade"/>
      <div className="hero-copy"><p className="eyebrow">YACHIMATA FOOD HYGIENE ASSOCIATION</p><h1>食の安心を、<br/>地域とともに。</h1><p>八街市の食品事業者のみなさまと、<br className="desktop-only"/>安全で健やかな食環境を守ります。</p><a className="hero-link" href="#about">私たちの活動を見る <ArrowRight size={18}/></a></div>
      <div className="hero-controls" aria-label="スライド操作"><button onClick={()=>move(-1)} aria-label="前の写真"><ChevronLeft/></button><div className="hero-dots">{slides.map((_,index)=><button key={index} className={index===active?'is-active':''} onClick={()=>setActive(index)} aria-label={`${index+1}枚目を表示`}/>)}</div><button onClick={()=>move(1)} aria-label="次の写真"><ChevronRight/></button><button onClick={()=>setPlaying(v=>!v)} aria-label={playing?'自動再生を停止':'自動再生を開始'}>{playing?<Pause/>:<Play/>}</button></div>
      <a href="#news" className="scroll-cue">SCROLL<span/></a>
    </section>

    <section id="news" className="notice-wrap section-shell"><div className="section-label">IMPORTANT NOTICE</div><div className="notice-list"><article className="notice-card window-hours-notice"><div className="notice-icon">!</div><div><p className="notice-date">2026.10.01から</p><h2>印旛保健所・食品衛生協会の窓口受付時間が変わります</h2><p>令和8年10月1日から、印旛保健所の窓口受付時間（一部窓口を除く）と印旛食品衛生協会の窓口受付時間は、午前9時から午後4時までとなります。</p><a href="https://www.pref.chiba.lg.jp/kf-inba/" target="_blank" rel="noreferrer">印旛保健所の案内を見る <ExternalLink size={16}/></a></div></article><article className="notice-card"><div className="notice-icon">!</div><div><p className="notice-date">2026.07.17 更新</p><h2>千葉県に食中毒警報が発令されました</h2><p>気温や湿度が高くなる時期は食中毒が発生しやすくなります。手洗い、温度管理、洗浄消毒、十分な加熱を徹底しましょう。</p><a href="https://drive.google.com/file/d/1qJvcQQUyXuzRlB88C7Q3jG5N9_BMclno/view?usp=drive_link" target="_blank" rel="noreferrer">詳しいお知らせを見る <ExternalLink size={16}/></a></div></article></div></section>

    <section id="schedule" className="schedule-section"><div className="section-shell"><div className="section-heading"><div><p className="section-label">SCHEDULE</p><h2>今年度の行事</h2></div><p>会員のみなさまに関係する予定をお知らせします。</p></div><div className="schedule-grid">
      <article><CalendarDays/><p className="schedule-date">5月18日・19日</p><h3>検便・水質検査容器等配布</h3><p>八街商工会議所</p><span className="finished">終了しました</span></article>
      <article><CalendarDays/><p className="schedule-date">6月11日</p><h3>検便等提出・食品衛生講習会</h3><p>八街市中央公民館</p><span className="finished">終了しました</span></article>
      <article className="next-event"><CalendarDays/><p className="schedule-date">9月9日・10日</p><h3>食品衛生指導員による巡回指導</h3><p>午前9:15〜12:00</p><span>実施日</span></article>
    </div></div></section>

    <section id="about" className="about-section section-shell"><div className="about-lead"><p className="section-label">ABOUT US</p><h2>安心して食品を提供できる、<br/>地域の環境づくり。</h2></div><div className="about-copy"><p>八街市食品衛生連合会は、行政機関ではなく、食品を扱う事業者がボランティアで運営する団体です。</p><p>食中毒や感染症の予防を通じて、八街市内の食品事業者のみなさまの衛生意識と知識の向上を目指しています。地域・行政・関係機関と連携し、衛生指導や講習会を行っています。</p></div></section>

    <section className="activity-section"><div className="section-shell"><p className="section-label">OUR ACTIVITIES</p><h2>主な活動</h2><div className="activity-grid">{activities.map(({icon:Icon,title,text},index)=><article key={title}><span className="activity-number">0{index+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="member" className="member-section section-shell"><div className="section-heading"><div><p className="section-label">FOR MEMBERS</p><h2>会員の方へ</h2></div><a className="text-link" href="/links">関連リンク一覧 <ArrowRight size={16}/></a></div><div className="link-grid">{usefulLinks.map(([title,text,href])=><a key={title} href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noreferrer':undefined}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight/></a>)}</div></section>

    <section id="contact" className="contact-section"><div className="section-shell contact-inner"><div><p className="section-label">CONTACT</p><h2>お問い合わせ</h2><p>LINE公式アカウントでお問い合わせください。ボランティアで運営しているため、返信にお時間をいただく場合があります。</p></div><div className="contact-box"><span>LINE ID</span><strong>@089piftt</strong><a href="https://sites.google.com/view/yachishoku" target="_blank" rel="noreferrer">お問い合わせ方法を確認する <ExternalLink size={16}/></a></div></div></section>

    <footer><div className="section-shell footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></div><p>地域の食の安全を、みなさまとともに。</p></div><div><h3>所在地</h3><p>〒289-1115<br/>八街市八街ほ224<br/>八街商工会議所内</p></div><div><h3>連絡先</h3><p>TEL 043-443-3021<br/>FAX 043-443-7221</p></div></div><div className="copyright">© Yachimata Food Hygiene Association</div></footer>
  </main>;
}
