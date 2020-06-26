var BootState = function() {};

BootState.prototype = {
  init: function() {
    this.stage.backgroundColor = '#b70eec'
    this.game.stage.smoothed = false
  },

	preload: function() {
    let text = this.add.text(this.world.centerX, this.world.centerY, 'LOADING', { font: "16px 'gameboy'", fill: '#5930ba', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

  },

  create: function(){
    this.init()
  },

	render: function() {
		this.game.state.start('intro');
	}
}
