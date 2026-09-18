import { ArrowLeft, CheckCircle2, MessageSquareText, ScanLine, ShieldCheck, Smartphone, Store } from 'lucide-react';

const steps=[
  {title:'SMSを受け取る',text:'登録済みのスマートフォン番号へ、決済サイトの案内が届きます。',icon:MessageSquareText},
  {title:'決済サイトを開く',text:'SMSに記載された案内から、払込に必要な情報を入力します。',icon:Smartphone},
  {title:'バーコードを表示',text:'手続き後、コンビニ払い用の電子バーコードを画面に表示します。',icon:ScanLine},
  {title:'レジで支払う',text:'スマートフォンのバーコードをコンビニのレジで提示し、掛金を支払います。',icon:Store},
];

export default function PaymentPage(){return <main className="subpage payment-page">
  <header className="site-header subpage-header"><a className="brand" href="/"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></a><nav aria-label="払込方法ページメニュー"><a href="#flow">払込の流れ</a><a href="/insurance">あんしんフード君</a><a href="/faq">よくある質問</a><a href="/links">リンク集</a></nav></header>
  <section className="subpage-hero payment-hero"><div className="section-shell subpage-hero-inner"><a className="back-link" href="/"><ArrowLeft size={17}/>トップページへ戻る</a><p className="eyebrow">PAYMENT GUIDE</p><h1>賠償共済の<br/>払込方法</h1><p>口座振替を選択していない会員の方は、スマートフォンに届く電子バーコードを使ってコンビニでお支払いいただけます。</p></div></section>
  <section className="payment-overview section-shell"><div><p className="section-label">WHO CAN USE</p><h2>対象となる方</h2></div><div className="target-card"><CheckCircle2/><div><strong>賠償共済に加入し、口座振替を選択していない会員</strong><p>登録済みのスマートフォン番号でSMSを受け取れることをご確認ください。</p></div></div></section>
  <section id="flow" className="payment-flow"><div className="section-shell"><p className="section-label">HOW TO PAY</p><h2>コンビニ払いの流れ</h2><div className="payment-step-grid">{steps.map(({title,text,icon:Icon},index)=><article key={title}><span className="payment-step-number">0{index+1}</span><span className="payment-step-icon"><Icon/></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="payment-note"><div className="section-shell"><h2>払込前にご確認ください</h2><ul><li><CheckCircle2/>SMSに記載された内容と支払期限を確認する</li><li><CheckCircle2/>バーコードは支払い直前に表示する</li><li><CheckCircle2/>支払い後の受領証は大切に保管する</li></ul></div></section>
  <footer><div className="section-shell footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></div><p>地域の食の安全を、みなさまとともに。</p></div><div><h3>所在地</h3><p>〒289-1115<br/>八街市八街ほ224<br/>八街商工会議所内</p></div><div><h3>連絡先</h3><p>TEL 043-443-3021<br/>FAX 043-443-7221</p></div></div><div className="copyright">© Yachimata Food Hygiene Association</div></footer>
</main>}
