//
// Title: trejo-palindrome.js
// Author: Professor Krasso
// Modified by: Allan Trejo
// Date: 01-06-2022
// Description: Javascript File for trejo-palindrome.html
//

// Returns date MM/DD/YYYY
function getTodaysDate() {
  return new Date().toLocaleDateString("en-us");
}

// Returns string Length
function getLength(str) {
  return str.length;
}

//Reverses string input
// Expected output:
// hello => olleh
function reverse(str) {
  let string = [...str];
  string.reverse();
  let reverseString = string.join("");
  return reverseString;
}

// Returns True is string is the same forwards as reversed
// Else Returns False
function isPalindrome(str) {
  if (str === reverse(str)) {
    return true;
  } else return false;
}

//Binds Onlick
document.getElementById("btnCheckPhrase").onclick = function () {
  // Variables
  let txtPhrase = document.getElementById("txtPhrase").value;
  txtPhrase = txtPhrase.toLowerCase();
  let assignResults = document.getElementById("assign-results");
  let today = getTodaysDate();
  let len = getLength(txtPhrase);
  let reversedPhrase = reverse(txtPhrase);

  isPalindrome(txtPhrase);

  // Applies Template Literal to assign-results div
  let header = `Date: ${today} </br> 
  Original Phrase: ${txtPhrase} </br> 
  Reversed Phrase: ${reversedPhrase} </br> 
  Phrase Length: ${len} </br>
 <div class="card-title">
 ${txtPhrase}  <b><u>${
    isPalindrome(txtPhrase) ? "is" : "is not"
  }</u></b> a palindrome!
 </div>`;

  assignResults.innerHTML = header;
};
