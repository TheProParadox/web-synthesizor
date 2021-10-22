let voices = []
let myDiv;
let oscCount = 2;
let voiceCount = 20;
let voiceCurrent = 0;

let keyboard = new QwertyHancock({
  id: 'keyboard',
  width: parseInt(window.innerWidth),
  height: 150,
  octaves: parseInt(window.innerWidth / 300),
  startNote: 'A2',
  keyOctave: '3',
  whiteKeyColour: 'white',
  blackKeyColour: 'black',
  activeColour: '#f36e39'
});

function setup() {
  getAudioContext().suspend();
  for(let c=0; c<voiceCount; c++) {
    let synth = new Osc
    synth.setup();
    voices.push(synth);
  }
  noCanvas()
}
// Starts audio context on a user interaction
function touchStarted() {
  if (getAudioContext().state !== 'running') {
    userStartAudio();
    console.log('Audio now enabled');
  }
  if (document.getElementById('audio-init') !==  null) {
    document.getElementById('audio-init').remove();
  }
  return false
}
keyboard.keyDown = function (note, frequency) {
  a = dialValue('dial_a1');
  d = dialValue('dial_d1');
  s = dialValue('dial_s1');
  r = dialValue('dial_r1');
  osc1Shape = getWaveShape(1);
  osc2Shape = getWaveShape(2);

  console.log('dial_a1: ', dialValue('dial_a1'));
  console.log('dial_d1: ', dialValue('dial_d1'));
  console.log('dial_s1: ', dialValue('dial_s1'));
  console.log('dial_r1: ', dialValue('dial_r1'));

  console.log('osc1 shape: ', osc1Shape);
  console.log('osc2 shape: ', osc2Shape);
  // For each key pressed set 2 oscillators are set a frequency of pressed key
  switch (voiceCurrent) {
    case 0:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 1:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 2:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 3:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 4:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 5:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 6:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 7:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 8:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent++
      break;
    case 9:
      voices[voiceCurrent].playEnv(frequency, osc1Shape,  a, d, s, r);
      voices[voiceCurrent + 1].playEnv(frequency, osc2Shape,  a, d, s, r);
      voiceCurrent = 0;
      break;
  }
};

window.addEventListener('PageFastLoaded', enhanceAll);
window.addEventListener('DOMContentLoaded', enhanceAll);
