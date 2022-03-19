function reverseString_2 (str) {
    let splitString = str.split("");
    let reversedArray = splitString.reverse();
    let joinedArray = reversedArray.join("");

    console.log(joinedArray);
}
