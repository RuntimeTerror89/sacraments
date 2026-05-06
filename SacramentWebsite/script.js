// ── SACRAMENT DATA ──────────────────────────────────────────────
const sacraments = {
  baptism: {
    icon: '💧',
    title: 'Baptism',
    subtitle: 'Sacrament of Initiation · New Life in Christ',
    color: '#1A6EA0',
    meaning: `Baptism is the first and foundational sacrament — the gateway through which we enter into the life of the Holy Trinity and become members of the Church. It is not merely a ritual washing, but a death and resurrection: we die to sin and rise to new life in Christ. Through the waters of Baptism, original sin is forgiven, we are adopted as children of God, and the Holy Spirit dwells within us.`,
    meaning2: `For many Thomasians, Baptism was received as infants — yet its grace continues to unfold throughout life. Each Easter Vigil, the Church renews baptismal promises, reminding us that this sacrament is not a past event but an ongoing identity: we are the baptized.`,
    scripture: `"Unless one is born of water and the Spirit, he cannot enter the kingdom of God."`,
    scriptureRef: `John 3:5`,
    scripture2: `"We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life." — Romans 6:4`,
    symbols: [
      { icon: '💧', name: 'Water', desc: 'Death and rebirth; cleansing from sin' },
      { icon: '🕯️', name: 'Baptismal Candle', desc: 'Christ, the Light of the World' },
      { icon: '🤍', name: 'White Garment', desc: 'New creation in Christ' },
      { icon: '🫒', name: 'Chrism Oil', desc: 'Anointing as priest, prophet, king' },
      { icon: '✝️', name: 'Sign of the Cross', desc: 'Claimed by the Trinity' },
    ],
    effects: [
      { icon: '✨', title: 'Forgiveness of Original Sin', desc: 'All sin — original and personal — is washed away entirely.' },
      { icon: '👼', title: 'Adoption as God\'s Child', desc: 'We become daughters and sons of the Father, heirs of heaven.' },
      { icon: '⛪', title: 'Incorporation into the Church', desc: 'We are joined to the Body of Christ, the universal Church.' },
      { icon: '🕊️', title: 'Indwelling of the Holy Spirit', desc: 'The Spirit comes to dwell within us as a seal and gift.' },
      { icon: '🔏', title: 'Sacramental Character', desc: 'An indelible mark on the soul — Baptism is received only once.' },
    ],
    theology: `In simple terms: Baptism is like being adopted into the greatest family in the universe. Before Baptism, we belong to ourselves — or worse, to sin. After Baptism, we belong to God. The water isn't magic — it's a sign that carries real grace: the grace of being made new. You didn't earn it, you can't lose it (the character is permanent), and you'll spend the rest of your life discovering what it means.`,
    reflections: [
      'When was the last time you thought about being baptized? What does it mean that God claimed you as His own before you could even respond?',
      'How does knowing you are "a new creation" in Christ change how you see yourself on your worst days?',
      'Is there a way your Baptism calls you to act differently in your relationships at school or at home?',
      'How might you "renew" your Baptism in a practical way this week — through prayer, service, or reconciliation?',
    ],
    saint: { icon: '👶', name: 'St. John the Baptist', desc: 'The forerunner of Christ, who baptized Jesus in the Jordan and prepared the way. He models radical openness to God\'s call — even from the womb — and the courage to proclaim the truth regardless of cost.' },
    prayer: `"Lord Jesus, by your death and resurrection, you made Baptism the sacrament of our new life. May I always remember the dignity given to me on the day of my Baptism, and live worthy of the gift of being called a child of God. Amen."`,
  },

  eucharist: {
    icon: '🍞',
    title: 'The Eucharist',
    subtitle: 'Source and Summit of Christian Life',
    color: '#8B4513',
    meaning: `The Eucharist is the heart of the Christian life and the culmination of Christian initiation. At every Mass, bread and wine are truly transformed — through the power of the Holy Spirit and the words of consecration — into the Body and Blood, Soul and Divinity of Jesus Christ. This is not a symbol or a memorial meal alone; it is a real, living, personal encounter with the risen Lord.`,
    meaning2: `For Thomasians who attend Mass on campus, the Eucharist can sometimes feel routine. But the Church teaches that this is the greatest gift: "The Eucharist is 'the source and summit of the Christian life'" (CCC 1324). Nothing compares. In receiving Communion, we receive Christ himself.`,
    scripture: `"This is my body, which is given for you. Do this in remembrance of me."`,
    scriptureRef: `Luke 22:19`,
    scripture2: `"I am the living bread that came down from heaven. Whoever eats this bread will live forever; and the bread that I will give is my flesh for the life of the world." — John 6:51`,
    symbols: [
      { icon: '🍞', name: 'Bread', desc: 'Ordinary food transformed into Christ\'s Body' },
      { icon: '🍷', name: 'Wine', desc: 'Transformed into the precious Blood of Christ' },
      { icon: '⚗️', name: 'Chalice', desc: 'The New Covenant in His Blood' },
      { icon: '🕯️', name: 'Candles', desc: 'Christ\'s eternal light on the altar' },
      { icon: '📿', name: 'Incense', desc: 'Our prayers rising to the Father' },
    ],
    effects: [
      { icon: '🤝', title: 'Union with Christ', desc: 'We are joined intimately to the Body of Christ, soul and body.' },
      { icon: '⚡', title: 'Increase of Grace', desc: 'Sanctifying grace is nourished and deepened in the soul.' },
      { icon: '❤️', title: 'Forgiveness of Venial Sins', desc: 'The Eucharist cleanses us of lesser sins and strengthens against future sin.' },
      { icon: '⛪', title: 'Unity of the Church', desc: 'All who receive Communion are united in one Body across time and space.' },
      { icon: '🌟', title: 'Pledge of Future Glory', desc: 'The Eucharist is a foretaste of the heavenly banquet — our eternal destiny.' },
    ],
    theology: `Simply put: Jesus is present in the Eucharist — not figuratively, but truly, really, and substantially. When you receive Communion, you are not just "remembering" Jesus or thinking about His sacrifice. You are actually receiving Him. The technical term is transubstantiation: the substance of bread and wine is changed into the Body and Blood of Christ, though the appearances of bread and wine remain. This is why Catholics genuflect before the tabernacle — because Jesus is truly there.`,
    reflections: [
      'Do you approach Communion differently knowing Jesus is truly present in the Eucharist? What would it look like to approach with more intentionality?',
      'How could attending Mass with more awareness — reading the readings beforehand, arriving early — deepen your encounter with Christ?',
      'Is there a "routine" in your faith life you\'d like to renew? How might the Eucharist help you do that?',
      'What does it mean to you that the same Eucharist celebrated in Rome, in Manila, and at UST Legazpi makes us one Body?',
    ],
    saint: { icon: '🌺', name: 'St. Juan Diego', desc: 'The humble Mexican peasant to whom Our Lady of Guadalupe appeared — a man of simple, Eucharistic faith who trusted in God\'s presence in the ordinary. He teaches us that Christ comes to those who are humble and open.' },
    prayer: `"Lord Jesus, I believe that you are truly present in the Eucharist — Body, Blood, Soul, and Divinity. May every Mass I attend deepen my hunger for you, and may your presence in me transform the way I love others. Amen."`,
  },

  confirmation: {
    icon: '🕊️',
    title: 'Confirmation',
    subtitle: 'Sealed with the Gift of the Holy Spirit',
    color: '#8B0000',
    meaning: `Confirmation completes the grace of Baptism and deepens our membership in the Church. Through the anointing with Chrism oil and the imposition of the bishop's hands, the confirmed receive a special outpouring of the Holy Spirit — the same Spirit who descended on the apostles at Pentecost. This sacrament makes us soldiers of Christ, empowering us to defend and spread the faith boldly.`,
    meaning2: `For young Thomasians, Confirmation is often a crossroads moment. After years of Catholic education, this sacrament invites a personal decision: to own one's faith, not merely inherit it. The gifts of the Holy Spirit — wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord — are not abstract qualities but real empowerments for mission.`,
    scripture: `"You will receive power when the Holy Spirit has come upon you, and you will be my witnesses."`,
    scriptureRef: `Acts 1:8`,
    scripture2: `"And I will ask the Father, and he will give you another Helper, to be with you forever, even the Spirit of truth." — John 14:16–17`,
    symbols: [
      { icon: '🫒', name: 'Chrism Oil', desc: 'Sacred oil sealing the Holy Spirit\'s gift' },
      { icon: '🤲', name: 'Imposition of Hands', desc: 'The bishop\'s gesture of conferring the Spirit' },
      { icon: '🕊️', name: 'The Dove', desc: 'Symbol of the Holy Spirit' },
      { icon: '🔥', name: 'Fire', desc: 'The Spirit\'s purifying and empowering presence' },
      { icon: '🌬️', name: 'Breath/Wind', desc: 'The Spirit as the breath of new life' },
    ],
    effects: [
      { icon: '🕊️', title: 'Gifts of the Holy Spirit', desc: 'The seven gifts are poured out to equip the confirmed for mission and holiness.' },
      { icon: '🛡️', title: 'Strengthened for Witness', desc: 'Confirmed Catholics are emboldened to profess and defend the faith.' },
      { icon: '🔗', title: 'Deeper Bond with the Church', desc: 'Confirmation deepens our ties to the universal Body of Christ.' },
      { icon: '🔏', title: 'Sacramental Character', desc: 'Like Baptism, Confirmation imprints an indelible mark and is received once.' },
      { icon: '⚡', title: 'Increase in Sanctifying Grace', desc: 'The confirmed receive an increase in the grace already given at Baptism.' },
    ],
    theology: `Think of Baptism as being born into God's family and Confirmation as growing up in it — taking responsibility, choosing to stay, and receiving the equipment for adult faith. The Holy Spirit isn't a feeling; the Spirit is a Person. When you're confirmed, you're not just confirmed "in the faith" — you're confirmed in a relationship with the Third Person of the Trinity, who will accompany you for the rest of your life and guide you in every decision that matters.`,
    reflections: [
      'If Confirmation is a personal decision to own your faith, what does owning your faith look like in your day-to-day life as a student?',
      'Which of the seven gifts of the Holy Spirit do you most need right now — and why?',
      'How does being "a soldier of Christ" speak to you in today\'s world? What are you called to defend or proclaim?',
      'Is there someone in your life who needs to witness your faith? How might the Holy Spirit be calling you to witness to them?',
    ],
    saint: { icon: '⚡', name: 'St. Joan of Arc', desc: 'Guided by the Holy Spirit from age 13, Joan fearlessly led armies and faced martyrdom with courage. She is the patron of France and a model of youthful, Spirit-driven courage for those confirmed to witness boldly.' },
    prayer: `"Come, Holy Spirit, fill my heart with your fire. Grant me the courage to live my Confirmation, to be a witness to Christ in my school, my home, and my community. Make me bold in faith and generous in love. Amen."`,
  },

  reconciliation: {
    icon: '🙏',
    title: 'Reconciliation',
    subtitle: 'God\'s Mercy Made Tangible',
    color: '#2D7A4A',
    meaning: `The sacrament of Reconciliation (also called Confession or Penance) is one of the most profound gifts Christ gave to the Church. On the evening of the Resurrection, Jesus breathed on the apostles and said: "Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them." Through this sacrament, the Church continues Christ's ministry of mercy.`,
    meaning2: `Reconciliation is not about shame or punishment — it is about encounter. We encounter the mercy of God in its most personal form: a voice that says, over the specific sins we've committed, "You are forgiven." For young people carrying guilt, shame, or the weight of past choices, this sacrament is life-changing. The Catechism calls it the "sacrament of healing" — and healing is exactly what it offers.`,
    scripture: `"Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them; if you retain the sins of any, they are retained."`,
    scriptureRef: `John 20:22–23`,
    scripture2: `"If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." — 1 John 1:9`,
    symbols: [
      { icon: '🤲', name: 'Confessor\'s Hands', desc: 'Raised in absolution over the penitent' },
      { icon: '📿', name: 'Purple Stole', desc: 'The color of penance and mercy' },
      { icon: '🕊️', name: 'The Dove', desc: 'Peace of the Holy Spirit restored' },
      { icon: '💐', name: 'The Prodigal\'s Return', desc: 'God running to meet us in our return' },
      { icon: '🌟', name: 'Light', desc: 'Emerging from darkness into grace' },
    ],
    effects: [
      { icon: '✝️', title: 'Forgiveness of Mortal & Venial Sin', desc: 'All sins confessed with contrition are forgiven completely.' },
      { icon: '💚', title: 'Restoration of Sanctifying Grace', desc: 'Mortal sin kills grace in the soul; Confession restores it fully.' },
      { icon: '🕊️', title: 'Peace of Conscience', desc: 'The peace that surpasses understanding — freedom from guilt.' },
      { icon: '💪', title: 'Spiritual Strength', desc: 'Grace is given to resist future temptation and sin.' },
      { icon: '⛪', title: 'Reconciliation with the Church', desc: 'Sin wounds the Church; Confession heals the communal bond too.' },
    ],
    theology: `Here's the honest truth: going to Confession can feel terrifying. That's normal. But here's what's even more true: God already knows every sin you've committed. He doesn't need information — He needs your willingness to turn toward Him. Confession is not about convincing God to forgive you. It's about receiving, in a concrete human way, the forgiveness He already wants to give. The priest acts in the person of Christ — and the words of absolution are the words of Christ himself: "Your sins are forgiven."`,
    reflections: [
      'Is there something you\'ve been carrying for a long time — guilt or shame — that you\'ve been afraid to bring to Confession? What holds you back?',
      'How does knowing God already knows your sins, yet still loves you, change your image of what Confession is?',
      'What would your life look like if you went to Confession once a month? How might it affect your sense of peace and freedom?',
      'Can you think of a time when forgiving someone else felt like it gave YOU freedom? How might receiving God\'s forgiveness work the same way?',
    ],
    saint: { icon: '💚', name: 'St. Faustina Kowalska', desc: 'The mystic to whom Christ revealed the Divine Mercy devotion, emphasizing that no sin is greater than God\'s mercy. Her diary is a treasure for anyone struggling with guilt or shame.' },
    prayer: `"O my God, I am heartily sorry for having offended You, and I detest all my sins because of Your just punishments, but most of all because they offend You, my God, who are all good and deserving of all my love. I firmly resolve, with the help of Your grace, to sin no more and to avoid the near occasions of sin. Amen."`,
  },

  anointing: {
    icon: '🕯️',
    title: 'Anointing of the Sick',
    subtitle: 'Christ\'s Healing Presence',
    color: '#6B4E8E',
    meaning: `The Anointing of the Sick is one of the most misunderstood sacraments — once called "Last Rites," it is now understood as a sacrament not only for the dying but for all who are gravely ill or aging. Through the anointing with sacred oil and the prayer of the priest, Christ himself comes to those who suffer, bringing healing — spiritual healing always, and sometimes physical.`,
    meaning2: `For Thomasians, this sacrament may seem distant — something for grandparents or the very ill. But the Church's wisdom is broader: anyone facing a serious illness, surgery, or the frailty of age can receive this sacrament. And in witnessing a loved one receive it, we often encounter something profound: the peace of Christ in the midst of suffering.`,
    scripture: `"Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord."`,
    scriptureRef: `James 5:14`,
    scripture2: `"They drove out many demons and anointed many sick people with oil and healed them." — Mark 6:13`,
    symbols: [
      { icon: '🫒', name: 'Oil of the Sick', desc: 'Blessed olive oil used to anoint forehead and hands' },
      { icon: '🤲', name: 'Imposition of Hands', desc: 'The priest\'s silent gesture of Christ\'s healing touch' },
      { icon: '🕯️', name: 'Lighted Candle', desc: 'Christ\'s light present in darkness and suffering' },
      { icon: '🙏', name: 'Prayer of Faith', desc: 'The Church\'s intercession uniting the sick with Christ\'s Passion' },
    ],
    effects: [
      { icon: '🕊️', title: 'Spiritual Strengthening', desc: 'The sick are given courage, peace, and trust in God to face suffering.' },
      { icon: '💚', title: 'Forgiveness of Sins', desc: 'If the sick person cannot confess, the sacrament forgives sins.' },
      { icon: '🌟', title: 'Union with Christ\'s Passion', desc: 'Suffering is given meaning — united to the redemptive suffering of Christ.' },
      { icon: '🏥', title: 'Possible Physical Healing', desc: 'If it serves the good of the soul, bodily healing may also be granted.' },
      { icon: '☁️', title: 'Preparation for Eternal Life', desc: 'For those near death, it is a preparation for the final journey home.' },
    ],
    theology: `Suffering is one of the hardest realities of human life — and the Anointing of the Sick doesn't pretend otherwise. What it does is bring Christ into the middle of suffering. Jesus himself suffered — on the Cross, in Gethsemane, in the moments of abandonment. When we receive this sacrament, our suffering is united with His. It is not "erased" or made to disappear, but transformed: given meaning, given company, given hope. The sick person is never alone.`,
    reflections: [
      'Have you ever been ill and felt alone or frightened? How might knowing Christ was present in that experience change it?',
      'How do you personally respond to seeing someone suffer? What does this sacrament say about how God responds to suffering?',
      'Is there someone in your family or community who is sick or elderly who might benefit from receiving this sacrament? How could you help connect them?',
      'What does it mean to "unite your suffering to Christ\'s Passion"? Have you ever found meaning in a difficult experience?',
    ],
    saint: { icon: '🌸', name: 'St. Pio of Pietrelcina (Padre Pio)', desc: 'The stigmatist who bore the wounds of Christ and spent hours daily hearing confessions. He knew suffering intimately and embraced it as a participation in Christ\'s redeeming work — a model for all who suffer.' },
    prayer: `"Lord Jesus, you are the Divine Physician of our souls and bodies. In our sickness and weakness, may we find in you strength, peace, and healing. United to your Cross, may our suffering become a source of grace — for ourselves and for others. Amen."`,
  },

  holyorders: {
    icon: '✝️',
    title: 'Holy Orders',
    subtitle: 'Called to Serve God\'s People',
    color: '#8B4513',
    meaning: `Holy Orders is the sacrament through which the mission entrusted by Christ to his apostles is continued in the Church until the end of time. Through this sacrament, men are ordained as bishops, priests, or deacons — configured to Christ in a unique way to serve, lead, teach, and sanctify the People of God.`,
    meaning2: `For many Thomasians, Holy Orders may feel like "someone else's sacrament." But the Church teaches that every baptized person shares in the common priesthood of the faithful — and understanding Holy Orders helps us appreciate the service of those ordained men who celebrate Mass, hear Confessions, baptize, marry, and accompany us through life's greatest moments. It also invites discernment: could God be calling you?`,
    scripture: `"Do not neglect the gift you have, which was given you... when the council of elders laid their hands on you."`,
    scriptureRef: `1 Timothy 4:14`,
    scripture2: `"You did not choose me, but I chose you and appointed you that you should go and bear fruit and that your fruit should abide." — John 15:16`,
    symbols: [
      { icon: '🤲', name: 'Laying on of Hands', desc: 'The essential gesture of ordination passed from the apostles' },
      { icon: '📜', name: 'Gospel Book', desc: 'Placed on the head of bishops; the Word entrusted to them' },
      { icon: '🫒', name: 'Anointing with Chrism', desc: 'Priests and bishops are anointed for their sacred role' },
      { icon: '🍷', name: 'Chalice & Paten', desc: 'Presented to priests as symbols of their Eucharistic ministry' },
      { icon: '💍', name: 'Bishop\'s Ring', desc: 'Symbol of the bishop\'s fidelity to the Church, his bride' },
    ],
    effects: [
      { icon: '✝️', title: 'Configuration to Christ', desc: 'The ordained man is configured to Christ as Head, Shepherd, and Servant.' },
      { icon: '⚡', title: 'Power to Celebrate Sacraments', desc: 'Priests receive the power to offer the Eucharist and forgive sins.' },
      { icon: '🔏', title: 'Sacramental Character', desc: 'An indelible mark is conferred — Holy Orders is received only once per degree.' },
      { icon: '📣', title: 'Authority to Preach', desc: 'The ordained are sent to teach the Gospel with authority.' },
      { icon: '🤲', title: 'Grace for Ministry', desc: 'Special graces are conferred to fulfill the demands of ordained ministry.' },
    ],
    theology: `There are two ways every baptized Catholic participates in Christ's priesthood: the common priesthood (all of us, by Baptism) and the ministerial priesthood (ordained men). The ministerial priest doesn't replace Christ — he acts in persona Christi, "in the person of Christ." When a priest says "This is my body," he speaks Christ's words. When he says "I absolve you," it is Christ who absolves. The ordained ministry exists to serve the common priesthood — to make grace available to all God's people.`,
    reflections: [
      'When you think of the priests and deacons you know, what sacrifices have they made to serve God\'s people? Have you thanked them?',
      'Have you ever seriously considered whether God might be calling you to a vocation of ordained ministry or religious life? What would it take to discern that?',
      'How does understanding the priest as acting "in the person of Christ" change the way you receive the sacraments?',
      'What can you do as a lay person to support and pray for those who are discerning a call to Holy Orders?',
    ],
    saint: { icon: '✝️', name: 'St. John Vianney (the Curé of Ars)', desc: 'The patron saint of priests, who spent 12–16 hours daily in the confessional despite initial academic struggles. His extraordinary holiness attracted thousands of penitents from across France, demonstrating the power of a holy priest.' },
    prayer: `"Lord of the harvest, send workers into your harvest. Bless all your priests and deacons; strengthen them in their vocation of service. Give vocations to those you are calling. And help each of us to live out our baptismal priesthood faithfully. Amen."`,
  },

  matrimony: {
    icon: '💍',
    title: 'Matrimony',
    subtitle: 'A Covenant of Love',
    color: '#B5487A',
    meaning: `The sacrament of Matrimony is the covenant of love between a man and a woman, established by God from creation and elevated by Christ to a sacrament of the New Covenant. It is unique among the seven sacraments in that the spouses themselves are the ministers — they confer the sacrament on each other in the presence of the Church.`,
    meaning2: `For Thomasians who may be years away from marriage, this sacrament is nonetheless profoundly relevant — because how we date, how we relate, and how we understand love are all shaped by our theology of marriage. The Church's vision of marriage as permanent, faithful, exclusive, and open to life stands as a counter-cultural witness in today's world.`,
    scripture: `"Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh."`,
    scriptureRef: `Ephesians 5:31`,
    scripture2: `"Husbands, love your wives, as Christ loved the church and gave himself up for her." — Ephesians 5:25`,
    symbols: [
      { icon: '💍', name: 'Wedding Rings', desc: 'Circles without end — the eternal, faithful covenant' },
      { icon: '🕯️', name: 'Unity Candle', desc: 'Two lives becoming one in Christ\'s light' },
      { icon: '🤝', name: 'Joining of Hands', desc: 'The physical sign of their free consent' },
      { icon: '📿', name: 'Nuptial Veil (some traditions)', desc: 'Symbol of unity and shared life' },
      { icon: '💐', name: 'Flowers', desc: 'Beauty, fertility, and new life' },
    ],
    effects: [
      { icon: '🔗', title: 'Indissoluble Bond', desc: 'A valid, consummated sacramental marriage cannot be dissolved by any human power.' },
      { icon: '💚', title: 'Sanctifying Grace', desc: 'Grace is given to help the couple love as Christ loved — sacrificially.' },
      { icon: '👨‍👩‍👧', title: 'Grace for Family Life', desc: 'Special graces are given for the challenges of building and raising a family.' },
      { icon: '🌟', title: 'Witness to the World', desc: 'Christian marriage is a sign of Christ\'s love for the Church in the world.' },
      { icon: '🕊️', title: 'Domestic Church', desc: 'The family is the domestic church — the first school of faith and love.' },
    ],
    theology: `Marriage is not just a social institution or a legal contract — it is an icon of the Trinity. The love between Father, Son, and Spirit is eternal, faithful, fruitful, and self-giving. Christian marriage reflects this: two people giving themselves to each other completely, permanently, and fruitfully. That\'s why the Church teaches marriage is open to life — love that "stays within" itself isn't the model. Christ's love for the Church was poured out to the last drop. That's the template.`,
    reflections: [
      'How does the Catholic vision of marriage as permanent and faithful differ from how relationships are typically portrayed in media and culture? Which resonates more with what you desire?',
      'How are you currently preparing for your future vocation — whether marriage or religious life? What habits are you building now?',
      'What does it mean to love someone sacrificially — the way Christ loved the Church? Can you think of what that looks like practically?',
      'How does your current understanding of dating and relationships align with what you know of God\'s vision for love?',
    ],
    saint: { icon: '💞', name: 'Sts. Louis & Zélie Martin', desc: 'The parents of St. Thérèse of Lisieux and the first married couple to be canonized together. They lived the sacrament of Matrimony as a path to holiness — loving each other and raising their children as saints.' },
    prayer: `"Lord, bless all married couples and families. Help them to love faithfully, to forgive generously, and to build homes where your presence is felt. And for those of us preparing for our future vocation, grant us wisdom, purity, and trust in your plan. Amen."`,
  },
};

