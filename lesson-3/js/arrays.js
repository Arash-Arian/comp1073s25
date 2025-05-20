const output = document.querySelector('body p:nth-of-type(2)');
const output2 = document.querySelector('body ul');
/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */

let myArray = ["string", 1, true, [1, 2, 3]];

/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
// output.textContent = `the fisrt element of array inside my array is ${myArray[3][0]}`

// You can also change a particular element
myArray[1]=false
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
myArray[3][1] = "bye"
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
// let myArrayLength = myArray.length
let totalThingsInMyArray = myArray.length+myArray[3].length
output.textContent = `The total number of elements in my array is ${totalThingsInMyArray} `
// In particular, looping through arrays
for (let i = 0; i < myArray.length; i++) {
    // output.textContent += `${myArray[i]} `
    // if (i === myArray.length - 1) {
    //     for (let j = 0; j < myArray[myArray.length-1].length; j++) {
    //         output2.innerHTML += `<li>${myArray[myArray.length-1][j]}</li>`
    //     }
    // }
    
    // if (Array.isArray(myArray[i])) {
    //     for (let j = 0; j < myArray[i].length; j++) {
    //         output2.innerHTML += `<li>${myArray[i][j]}</li>`
    //     }
    // } else {
    //     output.textContent += `${myArray[i]} `
    // }

    let listItem = document.createElement("li")
    output2.append(listItem)
    
    if (Array.isArray(myArray[i])){
        let unListItem = document.createElement("ul")
        output2.append(unListItem)
        for (let j = 0; j < myArray[i].length; j++) {
            let listItem = document.createElement("li")
            unListItem.append(listItem)
            listItem.textContent = `${myArray[i][j]}`
        }
        
    }
    else{
        listItem.textContent = `${myArray[i]}`
    }
}
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */

// Output one of the array items

// Output the last element of the array

/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */

/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()

// If you would like to capture how many elements are in the array after you have edited it, then…

// Removing an item from an array with pop()

// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()

// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */