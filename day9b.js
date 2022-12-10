let data;

const main = () => {

	data = data.split("\n").map(el => el.split(" "))

	let w = 1000;
	let h = 1000;

	// grid

	data2 = []
	for (let y = 0; y < h; y++)
	{
		data2[y] = []
		for (let x = 0; x < w; x++)
		{
			data2[y].push(".")
		}
	}

	//        H                                            T
	let x0 = [500, 500, 500, 500, 500, 500, 500, 500, 500, 500]
	let y0 = [500, 500, 500, 500, 500, 500, 500, 500, 500, 500]

	let mark = (p) => {

		for (let j = 0; j < 9; j++)
		{
			let dx = x0[j] - x0[j+1] // vector from x1 to x0
			let dy = y0[j] - y0[j+1] // vector from y1 to y0

			let dirx = dx / Math.abs(dx)
			let diry = dy / Math.abs(dy)

			let magx = Math.abs(dx)
			let magy = Math.abs(dy)

			if (magx === 2)
			{
				if(magy === 0)
				{
					x0[j+1] += dirx
				}
				else
				{
					x0[j+1] += dirx
					y0[j+1] += diry
				}
			}
			else if (magy === 2)
			{
				if(magx === 0)
				{
					y0[j+1] += diry
				}
				else
				{
					y0[j+1] += diry
					x0[j+1] += dirx
				}
			}

		}

		data2[y0[9]][x0[9]] = '#'
	}
	

	for (let i = 0; i < data.length; i++)
	{
		switch(data[i][0])
		{
		case 'L':
			for (let j = 0; j < data[i][1]; j++)
			{
				x0[0]--;
				mark(i);
				//console.log("L", x0, y0)
			}
			break;
		case 'R':
			for (let j = 0; j < data[i][1]; j++)
			{
				x0[0]++;
				mark(i);
				//console.log("R", x0, y0)
			}
			break;
		case 'U':
			for (let j = 0; j < data[i][1]; j++)
			{
				y0[0]++;
				mark(i);
				//console.log("U", x0, y0)
			}
			break;		
		case 'D':
			for (let j = 0; j < data[i][1]; j++)
			{
				y0[0]--;
				mark(i);
				//console.log("D", x0, y0)
			}
			break;	
		}
	}

	//data2[y0][x0] = 'H'
	//data2[y1][x1] = 'T'
	//data2[100][100] = 's'

	for (let y = 0; y < h; y++)
	{
		console.log(y.toString(10).padStart(3, "0"), data2[y].join(""));
	}

	let count = 0;
	for (let y = 0; y < h; y++)
	{
		for (let x = 0; x < w; x++)
		{
			if(data2[y][x] === "#")
				count++;
		}
	}
	console.log(count);
	
}

// 1331
// 1082
// 694
// 554
// 452
// 6115


