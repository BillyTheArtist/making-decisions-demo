/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has better attack than Jon Snow')
} else {
    console.log('Jamie Lannister has the same attack as Jon Snow')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

//jamie lannister has attacked

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0
    console.log('Jon Snow has been slain')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    //jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}
//Jon obtains a shield
jonSnowDefense += 25

//Jamie attacks again!
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}