function isPalindrome(){

    var input = document.querySelector("input").value.toLowerCase();
    console.log(input);

    for(var i = 0; i < input.length/2; i++){
        if (input [i] !== input[input.length - 1 - i]){
            var isPalindromeOutput = false;
            break;
        }
    }

    if (isPalindromeOutput === false){
        document.getElementById("palindromeResult").innerHTML = "This is NOT a palindrome!"
    } else {
        document.getElementById("palindromeResult").innerHTML = "This is a palindrome!"
    }
}