// button.addEventListener("click", () => {
//   Promise.resolve().then(() => console.log("Microtask 1"));
//   console.log("Listener 1");
// });

// button.addEventListener("click", () => {
//   Promise.resolve().then(() => console.log("Microtasks 2"));
//   console.log("Listener 2");
// });

/*
Порядок вывода консольлогов для кода выше таков: 
 Listener 1, Microtask 1, Listener 2, Microtask 2
 Как я понимаю принцип работы: У нас имеется два идентичных хандлерклика,
 навешанных на одну кнопку, соответсвенно сразу можно сказать, что с учетом
 однопоточности движка, сначала сработает обработчик, находящийся выше в коде.
 Далее, внутри видим таску в виде консоль лога и зарезолвенный промис. Очередь
 событийного цикла устоена таким образом, что сначала выполняется синхронщина,
 потом, очередь микротасок(в нашем случае промисы),после того как коллстэк опустел.
 Таска сразу падает в коллстэк и вызывается, а резолв, относящийся к микротаскам,
 падает в коллкуеуе)))(в очередь), и в момент когда колстэк пустой, сама
 попадает в коллстэк. Соответственно, в консоли мы увиим сначала "Listener 1" а за ним
 "Microtask 1". Далее процесс аналогично повторяется в следующем обработчике и
 соответственно в консоли отобразится "Listener 2", "Microtask 2".
*/

// button.addEventListener("click", () => {
//   Promise.resolve().then(() => console.log("Microtask 1"));
//   console.log("Listener 1");
// });

// button.addEventListener("click", () => {
//   Promise.resolve().then(() => console.log("Microtasks 2"));
//   console.log("Listener 2");
// });

// button.click();

/* 
в этом случае в код добавлен вызов метода, который
 имитирует клик по элементу, в данном случае по кнопочке.
 Результат выполнения данного кода + нажатие на кнопку,
 даст нам такую последовательность вывода в консоль:
 Listener 1, Listener 2, Microtask 1, Microtask 2
 +
 Listener 1, Microtask 1, Listener 2, Microtask 2 (Если нажать на кнопку).

Почему так? Сначала компилятор проходится по коду, видит button.click(), 
 кладет его в стек и начинает его выполнение.Затем заносится первый хандлер
 в стек и выполняется зарезолвленныйт промис с then, тем самым,
 console.log('Microtask 1') заносится в очередь микротасок и ждет, когда
 коллстек опустеет, чтобы выполниться. console.log('Listener 1') заносится
 в стек и выполняется, ОДНАКО, в стеке до сих пор лежит button.click(), потому-что
 синхронный метод click() ещё не закончил свою работу, к нему также привязан второй
 обработик, а потому, микротаска пока не может попасть в стек и выполниться.
 Далее переходим во второй обработчик, так же console.log('Microtasks 2')
 встает в очередь, console.log('Listener 2') залетает в стек и выполняется,
 и только после этого button.click() наконец очищается из стека, тем самым, позволяет
 микротаскам в порядке очереди залетать в стек и выполняться. Если после этого нажать
 кнопку, то результат нажатия будет таким же как в предыдущем коде.
*/
