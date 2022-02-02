  var clickCount = 0;

  var buttonCount =  0;//incr by one
  var numberCorrect = 0;//in button call

  var count = 0;
  var level = 4;

  var buttons = ["0", "1", "2", "3","4", "5", "6", "7","8", "9", "10", "11", "12","13","14",
  "15","16","17","18","19","20", "21", "22", "23", "24", "25", "26", "27", "28","29"];
  var isVisitedButtons = [false,false,false,false,false,
    false,false,false,false,false,false,false,
  false,false,false,false,false,false,false,false,false,
  false,false,false,false,false,false,false,false,false];
  var revButtons = [];

   function initialHide()
   {
     for(let i = 0; i < 30; i++)
     {
       let temp = "button" + i;
       document.getElementById(temp).style.visibility = "hidden";
     }
   }

  function insertButtons()
  {
    for(let i = 0; i < 30; i++)
    {
      let temp = "button" + i;
      document.getElementById(temp).innerHTML = "<button class = 'button' id='button" + i + "' onclick = 'sequence(" +  i + ")'><span id='" + i + "'></span></button>";
    }

    for(let i = 0; i < 30; i++)
    {
      let temp = "button" + i;
      document.getElementById(temp).style.visibility = "hidden";
    }
  }

  function randomizeArray() //shuffle the buttons
  {
    let i = 0; //keep track of the current index
    let randomIndex = Math.floor(Math.random() * 30);
    while(i < buttons.length-1)
      {
          if(isVisitedButtons[randomIndex] == false)
           {
            isVisitedButtons[randomIndex] = true; //mark that we have visited
            buttons[i] = randomIndex;
            i = i + 1; //move the index forward
           }
        randomIndex = Math.floor(Math.random() * 30); //regenerate
      }
    }


  function buttonReveal()
  {
    let labelCount = 1;
    for(let i = 0 ; i < level; i++)
    {
      let y = "button" + buttons[i];//Button elements
      let z = "" +buttons[i]; //Turn num to string
      document.getElementById(y).style.visibility = "visible";
      document.getElementById(z).innerHTML = (labelCount + "");
      revButtons[i] = labelCount;
      labelCount++;
    }
    $(document).ready(function(){
        $("span").fadeOut(2000);
      });
  }

  function printInfo()
  {
     document.getElementById("levelInfo").innerHTML = "LEVEL: " + level;
  }

  function reSet()
  {
    for(let i = 0; i < isVisitedButtons.length; i++)
    {
      isVisitedButtons[i] = false;
    }
    
    numberCorrect = 0;
    buttonCount = 0;

    insertButtons();
    randomizeArray();
    buttonReveal();
    printInfo();
  }

  //This is called when a button is clicked
  function sequence(z)
  {

    if(buttons[buttonCount] == z)
    {
      numberCorrect++;
    }

    if(numberCorrect == level)
    {
      level++;
      reSet();
    }
    else {
         buttonCount++;
    }

    $(document).ready(function(){
        $("#" + z).fadeIn(400);
    });
  }
