// tab-butoon 클릭시 짝 맞춰서 tab-content 보여주기

// 이벤트 대상 찾아오기
const btn1 = document.querySelector(".list li:nth-child(1) ");
const btn2 = document.querySelector(".list li:nth-child(2) ");
const btn3 = document.querySelector(".list li:nth-child(3) ");

// show 클래스명을 부착할 요소
const div1 = document.querySelector(".container div:nth-child(2) ");
const div2 = document.querySelector(".container div:nth-child(3) ");
const div3 = document.querySelector(".container div:nth-child(4) ");

// 이벤트 연결
btn1.addEventListener("click", () => {
  //  firstDiv show 클래스명 부착
  // 다른 secondDiv, lastDiv => show 제거

  div1.classList.add("show");
  div2.classList.remove("show");
  div3.classList.remove("show");
  //   orange 클래스명 부착과 제거
  btn1.classList.add("orange");
  btn2.classList.remove("orange");
  btn3.classList.remove("orange");
});

btn2.addEventListener("click", () => {
  // secondDiv show 클래스명 부착
  // 다른 firstDiv,lastDiv  => show 제거
  div2.classList.add("show");
  div1.classList.remove("show");
  div3.classList.remove("show");

  btn2.classList.add("orange");
  btn1.classList.remove("orange");
  btn3.classList.remove("orange");
});
btn3.addEventListener("click", () => {
  // lastDiv show 클래스명 부착
  // 다른 secondDiv, firstDiv => show 제거
  div3.classList.add("show");
  div2.classList.remove("show");
  div1.classList.remove("show");

  btn3.classList.add("orange");
  btn2.classList.remove("orange");
  btn1.classList.remove("orange");
});
