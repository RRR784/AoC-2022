let generate_blueprints = (which) => {

	data = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 4 ore and 18 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 10 obsidian.`

	data2 = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`

	data1 = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 19 obsidian.
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

let generate_builds = (max_turns, max_geode, max_depth, blueprint) => {

	let iterate_turns = (hi, lo, destination, result=[]) => {
		while (hi > lo)
		{
			if (!result.includes(hi) && !result.includes(lo))
			{
				let turns = [...result];
				turns.push(hi)
				if (lo !== 0) {
					turns.push(lo)
				}
				turns = turns.map(el=>el+1); // add one turn for building
				turns.sort((a, b)=>b-a);
				destination.push([0, turns, []])
			}
			if (!result.includes(hi-1) && !result.includes(lo) && lo !== 0)
			{
				let turns = [...result];
				turns.push(lo)
				iterate_turns(hi-1, 1, destination, turns)
			}
			hi--;
			lo++;
		}
	}
	let add_leaves = (root, depth) => {
		if (depth === max_depth) return;
		for (let i = 0; i < root.length; i++)
		{	
			let root_leaves = root[i];
			let leaf_nodes = root_leaves[2];
			iterate_turns(prices[depth], 0, leaf_nodes)

			for (let j = 0; j < leaf_nodes.length; j++)
			{
				let leaf = leaf_nodes[j]
				leaf[0] = root_leaves[0] + leaf[1][0]
				if (leaf[0] > max_turns) {
					leaf_nodes.splice(j, 1)
					j--;
					continue;
				}
			}
			add_leaves(leaf_nodes, depth+1)
		}
	}
	let cull_leaves = (leaf_list, depth, count=0) => {
		let run_cull = (leaf_list, depth) =>
		{
			if (depth === max_depth) return;
			for (let i = 0; i < leaf_list.length; i++)
			{
				if (leaf_list[i][2].length === 0)
				{
					count++;
					leaf_list.splice(i, 1)
					i--;
				}
				else
				{
					run_cull(leaf_list[i][2], depth+1)
				}
			}
		}
		run_cull(leaf_list, depth);
		console.log("leaves culled:", count)
		return count;
	}
	let make_builds = (root) =>	{
		// let empty_build = Array.from({length:max_turns*4}).map(el => 0);
		let empty_build = Array.from({length:max_turns}).map(el => [0, 0, 0, 0])
		let all_builds = [];
		run_make = (root, depth=0, build=empty_build, prev_max=0) =>
		{
			for (let i = 0; i < root.length; i++)
			{
				let level = root[i]
				let turn = max_turns - prev_max
				// temp = [...build];
				let temp = build.map(el=>el.map(el2=>el2))
				// level[1].forEach((el,ix)=>build[(turn-el)*4+depth-1]=ix+1)
				level[1].forEach((el,ix)=>temp[turn-el][depth-1]=ix+1)
				if (depth === max_depth)
				{
					all_builds.push(temp);
					continue;
				}
				run_make(level[2], depth+1, temp, level[0])
			}
		}
		run_make(root)
		return all_builds;
	}

	// let id = blueprint[0];
	// let ore_ore = blueprint[1];
	let clay_ore = blueprint[2];
	// let obsidian_ore = blueprint[3];
	let obsidian_clay = blueprint[4];
	// let geode_ore = blueprint[5];
	let geode_obsidian = blueprint[6];

	let prices = [max_geode, geode_obsidian, obsidian_clay, clay_ore-1]

	let root = [[0, [],[]]];
	add_leaves(root, 0)
	while(cull_leaves(root, 0));
	let builds = make_builds(root)
	// console.dir(root, {depth: 10})
	return builds;
}


let result_max = [];
const run_build_blueprint = (blueprint, build_order, result_index, goal, max_time) => {
	// let id = blueprint[0];
	let ore_ore = blueprint[1];
	let clay_ore = blueprint[2];
	let obsidian_ore = blueprint[3];
	let obsidian_clay = blueprint[4];
	let geode_ore = blueprint[5];
	let geode_obsidian = blueprint[6];

	let run_test = (time, robots, resources, building) => {
		if (result_max[result_index] === goal) return;

		robots = [...robots];
		resources = [...resources];
		building = [...building]

		let busy = false;

		let build_req = build_order[time]
		if (build_req[0] > robots[0])
		{
			if (resources[1] < geode_obsidian ||
				resources[3] < geode_ore)
			{
				return;
			}
			else
			{
				building = [1, 0, 0, 0];
				resources[1] -= geode_obsidian
				resources[3] -= geode_ore
				busy = true;
			}
		}
		else if (building[3] === 1)
		{
			if (resources[3] < ore_ore)
			{
				return;
			}
			else
			{
				resources[3] -= ore_ore
				busy = true;
			}
		}
		else if (building[2] === 1)
		{
			if (resources[3] < clay_ore)
			{
				return;
			}
			else
			{
				resources[3] -= clay_ore
				busy = true;
			}
		}
		else if (building[1] === 1)
		{
			if (resources[2] < obsidian_clay || 
				resources[3] < obsidian_ore)
			{
				return;
			}
			else
			{
				resources[2] -= obsidian_clay
				resources[3] -= obsidian_ore
				busy = true;
			}
		}
		else if (building[0] === 1)
		{
			if (resources[1] < geode_obsidian ||
				resources[3] < geode_ore)
			{
				return;
			}
			else
			{
				resources[1] -= geode_obsidian
				resources[3] -= geode_ore
				busy = true;
			}
		}


		if (busy === false)
		{
			if (resources[3] >= ore_ore)
			{
				run_test(time, robots, resources, [0, 0, 0, 1] )
			}
			if (resources[3] >= clay_ore)
			{
				run_test(time, robots, resources, [0, 0, 1, 0])
			}
			if (resources[2] >= obsidian_clay &&
				resources[3] >= obsidian_ore)
			{
				run_test(time, robots, resources, [0, 1, 0, 0])
			}
			if (resources[1] >= geode_obsidian &&
				resources[3] >= geode_ore)
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

		building[0] = 0;
		building[1] = 0;
		building[2] = 0;
		building[3] = 0;

		time++;
		if (time === max_time) {
			if (resources[0] > result_max[result_index]) result_max[result_index] = resources[0];
			return;
		}
		run_test(time, robots, resources, building);
	}
	run_test(0, [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ]);
}


// let results = [];
// let all_blueprints = generate_blueprints();
// let max_time = 24;
// let max_depth = 2;
// for (let b = 0; b < all_blueprints.length; b++)
// {
// 	if (result_max[b] === undefined) result_max[b] = 0;
// 	let max_geode = 1;
// 	let blueprint = all_blueprints[b];
// 	while(true)
// 	{
// 		let builds = generate_builds(max_time, max_geode, max_depth, blueprint);
// 		for (let i = 0; i < builds.length; i++)
// 		{
// 			console.log("[" + result_max.join(', ') + "]", "blueprint: " + (b+1) + " / " + all_blueprints.length + ", max_geode: " + max_geode + ", build: " + (i+1) + " / " + builds.length);
// 			run_build_blueprint(blueprint, builds[i], b, max_geode, max_time);
// 			if (result_max[b] === max_geode) break;
// 		}
// 		if (result_max[b] < max_geode) break;
// 		max_geode++;
// 	}
// 	results[b] = result_max[b] * blueprint[0]
// }
// console.log(result_max)
// console.log(results)
// console.log(results.reduce((x, y)=>x+y))




let results = [0, 0, 0];
result_max = [0, 0, 0];
let all_blueprints = generate_blueprints();
let max_time = 32;
let max_geode = 16;
let max_depth = 2;
let b = 1;
let start_build = 30000;

let blueprint = all_blueprints[b];
	let builds = generate_builds(max_time, max_geode, max_depth, blueprint);
	for (let i = start_build; i < builds.length; i++)
	{
		console.log("[" + result_max.join(', ') + "]", "blueprint: " + (b+1) + " / " + all_blueprints.length + ", max_geode: " + max_geode + ", build: " + (i+1) + " / " + builds.length);
		run_build_blueprint(blueprint, builds[i], b, max_geode, max_time);
		if (result_max[b] === max_geode) break;
	}
results[b] = result_max[b] * blueprint[0]
console.log(result_max)
