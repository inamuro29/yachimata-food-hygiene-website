import { ArrowLeft, ArrowUpRight, BookOpenCheck, ExternalLink, FileCheck2, ShieldCheck } from 'lucide-react';

const groups = [
  { title: '食品衛生・法令関係', icon: BookOpenCheck, links: [
    ['厚生労働省｜食品衛生法関連ページ','食品衛生法の改正や衛生管理に関する情報','https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000197196.html'],
    ['厚生労働省｜食品衛生管理者の資格情報','資格の取得方法や要件を確認できます','https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049348.html'],
    ['千葉県｜食品衛生責任者の資格情報','養成講習会などの案内を確認できます','https://www.pref.chiba.lg.jp/eishi/tetsuzuki/shokuhineisei.html'],
    ['公益社団法人 日本食品衛生協会','食品衛生に関する全国の情報や共済制度','https://www.n-shokuei.jp/'],
    ['公益社団法人 千葉県食品衛生協会','千葉県内の講習会や食品衛生活動の情報','https://chibakenshokkyou.or.jp/'],
    ['厚生労働省｜業種別HACCP手引書一覧','小規模事業者向けを含む業種別手引書','https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000179028_00003.html'],
  ]},
  { title: '営業許可・申請関係', icon: FileCheck2, links: [
    ['千葉県｜食品営業許可・届出','申請方法や必要書類を確認できます','https://www.pref.chiba.lg.jp/eishi/tetsuzuki/eigyou.html'],
    ['消費者庁｜食品表示法','食品表示に関する制度や資料を確認できます','https://www.caa.go.jp/policies/policy/food_labeling/food_labeling_act/'],
    ['厚生労働省｜食品衛生申請等システム','営業許可・営業届出などのオンライン手続き','https://i2fas.mhlw.go.jp/about.htm'],
    ['食品営業許可・届出施設情報','全国の営業許可・届出施設を検索できます','https://i2fas.mhlw.go.jp/faspub/_link.do'],
  ]},
];

export default function LinksPage(){return <main className="subpage links-page">
  <header className="site-header subpage-header"><a className="brand" href="/"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></a><nav aria-label="リンク集ページメニュー"><a href="/join">入会案内</a><a href="/fees">年会費</a><a href="/insurance">あんしんフード君</a><a href="/faq">よくある質問</a></nav></header>
  <section className="subpage-hero links-hero"><div className="section-shell subpage-hero-inner"><a className="back-link" href="/"><ArrowLeft size={17}/>トップページへ戻る</a><p className="eyebrow">USEFUL LINKS</p><h1>リンク集</h1><p>食品衛生、営業許可、HACCPなど、事業者のみなさまに役立つ公的機関のページをまとめています。</p></div></section>
  <section className="internal-links section-shell"><div><p className="section-label">THIS SITE</p><h2>このサイトのご案内</h2></div><div className="internal-link-list"><a href="/insurance">あんしんフード君<ArrowUpRight/></a><a href="/payment">賠償共済の払込方法<ArrowUpRight/></a><a href="/faq">よくある質問<ArrowUpRight/></a></div></section>
  <section className="external-links"><div className="section-shell">{groups.map(({title,icon:Icon,links})=><section className="external-group" key={title}><div className="external-group-heading"><span><Icon/></span><h2>{title}</h2></div><div className="external-link-grid">{links.map(([label,description,href])=><a key={href} href={href} target="_blank" rel="noreferrer"><div><h3>{label}</h3><p>{description}</p></div><ExternalLink/></a>)}</div></section>)}</div></section>
  <footer><div className="section-shell footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></div><p>地域の食の安全を、みなさまとともに。</p></div><div><h3>所在地</h3><p>〒289-1115<br/>八街市八街ほ224<br/>八街商工会議所内</p></div><div><h3>連絡先</h3><p>TEL 043-443-3021<br/>FAX 043-443-7221</p></div></div><div className="copyright">© Yachimata Food Hygiene Association</div></footer>
</main>}
