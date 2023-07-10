let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
 "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
 "?","/"];
 let password = ""
 let includeNonAlphabet = true
//  console.log(characters.length)
//  console.log("Nachy")
 for (let i = 0; i< 15; i++){
    
    // let randomNum = Math.floor(Math.random()*53)
    let randomNum = Math.floor(Math.random()* (includeNonAlphabet ? characters.length:5))
    // console.log(characters[randomNum])
    password = password + characters[randomNum]
        // console.log(characters[i])
 }
 //console.log(" This is my randomly generated password: "+ password)

 function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  } 
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
 // console.log(getRandomSymbol())

  const letter = 'abcdef'
console.log(letter.charCodeAt(0))
