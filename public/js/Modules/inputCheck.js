export function checkInputField(input){
	//checks the value of the user search input
	return !(input === null || input.match(/^ *$/) !== null);
}