let data;

let main = () => {

data = data.split('\n');
// data = data2.split('\n');

	let decode = (nu) => {
		let value = 0;
		nu = nu.split("");
		nu = nu.reverse();
		// console.log(nu)
		for(let i = 0; i < nu.length; i++)
		{
			let place = 5 ** i
			let digit = nu[i];
			if (digit === "=") 
				value += place * -2;
			else if (digit === "-") 
				value += place * -1;
			else 
				value += place * digit;
		}
		return value;
	};

	let mapper = new Map();
	mapper.set(-2, "=");
	mapper.set(-1, "-");
	mapper.set(0, "0");
	mapper.set(1, "1");
	mapper.set(2, "2");

	let encode = (nu) => {
		let value = "00000000000000000000000000000000000000000000000".split("");
		// let temp0 = nu;
		let flag = false;
		let place = 0;
		while (true)
		{
			flag = false;
			for (let i = -2; i <= 2; i++)
			{
				let temp0 = nu - i * 5 ** place
				if (Math.abs(temp0) < Math.abs(nu))
				{
					flag = true;
				}
			}
			// console.log(temp0, nu)
			if(flag === false) break;
			place++;
		}

		place--;

		while (true)
		{
			let min_i = 0;
			for (let i = -2; i <= 2; i++)
			{
				let temp0 = nu - i * 5 ** place
				let temp1 = nu - min_i * 5 ** place

				if (Math.abs(temp0) < Math.abs(nu) && Math.abs(temp0) < Math.abs(temp1))
				{
					min_i = i;
				}
			}
			nu -= min_i * 5 ** place
			value[place] = mapper.get(min_i)
			place--;
			if (place === 0) break;
		}
		return value;
	}

	let results = data.reduce((x, y)=>x+decode(y), 0)
	console.log(results);
	let result = encode(results);
	console.log(result.reverse().join(""))
	console.log(decode("2-=2==00-0==2=022=10"))
}

data = `2112
1=210=2
1---22==12012-2=2=
1=1
21=-0
2-2=02-11==
210=-
202=11=-=12-2=
1-=01-=-1=-
1==1=20=1=12-0=2-2
10==0==222=-1
1100-20-=
1=0==01-0=-1-00-201=
100=-222
21--20-==01-01-022
2100-1=2-==11
1=-0=21=2=1112102-
2==02220200=-100
1=
1=12----0==121
221===
10--21-21-2010
120-000122-20122-=
1-2=01020-=--2
100-0-12=0101=1==2
220=-2-011-=12=0
1=-=0022000-2==-
10=-01
1-00-02122000=-
1===000=0
1111
122--=-0-2--001=0
1==020--22
1020-=2-1-1=010=0
1=-=-=02-=
2-10211-1===1
1-12-=1-11-2002
10110-
11=1=0-
12-
102-2=22=2-=-022
1=-2-0=2--=
2=21=2=0-=
2=-2212=
1=-110222=-1-2==-1
11122
1=-
2=01-1=-
1=2=10-202==0===-0=
2---
1===20=--1
1-==--1==-2-1=-2=0
10=-=
1-1=2=
110
121==0
22000=20=
1-1=-0-2
20-2-21=0022-22100
1=010-=21-=12-1
22021000222
10=20=2-111
12--20=2-20
100-==2-=10=2-1-
1120012
1=1202---01-1201=
200
100=0
1=10=01-2-=20=01=
1-=--22
1-0121-==10
110=1-1
2-210-=0=10=1-
111-=0-=0=2---
1=1210==1=-1=11--
10-01222=011=0=0=
2120
12-11-=212
1==11-2-210----2
12
2012=-100-02-0-121-
11-2021220-=0
12-0-00-222
21-1==22021-
20-0
1011-=1-10-=
2-00-0
20-2=1
1102-=1-==211
1102-2
21=
10100-1-1
1=2-1-0
1--2===0
1-=01=2=-
10-1=-202==01-1
1-01112=2010=-=101
211==0-0===0==1-
1==220
1-=1=
1-0110-12
21-==
21202011--0-
2-2
2=
200-=-2--1102100-0
1-00=2-12
1=-0--=-220212
1-=210-=
12110-00212--=
20=1
21=2=0=00
1=22--=2==20-=
111-1-0211-=000=01
2-12
10-2-120===22
21-00
1=2
1-=2-
1=-2--100202-=
2=101122
11=21----1--
1---
12-12
1=2=0--01=---212`;

main();