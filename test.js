const assert = require('assert');
const request = require("request");
const base_url = "http://localhost:3000/";

import * as inputCheck from "./public/js/Modules/inputCheck.js";

//requires application to be running on localhost
describe("Server Unit Tests", function() {		
  describe("Main Page", function() {
    it("returns status code 200", function(done) {    	
      request(base_url, function(error, response, body) {
      	assert.equal(200, response.statusCode);
      	done();
      });
    });
  });
});


describe("Frontend Javascript Unit Tests", function(){
	describe("inputCheck.js test", function(){
		it("should return false if empty search string is used", function(){
			assert.equal(inputCheck.checkInputField('   '), false);							
		});
		it("should return true if valid search string is entered", function(){
			assert.equal(inputCheck.checkInputField('Sunflower'), true);
		});
	});
});