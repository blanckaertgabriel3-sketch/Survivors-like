export default class Player {
	constructor(game) {
		this.posX = game.width/2 ;
		this.posY = game.height/2;
		//directions
		this.direction = {
			NORTH: {id: 0, row: 17},
			EAST: {id: 1, row: 20},
			SOUTH: {id: 2, row: 19},
			WEST: {id: 3, row: 18}
		}
		//start SOUTH
		this.currentDirection = this.direction.SOUTH;
		this.currentWalkAnimationRow = this.currentDirection.row;
		//frames animation
		this.isWalking = true;
		this.walkFrameIndex = 0;
		this.walkFrameNumber = 13;
		this.walkFrameDuration = 5;
		this.walkFrameStep = 0;
	}
	animate(direction) {
		this.changeCurrentDirection(direction);
		//player is walking
		if(this.isWalking) {
			// this.walkFrameIndex = 0;
			// this.walkFrameStep = 0;
			if(this.walkFrameStep < this.walkFrameDuration) {
				this.walkFrameStep +=1;
			}
			else {
				this.walkFrameIndex +=1;
				this.walkFrameStep = 0;
			}
			if(this.walkFrameIndex >= this.walkFrameNumber) {
				this.walkFrameIndex = 0;
			}
		}
	}
	changeCurrentDirection(direction) {
		if(direction.key == "z") {
			this.currentDirection = this.direction.NORTH;
		}
		else if(direction.key == "d") {
			this.currentDirection = this.direction.EAST;
		}
		else if(direction.key == "s") {
			this.currentDirection = this.direction.SOUTH;
		}
		else if(direction.key == "q") {
			this.currentDirection = this.direction.WEST;
		}
		this.currentWalkAnimationRow = this.currentDirection.row;
		console.log("currentD", this.currentDirection);
		console.log("row", this.currentWalkAnimationRow);
	}
}