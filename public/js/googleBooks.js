$(document).ready(function() {
	var tableData = document.getElementById("google-book-table"); 
    console.log( "ready!" );
	$("#book-search-submit").click(function(){		
		//
		var searchTerms = $("#book-search").val();
		console.log(searchTerms);
		searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerms;
		console.log(searchUrl);

		//ajax call to the google books api based on user inputed search term
		$.ajax({
			url:searchUrl,
			success: function(json){
				console.log(json);
				//var htmlcontent = "";
				//loop through content of json response from Google Books api and display as list.
				var table = `
					<table class="table table-striped" id = "myTable">
					  <thead>
					    <tr>
					      <th scope="col">Book Title</th>
					      <th scope="col">Author</th>
					      <th>Publisher</th>
						  <th>Book Image</th>
					    </tr>
					  </thead>
					  <tbody>
					  `;
					  //create and append rows
					for(i = 0; i < json.items.length; i++){
					    table +=
					    `<tr>
					      <td>${json.items[i].volumeInfo.title}</td>
					      <td>${json.items[i].volumeInfo.authors}</td>
					      <td>${json.items[i].volumeInfo.publisher}</td>
					      <td><img src="${json.items[i].volumeInfo.imageLinks.thumbnail}"</td>
					    </tr>`
					}
					//close off table
					table +=
					  `</tbody>
					  </table>`
					  ;

					tableData.innerHTML = table;

				// for (i = 0; i < json.items.length; i++) 		
		  // 		{
		  // 			tr = $('<tr/>');
		  //           tr.append("<td>" + json.items[i].volumeInfo.title + "</td>");
		  //           tr.append("<td>" + json.items[i].volumeInfo.authors[0] + "</td>");
		  //           tr.append("<td>" + json.items[i].volumeInfo.publisher + "</td>");
		  //           tr.append("<td>" + "<img src=" + json.items[i].volumeInfo.imageLinks.thumbnail + ">" + json.items[i].volumeInfo.publisher + "</td>");
		      //       $('table').append(tr);
		   			// htmlcontent += "<li>Title: " + json.items[i].volumeInfo.title + "&nbsp Author: " + json.items[i].volumeInfo.authors[0] + "&nbsp Publisher: " + json.items[i].volumeInfo.publisher + "<img src=" + json.items[i].volumeInfo.imageLinks.thumbnail +  ">" + "<br>";
		  		//}
				//document.getElementById("books").innerHTML = "<ul>" + htmlcontent + "</ul><br>";				   
			}
		});
	});    
});

