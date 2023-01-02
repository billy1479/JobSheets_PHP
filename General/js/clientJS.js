// JS file for the edit client section - editClients.html

function loadClients() {
	var xhttp, tabs, i;
	tabs = document.getElementsByClassName('editClientDropdown');
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			for (i=0;i<tabs.length;i++) {
				tabs[i].innerHTML = this.responseText;
			}
		}
	}
	xhttp.open('GET','../Functions/loadClients.php',true);
	xhttp.send();
}

function clientForms() {
    document.getElementById('addClientForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var x, y;
		x = $('#addClientText').val();
		y = $('#clientAddressText').val();
		$('#addClientFormFrame').load('../Functions/clients.php', {clientMode: 1, clientName: x, clientAddress: y}, function (data, status){

		});
		document.location.reload();
	})
    document.getElementById('editClientNameForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var x, y;
		x = $('#clientNameText').val();
		y = $('#clientEditSelect').val();
		$('#editClientNameFormFrame').load('../Functions/clients.php', {clientMode: 2, client: y, clientName: x}, function (data, status){

		});
		document.location.reload();
	})
    document.getElementById('editClientAddressForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var x, y;
		x = $('#clientEditSelect2').val();
		y = $('#editclientAddressText').val();
		$('#editClientAddressFormFrame').load('../Functions/clients.php', {clientMode: 4, clientName: x, clientAddress: y}, function (data, status){

		});
		document.location.reload();
	})
    document.getElementById('deleteClientForm').addEventListener('submit', function (e) {
		e.preventDefault();
		var x;
		x = $('#deleteClientSelect').val();
		$('#deleteClientFormFrame').load('../Functions/clients.php', {clientMode: 3, clientName: x}, function (data, status){

		});
		document.location.reload();
	})
}

function f1() {
	document.getElementById('clientEditSelect2').addEventListener('click', function () {
		// this loads the address when a client is selected
		document.getElementById('clientEditSelect2').addEventListener('change', function () {
			x = $('#clientEditSelect2').val();
			$('#editClientAddressLabel').load('../Functions/loadAddress.php', {clientName: x}, function (data, status) {
			})
		})
	})
}