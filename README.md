# Catchup
Catchup is a simple node package made with pure JavaScript

## Description
Catchup produces a random 6 digit and alphabetical character (by default) as a string to be read by human beings.
Users must enter the exact match of the characters generated to become validated as a non-robotic user.

# Setup
``` shell
$ npm install catchup
```

# How it works
## Get a captcha
``` javascript
import catchup from "catchup";
const captcha = new catchup({
					stringLength: 6,
					lineNoise: 25,
					dotNoise: 150,
					})

let captchaData = captcha.draw();
```

The draw() method returns an object contains "code" and "imageData" as the example below:

``` javascript
{code: 'OTJ8U1', imageData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwA…LmbVC6xICfjElY2KTsV/8P0j3QF9cHWJSAAAAAElFTkSuQmCC'}
```

Then you can use 'imageData' property to use as source of image tag like this:

``` javascript
document.getElementById("captchaImage").src = captchaData.imageData;
```

``` html
<img src="" id="captchaImage" />
```

# Important
It is obvious that to prevent from attacks, you better store the generated captcha with the user who is requesting for it, so the attacker can't send you the similar riddle and his solution. This package is not doing it as it maybe differences in different project flows.

# From author
Of course that this package is not perfect and can be extended in many ways. Please FEEL FREE TO CONTRIBUTE, DEVELOP AND FIX BUGS by a pull request. I'd be glad to hear your suggestions or anything else from you through alireza_mortezaei@hotmail.com