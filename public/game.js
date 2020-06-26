function Game() {}

Game.prototype = {
	start: function() {

		// Create game
		var game = new Phaser.Game(160, 144, Phaser.CANVAS, 'content', null);

		game.state.add('boot', BootState);
		game.state.add('intro', IntroState);
		game.state.add('menu', MenuState);

		// Start boot
		game.state.start('boot');
	}
}

window.onload = function() {

	var game = new Game();

	game.start();
}
