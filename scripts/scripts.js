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
      }
      else if(option.innerHTML == "Techno") {
        option.style.color = "#7CB342";
        soundPackx = soundPack2;
        pads[0].style.backgroundColor = "#d658ab";
        pads[1].style.backgroundColor = "#963b74";
        pads[2].style.backgroundColor = "#232227";
        pads[3].style.backgroundColor = "#326c71";
        pads[4].style.backgroundColor = "#6dc1bb";
        pads[5].style.backgroundColor = "#a2dfd6";
      }
      else if(option.innerHTML == "Pop") {
        option.style.color = "#F48FB1";
        soundPackx = soundPack3;
        pads[0].style.backgroundColor = "#b6ceec";
        pads[1].style.backgroundColor = "#eebfd3";
        pads[2].style.backgroundColor = "#e47da2";
        pads[3].style.backgroundColor = "#f1a8b4";
        pads[4].style.backgroundColor = "#f5c3c0";
        pads[5].style.backgroundColor = "#f2ebd8";
      }
      else if(option.innerHTML == "Funky") {
        option.style.color = "#FBC02D";
        soundPackx = soundPack4;
        pads[0].style.backgroundColor = "#9aafc5";
        pads[1].style.backgroundColor = "#5ec2c7";
        pads[2].style.backgroundColor = "#ab567f";
        pads[3].style.backgroundColor = "#882d4a";
        pads[4].style.backgroundColor = "#c8bf62";
        pads[5].style.backgroundColor = "#d0dcde";
      }
      else if(option.innerHTML == "Island") {
        option.style.color = "#4DB6AC";
        soundPackx = soundPack5;
        pads[0].style.backgroundColor = "#5c6d42";
        pads[1].style.backgroundColor = "#da7a29";
        pads[2].style.backgroundColor = "#e5b325";
        pads[3].style.backgroundColor = "#ca9024";
        pads[4].style.backgroundColor = "#357b89";
        pads[5].style.backgroundColor = "#1b4e66";
      }
      else if(option.innerHTML == "Lo-Fi") {
        option.style.color = "#1E88E5";
        soundPackx = soundPack6;
        pads[0].style.backgroundColor = "#ebb8a7";
        pads[1].style.backgroundColor = "#ee9b80";
        pads[2].style.backgroundColor = "#d48874";
        pads[3].style.backgroundColor = "#368196";
        pads[4].style.backgroundColor = "#205973";
        pads[5].style.backgroundColor = "#0f3441";
      }
      else {
        option.style.color = "#7E57C2";
        soundPackx = soundPack7;
        pads[0].style.backgroundColor = "#c9a7d7";
        pads[1].style.backgroundColor = "#cab8d9";
        pads[2].style.backgroundColor = "#cacad9";
        pads[3].style.backgroundColor = "#c9dadb";
        pads[4].style.backgroundColor = "#caeada";
        pads[5].style.backgroundColor = "#caf7dc";
      }

      console.log("clicked " + option.innerHTML);

      options.forEach((index, i) => {
        index.style.fontSize = "18px";
        index.style.fontWeight = "normal";
        index.style.color = "black";
        index.style.opacity = "0.5";
      });

      option.style.fontSize = "28px";
      option.style.fontWeight = "bolder";
      option.style.color = "black";
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
