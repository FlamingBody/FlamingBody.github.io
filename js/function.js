class _ {
  static get(cssQuery) {
    const results = [...document.querySelectorAll(cssQuery)];
    return results;
  }
  static getValue(cssQuery) {
    const results = _.get(cssQuery).map((e) => e.textContent);
    return results;
  }

  static setClass(cssQuery, cssClass) {
    const results = _.get(cssQuery);
    results.forEach((e) => {
      e.classList.add(cssClass);
    });

    return results;
  }
}

function imageArray() {
  images = ["img/art1.png", "img/art2.png", "img/art3.png"];
  return images;
}


function imageCycle(){
  
}

//Color Animation
function backgroundColor() {
  let currentColor = [0, 150, 250];
  colorChange = 10;
  red = currentColor[0];
  green = currentColor[1];
  blue = currentColor[2];
  dRed = 1;
  dGreen = 1;
  dBlue = 1;
  colorCycle();
  return;
}

function colorCycle() {
  //console.log({currentColor});
  if (red >= 255 - colorChange) {
    dRed = -1;
  } else if (red <= colorChange) {
    dRed = 1;
  }
  if (blue >= 255 + colorChange) {
    dBlue = -1;
  } else if (blue <= colorChange) {
    dBlue = 1;
  }
  if (green >= 255 + colorChange) {
    dGreen = -1;
  } else if (green <= colorChange) {
    dGreen = 1;
  }
  red += colorChange * dRed;
  green += colorChange * dGreen;
  blue += colorChange * dBlue;

  document.getElementById("main").style.border =
    "10px dotted rgb(" + red + "," + green + "," + blue + ")";

  //console.log({red});

  setTimeout("colorCycle()", 100);

  return;
}




