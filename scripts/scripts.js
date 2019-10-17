/*
  Constants
*/

// Number of simultaneous playbacks that can exist for a single sound
const simultaneousPlaybacks = 1;

// Soundpacks
const soundpacks = {
  Standard: {
    titleColor: "#e57373",
    sounds: [
      {
        src: "./sounds/pack1/clay.mp3",
        padColor: "#e57373",
        volume: 1
      },
      {
        src: "./sounds/pack1/bubbles.mp3",
        padColor: "#FFA726",
        volume: 1
      },
      {
        src: "./sounds/pack1/moon.mp3",
        padColor: "#FFEB3B",
        volume: 1
      },
      {
        src: "./sounds/pack1/big-snare.wav",
        padColor: "#66BB6A",
        volume: 1
      },
      {
        src: "./sounds/pack1/ufo.mp3",
        padColor: "#1E88E5",
        volume: 1
      },
      {
        src: "./sounds/pack1/glimmer.mp3",
        padColor: "#CE93D8",
        volume: 1
      }
    ]
  },
  Vaporwave: {
    titleColor: "#c9a7d7",
    sounds: [
      {
        src: "./sounds/pack7/tom.wav",
        padColor: "#c9a7d7",
        volume: 1
      },
      {
        src: "./sounds/tones/vaporwave/SubStab.wav",
        padColor: "#cab8d9",
        volume: 1
      },
      {
        src: "./sounds/tones/vaporwave/vw_kick_don.wav",
        padColor: "#cacad9",
        volume: 1
      },
      {
        src: "./sounds/pack7/Snare.wav",
        padColor: "#c9dadb",
        volume: 1
      },
      {
        src: "./sounds/pack7/80s.wav",
        padColor: "#caeada",
        volume: 1
      },
      {
        src: "./sounds/pack7/Clap.wav",
        padColor: "#caf7dc",
        volume: 1
      }
    ]
  },
  Dubstep: {
    titleColor: "#d658ab",
    sounds: [
      {
        src: "./sounds/young-girl/sample1.wav",
        padColor: "#9aafc5",
        volume: 1
      },
      {
        src: "./sounds/young-girl/sample1.wav",
        padColor: "#5ec2c7",
        volume: 1
      },
      {
        src: "./sounds/young-girl/sample1.wav",
        padColor: "#ab567f",
        volume: 1
      },
      {
        src: "./sounds/young-girl/sample1.wav",
        padColor: "#882d4a",
        volume: 1
      },
      {
        src: "./sounds/young-girl/sample1.wav",
        padColor: "#c8bf62",
        volume: 1
      },
      {
        src: "./sounds/young-girl/sample1.wav",
        padColor: "#d0dcde",
        volume: 1
      }
    ]
  },
  Funky: {
    titleColor: "#9aafc5",
    sounds: [
      {
        src: "./sounds/pack4/bass3.wav",
        padColor: "#9aafc5",
        volume: 1
      },
      {
        src: "./sounds/pack4/bass1.wav",
        padColor: "#5ec2c7",
        volume: 1
      },
      {
        src: "./sounds/pack4/bass2.wav",
        padColor: "#ab567f",
        volume: 1
      },
      {
        src: "./sounds/pack4/snare.wav",
        padColor: "#882d4a",
        volume: 1
      },
      {
        src: "./sounds/pack6/chord9.wav",
        padColor: "#c8bf62",
        volume: 1
      },
      {
        src: "./sounds/pack4/clap.wav",
        padColor: "#d0dcde",
        volume: 1
      }
    ]
  },
  Island: {
    titleColor: "#5c6d42",
    sounds: [
      {
        src: "./sounds/pack5/boop2.wav",
        padColor: "#5c6d42",
        volume: 1
      },
      {
        src: "./sounds/pack5/boop.wav",
        padColor: "#da7a29",
        volume: 1
      },
      {
        src: "./sounds/pack5/conga.wav",
        padColor: "#e5b325",
        volume: 1
      },
      {
        src: "./sounds/pack5/clock.wav",
        padColor: "#ca9024",
        volume: 1
      },
      {
        src: "./sounds/pack5/shaker.wav",
        padColor: "#357b89",
        volume: 1
      },
      {
        src: "./sounds/pack5/shaker2.wav",
        padColor: "#1b4e66",
        volume: 1
      }
    ]
  },
  "Lo-Fi": {
    titleColor: "#ebb8a7",
    sounds: [
      {
        src: "./sounds/time-after-time/tat1.wav",
        padColor: "#ebb8a7",
        volume: 1
      },
      {
        src: "./sounds/time-after-time/tat2.wav",
        padColor: "#ee9b80",
        volume: 1
      },
      {
        src: "./sounds/time-after-time/tat3.wav",
        padColor: "#d48874",
        volume: 1
      },
      {
        src: "./sounds/time-after-time/tat4.wav",
        padColor: "#368196",
        volume: 1
      },
      {
        src: "./sounds/time-after-time/tat5.wav",
        padColor: "#205973",
        volume: 1
      },
      {
        src: "./sounds/time-after-time/tat6.wav",
        padColor: "#0f3441",
        volume: 1
      },
      {
        src: "./sounds/loops/lofi/OS_DD2_80_Am_Reverie_Keys_Chords.wav",
        padColor: "#0f3441",
        volume: 1
      },
      {
        src: "./sounds/loops/lofi/OS_DD2_80_Am_Reverie_Sub_Bass.wav",
        padColor: "#0f3441",
        volume: 1
      }
    ]
  },
  Pop: {
    titleColor: "#b6ceec",
    sounds: [
      {
        src: "./sounds/pack3/kick.wav",
        padColor: "#b6ceec",
        volume: 1
      },
      {
        src: "./sounds/pack3/snare.wav",
        padColor: "#eebfd3",
        volume: 1
      },
      {
        src: "./sounds/pack3/crash.wav",
        padColor: "#e47da2",
        volume: 1
      },
      {
        src: "./sounds/pack3/clap.wav",
        padColor: "#f1a8b4",
        volume: 1
      },
      {
        src: "./sounds/tones/pop/dolphin_lead.wav",
        padColor: "#f5c3c0",
        volume: 1
      },
      {
        src: "./sounds/pack3/Shat07.wav",
        padColor: "#f2ebd8",
        volume: 1
      }
    ]
  },
  /*Memes: {
    titleColor: "#d79e00",
    sounds: [
      {
        src: "./sounds/pack8/hitmarker.mp3",
        padColor: "#d79e00",
        volume: 1
      },
      {
        src: "./sounds/pack8/oof.wav",
        padColor: "#bb00d9",
        volume: 1
      },
      {
        src: "./sounds/pack8/bruh.mp3",
        padColor: "#00d94b",
        volume: 1
      },
      {
        src: "./sounds/pack8/profanity.mp3",
        padColor: "#dadb00",
        volume: 1
      },
      {
        src: "./sounds/pack8/damsun.mp3",
        padColor: "#1200ea",
        volume: 1
      },
      {
        src: "./sounds/pack8/illuminooty.mp3",
        padColor: "#f72300",
        volume: 1
      }
    ]
  }*/
};

