// this exports the page as a pdf to be sent as an email - this is when a job is submitted with a receipt so will update the sql table as well as open a new page for email
// can be main script for all files
function sendPDF() {
	if (document.getElementById('jobCompleteCheckbox').checked == true) {
	loadNewID();
	var myWindow = window.open('', 'PRINT');
	var id, date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber;
	var engineerBoxes, expensesBoxes, equipmentBoxes, serialNumberBoxes, costBoxes, saleBoxes, expensesBoxes;
	id = document.getElementById('jobIDLabel').innerHTML;
	date = $('#jobDate').val();
	client = $('#clientSelect').val();
	ponumber = $('#ponumberInput').val();
	days = $('#daysEntry').val();
	hours = $('#hoursEntry').val();
	details = $('#detailsArea').val();

	// calculates the height of the input
	let numberOfLineBreaks = (details.match(/\n/g) || []).length;
	let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;

	locationz = document.getElementById('locationLabel').innerHTML;

	engineers = [];
	document.querySelectorAll('.engineerSelect').forEach(function (x) {
		engineers.push(x.value);
	})

	let totalExpenses = 0
	expenses = []
	i = 0;
	document.querySelectorAll('.textField').forEach(function (currentInput) {
		currentValue = currentInput.value;
		temp = '';
		if (i == 0) {
			actualMileage = currentValue
			x = currentValue * 0.3;
			x = Number.parseFloat(x).toFixed(2);
			currentValue = x;
		} else {
			currentValue = Number.parseFloat(currentValue).toFixed(2);
		}
		expenses.push(currentValue); 
		totalExpenses = totalExpenses + parseFloat(currentValue);
		i = i + 1;
	})

	totalExpenses = Number.parseFloat(totalExpenses).toFixed(2);
	
	equipmentBoxes = [];
	serialNumberBoxes = [];
	costBoxes = [];
	saleBoxes = [];
	equipment = [];
	totalSale = 0;
	totalCost = 0;
	document.querySelectorAll('.equipmentInput').forEach(function (a) {
		equipmentBoxes.push(a.value);
	})
	document.querySelectorAll('.serialNumberInput').forEach(function (a) {
		serialNumberBoxes.push(a.value);
	})
	document.querySelectorAll('.costNumberInput').forEach(function (a) {
		costBoxes.push(a.value);
		totalCost = totalCost + Number.parseFloat(a.value);
	})
	document.querySelectorAll('.saleNumberInput').forEach(function (a) {
		saleBoxes.push(a.value);
		totalSale = totalSale + Number.parseFloat(a.value);
	})
	i = 0;
	for (i=0;i<equipmentBoxes.length;i++) {
		tempArray = [equipmentBoxes[i], serialNumberBoxes[i], costBoxes[i], saleBoxes[i]];
		equipment.push(tempArray);
	}

	totalCost = Number.parseFloat(totalCost).toFixed(2);
	totalSale = Number.parseFloat(totalSale).toFixed(2);

	jobcomplete = $('#jobCompleteCheckbox').value;

	// invoice number
	invoicenumber = $('#invoiceNumberInput').val();

	let tempEngineers = []
	let engineerCounter = 0;
	engineers.forEach(function(x) {
		if (x == '') {

		} else {
			tempEngineers.push(x)
			engineerCounter += 1;
		} 
	})

	// equipment - this counts how many of the equipment list was filled (goes off the basis that the names must be filled in for anything else to be filled in)
	tempEquipment = []
	equipmentCounter = 0;
	equipment.forEach(function(x) {
		if (x[0] == '') {

		} else {
			tempEquipment.push(x)
			equipmentCounter += 1;
		}
	})

	// Puts all data into one array object
	var jobEntry;
	jobEntry = [date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber];

	// creates a JS object and creates a JSOn object for it
	jobEntry =  {date: date, client: client, ponumber: ponumber, days: days, hours: hours, engineers: engineers, details: details, expenses: expenses, equipment: equipment, invoicenumber: invoicenumber}
	JSONentry = JSON.stringify(jobEntry);

	// converts data to english format
	tempYear = date[0] + date[1] + date[2] + date[3];
	tempMonth = date[5] + date[6];
	tempDay = date[8] + date [9];
	newDate = tempDay + '/' + tempMonth + '/' + tempYear


	// functions for sorting layout of print out (amount of lines for equipment and engineers)

	myWindow.document.write('<html><title>Job Sheet Print</title><body>')
	myWindow.document.write("<h2 style='display: inline-block;'>Job Sheets</h2>")
	myWindow.document.write("<h2 style='display: inline-block; float: right;'>Job Number - " + id + "</h2>")
	myWindow.document.write('<h3 style="display: block; font-size: 2rem;">' + newDate + '</h3>');
	myWindow.document.write('<h3 style="font-size: 2rem; display: block;">' + client + '</h3>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Location - ' + locationz + '</li>')
	myWindow.document.write('<li>Engineers:' + '</li>')

	for (i=0;i<engineerCounter;i++) {
		myWindow.document.write('<li><strong>' + tempEngineers[i] + '</strong></li>')
	}
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')

	myWindow.document.write('<li>Days - ' + days + '</li>')
	myWindow.document.write('<li>Hours - ' + hours + '</li>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Details:' + '</li>')
	myWindow.document.write('<li><textarea style="height: ' + newHeight + 'px; border: none;">' + details + '</textarea></li>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Equipment:</li>')

	for (i=0;i<equipmentCounter;i++) {
		myWindow.document.write('<li>Name: ' + equipment[i][0] + ' | Serial Number: ' + equipment[i][1] + ' | Cost Number: ' + equipment[i][2] + ' | Sale Number: ' + equipment[i][3] + '</li>')
	}

	myWindow.document.write('<li>Total Cost: ' + totalCost + '</li>')
	myWindow.document.write('<li>Total Sale: ' + totalSale + '</li>')

	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Expenses:' + '</li>')
	myWindow.document.write('<li>Mileage: ' + expenses[0] + ' ('+ mileage + ' miles)</li>')
	myWindow.document.write('<li>Food: ' + expenses[1] + '</li>')
	myWindow.document.write('<li>Postage: ' + expenses[2] + '</li>')
	myWindow.document.write('<li>Parking: ' + expenses[3] + '</li>')
	myWindow.document.write('<li>Tools: ' + expenses[4] + '</li>')
	myWindow.document.write('<li>Total Expenses: ' + totalExpenses + '</li>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<button onclick="window.print()">PRINT</button>')
	myWindow.document.write('<form action="mailto:expenses@ardenit.net">')
	myWindow.document.write('<button type="submit">Email</button>')
	myWindow.document.write('</form>')
	myWindow.document.write('</body></html>')
	myWindow.document.close();

	$('#addJobSheetForm').load('../Functions/submitJobReceipts.php', {x: JSONentry}, function (data, status) {
		
	})
	} else {
		alert('Please ensure the Job Complete Box is ticked ... ')
	}
}

