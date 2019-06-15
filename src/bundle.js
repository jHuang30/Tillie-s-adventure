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

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: collision, collisionUpDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collision\", function() { return collision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionUpDown\", function() { return collisionUpDown; });\nfunction collision (obj1, obj2, distance){\n\n    let rightOfobj1 = obj1.position.x + obj1.spriteWidth;\n    let leftOfobj1 = obj1.position.x;\n\n    let rightOfobj2 = obj2.position.x + obj2.spriteWidth;\n    let leftOfobj2 = obj2.position.x;\n\n    if (\n        leftOfobj2 <= rightOfobj1 + distance &&\n        rightOfobj2 >= leftOfobj1 - distance\n    ) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nfunction collisionUpDown(obj1, obj2, distance){\n    let bottomOfobj1 = obj1.position.y + obj1.spriteHeight;\n    let topOfobj1 = obj1.position.y;\n\n\n    let bottomOfobj2 = obj2.position.y + obj2.spriteHeight;\n    let topOfobj2 = obj2.position.y;\n\n    if (bottomOfobj1 >= topOfobj2 - distance &&\n            topOfobj1 <= bottomOfobj2 + distance )\n        {\n            return true;\n        } else {\n            return false;\n        }\n}\n\n\n//# sourceURL=webpack:///./src/collision.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Control{\n    constructor(player){\n        document.addEventListener(\"keydown\", event => {\n            switch (event.keyCode) {\n                case 37:\n                    player.movingLeft();\n                    break;\n                case 38:\n                    player.movingUp();\n                    break;\n                case 39:\n                    player.movingRight();\n                    break;\n                case 40:\n                    player.movingDown();\n                    break;\n                default:\n                    break;\n            }\n        });\n\n        document.addEventListener('keyup', e => {\n            switch(event.keyCode){\n                case 37:\n                    if (player.speedX < 0) \n                        return player.stopX();\n                        break;\n                case 38:\n                    if (player.speedY < 0) \n                        return player.stopY();\n                        break;\n                case 39:\n                    if (player.speedX > 0) \n                        return player.stopX();\n                        break;\n                case 40:\n                    if (player.speedY > 0) \n                        return player.stopY();\n                        break;\n                    \n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Control);\n\n//# sourceURL=webpack:///./src/control.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tillie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tillie */ \"./src/tillie.js\");\n/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spider */ \"./src/spider.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\n\n\nclass Game {\n    constructor(width, heigth){\n        this.gameWidth = width; \n        this.gameHeight = heigth;   \n        this.heartImage = document.getElementById('heart');\n        this.potionImage = document.getElementById('potion');\n        this.potionPosition = {\n            x: Math.floor(Math.random() * 751),\n            y: Math.floor(Math.random() * 551)\n        }\n    }\n\n\n    start(){\n        this.player = new _tillie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.spider = new _spider__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n        let walls = Object(_level__WEBPACK_IMPORTED_MODULE_3__[\"buildLevel\"])(this, _level__WEBPACK_IMPORTED_MODULE_3__[\"level1\"]);\n\n        this.gameObjects = [this.player, this.spider, ...walls];\n\n        new _control__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.player);\n        \n    }\n\n    drawLives(ctx){\n        ctx.drawImage(\n            this.heartImage,\n            650,\n            10,\n            40,\n            40,\n        )   \n\n        ctx.fillStyle = \"#FFF\";\n        ctx.font = \"40px Indie Flower\";\n        ctx.fillText(this.player.lives, 700, 40);\n        \n    }\n\n    drawPotion(ctx){\n        ctx.drawImage(\n            this.potionImage,\n            this.potionPosition.x,\n            this.potionPosition.y,\n            40,\n            40\n        )\n    }\n\n    draw(ctx){\n        this.gameObjects.forEach(obj => {\n            obj.draw(ctx);\n        });\n\n        this.drawLives(ctx);\n        this.drawPotion(ctx);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    var canvas = document.getElementById(\"canvas\");\n    var ctx = canvas.getContext(\"2d\");\n    var sound = document.getElementById(\"sound\");\n    var fps = 50;\n    \n    document.getElementById(\"start-btn\").addEventListener('click', startGame);\n    document.getElementById(\"stop-btn\").addEventListener('click', stopPlay);\n    document.getElementById(\"unmute-btn\").addEventListener('click', play);\n    document.getElementById(\"mute-btn\").addEventListener('click', stopPlay);\n    \n    var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height);\n    \n    \n    function play(){\n        sound.play();\n    }\n    \n    function stopPlay(){\n        sound.pause();\n    }\n    \n    function gameLoop(){\n\n\n        setTimeout(function(){\n            ctx.clearRect(\n                0, 0, canvas.width, canvas.height\n            )\n            game.draw(ctx);\n            requestAnimationFrame(gameLoop);\n        }, fps);\n    }   \n    \n    function startGame(){\n        const wel = document.getElementsByClassName('welcome');\n        wel[0].classList.add(\"hidden\")\n        game.start();\n        gameLoop();\n        play();\n    }\n})\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: buildLevel, level1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLevel\", function() { return buildLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall */ \"./src/wall.js\");\n\n\nfunction buildLevel(game, level){\n    let wa = [];\n\n    level.forEach((row, i) => {\n        row.forEach((wal, j) => {\n            if (wal === 1) {\n                let position = {\n                    x: 50+93 * j,\n                    y: 122 * i,\n                };\n                wa.push(new _wall__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, position));\n            }\n        });\n    });\n    return wa;\n}\nconst level1 = [\n    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n];\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/spider.js":
/*!***********************!*\
  !*** ./src/spider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\nclass Spider{\n    constructor(game){\n        this.image = document.getElementById('spider');\n        this.position = {x: 400, y: 100};\n        this.srcX = 0;\n        this.srcy = 0;\n        this.sheetWidth = 687;\n        this.sheetHeight = 692;\n        this.column = 7;\n        this.row = 7;\n        this.spriteWidth = this.sheetWidth / this.column;\n        this.spriteHeight = this.sheetHeight / this.row;\n        this.currentFrame = 0;\n        this.game = game;\n        this.maxSpeed = 3;\n        this.speedX = this.maxSpeed;\n        this.speedY = this.maxSpeed;\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.frame = 2;\n    }\n    healthlost(player){\n        player.lives -=1;\n        //\n        // player.invulnerable = true;\n        // setTimeout(() => player.invulnerable = false, 1000);\n    }\n    updateFrame(){\n        this.position.x += this.speedX;\n        this.position.y += this.speedY;\n        \n        if(this.position.x - this.gameWidth > -90 || this.position.x < -15) {\n            this.speedX  = -this.speedX;\n        }\n\n        if (this.position.y - this.gameHeight > -90 || this.position.y < -20) {\n            this.speedY = -this.speedY;\n        }   \n\n        this.currentFrame = ++this.currentFrame % (this.column - 1);\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = this.frame * this.spriteHeight;\n\n        const distance = 50;\n\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this.game.player, this, distance) && \n        Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.player, this, distance)){\n            this.frame = this.speedY > 0 ? 4 : 5;\n            if (this.position.x > this.game.player.position.x) {\n                this.speedX = -this.maxSpeed;\n            } else {\n                this.speedX = this.maxSpeed;\n            }\n            if (this.position.y > this.game.player.position.y) {\n                this.speedY = -this.maxSpeed;\n            } else {\n                this.speedY = this.maxSpeed;\n            }\n        } else {\n            this.frame = this.speedY > 0 ? 2 : 3;\n        }\n        let monster = this;\n        if(monster.game.player.lives >0){\n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(monster.game.player, monster, -10 ) && Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.player, monster, distance)) {\n            setTimeout(monster.healthlost(monster.game.player),5000);\n        }}\n    }\n\n    draw(ctx) {\n        this.updateFrame();\n        ctx.drawImage(\n            this.image,\n            this.srcX,\n            this.srcY,\n            this.spriteWidth,\n            this.spriteHeight,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth,\n            this.spriteHeight\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spider);\n\n//# sourceURL=webpack:///./src/spider.js?");

/***/ }),

