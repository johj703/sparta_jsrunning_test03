/*
## 1. Promise 다뤄보기

1. `getData` 라는 주어진 url을 인자로 받는 함수를 만들어주세요.
2. `getData` 는 3초 후 url이 기준 url과 동일할 경우 성공적으로 데이터를 반환하고, 틀릴 경우 에러를 발생시킵니다.
3. `then`과 `catch`를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.
*/

```javascript
// 문제
    const API_URL = "https://open.api.com/v1/data";
    const WRONG_URL = "https://open.api.com/v1/wrong";

    function getData(url) {
        // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    }

    // ...

    // getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.

```;

// 내 답
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  // 문제 = 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
  return new Promise((resolve, reject) => {
    // setTimeout으로 3초 뒤에 함수 실행하도록 작성
    setTimeout(() => {
      // 만약 url과 API_URL이 같다는 조건문 작성
      if (url === API_URL) {
        // 같다면 성공 처리로 메세지 출력
        resolve("Success: Data fetched successfully!");
      } else {
        // 다르다면 실패 처리로 메세지 출력
        reject("Error: Wrong URL...");
      }
      // 3000 밀리세컨드로 표시하며, 3초 뒤에 실행하도록 작성
    }, 3000);
  });
}

// ...

// 문제 = getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
