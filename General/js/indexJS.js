// JS file for index.html

function loadClientNames() {
    var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('clientSelect').innerHTML = this.responseText;
		}
	}
	xhttp.open('GET','General/Functions/loadClients.php',true);
	xhttp.send();
}

function loadEngineerNames() {
    var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('engineerSelect1').innerHTML = this.responseText;
            document.getElementById('engineerSelect2').innerHTML = this.responseText;
            document.getElementById('engineerSelect3').innerHTML = this.responseText;
            document.getElementById('engineerSelect4').innerHTML = this.responseText;
		}
	}
	xhttp.open('GET','General/Functions/loadEngineers.php',true);
	xhttp.send();
}

function loadIDs() {
    var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('jobSelect').innerHTML = this.responseText;
		}
	}
	xhttp.open('GET','General/Functions/loadJobs.php',true);
	xhttp.send();
}

function changeJob() {
    document.getElementById('jobSelect').addEventListener('click' , function() {
        document.getElementById('jobSelect').addEventListener('change', function () {
            x = $('#jobSelect').val();
            $('#searchTempFrame').load('General/Functions/searchJobSheet.php', {ID: x}, function (data, status) {
                var date, client, ponumber, days, hours, engineers, details, expenses, equipment, invoicenumber;
                date = myObject['Date'];
                client = myObject['Client'];
                ponumber = myObject['PONumber'];
                days = myObject['Days'];
                hours = myObject['Hours'];
                engineers = myObject['Engineers'];
                details = myObject['Details'];
                expenses = myObject['Expenses'];
                equipment = myObject['Equipment'];
                invoicenumber = myObject['InvoiceNumber'];
                console.log(engineers);
                // for getting the engineers
    
                // This stores the Engineer index array
                engineers = JSON.parse(JSON.parse(myObject['Engineers']));
    
                // this is for the expenses list
                var mileage, food, postage, parking, tools;
                mileage = JSON.parse(myObject['Expenses'])[0];
                newMileage = mileage / 0.3;
                food = JSON.parse(myObject['Expenses'])[1];
                postage = JSON.parse(myObject['Expenses'])[2];
                parking = JSON.parse(myObject['Expenses'])[3];
                tools = JSON.parse(myObject['Expenses'])[4];
    
                // this is for the equipment list
                var equipmentArray = [];
                equipment = JSON.parse(myObject['Equipment']);
                equipment.forEach(function (x) {
                    equipmentArray.push(x)
                })
    
                // this is for setting the values of the form
    
                document.getElementById('jobDate').value = date;
                document.getElementById('clientSelect').value = client;
                // location is loaded based off client select load
                document.getElementById('ponumberInput').value = ponumber;
                document.getElementById('daysEntry').value = days;
                document.getElementById('hoursEntry').value = hours;
                document.getElementById('jobIDLabel').innerHTML = document.getElementById('jobSelect').value;
    
    
                // engineers goes here - new dropdown will need to be made and add an extra line of code that follows the below pattern
                document.getElementById('engineerSelect1').value = engineers[0];
                document.getElementById('engineerSelect2').value = engineers[1];
                document.getElementById('engineerSelect3').value = engineers[2];
                document.getElementById('engineerSelect4').value = engineers[3];
    
                document.getElementById('detailsArea').value = details
    
                // expenses goes here
                document.getElementById('mileageEntry').value = newMileage;
                document.getElementById('milageLabel').innerHTML = '£' + mileage
                document.getElementById('foodEntry').value = food;
                document.getElementById('postageEntry').value = postage;
                document.getElementById('parkingEntry').value = parking;
                document.getElementById('toolsEntry').value = tools;
                loadTotal();
    
                // equipment go here
                counter = 0;
                document.querySelectorAll('.equipmentInput').forEach(function (x) {
                    x.value = equipmentArray[counter][0];
                    counter = counter + 1;
                })
                counter = 0;
                document.querySelectorAll('.serialNumberInput').forEach(function (x) {
                    x.value = equipmentArray[counter][1];
                    counter = counter + 1;
                })
                counter = 0;
                document.querySelectorAll('.costNumberInput').forEach(function (x) {
                    x.value = equipmentArray[counter][2];
                    counter = counter + 1;
                })
                counter = 0;
                document.querySelectorAll('.saleNumberInput').forEach(function (x) {
                    x.value = equipmentArray[counter][3];
                    counter = counter + 1;
                })
    
                total = 0;
                areas = document.getElementsByClassName('costNumberInput');
                for (x=0;x<areas.length;x++) {
                    temp = parseFloat(areas[x].value);
                    total = parseFloat(total + temp);
                }
                total = Number.parseFloat(total).toFixed(2)
                document.getElementById('totalCostLabel').value = '£' + total;
                total = 0;
                areas = document.getElementsByClassName('saleNumberInput');
                for (x=0;x<areas.length;x++) {
                    temp = parseFloat(areas[x].value);
                    total = parseFloat(total + temp);
                }
                total = Number.parseFloat(total).toFixed(2);
                document.getElementById('totalSaleLabel').value = '£' + total;
    
                document.getElementById('invoiceNumberInput').value = invoicenumber;
    
                // loads location based on value of dropdown
                x = $('#clientSelect').val();
                $('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
                })
            })
        })
    })
}



