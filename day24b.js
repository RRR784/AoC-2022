'use strict'
let data, data2;

let mapper = {
	'#' : '#',
	'.' : 0, // 0000
	'>' : 1, // 0001
	'<' : 2, // 0010
	'v' : 4, // 0100
	'^' : 8, // 1000
	'E' : 'E',
	'X' : 'X',
};

let unmapper = {
	1 : '>',
	2 : '<',
	4 : 'v',
	8 : '^',
};

let summer = (v) => {
	let id = v.toString(2).split('').reduce((x, y)=>x+(y&1), 0)
	if (id === 1) id = unmapper[v];
	if (id === 0) id = v;
	if (v === 0) id = '.';
	return id;
};

let main = () => {

	// data = data2.split('\n');
	data = data.split('\n');


	let map = [];
	for (let y = 0; y < data.length; y++)
	{
		map[y] = [];
		for (let x = 0; x < data[y].length; x++)
		{
			map[y][x] = mapper[data[y][x]];
		}
	}


	let map1 = map.map(el=>[...el]);
	let map2;
	let map3;
	let turn = 0;

	let runner = (start, end) => {
		let player_instances = [];
		player_instances.push(start);

		let endcon = false;
		while (true)
		{
			turn++;
			// move the blizzards: map1->map2->map1
			map2 = map1.map(el=>el.map(el2=>0));
			for (let y = 1; y < map1.length-1; y++){
				for (let x = 1; x < map1[0].length-1; x++){
					if (((map1[y][x] & 1) >> 0) === 1) { map1[y][x] ^= 1; map2[y][x+1 === map1[0].length-1 ? 1 : x+1] |= 1; }
					if (((map1[y][x] & 2) >> 1) === 1) { map1[y][x] ^= 2; map2[y][x-1 === 0 ? map1[0].length-2 : x-1] |= 2; }
					if (((map1[y][x] & 4) >> 2) === 1) { map1[y][x] ^= 4; map2[y+1 === map1.length-1 ? 1 : y+1][x] |= 4; }
					if (((map1[y][x] & 8) >> 3) === 1) { map1[y][x] ^= 8; map2[y-1 === 0 ? map1.length-2 : y-1][x] |= 8; }
				}
			}
			for (let y = 1; y < data.length-1; y++){
				for (let x = 1; x < data[0].length-1; x++){
					map1[y][x] = map2[y][x];
				}
			}

			// convert blizzard map to avoidance map: map1->map3
			map3 = map1.map(el=>el.map(el2=>summer(el2)));

			if (endcon) {
				break;
			}

			// (map3[0].length, map3.length) = (x, y)

			// generate new player instances
			let player_temp = [];
			for (let i = 0; i < player_instances.length; i++)
			{
				let x = player_instances[i][0]
				let y = player_instances[i][1]
				if (x+1<=map3[0].length-2 && map3[y][x+1] === '.') player_temp.push([x+1, y]);
				if (x-1>=1 && map3[y][x-1] === '.') player_temp.push([x-1, y]);
				if (y+1<=map3.length-2 && map3[y+1][x] === '.') player_temp.push([x, y+1]);
				if (y-1>=1 && map3[y-1][x] === '.') player_temp.push([x, y-1]);
				if (map3[y][x] === '.') player_temp.push([x, y]);
			}
			player_instances = player_temp;

			// check for exit
			for (let i = 0; i < player_instances.length; i++)
			{
				let x = player_instances[i][0]
				let y = player_instances[i][1]
				if (x===end[0] && y === end[1]) {
					endcon = true;
					break;
				}
			}

			player_instances.sort((a, b)=>a[0]-b[0])
			player_instances.sort((a, b)=>a[1]-b[1])

			for (let i = 0; i < player_instances.length-1; i++)
			{
				let x0 = player_instances[i][0]
				let y0 = player_instances[i][1]
				let x1 = player_instances[i+1][0]
				let y1 = player_instances[i+1][1]
				if (x0 === x1 && y0 === y1) {
					player_instances.splice(i, 1)
					i--;
					continue;
				}
			}
		}
	}

	runner([1, 0], [map[0].length-2, map.length-2])
	runner([map[0].length-2, map.length-1], [1, 1])
	runner([1, 0], [map[0].length-2, map.length-2])

	console.log(turn);
}

data2 = `#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`;

