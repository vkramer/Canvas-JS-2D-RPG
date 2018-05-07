"use strict";

// ##### TEMORARY GLOBAL VARS ##################################################
const map1 = [
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 0, 1, 4, 2, 2, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 4, 2, 2, 4, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 3, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const image = new Image(512, 512);
image.src = 'assets/images/tilesets/env_tile_16.png';

const image2 = new Image(512, 512);
image2.src = 'assets/images/tilesets/env_tile_16_grass.png';

var tiles = [];

// ##### CLASSES ###############################################################

class Launcher {
    constructor(title, width, height, frameRate) {
        const engine = new CoreEngine(title, width, height, frameRate);

        engine.start();
    }
}

class CoreEngine {
    constructor(title, width, height, frameRate) {
        this.isRunning = false;
        this.title = title;
        this.width = width;
        this.height = height;
        this.display;
        this.ctx;
        this._this = this;
        this.fps = 0;
        this.keyHandler;
        this.handler;
        this.camera;

        this.frameTime = 1000 / frameRate;

        this.gameState;
    }

    init() {
        this.handler = new Handler(this._this);

        this.display = new Display(this.title, this.width, this.height);
        this.ctx = this.display.getContext();

        this.camera = new Camera(this.handler, 0, 0);

        this.keyHandler = new KeyboardHandler();
        this.keyHandler.init();

        this.gameState = new GameState(this.handler);
        this.gameState.setState(this.gameState);
        this.gameState.init();

    }

    start() {
        if(this.isRunning)
            return;
        this.isRunning = true;

        this.run();
    }

    run() {
        this.isRunning = true;

        this.init();

        let _this = this._this;

        let render = false;

        let frames = 0;
        let frameCounter = 0;
        let lastTime = performance.now();
        let unprocessedTime = 0;

        function engineLoop() {
            if(_this.isRunning) {
                let startTime = performance.now();
                let passedTime = startTime - lastTime;
                lastTime = startTime;

                unprocessedTime += passedTime;
                frameCounter += passedTime;

                if(unprocessedTime > _this.frameTime) {
                    unprocessedTime -= _this.frameTime;

                    render = true;
                    _this.update();

                    if(frameCounter >= 1000) {
                        _this.fps = frames;
                        frames = 0;
                        frameCounter = 0;
                    }
                }

                if(render) {
                    _this.render();
                    frames++;
                }
            }

            requestAnimationFrame(engineLoop);
        }

        requestAnimationFrame(engineLoop);

    }

    update(dt) {
        this.keyHandler.update();

        if(this.gameState != null) {
            this.gameState.update(dt);
        }
    }

    render() {
        const context = this.ctx;

        // CLEAR SCREEN
        context.clearRect(0, 0, this.width, this.height);

        // RENDER WORLD
        if(this.gameState != null) {
            this.gameState.render(context);
        }

        // RENDER UI
        context.fillStyle = "#ff0000";
        context.font = "18px sans-serif";
        context.fillText("FPS: " + this.getFPS(), 20, 40);
        context.fillText("MS:  " + 1000 / this.getFPS(), 20, 60);
    }

    getFPS() {
        return this.fps;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getKeyHandler() {
        return this.keyHandler;
    }

    getCamera() {
        return this.camera;
    }
}

class Display {
    constructor(title, width, height) {
        this.canvas;
        //this.canvasWrapper;
        this.context = null;

        this.title = title;
        this.width = width;
        this.height = height;

        this.createDisplay();
    }

    createDisplay() {
        document.title = this.title;
        //this.canvasWrapper = document.getElementById("canvas-wrapper");
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    getContext() {
        return this.context;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

class KeyboardHandler {
    constructor() {
        this.keysDown = [];

        this.up;
        this.down;
        this.left;
        this.right;

        this._this = this;
    }

    init() {
        let _this = this._this;
        window.onkeydown = function(e) {
            _this.keysDown[e.keyCode] = true;
        }

        window.onkeyup = function(e) {
            _this.keysDown[e.keyCode] = false;
        }
    }

    update() {
        this.up = this.keysDown[87];
        this.down = this.keysDown[83];
        this.left = this.keysDown[65];
        this.right = this.keysDown[68];
    }

    getKeys() {
        return this.keysDown;
    }


}

class Handler {
    constructor(coreEngine) {
        this.engine = coreEngine;
        this.world;
    }

    getWidth() {
        return this.engine.getWidth();
    }

    getHeight() {
        return this.engine.getHeight();
    }

    getKeyHandler() {
        return this.engine.getKeyHandler();
    }

    getCamera() {
        return this.engine.getCamera();
    }

    getDisplay() {
        return this.engine.getDisplay();
    }

    getWorld() {
        return this.world;
    }

    setWorld(world) {
        this.world = world;
    }
}

class State {
    constructor(handler) {
        this.handler = handler;
        this.currentState = null;
    }

    update(dt) {

    }

    render(context) {

    }

    getState() {
        return this.currentState;
    }

    setState(state) {
        this.currentState = state;
    }
}

class GameState extends State {
    constructor(handler) {
        super(handler);
        this.world = new World(handler, "assets/maps/1.map");
    }

    init() {
        this.handler.setWorld(this.world);
        this.world.init();
    }

    update(dt) {
        this.world.update(dt);
    }

    render(context) {
        this.world.render(context);
    }
}

class Camera {
    constructor(handler, xOffset, yOffset) {
        this.handler = handler;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }

    centerOnPlayer(player) {
        this.xOffset = player.getX() - this.handler.getWidth() / 2;
        this.yOffset = player.getY() - this.handler.getHeight() / 2;
    }

    move(xAmt, yAmt) {
        this.xOffset += xAmt;
        this.yOffset += yAmt;
    }

    getXOffset() {
        return this.xOffset;
    }

    getYOffset() {
        return this.yOffset;
    }

    setXOffset(xOffset) {
        this.xOffset = xOffset;
    }

    setYOffset(yOffset) {
        this.yOffset = yOffset;
    }
}

class Entity {
    constructor(handler, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.handler = handler;

        // Add Bounding Rectangle
    }

    update() {

        this.move();
        this.handler.getCamera().centerOnPlayer(this);

    }

    draw(context) {
        context.fillStyle = "#224acc";
        context.fillRect(this.x - this.handler.getCamera().xOffset, this.y - this.handler.getCamera().yOffset, 32, 32)
    }

    move() {
        if(this.handler.getKeyHandler().up) {
            this.y -= 5;
        }
        if(this.handler.getKeyHandler().down) {
            this.y += 5;
        }

        if(this.handler.getKeyHandler().left) {
            this.x -= 5;
        }
        if(this.handler.getKeyHandler().right) {
            this.x += 5;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }
}

class Player extends Entity {
    constructor(handler, x, y, width, height) {
        super(handler, x, y, width, height);
    }
}

class Tile {

    constructor(texture, id) {
        this.texture = texture;
        this.id = id;
        this.x;
        this.y;
        tiles[id] = this;
    }

    update(dt) {

    }

    render(context) {
        context.drawImage(
            x,
            y,
            souce_width,
            source_height
        );
    }

    getId() {
        return this.id;
    }

    isSolid() {
        return false;
    }
}

class World {
    constructor(handler, path) {
        this.tiles = [];

        this.handler = handler;
        this.loadWorld();
        this.entity = new Entity(this.handler, 400, 400, 32, 32);
        //console.log(this.tiles);
    };

    init() {
        //
    }

    loadWorld() {
        for(let x = 0; x < 40; x++) {
            for(let y = 0; y < 40; y++) {
                if(!this.tiles[x])
                    this.tiles[x] = [];
                this.tiles[x][y] = map1[y * 40 + x];
            }
        }
    }

    update(dt) {
        this.entity.update(dt);
    }

    render(context) {
        // RENDER TILEMAP
        for(let y = 0; y < 40; y++) {
            for(let x = 0; x < 40; x++) {
                let value = this.tiles[x][y];

                let imageX = 0;
                let imageY = 0;

                switch(value) {
                    case 0:
                        imageX = 2;
                        imageY = 2;
                        break;
                    case 1:
                        imageX = 22;
                        imageY = 2;
                        break;
                    case 2:
                        imageX = 42;
                        imageY = 2;
                        break;
                    case 3:
                        imageX = 62;
                        imageY = 2;
                        break;
                    case 4:
                        imageX = 2;
                        imageY = 22;
                        break;
                    default:
                        imageX = 0;
                        imageY = 0;
                }

                context.drawImage(
                    image,
                    imageX,
                    imageY,
                    16,
                    16,
                    x * 64 - this.handler.getCamera().getXOffset(),
                    y * 64 - this.handler.getCamera().getYOffset(),
                    64,
                    64
                );

                context.fillStyle = "#000000";
                context.strokeRect(x * 64 - this.handler.getCamera().getXOffset(), y * 64 - this.handler.getCamera().getYOffset(), 64, 64);
            }
        }

        // RENDER TILEMAP EXTRA PLAYER
        // for(var y = 0; y < 40; y++) {
        //     for(var x = 0; x < 40; x++) {
        //         var value = this.tiles[x][y];
        //
        //         var newValue = 1;
        //
        //         var imageX = 0;
        //         var imageY = 0;
        //
        //         switch(newValue) {
        //             case 0:
        //                 imageX = 2;
        //                 imageY = 2;
        //                 break;
        //             case 1:
        //                 imageX = 22;
        //                 imageY = 2;
        //                 break;
        //             case 2:
        //                 imageX = 42;
        //                 imageY = 2;
        //                 break;
        //             case 3:
        //                 imageX = 62;
        //                 imageY = 2;
        //                 break;
        //             case 4:
        //                 imageX = 2;
        //                 imageY = 22;
        //                 break;
        //             default:
        //                 imageX = 0;
        //                 imageY = 0;
        //         }
        //
        //         if(value == 0) {
        //             context.drawImage(
        //                 image,
        //                 imageX,
        //                 imageY,
        //                 16,
        //                 16,
        //                 x * 64 - this.handler.getCamera().getXOffset(),
        //                 y * 64 - this.handler.getCamera().getYOffset(),
        //                 64,
        //                 64
        //             );
        //         }
        //
        //     }
        // }

        // RENDER ENTITIES

        // RENDER PLAYER
        this.entity.draw(context);

        context.fillStyle = "rgb(0, 0, 255)";
        context.font = "18px sans-serif";
        context.fillText("POS: [x: " + this.entity.x + " y: " + this.entity.y + "]", 20, 85);
    }

    getTile(x, y) {
        return this.tiles[x][y];
    }

}

// ##### HELPER METHODS ########################################################

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// ##### LAUNCH GAME ###########################################################

window.onload = function() {
    var canvasWrapper = document.getElementById("canvas-wrapper");
    // Launch the Game
    const launcher = new Launcher("Prototype RPG", canvasWrapper.offsetWidth, canvasWrapper.offsetHeight, 100);
}
