	// Marquee Slideshow
		var i = 0;
		var slideshow = null;
		var marqueeTimeDelay = 3000; 	// Seconds * 1000, of course
		var TOTALSLOTS = 7; 			// Total number of Marquee slots.  Will likely always be 4.

		// Swamp marquee
		function showMarquee( SLOT ) {

		// Which slot are we activating?
			var ACTIVESLOT = "nowShowingSlot" + SLOT;
			var MARQUEEIMG = "nowShowing" + SLOT;

		// Reset all div displays
			document.getElementById('nowShowing1').style.display = "none";
			document.getElementById('nowShowing2').style.display = "none";
			document.getElementById('nowShowing3').style.display = "none";
			document.getElementById('nowShowing4').style.display = "none";
			document.getElementById('nowShowing5').style.display = "none";
			document.getElementById('nowShowing6').style.display = "none";
			document.getElementById('nowShowing7').style.display = "none";

			document.getElementById('nowShowingSlot1').className = "marqueeSlot";
			document.getElementById('nowShowingSlot2').className = "marqueeSlot";
			document.getElementById('nowShowingSlot3').className = "marqueeSlot";
			document.getElementById('nowShowingSlot4').className = "marqueeSlot";
			document.getElementById('nowShowingSlot5').className = "marqueeSlot";
			document.getElementById('nowShowingSlot6').className = "marqueeSlot";
			document.getElementById('nowShowingSlot7').className = "marqueeSlot";

		// Turn on the current section and swap out the image
			document.getElementById(ACTIVESLOT).className = "marqueeSlotOn";
			document.getElementById(MARQUEEIMG).style.display = "inline";

		// Stop the slideshow or hijinks will ensue
			stopSlideshow();
		};

		function runSlideshow(marqnum) {
			if(marqnum) i = marqnum;
			else i = i + 1;
			if( i > ( TOTALSLOTS ) ) {
				i = 1;
			};
			showMarquee( i );
			slideshow = setTimeout( 'runSlideshow()', marqueeTimeDelay );
		};

		function stopSlideshow() {
			clearTimeout(slideshow);
		};

	// Start the slideshow as soon as this loads!
		slideshow = setInterval("runSlideshow()", 1000);