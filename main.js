'use strict'

  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('modalWrapper');
  const scoreLabel = document.getElementById('scoreLabel');
  const achieve = document.getElementById('achieve');
  const title = document.getElementById('title');
  const titleWrapper = document.getElementById('title-wrapper');
  
  const quizSet = shuffle([
    {q: 'わたしの一番好きな洋画は？',
     c: ['アルマゲドン', 'インターステラー', 'タイタニック', 'バック・トゥ・ザ・フューチャー', 'スターウォーズ']},
    {q: 'わたしの一番好きな邦画は？',
     c: ['日本沈没', 'ラストサムライ', '黄泉がえり', 'テルマエ・ロマエ', '世界の中心で、愛を叫ぶ']},
    {q: 'わたしの一番好きなアーティストは？',
     c: ['三浦大知', 'ウルフルズ', 'DEEN', 'スピッツ', '米米CLUB']},
    {q: 'わたしの一番好きな言葉は？',
     c: ['一は全、全は一', '勝てないシナリオなど、私は認めない', '一度愛した女一人守れないで、なにが男だ', 'オレをだれだと思ってやがる', '可能性が低いってことは、つまり0じゃない']},
    {q: 'わたしの一番好きな食べ物は？',
     c: ['ポテトサラダ', 'テリヤキピザ', 'ハンバーグ', 'パングラタン', 'カツ丼']},
    {q: 'わたしがマクドナルドで飲むものは？',
     c: ['ファンタグレープ', 'コーラ', 'カルピス', 'オレンジジュース', 'ジンジャエール']},
    {q: 'わたしが映画館で飲むものは？',
     c: ['メロンソーダ', 'ファンタグレープ', 'コーラ', 'ジンジャエール', 'カルピスソーダ']},
    {q: 'わたしが飲食店で飲むものは？',
     c: ['コーラ', 'メロンソーダ', 'ファンタグレープ', 'カルピス', 'ウーロン茶']},
    {q: 'わたしの一番好きなデザートは？',
     c: ['パンナコッタ', 'チョコバナナチーズケーキ', 'カタラーナ', 'トルコアイス', '杏仁豆腐']},
    {q: 'わたしの一番好きな革ブランドは？',
     c: ['LONG CHAMP', 'GANZO', 'BOTTEGA VENETA', 'HERZ', 'dunhill']},
    {q: 'わたしの一番服ブランドは？',
     c: ['CHAOPANIC TYPY', 'DIESEL', 'nano・universe', 'UNITED ARROWS', 'UNIQLO']},
    {q: 'わたしの一番好きな靴ブランドは？',
     c: ['adidas', 'NIKE', 'New Balance', 'VANS', 'FILA']},
    {q: 'わたしの一番好きな香水は？',
     c: ['CHANEL EGOISE', 'Calvin Klein CK ONE', 'BVLGARI POUR HOMME', 'BVLGARI BLACK', 'Dolce&Gabbana Light blue']},
    {q: 'わたしの一番好きなアニメは？',
     c: ['天元突破グレンラガン', '新世紀エヴァンゲリオン', 'マクロスF', '創聖のアクエリオン', '機動戦士ガンダム']},
    {q: 'わたしの一番好きな数字は？',
     c: ['8', '1', '2', '3', '7']},
    {q: 'わたしの一番好きなサングラスは？',
     c: ['OAKLEY', 'Ray-Ban', 'OLIVER PEOPLES', 'KANEKO OPTICAL', 'Paul Smith']},
    {q: 'わたしの一番好きなTVブランドは？',
     c: ['LG', 'SONY', 'TOSHIBA', 'Panasonic', 'SHARP']},
    {q: 'わたしの一番好きなオーディオは？',
     c: ['JBL', 'Beats', 'SONY', 'Bose', 'Denon']},
    {q: 'わたしの一番好きな果物は？',
     c: ['梨', 'バナナ', 'メロン', 'キウイ', 'マスカット']},
    {q: 'わたしの一番好きなゲームは？',
     c: ['ファイナルファンタジー', 'モンスターハンター', 'バトルフィールド', 'ポケットモンスター', 'Helo']},
    {q: 'わたしの一番好きなコンビニは？',
     c: ['ローソン', 'ファミリーマート', 'セブンイレブン', 'デイリーヤマザキ', 'サークルKサンクス']},
    {q: 'わたしの誕生日は？',
     c: ['8月18日', '9月10日', '7月28日', '7月8日', '2月23日']},
    {q: 'わたしの一番好きな色は？',
     c: ['緑色', '赤色', '黒色', 'オレンジ色', '紫色']},
    {q: 'わたしの最終学歴は？',
     c: ['中卒', '高卒', '大卒', '専門卒', '大学院卒']},
    {q: 'わたしの一番好きな作家は？',
     c: ['村上春樹', '東野圭吾', '江國香織', '伊坂幸太郎', '山本文緒']},
    {q: 'わたしの一番好きな作曲家は？',
     c: ['菅野よう子', '平井大', '松本 トータス', '玉置浩二', 'Masamune Kusano']},
    {q: 'わたしの一番好きなバイクは？',
     c: ['スズキ', 'ホンダ', 'ヤマハ', 'ハーレーダビッドソン', 'ドゥカティ']},
    {q: 'わたしが社長になった歳は？',
     c: ['19歳', '20歳', '21歳', '22歳', '23歳']},
    {q: 'わたしが誕生日に必ずすることは？',
     c: ['島旅行', '遊園地で遊ぶ', '温泉旅行', '行きつけのお店に行く', '熱田神宮で参拝する']},
    {q: 'わたしの名付け親は？',
     c: ['神様', '父親', '母親', '祖父', '伯父']},
    {q: 'わたしの落ち込むと行くところは？',
     c: ['堤防', '遊園地', '平和公園', '美濃赤坂駅', '善光寺']},
    {q: 'わたしの一番好きな魚介は？',
     c: ['鰤', '海老', '鮪', '鯛', '鮃']},
    {q: 'わたしの一番好きなポケモンは？',
     c: ['ルギア', 'ミュウツー', 'レックウザ', 'カイオーガ', 'リザードン']},
    {q: 'わたしの恩師は？',
     c: ['堀田先生', '岩田先生', '朝倉先生', '彦坂先生', '齋藤先生']},
    {q: 'わたしの中学時代にしてた部活は？',
     c: ['野球', 'サッカー', '陸上', '相撲', '水泳']},
    {q: 'わたしの飼っているハリネズミの名は？',
     c: ['ジロー', 'シアン', 'ブルーノ', 'ポチ', 'ハム太郎']},
    {q: 'わたしは何歳？',
     c: ['27歳', '25歳', '26歳', '28歳', '29歳']}
    {q: 'わたしの一番好きな特撮は？',
     c: ['ゴジラ', 'ウルトラマン', 'ガメラ', '星獣戦隊ギンガマン', '仮面ライダークーガ']},
    {q: 'わたしの一番好きなウルトラマンは？',
     c: ['ウルトラマンタロウ', 'ウルトラマンダイナ', 'ウルトラマンティガ', 'ウルトラマンセブン', 'ウルトラマンキング']},
    {q: 'わたしの一番好きなスポーツは？',
     c: ['ビリヤード', '野球', 'ダーツ', 'アメフト', '総合格闘技']},
    {q: 'わたしの一番好きな植物は？',
     c: ['カモミール', '金木犀', '薔薇', '菊', 'ヒヤシンス']},
    {q: 'わたしのご先祖様は？',
     c: ['清和天皇', '桓武天皇', '白川天皇', '天智天皇', '聖武天皇']},
  ]);

  let quizCount = 20;
  let currentNum = 0;
  let isAnswered;
  let score = 0;
  let quizNum = 1;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered === true) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      title.textContent = '正解';
      li.classList.add('correct');
      titleWrapper.classList.add('correct');
      score++;
    } else {
      title.textContent = '違う';
      titleWrapper.classList.add('wrong');
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;
    titleWrapper.classList.remove('correct', 'wrong');
    title.textContent = `${quizNum} / ${quizCount} 問`;

    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);

    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', ()=> {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizCount - 1) {
      btn.textContent = '結果を見る';
    }
  }

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    
    btn.classList.add('disabled');
    
    if (currentNum === quizCount - 1) {
      result.style.display = 'block';
      scoreLabel.textContent = `${score} / ${quizCount}`;

      const accuracy = Math.floor(score / quizCount * 10);

      switch (accuracy) {
        case 10:
          achieve.textContent = 'わたしの奥さん';
          break;
        case 9:
          achieve.textContent = 'わたしのハニー';
          break;
        case 8:
          achieve.textContent = 'きゅんきゅん しちゃう♡';
          break;
        case 7:
          achieve.textContent = 'わたしのお気に入り';
          break;
        case 6:
          achieve.textContent = 'まぁまぁ 知ってるじゃん';
          break;
        case 5:
          achieve.textContent = 'クズ';
          break;
        case 4:
          achieve.textContent = 'ゴミ';
          break;
        default:
          achieve.textContent = 'は？';
          break;
      }

    } else {
      currentNum++;
      quizNum++;
      setQuiz();
    }
  });

  setQuiz();
