


const person = {
    Name:'aditya',
    age:'21'
}
localStorage.setItem('user',JSON.stringify(person))
console.log(JSON.parse(window.localStorage.getItem('user')));
document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault();
    console.log(window.localStorage)
});