// function openModal(name) {
//     var tabs, i;
//     tabs = document.getElementsByClassName('mymodal');
//     for (i=0;i<tabs.length;i++) {
//         tabs[i].style.display = 'none';
//     }
//     document.getElementById(name).style.display = 'block';
// 	// this is for calling the JS for loading the engineer names to the select boxes
// 	// this function is called on the start of editClients.html and editEngineers.html
// 	// the first sub-page on each is called to start
// 	if (name == 'editEngineerModal') {
// 		loadEngineers(1); 
// 		engineerAddListeners();
// 	} else if (name == 'deleteEngineerModal') {
// 		loadEngineers(2);
// 		engineerAddListeners();
// 	} else if (name == 'editClientModal') {
// 		loadClients()
// 	} else {}
// }

// // this is for loading the engineers for the editing engineers page - mode denotes what sub page the user is on
// // This has been added to engineerJS.js

// function loadEngineers(mode) {
// 	var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			if (mode == 1) {
// 				document.getElementById('engineerSelect').innerHTML = this.responseText;
// 			} else {
// 				document.getElementById('engineerSelect2').innerHTML = this.responseText;
// 			}
// 		}
// 	}
// 	xhttp.open('GET','../Functions/loadEngineers.php',true);
// 	xhttp.send();
// }