const defaultOptionStyle = {
  fontSize: "18px",
  fontWeight: "normal",
  color: "#424242"
};

const selectedOptionStyle = {
  fontSize: "28px",
  fontWeight: "bolder",
  color: "black"
};

// Animation boi
const img = [
  "url('res/pose1.png')",
  "url('res/pose2.png')",
  "url('res/pose3.png')",
  "url('res/pose4.png')",
  "url('res/pose5.png')",
  "url('res/pose6.png')"
];

// DOM stuff
const optionsUl = document.getElementById("options");
//const optionsUlTop = document.getElementById("options-top");

Object.keys(soundpacks).forEach(soundpackName => {
  const li = document.createElement("li");
  li.innerHTML = soundpackName;
  li.onclick = () => selectSoundpack(soundpackName);
  optionsUl.appendChild(li);
});

/*Object.keys(soundpacks).forEach(soundpackName => {
  const li = document.createElement("li");
  li.innerHTML = soundpackName;
  li.onclick = () => selectSoundpack(soundpackName);
  optionsUlTop.appendChild(li);
});*/

const pads = document.querySelectorAll(".pads div");
const loops = document.querySelectorAll(".loop-button-container div");
//const padsTop = document.querySelectorAll(".pads-top div");
const options = document.querySelectorAll(".menu-container li");
//const optionsTop = document.querySelectorAll(".menu-container-top li");
const image = document.getElementById("visual");

