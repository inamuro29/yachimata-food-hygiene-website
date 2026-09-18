import { ArrowLeft, ArrowRight, Banknote, CheckCircle2, Clock3, ExternalLink, MapPin, PackageCheck, Phone, ReceiptText, ShieldCheck } from 'lucide-react';

const missedDistribution = [
  { icon: Phone, number: '01', title: '事前に電話する', text: '八街商工会議所へ行く前に、食品衛生の検便等配布担当者が在席しているか必ず確認してください。', detail: '八街商工会議所　043-443-3021' },
  { icon: PackageCheck, number: '02', title: '手続きをする', text: '期限を過ぎると容器・管理ファイルの在庫が不足し、返品後は受け取れない場合があります。', detail: 'できるだけ早めにご連絡ください' },
  { icon: MapPin, number: '03', title: '容器を受け取る', text: '八街で容器を受け取れない場合は、印旛保健所管内食品衛生協会へお問い合わせください。', detail: '平日 9:00～16:00' },
];

const submissionSteps = [
  { title: '持ち物を用意する', items: ['検体（検便・水質）', '容器配布時に発行された領収書一式', '提出時に支払う費用'] },
  { title: '指定の場所で提出する', items: ['検便：指定回収日の9:00～11:00', '水質：原則毎週水曜日 9:30～11:00', '取扱いのない日もあるため事前確認を推奨'] },
  { title: '提出時に支払う', items: ['検便：700円×個数（容器代100円は不要）', '水質検査：6,700円（容器代1,000円は不要）', '講習会場の場合：講習会代1,000円'] },
  { title: '八街商工会議所で返金を受ける', items: ['印旛保健所管内食品衛生協会発行の領収書を持参', '担当者の在席を事前に電話確認', '領収書は現金との引き換えで回収'] },
];

export default function MembersPage() {
  return <main className="subpage members-page">
    <header className="site-header subpage-header"><a className="brand" href="/"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></a><nav aria-label="検便容器等配布ページメニュー"><a href="#distribution">容器を受け取れなかった方</a><a href="#submission">提出できなかった方</a><a href="/faq">よくある質問</a><a href="/">トップページ</a></nav></header>

    <section className="subpage-hero members-hero"><div className="section-shell subpage-hero-inner"><a className="back-link" href="/"><ArrowLeft size={17}/>トップページへ戻る</a><p className="eyebrow">TEST KIT GUIDANCE</p><h1>検便容器等配布</h1><p>指定日に手続きできなかった場合や、回収日に提出できなかった場合の対応をご案内します。</p><a className="hero-link" href="#distribution">対応手順を見る <ArrowRight size={18}/></a></div></section>

    <section className="members-alert section-shell"><div><Clock3/><div><strong>まずご確認ください</strong><p>指定日を過ぎてから八街商工会議所へ行く場合は、担当者が在席しているか事前に電話で確認してください。</p></div></div><a href="tel:0434433021"><Phone size={18}/>043-443-3021</a></section>

    <section id="distribution" className="distribution-section section-shell"><div className="section-heading"><div><p className="section-label">MISSED DISTRIBUTION</p><h2>指定配布日に<br/>来られなかった方</h2></div><p>対象：年会費、検便・水質検査容器等の配布指定日に来られなかった方</p></div><div className="procedure-grid">{missedDistribution.map(({icon:Icon,number,title,text,detail})=><article key={number}><span className="procedure-number">{number}</span><Icon/><h3>{title}</h3><p>{text}</p><strong>{detail}</strong></article>)}</div></section>

    <section id="submission" className="submission-section"><div className="section-shell"><div className="section-heading"><div><p className="section-label">MISSED SUBMISSION</p><h2>回収日に提出<br/>できなかった方</h2></div><p>対象：八街での検便・水質検査回収日に提出できなかった会員の方</p></div><div className="submission-layout"><div className="submission-steps">{submissionSteps.map((step,index)=><article key={step.title}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{step.title}</h3><ul>{step.items.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></div></article>)}</div><aside className="submission-contact"><MapPin/><p className="section-label">SUBMISSION PLACE</p><h3>印旛保健所管内<br/>食品衛生協会</h3><p>提出日や取扱いの有無を、事前にお問い合わせください。</p><a href="tel:0434831179"><Phone size={17}/>043-483-1179</a><a href="https://www.pref.chiba.lg.jp/kf-inba/kenkousoudan/kenben/index.html" target="_blank" rel="noreferrer">検便の回収日を確認 <ExternalLink size={16}/></a></aside></div></div></section>

    <section className="refund-section section-shell"><div><p className="section-label">REFUND</p><h2>返金手続きの注意点</h2></div><div className="refund-card"><ReceiptText/><div><h3>協会発行の領収書が必要です</h3><p>印旛保健所管内食品衛生協会で発行された領収書を八街商工会議所へ持参してください。領収書は現金と引き換えで回収します。</p><p className="refund-warning">八街市食品衛生連合会発行の領収書では返金できません。</p></div></div><div className="refund-card"><Banknote/><div><h3>提出時はいったん支払いが必要です</h3><p>引取業者へ直接支払った後、八街商工会議所で返金手続きを行います。来所前に担当者の在席をご確認ください。</p></div></div></section>

    <footer><div className="section-shell footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></div><p>地域の食の安全を、みなさまとともに。</p></div><div><h3>所在地</h3><p>〒289-1115<br/>八街市八街ほ224<br/>八街商工会議所内</p></div><div><h3>連絡先</h3><p>TEL 043-443-3021<br/>FAX 043-443-7221</p></div></div><div className="copyright">© Yachimata Food Hygiene Association</div></footer>
  </main>;
}
