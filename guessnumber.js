let num=parseInt(prompt('enter the maximum number'))
while(!num)
{
    num=parseInt(prompt('enter a valid number '))
}
let target=Math.floor(Math.random()*num)+1 // range starts from 1 to max number entered
let  guess=(prompt("enter ur guess buddy"))
let count=1// this variable is used to count the total number of guesses taken
while(parseInt(guess)!==target)
{
    if(guess==='quit')// when user dont wanna continue he can type quit to exit from game
        break
    count++;

    if(guess>target)
        guess=(prompt("entered high value !! try a different guess"))
    else if(guess<target)
        guess=prompt("entered low value !! try a different guess")// we are not parsing here bcoz it never works for quit option
    else
    guess=prompt('invalid guess.please enter quit to quit or any number to continue')
}
if(guess==='quit')
    console.log('ok u quit....')// when the user type quit then this text displays
else
console.log(`u got it!! it took ${count} guesses`)