/*
  U T I L S
 */

function applyStyles(element, styles) {
  Object.keys(styles).forEach(styleProperty => {
    element.style[styleProperty] = styles[styleProperty];
  });
}

// min is inclusive, max is exclusive
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function uniqueRandom(oldValue, min, max) {
  let rand = randomInRange(min, max);
  while (oldValue === rand) {
    rand = randomInRange(min, max);
  }
  return rand;
}

// wrapInt(0, 0, 10) => 0; wrapInt(-1, 0, 10) => 9; wrapInt(10, 0, 10) => 0
const wrapInt = (value, min, max) => value >= max ? min :
                                     value < min ? max - 1 :
                                     value;

/*
  F U N C T I O N A L I T Y
*/
function buildAudio(sound) {
  const buildEl = () => {
    const audioEl = document.createElement("audio");
    audioEl.src = sound.src;
    audioEl.volume = sound.volume;
    return audioEl;
  };

  const els = Array.from(Array(simultaneousPlaybacks), buildEl);

  return {
    audioElements: els,
    elementIndex: 0,
    play() {
      const sound = this.audioElements[this.elementIndex];
      this.elementIndex = wrapInt(this.elementIndex + 1, 0, this.audioElements.length);
      sound.currentTime = 0;
      sound.play();
    }
  }
}


function applySoundpackStyles(soundpackName) {
  const soundpack = soundpacks[currentSoundpackName];

  // reset other options
  options.forEach(otherOption => {
    applyStyles(otherOption, defaultOptionStyle);
  });

  // Beautify current option
  const selectedStyle = {
    ...selectedOptionStyle,
    color: soundpack.titleColor
  };
  applyStyles([...options].find(o => o.innerHTML === soundpackName), selectedStyle);

  // Beautify dem keys
  pads.forEach(
    (pad, index) =>
      (pad.style.backgroundColor = soundpack.sounds[index].padColor)
  );

  /*loops.forEach((loop, index) =>
      (loop.style.backgroundColor = soundpack.sounds[index].padColor)
  );*/
}

var playing = 10;
var currentPack = 1;

function handleLoopClick(num) {
  for(let i = 0; i < loops.length; i++) {
    
    loops[i].style.animation = "none";
    loops[i].style.opacity = 1;
    if(i >= 7) {
      loops[i].style.opacity = 0.4;
    }
    loops[i].style.backgroundImage = "url('.//res/baseline-play_circle_outline-24px.svg')";

    if(i == num) {  
      document.getElementById("loop" + i).play();
    }
  }

  //if pause clicked
  if(num == playing) {
    document.getElementById("loop" + playing).pause();
    loops[num-1].style.animation = "none";
    loops[num-1].style.opacity = 1;
    loops[num-1].style.backgroundImage = "url('.//res/baseline-play_circle_outline-24px.svg')";
    //playing = 10;
    console.log(playing);
  }
  else {
    loops[num-1].style.backgroundImage = "url('./res/baseline-pause_circle_filled-24px.svg')";
    loops[num-1].style.opacity = 1;
    //loops[0].style.transform = "rotate(360deg)";
    loops[num-1].style.animation = "spin 4s infinite linear";
    console.log(playing);
    document.getElementById("loop" + playing).pause();
    document.getElementById("loop" + num).play();
    playing = num;
  }
}

