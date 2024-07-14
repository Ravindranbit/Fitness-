$(document).ready(function () {
	var songs = [
		{
      title: "Alice",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/2-alice.mp3",
      color: "#034f84"
    },
    {
      title: "Stupid Love",
      artist: "Lady Gaga",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Lady_Gaga_-_Stupid_Love.png/220px-Lady_Gaga_-_Stupid_Love.png",
      audioFile: "mp3/3-stup.mp3",
      color: "#622569"
    },
    {
      title: "Rain On Me",
      artist: "Lady Gaga, Arianna Grande",
      cover:
        "http://subrica.com/wp-content/uploads/2020/05/Lady-Gaga-Ariana-Grande-Rain-On-Me-cover.jpg",
      audioFile: "mp3/4-rain.mp3",
      color: "#92a8d1"
    },
    {
      title: "Free Woman",
      artist: "Lady Gaga",
      cover:
        "https://s31242.pcdn.co/wp-content/uploads/2020/05/ffee_woman-scaled.jpg",
      audioFile: "mp3/5-free.mp3",
      color: "#f7cac9"
    },
    {
      title: "Fun Tonight",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/6-fun.mp3",
      color: "#5d0126"
    },
    {
      title: "Chromatica II",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/7-chr2.mp3",
      color: "#c94c4c"
    },
    {
      title: "911",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/8-911.mp3",
      color: "#c3af50"
    },
    {
      title: "Plastic Doll",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/9-plastic.mp3",
      color: "#b1cbbb"
    },
    {
      title: "Sour Candy",
      artist: "Lady Gaga, BLACKPINK",
      cover:
        "https://i.redd.it/aogvmk7fccx41.jpg",
      audioFile: "mp3/10-sour.mp3",
      color: "#ffef96"
    },
    {
      title: "Enigma",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/11-enig.mp3",
      color: "#ff7b25"
    },
    {
      title: "Replay",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/12-replay.mp3",
      color: "#6b5b95"
    },
    {
      title: "Chromatica III",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/13-chr3.mp3",
      color: "#d64161"
    },
    {
      title: "Sine From Above",
      artist: "Lady Gaga, Elton John",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/14-sine.mp3",
      color: "#f4e1d2"
    },
    {
      title: "1000 Doves",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/15-doves.mp3",
      color: "#fefbd8"
    },
    {
      title: "Babylon",
      artist: "Lady Gaga",
      cover:
        "https://celebmix.com/wp-content/uploads/2020/04/EUwFIvEX0AkfTpV.jpeg",
      audioFile: "mp3/16-babylon.mp3",
      color: "#7e4a35"
    }
	];

	for (let song of songs) {
		$("#songs").append(
			'<li class="song" data-audio="' +
			song.audioFile +
			'" data-color="' +
			song.color +
			'">' +
			'<img src="' +
			song.cover +
			'">' +
			'<p class="song-title">' +
			song.title +
			"</p>" +
			'<p class="song-artist">' +
			song.artist +
			"</p>" +
			"</li>"
		);
	}

	$(".jcarousel").jcarousel({
		wrap: "circular"
	});
});

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img[src$=".svg"]').each(function () {
	var $img = jQuery(this);
	var imgID = $img.attr("id");
	var imgClass = $img.attr("class");
	var imgURL = $img.attr("src");

	jQuery.get(
		imgURL,
		function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find("svg");

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== "undefined") {
				$svg = $svg.attr("id", imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== "undefined") {
				$svg = $svg.attr("class", imgClass + " replaced-svg");
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr("xmlns:a");

			// Replace image with new SVG
			$img.replaceWith($svg);
		},
		"xml"
	);
});

// Current slide
$(".jcarousel").on("jcarousel:visiblein", "li", function (event, carousel) {
	let cover = $(this).find("img").attr("src");
	let songTitle = $(this).find("p.song-title").html();
	let songArtist = $(this).find("p.song-artist").html();
	let audioSrc = $(this).attr("data-audio");
	let backgroundColor = $(this).attr("data-color");
	$("body").css("background", backgroundColor);
	$("#background").css("background-image", "url(" + cover + ")");
	$("audio")
		.find("source")
		.attr("src", "" + audioSrc + "");
	player.load();
	player.currentTime = 0;
	$("#song-info").find("img").attr("src", cover);
	$("#song-info .artist-wrap p").find("span.title").html(songTitle);
	$("#song-info .artist-wrap p").find("span.artist").html(songArtist);
});

// Previous slide
$("#previous-btn").click(function () {
	$(".jcarousel").jcarousel("scroll", "-=1");
	$("#play-btn i").removeClass("fa-pause");
	player.pause();
});

// Next slide
$("#next-btn").click(function () {
	if ($(".fa-random").hasClass("active")) {
		let songs = $("#songs li").length - 1;
		let randomSong = Math.floor(Math.random() * songs) + 1;
		$(".jcarousel").jcarousel("scroll", "+=" + randomSong);
	} else {
		$(".jcarousel").jcarousel("scroll", "+=1");
	}
	$("#play-btn i").removeClass("fa-pause");
	player.pause();
});

// Play Icon Switcher
$("#play-btn").click(function () {
	$(this).find("i").toggleClass("fa-pause");
});

