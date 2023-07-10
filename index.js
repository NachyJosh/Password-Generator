let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
 "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
 "?","/"];
 let passLength = document.querySelector("#length")
 let lengthResult = document.querySelector(".length-result")
let users = []
let passGenEL = document.getElementById("pass-gen") 
let testEl = document.getElementById("test-el")
testEl.textContent = ("CONFIRM THE CONNECTION")
let chkButton = document.getElementById("chkbtn")
let password = ""
 chkButton = false

passLength = addEventListener("change", (Event)=>{
    lengthResult.innerText = Event.target.value
})
 
function passGen(){
for(let i = 0; i < 15; i++){ 
        if(chkButton.checked == false ){
            let randomPass = Math.floor(Math.random() *characters.length)
            // let randomNum = Math.floor(Math.random()* (includeNonAlphabet ? characters.length:5))
            password = password + characters[randomPass]
            
         }else {let randomPass = Math.floor(Math.random()*(chkButton ? characters.length:10))
             password = password + characters[randomPass]
             
            
        }
    
    
}
// let randomPass = (Math.floor(Math.random ())*15)
passGenEL.textContent = password 
 password = ""
}
function signUp(){
users.push()
}
