var guitars = [
    {
      name: "Blueridge Historic Series BR-160 Dreadnought Acoustic Guitar",
      Image:
        "https://media.guitarcenter.com/is/image/MMGS7/Historic-Series-BR-160-Dreadnought-Acoustic-Guitar-Natural/L88193000001000-00-220x220.jpg",
      link: "Acoustic.html",
    },
    {
      name: "IBANEZ GRX70QA-TRB GRX",
      Image:
        "https://img-zuhalmuzik.mncdn.com/mnresize/700/700/images/product/135845GRX70QA-TRB_1.jpg",
      link: "ElectiricGuitars.html",
    },
    {
      name: "Acoustasonic™ 40",
      Image:
        "https://www.fmicassets.com/Damroot/MedJpg/10002/2314200000_amp_frt_001_nr.jpg",
      link: "Equipment.html",
    },
    {
      name: "KOZMOS KST-62HSS-GRWN-3TS",
      Image:
        "https://img-zuhalmuzik.mncdn.com/mnresize/700/700/images/product/GRX40-BKN_1.jpg",
      link: "ElectiricGuitars.html",
    },
    {
      name: "Harley Benton GS-Travel-E Spruce",
      Image:
        "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/410803.webp",
      link: "Acoustic.html",
    },
    {
      name: "M-Audio Hammer 88",
      Image:
        "https://media.guitarcenter.com/is/image/MMGS7/61SL-MKIII/L35266000000000-00-220x220.jpg",
      link: "Equipment.html",
    },
  ];

  setInterval(function () {
    var index = Math.floor(Math.random() * guitars.length);

    var img = document.querySelector(".card-img-top");
    var title = document.querySelector(".card-title");
    var a = document.querySelector("a");
    

    img.setAttribute("src", guitars[index].Image);
    a.setAttribute("href", guitars[index].link);
    title.textContent = guitars[index].name;
  }, 2000);