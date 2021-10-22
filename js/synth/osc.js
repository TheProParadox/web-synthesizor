class Osc {
  attackLevel = 1.0;
  releaseLevel = 0;

  attackTime = 0.001;
  decayTime = 0.2;
  susPercent = 0.2;
  releaseTime = 0.5;

  env;
  osc;

  freq;
  shape;

  /*constructor(freq) {
    this.freq = freq
  }*/

  setup() {
    this.env = new p5.Envelope();
    this.osc = new p5.Oscillator('sine');
    this.osc.amp(this.env);
    this.osc.freq(this.freq);
    this.osc.start();
  }

  playEnv(freq, shape, a, d, s, r) {
    // ensure that audio is enabled
    this.freq = freq;
    this.shape = shape;

    this.attackTime = (a / 1000);
    this.decayTime = (d / 100);
    this.susPercent = (s / 100);
    this.releaseTime = (r / 100);

    console.log('adsr: ', a, d, s, r)

    this.osc.stop();
    this.osc.setType(shape)
    this.osc.freq(this.freq);
    this.osc.start();

    this.env.setADSR(this.attackTime, this.decayTime, this.susPercent, this.releaseTime);
    this.env.setRange(this.attackLevel, this.releaseLevel);
    this.env.play();
  }
}