// ── ROUTING ────────────────────────────────────────────────────
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
  // close mobile nav
  document.getElementById('nav-links').classList.remove('open');
  initFadeIns();
}

function showSacrament(id) {
  const s = sacraments[id];
  if (!s) return;

  const effectsHTML = s.effects.map(e => `
    <li>
      <div class="eff-icon">${e.icon}</div>
      <div class="eff-text"><strong>${e.title}</strong><span>${e.desc}</span></div>
    </li>`).join('');

  const symbolsHTML = s.symbols.map(sym => `
    <div class="symbol-item">
      <div class="sym-icon">${sym.icon}</div>
      <h4>${sym.name}</h4>
      <p>${sym.desc}</p>
    </div>`).join('');

  const reflectHTML = s.reflections.map(r => `<li>${r}</li>`).join('');

  document.getElementById('sacrament-content').innerHTML = `
    <section class="sac-hero" style="background:linear-gradient(135deg,var(--navy) 0%,${s.color} 100%)">
      <button class="back-btn" onclick="showPage('sacraments')">← All Sacraments</button>
      <div class="sac-hero-icon">${s.icon}</div>
      <h1>${s.title}</h1>
      <p>${s.subtitle}</p>
    </section>

    <section class="sac-section">
      <div class="container">
        <div class="content-block">
          <div class="content-text">
            <div class="section-label">Meaning & Purpose</div>
            <h2>What is ${s.title}?</h2>
            <p>${s.meaning}</p>
            <p>${s.meaning2}</p>
          </div>
          <div>
            <div class="scripture-box">
              <p>"${s.scripture}"</p>
              <cite>— ${s.scriptureRef}</cite>
            </div>
            <div style="margin-top:1.5rem;padding:1.5rem;background:var(--cream);border-radius:var(--radius-sm);border:1px solid rgba(201,168,76,0.15)">
              <p style="font-size:0.95rem;color:var(--text-mid);font-style:italic">${s.scripture2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sac-section">
      <div class="container">
        <div class="section-label">Symbols & Rituals</div>
        <h2 class="section-title">Sacred Signs</h2>
        <p class="section-sub">Every symbol in ${s.title} carries deep theological meaning.</p>
        <div class="symbols-grid">${symbolsHTML}</div>
      </div>
    </section>

    <section class="sac-section">
      <div class="container">
        <div class="content-block">
          <div>
            <div class="section-label">Effects</div>
            <h2 style="font-family:'Cormorant Garamond',serif;font-size:2rem;color:var(--navy);margin-bottom:1.5rem">What Does ${s.title} Do?</h2>
            <ul class="effects-list">${effectsHTML}</ul>
          </div>
          <div>
            <div class="theology-box">
              <h3>💡 Theology in Simple Terms</h3>
              <p>${s.theology}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sac-section" style="background:var(--navy)">
      <div class="container">
        <div class="section-label" style="color:var(--gold-light)">Reflection</div>
        <h2 class="section-title" style="color:var(--white)">Encountering Christ Today</h2>
        <p style="color:rgba(254,252,248,0.65);margin-bottom:2rem">Take a moment with these questions. There are no wrong answers — only honest ones.</p>
        <ul class="reflection-list">${reflectHTML}</ul>
      </div>
    </section>

    <section class="sac-section">
      <div class="container">
        <div class="section-label">Saints & Prayer</div>
        <h2 class="section-title">Our Holy Companions</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem" class="two-col-responsive">
          <div class="saint-card">
            <div class="saint-icon">${s.saint.icon}</div>
            <div>
              <h4>${s.saint.name}</h4>
              <p>${s.saint.desc}</p>
            </div>
          </div>
          <div class="prayer-box" style="display:flex;flex-direction:column;justify-content:center">
            <div class="section-label" style="justify-content:center;margin-bottom:1rem">Prayer for ${s.title}</div>
            <p>${s.prayer}</p>
          </div>
        </div>
        <div style="text-align:center;margin-top:2rem">
          <button class="btn btn-gold" onclick="showPage('sacraments')">← Back to All Sacraments</button>
          <button class="btn btn-outline" style="color:var(--navy);border-color:var(--navy);margin-left:0.75rem" onclick="showPage('feedback')">Share Your Reflection ✦</button>
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-sacrament-detail').classList.add('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
  initFadeIns();
}

// ── NAV ────────────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('nav-links').classList.toggle('open');
}

// ── FEEDBACK ───────────────────────────────────────────────────
function selectRating(btn, group) {
  btn.closest('.rating-group').querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function submitFeedback() {
  document.getElementById('feedback-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ── SCROLL ─────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  btn.classList.toggle('visible', window.scrollY > 300);
});

// ── FADE-INS ───────────────────────────────────────────────────
function initFadeIns() {
  setTimeout(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => { el.classList.remove('visible'); obs.observe(el); });
  }, 50);
}

// ── INIT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initFadeIns);
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
});

// responsive two-col grids in sacrament detail
const style2 = document.createElement('style');
style2.textContent = `@media(max-width:640px){.two-col-responsive{grid-template-columns:1fr!important}}`;
document.head.appendChild(style2);
