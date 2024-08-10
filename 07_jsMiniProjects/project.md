


# Project 2: B.M.I. Calculator

```javascript

    const form = document.querySelector("form")

    form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give  a valid height"
    }else if(weight  === '' || weight   < 0 || isNaN(weight  )){
        result.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const bmi = (weight / ((height/100)**2)).toFixed(2)
        //shows the result 
        result.innerHTML = `<span>${bmi}</span>`

        //conditions 
        if(bmi < 18.6){
        result.innerHTML = `<span>The given bmi is : ${bmi}<br><h3><b>Under weight</b></h3</span>`
        }else if(bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML = `<span>The given bmi is : ${bmi}<br><h3><b>Normal weight</b></h3</span>`
        }else{
        result.innerHTML = `<span>The given bmi is : ${bmi}<br><h3><b>Over weight</b></h3</span>`
        }
    }
})
```

# Project 3: Digital clock
```javascript
    const clock = document.getElementById('clock');



setInterval(()=>{
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

# Project 4: Guess the number

```javascript
    let randomNumber = (Math.random() * 10 + 1).toFixed();
console.log(randomNumber);
const submit = document.querySelector('#subt');

const user = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaininingSlot = document.querySelector('.lastResult');

const lowHigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const parse = parseInt(user.value);
    console.log(parse);
    validateGuess(parse);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number smaller than 100');
  } else {
    //
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      CheckGuess(guess);
    }
  }
}

function CheckGuess(guess) {
  //
  if (guess == randomNumber) {
    displayMsg('You guessed it right!');
    endGame();
  } else if (guess < randomNumber) {
    displayMsg('Number is Too low');
  } else if (guess > randomNumber) {
    displayMsg('Number is Too High');
  }
}

function displayGuess(guess) {
  //
  user.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaininingSlot.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  //
  lowHigh.innerHTML = `<h2>${msg}</h2>`;
  console.log(msg);
}

function endGame() {
  //
  user.value = '';
  user.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New GAme</h2>`;
  p.style.cursor = 'pointer';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e)=>{
    randomNumber = (Math.random() * 10 + 1).toFixed();
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaininingSlot.innerHTML = `${11 - numGuess}`
    user.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

```
# Project 5: Color Changer

```javascript
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    
    
    
    const changeClr = function(){
      const hex = '0123456789ABCDEF';
      let color = '#';
    
      for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
      }
      return color;
    
    }
    
    
    let individualRan;
    
    const startChange = function(){
    
      const changebg = ()=>{
        document.body.style.backgroundColor = changeClr();
      }
      individualRan = setInterval(changebg, 1000)
    }
    
    const stopChange = function(){
      console.log("called")
      clearInterval(individualRan)
    }
    
    start.addEventListener('click', startChange)
    stop.addEventListener('click', stopChange)
```
# Project 6: Keyboard identifier

```javascript 
    const insert = document.getElementById("insert");

    window.addEventListener("keydown", (e)=>{
      insert.innerHTML = `
        <div class='color'>
          <table>
          <tr>
            <th>key</th>
            <th>key code</th>
            <th>Code</th>
          </tr>
          <tr>
            <td>${e.key === ' '? "space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.Code}</td>
          </tr>
        </table>
        </div>
      `
})
```
