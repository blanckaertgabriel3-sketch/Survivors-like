export default class View {
	constructor() {
		this.game = document.getElementById("game");
		this.ctx = this.game.getContext("2d");
		this.game.width = 500;
		this.game.height = 500;
		this.game.border = 2;
		this.canvasLeft = this.game.getBoundingClientRect().left;
		this.canvasTop = this.game.getBoundingClientRect().top;
		this.imgIsLoaded = false;
		this.loadImage();
		this.spriteAttackSize = 64;
		this.spriteWalkSize = 128;
		
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
	drawPlayer(player) {
		let sx, sy, sWidth, sHeight, dWidth, dHeight; 
		if(player.isAttacking) {
			if(player.attackFrameIndex != 0) {
				sx = player.attackFrameIndex*this.spriteAttackSize;
			}
			else {
				sx = this.spriteAttackSize;
			}
			sy = player.currentAttackAnimationRow*this.spriteAttackSize;
			sWidth = this.spriteAttackSize;
			sHeight = this.spriteAttackSize;
			dWidth = this.spriteAttackSize;
			dHeight = this.spriteAttackSize;
		}
		else if(player.isWalking) {
			if(player.walkFrameIndex != 0) {
				sx = player.walkFrameIndex*this.spriteWalkSize;
			}
			else {
				sx = this.spriteWalkSize;
			}
			sy = player.currentWalkAnimationRow*this.spriteWalkSize;
			sy += this.spriteAttackSize * 54;
			sWidth = this.spriteWalkSize;
			sHeight = this.spriteWalkSize;
			dWidth = this.spriteWalkSize;
			dHeight = this.spriteWalkSize;
		}
		console.log("sx", sx);
		console.log("sy", sy);
		this.ctx.drawImage(this.img, sx, sy, sWidth, sHeight, player.posX, player.posY, dWidth, dHeight);
	}
	render(player) {
		this.clearCanvas();
		this.drawPlayer(player);
	}
	loadImage() {
		this.img = new Image();
		this.img.src = "../img/spritesheet/1.png";
		this.img.addEventListener("load", () => {
			this.imgIsLoaded = true;
		})

	}
	
}