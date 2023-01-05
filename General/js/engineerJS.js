function loadEngineers(mode) {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			if (mode == 1) {
				document.getElementById('engineerSelect').innerHTML = this.responseText;
			} else {
				document.getElementById('engineerSelect2').innerHTML = this.responseText;
			}
		}
	}
	xhttp.open('GET','../Functions/loadEngineers.php',true);
	xhttp.send();
}
// openModal function can be placed on the mainscript file that is called in as well

// this doesn't work - needs to be added not sure why it was forgotten
function loadEngineerTable() {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('engineerContainer').innerHTML = this.responseText;
		}
	}
	xhttp.open('GET','../Functions/loadEngineerTable.php',true);
	xhttp.send();
}

function engineerForms() {
    document.getElementById('addEngineerForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var x, y;
		x = $('#addengineerText').val();
		$('#addEngineerFormFrame').load('../Functions/engineer.php', {engineerMode: 1, engineerName: x}, function (data, status){

		});
		document.location.reload();
	})
    document.getElementById('editEngineerNameForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var x, y;
		x = $('#engineerEditText').val();
		y = $('#engineerSelect').val();
		$('#editEngineerNameFormFrame').load('../Functions/engineer.php', {engineerMode: 2, engineerName: y, newName: x}, function (data, status){

		});
		document.location.reload();
	})
    document.getElementById('deleteEngineerForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var x, y;
		y = $('#engineerSelect2').val();
		$('#deleteEngineerFormFrame').load('../Functions/engineer.php', {engineerMode: 3, engineerID: y}, function (data, status){

		});
		document.location.reload();
	})
}

function openModal(name) {
    var tabs, i;
    tabs = document.getElementsByClassName('mymodal');
    for (i=0;i<tabs.length;i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(name).style.display = 'block';
	// this is for calling the JS for loading the engineer names to the select boxes
	// this function is called on the start of editClients.html and editEngineers.html
	// the first sub-page on each is called to start
	// if (name == 'editEngineerModal') {
	// 	loadEngineers(1); 
	// 	engineerForms();
	// } else if (name == 'deleteEngineerModal') {
	// 	loadEngineers(2);
	// 	engineerForms();
	// } else if (name == 'editClientModal') {
	// 	loadClients()
	// } else {}
}

// Function calls

loadEngineers();
loadEngineerTable();
engineerForms();