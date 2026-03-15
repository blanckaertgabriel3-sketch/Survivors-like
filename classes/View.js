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
		this.spriteWalkSize = 64;
		this.spriteAttackSize = 128;
		
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
		if(player.walkFrameIndex == 0) {
			this.ctx.drawImage(this.img, player.walkFrameIndex, player.currentWalkAnimationRow*this.spriteWalkSize, this.spriteWalkSize, this.spriteWalkSize, player.posX, player.posY, this.spriteWalkSize, this.spriteWalkSize);
		}
		else {
			this.ctx.drawImage(this.img, player.walkFrameIndex*this.spriteWalkSize, player.currentWalkAnimationRow*this.spriteWalkSize, this.spriteWalkSize, this.spriteWalkSize, player.posX, player.posY, this.spriteWalkSize, this.spriteWalkSize);
		}
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