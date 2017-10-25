$(document).ready(function(){
	
	var KD = "http://dblp.uni-trier.de/pers/xx/d/Draszawka:Karol.xml";
	var KDCoop = "http://dblp.uni-trier.de/pers/xc/d/Draszawka:Karol.xml";
	
	var arrayKD = new Array();
	
	function xmlParser(xml) {

		$(xml).find("co").each(function () {
			var personWork = $(this).find("na").text();
			console.log(personWork);
			
			//$('#circles').append($('<div>').addClass('circle').append('<p>' + personWork + '</p>')).hide().fadeIn(500);
		});
		
		$.ajax({
			type: "GET",
			url: KDCoop,
			dataType: "xml",
			success: parseWorkCooperate
	   });
	   
	   console.log(arrayKD);  

	}
	
	function parseWorkCooperate(xml) {

		$(xml).find("author").each(function () {
			
			var person = $(this).text();
			var amountCommonDocuments = $(this).attr("count");
			
			//Add cooperate people with KD
			arrayKD.push({
				key: person,
				value: amountCommonDocuments
			});		
		});
		
			for (var value in arrayKD) {
				let val = arrayKD[value];
				console.log(val.key + "=" +	val.value);
				var addPerson = val.key + "=" +	val.value;
				
				$('#circles').append($('<div>').addClass('circle').append('<p>' + addPerson + '</p>')).hide().fadeIn(500);
			}
	}
	
	 $("#button1").click(function() {
		 
		$.ajax({
			type: "GET",
			url: KD,
			dataType: "xml",
			success: xmlParser
	   });
	 
	      
	});

});