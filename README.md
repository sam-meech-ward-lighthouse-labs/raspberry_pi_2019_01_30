
Sorry, I didn't take any notes. Here's some stuff though:

## Helpful Links

* [Getting started with the Raspberry Pi - Introduction | Raspberry Pi Projects](https://projects.raspberrypi.org/en/projects/raspberry-pi-getting-started)
* [arduino vs raspberry pi](https://makezine.com/2015/12/04/admittedly-simplistic-guide-raspberry-pi-vs-arduino/)
* [https://www.digitalocean.com/](https://www.digitalocean.com/)

## Open Browser Tabs

* http://rpi-lhl-final.herokuapp.com/
* https://thepihut.com/products/raspberry-pi-zero-w?src=raspberrypi
* https://cloud.digitalocean.com/droplets?i=80c946
* https://www.digitalocean.com/
* https://www.google.com/search?q=the+cloud+meme&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiqvtP0gZbgAhWIIDQIHbdGBhQQ_AUIDigB#imgrc=lwKwyIBTS6ftPM:
* http://167.99.186.137:9999/
* http://door-lock.local:9999/
* https://www.google.com/search?q=sparkfun+resistor&oq=sparkfun+resistor&aqs=chrome..69i57j0j69i65j0l3.2882j0j7&sourceid=chrome&ie=UTF-8
* https://learn.sparkfun.com/tutorials/resistors/all
* https://www.google.com/imgres?imgurl=https://www.raspberrypi.org/documentation/usage/gpio/images/gpio-numbers-pi2.png&imgrefurl=https://www.raspberrypi.org/documentation/usage/gpio/&h=446&w=1498&tbnid=FJ6OOlAQOMvzfM:&q=raspberry+pi+gpio+pins&tbnh=63&tbnw=214&usg=AI4_-kSdJNN-cUtecCrbQGZk5XYdh99o_g&vet=12ahUKEwibuNWcjZbgAhVoHjQIHVj7A0AQ9QEwAHoECAcQBg..i&docid=riOp-FwuNGRukM&sa=X&ved=2ahUKEwibuNWcjZbgAhVoHjQIHVj7A0AQ9QEwAHoECAcQBg
* https://www.raspberrypi.org/documentation/usage/gpio/
* https://www.google.com/search?q=sysfs&oq=sysfs&aqs=chrome.0.69i59j69i60j0l4.816j0j7&sourceid=chrome&ie=UTF-8
* https://en.wikipedia.org/wiki/Sysfs
* https://www.npmjs.com/package/onoff


## Terminal History

### Digital Ocean Server

```termianal
 540  clear
  541  ls
  542  pwd
  543  mkdir tmp
  544  cd tmp/
  545  touch server.js
  546  node -v
  547  man ed
  548  echo "const express = require('express');"
  549  echo hello world
  550  echo hi
  551  echo "const express = require('express');" >> server.js 
  552  cat server.js 
  553  echo "" >> server.js
  554  cat server.js 
  555  echo "const app = express();" >> server.js
  556  nano server.js 
  557  npm install express
  558  echo hewllo
  559  node server.js 
  560  nano server.js 
  561  node server.js 
  562  nano server.js 
```

### Raspberry pi

```terminal
  344  cd /sys/class/gpio/
  345  ls
  346  echo 14 > export
  347  ls
  348  cd gpio14
  349  ls
  350  echo out > direction 
  351  echo 1 > value
  352  echo 0 > value
  353  nano value 
  354  cd ..
  355  ls
  356  cd 
  357  mkdir lights
  358  cd lights/
  359  nano lights.js
  360  node lights.js 
  361  nano lights.js
  362  node lights.js 
  363  npm i onoff
  364  ls
  365  node onoff-lights.js 
  366  node onoff-lights.js 1
  367  node onoff-lights.js 2
  368  node onoff-lights.js 3
  369  node onoff-lights.js 
  370  node onoff-lights.js 3
  371  cat onoff-lights.js 
  372  node onoff-lights.js 3
  373  node onoff-lights.js 
```