//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
    //Your code goes here


//Call method here with parameters


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if( dog_string.indexOf(dog_names[i])){
        return "Hello " + dog_names[i] + ", my name is" + dog_names[i] + ",and I " +  dog_names[i] + dog_names[i] + "eyes!"
        } else {
            return 'No Matches'
        }
    }
}

console.log(findWords())





//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



function replaceEvens(given_arr){
    let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
    for(let i = 0; i < given_arr.length; i++){
        if(i % 2 == 0){
            given_arr.splice(i,1,"even index")
        }
    }
    return arr
}

console.log(replaceEvens())