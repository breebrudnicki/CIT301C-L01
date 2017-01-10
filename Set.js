function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = new Array(); // create a resultList array
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   if (listA === null || listB === null) { //Check for invalid input
		   return null; //exit and return null to indicate and error
	   }

	   for (var i = 0; i < listA.length; i++) { //for every element in list A
		   var nextValue = listA[i]; // get the next value in the list

		   //for every element in listB
		   for (var j = 0; j < listB.length; j++) {
		   		if (listB[j] === nextValue) { //this listB element equals nextValue
					resultList.push(listB[j]); //add ListB element to the end of resultList
					break; //break out of (exit) the listB inner loop
				}
		   } // end listB inner loop
	   } //end listA outer loop
	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeCompliment = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symetricDifference = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
