let generate_blueprints = () => {

	data2 = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`

	data = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 4 ore and 18 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 4: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 5: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 6: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 7: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 8: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 13 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 9: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 8 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 11: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 12: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 13: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 14: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 3 ore and 17 obsidian.
Blueprint 15: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 3 ore and 17 obsidian.
Blueprint 16: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 17 obsidian.
Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 18: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 9 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 19: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 20: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 13 clay. Each geode robot costs 3 ore and 12 obsidian.
Blueprint 21: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 9 obsidian.
Blueprint 22: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 23: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 4 ore and 12 obsidian.
Blueprint 24: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 25: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 11 clay. Each geode robot costs 2 ore and 16 obsidian.
Blueprint 26: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 3 ore and 20 obsidian.
Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 2 ore and 13 obsidian.
Blueprint 30: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 4 ore and 8 obsidian.`

	data = data.replaceAll("Blueprint ", "")
	data = data.replaceAll(": Each ore robot costs ", ",")
	data = data.replaceAll(" ore. Each clay robot costs ", ",")
	data = data.replaceAll(" ore. Each obsidian robot costs ", ",")
	data = data.replaceAll(" ore and ", ",")
	data = data.replaceAll(" clay. Each geode robot costs ", ",")
	data = data.replaceAll(" obsidian.", "")

	data = data.split("\n").map(el=>el.split(",").map(el2=>Number(el2)))

	return data;
}
let convert_blueprint = (raw) => {
	let blueprint = {
			id: raw[0],
			ore: {
				ore: raw[1],
			},
			clay: {
				ore: raw[2],
			},
			obsidian: {
				ore: raw[3],
				clay: raw[4],
			},
			geode: {
				ore: raw[5],
				obsidian: raw[6],
			}
	}
	return blueprint;
}
let generate_builds = (max_turns, max_geode, blueprint, max_depth) => {

	const max = (arr) => arr.reduce((a, b) => Math.max(a, b), 0);

	let makeNode = (turns, depth) =>
	{
		turns = turns.map(el=>el+1);
		return({
			turns,
			depth,
			max:0,
			leaves: [],
		});
	}

	let iterate = (hi, lo, result, results, depth) => 
	{
		while (hi > lo)
		{
			if (!result.includes(hi) && !result.includes(lo))
			{
				let temp = [...result];
				temp.push(hi)
				if (lo !== 0) {
					temp.push(lo)
				}
				results.push(makeNode(temp, depth))
			}
			if (!result.includes(hi-1) && !result.includes(lo) && lo !== 0)
			{
				iterate(hi-1, 1, [...result, lo], results, depth)
			}
			hi--;
			lo++;
		}
		return results
	}

	let value_array = [max_geode, blueprint.geode.obsidian, blueprint.obsidian.clay, blueprint.clay.ore-1]
	let add_leaves = (root, depth, prev_max) => {
		if (depth === max_depth) return;
		for (let i = 0; i < root.length; i++)
		{
			let level = root[i]
			iterate(value_array[depth], 0, [], level.leaves, depth+1)
			for (let j = 0; j < level.leaves.length; j++)
			{
				level.leaves[j].max = max(level.leaves[j].turns) + level.max

				if (level.leaves[j].max > max_turns) {
					level.leaves.splice(j, 1)
					j--;
					continue;
				}
			}
			
			add_leaves(level.leaves, depth+1, level.max)
		}
	}

	let cull_leaves = (root, depth) => {
		if (depth === max_depth) return;
		for (let i = 0; i < root.length; i++)
		{
			if (root[i].leaves.length === 0)
			{
				root.splice(i, 1)
				i--;
			}
			else
			{
				cull_leaves(root[i].leaves, depth+1)
			}
		}
	}

	let all_builds = [];
	let make_builds = (root, depth, build, prev_max) =>
	{
		for (let i = 0; i < root.length; i++)
		{
			let level = root[i]
			let temp = build.map(el=>el.map(el2=>el2))
			let turn = max_turns - prev_max
			level.turns.sort((a, b)=>b-a);
			level.turns.forEach((el,ix)=>temp[turn-el][depth-1]=ix+1)
			// level.turns.forEach((el,ix)=>temp[turn-el][depth-1]=1)
			if (depth === max_depth)
			{
				level.leaves = temp;
				all_builds.push(temp);
				continue;
			}
			make_builds(level.leaves, depth+1, temp, level.max)
		}
	}

	let root = [makeNode([], 0)]
	add_leaves(root, 0, 0);

	cull_leaves(root, 0);
	cull_leaves(root, 0);
	cull_leaves(root, 0);
	cull_leaves(root, 0);

	//console.dir(root, {depth:15});

	make_builds(root, 0, Array.from({length:max_turns}).map(el => [0, 0, 0, 0]), 0)
	return all_builds;
}

