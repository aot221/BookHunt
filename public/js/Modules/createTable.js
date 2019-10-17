export function creatTableFromJson(json){
	/*
	Creates a table in html that is then appended to the table div located on the main index.html page.
	*/
	var tableData = document.getElementById("google-book-table");     	
	var table = `
				<table class="table table-striped" id = "myTable">
				  <thead>
				    <tr>
				      <th scope="col">Book Title</th>
				      <th scope="col">Author</th>
				      <th>Publisher</th>
					  <th>Book Image</th>
					  <th>More Info</th>
				    </tr>
				  </thead>
				  <tbody>
				  `;
				  //create and append rows
				for(var i = 0; i < json.items.length; i++){
				    table +=
				    `<tr>
				      <td>${json.items[i].volumeInfo.title}</td>
				      <td>${json.items[i].volumeInfo.authors}</td>
				      <td>${json.items[i].volumeInfo.publisher}</td>
				      <td><img src="${ ("imageLinks" in json.items[i].volumeInfo == true ) ? json.items[i].volumeInfo.imageLinks.thumbnail : ''}" alt="No Thumbnail Available"</td>
				      <td>${json.items[i].volumeInfo.infoLink}</td>
				    </tr>`
				}
				//close off table
				table +=
				  `</tbody>
				  </table>`
				  ;
				  
				//set  HTML content of the table to be the search results
				tableData.innerHTML = table;				
}