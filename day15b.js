let data;

const main = () => {

	data = data.replaceAll("Sensor at x=", "");
	data = data.replaceAll(", y=", ",");
	data = data.replaceAll(": closest beacon is at x=", ":");
	data = data.split('\n').map(el => el.split(":").map(el2 => el2.split(",").map(el3=>Number(el3))));

	let distances = []

	let xmin = 0;
	let xmax = 4000000;
	let ymin = 0;
	let ymax = 4000000;

	let distance = (x0, x1, y0, y1) => Math.abs(x1 - x0) + Math.abs(y1 - y0)
	let dy = (y0, y1) => Math.abs(y1 - y0)

	for (let y = ymin; y <= ymax; y++)	
	{
		for (let x = xmin; x <= xmax; x++)	
		{
			let close = false;
			for (let i = 0; i < data.length; i++)
			{
				let sensorx = data[i][0][0]
				let sensory = data[i][0][1]
				let beaconx = data[i][1][0]
				let beacony = data[i][1][1]
				let dist = distance(sensorx, beaconx, sensory, beacony)
				let dist2 = distance(sensorx, x, sensory, y)
				if (dist2 <= dist)
				{
					y_dist = dy(y, sensory)
					x2 = sensorx + (dist - y_dist)
					x = Math.max(x, x2);
					close = true;
				}
			}
			if (!close) console.log(x*4000000+y)
		}
	}
}

data = `Sensor at x=3923513, y=2770279: closest beacon is at x=3866712, y=2438950
Sensor at x=675683, y=3223762: closest beacon is at x=-224297, y=2997209
Sensor at x=129453, y=2652332: closest beacon is at x=92656, y=2629486
Sensor at x=3906125, y=2154618: closest beacon is at x=3866712, y=2438950
Sensor at x=65723, y=902062: closest beacon is at x=92656, y=2629486
Sensor at x=3137156, y=2876347: closest beacon is at x=2907507, y=3100765
Sensor at x=32848, y=2676435: closest beacon is at x=92656, y=2629486
Sensor at x=3272472, y=3445147: closest beacon is at x=2907507, y=3100765
Sensor at x=2926008, y=128948: closest beacon is at x=3089364, y=-501737
Sensor at x=2975, y=2769838: closest beacon is at x=92656, y=2629486
Sensor at x=3540455, y=2469135: closest beacon is at x=3866712, y=2438950
Sensor at x=3674809, y=2062166: closest beacon is at x=3719980, y=2000000
Sensor at x=3693706, y=2027384: closest beacon is at x=3719980, y=2000000
Sensor at x=3869683, y=2291983: closest beacon is at x=3866712, y=2438950
Sensor at x=2666499, y=2796436: closest beacon is at x=2650643, y=2489479
Sensor at x=492, y=2601991: closest beacon is at x=92656, y=2629486
Sensor at x=2710282, y=3892347: closest beacon is at x=2907507, y=3100765
Sensor at x=28974, y=3971342: closest beacon is at x=-224297, y=2997209
Sensor at x=3990214, y=2399722: closest beacon is at x=3866712, y=2438950
Sensor at x=3853352, y=1009020: closest beacon is at x=3719980, y=2000000
Sensor at x=1231833, y=3999338: closest beacon is at x=1313797, y=4674300
Sensor at x=2083669, y=875035: closest beacon is at x=1369276, y=-160751
Sensor at x=1317274, y=2146819: closest beacon is at x=2650643, y=2489479
Sensor at x=3712875, y=2018770: closest beacon is at x=3719980, y=2000000
Sensor at x=963055, y=23644: closest beacon is at x=1369276, y=-160751
Sensor at x=3671967, y=64054: closest beacon is at x=3089364, y=-501737
Sensor at x=3109065, y=2222392: closest beacon is at x=2650643, y=2489479
Sensor at x=3218890, y=1517419: closest beacon is at x=3719980, y=2000000
Sensor at x=3856777, y=3987650: closest beacon is at x=4166706, y=3171774
Sensor at x=1912696, y=3392788: closest beacon is at x=2907507, y=3100765
Sensor at x=3597620, y=3100104: closest beacon is at x=4166706, y=3171774`

main();