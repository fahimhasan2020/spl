LInit(30, "mylegend", 400, 600, main);

var dataList = {};

function main () {
	LGlobal.aspectRatio = PORTRAIT;
	
	LGlobal.setDebug(false);

	var b = document.body;
	b.style.margin = "0px";
	b.style.padding = "0px";
	b.style.backgroundColor = "black";

	if (LGlobal.mobile) {
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	}
	LGlobal.screen(LGlobal.FULL_SCREEN);

	loadGame();
}

function loadGame () {
	var loadData = [
		[
			{path : "/games/runner/js/ytPreloader.js"},

			{name : "preloader_bar", path : "/games/runner/images/preloader_bar.jpg"},
			{name : "preloader_bar_background", path : "/games/runner/images/preloader_bar_background.jpg"},
			{name : "preloader_background", path : "/games/runner/images/preloader_background.jpg"}
		],
		[
			
			{path : "/games/runner/js/ytButton.js"},
			{path : "/games/runner/js/ytMenuLayer.js"},
			{path : "/games/runner/js/ytOptionLayer.js"},
			{path : "/games/runner/js/ytGameLayer.js"},
			{path : "/games/runner/js/ytBackground.js"},
			{path : "/games/runner/js/ytStreetView.js"},
			{path : "/games/runner/js/ytCar.js"},
			{path : "/games/runner/js/ytCarLayer.js"},
			{path : "/games/runner/js/ytExplosion.js"},
			{path : "/games/runner/js/ytPoint.js"},
			{path : "/games/runner/js/ytResultBox.js"},
			{path : "/games/runner/js/ytHelpLayer.js"},
			{path : "/games/runner/js/ytAboutLayer.js"},

			{name : "button_sheet", path : "/games/runner/images/button_sheet.jpg"},
			{name : "menu_car_icons", path : "/games/runner/images/menu_car_icons.png"},
			{name : "explosion", path : "/games/runner/images/explosion.png"},
			{name : "cars_atlas", path : "/games/runner/images/cars_atlas.png"},
			{name : "button_pause_sheet", path : "/games/runner/images/button_pause_sheet.png"},
			{name : "default_menu_background", path : "/games/runner/images/default_menu_background.jpg"},
			{name : "misc_atlas", path : "/games/runner/images/misc_atlas.png"},
			{name : "numbers", path : "/games/runner/images/numbers.png"},
			{name : "street_canyon", path : "/games/runner/images/street_canyon.jpg"},
			{name : "street_city", path : "/games/runner/images/street_city.jpg"},
			{name : "street_desert", path : "/games/runner/images/street_desert.jpg"},
			{name : "street_grass", path : "/games/runner/images/street_grass.jpg"},
			{name : "street_snow", path : "/games/runner/images/street_snow.jpg"},
			{name : "street_water", path : "/games/runner/images/street_water.jpg"},
			{name : "help", path : "/games/runner/images/help.jpg"}
		]
	];

	LLoadManage.load(
		loadData[0],
		null,
		function (r) {
			updateDataList(r);

			var preloader = new ytPreloader();
			addChild(preloader);

			LLoadManage.load(
				loadData[1],
				function (p) {
					preloader.setProgress(p);
				},
				function (r) {
					updateDataList(r);

					preloader.remove();

					addMenuInterface();
				}
			);
		}
	);
}

function updateDataList (r) {
	for (var k in r) {
		var o = r[k];

		if (o instanceof Image) {
			dataList[k] = new LBitmapData(o);
		} else {
			dataList[k] = o;
		}
	}
}

function addMenuInterface () {
	var menuInterface = new ytMenuLayer();
	addChild(menuInterface);
}

function addOptionInterface() {
	var optionInterface = new ytOptionLayer();
	addChild(optionInterface);
}

function addGameInterface (car, place) {
	var gameInterface = new ytGameLayer(car, place);
	addChild(gameInterface);
}

function addHelpInterface() {
	var helpInterface = new ytHelpLayer();
	addChild(helpInterface);
}

function addAboutInterface() {
	var aboutInterface = new ytAboutLayer();
	addChild(aboutInterface);
}