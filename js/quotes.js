const quotes = [
  {
    quote:
      "하늘을 날고싶은 충동을 느낄 때, 결코 땅을 기라는데 동의할 수는 없다.",
    author: "헬렌 켈러",
  },
  {
    quote: "아무런 위험없이 승리하는 것은 영광없는 승리일 뿐이다.",
    author: "피에르 코르네유",
  },
  {
    quote:
      "조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일일 것이라 믿어요.",
    author: "오프라 윈프리",
  },
  {
    quote:
      "이 세상에 위대한 사람은 없다. 단지 평범한 사람들이 일어나 맞서는 위대한 도전이 있을 뿐이다.",
    author: "윌리엄 프레데릭 홀시",
  },
  {
    quote:
      "인생이 끝날까 두려워하지마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.",
    author: "그레이스 한센",
  },
  {
    quote: "공포를 느껴라, 그리고 그래도 도전하라.",
    author: "수잔 제퍼스",
  },
  {
    quote: "해보지 않고는 당신이 무엇을 해낼 수 있는지 알 수 없다.",
    author: "프랭클린 아담",
  },
  {
    quote:
      "언제까지고 계속되는 불행은 없다. 가만히 견디고 참든지 용기로 내쫓아 버리든지 둘 중에 하나를 택해야한다.",
    author: "로망 롤랑",
  },
  {
    quote:
      "아무것도 손 쓸 방법이 없을 때 꼭 한 가지 방법이 있다. 그 것은 용기를 갖는 것이다.",
    author: "유태 격언",
  },
  {
    quote:
      "세상을 보고 무수한 장애물을 넘어 벽을 허물고 더 가까이 다가가 서로를 알아가고 느끼는 것, 그 것이 바로 인생의 목표이다.",
    author: "월터의 상상은 현실이 된다 中",
  },
  {
    quote: "절대로 고개를 떨구지 말라. 고개를 치켜들고 세상을 똑바로 바라보라.",
    author: "헬렌 켈러",
  },
  {
    quote:
      "당신은 당신이 반복한 행동의 결과다. 그러므로 탁월함은 습관에 달려있다.",
    author: "아리스토텔레스",
  },
  {
    quote:
      "남들이 당신을 어떻게 생각할까 너무 걱정하지말라. 그들은 그렇게 당신에게 관심이 있지않다.",
    author: "",
  },
  {
    quote:
      "할 수 있다고 믿는 사람은 그렇게 되고, 할 수 없다고 믿는 사람 역시 그렇게 된다.",
    author: "샤를 드골",
  },
  {
    quote: "아침에 눈을 떠서 어제보다 나은 하루를 만들지 않으면 실패한 것이다.",
    author: "로버트 나델리",
  },
  {
    quote: "가난함을 편안히 여기고 도를 즐겨라",
    author: "공자",
  },
  {
    quote: "만족하는 순간 도태된다",
    author: "DOPA",
  },
  {
    quote:
      "나는 신발이 없다고 울적해했네, 거리에서 발이 없는 사람을 만나기 전까지",
    author: "데일 카네기",
  },
  {
    quote: "긍정적인 생각, 유연한 사고",
    author: "랄로",
  },
  {
    quote: "길을 아는 것과 그 길을 걷는 것은 분명히 다르다",
    author: "매트릭스 中",
  },
  {
    quote: "처음에는 우리가 습관을 만들지만 그 다음에는 습관이 우리를 만든다",
    author: "존 드라이든",
  },
  {
    quote: "세상에서 가장 해로운 말은 '그만하면 잘했어'야",
    author: "위플래쉬 中",
  },
  {
    quote:
      "하루하루를 자기 인생의 마지막 날같이 살아라. 언젠가는 그 날들 가운데 진짜 마지막 날이 있을테니",
    author: "레오 부스칼리아",
  },
  {
    quote:
      "나이를 먹은 것만으로는 늙지 않는다. 이상을 잃었을 때 비로소 노화되는 것이다.",
    author: "사무엘 올만",
  },
  {
    quote:
      "우리 모두 현실주의자가 되자. 그러나 가슴 속에는 불가능한 꿈을 품자.",
    author: "체 게바라",
  },
  {
    quote: "실패는 잊되 그 것이 준 교훈은 절대 잊으면 안된다.",
    author: "하버트 개서",
  },
  {
    quote: "The only easy day was yesterday",
    author: "Navy SEAL",
  },
  {
    quote: "Just do it",
    author: "NIKE",
  },
  {
    quote: "Beat yesterday",
    author: "GARMIN",
  },
  {
    quote: "Learn to say fuck you to the world, every once in a while",
    author: "Sol Lewitte",
  },
];

const quote = document.querySelector("#quote .quote");
const author = document.querySelector("#quote .author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
