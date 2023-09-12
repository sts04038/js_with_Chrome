const loginForm = document.getElementById('login-form');
// querySelector()을 사용할거면 대상이 id인지 명확히 해야된다 #login-form - 왜냐면 얘는 classname, tagename 모두 검색 가능하다.
// 반면 getElementById는 js가 이미 id를 찾는지 알고있다.
// const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault(); // 기본동작 막기 (새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit); // form안 input은 클릭이나 엔터시 자동 submit됨
} else {
    paintGreetings(savedUsername);
}
