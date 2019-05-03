'use script';

function getAttributes() {
	const element = document.getElementById('w3r');
	const list = document.createElement('ul');
	
	document.body.appendChild(list);

	for (let i = 1; i < element.attributes.length; i++) {
		let listItem = document.createElement('li');
		list.appendChild(listItem);
		listItem.textContent = element.attributes[i].value;
		
	}
}