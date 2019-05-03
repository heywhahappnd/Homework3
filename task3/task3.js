'use strict';


const btn_add = document.getElementById('btn_add');

const divToBeCloned = document.getElementById('default');


function createCloneNode(block) {
	let clonedElement = block.cloneNode(true);
	document.body.appendChild(clonedElement);	
}

btn_add.addEventListener('click', createCloneNode.bind(null, divToBeCloned));