const p1button = document.querySelector('#p1Button');
const p2button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1display = document.querySelector('#p1Display');
const p2display = document.querySelector('#p2Display');
const winningSelect = document.querySelector('#playto');

let p1score = 0;
let p2score =0;
let winningScore = 3;
let isGameOver = false;

p1button.addEventListener('click',()=>{
    if(!isGameOver ){
        p1score += 1;
        if(p1score ===winningScore ){
            isGameOver = true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
            
        }
        p1display.innerText = p1score;
    }     
})

p2button.addEventListener('click',()=>{
    if(!isGameOver ){
        p2score += 1;
        if(p2score === winningScore ){
            isGameOver = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;

        }
        p2display.innerText = p2score;
    }     
})

winningSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    // for(let p of [p1,p2]){
    //     pscore=0;
    //     pdisplay.innerText = 0;
    //     pdisplay.classList.remove('has-text-danger','has-text-success');
    //     pbutton.disabled = false;

    // }
    p1score=0;
    p2score=0;
    p1display.innerText = 0;
    p2display.innerText = 0;
    p2display.classList.remove('has-text-success','has-text-danger');
    p1display.classList.remove('has-text-danger','has-text-success');
    p1button.disabled = false;
    p2button.disabled = false;

}