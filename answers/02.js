const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) {
        resolve("성공");
      } else {
        reject(new Error("에러가 발생했습니다."));
      }
    }, 1000);
  });
}

async function callGetData(url) {
    try {
        const result = await getData(url);
        console.log(result);
    } catch(e) {
        console.log(e);
    }
}

callGetData(API_URL);
callGetData(WRONG_URL);