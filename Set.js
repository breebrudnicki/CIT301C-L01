function Set() {


	this.intersection = function(listA, listB) {

	   var resultList = new Array(); // create a resultList array

	   /*-------------------------------Insert your code here -------------------------------------*/
		 /*A list of all elements common between both ListA and ListB*/
		 /*Example Function/Code from the Reading*/

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

/*Me*/
	this.union = function(listA, listB) {

	   var resultList = new Array();

	   /*-------------------------------Insert your code here -------------------------------------*/
		 /*A combined list of all elements in both ListA and ListB*/
		 /*Everybody in listA and listB with no duplicates*/

		 if (listA === null || listB === null) { //Check for invalid input
		   return null; //exit and return null to indicate and error
	   }

		 //Get the symmetric difference of SetA and setB
		 var symAB = this.symetricDifference(listA, listB);
		 //Append the returned elements to the resultSet
		 resultList = resultList.concat(symAB);

		 //Get the intersection of setA and setB
		 var intAB = this.intersection(listA, listB);
		 //append the returned elements to the resultSet
		 resultList = resultList.concat(intAB);

		 //return resultSet

	   /*-------------------------------Insert your code here -------------------------------------*/

	   return resultList;
	}

	this.relativeCompliment = function(listA, listB) {

	   var resultList = new Array();

	   /*-------------------------------Insert your code here -------------------------------------*/
		 /*A list of elements in on set but not in the other*/
		 /*A but not in B*/

		 /*In this case listA and listB will be interchangable depending which one is passed in first*/
		 if (listA === null || listB === null) { //Check for invalid input
		   return null; //exit and return null to indicate and error
	   }

	   for (var i = 0; i < listA.length; i++) { //for every element in list A
		   var nextValue = listA[i]; // get the next value in the list
			 resultList.push(listA[i]); // add everything to resultList from ListA
		   //for every element in listB
		   for (var j = 0; j < listB.length; j++) {
		   		if (listB[j] === nextValue) { //this listB element equals nextValue
					resultList.pop(listB[j]); //remove ListB element to the end of resultList
					break; //break out of (exit) the listB inner loop
				}
		   } // end listB inner loop
	   } //end listA outer loop


	   /*-------------------------------Insert your code here -------------------------------------*/

	   return resultList;
	}

	this.symetricDifference = function(listA, listB) {

	   var resultList = new Array();

	   /*-------------------------------Insert your code here -------------------------------------*/
		 /*A list of all elements not common between listA and listB*/
		 /*Basically the opposite of intersection*/

		 if (listA === null || listB === null) { //Check for invalid input
		   return null; //exit and return null to indicate and error
	   }

		 //abResult = relativeCompliment(setA, setB)
		 var abResult = this.relativeCompliment(listA, listB);
		 //append(resultSet, abResult)
		 resultList = resultList.concat(abResult);

		 //baResult = relativeCompliment(setB, setA)
		 var baResult = this.relativeCompliment(listB, listA);
		 //append(resultSet, baResult)
		 resultList	= resultList.concat(baResult)

	   /*-------------------------------Insert your code here -------------------------------------*/

	   return resultList;
	}

}
