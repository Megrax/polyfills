/**
 * 题目：扁平化数据转Tree
 * 将以上arr数组转换为result的Tree
 */

function arrayToTree(sourceArr) {
	let newArr = sourceArr.reduce((acc, curr) => {
		acc[curr.id] = curr;
		acc[curr.id].children = [];
		return acc;
	}, []);
	let result = [];
	for (key in newArr) {
		let item = newArr[key];
		if (item.pid === 0) {
			result.push(item);
		} else {
			let parent = newArr[newArr[key].pid];
			if (parent) {
				parent.children = parent.children || [];
				parent.children.push(item);
			}
			result.push(item);
		}
	}
	return result.filter((item)=>item.pid === 0);
}

function arrayToTree2(sourceArr) {
	let obj
	for(let item of input){
		if(!item.parentId) obj = item
		const children = input.filter(it => it.parentId === item.id)
		if(children.length > 0) item.children = children
	}

}

/* test */
const arr = [
	{ id: 1, name: '部门1', pid: 0 },
	{ id: 2, name: '部门2', pid: 1 },
	{ id: 3, name: '部门3', pid: 1 },
	{ id: 4, name: '部门4', pid: 3 },
	{ id: 5, name: '部门5', pid: 4 },
];

//输出结果
const result = [
	{
		id: 1,
		name: '部门1',
		pid: 0,
		children: [
			{
				id: 2,
				name: '部门2',
				pid: 1,
				children: [],
			},
			{
				id: 3,
				name: '部门3',
				pid: 1,
				children: [
					// 结果 ,,,
				],
			},
		],
	},
];

console.log(JSON.stringify(arrayToTree(arr)))