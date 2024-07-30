/*
## 3. PromiseAll 다뤄보기 (빈칸 채우기)

세 개의 setTimeout 비동기 함수를 각각 직렬, 병렬로 호출하는 코드입니다.
아래의 코드를 보고 < 빈칸 > 부분을 각각 채워주시고, 그렇게 생각하는 이유도 내용으로 적어주세요.
(총 빈칸 3개)
*/


function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    // 병렬로 promise들을 한 번에 처리하는 코드
    const results = < 빈칸 2 >
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // 예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());


/* 내 답
<빈칸1> => task1, 2, 3 같은 경우는 각각의 함수에서 promise 객체를 사용하여 1초, 2초, 3초 후에
 "Task 1 Complete", "Task 2 Complete", "Task 3 Complete" 이 메세지들을 return하는 함수 입니다.
 그리고 runTasksSequential 함수 앞에는 async를 썼고, try-catch문 중에 try 안에서는 각 result1, 2, 3 앞에 
  동시에 result1, result2, result3을 실행 시키기 때문에
대략 3000밀리세컨드의 시간이 소요가 소모될 것이라고 생각이 듭니다. 그런데 왜 Sequential 함수 안에 있을까요?

<빈칸2> => 
const results = await Promise.all([task1(), task2(), task3()]);

<빈킨3> => Promise.all을 mdn에서 참고했을 때, "메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행된 후, 
혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환합니다."라고 합니다. 이렇게 봤을 때, 
task1, task2, task3 이 세 함수가 동시에 실행이 되고 제일 긴 시간을 가진 task3의 3초 후에 모든 함수의 실행이 완료가
된다고 생각합니다.

*/
