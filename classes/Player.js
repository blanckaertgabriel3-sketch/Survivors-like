export default class Player {
	constructor(game) {
		this.posX = Number(game.style.width.replace("px", '')/2) ;
		this.posY = Number(game.style.height.replace("px", '')/2);
		
	}

}