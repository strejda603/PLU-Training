
var app = angular.module('pluapp', []);

app.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	"use strict";

	$scope.settings = {};

	/*
	// Practice list
	$scope.settings.pluList = [
		{
			'4011' : 'Banan',
			'94011' : 'Ekologisk banan',
			'4688' : 'Röd paprika',
			'4680' : 'Gul paprika',
			'4710' : 'Grön paprika',
		},
		{
			'1363' : 'Lösgodis',
			'1351' : 'Naturgodis',
			'4800' : 'Tomat',
			'4807' : 'Kvisttomater',
		},
		{
			'4082' : 'Rödlök',
			'4670' : 'Röd lök knippe',
			'4666' : 'Gullök',
			'4669' : 'Gul lök knippe',
			'3174' : 'Apelsin'
		},
		{
			'64081' : 'Aubergine styck',
			'4081' : 'Aubergine',
			'4899' : 'Bladpersilja bunt',
			'3263' : 'Blomkål',
		},
		{
			'4728' : 'Potatis',
			'4833' : 'Färskpotatis',
			'4729' : 'Bakpotatis',
			'4091' : 'Sötpotatis',
			'4450' : 'Clementin',
		},
		{
			'4318' : 'Melon cantalope',
			'3238' : 'Honungsmelon',
			'4031' : 'Vattenmelon',
			'4326' : 'Gallia melon',
			'4540' : 'Rödbetor lösvikt',
			'4645' : 'Champinjon',
		},
		{
			'4629' : 'Purjolök',
			'4745' : 'Rabarber',
			'4089' : 'Rädisor i knippe',
			'4585' : 'Rotselleri',
			'4552' : 'Salladskål'
		},
		{
			'4428' : 'Sharon',
			'4675' : 'Sockerärtor',
			'4608' : 'Vitlök',
			'4433' : 'Ananas',
			'3182' : 'Citron',
		},
		{
			'4446' : 'Granatäpple',
			'3050' : 'Vitkål',
			'3051' : 'Färsk vitkål',
			'4747' : 'Kålrot',
			'4048' : 'Lime'
		},
		{
			'4313' : 'Mango',
			'4526' : 'Morot',
			'4094' : 'Morot knippe',
			'4379' : 'Nektarin',
			'3171' : 'Fänkål',
			'3220' : 'Päron',
		},
		{
			'4672' : 'Palsternacka',
			'4397' : 'Passionsfrukt',
			'4444' : 'Plommon',
			'4650' : 'Portabella svamp',
		},
		{
			'4525' : 'Sparris',
			'64593' : 'Gurka',
			'94597' : 'Gurka eko',
			'4263' : 'Dadlar'
		},
		{
			'4061' : 'Isbergssallad',
			'4645' : 'Kantareller',
			'3279' : 'Kiwi gul',
			'4260' : 'Kokosnöt'
		},
		{
			'4520' : 'Kronärtskocka',
			'4554' : 'Rödkål',
			'4612' : 'Ingefära',
		},
		{
			'3029' : 'Satsumas',
			'4067' : 'Zuccini',
			'4227' : 'Avocado',
		},
		{
			'4252' : 'Jordgubbar',
			'94620' : 'Ekologisk Spetskål',
			'6318' : 'Äpple Svenska',
		},
		{
			'4697' : 'Peppar röd (chili)',
			'6746' : 'Frysta bär lösvikt',
		},
		{
			'2189' : 'Hålkaka',
			'2489' : 'Trehörning',
			'2503' : 'Ljusa limpor',
			'2500' : 'Mörka limpor',
		},
		{
			'2491' : 'Ringmunk',
			'2479' : 'Fylld munk',
			'2508' : 'Vaniljhjärtan',
		},
		{
			'29970' : 'Kladdkaka',
			'2510' : 'Muffins',
			'2514' : 'Kanelbulle',
		},
		{
			'2212' : 'Östras frallor',
			'2600' : 'Östras limpor',
			'2600' : 'Östras bröd',
		}
	];
	*/

	// More complete list, sorted alphabetically (mostly)
	$scope.settings.pluList = [
		{
			'1' : 'rohlík 43g',
			'2' : 'houska 43g',
			'3' : 'kaiserka cereální',
			'4' : 'chléb 1200g',
			'5' : 'chléb 500g',
			'9' : 'bageta cereální',
			'10' : 'sýrový rohlík',
			'11' : 'francouzská bageta',
			'13' : 'vitarohlík',
			'15' : 'dřevorubecký chléb',
			'16' : 'máslový croissant',
		},
		
		{
			'20' : 'vesnický chléb',
			'180' : 'kobliha s ovocnou náplní',
			'223' : 'pekanový pletenec',
			'240' : 'kornbageta',
			'247' : 'vánočka',
			'259' : 'slunečnicový chléb',
			'288' : 'kaiserka len, sezam',
			'294' : 'pizza kapsa',
			'296' : 'lámankový chléb',
			'297' : 'hot dog taštička',
			'601' : 'žemle s goudou a šunkou',
		},

		{
			'604' : 'donut s čokoládou',
			'609' : 'šáteček tvaroh',
			'617' : 'kovářský chléb 500g',
			'627' : 'bageta pšeničná',
			'631' : 'pivařský rohlík',
			'644' : 'celožitní bochánek',
			'647' : 'chléb horal',
			'661' : 'selský bochánek',
			'664' : 'kaiserka špaldová',
			'665' : 'kapsa meruňková',
			'692' : 'cookies s čokoládou',
		},

		{
			'695' : 'řemeslná bageta',
			'696' : 'podmáslový chléb',
			'703' : 'česneková bageta',
			'706' : 'žitný bochánek',
			'708' : 'dalamánek',
			'709' : 'vícezrná kostka',
			'711' : 'máslový koláč povidlový',
			'712' : 'máslový koláč tvarohový',
			'713' : 'máslový koláč makový',
			'714' : 'anglický rohlík',
		},

		{
			'25' : 'jablka červená (vážené)',
			'27' : 'granátové jablko (kus)',
			'30' : 'banány (vážené)',
			'34' : 'citrony (vážené)',
			'36' : 'grapefruity (vážené)',
			'40' : 'pomeranče (vážené)',
			'41' : 'ananas (kus)',
			'45' : 'kiwi (kus)',
			'46' : 'mango (kus)',
			'51' : 'jablka zelená (vážené)',
		},

		{
			'54' : 'hrozno bílé bezpeckové (vážené)',
			'58' : 'hrušky (vážené)',
			'61' : 'hrozno bílé (vážené)',
			'64' : 'hrozno růžové bezpeckové (vážené)',
			'68' : 'hrozno červené (vážené)',
			'72' : 'švestky (vážené)',
			'75' : 'kaki (kus)',
			'76' : 'kokosový ořech (kus)',
			'85' : 'liči (vážené)',
			'94' : 'rebarbora (vážené)',
		},

		{
			'105' : 'broskve ploché (vážené)',
			'112' : 'pomelo (kus)',
			'115' : 'meloun žlutý (kus)',
			'117' : 'fíky čerstvé (kus)',
			'120' : 'meloun vodní nad 12kg (kus)',
			'121' : 'meloun galia (kus)',
			'123' : 'meloun piel de sapo (kus)',
			'130' : 'meloun vodní (vážené)',
			'135' : 'avokádo (kus)',
			'137' : 'limetky (kus)',
		},

		{
			'173' : 'mandarinky (vážené)',
			'303' : 'blumy modré (vážené)',
			'304' : 'broskve (vážené)',
			'305' : 'jahody (vážené)',
			'306' : 'nektarinky (vážené)',
			'307' : 'třešně (vážené)',
			'338' : 'sladké brambory (vážené)',
			'345' : 'papája (kus)',
			'349' : 'meloun vodní bezpeckový (vážené)',
			'361' : 'meruňky (vážené)',
		},

		{
			'380' : 'rybíz červený (vážené)',
			'386' : 'meloun bílý (vážené)',
			'396' : 'kaštany (vážené)',
			'402' : 'hrozno růžové (vážené)',
			'405' : 'blumy žluté (vážené)',
			'414' : 'hrozno modré (vážené)',
			'430' : 'citrony (kus)',
			'434' : 'sweetie (vážené)',
			'459' : 'meloun žlutý vodní (vážené)',
		},

		{
			'62' : 'zázvor (vážené)',
			'71' : 'česnek suchý (vážené)',
			'79' : 'kukuřice (kus)',
			'82' : 'čínské zelí (vážené)',
			'88' : 'zelí červené (vážené)',
			'89' : 'květák (kus)',
			'90' : 'zelí bílé rané (vážené)',
			'91' : 'zelí bílé (vážené)',
			'98' : 'petržel s natí (svazek/kus)',
			'100' : 'okurky salátové (kus)',
		},

		{
			'101' : 'okurky polní (vážené)',
			'102' : 'lilek (vážené)',
			'104' : 'paprika bílá (kus)',
			'111' : 'kedlubna modrá (kus)',
			'113' : 'cuketa (vážené)',
			'114' : 'paprika žlutá (vážené)',
			'127' : 'paprika červená kapie (vážené)',
			'132' : 'okurky salátové bio (kus)',
			'136' : 'paprika zelená (vážené)',
			'138' : 'paprika červená (vážené)',
		},

		{
			'141' : 'mrkev svazek (kus)',
			'146' : 'celer (vážené)',
			'150' : 'dýně mexická (kus)',
			'152' : 'ředkvičky (svazek/kus)',
			'156' : 'rajčata keříková (vážené)',
			'158' : 'cuketa kulatá velká (vážené)',
			'163' : 'kedlubna (kus)',
			'166' : 'kapusta (vážené)',
			'169' : 'lahůdková cibulka svazek (kus)',
			'172' : 'pórek (kus)',
		},

		{
			'175' : 'celer s natí (kus)',
			'177' : 'fenykl (vážené)',
			'179' : 'křen (vážené)',
			'301' : 'salát hlávkový (kus)',
			'308' : 'cuketa kulatá malá (vážené)',
			'309' : 'dýně hokkaido (kus)',
			'310' : 'dýně okrasná (kus)',
			'311' : 'hrachové lusky (vážené)',
			'312' : 'řepa (svazek/kus)',
			'354' : 'patizon (vážené)',
		},

		{
			'378' : 'rajčata masitá (vážené)',
			'388' : 'dýně máslová (kus)',
			'398' : 'ředkev kulatá (kus)',
			'401' : 'ředkev bílá (kus)',
			'413' : 'zelí bílé špičaté (kus)',
			'431' : 'dýně špagetová (kus/vážená)',
			'439' : 'vodnice (kus)',
			'440' : 'romanesco (kus)',
			'445' : 'radicchio (vážené)',
			'458' : 'cuketa žlutá (vážené)',
		},

		{
			'224' : 'pistácie (vážené)',
			'613' : 'arašídy (vážené)',
		}
	]

	$scope.settings.currentSection = 0;
	$scope.settings.currentPLU = 0;

	$scope.settings.showAnswer = false;
	$scope.settings.showAnswerOnce = false;

	$scope.settings.showImageOpt = 'rand';
	$scope.settings.showTextOpt = 'yes';
	$scope.settings.showImage = true;
	$scope.settings.showText = true;

	$scope.settings.learned = {};
	$scope.settings.learnBlacklist = [];

	$scope.settings.learnPoints = {full: 8, half: 4};

	$scope.settings.input = document.getElementById('entry');
	$scope.settings.keypad = document.querySelector('#overlay-keypad');
	$scope.settings.keypadSpaceholder = document.querySelector('#keypad-spaceholder');

	$scope.settings.randomiseSection = false;
	$scope.settings.randomisePLU = false;

	$scope.settings.isMobile = window.innerWidth < 700;

	$scope.settings.modelsToAutoSave = [
		'currentSection',
		'showImageOpt',
		'showTextOpt',
		'randomiseSection',
		'randomisePLU'
	];


	$scope.init = function() {
		$scope.autoSave.loadAll();
		$scope.autoSave.setup();
	}


	$scope.autoSave = {
		loadAll: function() {
			Object.keys(localStorage).forEach(function(key){
				if($scope.settings.modelsToAutoSave.includes(key)) {

					var val = localStorage.getItem(key);

					if(val === 'false') {
						val = false;
					} else if(val === 'true') {
						val = true;
					}

					if(val == parseInt(val)) {
						val = parseInt(val);
					}

					$scope.settings[key] = val;
				}
			});
		},
		setup: function() {
			angular.forEach($scope.settings.modelsToAutoSave, function(val) {
				$scope.$watch('settings.' + val, function(n) {
					$scope.autoSave.save(val, n);
				});
			});
		},
		save: function(model, value) {
			localStorage.setItem(model, value);
		}
	};


	$scope.checkValue = function(forceState) {

		// Correct
		if( $scope.settings.currentPLU == $scope.settings.input.value || forceState === true) {
			
			$scope.settings.learned[$scope.settings.currentPLU] = $scope.settings.currentPLU in $scope.settings.learned ? $scope.settings.learned[$scope.settings.currentPLU] + 1 : 1;

			// Randomise section if $scope.settings.randomiseSection is true
			if ($scope.settings.randomiseSection === true) {
				$scope.setRandomSection();
			}

			$scope.setNewPLU();
			$scope.settings.input.value = '';
			$scope.settings.showAnswerOnce = false;


		} else if(forceState === false || forceState === 'skip') {
			$scope.settings.input.value = '';
			$scope.settings.showAnswerOnce = true;
			$scope.settings.learned[$scope.settings.currentPLU] = $scope.settings.currentPLU in $scope.settings.learned ? $scope.settings.learned[$scope.settings.currentPLU] - 1 : 0;

			// If skipped with "wrong" button
			if(forceState === 'skip') {

				// Randomise section if $scope.settings.randomiseSection is true
				if ($scope.settings.randomiseSection === true) {
					$scope.setRandomSection();
				}

				// Set new PLU
				$scope.setNewPLU();
			}
		}
	}

	// Called from right/wrong buttons in ui
	$scope.respond = function(state) {

		// Pressed "correct"
		if(state === 'ok') {
			$scope.checkValue(true);

		// Pressed "wrong"
		} else if (state === 'wrong') {
			$scope.checkValue('skip');
		}
	}

	// Everytime a key is typed
	$scope.settings.inputUpdate = function(e) {
		$scope.$apply(function() {

			// Clicked enter, don't know answer
			if(e.which == 32 || e.which == 13 || e.which == 188 || e.which == 186) {
				$scope.checkValue(false);

			// Normal keyup
			} else {
				$scope.checkValue();
			}

		});
	}

	$scope.getSectionCount = function() {
		return Object.keys($scope.settings.pluList).length-1;
	}

	$scope.isFirstSection = function() {
		return $scope.settings.currentSection === 0;
	}
	$scope.isLastSection = function() {
		return $scope.settings.currentSection == $scope.getSectionCount();
	}

	$scope.goToNextSection = function() {
		if(!$scope.isLastSection()) {
			$scope.settings.currentSection++;
		}
	}
	$scope.goToPreviousSection = function() {
		if(!$scope.isFirstSection()) {
			$scope.settings.currentSection--;
		}
	}


	$scope.displayKeypad = function() {
		$scope.settings.keypad.classList.add('visible');
		$timeout(function() {
			var height = $scope.settings.keypad.clientHeight;
			$scope.settings.keypadSpaceholder.style.height = height + 'px';
		}, 5);

	}
	$scope.hideKeypad = function() {
		$scope.settings.keypad.classList.remove('visible');
		$scope.settings.keypadSpaceholder.style.height = 0;
	}

	$scope.setNewPLU = function() {

		var items = Object.keys($scope.settings.pluList[$scope.settings.currentSection]),	
			learned = $scope.settings.learned,
			black = $scope.settings.learnBlacklist;

		// Ignore fully learned
		angular.forEach(learned, function(val, key) {
			if(val >= $scope.settings.learnPoints.full) {
				var pos = items.indexOf(key);
				items.splice(pos, 1);
			}
		});


		// Ignore blacklisted
		angular.forEach(black, function(val) {
			if(items.includes(val)) {
				var pos = items.indexOf(val);
				items.splice(pos, 1);
			}
		});

		// If everything is learned, reset learned
		if(items.length < 1) {
			items = Object.keys($scope.settings.pluList[$scope.settings.currentSection]);
			$scope.clearLearnedBySession();
		}


		// If only one item left, return it
		if(items.length < 2) {
			$scope.settings.currentPLU = items.pop();
			return true;
		}

		// Randomize PLU
		if($scope.settings.randomisePLU) {

			// Get random item from values
			var randomIndex = Math.ceil(Math.random() * items.length ) - 1,
				randomItem = items[randomIndex];

			// If same as before, randomise again
			if(randomItem === $scope.settings.currentPLU) {
				$scope.setNewPLU();

			// New random
			} else {
				$scope.settings.currentPLU = randomItem;
			}

		// Not random, get the preceeding PLU
		} else {

			// First run, no current PLU, get first one
			if($scope.settings.currentPLU === 0) {
				$scope.settings.currentPLU = items[0];
			

			// Not first run, get preceeding
			} else {
				var currIndex = items.indexOf($scope.settings.currentPLU);
				if(currIndex+1 in items) {
					$scope.settings.currentPLU = items[ currIndex+1 ];
				} else {
					$scope.settings.currentPLU = items[0];
				}
			}


		}



		$scope.updateShowImage();
		$scope.updateShowText();
	}

	$scope.updateShowImage = function() {
		if($scope.settings.showImageOpt == 'yes') {
			$scope.settings.showImage = true;
		} else if($scope.settings.showImageOpt == 'no') {
			$scope.settings.showImage = false;
		} else if($scope.settings.showImageOpt == 'rand') {
			$scope.settings.showImage = Math.round(Math.random());
		}
	}
	$scope.updateShowText = function() {
		if($scope.settings.showTextOpt == 'yes') {
			$scope.settings.showText = true;
		} else if($scope.settings.showTextOpt == 'no') {
			$scope.settings.showText = false;
		} else if($scope.settings.showTextOpt == 'rand') {
			$scope.settings.showText = Math.round(Math.random());
		}
	}


	$scope.setRandomSection = function() {
		var rand = Math.round(Math.random() * $scope.settings.pluList.length)-1,
			rand = rand > 0 ? rand : 0;
		$scope.settings.currentSection = rand;
	}

	$scope.clearLearnedBySession = function() {
		angular.forEach($scope.settings.pluList[$scope.settings.currentSection], function(value, key) {
			if(key in $scope.settings.learned) {
				delete $scope.settings.learned[key];
			}
		});
	}

	$scope.getLearnedBySession = function() {
		var learned = {};

		angular.forEach($scope.settings.pluList[$scope.settings.currentSection], function(value, key) {
			if(key in $scope.settings.learned) {
				learned[key] = value;
			}
		});
	}

	$scope.toggleBlacklistPLU = function(plu) {
		if($scope.settings.learnBlacklist.includes(plu)) {
			var pos = $scope.settings.learnBlacklist.indexOf(plu);
			$scope.settings.learnBlacklist.splice(pos, 1);
		} else {
			$scope.settings.learnBlacklist.push(plu);
		}
	}


	$scope.$watch('settings.currentSection', function(n) {
		$scope.setNewPLU();
	});


	$scope.$watch('settings.showImageOpt', function() {
		$scope.updateShowImage();
	})

	$scope.$watch('settings.showTextOpt', function() {
		$scope.updateShowText();
	})


	$scope.settings.input.addEventListener('keyup', function(e) {
		$scope.settings.inputUpdate(e);
	});

	// On keypad click
	$scope.settings.keypad.addEventListener('mouseup', function(e) {
		var send = e.target.dataset.send;
		e.stopPropagation();

		// Only register click if you actually clicked a button
		if(e.target.dataset.send === undefined) {
			return true;
		}

		if(send === 'del') {
			var spl = $scope.settings.input.value + "";
			spl = spl.substring(0, spl.length-1);
			$scope.settings.input.value = spl;

		// We know input is wrong
		} else if(send === 'ok') {
			$scope.settings.input.value = '';
			$scope.settings.showAnswerOnce = true;
			$scope.settings.learned[$scope.settings.currentPLU] = $scope.settings.currentPLU in $scope.settings.learned ? $scope.settings.learned[$scope.settings.currentPLU] - 1 : 0;
		} else {
			$scope.settings.input.value += send;
		}

		e.target.classList.add('keypress');
		$timeout(function() {
			e.target.classList.remove('keypress');
		}, 100);

		$scope.settings.input.focus();
		$scope.$apply();
	});

	// Input focus
	$scope.settings.input.addEventListener('focus', function(e) {
		$scope.settings.inputUpdate(e);
		$scope.displayKeypad();
	});

	// Click anywhere outside input to close
	// Keypad not included because stopPropagation
	document.addEventListener('mouseup', function(e) {
		if(e.target.nodeName !== 'INPUT') {
			$scope.hideKeypad();
		}
	});


	// For use in index.html
	$scope.parseInt = parseInt;


	$scope.init();

}]);