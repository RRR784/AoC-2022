let data, data2;

const main = () => {

	data = data.replaceAll("Valve ", "");
	data = data.replaceAll(" has flow rate=", ",");
	data = data.replaceAll(" tunnels lead to valves ", "");
	data = data.replaceAll(" tunnel leads to valve ", "");
	data = data.replaceAll(", ", ",");
	data = data.split('\n').map(el => el.split(";").map(el2 => el2.split(",")));

	let pressures = {};
	let tunnels = {}
	let opens = {};
	let valves = [];

	for (let i = 0; i < data.length; i++)
	{
		let valve = data[i][0][0];
		let pressure = Number(data[i][0][1]);
		let tunnel = data[i][1];

		valves.push(valve)
		for(let j = 0; j < tunnel.length; j++)
		{
			pressures[valve] = pressure;
			tunnels[valve] = tunnel;
			opens[valve] = false;

		}
	}

	let important = [];

	for (let i = 0; i < valves.length; i++)
	{
		let pressure = pressures[valves[i]];
		if (pressure>0) important.push(valves[i])
	}

	let findPath2 = (start, destination) => {
		let flag = false;
		let steps = 0;
		let path = [];
		let findPath = (current, thread, plan) => {
			plan = [...plan];
			plan.push(current)
			if (current === destination)
			{
				steps = thread;
				path = plan;
				flag = true
				return;
			}
			thread++;
			if (thread > 30) return;
			if (thread > steps && flag === true) return;
			for (let i = 0; i < tunnels[current].length; i++)
			{
				findPath(tunnels[current][i], thread, plan)
			}
		}
		findPath(start, steps, path);
		return path;
	}

	let first = {};
	for (let i = 0; i < important.length; i++)
	{
		first[important[i]] = findPath2('AA', important[i])
	}

	//console.log(first)

	let paths = {}
	for (let x = 0; x < important.length; x++)
	{
		let self = important[x]
		let each = {};
		for (let i = 0; i < important.length; i++)
		{
			let current = important[i]
			if (current === self) continue;
			each[current] = findPath2(self, current)
		}
		paths[self] = each
	}

	//console.log(paths)

	let maxp = 0;

	let r = (time, pressure, position, opens, route, iteration) => {
		opens = {...opens};
		let tick = () => {
			Object.entries(opens).forEach((e)=>e[1]?pressure+=pressures[e[0]]:0)
			time--;
			if(time === 0)
			{
				if (pressure > maxp) maxp = pressure;
				return false;
			}
			return true;
		}

		if (pressures[position] === 0) opens[position] = true
		if (opens[position] === false)
		{
			if (!tick()) return;
			opens[position] = true
		}

		if (!tick()) return;

		iteration++;
		if (iteration < route.length)
		{
			r(time, pressure, route[iteration], opens, route, iteration)
		}
		else
		{
			let dests = Object.keys(paths[position])
			let next_paths = Object.values(paths[position])

			for(let i = 0; i < next_paths.length; i++)
			{
				if (opens[dests[i]] === false)
					r(time, pressure, next_paths[i][1], opens, next_paths[i], 1)
			}
		}
	}

	for(let i = 0; i < Object.keys(first).length; i++)
	{
			let dests = Object.keys(first)
			let next_paths = Object.values(first)
			r(30, 0, next_paths[i][0], opens, next_paths[i], 0)
	}

	console.log(maxp)

}

data = `Valve PL has flow rate=4; tunnels lead to valves LI, GD, LB, IA, LZ
Valve LB has flow rate=0; tunnels lead to valves PL, VR
Valve QS has flow rate=0; tunnels lead to valves MG, YL
Valve RM has flow rate=17; tunnels lead to valves OQ, UN
Valve QM has flow rate=0; tunnels lead to valves RD, RO
Valve LI has flow rate=0; tunnels lead to valves AF, PL
Valve VR has flow rate=0; tunnels lead to valves YL, LB
Valve SJ has flow rate=0; tunnels lead to valves RO, TU
Valve PZ has flow rate=14; tunnels lead to valves KU, HE
Valve OQ has flow rate=0; tunnels lead to valves RM, OC
Valve YT has flow rate=0; tunnels lead to valves PX, IO
Valve TU has flow rate=5; tunnels lead to valves WS, GZ, MG, SJ, GD
Valve PC has flow rate=7; tunnels lead to valves RY, WK, OG, PD
Valve HE has flow rate=0; tunnels lead to valves PZ, OG
Valve IO has flow rate=20; tunnels lead to valves YT, TX
Valve OC has flow rate=19; tunnels lead to valves OQ, PD
Valve AA has flow rate=0; tunnels lead to valves NY, IA, WK, FU, NU
Valve UN has flow rate=0; tunnels lead to valves JY, RM
Valve NY has flow rate=0; tunnels lead to valves AA, WA
Valve HU has flow rate=0; tunnels lead to valves WA, RC
Valve GD has flow rate=0; tunnels lead to valves PL, TU
Valve WK has flow rate=0; tunnels lead to valves PC, AA
Valve RY has flow rate=0; tunnels lead to valves PV, PC
Valve GX has flow rate=0; tunnels lead to valves QX, YL
Valve RC has flow rate=0; tunnels lead to valves HU, RL
Valve TX has flow rate=0; tunnels lead to valves IO, WA
Valve PV has flow rate=12; tunnel leads to valve RY
Valve PP has flow rate=25; tunnel leads to valve KU
Valve RL has flow rate=9; tunnel leads to valve RC
Valve OG has flow rate=0; tunnels lead to valves PC, HE
Valve PD has flow rate=0; tunnels lead to valves OC, PC
Valve RO has flow rate=8; tunnels lead to valves SJ, QX, MO, QM
Valve QX has flow rate=0; tunnels lead to valves GX, RO
Valve WA has flow rate=6; tunnels lead to valves TX, AF, RG, HU, NY
Valve PX has flow rate=0; tunnels lead to valves YT, OE
Valve GZ has flow rate=0; tunnels lead to valves TU, FU
Valve RG has flow rate=0; tunnels lead to valves OE, WA
Valve MG has flow rate=0; tunnels lead to valves QS, TU
Valve AF has flow rate=0; tunnels lead to valves WA, LI
Valve WS has flow rate=0; tunnels lead to valves ND, TU
Valve OE has flow rate=18; tunnels lead to valves RG, PX
Valve YL has flow rate=3; tunnels lead to valves VR, GX, QS, NU
Valve ND has flow rate=0; tunnels lead to valves JY, WS
Valve FU has flow rate=0; tunnels lead to valves GZ, AA
Valve NU has flow rate=0; tunnels lead to valves YL, AA
Valve JY has flow rate=11; tunnels lead to valves UN, RD, ND
Valve IA has flow rate=0; tunnels lead to valves AA, PL
Valve KU has flow rate=0; tunnels lead to valves PZ, PP
Valve RD has flow rate=0; tunnels lead to valves JY, QM
Valve MO has flow rate=0; tunnels lead to valves RO, LZ
Valve LZ has flow rate=0; tunnels lead to valves PL, MO`

main();