let generate_resources = (builds, blueprint) => {

	let resource_result = [];

	for (let j = 0; j < builds.length; j++)
	{
		let example = builds[j];
		let resources = Array.from({length:example.length}).map(el => [0, 0, 0, 0]);

		for (let i = 0; i < example.length; i++)
		{
			if (example[i][0] !== 0)
			{
				let ore = blueprint.geode.ore;
				let obs = blueprint.geode.obsidian;
				let temp_i = i;
				while(ore>0)
				{
					resources[temp_i--][3] += ore--;
				}
				temp_i = i;
				while(obs>0)
				{
					resources[temp_i--][1] += obs--;
				}
			}
		}

		resource_result.push(resources)
	}
	return resource_result;
}

let result_max = [];

const run_build_blueprint = (blueprint, build_order, result_index, goal, max_time) => {

	let run_test = (time, robots, resources, building) =>
	{
		if (result_max[result_index] === goal) return;

		robots = [...robots];
		resources = [...resources];
		building = [...building]

		let busy = false;

		let build_req = build_order[time]
		if (build_req[0] > robots[0])
		{
			if (resources[1] < blueprint.geode.obsidian ||
				resources[3] < blueprint.geode.ore)
			{
				return;
			}
			else
			{
				building = [1, 0, 0, 0];
				resources[1] -= blueprint.geode.obsidian
				resources[3] -= blueprint.geode.ore
				busy = true;
			}
		}
		else if (building[3] === 1)
		{
			if (resources[3] < blueprint.ore.ore)
			{
				return;
			}
			else
			{
				resources[3] -= blueprint.ore.ore
				busy = true;
			}
		}
		else if (building[2] === 1)
		{
			if (resources[3] < blueprint.clay.ore)
			{
				return;
			}
			else
			{
				resources[3] -= blueprint.clay.ore
				busy = true;
			}
		}
		else if (building[1] === 1)
		{
			if (resources[2] < blueprint.obsidian.clay || 
				resources[3] < blueprint.obsidian.ore)
			{
				return;
			}
			else
			{
				resources[2] -= blueprint.obsidian.clay
				resources[3] -= blueprint.obsidian.ore
				busy = true;
			}
		}
		else if (building[0] === 1)
		{
			if (resources[1] < blueprint.geode.obsidian ||
				resources[3] < blueprint.geode.ore)
			{
				return;
			}
			else
			{
				resources[1] -= blueprint.geode.obsidian
				resources[3] -= blueprint.geode.ore
				busy = true;
			}
		}


		if (busy === false)
		{
			if (resources[3] >= blueprint.ore.ore)
			{
				run_test(time, robots, resources, [0, 0, 0, 1] )
			}
			if (resources[3] >= blueprint.clay.ore)
			{
				run_test(time, robots, resources, [0, 0, 1, 0])
			}
			if (resources[2] >= blueprint.obsidian.clay &&
				resources[3] >= blueprint.obsidian.ore)
			{
				run_test(time, robots, resources, [0, 1, 0, 0])
			}
			if (resources[1] >= blueprint.geode.obsidian &&
				resources[3] >= blueprint.geode.ore)
			{
				run_test(time, robots, resources, [1, 0, 0, 0])
			}
		}

		resources[0] += robots[0];
		resources[1] += robots[1];
		resources[2] += robots[2];
		resources[3] += robots[3];

		robots[0] += building[0];
		robots[1] += building[1];
		robots[2] += building[2];
		robots[3] += building[3];

		if (robots[3] < build_req[3]) return;
		if (robots[2] < build_req[2]) return;
		if (robots[1] < build_req[1]) return;
		if (robots[0] < build_req[0]) return;

		// building[0] = 0;
		// building[1] = 0;
		// building[2] = 0;
		// building[3] = 0;

		time++;
		if (time === max_time) {
			if (resources[0] > result_max[result_index]) result_max[result_index] = resources[0];
			return;
		}
		run_test(time, robots, resources, [ 0, 0, 0, 0 ])
	}
	run_test(0, [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ])
}


let max_time = 24;

let all_blueprints = generate_blueprints();


let results = [];

for (let b = 0; b < all_blueprints.length; b++)
{

	if (result_max[b] === undefined) result_max[b] = 0;
	let goal = 1;
	let blueprint = convert_blueprint(all_blueprints[b]);
	while(true)
	{
		let builds = generate_builds(max_time, goal, blueprint, 2);
		for (let i = 0; i < builds.length; i++)
		{
			console.log("[" + results.join(', ') + "]", "blueprint: " + (b+1) + " / " + all_blueprints.length + ", goal: " + goal + ", build: " + (i+1) + " / " + builds.length);
			run_build_blueprint(blueprint, builds[i], b, goal, max_time);
			if (result_max[b] === goal) break;
		}
		if (result_max[b] < goal) break;
		goal++;
	}
	results[b] = result_max[b] * blueprint.id
}


console.log(result_max)
console.log(results)
console.log(results.reduce((x, y)=>x+y))

// 1156