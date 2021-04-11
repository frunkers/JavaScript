'use strict';

let positions = [
	//названия и координаты белых фигур, кроме пешек
	{
		coordCol: 'a',
		coordRow: 1,
		figure: 'rook',
		color: 'white'
	},
	{
		coordCol: 'b',
		coordRow: 1,
		figure: 'knight',
		color: 'white'
	},
	{
		coordCol: 'c',
		coordRow: 1,
		figure: 'bishop',
		color: 'white'
	},
	{
		coordCol: 'd',
		coordRow: 1,
		figure: 'queen',
		color: 'white'
	},
	{
		coordCol: 'e',
		coordRow: 1,
		figure: 'king',
		color: 'white'
	},
	{
		coordCol: 'f',
		coordRow: 1,
		figure: 'bishop',
		color: 'white'
	},
	{
		coordCol: 'g',
		coordRow: 1,
		figure: 'knight',
		color: 'white'
	},
	{
		coordCol: 'h',
		coordRow: 1,
		figure: 'rook',
		color: 'white'
	},


	//названия и координаты черных фигур, кроме пешек
	{
		coordCol: 'a',
		coordRow: 8,
		figure: 'rook',
		color: 'black'
	},
	{
		coordCol: 'b',
		coordRow: 8,
		figure: 'knight',
		color: 'black'
	},
	{
		coordCol: 'c',
		coordRow: 8,
		figure: 'bishop',
		color: 'black'
	},
	{
		coordCol: 'd',
		coordRow: 8,
		figure: 'queen',
		color: 'black'
	},
	{
		coordCol: 'e',
		coordRow: 8,
		figure: 'king',
		color: 'black'
	},
	{
		coordCol: 'f',
		coordRow: 8,
		figure: 'bishop',
		color: 'black'
	},
	{
		coordCol: 'g',
		coordRow: 8,
		figure: 'knight',
		color: 'black'
	},
	{
		coordCol: 'h',
		coordRow: 8,
		figure: 'rook',
		color: 'black'
	},
];

let config = {
	rows: [8, 7, 6, 5, 4, 3, 2, 1],
	cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
}

let table = document.querySelector('table > tbody');
let rowTable, colTable;

function generateBoard(row, col) {
	let rowStartWithColor = 'white';
	for (let i = 0; i < 8; i++) {
		row = '<tr class="row"></tr>';
		table.insertAdjacentHTML('beforeend', row);

		for (let j = 0; j < 8; j++) {
			col = `<td class="${rowStartWithColor}" data-rownum="${config.rows[i]}" data-colchar="${config.cols[j]}"></td>`;

			if (rowStartWithColor === 'white') {
				rowStartWithColor = 'black';
			} else if (rowStartWithColor === 'black') {
				rowStartWithColor = 'white';
			}

			table.querySelector(`.row:last-child`).insertAdjacentHTML('beforeend', col);
			table.querySelector(`.row:last-child > td:last-child`).insertAdjacentHTML('beforeend', `<i class="fas fa-chess-${searchFigure(config.rows[i], config.cols[j], 0)} ${searchFigure(config.rows[i], config.cols[j], 1)}-figure"></i>`);
		}

		if (rowStartWithColor === 'white') {
			rowStartWithColor = 'black';
		} else if (rowStartWithColor === 'black') {
			rowStartWithColor = 'white';
		}
	}
}
generateBoard(rowTable, colTable);

function searchFigure(paramRow, paramCol, prop) {
	for (let i = 0; i < positions.length; i++) {
		if (positions[i].coordRow === paramRow && positions[i].coordCol === paramCol) {
			if (prop === 0) {
				return positions[i].figure;
			} else if (prop === 1) {
				return positions[i].color;
			}
		}

		if (paramRow === 7 && prop === 0) {
			return ('pawn');
		} else if (paramRow === 7 && prop === 1) {
			return ('black');
		}

		if (paramRow === 2 && prop === 0) {
			return ('pawn');
		} else if (paramRow === 2 && prop === 1) {
			return ('white');
		}
	}
}