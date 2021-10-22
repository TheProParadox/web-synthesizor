let btn_1 = 1;
let btn_2 = 1;
let waveShapes = ['square', 'sine', 'triangle', 'sawtooth']

function btnSetup() {
  document.getElementById("osc1_sine").className = "indicator-on";
  document.getElementById("osc2_sine").className = "indicator-on";

  document.getElementById('osc1_btn').onclick = function () {
    //alert("button 1 was clicked");
    switch (btn_1) {
      case 0:
        document.getElementById("osc1_sine").className = "indicator-on";
        document.getElementById("osc1_triangle").className = "indicator-off";
        document.getElementById("osc1_saw").className = "indicator-off";
        document.getElementById("osc1_square").className = "indicator-off";
        btn_1++
        break;
      case 1:
        document.getElementById("osc1_sine").className = "indicator-off";
        document.getElementById("osc1_triangle").className = "indicator-on";
        document.getElementById("osc1_saw").className = "indicator-off";
        document.getElementById("osc1_square").className = "indicator-off";

        btn_1++
        break;
      case 2:
        document.getElementById("osc1_sine").className = "indicator-off";
        document.getElementById("osc1_triangle").className = "indicator-off";
        document.getElementById("osc1_saw").className = "indicator-on";
        document.getElementById("osc1_square").className = "indicator-off";
        btn_1++
        break;
      case 3:
        document.getElementById("osc1_sine").className = "indicator-off";
        document.getElementById("osc1_triangle").className = "indicator-off";
        document.getElementById("osc1_saw").className = "indicator-off";
        document.getElementById("osc1_square").className = "indicator-on";
        btn_1 = 0;
        break;
    }
    document.getElementById('osc2_btn').onclick = function () {
      switch (btn_2) {
        case 0:
          document.getElementById("osc2_sine").className = "indicator-on";
          document.getElementById("osc2_triangle").className = "indicator-off";
          document.getElementById("osc2_saw").className = "indicator-off";
          document.getElementById("osc2_square").className = "indicator-off";
          btn_2++
          break;
        case 1:
          document.getElementById("osc2_sine").className = "indicator-off";
          document.getElementById("osc2_triangle").className = "indicator-on";
          document.getElementById("osc2_saw").className = "indicator-off";
          document.getElementById("osc2_square").className = "indicator-off";

          btn_2++
          break;
        case 2:
          document.getElementById("osc2_sine").className = "indicator-off";
          document.getElementById("osc2_triangle").className = "indicator-off";
          document.getElementById("osc2_saw").className = "indicator-on";
          document.getElementById("osc2_square").className = "indicator-off";
          btn_2++
          break;
        case 3:
          document.getElementById("osc2_sine").className = "indicator-off";
          document.getElementById("osc2_triangle").className = "indicator-off";
          document.getElementById("osc2_saw").className = "indicator-off";
          document.getElementById("osc2_square").className = "indicator-on";
          btn_2 = 0;
          break;
      }
    };
  }
}

function getWaveShape(selector) {
  if (selector === 1) {
   return waveShapes[btn_1];
  } else if (selector === 2) {
    return waveShapes[btn_2];
  }
}

window.addEventListener('PageFastLoaded', btnSetup);
window.addEventListener('DOMContentLoaded', btnSetup);
