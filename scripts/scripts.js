<<<<<<< HEAD
var firstTry = true;
var pending = [];
//timer();

/*
  Constants
*/

// Number of simultaneous playbacks that can exist for a single sound
const simultaneousPlaybacks = 1;

// Soundpacks
const soundpacks = {
  Drums: {
    loopable: true,
    titleColor: "#e57373",
    sounds: [
      {
        src: "./sounds/splice/drums/drums1.wav",
        padColor: "#e57373",
        volume: 1
      },
      {
        src: "./sounds/splice/drums/drums2.wav",
        padColor: "#FFA726",
        volume: 1
      },
      {
        src: "./sounds/splice/drums/drums3.wav",
        padColor: "#FFEB3B",
        volume: 1
      },
      {
        src: "./sounds/splice/drums/drums4.wav",
        padColor: "#66BB6A",
        volume: 1
      },
      {
        src: "./sounds/splice/drums/drums5.wav",
        padColor: "#1E88E5",
        volume: 1
      },
      {
        src: "./sounds/splice/drums/drums6.wav",
        padColor: "#CE93D8",
        volume: 1
=======
window.addEventListener("load", () => {
  const soundPack1 = document.querySelectorAll(".sound-pack1");
  const soundPack2 = document.querySelectorAll(".sound-pack2");
  const soundPack3 = document.querySelectorAll(".sound-pack3");
  const soundPack4 = document.querySelectorAll(".sound-pack4");
  const soundPack5 = document.querySelectorAll(".sound-pack5");
  const soundPack6 = document.querySelectorAll(".sound-pack6");
  const soundPack7 = document.querySelectorAll(".sound-pack7");
  const soundPack9 = document.querySelectorAll(".sound-pack9");
  const pads = document.querySelectorAll(".pads div");
  const options = document.querySelectorAll(".menu-container li");
  const image = document.getElementById("visual");
  var rand = 0;
  var currentImg = 0;
  var soundPackx = soundPack1;

  var img = [
    "url('res/pose1.png')",
    "url('res/pose2.png')",
    "url('res/pose3.png')",
    "url('res/pose4.png')",
    "url('res/pose5.png')",
    "url('res/pose6.png')"
  ];

  options.forEach((option) => {
    option.addEventListener("click", function() {
      if(option.innerHTML == "Standard") {
        option.style.color = "#ef9a9a";
        soundPackx = soundPack1;
        pads[0].style.backgroundColor = "#e57373";
        pads[1].style.backgroundColor = "#FFA726";
        pads[2].style.backgroundColor = "#FFEB3B";
        pads[3].style.backgroundColor = "#66BB6A";
        pads[4].style.backgroundColor = "#1E88E5";
        pads[5].style.backgroundColor = "#CE93D8";
>>>>>>> 42cc1441c635eef94fdc44983d490848c8ae7549
      }
    ]
  },
  Bass: {
    loopable: true,
    titleColor: "#c9a7d7",
    sounds: [
      {
        src: "./sounds/splice/bass/bass1.wav",
        padColor: "#c9a7d7",
        volume: 1
      },
      {
        src: "./sounds/splice/bass/bass2.wav",
        padColor: "#cab8d9",
        volume: 1
      },
      {
        src: "./sounds/splice/bass/bass3.wav",
        padColor: "#cacad9",
        volume: 1
      },
      {
        src: "./sounds/splice/bass/bass4.wav",
        padColor: "#c9dadb",
        volume: 1
      },
      {
        src: "./sounds/splice/bass/bass5.wav",
        padColor: "#caeada",
        volume: 1
      },
      {
        src: "./sounds/splice/bass/bass7.wav",
        padColor: "#caf7dc",
        volume: 1
      }
    ]
  },
  Guitar: {
    loopable: true,
    titleColor: "#d658ab",
    sounds: [
      {
        src: "./sounds/splice/guitar/guitar1.wav",
        padColor: "#d658ab",
        volume: 1
      },
      {
        src: "./sounds/splice/guitar/guitar6.wav",
        padColor: "#963b74",
        volume: 1
      },
      {
        src: "./sounds/splice/guitar/guitar3.wav",
        padColor: "#232227",
        volume: 1
      },
      {
        src: "./sounds/splice/guitar/guitar4.wav",
        padColor: "#326c71",
        volume: 1
      },
      {
        src: "./sounds/splice/guitar/guitar5.wav",
        padColor: "#6dc1bb",
        volume: 1
      },
      {
        src: "./sounds/splice/guitar/guitar2.wav",
        padColor: "#a2dfd6",
        volume: 1
      }
    ]
  },
  Synth: {
    loopable: true,
    titleColor: "#9aafc5",
    sounds: [
      {
        src: "./sounds/splice/synth/synth1.wav",
        padColor: "#9aafc5",
        volume: 1
      },
      {
        src: "./sounds/splice/synth/synth2.wav",
        padColor: "#5ec2c7",
        volume: 1
      },
      {
        src: "./sounds/splice/synth/synth3.wav",
        padColor: "#ab567f",
        volume: 1
      },
      {
        src: "./sounds/splice/synth/synth4.wav",
        padColor: "#882d4a",
        volume: 1
      },
      {
        src: "./sounds/splice/synth/synth5.wav",
        padColor: "#c8bf62",
        volume: 1
      },
      {
        src: "./sounds/splice/synth/synth7.wav",
        padColor: "#d0dcde",
        volume: 1
      }
    ]
  },
  Piano: {
    loopable: true,
    titleColor: "#5c6d42",
    sounds: [
      {
        src: "./sounds/splice/piano/piano1.wav",
        padColor: "#5c6d42",
        volume: 1
      },
      {
        src: "./sounds/splice/piano/piano2.wav",
        padColor: "#da7a29",
        volume: 1
      },
      {
        src: "./sounds/splice/piano/piano3.wav",
        padColor: "#e5b325",
        volume: 1
      },
      {
        src: "./sounds/splice/piano/piano4.wav",
        padColor: "#ca9024",
        volume: 1
      },
      {
        src: "./sounds/splice/piano/piano5.wav",
        padColor: "#357b89",
        volume: 1
      },
      {
        src: "./sounds/splice/piano/piano6.wav",
        padColor: "#1b4e66",
        volume: 1
      }
    ]
  },
  Brass: {
    loopable: true,
    titleColor: "#ebb8a7",
    sounds: [
      {
        src: "./sounds/splice/brass/brass1.wav",
        padColor: "#ebb8a7",
        volume: 1
      },
      {
        src: "./sounds/splice/brass/brass2.wav",
        padColor: "#ee9b80",
        volume: 1
      },
      {
        src: "./sounds/splice/brass/brass3.wav",
        padColor: "#d48874",
        volume: 1
      },
      {
        src: "./sounds/splice/brass/brass4.wav",
        padColor: "#368196",
        volume: 1
      },
      {
        src: "./sounds/splice/brass/brass5.wav",
        padColor: "#205973",
        volume: 1
      },
      {
        src: "./sounds/splice/brass/brass6.wav",
        padColor: "#0f3441",
        volume: 1
      }
    ]
  },
  Tones: {
    loopable: false,
    titleColor: "#b6ceec",
    sounds: [
      {
        src: "./sounds/splice/tones/tone1.wav",
        padColor: "#b6ceec",
        volume: 1
      },
      {
        src: "./sounds/splice/tones/tone2.wav",
        padColor: "#eebfd3",
        volume: 1
      },
      {
        src: "./sounds/splice/tones/tone3.wav",
        padColor: "#e47da2",
        volume: 1
      },
      {
        src: "./sounds/splice/tones/tone4.wav",
        padColor: "#f1a8b4",
        volume: 1
      },
      {
        src: "./sounds/splice/tones/tone5.mp3",
        padColor: "#f5c3c0",
        volume: 1
      },
      {
        src: "./sounds/splice/tones/tone6.wav",
        padColor: "#f2ebd8",
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
var timerEl = document.getElementById("timer");

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
function buildLoopAudio(sound) {
  const buildEl = () => {
    const audioEl = document.createElement("audio");

    //removes dealy
    var audio_file = new Audio(sound.src);
    audio_file.addEventListener('timeupdate', function(){
      var buffer = .3
      if(this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
      }}, false);

      return audio_file;

    //audioEl.src = sound.src;
    //audioEl.volume = sound.volume;
    //return audioEl;
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

  /*pads.forEach(
    (pad, index) =>
      //pad.classList.remove("waiting")
  );
*/
  // Load soundpack if not already loaded
  if (!(currentSoundpackName in audios)) {
    //console.log(`Loading soundpack: ${currentSoundpackName}`);
    if(soundpack.loopable) {
      audios[currentSoundpackName] = soundpack.sounds.map(sound => buildLoopAudio(sound));
    }
    else {
      audios[currentSoundpackName] = soundpack.sounds.map(sound => buildAudio(sound));
    }

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
  cycleImage();
}

/*
  Registering event handlers
*/

// On paddo boi clicked
pads.forEach((pad, index) => {
  pad.onclick = () => {
    console.log("clicked pad");
    console.log("Just a sec...");
    pad.classList.add("waiting");
    pending.push(index);
      //console.log("pad: " + pad);

      console.log("clicked pad");
      if(firstTry) {
        timer();
        firstTry = false;
      }
  }
});

// Keyboard controls the keyboard lol
document.onkeydown = ({ keyCode }) => {
    //soundpack.classList.add("waiting");
  console.log("hold on...");
  if (keyCode == 65) { // a
    pending.push(0);
  } else if(keyCode == 83) { // s
    pending.push(1);
  } else if(keyCode == 68) { // d
    pending.push(2);
  } else if(keyCode == 70) { // f
    pending.push(3);
  } else if(keyCode == 71) { // g
    pending.push(4);
  } else if(keyCode == 72) { // h
    pending.push(5);
  } else if (keyCode === 37 || keyCode === 38) {
    previousSoundpack();
  } else if (keyCode === 39 || keyCode === 40) {
    nextSoundpack();
  }

  console.log("clicked pad");
  if(firstTry) {
    timer();
    firstTry = false;
  }

  //timerEl.style.animation = "timer 12s ease infinite";
};

function timer() {
  if(firstTry) {
    for(let i = 0; i < pending.length; i++) {
      playSound(pending[i]);
      //console.log("playing sound: " + pending[i]);
    }
    pads.forEach((pad, index) => {
      pad.classList.remove("waiting");
    });
  }
  timerEl.classList.add("timer-active");
  console.log(pending);
  setTimeout(function() {
    //pad.classList.remove("waiting");
    console.log(pending.length);
    for(let i = 0; i < pending.length; i++) {
      playSound(pending[i]);
      //console.log("playing sound: " + pending[i]);
      pads.forEach((pad, index) => {
        pad.classList.remove("waiting");
      });
    }
    timer();
  }, 12000);

  pending = [];
  /*while(playing.length > 0) {

  }*/
  //firstTry = true;
}

/*
 State Initialization
*/

let playing = [];
let currentImg = 0;
let currentSoundpackName;
let audios = {};
selectSoundpack("Drums");

// Easter egg
document.getElementById('visual').onclick =
  () => image.style.backgroundImage = "url('res/blush.png')";