function formElements() {
    document.getElementById('foodEntry').addEventListener('blur', function () {
		y = $('#foodEntry').val();
		y = Number.parseFloat(y).toFixed(2)
		document.getElementById('foodLabel').innerHTML = '£' + y;
		// this updates the total charge at the bottom of the form
		loadTotal();
	})
    document.getElementById('postageEntry').addEventListener('blur', function () {
		y = $('#postageEntry').val();
		y = Number.parseFloat(y).toFixed(2)
		document.getElementById('postageLabel').innerHTML = '£' + y;
		// this updates the total charge at the bottom of the form
		loadTotal();
	})
    document.getElementById('parkingEntry').addEventListener('blur', function () {
		y = $('#parkingEntry').val();
		y = Number.parseFloat(y).toFixed(2)
		document.getElementById('parkingLabel').innerHTML = '£' + y;
		// this updates the total charge at the bottom of the form
		loadTotal();
	})
    document.getElementById('toolsEntry').addEventListener('blur', function () {
		y = $('#toolsEntry').val();
		y = Number.parseFloat(y).toFixed(2)
		document.getElementById('toolsLabel').innerHTML = '£' + y;
		// this updates the total charge at the bottom of the form
		loadTotal();
	})
    document.getElementById('mileageEntry').addEventListener('blur', function () {
		x = 0.3;
		mileage = $('#mileageEntry').val();
		y = x * mileage
		y = Number.parseFloat(y).toFixed(2)
		z = '£' + y
		document.getElementById('milageLabel').innerHTML = z;
		// this updates the total charge at the bottom of the form
		loadTotal();
	})
    document.getElementById('clientSelect').addEventListener('click', function () {
		// this loads the address when a client is selected
		document.getElementById('clientSelect').addEventListener('change', function () {
			x = $('#clientSelect').val();
			$('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
			})
		})
	})
}

function loadTotal() {
    var total;
	mileage = parseInt($('#mileageEntry').val());
	food = parseInt($('#foodEntry').val());
	postage = parseInt($('#postageEntry').val());
	parking = parseInt($('#parkingEntry').val());
	tools = parseInt($('#toolsEntry').val());
	var i;
	total = food + (mileage*0.3) + postage + parking + tools;
	total = Number.parseFloat(total).toFixed(2)
	document.getElementById('totalLabel').innerHTML = '£' + total;
}

function equipmentAssign() {
	var i, inputs, inputs2;
	var temp, x, areas, total;
	inputs = document.getElementsByClassName('costNumberInput');
	inputs2 = document.getElementsByClassName('saleNumberInput');
	for (i=0;i<inputs.length;i++) {
		inputs[i].addEventListener('blur', function () {
			total = 0;
			areas = document.getElementsByClassName('costNumberInput');
			for (x=0;x<areas.length;x++) {
				temp = parseFloat(areas[x].value);
				total = parseFloat(total + temp);
			}
			total = Number.parseFloat(total).toFixed(2)
			document.getElementById('totalCostLabel').value = '£' + total;
		})
	}
	i = 0;
	for (i=0;i<inputs.length;i++) {
		inputs2[i].addEventListener('blur', function () {
			total = 0;
			areas = document.getElementsByClassName('saleNumberInput');
			for (x=0;x<areas.length;x++) {
				temp = parseFloat(areas[x].value);
				total = parseFloat(total + temp);
			}
			total = Number.parseFloat(total).toFixed(2);
			document.getElementById('totalSaleLabel').value = '£' + total;
		})
	}

}

