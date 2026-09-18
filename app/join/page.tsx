import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  FileText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const comparisons = [
  { item: '年会費', member: '3,000円～5,000円', nonMember: 'なし', note: '2025年4月から' },
  { item: '検便', member: '800円／人', nonMember: '1,700円／人' },
  { item: '水質検査', member: '7,700円／件', nonMember: '9,900円／件' },
  { item: '管理ファイル代', member: '500円／冊', nonMember: '1,000円／冊', note: 'HACCP対応' },
  { item: '講習会費', member: '1,000円', nonMember: '3,000円' },
  { item: '賠償共済保険', member: '会員のみ加入できます', nonMember: '加入できません' },
  { item: '巡回指導', member: '食品衛生指導員が訪問', nonMember: '保健所へ相談', note: '会員への訪問は事前告知あり' },
];

export default function JoinPage() {
  return (
    <main className="subpage">
      <header className="site-header subpage-header">
        <a className="brand" href="/" aria-label="八街市食品衛生連合会 ホーム">
          <span className="brand-mark"><ShieldCheck size={24}/></span>
          <span>八街市食品衛生連合会</span>
        </a>
        <nav aria-label="入会案内メニュー">
          <a href="#benefits">会員特典</a>
          <a href="#comparison">料金比較</a>
          <a href="#apply">入会方法</a>
          <a href="/">トップページ</a>
        </nav>
      </header>

      <section className="subpage-hero">
        <div className="section-shell subpage-hero-inner">
          <a className="back-link" href="/"><ArrowLeft size={17}/>トップページへ戻る</a>
          <p className="eyebrow">MEMBERSHIP</p>
          <h1>入会のご案内</h1>
          <p>地域の食品衛生を一緒に守りながら、検査・講習・共済など、日々の営業に役立つ支援をご利用いただけます。</p>
          <a className="hero-link" href="#apply">入会方法を見る <ArrowRight size={18}/></a>
        </div>
      </section>

      <section id="benefits" className="join-intro section-shell">
        <div>
          <p className="section-label">MEMBER BENEFITS</p>
          <h2>身近な場所で、<br/>衛生管理をサポート。</h2>
        </div>
        <div className="join-intro-copy">
          <p>指定された日に八街商工会議所で、検便・水質検査の容器配布や提出、食品衛生講習会の受講ができます。</p>
          <ul className="check-list">
            <li><Check/>検便・水質検査を会員価格で利用</li>
            <li><Check/>HACCP対応の管理ファイルを会員価格で購入</li>
            <li><Check/>食品衛生講習会を会員価格で受講</li>
            <li><Check/>賠償共済保険「あんしんフード君」へ加入可能</li>
            <li><Check/>食品衛生指導員による巡回指導</li>
          </ul>
        </div>
      </section>

      <section id="comparison" className="comparison-section">
        <div className="section-shell">
          <div className="section-heading">
            <div><p className="section-label">COMPARISON</p><h2>会員・非会員の比較</h2></div>
            <p>既存サイト掲載情報（2025年1月7日現在）です。金額は今後変更になる場合があります。</p>
          </div>
          <div className="comparison-table" role="table" aria-label="会員と非会員の料金・サービス比較">
            <div className="comparison-row comparison-head" role="row">
              <div role="columnheader">項目</div><div role="columnheader">会員</div><div role="columnheader">非会員</div>
            </div>
            {comparisons.map((row) => (
              <div className="comparison-row" role="row" key={row.item}>
                <div role="cell"><strong>{row.item}</strong>{row.note && <small>{row.note}</small>}</div>
                <div role="cell" className="member-price"><Sparkles size={17}/>{row.member}</div>
                <div role="cell">{row.nonMember}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="membership-notes section-shell">
        <p className="section-label">MEMBERSHIP NOTES</p>
        <h2>会員資格について</h2>
        <div className="notes-grid">
          <article><span>01</span><h3>ご案内の送付</h3><p>ご入会いただいた方には、4月下旬に案内はがきをお送りします。</p></article>
          <article><span>02</span><h3>年会費のお支払い</h3><p>5月の検便キット配布時に年会費をお支払いいただくと、1年間の会員資格が得られます。</p></article>
          <article><span>03</span><h3>未納・再入会</h3><p>年会費が未納の場合は退会扱いとなります。再入会をご希望の場合は、改めてお手続きください。</p></article>
        </div>
        <aside className="join-note">年会費未納のまま会員価格で検便・水質検査を希望される場合は、八街商工会議所で年会費を支払い、領収書を印旛保健所へご持参ください。</aside>
      </section>

      <section id="apply" className="apply-section">
        <div className="section-shell">
          <div className="apply-heading"><p className="section-label">HOW TO JOIN</p><h2>入会のお申し込み</h2><p>WEBまたはFAXでお申し込みいただけます。</p></div>
          <div className="apply-grid">
            <article>
              <span className="apply-icon"><ExternalLink/></span>
              <p className="apply-method">WEBで申し込む</p>
              <h3>入力フォームから送信</h3>
              <p>必要事項と連絡先メールアドレスをご記入ください。担当者が確認後、返信いたします。</p>
              <p className="apply-caution">プライバシーポリシーへの同意が必要です。</p>
              <a className="primary-button" href="https://forms.gle/qYbosG1M5Lw5kXwD9" target="_blank" rel="noreferrer">WEB入会申込を開く <ExternalLink size={17}/></a>
            </article>
            <article>
              <span className="apply-icon"><FileText/></span>
              <p className="apply-method">FAXで申し込む</p>
              <h3>申込書を印刷して送信</h3>
              <p>申込書を印刷し、必要事項をご記入のうえ、申込書に記載されたFAX番号へお送りください。</p>
              <a className="secondary-button" href="https://drive.google.com/file/d/1fO-lbC4HSQI8ysgL7E9OCRKf3NUXDmUm/view?usp=sharing" target="_blank" rel="noreferrer">FAX用申込書を開く <Download size={17}/></a>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></div><p>地域の食の安全を、みなさまとともに。</p></div>
          <div><h3>所在地</h3><p>〒289-1115<br/>八街市八街ほ224<br/>八街商工会議所内</p></div>
          <div><h3>連絡先</h3><p>TEL 043-443-3021<br/>FAX 043-443-7221</p></div>
        </div>
        <div className="copyright">© Yachimata Food Hygiene Association</div>
      </footer>
    </main>
  );
}
