export default class Player {
	constructor(game) {
		this.game = game;
		this.posX = this.game.width/2 ;
		this.posY = this.game.height/2;
		//directions
		this.direction = {
			NORTH: {id: 0, row: 16},
			EAST: {id: 1, row: 19},
			SOUTH: {id: 2, row: 18},
			WEST: {id: 3, row: 17}
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
		this.speed = 5;
	}
	animate() {
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
				console.log("end Spritesheet animate");
			}
		}
	}
	changeCurrentDirection(direction) {
		if(direction.key == "z") {
			this.currentDirection = this.direction.NORTH;
			if(this.posY - this.speed > -10) {
				this.posY -= this.speed;
			}
		}
		else if(direction.key == "d") {
			this.currentDirection = this.direction.EAST;
			if(this.posX + this.speed < 440) {
				this.posX += this.speed;
			}
		}
		else if(direction.key == "s") {
			this.currentDirection = this.direction.SOUTH;
			if(this.posY + this.speed < 440) {
				this.posY += this.speed;
			}
		}
		else if(direction.key == "q") {
			this.currentDirection = this.direction.WEST;
			if(this.posX - this.speed > 0) {
				this.posX -= this.speed;
			}
		}
		this.currentWalkAnimationRow = this.currentDirection.row;
	}
}