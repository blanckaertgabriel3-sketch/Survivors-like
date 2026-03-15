export default class Player {
	constructor(game) {
		this.game = game;
		this.posX = this.game.width/2 ;
		this.posY = this.game.height/2;
		//directions
		this.direction = {
			NORTH: {id: 0, attackRow: 16},
			EAST: {id: 1, attackRow: 19},
			SOUTH: {id: 2, attackRow: 18},
			WEST: {id: 3, attackRow: 17}
		}
		//start SOUTH
		this.currentDirection = this.direction.SOUTH;
		this.currentAttackAnimationRow = this.currentDirection.attackRow;
		//frames animation
		this.isAttacking = true;
		this.attackFrameIndex = 0;
		this.attackFrameNumber = 13;
		this.attackFrameDuration = 5;
		this.attackFrameStep = 0;
		this.speed = 5;
	}
	animate() {
		//player is attacking
		if(this.isAttacking) {
			// this.attackFrameIndex = 0;
			// this.attackFrameStep = 0;
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
	}
}