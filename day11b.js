let monkeys;

const main = () => {

	// console.log(monkeys)
	// console.log(monkeys.length)

	for (let r = 0; r < 10000 ; r++)
	{
		for (let i = 0; i < monkeys.length; i++)
		{
			while (monkeys[i].items.length > 0)
			{
				let worry = monkeys[i].items[0];
				worry = monkeys[i].worry(worry)
				worry = worry % (11 * 2 * 5 * 17 * 19 * 7 * 3 * 13)
				let item = monkeys[i].items.shift()
				if (monkeys[i].test(worry))
				{
					monkeys[monkeys[i].case[0]].items.push(worry)
				}
				else
				{

					monkeys[monkeys[i].case[1]].items.push(worry)
				}
				monkeys[i].count++;
			}
		}
	}

	for (let i = 0; i < monkeys.length; i++)
	{
		console.log(i, monkeys[i].count)
	}

// 9300
// 136524
// 32379843072


}

monkeys = [
		{ // 0
			items: [92, 73, 86, 83, 65, 51, 55, 93],
			worry : (x) => x * 5,
			test : (x) => x % 11 === 0,
			case: [3, 4],
			count: 0
		},
		{ // 1
			items: [99, 67, 62, 61, 59, 98],
			worry : (x) => x * x,
			test : (x) => x % 2 === 0,
			case: [6, 7],
			count: 0
		},
		{ // 2
			items: [81, 89, 56, 61, 99],
			worry : (x) => x * 7,
			test : (x) => x % 5 === 0,
			case: [1, 5],
			count: 0
		},
		{ // 3
			items: [97, 74, 68],
			worry : (x) => x + 1,
			test : (x) => x % 17 === 0,
			case: [2, 5],
			count: 0
		},
		{ // 4
			items: [78, 73],
			worry : (x) => x + 3,
			test : (x) => x % 19 === 0,
			case: [2, 3],
			count: 0
		},
		{ // 5
			items: [50],
			worry : (x) => x + 5,
			test : (x) => x % 7 === 0,
			case: [1, 6],
			count: 0
		},
		{ // 6
			items: [95, 88, 53, 75],
			worry : (x) => x + 8,
			test : (x) => x % 3 === 0,
			case: [0, 7],
			count: 0
		},
		{ // 7
			items: [50, 77, 98, 85, 94, 56, 89],
			worry : (x) => x + 2,
			test : (x) => x % 13 === 0,
			case: [4, 0],
			count: 0
		},
	]

main();