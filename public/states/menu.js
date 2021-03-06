var MenuState = function() {};
var score = 0

MenuState.prototype = {
  init: function() {
    this.stage.backgroundColor = '#b70eec'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
    this.game.stage.smoothed = false
    this.highscore = localStorage.getItem('highscore')
  },

  fontsLoaded: function() {
    this.fontsReady = true
  },

  preload: function() {

  },

  create: function() {
      this.game.world.setBounds(0, 0, 160, 144)
      let ts = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'tsTexture');
      ts.autoScroll(0, 20);
      this.playText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 40, 'PRESS START', { font: "8px 'gameboy'", fill: '#000', align: 'center' });
      this.playText.anchor.setTo(0.5);
      this.label = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 10, 'WATCHDOGS\n2', { font: "12px 'gameboy'", fill: '#000', align: 'center', boundsAlignH: "center", boundsAlignV: "middle" });
      this.label.anchor.setTo(0.5);
      this.playText._tween = this.game.add.tween(this.playText).to({ alpha: 0 }, 600, Phaser.Easing.Linear.In, true, 0, -1, true);
      this.startBtn = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.highscoreLabel = this.game.add.text(this.game.world.centerX, this.game.world.height - 20, 'HIGHSCORE ' + this.highscore, { font: "7px 'gameboy'", fill: '#5930ba', align: 'center', boundsAlignH: "center", boundsAlignV: "middle" });
      this.highscoreLabel.anchor.setTo(0.5)
      if(!this.highscore)this.highscoreLabel.visible = false;
      this.startBtn.onDown.add(() => {
          //this.game.state.start('Game', true);
          //this.game.sound.stopAll();
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          score += 1
          var highscore = localStorage.getItem('highscore')
          if (!highscore || highscore < score) {
                          localStorage.setItem('highscore', score)
          }
      }, this);
      this.music = this.game.sound.add('menu_theme', 1, true);
      this.music.play();
  }
}
