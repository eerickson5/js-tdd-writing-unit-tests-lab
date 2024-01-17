// Your code here
export function isPalindrome(word){
    let bool = word.length > 0
    word.split("").forEach((letter, i) => {
        if(i < word.length / 2 && letter.toLowerCase() != word.charAt(word.length - i - 1).toLowerCase()){
            bool = false
        }
    })
    return bool
}