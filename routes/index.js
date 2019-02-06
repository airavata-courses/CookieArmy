var ratings = require("../models/mymongo.js");
var mydb = "myProducts";
var mycollection = "personRating";

exports.index = function(req, res) {
  res.render('index', {title: 'MongoDB Test'})
};

/*
PUT, GET, POST http methods for personRating
*/
exports.doPut = function(req, res){
  //ratings.push(req.body.inputString);
  // input is an array where each element is an attribute of a Rating
  console.log("In doPut index.js");
  var input = req.body.input_1
  ratings.insert( mydb, 
                mycollection, 
                {"name": input[0], 
                  "for":input[1], 
                  "rating":input[2],
                   "comment":input[3]},
                function(model) {
                  // below directs to event.ejs since doing res.render ('event', ...)
                  res.render('rating', {title: 'Rating list', obj: model});
                  }
                );
  //res.send(200, 'Student ' + req.body.inputString + ' added!');
};


exports.doGet = function(req, res){
	// for get need to do req.query
	console.log("exports.doGet, req query is: " + req.query.name_1);
ratings.find( mydb, 
              mycollection, 
              {"name" : req.query.name_1},
              function(model) {
              	// below directs to event.ejs since doing res.render ('event', ...)
					res.render('rating',{title: 'Local carpoolers', obj: model});
                }
              );
};


exports.doPost = function(req, res){

  console.log("req.body:"+JSON.stringify(req.body));
  /* MUST do below so that if 'To Name' field is blank, browser does not think that the user wants
  	change a name (the empty stirng)
  	*/

  if (req.body.newRating === "") {
  		req.body.newRating = "left blank during post";
  	}
  if (req.body.newComment === "") {
  		req.body.newComment = "left blank during post";
  	}

ratings.update( mydb, 
                  mycollection, 
                  {"find":{"name":req.body.personName},
                                            "update":
                                            {$set: 
                                              {"for":req.body.personName,
                    											 		"rating":req.body.newRating,
                    											 		"comment":req.body.newComment
                  											 		}}
                  											},
                  function(model) {
							res.render('success',{title: 'Local events', obj: model});
                    }
              );
};

// Place holder delete required
exports.doDelete = function(req, res){
  console.log("EXPORTS.doDELETE req.body");

};