/***/ "./src/tillie.js":
/*!***********************!*\
  !*** ./src/tillie.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Tillie {\n    constructor(game){\n        // debugger\n        this.image = document.getElementById('tillie');\n        this.position = { x: 10, y: 600 };\n        this.srcX = 0;\n        this.srcY = 0;\n        this.sheetWidth = 576;\n        this.sheetHeight = 256;\n        this.column = 9;\n        this.row = 4;\n        this.spriteWidth = this.sheetWidth / this.column;\n        this.spriteHeight = this.sheetHeight / this.row;\n        this.currentFrame = 0;\n        this.game = game;\n        this.speedX = 0;\n        this.speedY = 0;\n        this.maxSpeed = 6;\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.lives = 3;\n\n        //\n        // this.invulnerable = false;\n    }\n\n    updateFrame() {\n        this.position.x += this.speedX;\n        this.position.y += this.speedY;\n        if (this.position.x < -20) this.position.x = -20;\n        if (this.position.x - this.gameWidth > -50)\n            this.position.x = this.gameWidth - 50;\n        if (this.position.y < -10) this.position.y = -10;\n        if (this.position.y - this.gameHeight > -70)\n            this.position.y = this.gameHeight -70;\n\n    }\n\n    facingRight() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 3 * this.spriteHeight;\n    }\n\n    facingLeft() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 1 * this.spriteHeight;\n    }\n\n    facingDown() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 2 * this.spriteHeight;\n    }\n\n    facingUp() {\n        this.currentFrame = ++this.currentFrame % this.column;\n        this.srcX = this.currentFrame * this.spriteWidth;\n        this.srcY = 0 * this.spriteHeight;\n    }\n\n    draw(ctx){  \n        // debugger\n        this.updateFrame();\n        ctx.drawImage(\n            this.image,\n            this.srcX,\n            this.srcY,\n            this.spriteWidth,   \n            this.spriteHeight,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth,\n            this.spriteHeight\n        );\n    }\n\n    movingLeft(){\n        this.speedX = -this.maxSpeed;\n        this.facingLeft();\n    }\n\n    movingRight(){\n        this.speedX = this.maxSpeed;\n        this.facingRight();\n    }\n\n    movingUp(){\n        this.speedY = -this.maxSpeed;\n        this.facingUp();\n    }\n\n    movingDown(){\n        this.speedY = this.maxSpeed;\n        this.facingDown();\n    }\n\n    stopX(){\n        this.speedX = 0;\n        if(this.speedY > 0){\n            this.facingDown();\n        }else if(this.speedY < 0) {\n            this.facingUp();\n        }\n    }\n\n    stopY(){\n        this.speedY = 0;\n        if (this.speedX > 0){\n            this.facingRight();\n        }else if (this.speedX < 0 ){\n            this.facingLeft();\n        }\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tillie);\n\n//# sourceURL=webpack:///./src/tillie.js?");

/***/ }),

