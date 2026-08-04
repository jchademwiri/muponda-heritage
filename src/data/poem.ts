export interface PoemLine {
  shona: string;
  english: string;
}

export interface PoemStanza {
  slug: string;
  title: string;
  lines: PoemLine[];
}

export const poemStanzas: PoemStanza[] = [
  {
    slug: 'nzvidzi-nyere',
    title: 'Nzvidzi (Nzudzi), Nyere',
    lines: [
      { shona: 'Mwaita Nyere!', english: 'Well done Nyere' },
      { shona: 'Mwaita Nzvidzi!', english: 'Well done Serval Cat' },
      {
        shona: 'Mwaita Samaringa! Wari Nyazongo,',
        english: 'Thanks to the visionary ancestors, who are buried at Nyazonga',
      },
      {
        shona: 'Mwazvita Mapara! Wangopara nhehwe dzichiota!',
        english: 'Thanks to our excellent Tanners! Great tanners who tan Leather soft',
      },
      {
        shona: 'Titambire Chikwira chaSaka:',
        english: 'Great appreciation! The Hill Palace of King Saka',
      },
      {
        shona: 'Chingokwirwa ngewakapfugama, Mukamira mashora Dzimbahwe.',
        english:
          'The Hill Residence only climbed on your knees. Any other posture is a sign of disrespect for the King',
      },
    ],
  },
  {
    slug: 'sacred-mountains',
    title: 'The Sacred Mountains',
    lines: [
      {
        shona: 'Hekani wari Rurunji! Gomo reMadzimambo.',
        english: 'Greetings to those buried at Mt Ruunji! The Mountain where our esteemed Kings are buried',
      },
      {
        shona: 'Gomo ringokwirwa ngewakaguta!',
        english: 'The challenging Mountain scaled only by strong people',
      },
      { shona: 'Wane mwena wangogwesha', english: 'The weak can only crawl on their bellies' },
      { shona: 'Gomo ringobuda mhute!', english: 'The sacred, mystical Mountain of mist' },
      {
        shona: 'Wari Rurunji kudada, Wangomwa mweru!',
        english: 'Proud Ruunji people! Who only drink the best beer/water/milk',
      },
    ],
  },
  {
    slug: 'mudowe',
    title: 'MuDowe',
    lines: [
      { shona: 'Wazvita hako MuDowe wangu!', english: 'Well done, my dear MuDowe' },
      {
        shona: 'MuDowe ungowanikwa ngewatanga',
        english: 'For their goodness the Dowe are betrothed to early birds',
      },
      {
        shona: 'Usina MuDowe ungorira!',
        english: 'Without MuDowe livelihoods and prosperity are never assured',
      },
    ],
  },
  {
    slug: 'revered-rulers',
    title: 'The Revered Rulers',
    lines: [
      {
        shona: 'Maita Kwerera Samaringa wari Nyazongo',
        english: 'Thank you our ancestors/fore-bearers resting at Nyazongo',
      },
      {
        shona: 'Titambire wari Zeramira! Titambire wari Hwahwazira:',
        english:
          'Welcome and great appreciation to those interred at Zeramira! Thanks to Ancestors at Mt Hwahwazira',
      },
      {
        shona: 'Gomo remadzishe. Tingotenda wari Manyika!',
        english: 'The mountain where our revered rulers rest. Thank you those in Manyika',
      },
      { shona: 'Wari Chirowa neChinyauzvare.', english: 'And those at Chirowa and Chinyauzvare' },
      { shona: 'Zvaonekwa Mambo Muponda!', english: 'Thank you, King Muponda' },
    ],
  },
  {
    slug: 'kings-character',
    title: "The King's Character",
    lines: [
      { shona: 'Zvaitwa Dzimbahwe! Waridzi weHumambo!', english: 'Well done Your Majesty! The Royal Family' },
      { shona: 'Murambatsvina! Wangopa ngemwoyo wese!', english: 'Smart King of great generosity' },
      { shona: 'Chigumbu chisina unye!', english: 'And for whom forgiveness is a hallmark' },
      { shona: 'Wangochemerwa ngewatanga;', english: 'First-timers lament for a chance to win you over' },
      {
        shona: 'SaMuponda: Nyere! Mapara!',
        english: 'Great King Muponda of the Serval Cat Clan, acclaimed tanner',
      },
      { shona: 'Hekani Waridzi weDoweguru!', english: 'Thanks to the revered Ruler Of Doweguru' },
    ],
  },
  {
    slug: 'origins',
    title: 'The Origins',
    lines: [
      {
        shona: 'Wangotonga Manyika wari kuRwenze!',
        english: 'Who graciously presides over Manyika from the Lofty Uplands',
      },
      {
        shona: 'Wangotondera Matongo wari paMutsamvu weWatsomba',
        english: 'For whom Remembrance Ceremonies are done under a big Fig Tree at Watsomba',
      },
      {
        shona: "Ndo'o pane nhoroondo, asi Dzinde riri Tanganyika!",
        english: 'Where our remarkable history is discussed, starting from our origins in Tanganyika / Ruvuma',
      },
    ],
  },
  {
    slug: 'regional-praises',
    title: 'Regional Praises',
    lines: [
      { shona: 'Ewo-o wari Rupinda nekwa Mukandi,', english: 'Welcome rulers at Rupinda and Mukandi' },
      { shona: 'Wari Nhunhama, Ruwaka neMagoboza.', english: 'Those at Nhunhama, Ruwaka and Magoboza' },
      { shona: 'Mwaita wari Maringa, Maunga neNyanga,', english: 'Thanks to those in Maringa, Maunga and Nyanga' },
      {
        shona: 'Zvaonekwa wari Chidazembe, nekwa Chigodora!',
        english: 'Those at Chidazembe and Chigodora',
      },
    ],
  },
  {
    slug: 'conclusion',
    title: 'Conclusion',
    lines: [
      {
        shona: 'Makayambuka Nzizi Kasambavezi, Gorongoza neRwenya.',
        english: 'You crossed these big Rivers: Zambezi; Gorongoza and Rwenya',
      },
      { shona: 'Zvaitwa Nyere! Mwaita Samaringa!', english: 'Well done, visionary People of repute' },
      {
        shona: 'Waridzi wemasango, Wangoonekwa ngewatanga',
        english:
          'Whose mastery of stealth and camouflage makes you invisible/invincible. And a mystery to many',
      },
      { shona: 'Mwaita; wari Sambawarongo', english: "Thanks those buried near the Queen's Pool" },
      { shona: 'Zvaonekwa Dzimbahwe: SaMuponda!', english: 'Well done Your Majesty, King Muponda' },
      {
        shona: 'Nyere yanguyi-iyi, Zvaitwa Mapara!',
        english: 'My precious Serval Cat, to this Clan we proudly belong. Thank you Tanners!',
      },
      {
        shona: 'Tikafira pano ngeyi?',
        english: 'Is this goodness not the reason why we would rather die here?',
      },
    ],
  },
];
