let data;

const main = () => {

	//--------

	let MapWidth = 7;
	let MapHeight = 4000;

	let map = [];
	for (let y = 0; y < MapHeight; y++)
	{
		map[y] = [];
		for (let x = 0; x < MapWidth; x++)
		{
			map[y][x] = "."
		}	
	}

	let clear = () =>{
		for (let y = 0; y < MapHeight; y++)
		{
			for (let x = 0; x < MapWidth; x++)
			{
				map[y][x] = "."
			}	
		}
	}

	//----------

	let shapes = [
		[[0, 4]],
		[[1, 1], [0, 3], [1, 1]],
		[[2, 1], [2, 1], [0, 3]],
		[[0, 1], [0, 1], [0, 1], [0, 1]],
		[[0, 2], [0,2]]
	];
	let shapew = [4, 3, 3, 1, 2];

	// -------

	
	let updateHeight = (h) =>
	{
		while (true)
		{
			if (h < 0) throw new Error("map height exceeded...");
			let block = false;
			for (let i = 0; i < MapWidth; i++)
			{
				if(map[h-1][i] === "#") block = true
			}
			if (block) {
				h--;
				continue
			}
			return h;
		}
	}

	let getStartY = (from, shape) => updateHeight(from) - 3 - shapes[shape].length

	// -------

	let getJet = (counter) => data[counter] === ">" ? 1 : -1;

	
	// -------

	let nextX = (x, y, shape, counter) => {
		let w = shapew[shape]
		let h = shapes[shape].length
		let dx = getJet(counter);

		let c = false;
		for (let x2 = x; x2 < x + w; x2++)
		{
			for (let y2 = y; y2 < y + h; y2++)
			{	
				if (map[y2][x2] === "@" && map[y2][dx+x2] === "#") c = true;
			}
		}
		if(c) return x;
		if (x + dx + w > MapWidth) return x
		if (x + dx < 0) return x;
		return x + dx;
	}

	let collideY = (x, y, shape) => {
		let w = shapew[shape]
		let h = shapes[shape].length
		if (y + h >= MapHeight) return true;
		// let c = false;
		// for (let x2 = x; x2 < x + w; x2++)
		// {	
		// 	if (map[y][x2] === "@" && map[y+1][x2] === "#") c = true;
		// }
		let c = false;
		for (let x2 = x; x2 < x + w; x2++)
		{
			for (let y2 = y; y2 < y + h; y2++)
			{	
				if (map[y2][x2] === "@" && map[y2+1][x2] === "#") c = true;
			}
		}
		return c;
	}

	//----------
	let run = (steps) => {
		clear();
		let shape = -1;
		let current_height = MapHeight;
		let jet_counter = 0;
		let blocks = 0;
				
		while (true)
		{
			if (steps === 0) break;

			shape++;
			shape = shape % 5;

			let startx = 2;
			let starty = getStartY(current_height, shape);

			// step 0: spawn next block

			for (let srow = 0; srow < shapes[shape].length; srow++)
			{
				for (let scol = shapes[shape][srow][0]; scol < shapes[shape][srow][0] + shapes[shape][srow][1]; scol++)
				{
					map[starty+srow][startx+scol] = '@';
				}
			}	

			steps--;
			if (steps === 0) break;

			let collided = false
			while(!collided)
			{

				let prevx = startx
				startx = nextX(startx, starty, shape, jet_counter);
				jet_counter++;
				jet_counter = jet_counter % data.length;

				// increment X
				for (let srow = 0; srow < shapes[shape].length; srow++)
				{
					for (let scol = shapes[shape][srow][0]; scol < shapes[shape][srow][0] + shapes[shape][srow][1]; scol++)
					{
						map[starty+srow][prevx+scol] = '.';
					}
				}

				for (let srow = 0; srow < shapes[shape].length; srow++)
				{
					for (let scol = shapes[shape][srow][0]; scol < shapes[shape][srow][0] + shapes[shape][srow][1]; scol++)
					{
						map[starty+srow][startx+scol] = '@';
					}
				}
				steps--;
				if (steps === 0) break;

				collided = collideY(startx, starty, shape);
				if (collided)
				{
					// stopped
					for (let srow = 0; srow < shapes[shape].length; srow++)
					{
						for (let scol = shapes[shape][srow][0]; scol < shapes[shape][srow][0] + shapes[shape][srow][1]; scol++)
						{
							map[starty+srow][startx+scol] = '#';
						}
					}
					current_height = updateHeight(current_height);
					blocks++;
					if (blocks === 2022)
					{
						steps = 0;
						break;
					}
					steps--;
					if (steps === 0) break;
				}
				else
				{
					// move down one
					for (let srow = 0; srow < shapes[shape].length; srow++)
					{
						for (let scol = shapes[shape][srow][0]; scol < shapes[shape][srow][0] + shapes[shape][srow][1]; scol++)
						{
							map[starty+srow][startx+scol] = '.';
						}
					}
					starty++;
					for (let srow = 0; srow < shapes[shape].length; srow++)
					{
						for (let scol = shapes[shape][srow][0]; scol < shapes[shape][srow][0] + shapes[shape][srow][1]; scol++)
						{
							map[starty+srow][startx+scol] = '@';
						}
					}	
					steps--;
					if (steps === 0) break;
				}
			}
		}

		for (let y = 0; y < MapHeight; y++)
		{
			console.log(map[y].join(""));
		}
		console.log(blocks)
		console.log(MapHeight, current_height, MapHeight - current_height);
		
	}

	run(10000000)

	// let go = (count) => {
	// 	run(count++)
	// 	setTimeout(go, 1000, count)
	// }

	// go(0);
	
	
	// 2739 too low
	// 3018 too low
}


