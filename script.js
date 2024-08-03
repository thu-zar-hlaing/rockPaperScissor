const gameContainer = document.querySelector(".container");
 userResult = document.querySelector(".user_result img");
 cpuResult = document.querySelector(".cpu_result img");
 result = document.querySelector(".result");

 optionImages = document.querySelectorAll(".option_image");
//  console.log(gameContainer,userResult,cpuResult,result,optionImages);
optionImages.forEach((image,index) => {//loop through each option image element
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
        userResult.src = cpuResult.src = "rock.png";
        result.textContent ="Wait...";
        optionImages.forEach((image2,index2)=>{
        //Loop through each  option image again 
        //If the current index does not match the clicked index 
        //Remove the "active" class from the other option images
           index !== index2 && image2.classList.remove("active");

          
        });
        gameContainer.classList.add("start");

        //Set a time out to delay get result calculation
        let time = setTimeout(()=>{
        gameContainer.classList.remove("start");

             //Get the source of the click option image
         let imgSrc = e.target.querySelector("img").src;
         //set the user image to the clicked option image
         userResult.src = imgSrc;
         //Generate a random number between 0 and 2
         let randomNumber = Math.floor(Math.random()*3);
         //Create an array of cpu image option
         let cpuImages = ["rock.png","paper.png","scissors.png"];
         cpuResult.src = cpuImages[randomNumber];
         //Assign a letter value to the cpu option (R for rock, P for paper, S for Scissors)
         let cpuValue = ['R','P','S'][randomNumber];
         //Assign a letter value to the clicked option (based on index)
         let userValue = ['R','P','S'][index];
         //Create an object with all possible outcomes 
         let outcomes = {'RR':'Draw',
                        'RP':'Cpu',
                        'RS':'User',
                        'PP':'Draw',
                        'PR':'User',
                        'PS':'Cpu',
                        'SS':'Draw',
                        'SR':'Cpu',
                        'SP':'User'};
         //Look at the outcome values based on user and cpu options 
         let outComeValue = outcomes[userValue+cpuValue];
         result.textContent = userValue === cpuValue? "Match Draw": `${outComeValue} won!! `;
        
        },2500)


    });
});