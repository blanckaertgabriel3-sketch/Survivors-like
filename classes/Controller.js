import Player from "./Player.js"
export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		this.player = new Player(this.view.game);
		this.mouseX;
		this.mouseY;
		
		this.view.game.addEventListener("mouseup", (event) => {
			this.view.clearCanvas();
			this.view.bulletTrajectory(this.player, this.mouseX, this.mouseY);
		});
		this.view.game.addEventListener("mousemove", (e) => {this.updateDisplay(e)});
		this.view.game.addEventListener("mouseenter", (e) => {this.updateDisplay(e)});
		this.view.game.addEventListener("mouseleave", (e) => {this.updateDisplay(e)});

	}
	updateDisplay(event) {
		if(event != undefined) {
			this.mouseX = event.clientX - this.view.game.getBoundingClientRect().left;
			this.mouseY = event.clientY - this.view.game.getBoundingClientRect().top;
		}
	}
}