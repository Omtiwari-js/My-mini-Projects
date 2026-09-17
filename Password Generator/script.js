let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copyBtn = document.getElementById("copyBtn");


// showing input slider value
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});


genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*()_+,./-=";

// function to generate password
function generatePassword(){
           let genPassword = "";
           let allChars = "";

           allChars += lowercase.checked ? lowerChars : "";
           allChars += uppercase.checked ? upperChars : "";
           allChars += Numbers.checked ? allNumbers : "";
           allChars += Symbols.checked ? allSymbols : "";


          let i = 1;
          while(i <= inputSlider.value){
            genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
            i++;
        }

        
          return genPassword;
}

copyBtn.addEventListener("click", () =>{
    if(passBox.value != ""  || passBox.value.length >=1){
    navigator.clipboard.writeText(passBox.value);
    copyBtn.innerText = "✓"
    copyBtn.title = "Password Copied";

    setTimeout(() => {
        copyBtn.innerText = " content_copy";
        copyBtn.title = "";
    }, 3000);
    }
});