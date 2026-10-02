import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  ExternalLink,
  FileText,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';

const feeDocuments = [
  {
    title: '許可業種の会費一覧',
    description: '飲食店営業など、営業許可が必要な業種の年会費です。',
    href: 'https://drive.google.com/file/d/1-YOvmJzU9-GL5QFIKZRgEsblEvILoeLM/preview',
  },
  {
    title: '届出業種の会費一覧',
    description: '営業届出の対象となる業種の年会費です。',
    href: 'https://drive.google.com/file/d/1-VWS40UMskRopNhLtzrD6QzUZ3CWvEGO/preview',
  },
  {
    title: '許可・届出不要業種の会費一覧',
    description: '営業許可・届出が不要な業種の年会費です。',
    href: 'https://drive.google.com/file/d/1-MvubOGViRfFO0XjmTAnKDXzoy8MmLuL/preview',
  },
  {
    title: '全業種の会費一覧',
    description: 'すべての業種をまとめて確認できる一覧です。',
    href: 'https://drive.google.com/file/d/1-CIEAL9_x77H5Ij0HQVZpocRRxNv5HvD/preview',
    featured: true,
  },
];

const permittedFees = [
  ['飲食店営業（通常の飲食店・仕出弁当屋・弁当屋・旅館・ホテル・居酒屋・スナック等）', '4,000円'],
  ['調理機能付き自動販売機による営業', '4,000円'],
  ['食肉販売業', '4,000円'], ['魚介類販売業', '4,000円'], ['魚介類競り売り営業', '4,000円'],
  ['集乳業', '5,000円'], ['乳処理業', '5,000円'], ['特別牛乳搾取処理業', '5,000円'],
  ['食肉処理業', '4,000円'], ['食品の放射線照射業', '5,000円'], ['菓子製造業', '4,000円'],
  ['アイスクリーム類製造業', '5,000円'], ['乳製品製造業', '5,000円'], ['清涼飲料水製造業', '5,000円'],
  ['食肉製品製造業', '5,000円'], ['水産製品製造業', '5,000円'], ['氷雪製造業', '5,000円'],
  ['液卵製造業', '5,000円'], ['食用油脂製造業', '5,000円'], ['みそ又はしょうゆ製造業', '5,000円'],
  ['酒類製造業', '5,000円'], ['豆腐製造業', '5,000円'], ['納豆製造業', '5,000円'],
  ['麺類製造業', '5,000円'], ['そうざい製造業', '5,000円'], ['複合型そうざい製造業', '5,000円'],
  ['冷凍食品製造業', '5,000円'], ['複合型冷凍食品製造業', '5,000円'], ['漬物製造業', '5,000円'],
  ['密封包装食品製造業', '5,000円'], ['食品の小分け業', '4,000円'], ['添加物製造業', '5,000円'],
];

const notifiedFees = [
  ['食品の冷凍又は冷蔵業', '5,000円'],
  ['調味料・製茶・農産保存食料品・その他の食料品の製造・加工業', '5,000円'],
  ['魚介類販売業（包装済み魚介類のみ）', '4,000円'], ['食肉販売業（包装済み食肉のみ）', '4,000円'],
  ['乳類販売業', '4,000円'], ['氷雪販売業', '4,000円'], ['コップ式自動販売機（自動洗浄・屋内設置）', '3,000円'],
  ['弁当販売業', '4,000円'], ['野菜果物販売業', '4,000円'], ['米穀類販売業', '4,000円'],
  ['通信販売・訪問販売による販売業', '4,000円'], ['コンビニエンスストア', '4,000円'],
  ['百貨店・総合スーパー', '4,000円'], ['自動販売機による販売業', '4,000円'], ['その他の食料・飲料販売業', '4,000円'],
  ['添加物製造・加工業', '5,000円'], ['健康食品の製造・加工業', '5,000円'],
  ['コーヒー製造・加工業（飲料の製造を除く）', '5,000円'], ['農産保存食料品製造・加工業', '5,000円'],
  ['調味料製造・加工業', '5,000円'], ['糖類製造・加工業', '5,000円'], ['精穀・製粉業', '5,000円'],
  ['製茶業', '5,000円'], ['海藻製造・加工業', '5,000円'], ['卵選別包装業', '5,000円'],
  ['その他の食料品製造・加工業', '5,000円'], ['行商', '5,000円'], ['集団給食施設', '5,000円'],
  ['器具・容器包装の製造・加工業', '5,000円'], ['露店・仮設店舗等での飲食提供（営業とみなされないもの）', '5,000円'],
  ['その他', '5,000円'],
];

const exemptFees = [
  ['食品又は添加物の輸入をする営業', '3,000円'],
  ['食品又は添加物の貯蔵・運搬業（常温保存品のみ）', '3,000円'],
  ['常温で長期保存しても腐敗・変敗のおそれがない包装食品の販売（カップ麺・スナック菓子等）', '3,000円'],
  ['合成樹脂以外の器具・容器包装の製造業', '3,000円'],
  ['1回20食程度未満の営業以外の給食施設（学校・診療所等）', '3,000円'],
  ['漁業・農業の採取業', '3,000円'], ['その他', '3,000円'],
];

function FeeTable({title, rows}:{title:string; rows:string[][]}) {
  return <section className="fee-list-card"><h3>{title}</h3><div className="fee-list-scroll"><table className="fee-list-table"><thead><tr><th scope="col">業種</th><th scope="col">年会費</th></tr></thead><tbody>{rows.map(([name,fee])=><tr key={name}><th scope="row">{name}</th><td>{fee}</td></tr>)}</tbody></table></div></section>;
}

