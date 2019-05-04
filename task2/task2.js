'use script';

function colorCells(diagonal) {
	const table = document.getElementById('table');
	const tableRows = table.rows;

	if (diagonal === 'main') {
		for (let i = 0; i < tableRows.length; i++) {
			tableRows[i].cells[i].style.background = 'red';
		}	
	} 
	else if (diagonal === 'counter') {
		for (let i = 0; i < tableRows.length; i++) {
			tableRows[i].cells[tableRows.length - 1 - i].style.background = 'red';
		}
	}
	
};


const btnMainDiagonal = document.getElementById('main_diagonal');
const btnCounterDiagonal = document.getElementById('counter_diagonal');

btnMainDiagonal.addEventListener('click', function() {
	colorCells('main');
});

btnCounterDiagonal.addEventListener('click', function() {
	colorCells('counter');
});