// this is if someone wants to export or print a job sheet without submitting it to the sql database
// can be in main script for all files
function sendPDF2() {
	var myWindow = window.open('', 'PRINT');
	var id, date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber;
	var engineerBoxes, expensesBoxes, equipmentBoxes, serialNumberBoxes, costBoxes, saleBoxes, expensesBoxes;
	id = document.getElementById('jobIDLabel').innerHTML;
	date = $('#jobDate').val();
	client = $('#clientSelect').val();
	ponumber = $('#ponumberInput').val();
	days = $('#daysEntry').val();
	hours = $('#hoursEntry').val();
	details = $('#detailsArea').val();
	locationz = document.getElementById('locationLabel').innerHTML;

	engineers = [];
	document.querySelectorAll('.engineerSelect').forEach(function (x) {
		engineers.push(x.value);
	})

	let totalExpenses = 0
	expenses = []
	i = 0;
	console.log(expenses)
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
		totalExpenses = totalExpenses + parseFloat(currentValue); 
		i += 1;
	})

	totalExpenses = Number.parseFloat(totalExpenses).toFixed(2);

	equipmentBoxes = [];
	serialNumberBoxes = [];
	costBoxes = [];
	saleBoxes = [];
	equipment = [];
	totalSale = 0;
	totalCost = 0;
	document.querySelectorAll('.equipmentInput').forEach(function (a) {
		equipmentBoxes.push(a.value);
	})
	document.querySelectorAll('.serialNumberInput').forEach(function (a) {
		serialNumberBoxes.push(a.value);
	})
	document.querySelectorAll('.costNumberInput').forEach(function (a) {
		costBoxes.push(a.value);
		totalCost = totalCost + Number.parseFloat(a.value);
	})
	document.querySelectorAll('.saleNumberInput').forEach(function (a) {
		saleBoxes.push(a.value);
		totalSale = totalSale + Number.parseFloat(a.value);
	})
	i = 0;
	for (i=0;i<equipmentBoxes.length;i++) {
		tempArray = [equipmentBoxes[i], serialNumberBoxes[i], costBoxes[i], saleBoxes[i]];
		equipment.push(tempArray);
	}
	totalCost = Number.parseFloat(totalCost).toFixed(2);
	totalSale = Number.parseFloat(totalSale).toFixed(2);

	jobcomplete = $('#jobCompleteCheckbox').value;

	// invoice number
	invoicenumber = $('#invoiceNumberInput').val();

	// these are for sorting the variables for the layout of the PDF
	// engineers - this counts how many of the dropdowns were filled so an exact number of spaces can be allocated 
	let tempEngineers = []
	let engineerCounter = 0;
	engineers.forEach(function(x) {
		if (x == '') {

		} else {
			tempEngineers.push(x)
			engineerCounter += 1;
		} 
	})

	// equipment - this counts how many of the equipment list was filled (goes off the basis that the names must be filled in for anything else to be filled in)
	tempEquipment = []
	equipmentCounter = 0;
	equipment.forEach(function(x) {
		if (x[0] == '') {

		} else {
			tempEquipment.push(x)
			equipmentCounter += 1;
		}
	})

	// converts data to english format
	tempYear = date[0] + date[1] + date[2] + date[3];
	tempMonth = date[5] + date[6];
	tempDay = date[8] + date [9];
	newDate = tempDay + '/' + tempMonth + '/' + tempYear	

	// the total expenses, total cost and total sale are calculated above with the normal functions

	myWindow.document.write('<html><title>Job Sheet Print</title><body>')
	myWindow.document.write("<h2 style='display: inline-block;'>Job Sheets</h2>")
	myWindow.document.write("<h2 style='display: inline-block; float: right;'>Job Number - " + id + "</h2>")
	myWindow.document.write('<h3 style="display: block; font-size: 2rem;">' + newDate + '</h3>');
	myWindow.document.write('<h3 style="font-size: 2rem; display: block;">' + client + '</h3>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Location - ' + locationz + '</li>')
	myWindow.document.write('<li>Engineers:' + '</li>')

	for (i=0;i<engineerCounter;i++) {
		myWindow.document.write('<li><strong>' + engineers[i] + '</strong></li>')
	}
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')

	myWindow.document.write('<li>Days - ' + days + '</li>')
	myWindow.document.write('<li>Hours - ' + hours + '</li>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Details:' + '</li>')
	myWindow.document.write('<li><textarea>' + details + '</textarea></li>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Equipment:</li>')

	for (i=0;i<equipmentCounter;i++) {
		myWindow.document.write('<li>Name: ' + equipment[i][0] + ' | Serial Number: ' + equipment[i][1] + ' | Cost Number: ' + equipment[i][2] + ' | Sale Number: ' + equipment[i][3] + '</li>')
	}

	myWindow.document.write('<li>Total Cost: ' + totalCost + '</li>')
	myWindow.document.write('<li>Total Sale: ' + totalSale + '</li>')

	myWindow.document.write('</ul>')
	myWindow.document.write('<br>')
	myWindow.document.write('<ul>')
	myWindow.document.write('<li>Expenses:' + '</li>')
	myWindow.document.write('<li>Mileage: ' + expenses[0] + ' ('+ mileage + ' miles)</li>')
	myWindow.document.write('<li>Food: ' + expenses[1] + '</li>')
	myWindow.document.write('<li>Postage: ' + expenses[2] + '</li>')
	myWindow.document.write('<li>Parking: ' + expenses[3] + '</li>')
	myWindow.document.write('<li>Tools: ' + expenses[4] + '</li>')
	myWindow.document.write('<li>Total Expenses: ' + totalExpenses + '</li>')
	myWindow.document.write('</ul>')
	myWindow.document.write('<button id="printButton" onclick="window.print()">PRINT</button>')
	myWindow.document.write('<button onclick="mailto:expenses@Ardenit.net">Email</button>')
	myWindow.document.write('</body></html>')
	myWindow.document.close();
}
