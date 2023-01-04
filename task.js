// ф-я робить перевірку чи є аргумент паліндромом  "abba"
// виводить три варіанта: 
//    якщо він паліндром - "OK"
//    якщо одна літера зайва щоб зробити паліндром - "Remove One" 
//    якщо більше однієї літери зайві "Not Possible"


const SingleCharacterPalindrome = (palindrome) => { 

    // робимо перевірку кожної літери через цикл 
    for (let i = 0; i < palindrome.length/2; i++  ) { 
  
      if (palindrome[i] != palindrome[palindrome.length -1 -i]) { 
        // створюю малі рядки з паліндрома розраховуючи видалити, або 1 символ, або останній
        let rem_last_num = palindrome.slice(i, palindrome.length  -1 -i)
        let rem_first_num = palindrome.slice(i+1, palindrome.length   -i)
        
        // якщо залишилось два символа то можна видалити один символ і він стане поліндромом
        if (rem_last_num.length == 1) {
  //         console.log(`---You can delete one letter: "${rem_last_num}" or "${rem_first_num}" from the word "${palindrome}"`)
          return "Remove One"
        }
        else {
          let first_rem_last_num = rem_last_num.slice(0,rem_last_num.length/2)
          let last_rem_last_num = rem_last_num.slice(Math.ceil(rem_last_num.length/2), rem_last_num.length)
          
  
          let first_rem_first_num = rem_first_num.slice(0,rem_first_num.length/2)
          let last_rem_first_num = rem_first_num.slice(Math.ceil(rem_first_num.length/2), rem_first_num.length)
          
  
          if (first_rem_last_num == last_rem_last_num){ 
  //           console.log(`---You can delete one letter: "${palindrome[palindrome.length - 1 - i]}" from the word "${palindrome}"`)
            return "Remove One"
          }
          else if ( first_rem_first_num == last_rem_first_num){ 
  //           console.log(`---You can delete one letter:  "${palindrome[i]}" from the word "${palindrome}" `)
            return "Remove One"
          }
          else {
            return 'Not Possible' 
          }
        } 
      }
    }
    return 'OK'
  } 
  //                  abanhnba
  console.log(SingleCharacterPalindrome("abba")); // "OK" 
  console.log(SingleCharacterPalindrome("abbaa")); // "Remove One" 
  console.log(SingleCharacterPalindrome("abbaab")); // "Not Possible" 
  console.log(SingleCharacterPalindrome("madmam")); // "Remove One" 
  console.log(SingleCharacterPalindrome("raydarm")); // "Not Possible" 
  console.log(SingleCharacterPalindrome("hannah")); // "OK"  