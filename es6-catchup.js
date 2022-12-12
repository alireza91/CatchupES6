import helper from "./helperCatchup";

class catchup {
  options = {
    stringLength: 6,
    lineNoise: 25,
    dotNoise: 150,
  };

  constructor(options) {
    this.options.stringLength = options.stringLength;
    this.options.lineNoise = options.lineNoise;
    this.options.dotNoise = options.dotNoise;
  }

  draw() {
    const canvasCreator = new helper(this.options);
    canvasCreator.prepareCanvas();
    canvasCreator.lineNoiseGenerator();
    canvasCreator.dotNoiseGenerator();
    const dataImage = canvasCreator.convertCanvasToImage();
    return { code: this.captcha, imageData: dataImage };
  }
}

export default catchup;
