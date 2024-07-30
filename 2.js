/*
## 2. Async / Await 다뤄보기

위 1번 문제에서 다루었던 비동기 처리를 `async`, `await` 키워드를 사용하여 코드를 수정해서 작성해주세요.
*/

```javascript
// async await 를 사용한 코드로 변경해보기
```;

// 내 답
// async await 를 사용한 코드로 변경해보기

// 1번에서 풀었던 비동기 처리 코드
/*
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) {
        resolve("Success: Data fetched successfully!");
      } else {
        reject("Error: Wrong URL...");
      }
    }, 3000);
  });
}
*/

// async-await로 씌워서 변경하기
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getData(url) {
  // 3초 delay 시키기
  await delay(3000);
  // URL과 API_URL 같은지 비교
  if (url === API_URL) {
    return "Success: Data fetched successfully!";
  } else {
    return "Error: Wrong URL!";
  }
}

/* 또 다른 해결 */
async function callGetData(url) {
  try{
    const result = await getData(url);
    console.log(result);
  } catch(e) {
    console.log(e)
  }
}

callGetData(API_URL);
callGetData(WRONG_URL);