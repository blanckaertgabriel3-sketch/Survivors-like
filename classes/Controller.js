import Player from "./Player.js"
export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		this.player = new Player(this.view.game);
		this.mouseX;
		this.mouseY;
		this.lastTime = 0;
		
		this.loop = this.loop.bind(this);
		requestAnimationFrame(this.loop);
		// this.view.game.addEventListener("mouseup", () => {
		// 	this.view.bulletTrajectory(this.player, this.mouseX, this.mouseY);
		// });
		window.addEventListener("keypress", (event) => {
			this.player.changeCurrentDirection(event, this.view);
		});
		window.addEventListener("keyup", (event) => {
			this.player.playerIsIdle(event);
		});
		this.view.game.addEventListener("click", () => {
			this.player.playerIsAttacking();
		});
		this.view.game.addEventListener("mousemove", (e) => {this.updateDisplay(e)});
		this.view.game.addEventListener("mouseenter", (e) => {this.updateDisplay(e)});
		this.view.game.addEventListener("mouseleave", (e) => {this.updateDisplay(e)});
	}
	updateDisplay(event) {
		if(event != undefined) {
			this.mouseX = event.clientX - this.view.canvasLeft;
			this.mouseY = event.clientY - this.view.canvasTop;
		}
	}
	loop (timestamp) {
		const delta = timestamp - this.lastTime;
		if(delta >= 1000/60) {
			this.lastTime = timestamp;
			if(this.view.imgIsLoaded) {
				this.view.render(this.player);
				this.player.animate();
			}
		}
		requestAnimationFrame(this.loop);
	}
}