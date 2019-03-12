console.log(food)

function ChangeFood(){
    let food = window.prompt('give me a food name(plural)');
    document.getElementById('food').innerText = food;
}
document.getElementById('ChangeFood').onclick = ChangeFood;

function ChangeEnemy(){
let enemy = window.prompt('Who is someone you hate?');
document.getElementById('enemy').innerText = enemy;
}
document.getElementById('ChangeEnemy').onclick = ChangeEnemy;

function ChangeFriend(){
let friend = window.prompt('What is you friends name?');
document.getElementById('friend').innerText = friend;
}
document.getElementById('ChangeFriend').onclick = ChangeFriend;

function ChangeVerb(){
let verb = window.prompt('What is something you enjoy doing(one word answer with the ing)')
document.getElementById('verb').innerText = verb;
}
document.getElementById('ChangeVerb').onclick = ChangeVerb;

let value=0;

function subtract(){
    value=value-1;
    console.log(value);
    document.getElementById('value').innerText = value;
}
document.getElementById('subtract').onclick = subtract;

function add(){
    value=value+1;
    console.log(value);
    document.getElementById('value').innerText = value;
}
document.getElementById('add').onclick = add;