import { v4 as uuidv4 } from 'uuid';
function Music() {
	return [
		{
			name: 'Solstice',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=16175',
			artist: 'Middle School, Henry Gritton',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-300x300.jpg',
			id: uuidv4(),
			active: true,
			color: ['#8C3048', '#D95A4E'],
		},
		{
			name: 'Evening Stroll',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=16178',
			artist: 'xander., Blue Wednesday',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/eefcd2054d34648afd6d6a8f560dd6d2b5fe402e-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#58593E', '#593939'],
		},
		{
			name: 'Canção',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=7961',
			artist: 'The BREED',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#F2CFBB', '#D9526B'],
		},
		{
			name: 'Cruising',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=17087',
			artist: 'Evil Needle',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#F25050', '#F2C572'],
		},
		{
			name: 'By Chance',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=15224',
			artist: 'SwuM',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#8C452B', '#30403E'],
		},
	];
}

export default Music;
