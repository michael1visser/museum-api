const arr = [1, 2, 3];

const asyncRes = await Promise.all(arr.map(async (i) => {
	await sleep(10);
	return i + 1;
}));

console.log(asyncRes);