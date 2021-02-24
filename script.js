let text = document.querySelector('#text');
let input = document.querySelector('#speed');
let str = 'We love programming';
let speed = 300 / input.value;
let idx = 1;



const writeToText = () => {
    text.innerText = str.slice(0,idx);
    idx ++;

    if (idx > str.length) {
        idx = 1
    }

    setTimeout(writeToText,speed);
}

writeToText();


input.addEventListener('click',() => {
    console.log("clicked");
    speed = 300 / input.value;
    
})