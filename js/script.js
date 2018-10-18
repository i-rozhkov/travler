var form = document.getElementById('popup'), 
		formText = document.getElementsByClassName('form-text')[0],
		colors = ['rgba(0, 0, 0, .8)', 'rgba(96, 23, 163, .8)', 'rgba(112, 29, 187, .8)', 'rgba(128, 56, 194, .8)', ' rgba(163, 79, 240, .8)', 'rgba(145, 77, 207, .8)', '#701d77', 'rgba(112, 29, 119, .8)', 'rgba(112, 112, 112, .8)'];


function popup () {
  if (form.style.display == "none") {
      form.style.display = "block";
  } else {
      form.style.display = "none";
  }
}

setInterval(function(){
	var accent = Math.floor(Math.random() * 5);
	form.style.backgroundColor = colors[accent];
	formText.style.color = colors[accent];
}, 1000);