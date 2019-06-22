/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animal.js":
/*!***********************!*\
  !*** ./src/animal.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animals; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\nclass Animals{\n    constructor(game,image,position,sheetWidth,sheetHeight){\n        this.image=image;\n        this.position = position;\n        this.oldPosition = { x: this.position.x, y: this.position.y };\n        this.srcX = 0;\n        this.srcy = 0;\n        this.sheetWidth = sheetWidth;\n        this.sheetHeight = sheetHeight;\n        this.column = 4;\n        this.row = 4;\n        this.spriteWidth = this.sheetWidth / this.column;\n        this.spriteHeight = this.sheetHeight / this.row;\n        this.currentFrame = 0;\n        this.game = game;\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.maxSpeed = 5;\n        this.speedX = this.maxSpeed;\n        this.speedY = this.maxSpeed;\n        this.follow = false;\n        this.added = false;\n    }\n    update(){\n        this.faceRight();   \n        this.oldPosition.x = this.position.x;\n        this.oldPosition.y = this.position.y;\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this, this.game.player, -15) && Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this, this.game.player, -15)) {\n            this.follow = true;\n            if(!this.added) {\n                this.game.chicken +=1;\n                this.added = true;\n            }\n        }\n        \n        if(this.follow){\n            if (!Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this, this.game.player, 105) && Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this, this.game.player, 105)) {\n                this.follow = false;\n                if(this.added){this.game.chicken -= 1; this.added = false;}\n            } else if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this, this.game.player, 25) && Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this, this.game.player, 25)){\n                this.position.x = this.oldPosition.x;\n                this.position.y = this.oldPosition.y;\n            }\n            this.position.x += this.speedX;\n            this.position.y += this.speedY;\n            this.game.player.path.forEach(pos=>{if (this.position.x > pos[0]+10) {\n                this.speedX = -this.maxSpeed;\n            } else if (this.position.x < pos[0] + 10){\n                this.speedX = this.maxSpeed;\n            } else {this.speedX = 0;}\n                if (this.position.y > pos[1]+10) {\n                this.speedY = -this.maxSpeed;\n                } else if (this.position.y < pos[1] + 10){\n                this.speedY = this.maxSpeed;\n            } else {this.speedY = 0;}\n            });\n        if (this.speedX >= 0) this.faceRight();\n        else { this.faceLeft();}\n        if (this.speedY >= 0) this.faceDown();\n        else {this.faceUp();}\n        }\n    }  \n    faceRight(){\n            this.currentFrame = ++this.currentFrame % this.column;\n            this.srcX = this.currentFrame * this.spriteWidth;\n            this.srcY = 3 * this.spriteHeight;\n        }\n    faceLeft(){\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 1 * this.spriteHeight;\n    }\n    faceDown(){\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 2 * this.spriteHeight;\n    }\n    faceUp(){\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 0 * this.spriteHeight;\n    }\n    draw(ctx){\n        this.update();\n        ctx.drawImage(\n            this.image,\n            this.srcX,\n            this.srcY,\n            this.spriteWidth,\n            this.spriteHeight,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth,\n            this.spriteHeight\n            );\n        }\n}   \n\n//# sourceURL=webpack:///./src/animal.js?");

/***/ }),

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: collision, collisionUpDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collision\", function() { return collision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionUpDown\", function() { return collisionUpDown; });\nfunction collision (obj1, obj2, distance){\n\n    let rightOfobj1 = obj1.position.x + obj1.spriteWidth;\n    let leftOfobj1 = obj1.position.x;\n\n    let rightOfobj2 = obj2.position.x + obj2.spriteWidth;\n    let leftOfobj2 = obj2.position.x;\n\n    if (\n        leftOfobj2 < rightOfobj1 + distance &&\n        rightOfobj2 > leftOfobj1 - distance+10\n    ) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nfunction collisionUpDown(obj1, obj2, distance){\n    let bottomOfobj1 = obj1.position.y + obj1.spriteHeight;\n    let topOfobj1 = obj1.position.y;\n\n\n    let bottomOfobj2 = obj2.position.y + obj2.spriteHeight;\n    let topOfobj2 = obj2.position.y;\n\n    if (bottomOfobj1 > topOfobj2 - distance &&\n            topOfobj1 < bottomOfobj2 + distance )\n        {\n            return true;\n        } else {\n            return false;\n        }\n}\n\n\n//# sourceURL=webpack:///./src/collision.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Control{\n    constructor(player){\n        document.addEventListener(\"keydown\", event => {\n            switch (event.keyCode) {\n                case 37:\n                    player.movingLeft();\n                    break;\n                case 38:\n                    player.movingUp();\n                    break;\n                case 39:\n                    player.movingRight();\n                    break;\n                case 40:\n                    player.movingDown();\n                    break;\n                default:\n                    break;\n            }\n        });\n\n        document.addEventListener('keyup', e => {\n            switch(event.keyCode){\n                case 37:\n                    if (player.speedX < 0) \n                        return player.stopX();\n                        break;\n                case 38:\n                    if (player.speedY < 0) \n                        return player.stopY();\n                        break;\n                case 39:\n                    if (player.speedX > 0) \n                        return player.stopX();\n                        break;\n                case 40:\n                    if (player.speedY > 0) \n                        return player.stopY();\n                        break;\n                    \n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Control);\n\n//# sourceURL=webpack:///./src/control.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tillie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tillie */ \"./src/tillie.js\");\n/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spider */ \"./src/spider.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\n\nclass Game {\n    constructor(width, heigth){\n        this.gameWidth = width; \n        this.gameHeight = heigth;  \n        this.levelList = [_level__WEBPACK_IMPORTED_MODULE_3__[\"level1\"], _level__WEBPACK_IMPORTED_MODULE_3__[\"level2\"], _level__WEBPACK_IMPORTED_MODULE_3__[\"level3\"]];\n        this.counter = 1;\n        this.repeat = false;\n        this.gameObjects = [];\n        this.leveled = this.levelList[this.counter - 1]\n        this.player = new _tillie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.player.lives =100;\n    }\n\n\n    start(){\n\n        var elem = document.getElementById(\"outsideBar\");\n        elem.style.display=\"block\";\n        this.player = new _tillie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.chicken = 0; \n        this.counter = 1;\n        this.repeat = false;\n        this.leveled = this.levelList[this.counter-1]\n        var walls = Object(_level__WEBPACK_IMPORTED_MODULE_3__[\"buildLevel\"])(this, this.leveled)[0];\n        //this.spider = new Spider(this, 600, 500,0.5);\n        this.clone =[];\n        this.gameObjects = [this.player,...walls];\n        new _control__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.player);\n\n    }\n    display(ctx,level){\n        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);\n        ctx.fillStyle = \"#000000\";\n        ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);\n        ctx.fillStyle = \"#ffffff\";\n        ctx.font = \"50px Indie Flower\";\n        ctx.fillText(level, 300, 250);\n    }\n    draw(ctx){\n\n        if (this.chicken === Object(_level__WEBPACK_IMPORTED_MODULE_3__[\"buildLevel\"])(this, this.leveled)[1]) {\n            this.leveled = this.levelList[this.counter];\n            var walls = Object(_level__WEBPACK_IMPORTED_MODULE_3__[\"buildLevel\"])(this, this.leveled)[0];\n            this.gameObjects = [this.player, ...walls];\n            this.chicken = 0;\n            this.counter +=1;\n            if(this.leveled === this.levelList[2]){\n                this.repeat === true;\n                var re = setInterval(() => {\n                if (this.player.lives === 0 || _index__WEBPACK_IMPORTED_MODULE_4__[\"stop\"]) { clearInterval(re); }\n                else{let xpo = Math.random() * 700;\n                let ypo = Math.random() * 500;\n                this.clone.push(new _spider__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, xpo, ypo, Math.random()*1.5));\n                this.gameObjects = [this.player, ...walls, ...this.clone];}\n            }, 5000);\n                \n        }\n\n        }\n\n\n        this.gameObjects = this.gameObjects.filter(obj=> !obj.markedForDeletion);\n        this.gameObjects.forEach(obj => {\n            obj.draw(ctx);\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: stop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stop\", function() { return stop; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nvar stop = true;\ndocument.addEventListener('DOMContentLoaded', () => {\n    var canvas = document.getElementById(\"canvas\");\n    var ctx = canvas.getContext(\"2d\");\n    var sound = document.getElementById(\"sound\");\n    var fps = 40;\n\n    const startPause = document.getElementById(\"stop-btn\");\n    const replayButton = document.getElementById(\"start-btn\");\n    \n   // document.getElementById('start-btn').addEventListener('click', removeClassHidden)\n    document.getElementById('startGame').addEventListener('click', startGame);\n    startPause.addEventListener('click', stopPlay);\n    replayButton.addEventListener('click', stopPlay);\n    document.getElementById(\"unmute-btn\").addEventListener('click', play);\n    document.getElementById(\"mute-btn\").addEventListener('click', mute);\n    const replay = document.getElementById(\"replay\");\n    replay.addEventListener('click',startGame);\n    replay.classList.toggle(\"hidden\");\n    \n    var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height);\n        \n\n    function play(){\n        sound.play();\n        stop = false;\n    }\n    function mute(){\n        sound.pause();\n    }\n   \n    \n    function gameLoop(){\n        window.addEventListener(\"keydown\", function (e) {\n            // space and arrow keys\n            if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {\n                e.preventDefault();\n            }\n        }, false);\n        setTimeout(function(){\n            if (!stop){ctx.clearRect(\n                0, 0, canvas.width, canvas.height\n            );\n                game.draw(ctx);\n            }\n            \n            var stopId = requestAnimationFrame(gameLoop);\n                if (stop){\n                    cancelAnimationFrame(stopId);\n                }\n            \n            if(game.player.lives <=0){\n                var elem = document.getElementById(\"outsideBar\");\n                elem.style.display = \"none\";\n                ctx.clearRect(0, 0, canvas.width, canvas.height);\n                ctx.fillStyle = \"#ffffff\";\n                ctx.font = \"50px Indie Flower\";\n                ctx.fillText(\"Game Over\", 300, 250);\n                var seconds = 3;\n                var countDown = setInterval(() => { // restart count down\n                    elem.style.display = \"none\";\n                    ctx.clearRect(0, 0, canvas.width, canvas.height);\n                    ctx.fillText(\"Game Over\", 300, 250);\n                    ctx.fillText(seconds, 300, 300);\n                    seconds -=1;\n                    if (seconds < 0) {\n                        clearInterval(countDown);\n                        ctx.clearRect(0, 0, canvas.width, canvas.height);\n                        ctx.fillText(\"Start Again!\", 300, 300);\n                        if (replay.classList.contains('hidden')) {\n                            replay.classList.remove('hidden');\n                            replay.classList.toggle('show');\n                        }\n                    }\n                },1100);\n                stop = true;\n            }\n            if (game.chicken === Object(_level__WEBPACK_IMPORTED_MODULE_1__[\"buildLevel\"])(game,game.leveled)[1]) {\n                if (game.leveled === game.levelList[2]){\n                    mute();\n                    var elem = document.getElementById(\"outsideBar\");\n                    elem.style.display = \"none\";\n                    ctx.clearRect(0, 0, canvas.width, canvas.height);\n                    ctx.fillStyle = \"#ffffff\";\n                    ctx.font = \"50px Indie Flower\";\n                    var seconds = 3;\n                    var countDown = setInterval(() => { // restart count down\n                        elem.style.display = \"none\";\n                        ctx.clearRect(0, 0, canvas.width, canvas.height);\n                        ctx.fillText(\"you Win!\", 300, 250);\n                        ctx.fillText(seconds, 300, 300);\n                        seconds -= 1;\n                        if (seconds < 0) {\n                            clearInterval(countDown);\n                            ctx.clearRect(0, 0, canvas.width, canvas.height);\n                            ctx.fillText(\"Start Again!\", 300, 300);\n                            if (replay.classList.contains('hidden')) {\n                                replay.classList.remove('hidden');\n                                replay.classList.toggle('show');\n                            }\n                        }\n                    }, 1100);\n                    stop = true;\n                }else{\n                    fps = 2000;\n                game.display(ctx, \"Level \"+ String(game.counter+1));\n                setTimeout(() => {\n                    fps=40;}, 2000);} \n                // stopPlay();\n                // display();\n            }\n        }, fps);\n    }   \n\n    function stopPlay() {   \n        toggleClass();\n        if(stop){\n            stop = false;\n            requestAnimationFrame(gameLoop);\n            \n        } else{\n            stop = true;\n        }\n        \n    }\n\n    function toggleClass(){\n        startPause.classList.toggle('hidden');\n       }\n\n\n    function startGame(){\n        fps = 40;\n        const wel = document.getElementsByClassName('welcome');\n        const but = document.getElementById(\"buttons\");\n        debugger\n        if (!but.classList.contains(\"hidden\")){\n            but.classList.toggle(\"hidden\");\n        } \n        if(!wel[0].classList.contains(\"hidden\")){\n            wel[0].classList.toggle(\"hidden\");\n        };\n        if (replay.classList.contains('show')) {\n            replay.classList.remove('show'); \n            replay.classList.toggle('hidden');\n        }   \n            game.start();\n            requestAnimationFrame(gameLoop);\n            stop = false;\n        play();\n\n    }\n})\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\nclass Item{\n    constructor(game, position){\n        this.potionImage = document.getElementById('potion');\n        this.game = game;\n        this.position = position;\n        this.spriteWidth = 40;\n        this.spriteHeight = 40;\n        this.markedForDeletion = false;\n    }\n    update(){\n        if(Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this, this.game.player,-5)&&Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this,this.game.player,-5)){\n            console.log(\"touched\");\n            this.markedForDeletion = true;\n            if(this.game.player.lives<=90) {this.game.player.lives+=10;}else{this.game.player.lives = 100;}\n        }\n    }\n    draw(ctx) {\n        this.update();\n        ctx.drawImage(\n            this.potionImage,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth,\n            this.spriteHeight\n        )\n    }\n}\n\n//# sourceURL=webpack:///./src/items.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: buildLevel, level1, level2, level3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLevel\", function() { return buildLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level2\", function() { return level2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level3\", function() { return level3; });\n/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall */ \"./src/wall.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animal */ \"./src/animal.js\");\n/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spider */ \"./src/spider.js\");\n\n\n\n\nfunction buildLevel(game, level){\n    let imageChicken = document.getElementById('chicken');\n    let imagePig = document.getElementById('pig');\n    let imageSheep = document.getElementById('sheep');\n    let imageLama = document.getElementById('lama');\n    let wa = [];\n    var counterChicken = 0;\n    level.forEach((row, i) => {\n        row.forEach((wal, j) => {\n            if (wal === 1) {\n                let position = {\n                    x: 50+45 * j,\n                    y: 60 * i,\n                };\n                wa.push(new _wall__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, position));\n            } else if (wal ===2){\n                let position = {\n                    x: 50+45*j,\n                    y: 60*i\n                };\n                wa.push(new _items__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game,position));\n            } else if (wal===3){\n                let position = {\n                    x: 50 + 45 * j,\n                    y: 60 * i\n                };\n                wa.push(new _animal__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game, imageChicken, position,128,128));\n                counterChicken +=1;\n            } else if(Array.isArray(wal)&&wal[0]===4){\n                let position = {\n                    x: 50 + 45 * j,\n                    y: 60 * i\n                };\n                wa.push(new _spider__WEBPACK_IMPORTED_MODULE_3__[\"default\"](game,position.x, position.y, wal[1]));\n            }\n        });\n    });\n    return [wa,counterChicken];\n}\n\nconst level1 = [\n    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 3, 1, 2, 0, 0, 0, 0, 0, 0, [4,1], 0],\n    [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0],\n    [0, 0, [4,0.5], 0, 0, 0, 0, 1, 1, 0, 1, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]\n];\nconst level2 = [\n    [0, 0, 1, 0, 0, 0, 0, [4, 0.3], 0, 0, 0, 0],\n    [0, 0, 1, 3, 2, 0, 0, 0, 0, 3, 0, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, [4, 0.4]],\n    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],\n    [0, [4,1.2], 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n    [0, 3, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],\n    [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],\n    [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],\n    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]\n];\nconst level3 = [\n    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 3, 1, 3, 2, 0, 0, 0, 0, 3, [4,0.5], 0],\n    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [[4,0.4], 0, 0, 0, 0, 4, 0, 1, 1, 1, 1, 0],\n    [0, 0, 0, 0, [4,1.4],0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 3, 0, 0, 1, 1, [4,0.2], 1, 1],\n    [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],\n    [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1]\n];\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/spider.js":
/*!***********************!*\
  !*** ./src/spider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wall */ \"./src/wall.js\");\n\n\nclass Spider{\n    constructor(game, positionX,positionY,scale){\n        this.image = document.getElementById('spider')\n        this.position = {x: positionX, y: positionY};\n        this.oldPosition = { x: positionX, y: positionY };\n        this.scale = scale;\n        this.srcX = 0;\n        this.srcy = 0;\n        this.sheetWidth = 687;\n        this.sheetHeight = 692;\n        this.column = 7;\n        this.row = 7;\n        this.spriteWidth = this.sheetWidth / this.column;\n        this.spriteHeight = this.sheetHeight / this.row;\n        this.currentFrame = 0;\n        this.game = game;\n        this.maxSpeed = 3;\n        this.speedX = this.maxSpeed;\n        this.speedY = this.maxSpeed;\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.frame = 2;\n        this.counter = 0;\n    }\n    healthlost(player){\n        player.lives -=1;\n    }\n    updateFrame(){\n        this.oldPosition.x = this.position.x;\n        this.oldPosition.y = this.position.y;\n        this.position.x += this.speedX;\n        this.position.y += this.speedY;\n        var instancesOfWall = this.game.gameObjects.filter(obj=> obj instanceof _wall__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);// filtered all wall objects have been created in game class. \n         instancesOfWall.forEach(wall => {//go through this wall lists and make sure this(spider) don't touch wall.\n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(wall, this, -25)) {//if left right touch first\n                if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(wall, this, -30)) {//make sure it collide the item, not just left and right of the whole screen.\n                    this.position.x = this.oldPosition.x;//spider send back to old position before collision\n                    this.speedX = - this.speedX;//spider bounce back x direction\n                }\n            } \n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(wall, this, -35)) {\n                if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(wall, this, -25)) {\n                    this.position.y = this.oldPosition.y;\n                    this.speedY = - this.speedY;\n                }\n            }\n\n        });\n        if(this.position.x - this.gameWidth > -90 || this.position.x < -15) {\n            this.speedX  = -this.speedX;\n        }//bounce back when touching edges\n\n        if (this.position.y - this.gameHeight > -90 || this.position.y < -20) {\n            this.speedY = -this.speedY;\n        }   //bounce back when touching edges\n\n        this.currentFrame = ++this.currentFrame % (this.column - 1);\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = this.frame * this.spriteHeight;\n\n        const distance = 50*this.scale;\n\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this.game.player, this, distance) && \n        Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.player, this, distance)){\n            this.frame = this.speedY > 0 ? 4 : 5;\n            if (this.position.x > this.game.player.position.x) {\n                this.speedX = -this.maxSpeed;// following the player\n            } else {\n                this.speedX = this.maxSpeed;\n            }\n            if (this.position.y > this.game.player.position.y) {\n                this.speedY = -this.maxSpeed;\n            } else {\n                this.speedY = this.maxSpeed;\n            }\n        } else {\n            this.frame = this.speedY > 0 ? 2 : 3;\n        }\n        if(this.game.player.lives >0){\n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this.game.player, this, -distance/2 ) && Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.player, this, -(distance/2))) {    \n                    if(this.scale>=1.2){this.game.player.lives -=1.5;}//damage from spider, the bigger the more damage.\n                    else if (this.scale < 1.2&& this.scale>=0.8){this.game.player.lives -=0.8;}\n                    else if(this.scale <0.8 && this.scale >=0.5){this.game.player.lives -=0.5;}\n                    else{this.game.player.lives -= 0.1;}\n        }}\n    }\n\n    draw(ctx) {\n        this.updateFrame();\n        ctx.drawImage(\n            this.image,\n            this.srcX,\n            this.srcY,\n            this.spriteWidth,\n            this.spriteHeight,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth*this.scale,\n            this.spriteHeight*this.scale\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spider);\n\n//# sourceURL=webpack:///./src/spider.js?");

