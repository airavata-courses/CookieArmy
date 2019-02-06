$(function() {
	$("#f4").submit(doGet);
	
	$("#f2").submit(doPost);
	$("#f1").submit(doPut);	
	} );

/* 
 * This is the basic form for an Ajax POST
 */
 
function doPost() {
	$.ajax({
			url: "requestPost",
			type: "post",
			data: {
				personName: $("#personName").val(),
				personFor: $("#personFor").val(),
				newRating: $("#newRating").val(),
				newComment: $("#newComment").val()

			},
			success: function(data) {
				$('#div2').html(data);
			}
	});
	return false;	

function doPut() {
	var aj = $.ajax({
			url: "requestPut",
			type: "put",
			data: {
				input_1: [$("#e1").val(), $("#e1_2").val(),
					 $("#e1_3").val(), $("#e1_4").val()]
			},
	});

	aj.done(function(data) {
				$('#div1').html(data);
			});		
	return false;
}

function doGet() {
	$.ajax({
			url: "requestGet",
			type: "get",
			data: {
				name_1: $("#e4").val()
			},
			success: function(data) {
				console.log("get successful");
				console.log("\n");
				console.log("typeof(data): "+typeof(data));
				console.log(JSON.stringify(data));
				$('#div4').html(data);
			}
	});
	return false;	
}
