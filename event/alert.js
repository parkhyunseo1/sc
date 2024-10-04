// 버튼 클릭시 alert-box 보여주기
// const box = document.querySelector(".alert-box");
// const btn = document.querySelector("button");
// const x = document.querySelector(".close");
// btn.addEventListener("click", () => {
//   box.style.display = "block";
// });

// x.addEventListener("click", () => {
//   box.style.display = "none";
// });

const box = document.querySelector(".alert-box");

// const alertShow = () => {
//   box.style.display = "block";
// };
// const alertHide = () => {
//   box.style.display = "none";
// };

// document.querySelector(".show").addEventListener("click", alertShow);

// document.querySelector(".close").addEventListener("click", alertHide);

// 함수에서 하는 일이 동일함 => block or none 의 값을 전달인자 처리가능
const notification = (state) => (box.style.display = state);
document
  .querySelector(".show")
  .addEventListener("click", () => notification("block"));
document
  .querySelector(".close")
  .addEventListener("click", () => notification("none"));
