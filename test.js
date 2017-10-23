/* global $ */

var facts = ["test sentances i!!!!!!11!!1!1!", 
			"tset even longer sentance thoo so idk what to say",
			"etc. etc. etc. dath boeyio",
			"yeet thiss is some placeholder text",
			"please stop i do not want this anymore",
			"you're not welcome anymore. I should have change that stupid lock",
			"I should have made you leave your key"];
			
var names = ["HELP ME MAKE SOME TEST factts",
			"I factually NEED MY BAG DO",
			"facc IDK WHAT TOR RIGHT ",
			"true stordasot say what mys  be said",
			"stop factually please ", 
			"fact: naasddsdasdadadas", 
			"fact: ???? test tsentances etc. etc. etc. dath boeyio",
			"fact: you'rdsdse not welcome anymore. I should have change thatlock",
			"fact: thacdsdsdsdsdscts",
			"did you know that most people are NOTad GOOD because they believe in percentages",
			"only hs people are allowed in this room, true fact",
			"test fact"]

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

