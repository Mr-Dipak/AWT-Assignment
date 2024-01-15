function promptRepeater(){
    
    var userInput;
    do{
        userInput = prompt("Please Enter Number!");
        if(!isNaN(userInput)&& userInput !==null && userInput!=="" ) {
            var paragraph = document.createElement("p")
            paragraph.textContent("Entered Number is: "(userInput))
            document.querySelector(".result").appendChild(paragraph)
        }
    }while(userInput !==null && userInput !== "0");


}

promptRepeater()