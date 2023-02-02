function loadEngineerNames() {
    var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('engineerSearchSelect').innerHTML = this.responseText;
		}
	}
	xhttp.open('GET','../Functions/loadEngineers.php',true);
	xhttp.send();
}

function form1() {  
    document.getElementById('engineerSearchForm').addEventListener('submit', function (e) {
		e.preventDefault();
		y = $('#engineerSearchSelect').val();
		$('#generalSearchDropdown2').load('../Functions/searchPEngineers.php', {x: y}, function (data, status) {
        })
	})
}

function formAssign() {
    document.getElementById('generalSearchDropdown2').addEventListener('click' , function() {
        document.getElementById('generalSearchDropdown2').addEventListener('change', function () {
            x = $('#generalSearchDropdown2').val();
            $('#searchContainer').load('../Functions/searchJobSheet.php', {ID: x}, function (data, status) {
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
                document.getElementById('jobIDLabel').innerHTML = document.getElementById('generalSearchDropdown2').value;
    
    
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

                let equipmentEntryBoxes = document.getElementsByClassName('equipmentInput')
				if (equipmentArray.length > equipmentEntryBoxes.length) {3
					entryBoxLength = equipmentEntryBoxes.length
					console.log(equipmentArray.length + 1 - (entryBoxLength))
					for (i=0;i<equipmentArray.length - (entryBoxLength);i++) {
						addEquipmentArea()
					}
				} else if (equipmentArray.length < equipmentEntryBoxes.length) {
					entryBoxLength = equipmentEntryBoxes.length
					for (i=0;i<(entryBoxLength) - (equipmentArray.length);i++) {
						let equipmentFrame = document.getElementsByClassName('extraEquipmentBox')
						equipmentFrame[equipmentFrame.length-1].remove();
					}
				}
    
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
                $('#locationLabel').load('../Functions/loadAddress.php', {clientName: x}, function (data, status) {
                })
            })
        })
    })
}

loadEngineerNames();
form1();
formAssign();