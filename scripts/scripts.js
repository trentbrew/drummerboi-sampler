window.addEventListener("load", () => {
  const soundPack1 = document.querySelectorAll(".sound-pack1");
  const soundPack2 = document.querySelectorAll(".sound-pack2");
  const soundPack3 = document.querySelectorAll(".sound-pack3");
  const soundPack4 = document.querySelectorAll(".sound-pack4");
  const soundPack5 = document.querySelectorAll(".sound-pack5");
  const soundPack6 = document.querySelectorAll(".sound-pack6");
  const soundPack7 = document.querySelectorAll(".sound-pack7");
  const pads = document.querySelectorAll(".pads div");
  const options = document.querySelectorAll(".menu-container li");
  const image = document.getElementById("visual");
  var rand = 0;
  var currentImg = 0;
  var soundPackx;

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
      }
      else if(option.innerHTML == "Techno") {
        option.style.color = "#7CB342";
        soundPackx = soundPack2;
      }
      else if(option.innerHTML == "Pop") {
        option.style.color = "#F48FB1";
        soundPackx = soundPack3;
      }
      else if(option.innerHTML == "Funky") {
        option.style.color = "#FBC02D";
        soundPackx = soundPack4;
      }
      else if(option.innerHTML == "Island") {
        option.style.color = "#4DB6AC";
        soundPackx = soundPack5;
      }
      else if(option.innerHTML == "Lo-Fi") {
        option.style.color = "#1E88E5";
        soundPackx = soundPack6;
      }
      else {
        option.style.color = "#7E57C2";
        soundPackx = soundPack7;
      }

      console.log("clicked " + option.innerHTML);

      options.forEach((index, i) => {
        index.style.fontSize = "18px";
        index.style.fontWeight = "normal";
        //index.style.color = "black";
      });

      option.style.fontSize = "28px";
      option.style.fontWeight = "bolder";
    });
  });

  //sound bois
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      soundPackx[index].currentTime = 0;
      soundPackx[index].play();
      rand = Math.floor(Math.random() * 7);
      //console.log("currentImg: " + currentImg);
      //console.log("rand: " + rand);
      //console.log("");
      while(currentImg == rand) {
        rand = Math.floor(Math.random() * 7);
      }
      currentImg = rand;
      image.style.backgroundImage = img[rand];
      //pad.style.filter = "invert(1)";
    });
  });
});
