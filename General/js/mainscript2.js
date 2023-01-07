// This is for the index.html and addJob.html pages

function loadClientNames() {
    var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('clientSelect').innerHTML = this.responseText;
		}
	}
	xhttp.open('GET','../Functions/loadClients.php',true);
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
	xhttp.open('GET','../Functions/loadEngineers.php',true);
	xhttp.send();
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

loadClientNames();
loadEngineerNames();
formElements();
equipmentAssign();
