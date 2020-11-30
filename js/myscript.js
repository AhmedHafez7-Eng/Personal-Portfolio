	/*Making Navbar Sticky*/
	window.addEventListener('scroll', function(){

		var header = document.querySelector('header');
		header.classList.toggle('sticky',window.scrollY > 0);
	});

	/*Trigger Toggle Navbar Menu*/
	function togglemenu(){
		var  menuToggle = document.querySelector('.toggle');
		var  menu = document.querySelector('.menu');
		menuToggle.classList.toggle('active');
		menu.classList.toggle('active');
	}

	//----------- Links Add Active Class on click 	(Navbar Section)

	$('header ul li a').click(function(){

		$(this).parent().addClass('activeColor').siblings().removeClass('activeColor');
	});


	//----------- Trigger Read More Button		(About Section)

	function readMore() {
	  var dots = document.getElementById("dots");
	  var moreText = document.getElementById("more");
	  var btnText = document.getElementById("readMoreBtn");

	  if (dots.style.display === "none") {
	    dots.style.display = "inline";
	    btnText.innerHTML = "Read more";
	    moreText.style.display = "none";
	  } else {
	    dots.style.display = "none";
	    btnText.innerHTML = "Read less";
	    moreText.style.display = "inline";
	  }
	}


	//-----------	Show Hidden Items and Hide it		(Work Section)
	var count_click = 0;
	$('.show-more').click(function(){
		count_click++;
		if(count_click%2 != 0){	////////////Show Divs
			$(".show-more").html("Show Less");
			$('.work .content .hidden').fadeIn(1500);
		}
		else{	//////Hide Divs
			$(".show-more").html("Show More");
			$('.work .content .hidden').fadeOut(1000);
		}
	});

	//-----------	Making PopUp for each project		(Work Section)

	let workBx = document.querySelectorAll('.workBx');
	workBx.forEach(popup => popup.addEventListener('click', () =>
	{
		popup.classList.toggle('poppa');
	}));


	//---------- Contact Email Validation			(Contact Section)

	function validate(){
		const form = document.getElementById('form');
		const email = document.getElementById('email').value;
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

		if(email.match(pattern)){
			form.classList.add('valid')
			form.classList.remove('invalid')
		}else{
			form.classList.add('invalid')
			form.classList.remove('valid')
		}
		if(email == ""){
			form.classList.remove('valid')
			form.classList.remove('invalid')
		}
	}


	//-----------	Trigger Light & Dark Mood
	$(function() {
		var count=0;
		    $('.dark-light').click( function() {
		    count++;
		    				/*Light Mode*/
		    if(count%2==0){
		    	$('.about, .services, .work, .testim, .contact, .copyright').removeClass('changeBack');
		    	$('.about .heading, .services .heading, .work .heading, .testim .heading, .contact .heading, .about, .contact').removeClass('changeColor');
		    	$('.dark-light').css('color', '#2196f3').removeClass('stopShadow');
		    	$('.testimBx').removeClass('cardboxshadow');

		    				/*Dark Mode*/
		    }else{

        		$('.about, .services, .work, .testim, .contact').addClass('changeBack');
        		$('.about .heading, .services .heading, .work .heading, .testim .heading, .contact .heading, .about, .contact').addClass('changeColor');
        		$('.dark-light').css('color', '#FFF').addClass('stopShadow');
        		$('.testimBx').addClass('cardboxshadow');

				
		    }
    	});
	});

	//----------- Trigger To Top Button

	$(window).scroll(function() {
	    if ($(this).scrollTop()) {
	        $('#toTop').fadeIn();
	    } else {
	        $('#toTop').fadeOut();
	    }
	});

	$("#toTop").click(function () {
	   //1 second of animation time
	   //html works for FFX but not Chrome
	   //body works for Chrome but not FFX
	   //This strange selector seems to work universally
	   $("html, body").animate({scrollTop: 0}, 40);
	});


 
	//----------- My Own Auto Slider 	(Testimonials Section)
 
	(function autoSlider(){			/*Self-Invoke Function*/

		$('.testim .content .slidactivate').each(function(){

			if(!$(this).is(':last-child')){

				$(this).delay(7000).fadeOut(1000, function(){

					$(this).removeClass('slidactivate').next().addClass('slidactivate').fadeIn();
					
					autoSlider();
				})

			}else{
				$(this).delay(7000).fadeOut(1000, function(){

					$(this).removeClass('slidactivate');

					$('.testim .content div').eq(0).addClass('slidactivate').fadeIn();

					autoSlider();
				});
			}
		});
	}());
