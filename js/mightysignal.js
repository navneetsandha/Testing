

	$(document).ready(function(){

		$(".accounts").hide();

		$("#accounting-tab").click(function(e){
        		e.preventDefault(); //To prevent the default anchor tag behaviour
        		$('#first-container').hide();
        		$(".accounts").show();
        		$("#navigation-tab").show();
	   
    	});
    	$("#navigation-tab").click(function(e){
        		e.preventDefault(); //To prevent the default anchor tag behaviour
        		$('#first-container').show();
        		$(".accounts").hide();  
	   
    	});

                        var json = $.parseJSON(data);
                        $("#results").html('name: ' + json.name + '<br/> Amount:' + json.amount + '<br/> date: ' + json.date);


    
	    	$("#submit").click(function(data){
				event.preventDefault();
	   			alert("Getting Data on Click");
	   			$.ajax({
	   				type:"POST",
	   				// url: "http://mightysignal.com/challenge/payment_seed.json",
	   				url: "mightysignal_json.js",
	        		contentType: 'application/javascript',
	        		dataType:"text",
			    	dataType:"jsonp",
			    	// data: $('#revenue_details').serializeArray(),
			    	data: JSON.stringify($('#revenue_details').serializeArray()),
			    	crossDomain: true,
			    	success:function(){
			    		console.log(data);
			    		$("#table").append(data);

					// $('#table').html(data);
					 // $.each(data, function( index, value ) {
      //                          var row = $("<tr><td>" + value.name + "</td><td>" + value.amount + "</td></tr>" + value.data + "</td></tr>");
      //                          $("#table").append(row);
      //                       });
			    	},
			  		success: function (response, status, xhr) {
			  			var ct = xhr.getResponseHeader("contentType") || "";
			  			if (ct.indexOf('html') > -1){
			  				var row = $("<tr><td>" + value.name + "</td><td>" + value.amount + "</td></tr>" + value.data + "</td></tr>");
                            $("#table").append(row);
			  			}

			  		},
			    	error: function(){
			    		console.log("going in error function");
			    		// alert("Something went wrong");
			    		// alert('error: ');


			    	}
				});
	    	return false;
	    });


});



   	