/***/ }),

/***/ "./src/tillie.js":
/*!***********************!*\
  !*** ./src/tillie.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Tillie {\n    constructor(game){\n        // debugger\n        this.image = document.getElementById('tillie');\n        this.position = { x: 10, y: 600 };\n        this.srcX = 0;\n        this.srcY = 0;\n        this.sheetWidth = 576;\n        this.sheetHeight = 256;\n        this.column = 9;\n        this.row = 4;\n        this.spriteWidth = this.sheetWidth / this.column;\n        this.spriteHeight = this.sheetHeight / this.row;\n        this.currentFrame = 0;//animation spritesheet horizontal sprite\n        this.game = game;\n        this.speedX = 0;\n        this.speedY = 0;\n        this.maxSpeed = 6;\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.lives = 100;\n        this.oldPosition ={x:10, y:600};\n        this.centerPosition={x:this.position.x+this.spriteWidth/2, y:this.position.y+this.spriteHeight/2};\n        this.path =[];\n        \n        //\n        // this.invulnerable = false;\n    }\n\n    updateFrame() {\n        this.centerPosition = { x: this.position.x + this.spriteWidth / 2, y: this.position.y + this.spriteHeight/2 };\n        this.healthmove();\n        this.oldPosition.x = this.position.x;\n        this.oldPosition.y = this.position.y;\n        this.position.x += this.speedX;\n        this.position.y += this.speedY;\n        this.path.push([this.centerPosition.x, this.centerPosition.y]);\n        if (this.position.x < -20) this.position.x = -20;\n        if (this.position.x - this.gameWidth > -50)\n            this.position.x = this.gameWidth - 50;\n        if (this.position.y < -10) this.position.y = -10;\n        if (this.position.y - this.gameHeight > -70)\n            this.position.y = this.gameHeight -70;\n\n    }\n    healthmove() {\n    var elem = document.getElementById(\"myBar\");\n    var width = this.lives;\n    elem.style.width = width + '%';//HP decreasing, by changing persentage.\n    elem.innerHTML = Math.round(width);\n    }\n    facingRight() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 3 * this.spriteHeight;\n    }\n\n    facingLeft() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 1 * this.spriteHeight;\n    }\n\n    facingDown() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 2 * this.spriteHeight;\n    }\n\n    facingUp() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 0 * this.spriteHeight;\n    }\n\n    draw(ctx){  \n        // debugger\n        this.updateFrame();\n        ctx.drawImage(\n            this.image,\n            this.srcX,\n            this.srcY,\n            this.spriteWidth,   \n            this.spriteHeight,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth,\n            this.spriteHeight\n        );\n    }\n\n    movingLeft(){\n        this.facingLeft();\n        this.speedX = -this.maxSpeed;\n        \n    }\n\n    movingRight(){\n        this.facingRight();\n        this.speedX = this.maxSpeed;\n        \n    }\n\n    movingUp(){\n        this.facingUp();\n        this.speedY = -this.maxSpeed;\n        \n    }\n\n    movingDown(){\n        this.facingDown();\n        this.speedY = this.maxSpeed;\n        \n    }\n\n    stopX(){\n        this.speedX = 0;\n        if(this.speedY > 0){\n            this.facingDown();\n        }else if(this.speedY < 0) {\n            this.facingUp();\n        }\n    }\n\n    stopY(){\n        this.speedY = 0;\n        if (this.speedX > 0){\n            this.facingRight();\n        }else if (this.speedX < 0 ){\n            this.facingLeft();\n        }\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tillie);\n\n//# sourceURL=webpack:///./src/tillie.js?");

/***/ }),

