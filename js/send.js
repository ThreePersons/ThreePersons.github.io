$(function($){
							$("#contactForm").submit(function(event){
								event.preventDefault();

								$.ajax({
						    url: "https://formspree.io/pinf.15.top@gmail.com",
						    method: "POST",
						    data: {
									name: $("#name").val(),
									email: $("#email").val(),
									message: $("#message").val()
								},
						    dataType: "json"
								}).done(function(){
									$("#name").val("");
									$("#email").val("");
									$("#message").val("");
									alert("Сообщение доставлено!");
								}).fail(function(){
									alert("Произошла ошибка!")
								});
							});
						});
