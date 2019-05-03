'use strict';


function addChildrenTo(block, count, type) {
	const element = document.getElementById(block);
	
	for (let i = 0; i < count; i++) {
		let child = document.createElement(type);
		element.appendChild(child);
		child.textContent = `I am new ${type}`;
		child.style.display = 'block';
		child.style.marginLeft = '20px';
	}
}

btn.addEventListener('click', function() {
	const block = document.getElementById('block').value;
	const count = document.getElementById('count').value;
	const type = document.getElementById('type').value;
	addChildrenTo(block, count, type);
});