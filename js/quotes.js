const quotes = [
  {
    quote: "고객의 경험에서 시작해 역으로 기술개발을 해야한다.",
    author: "스티븐 잡스"
  },
  {
    quote: "자신의 소신을 지키고 살면 하나라도 건진다.",
    author: "나"
  },
  {
    quote: "행복한지 따져보는 건 우울해지는 지름길이야.",
    author: "우리의 20세기"
  },
  {
    quote: "단지 두려움 때문에 좋아하는 일을 포기하지 마.",
    author: "씽"
  },
  {
    quote: "인생은 다시 돌아올 두 번의 기회가 없다고 생각하고 살아야 해.",
    author: "어바웃 타임"
  },
  {
    quote: "치열하게 살던가, 죽기만을 기다리던가.",
    author: "쇼생크 탈출"
  },
  {
    quote: "경험은 나이 들지 않아요, 경험은 결코 시대에 뒤떨어지지 않기 때문이죠.",
    author: "인턴"
  },
  {
    quote: "내일만 사는 놈은 오늘만 사는 놈한테 죽는다.",
    author: "아저씨"
  },
  {
    quote: "내 인생은 비극인 줄 알았는데 코미디였어.",
    author: "조커"
  },
  {
    quote: "우리가 두려워할 것은 두려움뿐이죠.",
    author: "주토피아"
  },
]
const quotesEl = document.querySelector('#quotes')
const quote = quotesEl.querySelector('span:first-child')
const author = quotesEl.querySelector('span:last-child')


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `"${todaysQuote.quote}"`
author.innerText = `${todaysQuote.author}`
