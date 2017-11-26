/* global $ */

var facts = ["test sentances i!!!!!!11!!1!1!", 
			"tset even longer sentance thoo so idk what to say",
			"etc. etc. etc. dath boeyio",
			"yeet thiss is some placeholder text",
			"please stop i do not want this anymore",
			"you're not welcome anymore. I should have change that stupid lock",
			"I should have made you leave your key"];
			
var names = ["Emma Alcock", "Shelby Dye", "Julia Magolon", "Taylor Williams", "Cassie Gastmeier", "Quinn Lang", "Hunter Tucker", "Alex Brisbin", "Damian Barbu", "Lea Braun", "Yng $wiper", "Jordan Lunn", "Ryan McCuaig", "Matthew Gartner", "Fouad Khattab", "Joseph Lu", "Joss Murphy", "Pranav Gupta", "Ozan Bayezit", "Gillian McGregor", "Brooklyn Savage", "Colin Hsu", "Zoe Fitzsimmons", "Hima Sheth", "Brooke Winter", "Tegan Morrison", "Marly Verhoeve", "Christopher Jones", "Thorben Wennemer", "Tim Khaperski", "Connor Button", "Eilidh Perston", "Andrew Bassili", "Sam Rintche", "Omar Elmallah", "Phoebe McAdam", "Noah Nimer", "Kangan Mahajan", "Dajana Bakoc", "Brynn Plaxton", "Sara Hussein", "Jared Proll", "Lucie Mitchell", "Emily Vaillancourt", "Kelsey Fixter", "Teigan Veitch", "Jake Choi", "Hayden Steer", "Henry O'Connor", "Owen Kent", "Sam Driever", "Carson Davis", "John Tupling", "Carlo Lobrutto", "Viktor De", "Theo Dan", "Ashley Malcolm", "Jasmine Zafari", "Umaymah Suhail", "Manahil Khan", "Luandrya Martins", "Gary Shen", "Graham Smith", "Emily Roest", "Trudy MacDonald", "Paige Gascho", "Nathan Pineda", "Michaela Kennedy", "Tallis Dalrymple", "Joel Jobby", "Zach Couture", "Bryanna Chalmers", "Eliza Gill"]

function randInRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function start(sentences, duration, pops, arrName) {
	$('#output').empty();
	var intervals = duration/pops;
	var html = '';
	
	var element = '<p id="final">' + sentences[randInRange(0, sentences.length)] + '</p>';
	$('#output').append(element);
	for (var i = 0; i < pops; i ++) {
		var element = '<p id="sentence' + i + '" class="fadeOut">' + sentences[randInRange(0, sentences.length)] + '</p>'
	  html += element;
	}
	var timeouttime = 1000;
	var stayTime = 0;
	var script = '<script>setFade(' + arrName + ',' + timeouttime + ',' + pops + ', false)</script>';
	var script1 = '<script>setFade('+ arrName +',' + timeouttime + ',' + pops + ', true)</script>';
	$('#output').append(html)
	console.log(document.getElementById('output'));
	console.log($('#output').length)
	for (var i = 0; i < $('#output').children().length; i++) {
		var offset_x = randInRange(0, 70) * ($('#output').width()/100) ;
		var offset_y = randInRange(0, 95) * ($('#output').height()/100);
		
		var currentElement = $($('#output').children()[i]);
		var outputBoxPos =  $('#output').position()
		var double_offset_x = (currentElement.width() + offset_x) - (outputBoxPos.left + $('#output').width());
		var double_offset_y = (currentElement.height() + offset_y) - (outputBoxPos.top + $('#output').height());
		console.log(outputBoxPos);
		
		if (double_offset_x > 0) {
			offset_x -= double_offset_x;
		}
		if (double_offset_y > 0) {
			offset_y -= double_offset_y;
		}
		currentElement.css({'top': offset_y + 'px', 'left': + offset_x + 'px'})
	}

	$('#output').append(script)
	setTimeout(function() {
		$('#output').append(script1);
	}, stayTime + timeouttime);
	console.log(element);
	$("#final").fadeIn(timeouttime);
	setTimeout(function () {
		$("#final").animate({top: ($("#output").height() / 2) - $("#final").height() / 2, left: ($("#output").width() / 2) - $("#final").width() / 2}, 1000);
	}, timeouttime*3)
}

function setFade(arr, duration, pops, out) {
	var intervals = duration/pops;
	for (var i = 0; i < pops; i++) {
		
		timeout(i,intervals, out);
	}
}

function timeout(i, intervals, out) {
	var s = setTimeout(() => {
			if (out) {
				$('#sentence' + i).fadeOut(1000);
			} else {
				$('#sentence' + i).fadeIn(1000);
			}
		}, i * intervals);
}

