import * as search from './Modules/search.js';
import * as checkInput from './Modules/inputCheck.js';
import * as createTable from './Modules/createTable.js';

$(document).ready(function() {   
	var searchJson, searchStatus, response;

    //Event for when search button is clicked
	$("#book-search-submit").click(function(){			
		var searchTerm = $("#book-search").val();
		
		//check if field is valid
		if (checkInput.checkInputField(document.getElementById('book-search').value) == true){	
			
			//reset error message to blank if successful input value
			document.getElementById("error-message").innerHTML = '';
			
			//call google books api with the user inputted search term and store result
			response = search.search(searchTerm);
			searchJson = response[0];
			searchStatus = response[1];

			//check api search response
			if (searchStatus == "success"){
				createTable.creatTableFromJson(searchJson);	
			}
			else{
				document.getElementById("error-message").innerHTML = "Search failed with error:" + searchJson;	
			}			
		}

		//if input is not valid display error
		else {
			document.getElementById("error-message").innerHTML = "Invalid value: Blank spaces or empty string detected";
		}

	});    
});