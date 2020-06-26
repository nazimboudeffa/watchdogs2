var IntroState = function() {};
var a, b

IntroState.prototype = {
    init: function(){
      this.stage.backgroundColor = '#b70eec',
      this.game.stage.smoothed = false
    },

    preload: function() {
      this.load.image('pulp', 'assets/images/PULP_POPUP_01.png')
      this.load.image('scream', 'assets/images/SCREAMER_06.png')
      this.load.image('syz', 'assets/images/dedsec.png')
      this.load.audio('menu_theme', 'assets/sounds/dedsec.ogg')
    },

    create: function() {
      this.init(),

      this.game.world.setBounds(0, 0, 160, 144);

      b = this.game.add.image(0, 0, 'scream');
      b.scale.setTo(0.14)
      //b.anchor.set(.5, .5);

      a = this.game.add.image(0, 144, 'pulp');
      a.scale.setTo(0.1)
      a.anchor.set(.5, .5);

      // Mouse click events
		  this.translate();

    },

    translate: function(){
      var c = this.game.add.tween(a).to({x: 50, y: 100, angle: 0, alpha: 1}, 1000, 'Quad.easeInOut', true, 1000);
      c.onComplete.add(this.nextStte, this);
    },

    nextStte: function(){
      this.game.state.start('menu')
    }
}