export default function FeesPage() {
  return (
    <main className="subpage fee-page">
      <header className="site-header subpage-header">
        <a className="brand" href="/" aria-label="八街市食品衛生連合会 ホーム">
          <span className="brand-mark"><ShieldCheck size={24}/></span>
          <span>八街市食品衛生連合会</span>
        </a>
        <nav aria-label="年会費ページメニュー">
          <a href="#notice">改定のお知らせ</a>
          <a href="#background">改定の背景</a>
          <a href="#documents">会費一覧</a>
          <a href="/join">入会案内</a>
        </nav>
      </header>

      <section className="subpage-hero fee-hero">
        <div className="section-shell subpage-hero-inner">
          <a className="back-link" href="/"><ArrowLeft size={17}/>トップページへ戻る</a>
          <p className="eyebrow">ANNUAL MEMBERSHIP FEE</p>
          <h1>年会費</h1>
          <p>2025年4月1日から、新しい年会費体系が適用されています。業種ごとの会費は一覧表でご確認ください。</p>
          <a className="hero-link" href="#documents">会費一覧を見る <ArrowRight size={18}/></a>
        </div>
      </section>

      <section id="notice" className="fee-notice section-shell">
        <div className="fee-notice-heading">
          <p className="section-label">IMPORTANT INFORMATION</p>
          <h2>年会費改定に関する<br/>お知らせ</h2>
        </div>
        <div className="fee-notice-copy">
          <p>平素より、食品衛生の推進および会の運営にご協力いただき、誠にありがとうございます。</p>
          <p>年会費は、巡回指導、専門的な衛生管理指導、講習会、衛生用品の配布・販売、指導員の教育、優良施設の推薦、賠償共済制度の周知など、食品衛生の向上と事業者支援のために活用されています。</p>
          <div className="effective-date"><CalendarCheck/><div><span>新会費の施行日</span><strong>2025年4月1日</strong></div></div>
          <p>新しい会費体系は、2024年6月18日に開催された総会で決定されました。</p>
        </div>
      </section>

      <section id="background" className="fee-background">
        <div className="section-shell">
          <div className="section-heading">
            <div><p className="section-label">BACKGROUND</p><h2>改定の背景</h2></div>
            <p>法改正への対応と、会費負担の公平性を確保するための見直しです。</p>
          </div>
          <div className="background-grid">
            <article><span><Scale/></span><h3>営業許可制度の改定</h3><p>令和3年6月から「要許可業種」「届出業種」「届出不要業種」という新たな区分が導入されました。</p></article>
            <article><span><Users/></span><h3>負担の公平性</h3><p>業種ごとの会費体系が現状に合わないというご意見を受け、不公平感の解消を図りました。</p></article>
            <article><span><ShieldCheck/></span><h3>活動を継続するために</h3><p>事業規模や活動内容に応じた、より公平で適正な会費制度として運用します。</p></article>
          </div>
        </div>
      </section>

      <section id="documents" className="fee-documents section-shell">
        <div className="section-heading">
          <div><p className="section-label">FEE LIST</p><h2>業種ごとの会費一覧</h2></div>
          <p>2025年4月1日から適用されている、現在の年会費です。</p>
        </div>
        <div className="fee-list-stack">
          <FeeTable title="許可業種" rows={permittedFees}/>
          <FeeTable title="届出業種" rows={notifiedFees}/>
          <FeeTable title="許可・届出不要業種" rows={exemptFees}/>
        </div>
        <p className="fee-rule-note">複数の業種に該当する場合も、メインとなる業種の会費を適用します。以前の「2種以上の許可・届出によるプラス1,000円」は廃止されています。</p>
        <details className="fee-source-documents"><summary>改定時の原資料（PDF）を確認する</summary><div className="fee-document-grid">
          {feeDocuments.map((document) => (
            <a className={document.featured ? 'featured' : ''} key={document.title} href={document.href} target="_blank" rel="noreferrer">
              <span className="document-icon"><FileText/></span>
              <div><p>{document.featured ? 'まとめて確認' : '詳細資料'}</p><h3>{document.title}</h3><span>{document.description}</span></div>
              <ExternalLink/>
            </a>
          ))}
        </div></details>
        <aside className="fee-help"><strong>どの業種に該当するか分からない場合</strong><p>年会費や業種区分についてのご質問は、八街市食品衛生連合会事務局までお問い合わせください。</p></aside>
      </section>

      <section className="fee-request">
        <div className="section-shell fee-request-inner">
          <div><p className="section-label">OUR REQUEST</p><h2>皆様へのお願い</h2></div>
          <div><p>今後も透明性のある運営を行い、食品衛生の向上に取り組んでまいります。活動へのご理解とご協力をお願いいたします。</p><a className="secondary-button" href="/join">入会案内を見る <ArrowRight size={17}/></a></div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></div><p>地域の食の安全を、みなさまとともに。</p></div>
          <div><h3>所在地</h3><p>〒289-1115<br/>八街市八街ほ224<br/>八街商工会議所内</p></div>
          <div><h3>連絡先</h3><p>携帯 070-2797-4826</p></div>
        </div>
        <div className="copyright">© Yachimata Food Hygiene Association</div>
      </footer>
    </main>
  );
}
