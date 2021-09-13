var history = [];
var order = 1;
var makeField = function(){
return Array(15).fill(0).map(i=>Array(15).fill(0));
}
var field;

function setGame(){
field = makeField();
history = [];
}

function getWinner(){
let count = 0;
let whoWin = [];

for(let i=0; i<15; i++){
for(let j=0; j<10; j++){
count = 0;
for(let k=0; k<5; k++){
count += field[i][j+k];
}
if(count == 5){
whoWin.push([1,i,j,0]);
}
if(count == -5){
whoWin.push([-1,i,j,0]);
}
}
}

for(let i=0; i<10; i++){
for(let j=0; j<15; j++){
count = 0;
for(let k=0; k<5; k++){
count += field[i+k][j];
}
if(count == 5){
whoWin.push([1,i,j,1]);
}
if(count == -5){
whoWin.push([-1,i,j,1]);
}
}
}

for(let i=0; i<10; i++){
for(let j=0; j<10; j++){
count = 0;
for(let k=0; k<5; k++){
count += field[i+k][j+k];
}
if(count == 5){
whoWin.push([1,i,j,2]);
}
if(count == -5){
whoWin.push([-1,i,j,2]);
}
}
}

for(let i=5; i<15; i++){
for(let j=0; j<10; j++){
count = 0;
for(let k=0; k<5; k++){
count += field[i-k][j+k];
}
if(count == 5){
whoWin.push([1,i,j,3]);
}
if(count == -5){
whoWin.push([-1,i,j,3]);
}
}
}

return whoWin;
}

setGame();

var timerCount;
function execute(func,time,interval){
timerCount = setInterval(func,interval);
setTimeout(function(){clearInterval(timerCount)},time);
return timerCount;
}

