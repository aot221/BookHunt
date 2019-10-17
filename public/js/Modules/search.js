export function search(searchTerm){
	/*
	Makes a ajax call to the google books api with the given search term.
	*/
	var searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm;
	var jsonData, searchStatus;
	$.ajax({
		url:searchUrl,
		async: false,
		success: function(json, xhr){
			console.log(json);
			jsonData = json;
			searchStatus = xhr;
		},
		error: function(error, xhr){
			console.log(error);
			jsonData = error;
			searchStatus = xhr;
		}
	});
	return [jsonData, searchStatus];
}