/***/ "./src/wall.js":
/*!*********************!*\
  !*** ./src/wall.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\n\nclass Wall {\n    constructor(game, position){\n        this.image = document.getElementById('wall');\n        this.game = game;\n        this.position = position;\n        this.spriteWidth = 93;\n        this.spriteHeight = 122;\n        this.playerposition = [];   \n        this.spiderposition =[];\n        this.distance=0;\n        this.update= this.update.bind(this);\n    }\n    update (){\n        var spiderX = this.game.spider.position.x;\n        var spiderY = this.game.spider.position.y;\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this.game.spider, this, -5) && Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.spider, this, -5)) {\n            if (!this.spiderposition.includes([spiderX, spiderY])) {\n                this.spiderposition.push([spiderX, spiderY]);\n            }\n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.spider, this, -15)) {\n\n                //this.game.spider.position.x = this.spiderposition[0][0];\n                this.game.spider.position.y = this.spiderposition[0][1];\n                this.game.spider.speedX = - this.game.spider.speedX;\n                //this.game.spider.speedX = - this.game.spider.speedX;\n            }else{\n            this.game.spider.position.x = this.spiderposition[0][0];\n            //this.game.spider.position.y = this.spiderposition[0][1];\n            //this.game.spider.speedY = - this.game.spider.speedY;\n            this.game.spider.speedY = - this.game.spider.speedY;\n        }\n        } else{this.spiderposition=[];}\n        var playerX = this.game.player.position.x;\n        var playerY = this.game.player.position.y;\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this.game.player, this, this.distance) &&\n         Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.player, this, this.distance)){\n           if(!this.playerposition.includes([playerX, playerY])){\n               this.playerposition.push([playerX, playerY]);\n                 }\n            if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collisionUpDown\"])(this.game.player, this, this.distance)) {\n                this.game.player.position.y = this.playerposition[0][1];}\n            else if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"collision\"])(this.game.player, this, this.distance))\n            {\n                 this.game.player.position.x = this.playerposition[0][0];\n             }\n        } else\n        {\n             this.playerposition=[];\n        }\n    }\n    draw(ctx){\n        this.update();\n        ctx.drawImage(\n            this.image,\n            this.position.x,\n            this.position.y,\n            this.spriteWidth,\n            this.spriteHeight\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wall);\n\n//# sourceURL=webpack:///./src/wall.js?");

/***/ })

/******/ });