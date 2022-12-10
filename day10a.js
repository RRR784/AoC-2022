let data;

const main = () => {

	data = data.split("\n").map(el => el.split(" ").map(el2 => {
		if (el2 === 'noop') return 0;
		else return Number(el2)
	}))
	console.log(data)
	console.log(data.length)

	cycle = 0;
	register = 1;
	signal = 0;

	let check = () => {
		if (
			cycle === 20 ||
			cycle === 60 ||
			cycle === 100 ||
			cycle === 140 ||
			cycle === 180 ||
			cycle === 220
		)
		{
			signal += cycle * register
			console.log(cycle, register, signal);
		}
	}

	for (let i = 0; i < data.length; i++)
	{
		if(data[i][0] === 0)
		{
			cycle++
			check();
		}
		else
		{
			cycle++
			check()
			cycle++
			check()
			register += data[i][1]
		}
	}
	
}

// 13940
// 14349

data = `noop
noop
noop
addx 5
addx 1
addx 4
addx 1
noop
addx 4
noop
addx 1
addx 4
addx 8
addx -7
addx 3
addx 1
noop
addx 4
addx 2
addx 5
addx -1
noop
addx -37
noop
noop
addx 3
addx 2
addx 13
addx 12
addx -15
addx -2
addx 2
addx -11
addx 18
addx 2
addx -15
addx 16
addx 5
addx 2
addx 5
noop
noop
noop
addx 3
addx -2
addx -38
noop
addx 3
addx 4
noop
noop
noop
noop
noop
addx 5
addx 5
noop
noop
addx 21
addx -17
addx 6
noop
noop
noop
noop
addx 5
noop
noop
noop
noop
noop
addx 3
addx 5
addx -38
noop
noop
addx 5
addx -2
addx 1
addx 7
noop
addx 22
addx -18
addx -11
addx 27
addx -13
addx 2
addx 5
addx -8
addx 9
addx 2
noop
addx 7
noop
addx 1
noop
addx -38
noop
addx 2
addx 5
addx -3
noop
addx 8
addx 11
addx -6
noop
addx 24
addx -31
addx 10
addx 2
addx 5
addx 3
noop
addx 2
addx -29
addx 21
addx 11
addx 5
addx -39
addx 4
addx -2
addx 2
addx 7
noop
addx -1
addx 2
noop
addx 4
noop
addx 1
addx 2
addx 5
addx 2
noop
noop
addx -6
addx 9
addx -18
addx 25
addx 3
noop
addx -17
noop`;

main();