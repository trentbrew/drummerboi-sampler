/*
  Constants
*/

// Number of simultaneous playbacks that can exist for a single sound
const simultaneousPlaybacks = 5;

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
        src: "./sounds/pack7/chords8.wav",
        padColor: "#cab8d9",
        volume: 1
      },
      {
        src: "./sounds/pack7/11.wav",
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
  Techno: {
    titleColor: "#d658ab",
    sounds: [
      {
        src: "./sounds/pack2/kick35.wav",
        padColor: "#d658ab",
        volume: 1
      },
      {
        src: "./sounds/pack2/fx8.wav",
        padColor: "#963b74",
        volume: 1
      },
      {
        src: "./sounds/pack2/fx6.wav",
        padColor: "#232227",
        volume: 1
      },
      {
        src: "./sounds/pack2/fx23.wav",
        padColor: "#326c71",
        volume: 1
      },
      {
        src: "./sounds/pack2/beep.wav",
        padColor: "#6dc1bb",
        volume: 1
      },
      {
        src: "./sounds/pack2/Effect3.wav",
        padColor: "#a2dfd6",
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
        src: "./sounds/pack4/chord7.wav",
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
        src: "./sounds/pack5/boop.WAV",
        padColor: "#da7a29",
        volume: 1
      },
      {
        src: "./sounds/pack5/conga.WAV",
        padColor: "#e5b325",
        volume: 1
      },
      {
        src: "./sounds/pack5/clock.WAV",
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
        src: "./sounds/pack6/low-kick.wav",
        padColor: "#ebb8a7",
        volume: 1
      },
      {
        src: "./sounds/pack6/kick.wav",
        padColor: "#ee9b80",
        volume: 1
      },
      {
        src: "./sounds/pack6/crisp.WAV",
        padColor: "#d48874",
        volume: 1
      },
      {
        src: "./sounds/pack6/clap.wav",
        padColor: "#368196",
        volume: 1
      },
      {
        src: "./sounds/pack6/chord9.wav",
        padColor: "#205973",
        volume: 1
      },
      {
        src: "./sounds/pack6/crash.wav",
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
        src: "./sounds/pack3/guitar.wav",
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
  Memes: {
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
  }
};

const defaultOptionStyle = {
  fontSize: "18px",
  fontWeight: "normal",
  color: "#424242"
};

const selectedOptionStyle = {
  fontSize: "28px",
  fontWeight: "bolder"
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

Object.keys(soundpacks).forEach(soundpackName => {
  const li = document.createElement("li");
  li.innerHTML = soundpackName;
  li.onclick = () => selectSoundpack(soundpackName);
  optionsUl.appendChild(li);
});

const pads = document.querySelectorAll(".pads div");
const options = document.querySelectorAll(".menu-container li");
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
}

function selectSoundpack(soundpackName) {
  currentSoundpackName = soundpackName;
  const soundpack = soundpacks[currentSoundpackName];
  applySoundpackStyles(soundpackName);

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