data = `#.####################################################################################################
#>^..^>>v<><v<>>.^vv^v^<>^^<<^vv<v><>.v.<^vv>v>.v>.<<.<>v<v<v^^<<v><vvv<.vv<.^>^>^>v^vv<v<>^^.<<><>><#
#..<<vv<<^<<^.>v^v<>.>>v><^v.^<v^.<<<<>.<<v^<^<><vv>v<v><.^<><^>>.v<v>.>^<^<^^v<.^>>^><vvv><v^>^>.<<<#
#<>>^v<.v><^>>>.>>v^^<v<v^>^<<<v>^v<^<<<^>^<<<<<<.^v.^<<^v<>vvv<^^<>>^>v^v>^v><v<v.v<^<<>v<.<>v>^vv>>#
#><<<v>><<<^><v<<^v>v>>.vv<v^^^^^^>v<^>>.>>^.>><v^v^^>v^v^^^><<.>^<<<v.^>>>v<.>.<<^<^<..^^<>>^><<><^>#
#<^<^<v>>v<.v<.>>>v>.<...<^>.<>v.^v.>..^>^^<<>v>vv>>^<^^v>v^^v^v.^v.<^v.><^<v.^>v^<><v<.v..vv^>v<vv>>#
#>v.v<^^v>^<>..>^^<.v^.><^>^^<>^v<<<^v^^^v><^>>v.<^<^>^^<^<v<>v^^<^v^>^<v.>v^>><v>^>vv^v^<^>>><^>v<^<#
#<>v.<><^.v^>v<v<>>^^^><<vv<<v^v^>>>>>^>>>>v<<^><<<v>v><^v>>>..>v<<>^<^v>.>.<<^>^<>vvvv>^^v..v<>^^<^.#
#><<>.v^>.v^.>v<><>v<v<<<.v.^<^.vv..>v^<><<.^v^><v<>.^<.<>^^^..^..v<vv^><v^>^vv<^vv>vv<>v><<<>^^><^<<#
#.>^>^^<<>>.<<^><v<<^^<^<^v^>v><v<vv^><>^^^^>>vv..v^><vv<v^<<<v>v.^<v<v.>^^^.vvv><<^><^^>v>v>>><<v^^>#
#>><<<<>^vv<<>.<^^v^v><v^v><vv^<<v^<^>^<<>>^>.<v.v>v<<>vv^>><.<.>^>.>>>v^v>>^<v<v^^^<v^<><^v<.v<>v<>>#
#>^v^^<<^^<>v^^v^<>v^v<^vv^^^>><<.><.v<>^^<<>^<<v^>^v>^vv^^^>>.<.>v>^^^^<^.v<v><>v.^vv>>^vv<vv.<<><v>#
#<<.vv^v>^<<v.v..>^vv^<^>.<.v.^^>vv>.>.v.v^>v<^<v>v<<>^<<<^<.<v>^v><<^<<>>.><.><v>vv<<<.v>^^>^^vv^><<#
#<.<.<>>>v.<^>>v.v<<v><<v<v>vv<>^^><^>v>^.^^<^^>>>>.v^<<<>^v>>^^<^.>^<.vv^^>^v<vv<v.v^v>v>^>^<^^v>v<<#
#<<><^><v^^<vvv^>.>^><>vvv^>^v>^^v^<v<v>>.^>.^.vv>vvv^><>>>^.>.v^><><<<^^^>>><vv>^>vv>v>.<<>^<>v<..v<#
#>>><<vv.>v<<v.^^v..^>><>v<<.^<v^>>v^<v>vv^^>vv.vv<v<v^>><>>^>^v^^v>.<<^vv><>v^^><<<<><>v^^v<>>>v>v^<#
#<><<><.<<^^<>v<vvv^^<>>v>>.v<>>.v<><^^>vvvv<<<^<v^.>^>^^><v.^^^^v>><^^^<<><.^><>^><v^^><^<v<vv^><v>>#
#>v><^>>^^>^><>v.^v>v>^v^v>>>>vvv.<.vv...v<vv^>^<v><><^v^v>><v.>v<vv>^v><v^>^<>>^<^v^^<>^>>>>>^>.v^v>#
#><>^<>^v<><.<vv<<vv^>>>v^>v>.>>>vv>>v^v<^.<>v<^^>>^v<.>v^>vv>^v^^>^>><^><<<<^><v^^<^v^.>^<.><v.<<^^<#
#>><.v<<>v.v<..v<^v><>v^^^v.^^.v>^.v^<..>^^v><<v>v^^>>v>vvv>^>^v>v^v>^^.<v<>v<..vv.^<>v<v>v.^<>.>>.>>#
#>vv<v<^<v^^>>>v>vvv^^^v<<.<^^v^<vvv>vvv^.v^<<>.v>^>>v.^<^<<vv>v>v<<<^v.>>^<v><>>>^.>>>vv<^v>>^<^<>^>#
#<^v<.>.^<vv^><^^.>v<<<^<^>^<vv><>^><v>>^^^<<vvvvv^.>^.<><v^>><^>.<<^v>^v>^<^^<<><v.v<>>>v<^^>vvv<>^<#
#>v^><.<<^<.<v><>>.<.v<v><^vv>>v<v<>>>.<<<<^<<vv^>v><<>>>^><^^>^<>>^<<vv><<<^..^^>v^v.^<vv>^.<<<v.<<<#
#>^^>>^><v.^<^>..<v>>^>>v<>^^<<^.<>v^<<v>^>v<<^^^^><v><.><>>v>.^vv<>v>>>v>v^^^.>>>^^>>v><<>>v^v.^^>><#
#><v>^^.>vv<vv<><^^><<<^v<v<.^v<><^<>^>>vvv..>>^.v<v><<>v.<^v<^^v^v^v>>>^vv>^.><>>^<<<<vvv<v.v<>v.^^>#
#>^vvv^^^<^^v.<v.>>><^v^>^^v<v^v^>^^<.>v<.<^>vv>^<><^.>.<..^<>v<><v<^><v<>^v>>.v<<v>.v<^.<v>>.>.<^>v>#
#<<><vv><>.<>><><^^vv><<>>><v^v<^.^<v.v<^^>v^<<v.>.>><v^v>.^^>v<^v<v>v>>v>><.>^v<>^^v^>>.v.>v.v<<<^><#
#<^.vv^.^^>>^<v.^^.^vvv>>^>>v<<<^.v<>^<vv>^.<><>v<<<>>>>>.<>>.^<>>^^>v>^^v<v<^<<^>^^>vv>>^<<.^<<.v^v<#
#.v<^^^^<^>^^^>^<<v><<^v.^v^^><^.^<<><v>v>^^vv<v.v<<^<v<<><>>><v<>>^^.<<v>v^<vv^^^>.v^v>v^^<v^<v.^^v.#
#>v<><^<><>vv^v^v.v.v^^>v<><v<<>>>^v.>^<.>v^>>v.<..^v<<^<^^v.^<<>.>vvv<>v.^>.vv>>^v..v^.v.>^^.v<.><^>#
#>v><^vvv<vv>.^<v<v>v^vv>v^>>^.^.v>vv.v>>^><>>>v><><.>>>vv<^v<>v<vvv<<^v>v<^vv<<>>>>><^^>^<^^v<v<^^<>#
#>v<.>^v>>^.><vvv.^v><^.vv^<.<<vv^v<v>.v^^v<^<^<^<^<^v^v<<^^v.^vvv.>^<>v>.^^v.^v.>vv^<^<vv.vvv^>v<v<<#
#<<v<^><>>><><><>>^^^<^^v>^^v>v>v<><<>.>.>^v>^<<.<vv^vv<.v^v<<v^<<<vv.^^^^^^v<^.<v>^>><><.v>v^<.v^.>>#
#><<v<v<v^>^v^>><>^v^^^^.>^<<^v<v^.v.v><><<v>v><>vv.><v>>><v.^>><>.<v<>vv<>^^^>>>.v^.^^v^vv.vv>>^<v><#
#><vv>.<vvvvvvv>vvv<v<^^v>..v<>v^v.<<^^vv^<^v<v<<v<<v<^.v^<<^>.><.v<<><<^v>^<vvv>^^.<vv>>v<<..>><<v^>#
#..<<vv>>vv^<.>v^^^<^<^v>><v<>>.v>^v^^^.<<v<vvv^<<^^>.v<<.v<v>>v><v>v<><vv<v<<.<>>.v>^^v<v.>v<^.^.^^>#
####################################################################################################.#`;

main();