data = `L 1
D 2
R 1
L 1
R 2
L 1
U 2
L 2
D 1
L 2
U 2
R 2
D 2
L 1
D 2
U 2
L 2
R 2
L 1
U 2
D 2
U 2
D 2
L 1
R 2
L 2
D 2
R 1
D 1
R 2
U 1
R 2
L 2
R 1
U 2
R 1
D 1
U 1
L 2
R 1
D 2
U 1
R 1
U 2
L 1
R 2
U 1
R 2
L 2
R 1
D 2
R 1
D 1
U 2
R 1
D 1
U 1
D 2
L 1
U 1
D 1
R 2
D 2
R 1
D 2
L 2
D 2
U 1
L 1
D 1
L 1
R 2
U 2
L 2
D 2
L 2
D 1
U 2
D 2
L 2
R 1
D 1
L 1
U 1
L 1
U 2
L 1
U 1
D 1
R 1
L 1
R 2
D 1
L 2
D 2
R 1
D 2
R 1
D 1
R 2
L 2
U 1
D 2
L 2
U 2
D 2
R 1
D 1
U 2
R 2
U 2
D 3
L 1
U 2
R 2
D 1
U 1
L 1
U 3
L 3
U 2
L 3
U 3
L 3
D 3
R 1
U 3
R 3
U 3
D 2
R 2
U 2
R 3
L 3
U 1
R 1
D 3
L 1
U 1
R 3
U 3
D 1
L 3
R 1
U 3
D 2
U 2
D 2
R 1
U 2
L 2
U 3
L 1
U 3
D 3
U 3
L 2
R 3
D 1
L 1
R 3
L 2
D 3
U 3
R 2
L 1
R 2
D 3
U 3
R 2
U 3
L 1
R 2
U 3
D 2
U 3
L 3
R 3
D 3
U 1
D 1
U 2
R 2
U 3
D 3
U 2
D 2
L 2
D 2
L 2
R 1
U 2
D 2
L 2
R 1
D 3
L 3
D 2
L 3
D 3
L 2
D 2
L 2
D 2
U 2
L 3
D 3
L 2
U 2
D 2
R 3
D 2
U 3
L 1
R 1
D 2
U 3
R 1
U 2
D 2
R 2
U 3
R 2
U 1
L 1
D 2
R 4
D 1
U 4
D 2
U 3
R 1
D 2
R 3
L 2
D 3
L 3
R 1
D 1
U 2
R 1
L 2
R 2
D 1
L 1
D 1
L 4
D 3
R 1
U 3
R 2
U 1
R 1
D 2
L 2
D 2
U 3
L 4
D 4
R 4
L 2
U 1
R 2
L 2
U 4
D 1
R 4
L 3
R 4
U 1
D 2
L 2
R 2
D 1
L 2
U 1
D 3
R 2
U 2
L 3
D 4
U 3
R 4
L 4
R 1
U 1
D 2
L 3
D 1
U 4
R 2
D 4
L 2
D 3
L 2
D 2
L 1
U 3
L 4
U 3
D 4
L 3
D 1
R 2
D 2
U 4
L 4
U 3
L 4
D 2
R 3
U 1
L 2
R 2
D 2
U 4
L 2
U 4
D 1
U 2
R 4
L 2
U 4
L 4
U 2
D 2
U 4
L 2
U 3
D 2
L 3
U 1
L 2
R 3
D 2
R 5
L 5
D 3
R 4
D 2
R 4
U 4
R 5
D 5
R 5
L 4
U 2
D 2
R 2
U 4
R 2
L 4
R 3
U 2
R 5
D 3
L 4
R 2
L 3
U 4
R 2
D 4
R 2
L 4
D 4
R 3
D 5
U 1
L 2
R 5
L 5
U 5
D 1
U 1
L 3
D 1
U 5
D 2
R 3
U 4
R 4
U 3
L 5
U 5
D 5
R 1
D 3
L 5
R 5
U 2
D 2
U 4
D 3
R 5
U 5
L 3
U 3
L 2
U 4
L 2
R 4
D 3
L 4
U 3
D 1
L 1
D 4
U 4
D 1
R 2
L 5
D 1
U 4
R 2
D 3
R 1
D 1
L 4
D 2
L 4
R 3
U 5
L 1
D 1
L 5
U 5
R 5
U 4
D 5
U 3
D 5
R 2
U 2
R 4
D 1
U 4
R 3
D 2
U 3
R 3
L 1
R 2
D 4
L 5
D 6
L 2
D 3
R 3
U 3
L 3
R 3
U 5
R 4
D 3
R 5
L 4
D 6
U 3
R 2
L 4
D 3
L 3
R 3
U 5
R 1
D 6
L 5
D 3
U 2
R 3
D 3
R 3
U 1
L 5
R 6
D 2
U 4
R 5
U 1
D 2
U 5
R 3
L 4
D 3
L 6
U 6
R 2
U 6
L 3
D 1
R 2
U 2
R 3
U 6
L 4
D 3
R 2
U 2
L 3
R 6
U 3
R 6
L 2
U 3
R 3
D 2
R 6
D 2
L 4
U 6
D 2
U 6
L 1
D 1
L 5
D 3
R 6
L 5
R 6
D 2
R 4
L 1
U 4
L 5
U 5
D 5
R 6
L 5
U 5
R 2
D 6
U 3
R 2
D 3
U 3
L 4
D 5
R 3
U 5
D 3
R 3
L 6
R 3
D 1
U 2
L 4
D 4
U 2
L 4
U 6
D 5
L 6
U 5
D 1
U 6
D 5
U 2
R 7
U 6
R 2
D 2
R 7
D 4
L 7
U 5
L 2
U 4
D 2
R 2
L 2
D 3
U 3
D 6
L 7
R 5
D 5
L 7
U 1
D 5
L 6
U 1
R 1
D 7
U 5
D 4
L 2
U 1
D 2
U 6
D 5
U 1
R 1
L 3
D 3
U 3
L 5
D 5
U 3
R 6
L 6
R 1
U 2
D 3
L 2
U 6
D 3
R 3
U 2
D 1
L 4
U 2
L 7
U 4
R 2
D 6
L 4
D 6
L 1
D 3
L 6
D 4
R 6
U 3
D 1
L 4
R 6
U 5
R 5
U 5
R 3
L 6
U 1
D 2
U 3
D 1
L 7
D 6
U 4
D 5
L 6
U 7
L 2
U 4
L 6
R 6
U 3
D 4
R 6
U 1
D 5
R 5
U 6
R 4
U 2
D 2
U 2
R 3
L 6
U 6
R 2
L 2
R 6
L 1
D 6
R 2
D 2
L 8
U 6
R 7
L 7
D 3
L 3
R 8
U 2
L 7
D 4
R 5
D 4
R 1
U 5
D 2
R 6
L 7
U 2
L 4
R 1
D 2
U 4
D 3
R 2
U 1
L 5
U 5
L 5
R 7
D 6
R 2
D 7
R 1
L 6
R 8
D 7
R 3
U 6
L 7
R 7
U 8
L 4
D 4
U 6
L 5
R 2
L 2
R 7
D 8
L 7
D 2
R 1
U 1
R 6
D 5
U 8
R 5
L 1
R 7
U 1
L 7
D 5
L 6
R 5
L 3
U 7
L 8
R 6
U 6
R 4
U 1
R 8
U 1
D 1
U 8
D 7
R 1
L 8
R 1
L 6
D 8
L 6
U 7
R 8
D 4
U 6
R 7
L 8
U 4
L 4
D 6
R 5
L 1
U 2
D 1
L 3
D 7
R 6
L 3
R 5
L 1
D 5
L 3
R 5
U 5
R 7
U 6
D 6
U 2
R 8
D 3
L 7
D 5
U 9
R 5
L 9
D 5
R 2
U 6
L 5
U 9
L 7
D 3
L 6
U 3
R 5
D 7
R 3
L 5
R 2
L 6
R 9
L 8
D 4
L 6
U 8
L 8
D 4
R 2
U 1
D 6
U 6
R 3
L 8
U 2
L 8
D 9
R 9
L 1
D 3
R 6
D 6
L 9
D 3
R 9
L 2
D 8
U 2
R 8
L 3
D 9
L 6
D 9
U 3
D 9
R 5
L 2
D 7
L 6
U 2
L 8
D 9
L 5
R 7
L 3
D 7
U 4
L 8
R 9
L 5
R 7
D 7
R 6
D 6
L 6
R 8
L 6
D 4
R 5
D 2
L 5
U 2
D 8
R 9
L 3
U 1
L 6
D 1
R 9
L 4
U 1
R 4
L 1
D 3
R 5
D 9
L 4
D 3
U 9
D 7
L 5
R 3
L 7
R 8
L 1
U 6
L 8
D 8
R 6
L 1
U 1
D 7
R 10
U 3
D 4
U 5
D 3
R 7
U 8
D 3
U 8
D 9
L 10
D 5
L 7
U 3
D 3
U 5
R 5
U 7
L 2
D 6
U 6
R 6
U 9
R 9
L 5
R 1
L 4
D 3
U 4
D 8
U 3
R 7
D 1
U 5
L 6
R 4
U 2
L 8
U 10
D 8
U 8
R 6
L 1
U 9
R 9
D 10
U 8
L 9
D 5
U 9
D 9
U 6
D 10
L 9
R 4
D 3
R 10
D 6
R 8
D 1
U 4
L 1
D 6
R 1
L 1
D 7
R 1
L 4
R 5
U 9
R 5
U 1
R 9
D 3
U 4
D 6
L 3
U 10
D 3
U 10
R 10
D 7
L 5
R 4
D 4
L 1
R 7
L 4
R 5
D 2
L 9
D 9
L 5
D 8
R 1
D 3
L 8
D 4
L 8
U 8
L 7
D 7
U 4
D 7
R 10
U 2
R 7
D 4
L 6
D 4
U 3
L 4
U 8
D 7
L 9
R 4
D 9
U 10
L 7
U 11
R 5
U 2
D 4
U 10
L 3
R 5
U 8
D 10
L 7
D 7
R 2
D 5
U 6
L 1
U 11
R 6
D 9
U 1
L 4
U 2
D 1
L 3
D 6
L 8
U 9
D 9
L 5
D 3
R 2
L 11
D 9
U 9
R 10
U 7
D 11
R 4
L 11
U 6
R 2
U 6
D 1
U 8
L 11
R 5
L 11
U 10
R 2
L 3
D 8
U 7
R 11
L 9
U 7
D 8
R 2
L 2
R 5
L 10
R 4
D 3
R 5
L 7
D 2
U 7
R 2
U 10
L 1
D 1
U 2
R 2
D 1
R 10
L 6
U 8
R 3
D 8
U 10
D 5
R 3
U 1
L 2
D 5
R 11
U 2
R 11
L 9
U 1
R 5
L 6
U 5
D 1
U 11
D 1
R 7
L 9
U 5
D 11
L 9
U 1
L 4
D 1
R 3
D 10
U 9
L 3
R 11
L 9
R 12
U 8
D 9
L 12
D 1
U 10
R 11
U 9
R 8
U 11
R 8
U 6
D 7
R 7
U 10
L 10
U 4
L 10
R 2
D 6
L 10
D 10
R 10
U 1
L 7
D 8
L 12
R 9
U 9
L 10
R 11
D 12
R 6
U 10
R 3
D 12
U 12
R 1
D 3
R 5
U 8
D 2
U 4
D 12
L 3
D 11
U 9
L 2
R 7
L 5
U 2
R 5
L 5
U 1
L 4
R 12
L 11
R 8
D 4
U 5
R 5
U 9
R 7
L 6
R 7
L 1
U 6
D 6
L 3
U 1
L 4
U 6
R 5
L 9
U 12
D 11
R 11
U 11
D 7
U 3
L 12
U 7
L 2
D 3
U 10
D 2
U 6
L 9
R 2
D 12
R 11
U 12
L 1
D 9
R 4
D 4
U 5
D 12
R 9
U 6
L 8
D 5
U 6
D 10
R 3
L 1
U 4
R 2
L 8
U 9
L 6
D 1
L 6
U 5
R 6
D 4
L 7
U 2
R 12
U 12
R 13
U 6
R 7
D 12
R 3
U 3
D 10
U 12
R 11
D 3
U 11
L 6
R 5
D 7
L 10
D 5
L 7
U 8
L 3
U 5
R 1
L 1
R 1
D 10
L 2
R 1
U 9
L 10
U 13
R 3
D 9
R 6
D 1
R 7
U 8
D 7
U 13
R 3
U 11
L 13
R 8
L 13
D 6
L 8
U 6
D 10
R 3
D 9
R 11
U 1
L 11
U 5
R 6
U 6
D 10
R 5
L 1
R 6
U 11
L 8
R 3
D 7
U 4
R 5
D 8
U 7
L 6
U 6
L 9
U 10
R 5
L 7
R 5
L 13
U 7
D 1
L 7
U 2
R 9
L 8
U 5
L 13
R 11
D 4
R 6
U 13
D 13
L 9
R 8
D 12
R 6
D 1
L 12
R 8
U 1
L 7
R 13
D 13
L 13
U 7
D 7
L 4
U 13
R 7
U 14
D 11
R 7
U 3
L 9
U 8
L 3
R 14
D 2
U 4
R 1
L 13
U 2
D 5
U 2
R 7
U 14
D 10
L 1
D 7
L 2
U 14
L 14
R 12
U 2
D 5
L 10
U 3
R 11
D 12
R 14
U 7
R 10
D 9
L 13
D 13
R 12
D 14
R 3
D 4
U 8
L 11
U 9
L 5
U 1
R 12
D 6
U 1
R 1
L 5
U 5
L 1
D 5
U 4
D 13
U 7
R 5
D 11
U 9
R 3
D 11
L 9
D 8
R 8
U 8
L 6
R 3
D 5
L 10
U 1
L 4
R 13
L 5
D 8
L 5
U 11
L 8
R 12
L 6
R 12
U 5
D 12
R 12
D 4
U 9
L 4
R 11
L 2
R 11
U 12
D 14
L 2
U 5
L 7
D 8
U 12
D 4
R 4
L 13
D 9
U 11
R 1
D 2
U 8
D 10
U 8
L 6
U 9
R 8
L 12
U 9
R 3
U 14
R 3
U 9
L 11
U 2
L 10
D 6
U 2
L 4
D 12
L 8
R 15
D 11
L 9
R 6
U 9
R 11
U 7
R 13
L 9
D 9
U 2
R 9
U 11
R 15
U 4
L 4
U 6
D 3
R 10
L 5
U 8
D 6
R 6
D 6
U 10
L 7
R 9
D 6
U 12
R 15
L 8
D 9
U 15
D 6
L 14
D 2
R 15
U 14
D 15
U 13
R 1
U 11
R 8
U 13
D 6
L 2
R 1
U 7
R 6
D 13
U 13
R 15
D 15
R 1
U 14
D 9
U 5
L 6
R 9
L 13
D 6
U 2
R 7
D 3
L 10
R 7
L 2
U 4
D 1
L 9
U 9
R 7
U 3
D 7
U 1
R 12
L 11
R 7
L 14
R 3
L 15
R 15
U 5
R 12
D 9
R 5
U 12
L 12
U 6
L 4
R 2
U 2
L 5
D 3
R 12
D 8
U 16
D 16
L 11
D 7
U 15
R 13
U 5
D 6
L 12
D 2
L 16
D 16
L 8
U 9
R 12
D 16
U 2
R 1
L 12
U 9
D 15
U 16
L 14
D 4
U 5
L 2
R 5
D 9
L 4
R 13
L 2
U 2
R 4
L 15
R 13
D 11
R 13
L 13
U 14
R 8
U 5
D 10
L 2
U 15
D 3
L 8
U 2
L 14
U 3
R 16
U 4
D 1
R 5
L 3
R 1
L 16
D 16
L 12
U 14
R 12
U 8
R 1
L 1
R 9
U 9
R 12
L 1
U 9
L 14
U 11
L 8
U 10
L 7
U 1
L 11
R 2
D 12
U 3
R 2
L 14
D 1
L 12
R 16
D 16
R 8
L 15
R 3
L 10
D 14
R 9
U 2
D 4
U 7
D 2
R 11
D 6
U 2
R 4
L 2
R 6
L 11
R 9
L 1
R 8
D 3
R 4
U 14
D 7
L 11
R 14
L 8
D 9
L 6
D 15
R 4
D 9
U 7
R 6
L 13
D 11
R 10
L 17
R 17
D 17
R 7
U 15
D 14
R 6
U 14
R 5
U 17
R 7
L 17
U 14
L 14
R 13
U 4
R 14
U 10
L 16
U 8
R 2
U 4
D 16
U 4
L 14
R 7
D 13
U 10
L 10
R 3
L 6
D 7
R 13
L 6
U 7
R 16
L 10
U 6
L 6
U 11
D 6
U 5
L 4
U 17
R 6
L 3
D 5
R 4
U 1
L 14
R 10
L 4
U 9
R 7
D 2
R 6
U 12
D 15
R 15
L 13
U 5
L 12
D 3
U 15
L 9
U 3
D 12
R 15
U 7
L 7
R 11
L 14
R 2
D 6
R 6
D 9
R 2
L 12
R 2
U 12
R 8
L 2
U 12
R 2
D 17
L 8
D 1
U 16
D 1
R 5
L 9
U 4
L 1
U 9
L 11
R 9
D 7
R 16
D 12
R 3
U 7
L 4
R 7
L 8
D 9
U 10
D 7
U 10
D 5
U 14
D 5
U 11
R 15
U 8
D 12
U 8
L 18
U 16
D 16
U 3
R 5
D 2
U 10
L 17
R 5
U 15
R 9
D 5
U 9
L 12
D 17
R 14
L 4
R 14
L 17
D 9
L 10
D 17
R 1
U 2
R 7
U 13
R 1
U 17
R 4
L 3
D 14
U 11
L 15
R 6
U 4
D 8
L 17
D 3
R 13
U 10
R 4
U 5
R 3
U 16
D 6
L 5
R 18
L 11
D 16
U 7
R 7
U 1
R 14
U 14
R 4
D 3
R 12
D 13
U 5
D 8
R 17
L 9
D 4
L 13
U 8
R 13
D 5
U 17
L 11
U 13
D 9
L 8
R 14
L 15
D 10
R 11
D 8
L 10
U 3
L 3
R 12
L 9
R 17
U 10
L 17
U 13
L 12
U 1
D 2
R 1
L 16
R 11
D 15
L 8
R 10
L 12
U 3
L 17
U 7
R 6
U 16
R 1
L 3
R 5
L 11
R 4
D 10
L 1
R 4
U 12
L 18
R 8
L 7
R 16
U 19
R 10
U 11
D 12
R 6
U 17
L 16
D 19
L 9
U 1
R 12
U 12
R 15
D 4
L 15
R 4
L 9
R 15
L 10
R 7
L 16
U 16
L 19
U 5
L 4
U 12
L 6
U 5
R 17
U 11
R 6
U 15
L 9
D 4
R 2
L 7
R 16
L 13
U 19
R 4
U 13
L 18
D 19
U 15
R 13
L 11
U 18
D 2
U 9
D 18
L 13
D 13
L 11
U 3
D 11
U 16
R 14
D 6
L 12
D 9
R 2
D 14
L 12
R 15
D 2
R 11
U 7
D 9
L 16
R 12
L 12
D 14
U 2
D 12
R 8
U 9
D 10
U 12
L 17
U 19
L 4
U 15
R 12
L 11
D 12
L 8
U 3
R 7
L 2
D 4
U 17`;

main();