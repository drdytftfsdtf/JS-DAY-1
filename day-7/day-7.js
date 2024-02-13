var myname= "abcdefijlk"
function isstringpalindrome(string){
    for(var i=0;i< Math.floor(string.length/2);i++ ){
        console.log(string[i], string[string.length-i-1])
        if(string[i]!==string[string.length-i-1]){
            return "not palindrome"
        }
    }
    return" its a palindrome"
}
console.log(isstringpalindrome(myname))