function mainSearch() {
	document.getElementById('searchFormMain').addEventListener('submit', function (e) {
		e.preventDefault();
		var id;
		id = $('#formSearchBox').val();
		console.log(id)
		$('#searchTempFrame').load('General/Functions/searchJobSheet.php', {ID: id}, function (data, status) {
			// pulls through all the variables from the JSON object
			var date, client, ponumber, days, hours, engineers, details, expenses, equipment, invoicenumber;
			date = myObject['Date'];
			client = myObject['Client'];
			ponumber = myObject['PONumber'];
			days = myObject['Days'];
			hours = myObject['Hours'];
			engineers = myObject['Engineers'];
			details = myObject['Details'];
			expenses = myObject['Expenses'];
			equipment = myObject['Equipment'];
			invoicenumber = myObject['InvoiceNumber'];

			// for getting the engineers

			// This stores the Engineer index array
			engineers = JSON.parse(JSON.parse(myObject['Engineers']));

			// this is for the expenses list
			var mileage, food, postage, parking, tools;
			mileage = JSON.parse(myObject['Expenses'])[0];
			newMileage = mileage / 0.3;
			food = JSON.parse(myObject['Expenses'])[1];
			postage = JSON.parse(myObject['Expenses'])[2];
			parking = JSON.parse(myObject['Expenses'])[3];
			tools = JSON.parse(myObject['Expenses'])[4];

			// this is for the equipment list
			var equipmentArray = [];
			equipment = JSON.parse(myObject['Equipment']);
			equipment.forEach(function (x) {
				equipmentArray.push(x)
			})

			// this is for setting the values of the form

			document.getElementById('jobDate').value = date;
			document.getElementById('clientSelect').value = client;
			// location is loaded based off client select load
			document.getElementById('ponumberInput').value = ponumber;
			document.getElementById('daysEntry').value = days;
			document.getElementById('hoursEntry').value = hours;
			document.getElementById('jobIDLabel').innerHTML = id


			// engineers goes here
			// engineers goes here - new dropdown will need to be made and add an extra line of code that follows the below pattern
			document.getElementById('engineerSelect1').value = engineers[0];
			document.getElementById('engineerSelect2').value = engineers[1];
			document.getElementById('engineerSelect3').value = engineers[2];
			document.getElementById('engineerSelect4').value = engineers[3];

			// loads the details
			document.getElementById('detailsArea').value = details

			// expenses are loaded here
			document.getElementById('mileageEntry').value = newMileage;
			document.getElementById('milageLabel').innerHTML = '£' + mileage
			document.getElementById('foodEntry').value = food;
			document.getElementById('postageEntry').value = postage;
			document.getElementById('parkingEntry').value = parking;
			document.getElementById('toolsEntry').value = tools;
			loadTotal()

			// equipment go here
			counter = 0;
			document.querySelectorAll('.equipmentInput').forEach(function (x) {
				x.value = equipmentArray[counter][0];
				counter = counter + 1;
			})
			counter = 0;
			document.querySelectorAll('.serialNumberInput').forEach(function (x) {
				x.value = equipmentArray[counter][1];
				counter = counter + 1;
			})
			counter = 0;
			document.querySelectorAll('.costNumberInput').forEach(function (x) {
				x.value = equipmentArray[counter][2];
				counter = counter + 1;
			})
			counter = 0;
			document.querySelectorAll('.saleNumberInput').forEach(function (x) {
				x.value = equipmentArray[counter][3];
				counter = counter + 1;
			})
			equipmentAssign();
			
			// loads the total labels for the equipment area
			total = 0;
			areas = document.getElementsByClassName('costNumberInput');
			for (x=0;x<areas.length;x++) {
				temp = parseFloat(areas[x].value);
				total = parseFloat(total + temp);
			}
			total = Number.parseFloat(total).toFixed(2)
			document.getElementById('totalCostLabel').value = '£' + total;
			total = 0;
			areas = document.getElementsByClassName('saleNumberInput');
			for (x=0;x<areas.length;x++) {
				temp = parseFloat(areas[x].value);
				total = parseFloat(total + temp);
			}
			total = Number.parseFloat(total).toFixed(2);
			document.getElementById('totalSaleLabel').value = '£' + total;

			document.getElementById('invoiceNumberInput').value = invoicenumber;
			
			// loads location based on value of dropdown				
			x = $('#clientSelect').val();
			$('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
			})
		})
	})
}

function submitChange() {
	document.getElementById('viewJobSheetForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var id, date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber;
		var engineerBoxes, expensesBoxes, equipmentBoxes, serialNumberBoxes, costBoxes, saleBoxes, expensesBoxes;
		id = document.getElementById('jobIDLabel').innerHTML;
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

		// job complete
		jobcomplete = $('#jobCompleteCheckbox').value;

		// invoice number
		invoicenumber = $('#invoiceNumberInput').val();

		// Puts all data into one array object
		var jobEntry;
		jobEntry = [date, client, ponumber, days, hours, engineers, details, expenses, equipment, jobcomplete, invoicenumber];

		// creates a JS object and creates a JSOn object for it
		jobEntry =  {date: date, client: client, ponumber: ponumber, days: days, hours: hours, engineers: engineers, details: details, expenses: expenses, equipment: equipment, invoicenumber: invoicenumber}
		JSONentry = JSON.stringify(jobEntry);

		$('#searchTempFrame').load('General/Functions/editJob.php', {x: JSONentry, id: id}, function (data, status) {
			// document.location.reload();
		})
	})
}

function assignLocationChange() {
	document.getElementById('clientSelect').addEventListener('click', function () {
		// this loads the address when a client is selected
		document.getElementById('clientSelect').addEventListener('change', function () {
			x = $('#clientSelect').val();
			$('#locationLabel').load('General/Functions/loadAddress.php', {clientName: x}, function (data, status) {
			})
		})
	})
}

// Function calls

loadClientNames();
loadEngineerNames();
loadIDs();
changeJob();
mainSearch();
submitChange();
assignLocationChange();