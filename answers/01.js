const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) {
        resolve("성공");
      } else {
        reject("실패");
      }
    }, 1000);
  });
}

getData(API_URL)
  .then(function(result) {
    console.log(result);
  }).catch((e) => console.log(e));
