/*let button=document.getElementById("check-btn");
let text=document.getElementById("text-input");
let result=document.getElementById("result");
/*function removeNonNumerical(str) {
  return str.replace(/[\W_]/gi, '').toLowerCase();
}
button.addEventListener("click", goto);
function goto(){
  if(text.value === "")
  {
    alert("Please input a value");
  }
  else
  {
      function removeNonNumerical(text){
        var punctuation = /[\.,?!]/g;
        var spaces=/\s/g;
        var symbols = /[:/\()\/_-]/g;
         if(text.includes(punctuation)||text.includes(spaces)||text.includes(symbols))
         {
           var string=text.replace(punctuation,'');
           var string1=text.replace(spaces,'');
           var string2=text.replace(symbols,'');
           var finalstring=string+string1+string2;
           var compare=string.split("").reverse().join("");
           var compare1=string1.split("").reverse().join("");
           var compare2=string2.split("").reverse().join("");
           var comparefinal=compare+compare1+compare2;
           if(finalstring.value===comparefinal.value)
           {
              return `${finalstring.value} is a palindrome` ;
           }
           else
           {
             return `${finalstring.value} is a not palindrome` ;
           }
                     
         }
         else
         {
           var compare=text.split("").reverse().join("");
           if(text.value===compare)
           {
             return `${text.value} is a palindrome`;
           }
           else
           {
               return `${text.value}is not a palindrome`;
           }

         }
      } 

  }
  
 }*/

 let button = document.getElementById("check-btn");
 let textInput = document.getElementById("text-input");
 let result = document.getElementById("result");
 
 button.addEventListener("click", checkPalindrome);
 
 function checkPalindrome() {
     let text = textInput.value.trim();
     if (text === "") 
     {
         alert("Please input a value");
     } 
     else 
     {
         let alphanumericText = removeNonNumerical(text);
         let reversedText = alphanumericText.split("").reverse().join("");
         if (alphanumericText === reversedText) {
             result.textContent = `${text} is a palindrome`;
         } else {
             result.textContent = `${text} is not a palindrome`;
         }
     }
 }
 
 function removeNonNumerical(str) {
     return str.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
 }
 
 