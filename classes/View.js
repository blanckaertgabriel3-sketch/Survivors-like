export default class View {
	constructor() {
		this.game = document.getElementById("game");
		this.ctx = this.game.getContext("2d");
		this.game.style.width = "500px";
		this.game.style.height = "500px";
		this.game.style.border = "2px solid black";
	}
}