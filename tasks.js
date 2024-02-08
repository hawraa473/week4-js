// Task 1
var myAge = 18
if ( myAge => 18 ) {
console.log( "You are eligible for voting,") ;
} else { 
console.log( "You are not eligible for voting." ) ; 
}



// Task 2
function printNumbersWithWhile() {
  var i = 1 ;
 while ( i < 6 ) {
console.log(i);
 i++;
} 
}


// Task 3

function printEvenNumbersWithFor(i) {
  for ( var i = 2 ; i  <12 ; i+2 ) {
  console.log( i );
 }
 }


// Task 4
function getDayOfWeek() { 
  var a=1 ;
 switch(a){
case 1 : 
console.log ( ' Saturday ')
break;  
case 2 : 
console.log ( ' Sunday ')
break;  
case 3 : 
console.log ( ' Monday ')
break;  
case 4 : 
console.log ( ' Tuesday ')
break;  
case 5 : 
console.log ( ' Wednesday ')
break;  
case 6 : 
console.log ( ' Thursday ')
break;  
case 7 : 
console.log ( ' Friday ')
break;  
}
}

// Task 5
function sum( ) { 
  var a= 'Zahraa' ;
  var b= " Hawraa " ;
console.log( a + b ) ;
} 
 

// Task 6
//Uncomment and solve
var fruits = [ 'orange'  , 'apple' , 'banana' ] ;
console.log( fruits ) ;

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
