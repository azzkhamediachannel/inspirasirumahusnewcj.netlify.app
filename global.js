const configAds = [
	{
		"src":"https://pl18845136.highrevenuegate.com/58/ce/25/58ce25bdffb3b2dd7dd7eaf7639a3a01.js",
		"name-element":"script",
		"target-selector":"body"
	},
	{
		"src":"https://pl18845136.highrevenuegate.com/58/ce/25/58ce25bdffb3b2dd7dd7eaf7639a3a01.js",
		"name-element":"script",
		"target-selector":"body"
	}
];
const initAds = async(config)=>{
	for(let data of config){
		const elInject = document.createElement(data["name-element"]);
		elInject.setAttribute("src",data.src);
		document.querySelector(data["target-selector"]).append(elInject);
	};
};
initAds(configAds);