var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	let volume = document.querySelector("#volume");
	volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down Video");
	video.playbackRate -= .1;
	console.log("Video Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed up Video");
	video.playbackRate += .1;
	console.log("Video Speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
	else {
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
})

document.querySelector("#slider").addEventListener("change", function () {
	video.volume = this.value / 100;
	volume.innerHTML = video.volume * 100 + "%";
	console.log("The current volume value is " + video.volume); 
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool"); 
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool"); 
});