// // for loading the client names for the editing page
// // this has been added to clientJS.js
// function loadClients() {
// 	var xhttp, tabs, i;
// 	tabs = document.getElementsByClassName('editClientDropdown');
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			for (i=0;i<tabs.length;i++) {
// 				tabs[i].innerHTML = this.responseText;
// 			}
// 		}
// 	}
// 	xhttp.open('GET','../Functions/loadClients.php',true);
// 	xhttp.send();
// }

// // this function is for loading the engineer table to the top of the engineer editing page
// // been added to engineerJS.js
// function loadEngineerTable() {
// 	var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('engineerContainer').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','../Functions/loadEngineerTable.php',true);
// 	xhttp.send();
// }


// try {
// 	// been added to indexJS.js as loadClientNames()
//     // load function for client names on main page
//     var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('clientSelect').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','General/Functions/loadClients.php',true);
// 	xhttp.send();
// } catch(err) {console.log(err)}


// try {
// 	// been added to indexJS.js as loadEngineerNames()
// 	// for loading the engineer names on main page
//     var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('engineerSelect1').innerHTML = this.responseText;
//             document.getElementById('engineerSelect2').innerHTML = this.responseText;
//             document.getElementById('engineerSelect3').innerHTML = this.responseText;
//             document.getElementById('engineerSelect4').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','General/Functions/loadEngineers.php',true);
// 	xhttp.send();
// } catch (err) {console.log(err)}


// // for loading engineers on add job sheet page
// try {
// 	var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('engineerSelect1').innerHTML = this.responseText;
//             document.getElementById('engineerSelect2').innerHTML = this.responseText;
//             document.getElementById('engineerSelect3').innerHTML = this.responseText;
//             document.getElementById('engineerSelect4').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','../Functions/loadEngineers.php',true);
// 	xhttp.send();
// } catch (err) {}

// try {
// 	var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('clientSelect').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','../Functions/loadClients.php',true);
// 	xhttp.send();

// 	var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('clientSearchSelect').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','../Functions/loadClients.php',true);
// 	xhttp.send();
	
// 	// changes location on client select click
// 	document.getElementById('clientSelect').addEventListener('click', function () {
// 		// this loads the address when a client is selected
// 		document.getElementById('clientSelect').addEventListener('change', function () {
// 			x = $('#clientSelect').val();
// 			$('#locationLabel').load('../Functions/loadAddress.php', {clientName: x}, function (data, status) {
// 			})
// 		})
// 	})
// } catch (err) {}

// // for changing the location of the client when a new client is selected
// try {
// 		document.getElementById('clientSelect').addEventListener('click', function () {
// 		// this loads the address when a client is selected
// 		document.getElementById('clientSelect').addEventListener('change', function () {
// 			x = $('#clientSelect').val();
// 			$('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
// 			})
// 		})
// 	})
// } catch (err) {}

// // for changing the location of the client when a new client is selected in the editting section
// // been added to clientJS.js as f1()
// try {
// 	document.getElementById('clientEditSelect2').addEventListener('click', function () {
// 		// this loads the address when a client is selected
// 		document.getElementById('clientEditSelect2').addEventListener('change', function () {
// 			x = $('#clientEditSelect2').val();
// 			$('#editClientAddressLabel').load('../Functions/loadAddress.php', {clientName: x}, function (data, status) {
// 			})
// 		})
// 	})
// } catch (err) {}

// // for loading the id dropdown on main page 
// // been added to indexJS.js as loadIDs()
// try {
// 	var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('jobSelect').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','General/Functions/loadJobs.php',true);
// 	xhttp.send();
// } catch (err) {}

// // for changing the job with the drop down
// // this has been added to indexJS.js

// try {
// document.getElementById('jobSelect').addEventListener('click' , function() {
// 	document.getElementById('jobSelect').addEventListener('change', function () {
// 		x = $('#jobSelect').val();
// 		$('#searchTempFrame').load('General/Functions/searchJobSheet.php', {ID: x}, function (data, status) {
// 			var date, client, ponumber, days, hours, engineers, details, expenses, equipment, invoicenumber;
// 			date = myObject['Date'];
// 			client = myObject['Client'];
// 			ponumber = myObject['PONumber'];
// 			days = myObject['Days'];
// 			hours = myObject['Hours'];
// 			engineers = myObject['Engineers'];
// 			details = myObject['Details'];
// 			expenses = myObject['Expenses'];
// 			equipment = myObject['Equipment'];
// 			invoicenumber = myObject['InvoiceNumber'];
// 			console.log(engineers);
// 			// for getting the engineers

// 			// This stores the Engineer index array
// 			engineers = JSON.parse(JSON.parse(myObject['Engineers']));

// 			// this is for the expenses list
// 			var mileage, food, postage, parking, tools;
// 			mileage = JSON.parse(myObject['Expenses'])[0];
// 			newMileage = mileage / 0.3;
// 			food = JSON.parse(myObject['Expenses'])[1];
// 			postage = JSON.parse(myObject['Expenses'])[2];
// 			parking = JSON.parse(myObject['Expenses'])[3];
// 			tools = JSON.parse(myObject['Expenses'])[4];

// 			// this is for the equipment list
// 			var equipmentArray = [];
// 			equipment = JSON.parse(myObject['Equipment']);
// 			equipment.forEach(function (x) {
// 				equipmentArray.push(x)
// 			})

// 			// this is for setting the values of the form

// 			document.getElementById('jobDate').value = date;
// 			document.getElementById('clientSelect').value = client;
// 			// location is loaded based off client select load
// 			document.getElementById('ponumberInput').value = ponumber;
// 			document.getElementById('daysEntry').value = days;
// 			document.getElementById('hoursEntry').value = hours;
// 			document.getElementById('jobIDLabel').innerHTML = document.getElementById('jobSelect').value;


// 			// engineers goes here - new dropdown will need to be made and add an extra line of code that follows the below pattern
// 			document.getElementById('engineerSelect1').value = engineers[0];
// 			document.getElementById('engineerSelect2').value = engineers[1];
// 			document.getElementById('engineerSelect3').value = engineers[2];
// 			document.getElementById('engineerSelect4').value = engineers[3];

// 			document.getElementById('detailsArea').value = details

// 			// expenses goes here
// 			document.getElementById('mileageEntry').value = newMileage;
// 			document.getElementById('milageLabel').innerHTML = '£' + mileage
// 			document.getElementById('foodEntry').value = food;
// 			document.getElementById('postageEntry').value = postage;
// 			document.getElementById('parkingEntry').value = parking;
// 			document.getElementById('toolsEntry').value = tools;
// 			loadTotal();

// 			// equipment go here
// 			counter = 0;
// 			document.querySelectorAll('.equipmentInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][0];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.serialNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][1];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.costNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][2];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.saleNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][3];
// 				counter = counter + 1;
// 			})

// 			total = 0;
// 			areas = document.getElementsByClassName('costNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2)
// 			document.getElementById('totalCostLabel').value = '£' + total;
// 			total = 0;
// 			areas = document.getElementsByClassName('saleNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2);
// 			document.getElementById('totalSaleLabel').value = '£' + total;

// 			document.getElementById('invoiceNumberInput').value = invoicenumber;

// 			// loads location based on value of dropdown
// 			x = $('#clientSelect').val();
// 			$('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
// 			})
// 		})
// 	})
// }) } catch (err) {console.log(err)}

// // for calculating mileage charge based of user mileage PLEASE CHANGE VALUE OF X IF THE MILEAGE RATE INCREASES/DECREASES
// // all of these have been added to indexJS.js - will be needed for another as well

// try {
// 	document.getElementById('mileageEntry').addEventListener('blur', function () {
// 		x = 0.3;
// 		mileage = $('#mileageEntry').val();
// 		y = x * mileage
// 		y = Number.parseFloat(y).toFixed(2)
// 		z = '£' + y
// 		document.getElementById('milageLabel').innerHTML = z;
// 		// this updates the total charge at the bottom of the form
// 		loadTotal();
// 	})
// } catch (err) {}

// // functions for the expenses section for when a user clicks out to enter in the expense
// // all of these have been added to indexJS.js - will be needed for another as well

// try {
// 	document.getElementById('foodEntry').addEventListener('blur', function () {
// 		y = $('#foodEntry').val();
// 		y = Number.parseFloat(y).toFixed(2)
// 		document.getElementById('foodLabel').innerHTML = '£' + y;
// 		// this updates the total charge at the bottom of the form
// 		loadTotal();
// 	})
// } catch(err) {}

// try {
// 	document.getElementById('postageEntry').addEventListener('blur', function () {
// 		y = $('#postageEntry').val();
// 		y = Number.parseFloat(y).toFixed(2)
// 		document.getElementById('postageLabel').innerHTML = '£' + y;
// 		// this updates the total charge at the bottom of the form
// 		loadTotal();
// 	})
// } catch (err) {}

// try {
// 	document.getElementById('parkingEntry').addEventListener('blur', function () {
// 		y = $('#parkingEntry').val();
// 		y = Number.parseFloat(y).toFixed(2)
// 		document.getElementById('parkingLabel').innerHTML = '£' + y;
// 		// this updates the total charge at the bottom of the form
// 		loadTotal();
// 	})
// } catch (err) {}

// try {
// 	document.getElementById('toolsEntry').addEventListener('blur', function () {
// 		y = $('#toolsEntry').val();
// 		y = Number.parseFloat(y).toFixed(2)
// 		document.getElementById('toolsLabel').innerHTML = '£' + y;
// 		// this updates the total charge at the bottom of the form
// 		loadTotal();
// 	})
// } catch (err) {}


// // for loading the total charge in the total label for expenses
// // been added to indexJS.js as loadTotal() - will need to be added to other as well
// function loadTotal() {
// 	var total;
// 	mileage = parseInt($('#mileageEntry').val());
// 	food = parseInt($('#foodEntry').val());
// 	postage = parseInt($('#postageEntry').val());
// 	parking = parseInt($('#parkingEntry').val());
// 	tools = parseInt($('#toolsEntry').val());
// 	var i;
// 	total = food + (mileage*0.3) + postage + parking + tools;
// 	total = Number.parseFloat(total).toFixed(2)
// 	document.getElementById('totalLabel').innerHTML = '£' + total;
// }

// // for the equipment cost price and selling price
// // this updates the total input boxes at the bottom of the equipment list
// // IF MORE EQUIPMENT IS NEEDED TO BE ADDED (THERE ARE 10 AVAILABLE BY DEFUALT) THEN PLEASE ADD THIS MANUALLY - MIGHT IMPLEMENT A NEW FEATURE
// // this has been added to indexJS.js - will be needed to be added to another as well
// function equipmentAssign() {
// 	var i, inputs, inputs2;
// 	var temp, x, areas, total;
// 	inputs = document.getElementsByClassName('costNumberInput');
// 	inputs2 = document.getElementsByClassName('saleNumberInput');
// 	for (i=0;i<inputs.length;i++) {
// 		inputs[i].addEventListener('blur', function () {
// 			total = 0;
// 			areas = document.getElementsByClassName('costNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2)
// 			document.getElementById('totalCostLabel').value = '£' + total;
// 		})
// 	}
// 	i = 0;
// 	for (i=0;i<inputs.length;i++) {
// 		inputs2[i].addEventListener('blur', function () {
// 			total = 0;
// 			areas = document.getElementsByClassName('saleNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2);
// 			document.getElementById('totalSaleLabel').value = '£' + total;
// 		})
// 	}

// }

// try {
// 	equipmentAssign();
// } catch (err) {}

// // ----------- the edit engineer section -------------

// // this is for adding the event listeners to the engineering forms

// // all of these have been added to engineerJS.js as engineerForms()

// try {
// 	document.getElementById('addEngineerForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var x, y;
// 		x = $('#addengineerText').val();
// 		$('#addEngineerFormFrame').load('../Functions/engineer.php', {engineerMode: 1, engineerName: x}, function (data, status){

// 		});
// 		document.location.reload();
// 	})
// } catch (err) {}

// try {
// 	document.getElementById('editEngineerNameForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var x, y;
// 		x = $('#engineerEditText').val();
// 		y = $('#engineerSelect').val();
// 		$('#editEngineerNameFormFrame').load('../Functions/engineer.php', {engineerMode: 2, engineerName: y, newName: x}, function (data, status){

// 		});
// 		document.location.reload();
// 	})
// } catch (err) {}


// try {
// 	document.getElementById('deleteEngineerForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var x, y;
// 		y = $('#engineerSelect2').val();
// 		$('#deleteEngineerFormFrame').load('../Functions/engineer.php', {engineerMode: 3, engineerID: y}, function (data, status){

// 		});
// 		document.location.reload();
// 	})
// } catch (err) {}



// // ----------- the edit client section ----------------

// // this is for adding the event listeners to the client admin section
// // these have been added to clientJS.js as clientForms()
// try {
// 	document.getElementById('addClientForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var x, y;
// 		x = $('#addClientText').val();
// 		y = $('#clientAddressText').val();
// 		$('#addClientFormFrame').load('../Functions/clients.php', {clientMode: 1, clientName: x, clientAddress: y}, function (data, status){

// 		});
// 		document.location.reload();
// 	})
// } catch (err) {}


// try {
// 	document.getElementById('editClientNameForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var x, y;
// 		x = $('#clientNameText').val();
// 		y = $('#clientEditSelect').val();
// 		$('#editClientNameFormFrame').load('../Functions/clients.php', {clientMode: 2, client: y, clientName: x}, function (data, status){

// 		});
// 		document.location.reload();
// 	})
// } catch (err) {}

// try {
// 	document.getElementById('editClientAddressForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var x, y;
// 		x = $('#clientEditSelect2').val();
// 		y = $('#editclientAddressText').val();
// 		$('#editClientAddressFormFrame').load('../Functions/clients.php', {clientMode: 4, clientName: x, clientAddress: y}, function (data, status){

// 		});
// 		document.location.reload();
// 	})
// } catch (err) {}

// try {
// 	document.getElementById('deleteClientForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var x;
// 		x = $('#deleteClientSelect').val();
// 		$('#deleteClientFormFrame').load('../Functions/clients.php', {clientMode: 3, clientName: x}, function (data, status){

// 		});
// 		document.location.reload();
// 	})
// } catch (err) {}



// // For the search function for both the main page and sub pages - NOT DONE
// // this has been added to indexJS.js
// function mainSearch() {
// 	document.getElementById('searchFormMain').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var id;
// 		id = $('#formSearchBox').val();
// 		console.log(id)
// 		$('#searchTempFrame').load('General/Functions/searchJobSheet.php', {ID: id}, function (data, status) {
// 			// pulls through all the variables from the JSON object
// 			var date, client, ponumber, days, hours, engineers, details, expenses, equipment, invoicenumber;
// 			date = myObject['Date'];
// 			client = myObject['Client'];
// 			ponumber = myObject['PONumber'];
// 			days = myObject['Days'];
// 			hours = myObject['Hours'];
// 			engineers = myObject['Engineers'];
// 			details = myObject['Details'];
// 			expenses = myObject['Expenses'];
// 			equipment = myObject['Equipment'];
// 			invoicenumber = myObject['InvoiceNumber'];

// 			// for getting the engineers

// 			// This stores the Engineer index array
// 			engineers = JSON.parse(JSON.parse(myObject['Engineers']));

// 			// this is for the expenses list
// 			var mileage, food, postage, parking, tools;
// 			mileage = JSON.parse(myObject['Expenses'])[0];
// 			newMileage = mileage / 0.3;
// 			food = JSON.parse(myObject['Expenses'])[1];
// 			postage = JSON.parse(myObject['Expenses'])[2];
// 			parking = JSON.parse(myObject['Expenses'])[3];
// 			tools = JSON.parse(myObject['Expenses'])[4];

// 			// this is for the equipment list
// 			var equipmentArray = [];
// 			equipment = JSON.parse(myObject['Equipment']);
// 			equipment.forEach(function (x) {
// 				equipmentArray.push(x)
// 			})

// 			// this is for setting the values of the form

// 			document.getElementById('jobDate').value = date;
// 			document.getElementById('clientSelect').value = client;
// 			// location is loaded based off client select load
// 			document.getElementById('ponumberInput').value = ponumber;
// 			document.getElementById('daysEntry').value = days;
// 			document.getElementById('hoursEntry').value = hours;
// 			document.getElementById('jobIDLabel').innerHTML = id


// 			// engineers goes here
// 			// engineers goes here - new dropdown will need to be made and add an extra line of code that follows the below pattern
// 			document.getElementById('engineerSelect1').value = engineers[0];
// 			document.getElementById('engineerSelect2').value = engineers[1];
// 			document.getElementById('engineerSelect3').value = engineers[2];
// 			document.getElementById('engineerSelect4').value = engineers[3];

// 			// loads the details
// 			document.getElementById('detailsArea').value = details

// 			// expenses are loaded here
// 			document.getElementById('mileageEntry').value = newMileage;
// 			document.getElementById('milageLabel').innerHTML = '£' + mileage
// 			document.getElementById('foodEntry').value = food;
// 			document.getElementById('postageEntry').value = postage;
// 			document.getElementById('parkingEntry').value = parking;
// 			document.getElementById('toolsEntry').value = tools;
// 			loadTotal()

// 			// equipment go here
// 			counter = 0;
// 			document.querySelectorAll('.equipmentInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][0];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.serialNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][1];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.costNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][2];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.saleNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][3];
// 				counter = counter + 1;
// 			})
// 			equipmentAssign();
			
// 			// loads the total labels for the equipment area
// 			total = 0;
// 			areas = document.getElementsByClassName('costNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2)
// 			document.getElementById('totalCostLabel').value = '£' + total;
// 			total = 0;
// 			areas = document.getElementsByClassName('saleNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2);
// 			document.getElementById('totalSaleLabel').value = '£' + total;

// 			document.getElementById('invoiceNumberInput').value = invoicenumber;
			
// 			// loads location based on value of dropdown				
// 			x = $('#clientSelect').val();
// 			$('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
// 			})
// 		})
// 	})
// }


// function subSearch() {
// 	document.getElementById('searchFormSub').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var id;
// 		id = $('#formSearchBox').val();
// 		$('#searchTempFrame').load('../Functions/searchJobSheet.php', {ID: id}, function (data, status) {
// 			// pulls through all the variables from the JSON object
// 			console.log('hello')
// 			var date, client, ponumber, days, hours, engineers, details, expenses, equipment, invoicenumber;
// 			date = myObject['Date'];
// 			client = myObject['Client'];
// 			ponumber = myObject['PONumber'];
// 			days = myObject['Days'];
// 			hours = myObject['Hours'];
// 			engineers = myObject['Engineers'];
// 			details = myObject['Details'];
// 			expenses = myObject['Expenses'];
// 			equipment = myObject['Equipment'];
// 			invoicenumber = myObject['InvoiceNumber'];

// 			// for getting the engineers

// 			// This stores the Engineer index array
// 			engineers = JSON.parse(JSON.parse(myObject['Engineers']));

// 			// this is for the expenses list
// 			var mileage, food, postage, parking, tools;
// 			mileage = JSON.parse(myObject['Expenses'])[0];
// 			newMileage = mileage / 0.3;
// 			food = JSON.parse(myObject['Expenses'])[1];
// 			postage = JSON.parse(myObject['Expenses'])[2];
// 			parking = JSON.parse(myObject['Expenses'])[3];
// 			tools = JSON.parse(myObject['Expenses'])[4];

// 			// this is for the equipment list
// 			var equipmentArray = [];
// 			equipment = JSON.parse(myObject['Equipment']);
// 			equipment.forEach(function (x) {
// 				equipmentArray.push(x)
// 			})

// 			// this is for setting the values of the form

// 			document.getElementById('jobDate').value = date;
// 			document.getElementById('clientSelect').value = client;
// 			// location is loaded based off client select load
// 			document.getElementById('ponumberInput').value = ponumber;
// 			document.getElementById('daysEntry').value = days;
// 			document.getElementById('hoursEntry').value = hours;
// 			document.getElementById('jobIDLabel').innerHTML = id


// 			// engineers goes here
// 			// engineers goes here - new dropdown will need to be made and add an extra line of code that follows the below pattern
// 			document.getElementById('engineerSelect1').value = engineers[0];
// 			document.getElementById('engineerSelect2').value = engineers[1];
// 			document.getElementById('engineerSelect3').value = engineers[2];
// 			document.getElementById('engineerSelect4').value = engineers[3];

// 			document.getElementById('detailsArea').value = details

// 			// expenses goes here
// 			document.getElementById('mileageEntry').value = newMileage;
// 			document.getElementById('milageLabel').innerHTML = '£' + mileage
// 			document.getElementById('foodEntry').value = food;
// 			document.getElementById('postageEntry').value = postage;
// 			document.getElementById('parkingEntry').value = parking;
// 			document.getElementById('toolsEntry').value = tools;
// 			loadTotal();

// 			// equipment go here
// 			counter = 0;
// 			document.querySelectorAll('.equipmentInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][0];
// 				counter = counter + 1;
// 			})
// 			couner = 0;
// 			document.querySelectorAll('.serialNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][1];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.costNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][2];
// 				counter = counter + 1;
// 			})
// 			counter = 0;
// 			document.querySelectorAll('.saleNumberInput').forEach(function (x) {
// 				x.value = equipmentArray[counter][3];
// 				counter = counter + 1;
// 			})

// 			total = 0;
// 			areas = document.getElementsByClassName('costNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2)
// 			document.getElementById('totalCostLabel').value = '£' + total;
// 			total = 0;
// 			areas = document.getElementsByClassName('saleNumberInput');
// 			for (x=0;x<areas.length;x++) {
// 				temp = parseFloat(areas[x].value);
// 				total = parseFloat(total + temp);
// 			}
// 			total = Number.parseFloat(total).toFixed(2);
// 			document.getElementById('totalSaleLabel').value = '£' + total;

// 			document.getElementById('invoiceNumberInput').value = invoicenumber;

// 			// loads location based on value of dropdown
// 			x = $('#clientSelect').val();
// 			$('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
// 			})
// 		})
// 	})
// }

// try {
// 	mainSearch();
// } catch(err) {console.log(err)}

// try {
// 	subSearch();
// } catch(err) {console.log(err)}

// // FOR THE SUBMISSION OF A JOB SHEET
// // been added to the addJobJS.js
// function loadNewID() {
// 	// this loads the New ID for a job sheet when the add job sheet page is loaded
// 	var xhttp;
// 	xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			document.getElementById('jobIDLabel').innerHTML = this.responseText;
// 		}
// 	}
// 	xhttp.open('GET','../Functions/loadNewID.php',true);
// 	xhttp.send();
// }

// // been added to the addJobJS.js
// function jobSheetForm() {
// 	// this is called when a job sheet is submitted
// 	document.getElementById('addJobSheetForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber;
// 		var engineerBoxes, expensesBoxes, equipmentBoxes, serialNumberBoxes, costBoxes, saleBoxes, expensesBoxes;
		
// 		// these were added for the email system - passes through the location and new ID for the job (could be done via PHP but this is easier)
// 		var jobID, location;
// 		jobID = document.getElementById('jobIDLabel').innerHTML;
// 		location = document.getElementById('locationLabel').innerHTML;

// 		date = $('#jobDate').val();
// 		client = $('#clientSelect').val();
// 		ponumber = $('#ponumberInput').val();
// 		days = $('#daysEntry').val();
// 		hours = $('#hoursEntry').val();

// 		// this is for the engineers (as there can be up to 4, this needs to be an array)
// 		engineers = [];
// 		document.querySelectorAll('.engineerSelect').forEach(function (x) {
// 			engineers.push(x.value);
// 		})

// 		// this is for getting the job details
// 		details = $('#detailsArea').val();

// 		// MAY NEED TO ADD CODE HERE TO CHECK FOR LINE BREAKS

// 		// this is for storing the expenses, this is done in a list format
// 		// 0 = mileage, 1 = food, 2 = postage, 3 = parking, 4 = tools

// 		expenses = []
// 		i = 0;
// 		document.querySelectorAll('.textField').forEach(function (currentInput) {
// 			currentValue = currentInput.value;
// 			temp = '';
// 			if (i == 0) {
// 				x = currentValue * 0.3;
// 				x = Number.parseFloat(x).toFixed(2);
// 				currentValue = x;
// 			} else {
// 				currentValue = Number.parseFloat(currentValue).toFixed(2);
// 			}
// 			expenses.push(currentValue); 
// 			i += 1;
// 		})

// 		// this is for storing the equipment used
// 		equipmentBoxes = [];
// 		serialNumberBoxes = [];
// 		costBoxes = [];
// 		saleBoxes = [];
// 		equipment = [];
// 		document.querySelectorAll('.equipmentInput').forEach(function (a) {
// 			equipmentBoxes.push(a.value);
// 		})
// 		document.querySelectorAll('.serialNumberInput').forEach(function (a) {
// 			serialNumberBoxes.push(a.value);
// 		})
// 		document.querySelectorAll('.costNumberInput').forEach(function (a) {
// 			costBoxes.push(a.value);
// 		})
// 		document.querySelectorAll('.saleNumberInput').forEach(function (a) {
// 			saleBoxes.push(a.value);
// 		})
// 		i = 0;
// 		for (i=0;i<equipmentBoxes.length;i++) {
// 			tempArray = [equipmentBoxes[i], serialNumberBoxes[i], costBoxes[i], saleBoxes[i]];
// 			equipment.push(tempArray);
// 		}

// 		// job complete
// 		jobcomplete = $('#jobCompleteCheckbox').value;

// 		// invoice number
// 		invoicenumber = $('#invoiceNumberInput').val();

// 		// Puts all data into one array object
// 		var jobEntry;
// 		jobEntry = [date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber];

// 		// creates a JS object and creates a JSOn object for it
// 		jobEntry =  {date: date, client: client, ponumber: ponumber, days: days, hours: hours, engineers: engineers, details: details, expenses: expenses, equipment: equipment, invoicenumber: invoicenumber}
// 		JSONentry = JSON.stringify(jobEntry);

// 		$('#addJobSheetForm').load('../Functions/submitJob.php', {x: JSONentry, id: jobID, location: location}, function (data, status) {
// 			document.location.reload();
// 		})
// 	})
// }
// // for calling the above 2 functions for the add job sheet form
// try {
// 	jobSheetForm();
// 	loadNewID();
// } catch (err) {}


// // this is for when you make a change to a current job sheet
// // this has been added to indexJS.js
// function submitChange() {
// 	document.getElementById('viewJobSheetForm').addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		var id, date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber;
// 		var engineerBoxes, expensesBoxes, equipmentBoxes, serialNumberBoxes, costBoxes, saleBoxes, expensesBoxes;
// 		id = document.getElementById('jobIDLabel').innerHTML;
// 		date = $('#jobDate').val();
// 		client = $('#clientSelect').val();
// 		ponumber = $('#ponumberInput').val();
// 		days = $('#daysEntry').val();
// 		hours = $('#hoursEntry').val();

// 		// this is for the engineers (as there can be up to 4, this needs to be an array)
// 		engineers = [];
// 		document.querySelectorAll('.engineerSelect').forEach(function (x) {
// 			engineers.push(x.value);
// 		})

// 		// this is for getting the job details
// 		details = $('#detailsArea').val();

// 		// this is for storing the expenses, this is done in a list format
// 		// 0 = mileage, 1 = food, 2 = postage, 3 = parking, 4 = tools

// 		expenses = []
// 		i = 0;
// 		document.querySelectorAll('.textField').forEach(function (currentInput) {
// 			currentValue = currentInput.value;
// 			temp = '';
// 			if (i == 0) {
// 				x = currentValue * 0.3;
// 				x = Number.parseFloat(x).toFixed(2);
// 				currentValue = x;
// 			} else {
// 				currentValue = Number.parseFloat(currentValue).toFixed(2);
// 			}
// 			expenses.push(currentValue); 
// 			i += 1;
// 		})

// 		// this is for storing the equipment used
// 		equipmentBoxes = [];
// 		serialNumberBoxes = [];
// 		costBoxes = [];
// 		saleBoxes = [];
// 		equipment = [];
// 		document.querySelectorAll('.equipmentInput').forEach(function (a) {
// 			equipmentBoxes.push(a.value);
// 		})
// 		document.querySelectorAll('.serialNumberInput').forEach(function (a) {
// 			serialNumberBoxes.push(a.value);
// 		})
// 		document.querySelectorAll('.costNumberInput').forEach(function (a) {
// 			costBoxes.push(a.value);
// 		})
// 		document.querySelectorAll('.saleNumberInput').forEach(function (a) {
// 			saleBoxes.push(a.value);
// 		})
// 		i = 0;
// 		for (i=0;i<equipmentBoxes.length;i++) {
// 			tempArray = [equipmentBoxes[i], serialNumberBoxes[i], costBoxes[i], saleBoxes[i]];
// 			equipment.push(tempArray);
// 		}

// 		// job complete
// 		jobcomplete = $('#jobCompleteCheckbox').value;

// 		// invoice number
// 		invoicenumber = $('#invoiceNumberInput').val();

// 		// Puts all data into one array object
// 		var jobEntry;
// 		jobEntry = [date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber];

// 		// creates a JS object and creates a JSOn object for it
// 		jobEntry =  {date: date, client: client, ponumber: ponumber, days: days, hours: hours, engineers: engineers, details: details, expenses: expenses, equipment: equipment, invoicenumber: invoicenumber}
// 		JSONentry = JSON.stringify(jobEntry);

// 		$('#searchTempFrame').load('General/Functions/editJob.php', {x: JSONentry, id: id}, function (data, status) {
// 			// document.location.reload();
// 		})
// 	})
// }

// try {
// 	submitChange();
// } catch (err) {console.log(err)}


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
	myWindow.document.write('<li><textarea style="Height: min-content;">' + details + '</textarea></li>')
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