// Menu
$("#menu-btn").click(function () {
	$("#content-wrap").addClass("inactive");
	$("#sidemenu").addClass("active");
});

// Home Button
$("#home-btn").click(function () {
	$("#home-screen").addClass("active");
	$(".menu").removeClass("active");
	$("#content-wrap").addClass("minimized");
});

// App
$(".app-icon").click(function () {
	$("#content-wrap").removeClass("minimized");
	setTimeout(function () {
		$("#home-screen").removeClass("active");
	}, 300);
});

function darkMode(){
  $("#iphone").addClass("dark-mode")
  $("#camera span").addClass("dark-mode")
  $("div#screen").addClass("dark-mode")
}

function lightMode(){
  $("#iphone").removeClass("dark-mode")
  $("#camera span").removeClass("dark-mode")
  $("#iphone").removeClass("dark-mode")
}
// Bluetooth
$("#bluetooth-btn").click(function () {
  if ($("#bluetooth-btn").hasClass("active")) {
    $("#bluetooth-btn").removeClass("active");
    lightMode();
  } else {
    $("#bluetooth-btn").addClass("active");
    darkMode();
  }
});

$("#sub-controls i").click(function () {
	if (!$(this).hasClass("fa-bluetooth-b")) {
		$(this).toggleClass("active");
	}

	if ($("#heart-icon").hasClass("active")) {
		$("#heart-icon").removeClass("fa-heart-o");
		$("#heart-icon").addClass("fa-heart");
	} else {
		$("#heart-icon").removeClass("fa-heart");
		$("#heart-icon").addClass("fa-heart-o");
	}
});

/*
 * Music Player
 * By Greg Hovanesyan
 * https://codepen.io/gregh/pen/NdVvbm
 */

var audioPlayer = document.querySelector("#content");
var playpauseBtn = audioPlayer.querySelector("#play-btn");
var progress = audioPlayer.querySelector(".progress");
var sliders = audioPlayer.querySelectorAll(".slider");
var player = audioPlayer.querySelector("audio");
var currentTime = audioPlayer.querySelector("#current-time");
var totalTime = audioPlayer.querySelector("#total-time");

var draggableClasses = ["pin"];
var currentlyDragged = null;

window.addEventListener("mousedown", function (event) {
	if (!isDraggable(event.target)) return false;
  
	currentlyDragged = event.target;
	let handleMethod = currentlyDragged.dataset.method;

	this.addEventListener("mousemove", window[handleMethod], false);

	window.addEventListener(
		"mouseup",
		() => {
			currentlyDragged = false;
			window.removeEventListener("mousemove", window[handleMethod], false);
		},
		false
	);
});

playpauseBtn.addEventListener("click", togglePlay);
player.addEventListener("timeupdate", updateProgress);
player.addEventListener("loadedmetadata", () => {
	totalTime.textContent = formatTime(player.duration);
});
player.addEventListener("ended", function () {
	player.currentTime = 0;

	if ($(".fa-refresh").hasClass("active")) {
		togglePlay();
	} else {
		if ($(".fa-random").hasClass("active")) {
			let songs = $("#songs li").length - 1;
			let randomSong = Math.floor(Math.random() * songs) + 1;
			$(".jcarousel").jcarousel("scroll", "+=" + randomSong);
		} else {
			$(".jcarousel").jcarousel("scroll", "+=1");
		}
		togglePlay();
	}
});

sliders.forEach((slider) => {
	let pin = slider.querySelector(".pin");
	slider.addEventListener("click", window[pin.dataset.method]);
});

function isDraggable(el) {
	let canDrag = false;
	let classes = Array.from(el.classList);
	draggableClasses.forEach((draggable) => {
		if (classes.indexOf(draggable) !== -1) canDrag = true;
	});
	return canDrag;
}

function inRange(event) {
	let rangeBox = getRangeBox(event);
	let direction = rangeBox.dataset.direction;
	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
	var min = screenOffset - rangeBox.offsetLeft;
	var max = min + rangeBox.offsetWidth;
	if (event.clientX < min || event.clientX > max) {
		return false;
	}
	return true;
}

function updateProgress() {
	var current = player.currentTime;
	var percent = (current / player.duration) * 100;
	progress.style.width = percent + "%";

	currentTime.textContent = formatTime(current);
}

function getRangeBox(event) {
	let rangeBox = event.target;
	let el = currentlyDragged;
	if (event.type == "click" && isDraggable(event.target)) {
		rangeBox = event.target.parentElement.parentElement;
	}
	if (event.type == "mousemove") {
		rangeBox = el.parentElement.parentElement;
	}
	return rangeBox;
}

function getCoefficient(event) {
	let slider = getRangeBox(event);
	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
	let K = 0;
	let offsetX = event.clientX - screenOffset;
	let width = slider.clientWidth;
	K = offsetX / width;
	return K;
}

function rewind(event) {
	if (inRange(event)) {
		player.currentTime = player.duration * getCoefficient(event);
	}
}

function formatTime(time) {
	var min = Math.floor(time / 60);
	var sec = Math.floor(time % 60);
	return min + ":" + (sec < 10 ? "0" + sec : sec);
}

function togglePlay() {
	player.volume = 0.5;

	if (player.paused) {
		player.play();
	} else {
		player.pause();
	}
}
