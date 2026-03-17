export default class Player {
	constructor(game) {
		this.game = game;
		this.posX = this.game.width/2 ;
		this.posY = this.game.height/2;
		//directions
		this.direction = {
			NORTH: {id: 0, attackRow: 16, walkRow: 0},
			EAST: {id: 1, attackRow: 19, walkRow: 3},
			SOUTH: {id: 2, attackRow: 18, walkRow: 2},
			WEST: {id: 3, attackRow: 17, walkRow: 1}
		}
		//start SOUTH
		this.currentDirection = this.direction.SOUTH;
		this.currentAttackAnimationRow = this.currentDirection.attackRow;
		this.currentWalkAnimationRow = this.currentDirection.walkRow;
		//frames animation
		this.speed = 5;
		this.isAttacking = false;
		this.attackFrameIndex = 0;
		this.attackFrameNumber = 13;
		this.attackFrameDuration = 5;
		this.attackFrameStep = 0;
		this.isWalking = true;
		this.walkFrameIndex = 0;
		this.walkFrameNumber = 9;
		this.walkFrameDuration = 0.5;
		this.walkFrameStep = 0;
	}
	animate() {
		console.log("walkRow", this.currentWalkAnimationRow);
		//player is attacking
		if(this.isAttacking) {
			if(this.attackFrameStep < this.attackFrameDuration) {
				this.attackFrameStep +=1;
			}
			else {
				this.attackFrameIndex +=1;
				this.attackFrameStep = 0;
			}
			if(this.attackFrameIndex >= this.attackFrameNumber) {
				this.attackFrameIndex = 0;
			}
		}
		//player is attacking
		if(this.isWalking) {
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
		this.currentAttackAnimationRow = this.currentDirection.attackRow;
		this.currentWalkAnimationRow = this.currentDirection.walkRow;
	}
}