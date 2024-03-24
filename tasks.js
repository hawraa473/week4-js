 
 //Task 1

 function checkVotingEligibility () {
  var myAge = 18 ;
  if( myAge >= 18 ) {
      console.log("You are eligible for voting,");
  } 
  else{
      console.log(
         "You are not eligible for voting." 
      );
  }
    }
    checkVotingEligibility(); 
  
    //Task 2
  
    function printNumbersWithWhile(){
      var i=1 ;
      while(i<6 ){console.log(i);
          i++;
      }
    }
    printNumbersWithWhile();
  
  
    //Task 3
  function printEvenNumbersWithFor (){
      for (var i = 2; i <= 11; i += 2) {
      console.log(i);
  }
  }
  printEvenNumbersWithFor();
   
  //Task 4
  
  function getDayOfWeek(){
      let day = 3;
  let dayName;
  
  switch (day) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
      case 3: dayName = "Tuesday" ;
      break;
      case 4: dayName = "Wednesday" ;
      break ;
    default:
      dayName = "Invalid day";
  }
  console.log("Today is " + dayName); 
  }
  getDayOfWeek();
  
  //Task 5
  
  function sum( ) { 
      var a= 1 ;
      var b= 2 ;
    console.log( a + b ) ;
    } 
     sum(); 
  
     //Task 6 
     
     var fruits = [ 'orange'  , 'apple' , 'banana' ] ;
  console.log( fruits ) ; 
  
  
  
 // students = [ 'hawraa' , 'fatima' , 'fatima' ]
  //console.log( ...students);