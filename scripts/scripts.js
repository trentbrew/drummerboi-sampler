window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const image = document.getElementById("visual");
  var rand = 0;
  var currentImg = 0;

  var img = [
    "url('res/pose1.png')",
    "url('res/pose2.png')",
    "url('res/pose3.png')",
    "url('res/pose4.png')",
    "url('res/pose5.png')",
    "url('res/pose6.png')"
  ];

  console.log(sounds);

  //sound bois
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      rand = Math.floor(Math.random() * 7);
      console.log("currentImg: " + currentImg);
      console.log("rand: " + rand);
      console.log("");
      while(currentImg == rand) {
        rand = Math.floor(Math.random() * 7);
      }
      currentImg = rand;
      image.style.backgroundImage = img[rand];
    });
  });
});
