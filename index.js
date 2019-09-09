function fizzBazz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i)
    }
}
fizzBazz(30);

// function isTextSame(text) {
//     if (text === undefined) return false;
//     var left = 0;
//     var right = text.length -1;
//     while (left < right) {
//         if (text[left++] !== text[right--]) return false;   
//         }
//         return true;
//     }

//     function isPhraseSame(text) {
//         var chars = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
//         return isTextSame(chars);
//     }

//     isPhraseSame("Madam,  I'm Adam ")
    
// function factorial(number) {
//     var result = 1;
//     for (i = 2; i <= number; i += 1) {
//       result *= i;
//     }
//     return result;
//   }
//   factorial(12)