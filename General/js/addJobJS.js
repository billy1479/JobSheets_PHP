// JS for the add job sheet area
function loadNewID() {
	// this loads the New ID for a job sheet when the add job sheet page is loaded
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('jobIDLabel').innerHTML = this.responseText;
		}
	}
	xhttp.open('GET','../Functions/loadNewID.php',true);
	xhttp.send();
}

function jobSheetForm() {
	// this is called when a job sheet is submitted
	document.getElementById('addJobSheetForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber;
		var engineerBoxes, expensesBoxes, equipmentBoxes, serialNumberBoxes, costBoxes, saleBoxes, expensesBoxes;
		
		// these were added for the email system - passes through the location and new ID for the job (could be done via PHP but this is easier)
		var jobID, location;
		jobID = document.getElementById('jobIDLabel').innerHTML;
		location = document.getElementById('locationLabel').innerHTML;

		date = $('#jobDate').val();
		client = $('#clientSelect').val();
		ponumber = $('#ponumberInput').val();
		days = $('#daysEntry').val();
		hours = $('#hoursEntry').val();

		// this is for the engineers (as there can be up to 4, this needs to be an array)
		engineers = [];
		document.querySelectorAll('.engineerSelect').forEach(function (x) {
			engineers.push(x.value);
		})

		// this is for getting the job details
		details = $('#detailsArea').val();


		// this is for storing the expenses, this is done in a list format
		// 0 = mileage, 1 = food, 2 = postage, 3 = parking, 4 = tools

		expenses = []
		i = 0;
		document.querySelectorAll('.textField').forEach(function (currentInput) {
			currentValue = currentInput.value;
			temp = '';
			if (i == 0) {
				x = currentValue * 0.3;
				x = Number.parseFloat(x).toFixed(2);
				currentValue = x;
			} else {
				currentValue = Number.parseFloat(currentValue).toFixed(2);
			}
			expenses.push(currentValue); 
			i += 1;
		})

		// this is for storing the equipment used
		equipmentBoxes = [];
		serialNumberBoxes = [];
		costBoxes = [];
		saleBoxes = [];
		equipment = [];
		document.querySelectorAll('.equipmentInput').forEach(function (a) {
			equipmentBoxes.push(a.value);
		})
		document.querySelectorAll('.serialNumberInput').forEach(function (a) {
			serialNumberBoxes.push(a.value);
		})
		document.querySelectorAll('.costNumberInput').forEach(function (a) {
			costBoxes.push(a.value);
		})
		document.querySelectorAll('.saleNumberInput').forEach(function (a) {
			saleBoxes.push(a.value);
		})
		i = 0;
		for (i=0;i<equipmentBoxes.length;i++) {
			tempArray = [equipmentBoxes[i], serialNumberBoxes[i], costBoxes[i], saleBoxes[i]];
			equipment.push(tempArray);
		}

		serialState = false;
		console.log('hello')
		for (i=0;i<equipment.length;i++) {
			console.log('the loop is running')
			if (equipment[i][0] !== '') {
				if (equipment[i][1] == '') {
					serialState = true
				}
			}
		}

		if (serialState == true) {
			alert('Please make sure all equipment has its associated serial number - if you do not know it then please write N/A')
		} else {
			// job complete
			// jobcomplete = $('#jobCompleteCheckbox').value;

			// invoice number
			// invoicenumber = $('#invoiceNumberInput').val();

			// Puts all data into one array object
			// var jobEntry;
			// jobEntry = [date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber];

			// creates a JS object and creates a JSOn object for it
			// jobEntry =  {date: date, client: client, ponumber: ponumber, days: days, hours: hours, engineers: engineers, details: details, expenses: expenses, equipment: equipment, invoicenumber: invoicenumber}
			// JSONentry = JSON.stringify(jobEntry);

			// $('#addJobSheetForm').load('../Functions/submitJob.php', {x: JSONentry, id: jobID, location: location}, function (data, status) {
			// 	document.location.reload();
			// })
		}
	})
}

function assignLocationChange() {
	document.getElementById('clientSelect').addEventListener('click', function () {
		// this loads the address when a client is selected
		document.getElementById('clientSelect').addEventListener('change', function () {
			x = $('#clientSelect').val();
			$('#locationLabel').load('../Functions/loadAddress.php', {clientName: x}, function (data, status) {
			})
		})
	})
}
// Function calls

loadNewID();
jobSheetForm();
assignLocationChange();
// formElements();
// equipmentAssign()