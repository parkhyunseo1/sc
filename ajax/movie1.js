const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

init = () => {
  // 오늘 날짜 구한 뒤 구한 날짜를 화면에 보여주기
  const now = new Date();

  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() - 1;

  txtYear.value = year;
  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month;
  selDay.value = day;
};

init();

getMovie = () => {
  // 년,월,일 가져오기
  const year = txtYear.value;
  let month = selMon.value;
  let day = selDay.value;
  // url
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=";
  // url + 년월일
  url += year + month + day;
  //   console.log(url);
  fetch(url)
    .then((response) => {
      // 응답을 안할경우
      if (!response.ok) {
        throw new Error("경로를 확인하세요");
      }
      return response.json();
    })
    .then((data) => {
      // 화면출력
      console.log(data.boxOfficeResult.dailyBoxOfficeList);
      let str = "<p>";
      const movies = data.boxOfficeResult.dailyBoxOfficeList;
      movies.forEach((movie) => {
        // console.log("순위: ", movie.rank);
        // console.log("증감: ", movie.rankInten);
        // console.log("영화이름: ", movie.movieNm);

        str += `<p>${movie.rank} 위(`;

        let rankInten = parseInt(movie.rankInten);
        if (rankInten > 0) {
          str += `▲`;
        } else if (rankInten < 0) {
          str += `▼`;
        } else {
          str += ` `;
        }
        str += `${rankInten})`;
        str += ` : ${movie.movieNm}</p>`;
      });

      document.querySelector(".border-success").innerHTML = str;
    })
    .catch((error) => console.log(err));
};

document.querySelector(".btn-secondary").addEventListener("click", getMovie);