//data = `>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>`
data = `><<<<>><<><<<<>>>><<><<<>>><<>>>><<<<>>><<<><<<<>>><<<><<<>>>><<<><<<<><>>><>>><<<<><<<>>>><<>>>><<>><<>>><<<<>>><<>><>>><<>>>><<>><<<<><>><<>>>><<<><<<<><<<><><<>>><>><<<>>>><<<><<<<>>>><><<<<>><<<><>><>>><<>>><<<<>>>><<<<><<<<><<<><<><<<<>>>><>><<<<>><<>>><<<>>><><<<>>>><<<>>>><<<>><>><<>><<<>>>><<<<>>>><<<<>><><<<<>>>><><<>>>><<>><<<><<<>><><>>>><>><><<<<>>><<><>><<<>>>><><<><<><>>><<<<>>><>>><<<>>><<<<>><<>>>><>>>><>>>><<<<>>>><<<>>><>>><>>>><<>><<>>>><<<>>><<>>><<>>>><<<<>><<>>><>>><><<>>>><<><>>>><<>>><>><<<>><<>><><<<>>><<<>>>><><>>><<>>><<>>><<<<>>>><>>><<<<>>>><>><<<<>><<<<>>><<>><<>><>>><<<>><<<<>>><<>>>><<>><<<>>><><<>><<><<>><<<<>>>><<<<><>>>><><>>>><<<><><<<><<<<><<><>>>><><<<><<<<>>><>>>><<<<>><>>>><<>><<><><>><<<>>>><<>><<<>>>><<<<>>>><<<><<<>>><<<>><>><<<><<<>><<<<><<<>>><<<><>>><<>>><<<>>>><>><<>>>><<><<<>>><<<>>>><<<<>><<<>><<>><<<><>>><<>>><>>><<>><<>><<<<>>><>>><><<<<><<<<><<>>>><>>>><<>>>><<<<><<<<>><>><<<>>>><<<<>>><<>>>><<<<>>><<>>><<<<><<>>>><><><>>>><<>>>><<><<<>><<<>><<>>>><<>><<><<<<>>>><>><<<>><<<<><<<<>>><<>>><>>><<<<>>>><>><<<>>>><<<<>><>>>><<<>>>><>>><<<<>><<<<>>>><<<<>>><<<>>>><>><>>><<<><><<<>><<<<>>><>><<<>><>>>><<<>>>><<<>>><<<<>>><<<><<<>>><<>>>><<<>>><<<<>><<>>>><<<>><>>>><<>>>><<<<><<<><<>>>><><<<<>>>><<<<><<<<>>><<<>>>><<<<>>>><>><<<<>><<<<>>><><<<>><<<>>><>>>><<<>>><<><><<<<>>><<><<<>><<>>>><<<>><<<<>>><><<<>><<<>>>><<>>><<<>><<<<>>>><>>>><>>>><<<<><<<<>>><<><<>>>><<<<>><><>><<>><<<<>><<<>>>><>>>><<>><<>>><>>>><<<>>>><<<<>><<<>>>><<<<>><<>><<<<>>><<>><>>>><><<<<>>>><<>><<><<><<<>><>>>><<<>>>><<<>>><<<<><<<><>>><<>>><<>><<<>>><>><<<>>><<<>>>><>>><<>>>><<<>>><<><<>>><<>>>><>><<<><<><<<<>>><<<<>><>><<<>>><>><<<<>><<<<>><<>><<<<>>><<<<>>>><<<>>><<<<>>>><<><<>><<<><<<>>>><<<<><<<<>>><>>>><>><<<>>><<><><<>><<<>>>><<<><>>><<<>>><>>>><<><<<>><<<><<<<>><>>><<<>>>><>><<<><><<<>><<>><<<><<<>><<<<>>>><<<<>>><<>>><<<>>><<><<>><<<>>><<>>><<>><<<><>>><>>><<><<><><<>><>><<<><<<<>>><<<>>>><<<<>>>><>><<>>><>><>>>><<<>><<<<>>>><<<<>>><>>>><<<><<<<><<<><<<>>><<>>>><<<>><<<<>>>><<<<>>>><<<><<<<>><>>>><>><<>>>><<<<><<<>>><>>><<>>>><<<><<<<>>><<>><>><<>>><<<>>>><<<>>>><<<>>>><<<<>>><<<<>><><<<><<<>>>><<<>>>><<>><>>><<<><<<>><<<<><<><<><<<<>>><<>>>><<<<>>>><<>>><<<<>>>><<<<>>>><<<<><>><<<>><<><>>>><<<<><<>>>><<><<<>><<<<><<<<>><<>>>><<<>>><<>>>><>><<<<>><<<>><>>><<<<>>>><>>>><<<>><<<<><<>>>><<><>>>><><<>>><<<><<>><<<<><>>>><<<<><><>>>><<<<>>>><>>>><>><<<><>>><><<><<>>><<>>>><<<>>>><<><<<<><<<<><><<<<>>><<<>><<<><<<<>>><>>>><>>><<<><><>>>><>>>><<<>><<<>>>><<<<>>>><<<<><<<<>>>><<<><<><>><>>><>>>><<><<>>>><<<>>><<>>>><<<<>>><<<>>><<<>>><<<>><<>><<><<>>><<>>><<<>>><<<<>>>><>>>><<<>>>><>><>><><<>>><<<>><<<<>>><>><>><<<<>>><>><<>>><<<<>>><>>><>><<<>>>><<<<>>><<>>><>>>><>>>><<><<<<>>><<>><><<<<>><<<<>><<<<>>>><<<<>>>><<<<>>><<<>><<<>>>><<<<>>><>>><>>><>><<<>>><<><<>>><<>>><<<>>><<<<>>><<<>>>><<<>><<>>>><>><<<<>>>><<><<<<>>><<>><<>><>>>><<<>>>><<<>>>><>><<<<><>>><>><<>>><<<>>><<<>><<<>>>><<>>><<<>><<>>>><<<<>><<><<<<>>>><<>>><>>>><<<<><<<<><<><<<>><><<<>>><<<><<<><<<>>><<<<>><<<<>>><<<<>>>><>>><>>>><<<>>><<<<>><<<>>>><<<<>>><<<>><><<>>><<<>>><>>><<>>><<<>><<><<<>>><<>>><<>><<<<><<<>><<<<>>>><<<<>><>>><<<<>><<<><>>>><<>>>><>>><>><<>>>><<<>>>><<>>>><<<<>>><>>><>>><<<<>>>><>>>><>><<>><>><<<>><>><<>>><>>>><<<<>>><>>><<<><<<>>>><><<<>><>>><<<<><<<<><<<<><><<><<><<<><>>>><>><<>>><<<<>>><><<<<>><<<<><<<>>><<<>>>><<>><<<<><><<<>>>><>>><<<<><<<<>>>><>><><<<<>>>><<<<>>><>>><<<>><><<<><<<<>>>><<<<><<<>>><>><<<<>><<<>>>><<>>><<<><>><<>>>><<>>><>>><>>><<>>>><<<<>><>>>><>><<<<>>>><<>><<<>>>><<<<>>>><<>>>><<<>><<<<><<>>><><>>><>><<<<>>><<>><<<>>><<><<<>><<<<>><>>><<<><<>>><<>><<<>>>><<<>><<><<>>><<<><<<<><<<>>><<<><<><>>>><>>>><<<>>>><>><<<><<>>>><><<><<>>>><<<<>><<>>><<<<>>>><>>>><<>><<>><>>><<>><>>>><<<<>><>>><>>><<><>>>><<>><>>><<><><<<>>><>>>><<<>><<<<>>>><<<><<>>><<<<>>>><><<>>><<>><<<>>><<<>>>><>><<<<>>><<>>><>>>><>><<>>>><>>><>>><<>>><>><<<><<><<<<><>>>><<<>>>><>>>><<<<>>>><<<<><<<><<<>>><<<>><<>><<>>><<<>>><<<<>>>><<<>>><<<>>><<<><><<<>>>><>>>><>><<<>><<<>>>><><>>><<<>>>><>>>><<<>><<<<><>>><<<><<<<><<<>>>><<<<>>>><<<>>>><<><<>><>><<<>>><<<>><<<>>>><<<<>>><<<<>>><<<<><<<><<<><<<<>><<><<>>>><<<>>>><><<>><<>>><><<<<>>><<<><<<><<<>>>><<<>>><<<<>>>><<<<>><<<<>>>><><<>>><<><<>>><<><<<<><<<><><<<<><<>>>><>>><<<<>><<<<><<><<<<>>>><<<<>><<<>>>><>>><<<<>>><<<>>>><>>>><<<<>>><<<<>>>><>>><<<<>>><<<><><>>>><>>><<<<>>>><<<<><>><>>><><>><<>>><>>>><<<<><<<>>><<<<>>>><<<<>>>><<<>>><<<>>>><<<>>><<<<>><<><<>>><<<><<><<<<>>><<<<><<>><><<<><>>>><<<<>>>><<<<>>><<<>>><>>>><>><<<><<>>>><<<><<<<>>><<<><<<<>>><<<<>><><<>><<>>><>>><>>><<>>>><<>>>><<>>>><<<<><<<><<<<>>>><<>>>><><<<>><<<<>><<<>><<<>>><>><<>><<<<>>>><<<<>><><<>>>><<<>><<<<>>>><<<><<>>>><<<<>><<>>>><<<<>>>><>>>><>><>>><<<>><<<<>>>><<<>>><<<<><<<<><<><<>><<>><<<><<<<>><<<<><<>>>><<<<><>>>><>>>><>>><<>>>><<>>>><<<>>><<<><<>>>><<<><<<<>><<>>>><<><><<<<><<<><<>>>><<<>>><<<<>><<><<<>><>><<<<><><<<>>>><>><<>>>><<<>>>><<>>>><<<>><>><<>>><<<>>>><<<>>>><<<<>><<>>>><>><<<<>>>><<>><<<<>>><<>>><<><<<>>>><<<<>>><>><<>><<<<>><<<>><>><<>>>><<<>><<>>><<>><<<<>><><<<><<<<>>><<><<<><><<>>><<>><<<<>>><<<>><>><<<<>><<<<><<<<>>>><<<<>>><<>>><>>>><<<<>>><<<><<<<>><>>>><<<>>>><<><>>><<<>>><<<<>>>><<><<<>>>><<>>><<>><<<>><<<>>><<<><><><>><>>>><><>><<<>>>><<<>><<<>>>><<>><<>>><<<>>><<<>><<<<><<<<>>><>><<>><<<<>>>><<>>><<<<>><<<>>>><<<<>><<<<><>>><>>>><<>><<><<<>><<<><<<>><>>>><<<<>><<>>><<>>><<<>>>><>>>><<<<>>><<<><<<<>>><<>>><>><<>><<<>>>><<<<><>><>>><<<<>>>><>>>><<<><>>><<<><<<<>>><<<><<><<<<>><<>><<>>>><<<>>>><<<<>>>><<>><<<<><<<>>><><<<><<<>>><<<>>><><<<>>><<>>><<<<>><<<<>><<>>>><<><<<<>><<<><>>>><<<>>><<<>><<>>>><<<<><<<<>>>><<>>>><>>>><<<>>><<>>>><<<>>>><>>><<<<>>><>>>><>><><<<<>>>><<<>>><><<<><<<>>>><><<>>><<<<>>>><>><<><><<<>>><<<><<<<>>><<>><<<>>>><<<>>><<<<>><<<>><<<><<>>><<<<>>><><<>>><<<>>>><<<<>>>><<<<><<<>><>>>><>>>><<>>><<<>><<<>>>><<>><<>>>><<<><<>><><<><<><<><<<>>><>>>><>><><<<<>><>><>>>><>>><<<<>>>><<<<>>>><>>><<<>><<<<>>><<>>><<<<><<<<>>>><<<<>>>><<><<<>><<>>><<>>><<<>>>><<<<>>>><<<<>>><<>>><<><<<<><<>>>><<><<<<>><<<<>>><<<<>><<<>><<><>>><<>>>><<<<>>><<<<>>>><<<>>><>>><<<<>>>><<<<>>><<><>>><<><<<>><>>>><>>><<<<><<>><<>>>><>>><<<>>>><><<<<>>>><<<<>><<<>><<<><<<<>>><<<<>>><<>><<><<<<>>><><<>>>><<<>><<>><<<<>><<>><<>><<>>><<<<>><<<><<>>><><>>>><<<>>><<<><><<><<<<>>>><<<<>>>><><<<<><>>><<<>>><<<>><<>>>><<>><<<<>>><<><<<<>>>><<<>>>><<<>><<<>>>><>><<>><>><<<>><<><<><<<><<<<>>><>><<<<>><<<>>><<<<>>><<<<>><<<<>><<<<>>><<<<><>><<<><>>>><<>>>><<<<>><<<<>>><<>><>>><>>>><<<>>><>><<<>>><<><<<>>><<>><>>>><>><>><<><>>>><<<>>>><<>>>><<<>>>><<<>>><<<>>><<><<>>>><>>><>><<>>><<<>>><<>><<><<>><<>><<>>>><<>>>><>>><<<>>>><><<<<>><<<>>>><<<><<<<>>><<<<>>>><<>><<<><<<<>>>><><<>>>><>>><<<>>>><<<>>>><<><>><<<>>><<<<>>>><<<<><>>><<<<>><<<<>>><<<<><>>><<<<>><>>>><<<<>>><<>>>><<>>><<<<>>>><>>><><<>>>><<<><>><<<<>>>><<<<>>><<<>>>><<>><<<<>>>><>><<<><>><>>><>>><<>>><<<<>><<<>>>><<<>>><<<>>>><<<<>>><<<<>><<<<>>>><<<>>><>>>><<<>>><<<<><<<<><<>><<<<><<<<>><>><<<<>>>><<>><>>><<<><<>>><<<><<<<>><<<>>>><>>><>><<<>><<<<>>>><<<>>>><<>><>>>><<<<><<>>><<><<>>><>>><<>>><<<<>>><<<<>>><<<<>>><>>><>>>><<<><<<<>><<<>><<>>>><<<<>><<<><<<><>>>><<<>>>><<>>><<>>>><<<><<><<<><<<<>><>>>><<<<>><<><<>>>><<<<>><<<<>>><<<<>><>><<<<>>><>>>><<<<>>>><<>>>><<>>>><>>><<>><>>>><<<<>>><<<<>><>>><<>><<<<><<<>><><<<<>>>><<<<>><>>><<<<>><>>>><<><><<<<>><<<<>>><<<<><><<<>>><<><<<>><<<>>>><>>><>>>><<>>>><<>><<<>>>><>>>><<><<>>>><<><<<<>>>><>>>><<>>><<>>><><<<<>>><<<<>>><<<>><<>><>>>><<><>>><>>><<<<>><<<<>>>><<<>>>><<<<>>>><<<<>>>><<<>><>>>><<<>><<>><>>><>>><<><<<<>>>><<>><<<>>>><<<<><<<<>>>><<<><<<><<<<><<<>>><<<<>>>><<>>>><>><<<<><<>><<<<>>>><<<>>><>>>><<>>>><<<<>>><><>>>><<><>>>><<><<<<><<<><>>>><<><<<>>>><>><<<>>>><<<><>><>>>><<<>>><>>>><<>>>><>>>><<<<><>>>><<><<>><<<<><>>><<<<>>>><<<<><<<<><><<><<<>>><<<<>>>><<<<><<<>><<<<><>><>><<<>><<<<>><<>><<<><<<><<>>><<<<><<>><<<<>>><<>>>><<<<>><<>>>><<<<>>>><<<<>>><<<<><<<>>>><<>>>><<<<>><>>>><<<<><><<><>><<<<><>>>><<<>>><<<>><<<>><<<<>>><<<<>>>><>>>><><<<<>>>><>><>>>><<<>>><<<<><>>>><<>>><<<<><<<>><<<>>><<>>><<<<>>>><<<>>><<<>>>><<>><<>>><<><<<>>><<<<>>><<<>>><<<<>><><>>><<<>><<<<>><<>><><<<<>>><>>>><<<><<<<><<><<<>>><<<>><>>><<<<><<>><<<><<<>>><>><<<<>><>>>><<<>>>><<<><><<>>><>><<>><<<<>><>>>><><<<>>>><<<>><<>>>><<>>>><<>><<<<>><><>>>><<>>>><<<<><>><<><<<<>><<>>>><<<>>><<<>><<<<>><<>>>><>>>><<>>>><<<>>>><<<<><<><<<>>>><<>>>><<<>>><>>>><>><>>>><<<<>><>><><>><<><<<>><<><<<>>><<<<><<<<><<<<>>><<>>>><<<>>><<><>>>><<>>>><<>>><<>>>><<><<<<>><>>>><<<>><<<>>><<<>>>><<>><>>><>><<<>><<<>><<>>><<<><<>><<<<><<<>>>><>>><<<><<<>>>><<<>><>><>>>><>><><<>><<<<>>><<<>><<>><<<>>>><<<<>><<<>><>>>><<<<>>>><>><>><<<<>><<<>>>><<>>><<<<><>>>><<<>>>><<<<><<>>>><<><>><<>>><<<<>><<<<>>><<<<>>>><>>>><<>><<<<>>>><<>>>><<>>><<>>>><<<><<<>>><<>>><<<>><<<>>><<><<<><<<<>>>><<<><<><>>>><<>>><<>>><><<>>><<<<><<<<>>><>><<>>>><<<<>>><<<<><>>>><<<<>>>><>>>><<<>>>><<<<>>>><<<<>>><<<<>><>>><>><<><<<<>>>><>>>><>>>><<<>><>><<<><><<><<<<>><<>>><<<>><<<><<<<><<<>><<<<>><<<<><<>><<<>>><<<<><<>>><>><>>>><<>>>><<<<>>><><<<<>>><>><<<<><<<<>><<<>>><<<<><<><<><<>><<><<>>><>><<<<>>><<<>><<<<>><<<<><<<>>>><>>><><<<>><<><<>><<>>>><<>>><<>>>><<<<>>>><>>>><>>><<>>><<>>>><>>><<><<<<>>><<<>><<<<>><<<>>><<<<>>><<<><<>>>><<<>>>><<<<>><<><>>><<<><<<<>>>><><<>>>><<<>>>><><<>>>><<>>>><<<<>><<<<><<<><<>><>><>><>>><<><>>><<><<>><<<<><<>><<<<>><>><<<<>>><<<<>><<<<>>><<<><>>>><<<>>>><>>>><><>>>><<>><<<<>><>><<<>>>><<>>>><<>>><<<>>>><><>>>><<<>>>><<<<>><<<>><<>>><<><<<>><<<<>>>><<>>>><>>>><<><<>>>><>>>><<<<>><<<<><<>>><><<><<<>>>><><<>><<<>>><>>>><<>>>><><<><<>>><>><>><<<<><<>>>><<<<>><<<<>>><>>>><<<>>><<<<><>>>><<<<>>>><<>>><<>>><<<>><>><<<<><<<<>>>><><<<>><<<<>>>><<><<<>><<<>><<<<>>>><><<><>>>><><<<<>>><<<>>><<>>>><>>>><<<<>><<><<>>>><<<><<<><>>><>>><<>><<<>><><<<<>>><<<<><>>>><<<>><<>><<>><<<>><<<<>>>><<<>><>>>><<>><>><>>><<<>><>><<<<><<<<>>>><<<<>>><<<>>>><<<<>>><<<<>>><<<<>>><<><>>>><<>>>><>>><<>>>><<<>>><<>>><>><<<>>>><>><<>>><<><<>>><<<>>>><<><<><><<<>>><<<>>>><<<>><<<<>><<><<<<>>><>>>><<<<><<>>><<<>>>><<><<<>>><><<>>><<<<><<<>>><>><><<<>>><<<>>>`;

main();