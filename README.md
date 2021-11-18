Ситуация №1:
1.  button.addEventListener('click', () => {
2.    Promise.resolve().then(() => console.log('Microtask 1'));
3.    console.log('Listener 1');
4.  });
5.  
6.  button.addEventListener('click', () => {
7.    Promise.resolve().then(() => console.log('Microtask 2'));
8.    console.log('Listener 2');
9.  });

Вопрос: в каком порядке будут выведены в консоль сообщения, когда пользователь кликнет по кнопке button? Максимально подробно объяснить, почему.
Ответ, содержащий лишь порядок вывода сообщений (даже если он будет верным) не засчитывается. Должно быть объяснение, чтобы я понял, что вы поняли.

Ситуация №2:
1.    button.addEventListener('click', () => {
2.      Promise.resolve().then(() => console.log('Microtask 1'));
3.      console.log('Listener 1');
4.    });
5.    
6.    button.addEventListener('click', () => {
7.      Promise.resolve().then(() => console.log('Microtask 2'));
8.      console.log('Listener 2');
9.    });
10.  
11. button.click();

Вопрос: в каком порядке будут выведены в консоль сообщения, когда выполнится код выше? Будет ли разница с первым вариантом? Если нет, то можете опустить этот фрагмент объяснения. Если да, то объяснить, в чём разница.