/***/ "./src/wall.js":
/*!*********************!*\
  !*** ./src/wall.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spider */ \"./src/spider.js\");\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nclass Wall {\n    constructor(game, position){\n        this.image = document.getElementById('wall');\n        this.game = game;\n        this.position = position;\n        this.spriteWidth = 45;\n        this.spriteHeight = 60;\n        \n    }\n\n    notRepeat (arr, po){\n        arr.forEach(ele => {\n            if(ele[0] === po[0] && ele[1] === po[1]){\n                return false;\n            }\n        });\n        return true;\n    }\n    update (){\n        // this.game.clone.forEach(spider=>{\n        //     if (collision(spider, this, -25)) {//if left right touch first\n        //         if (collisionUpDown(spider, this, -10)) {//make sure it collide the item, not just left and right of the whole screen.\n        //             spider.position.x = spider.oldPosition.x;//spider send back to old position before collision\n        //             spider.speedX = - spider.speedX;//spider bounce back x direction\n        //         }\n        //     } if (collisionUpDown(spider, this, -10)) {//if up and down touch first \n        //         if (collision(spider, this, -25)) {//same idea from line 25\n        //             spider.position.y = spider.oldPosition.y;//same idea from line 26\n        //             spider.speedY = - spider.speedY;// same idea from line 27\n        //         }\n        //     }\n\n        // });\n        // if (collision(this.game.spider, this, -25)) {//if left right touch first\n        //     if (collisionUpDown(this.game.spider, this, -10)) {//make sure it collide the item, not just left and right of the whole screen.\n        //         this.game.spider.position.x = this.game.spider.oldPosition.x;//spider send back to old position before collision\n        //         this.game.spider.speedX = - this.game.spider.speedX;//spider bounce back x direction\n        //     }\n        // } if (collisionUpDown(this.game.spider, this, -10)) {//if up and down touch first \n        //     if (collision(this.game.spider, this, -25)) {//same idea from line 25\n        //         this.game.spider.position.y = this.game.spider.oldPosition.y;//same idea from line 26\n        //         this.game.spider.speedY = - this.game.spider.speedY;// same idea from line 27\n        //     }\n        // }\n\n        // player collision below\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_1__[\"collision\"])(this.game.player, this, -20)){//if left right touch first\n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_1__[\"collisionUpDown\"])(this.game.player, this, -15)){\n                this.game.player.position.x = this.game.player.oldPosition.x;//same idea from line 26 But, it does not need to bounce back.\n                }\n            }\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_1__[\"collisionUpDown\"])(this.game.player, this, -15)){//if up and down touch first   \n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_1__[\"collision\"])(this.game.player, this, -25)){\n                 this.game.player.position.y = this.game.player.oldPosition.y;\n             }\n         } \n}\n    draw(ctx){\n        this.update();\n        ctx.drawImage(\n            this.image,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth,\n            this.spriteHeight\n        );\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wall);\n\n//# sourceURL=webpack:///./src/wall.js?");

/***/ })

/******/ });