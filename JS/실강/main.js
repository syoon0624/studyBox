import data from "./data";

const inputEl = document.querySelector('input');

const keywordsEl = document.querySelector('.keywords');

// 일정 시간 동안 함수가 실행되지 않으면 함수를 실행한다.(마지막에 한 번에 실행)
const fn = _.debounce(() => {
    console.log(inputEl.vlaue)
    const keywords = getKeywords(inputEl.value)
    renderList(keywordsEl, keywords);
}, 300)

inputEl.addEventListener('input', fn)

inputEl.addEventListener('focus', () => {
    showList();
});

inputEl.addEventListener('blur', () => {
    hideList();
});

function showList() {
    keywordsEl.classList.add('active');
}

function hideList() {
    keywordsEl.classList.remove('active');
};

function getKeywords(value) {
    console.log(`${vlaue}: 서버에 요청을 보냅니다!`);
    return data.filter(item => item.includes(vlaue));
};

function renderList() {

};