window.onload = () => {

document.getElementById("studies").style.visibility = 'hidden';


};
function toggleHidden() {
	var history = document.getElementById('history');
	var studies = document.getElementById('studies');
	if (history.style.visibility == 'hidden') {
		history.style.visibility = 'visible';
		studies.style.visibility = 'hidden';
	} else {
		history.style.visibility = 'hidden';
		studies.style.visibility = 'visible';
	}
}
