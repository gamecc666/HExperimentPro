var comJsFunc=window.comJsFunc||{};

function SUM(a,b)
{
	return a+b;
};

comJsFunc.PrintName=(name)=>{
	console.log('come in PrintName function!');
	console.log(`hello ${name}, welcome come in new world!`);
	console.log('exit PrintName function!');
};
comJsFunc.Add=(a,b)=>{
	let sum=SUM(a,b);
	console.log(`a+b=${sum}`);
};