function selectSoundpack(soundpackName) {
  currentSoundpackName = soundpackName;
  const soundpack = soundpacks[currentSoundpackName];
  applySoundpackStyles(soundpackName);

  //loops[currentPack-1].style.backgroundImage = "url('./res/baseline-play_circle_filled-24px.svg')"

  for(let i = 0; i < loops.length; i++) {
    loops[i].style.filter = "invert(0)";
    loops[i].style.backgroundColor = "white";

    if(playing == i) {
      //loops[i].style.backgroundImage = "url('./res/baseline-pause_circle_filled-24px.svg')";
    }
  }

  if(currentSoundpackName == "Standard") {
    console.log("only show first loop button");
    loops[0].style.backgroundColor = "#1a8c8c";
    loops[0].style.filter = "invert(1)";
    currentPack = 1;
    //loops[0].style.backgroundImage = "url('./res/baseline-play_circle_filled-24px.svg')";
  }
  else if(currentSoundpackName == "Vaporwave") {
    console.log("only show second loop button");
    loops[1].style.backgroundColor = "#365828";
    loops[1].style.filter = "invert(1)";
    currentPack = 2;
  }
  else if(currentSoundpackName == "Dubstep") {
    console.log("only show third loop button");
    loops[2].style.backgroundColor = "#36ad5f";
    loops[2].style.filter = "invert(1)";
    currentPack = 3;
  }
  else if(currentSoundpackName == "Funky") {
    console.log("only show fourth loop button");
    loops[3].style.backgroundColor = "#65503a";
    loops[3].style.filter = "invert(1)";
    currentPack = 4;
  }
  else if(currentSoundpackName == "Island") {
    console.log("only show fifth loop button");
    loops[4].style.backgroundColor = "#baaece";
    loops[4].style.filter = "invert(1)";
    currentPack = 5;
  }
  else if(currentSoundpackName == "Lo-Fi") {
    console.log("only show sixth loop button");
    loops[5].style.backgroundColor = "#144758";
    loops[5].style.filter = "invert(1)";
    currentPack = 6;
  }
  else if(currentSoundpackName == "Pop") {
    console.log("only show seventh loop button");
    loops[6].style.backgroundColor = "#493113";
    loops[6].style.filter = "invert(1)";
    currentPack = 7;
  }

  // Load soundpack if not already loaded
  if (!(currentSoundpackName in audios)) {
    console.log(`Loading soundpack: ${currentSoundpackName}`);
    audios[currentSoundpackName] = soundpack.sounds.map(sound => buildAudio(sound));
  }
}

function cycleSoundpack(inc) {
  const names = [...options].map(o => o.innerHTML);
  const currentIndex = names.indexOf(currentSoundpackName);
  const nextIndex = wrapInt(currentIndex + inc, 0, names.length);
  selectSoundpack(names[nextIndex]);
}

function nextSoundpack() {
  cycleSoundpack(1);
}

function previousSoundpack() {
  cycleSoundpack(-1);
}

function cycleImage() {
  currentImg = uniqueRandom(currentImg, 0, img.length);
  image.style.backgroundImage = img[currentImg];
}

function playSound(index) {
  audios[currentSoundpackName][index].play();
}

function pianoKey(index) {
  playSound(index);
  cycleImage();
}

/*
  Registering event handlers
*/

// On paddo boi clicked
pads.forEach((pad, index) => {
  pad.onclick = () => pianoKey(index);
});

// Keyboard controls the keyboard lol
document.onkeydown = ({ keyCode }) => {
  if (keyCode == 65) { // a
    pianoKey(0);
  } else if(keyCode == 83) { // s
    pianoKey(1);
  } else if(keyCode == 68) { // d
    pianoKey(2);
  } else if(keyCode == 70) { // f
    pianoKey(3);
  } else if(keyCode == 71) { // g
    pianoKey(4);
  } else if(keyCode == 72) { // h
    pianoKey(5);
  } else if (keyCode === 37 || keyCode === 38) {
    previousSoundpack();
  } else if (keyCode === 39 || keyCode === 40) {
    nextSoundpack();
  }
};

/*
 State Initialization
*/

let currentImg = 0;
let currentSoundpackName;
let audios = {};
selectSoundpack("Standard");

// Easter egg
document.getElementById('visual').onclick =
  () => image.style.backgroundImage = "url('res/blush.png')";