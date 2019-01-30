const Gpio = require('onoff').Gpio;
const led1 = new Gpio(14, 'out');
const led2 = new Gpio(15, 'out');
const led3 = new Gpio(18, 'out');


function turnOnLED(num) {
  led1.writeSync(num === 1 ? 1 : 0);
  led2.writeSync(num === 2 ? 1 : 0);
  led3.writeSync(num === 3 ? 1 : 0);
}

turnOnLED(parseInt(process.argv[2]));

const button = new Gpio(4, 'in', 'both');
let currentLED = 1;
button.watch((err, value) => {
  if (err) {
    throw err;
  }
 
  currentLED  = currentLED > 2 ? 1 : currentLED + 1;
  turnOnLED(currentLED);
  // console.log(value);
  // led.writeSync(value);
});
 
// process.on('SIGINT', () => {
//   led.unexport();
//   button.unexport();
// });