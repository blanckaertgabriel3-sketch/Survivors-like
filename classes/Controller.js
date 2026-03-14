import Player from "./Player.js"
export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		window.addEventListener("keydown", (event) => {
			if(event.key !== undefined) {
				if(event.key == " ") {
					console.log("fire");
				}
			}
		});
		this.player = new Player(this.view.game);
		console.log(this.player);
	}
}