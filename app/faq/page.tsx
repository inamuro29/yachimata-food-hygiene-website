import { ArrowLeft, HelpCircle, MessageCircleQuestion, ShieldCheck } from 'lucide-react';

const faqs = [
  ['食品衛生協会とは何ですか？', <>食品関係業種別団体を中心とした営業者が、業界の発展と食品衛生の向上を目的として発足した団体です。行政機関ではありません。</>],
  ['八街市食品衛生連合会とは何ですか？', <>印旛保健所管内食品衛生協会の八街市支部に該当します。八街市の食品事業者の代表という意味を込めた名称で、食品事業者がボランティアで活動しています。</>],
  ['食品衛生協会への加入は強制ですか？', <>入会は任意です。入会すると検査や講習、共済などの会員向け支援を利用できます。詳しくは<a href="/join">入会案内</a>をご覧ください。</>],
  ['入会金は必要ですか？', <>八街支部の入会金は0円です。ただし、印旛保健所管内のほかの支部では、会費とは別に入会金が必要な場合があります。</>],
  ['年会費に差があるのはなぜですか？', <>営業許可の種類や業態、事業規模・内容により異なります。2025年4月1日から公平な負担を目指して見直しました。詳しくは<a href="/fees">年会費ページ</a>をご覧ください。</>],
  ['検便は義務ですか？', <>食品衛生法上の義務ではありませんが、従業員の健康状態や衛生管理のため、定期的な自主検査を推奨しています。</>],
  ['自家水を使用する場合、水質検査は必要ですか？', <>水道水以外の水を飲用に供する場合は、水質検査が必要です。</>],
  ['食品衛生講習会と食品衛生実務講習会の違いは？', <>食品衛生講習会は食品衛生責任者を対象とした定期的な講習会です。食品衛生実務講習会は許可証の更新時に受講するもので、千葉県食品衛生協会から通知されます。</>],
  ['食品衛生講習会は義務ですか？', <>義務ではありませんが、新しい知識を習得して衛生管理に生かすため、受講が推奨されています。</>],
  ['八街の食品衛生講習会を受けられない場合は？', <>八街以外の支部でも講習会を実施していますので、ほかの地区で受講してください。</>],
  ['講習会の受講済証が欲しいのですが？', <>講習会を受講した方にのみお渡しします。受講していない場合は発行できません。</>],
  ['届出業種でも食品衛生責任者は必要ですか？', <>原則として、すべての施設に食品衛生責任者を設置する必要があります。</>],
  ['複数店舗で食品衛生責任者を兼務できますか？', <>複数施設の兼務は原則認められません。ただし、隣接施設など支障がないと認められる場合があります。営業所所在地を所管する保健所へご相談ください。</>],
  ['小規模営業者ですが、HACCPは何から始めればよいですか？', <><ol><li>管理ファイルの1・2ページを読む</li><li>3・4ページの衛生管理計画を記入する</li><li>5・6ページにメニューを分類して記入する</li><li>問題発生時の対応方法を記入する</li><li>7ページ以降の日々の記録を始める</li></ol>問題があった箇所は、理由と対応を特記事項へ記録してください。</>],
  ['手洗設備はセンサー式でなければいけませんか？', <>必ずしもセンサー式である必要はありません。レバー式、センサー式、足踏み式、プッシュ式など、洗浄後の手指を再汚染せずに水を止められる構造が必要です。</>],
  ['インボイス制度への対応はどうなっていますか？', <>当連合会は適格請求書発行事業者として登録していません。そのため、発行する領収書は適格請求書に該当しません。会費、検便代、管理ファイル代、水質検査料は、会員支援の一環として設定されています。</>],
  ['あんしんフード君・食品賠償共済へ加入するには？', <>まず八街市食品衛生連合会（070-2797-4826）へご連絡ください。その後、印旛保健所管内食品衛生協会で申込みを行います。</>],
  ['あんしんフード君・食品賠償共済を解約するには？', <>まず八街市食品衛生連合会（070-2797-4826）へご連絡ください。その後、印旛保健所管内食品衛生協会へ加入者証をFAXして手続きを行います。</>],
];

export default function FaqPage(){return <main className="subpage faq-page">
  <header className="site-header subpage-header"><a className="brand" href="/"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></a><nav aria-label="よくある質問ページメニュー"><a href="#faq-list">質問一覧</a><a href="/join">入会案内</a><a href="/fees">年会費</a><a href="/members">検便容器等配布</a></nav></header>
  <section className="subpage-hero faq-hero"><div className="section-shell subpage-hero-inner"><a className="back-link" href="/"><ArrowLeft size={17}/>トップページへ戻る</a><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h1>よくある質問</h1><p>入会、年会費、検便・水質検査、講習会、HACCPなど、お問い合わせの多い内容をまとめました。</p></div></section>
  <section id="faq-list" className="faq-section section-shell"><div className="faq-intro"><div><p className="section-label">QUESTIONS & ANSWERS</p><h2>質問を選んで<br/>回答をご覧ください。</h2></div><div><MessageCircleQuestion/><p>回答を開くには、質問部分をクリックしてください。もう一度クリックすると閉じます。</p></div></div><div className="faq-list">{faqs.map(([question,answer],index)=><details key={String(question)}><summary><span>Q{index+1}</span><strong>{question}</strong><span className="faq-toggle">＋</span></summary><div className="faq-answer"><span>A</span><div>{answer}</div></div></details>)}</div><aside className="faq-contact"><HelpCircle/><div><strong>解決しない場合</strong><p>事務局へお問い合わせください。ボランティアで運営しているため、返信に時間がかかる場合があります。</p></div></aside></section>
  <footer><div className="section-shell footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>八街市食品衛生連合会</span></div><p>地域の食の安全を、みなさまとともに。</p></div><div><h3>所在地</h3><p>〒289-1115<br/>八街市八街ほ224<br/>八街商工会議所内</p></div><div><h3>連絡先</h3><p>TEL 043-443-3021<br/>FAX 043-443-7221</p></div></div><div className="copyright">© Yachimata Food Hygiene Association</div></footer>
</main>}
