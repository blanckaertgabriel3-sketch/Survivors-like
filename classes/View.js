export default class View {
	constructor() {
		this.game = document.getElementById("game");
		this.ctx = this.game.getContext("2d");
		this.game.width = 500;
		this.game.height = 500;
		this.game.style.border = "2px solid black";
	}
	bulletTrajectory(player, mouseX, mouseY) {
		this.ctx.beginPath();
		this.ctx.moveTo(player.posX, player.posY);
		this.ctx.lineTo(mouseX, mouseY);
		this.ctx.lineWidth = 5;
		this.ctx.stroke();
	}
	clearCanvas() {
		this.ctx.clearRect(0, 0, this.game.width, this.game.height);
	}
}