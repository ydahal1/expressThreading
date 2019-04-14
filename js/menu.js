FacialThreadingAndWaxing = [
  ["", "Threading", "Waxing"],
  ["Eyebrows .............", "$7", "$10"],
  ["Upper Lips ...........", "$3", "$5"],
  ["Lower Lips ...........", "$3", "$5"],
  ["Chin ....................", "$4", "$6"],
  ["Forehead .............", "$4", "$6"],
  ["Lower Chin ...........", "$4", "$6"],
  ["Neck ...................", "$8", "$10"],
  ["Side Burns ...........", "$8", "$10"],
  ["Full Face .............", "$20", "$25"],
  ["Full Face / Neck ...", "$25", "$30"],
  ["Nose / Ear ...........", "    ", "$10"]
];

otherServices = [
  ["Basic Seaweed Facial (30 mins) ..... ", "$35"],
  ["Hydra Skin Balancing Facial (50 mins) .....", "$50"],
  ["Hydra Medic Acne Facial (50 mins) ...", "$55"],
  ["Biolight Miracle facial (50 mins) .. ", "$55"],
  ["Hot Oil therapy (30 mins) ... ", "$35"],
  ["Body Polish ( 60 mins)", "$90"],
  ["Back Facial (60 mins) ... ", "$80"]
];

skinLightening = [
  ["Bikini ..... ", "$40"],
  ["Underarms .....", "$25"],
  ["Thigs and Bikini ...", "$45"]
];

bodyWaxing = [
  ["Brazillian Sugar ..... ", "$45"],
  ["Bikini Wax Full .....", "$40"],
  ["Bikini Line ...", "$25"],
  ["Half Leg ..... ", "$30"],
  ["Full Leg .....", "$45"],
  ["Half Arms ...", "$18"],
  ["Full Arms ..... ", "$25"],
  ["Under Arms .....", "$12"],
  ["Stomach Full ...", "$30"],
  ["Stomach Strip ..... ", "$10"],
  ["Back wax full .....", "$40"],
  ["Lower back ...", "$20"],
  ["Chest wax ..... ", "$22"],
  ["Butt creek .....", "$15"],
  ["Butt cheeks ...", "$20"]
];

// JS for displayng menu

// funtion - builds displayFacialWaxingAndThreading div
function displayFacialWaxingAndThreading() {
  for (var i = 0; i < FacialThreadingAndWaxing.length; i++) {
    var services = FacialThreadingAndWaxing[i][0];
    var threadingCost = FacialThreadingAndWaxing[i][1];
    var waxingCost = FacialThreadingAndWaxing[i][2];

    var div =
      '<div class="col-xs-6" style="text-align : left; padding-left: 40px;">' +
      services +
      "</div>" +
      '<div class="col-xs-3" style="color :blue; text-align: right; " >' +
      threadingCost +
      "</div>" +
      '<div class="col-xs-3" style="color :blue; text-align: left;" >' +
      waxingCost +
      "</div>";
    $(".activeAboutUs").append(div);
  }
}

// funtion - builds skinlightening div
function DisplaySkinLightening() {
  for (var i = 0; i < skinLightening.length; i++) {
    var services = skinLightening[i][0];
    var cost = skinLightening[i][1];

    var skinLighteningDiv =
      '<div class="col-xs-6" style="text-align : right; padding-left: 40px;">' +
      services +
      "</div>" +
      '<div class="col-sm-2" style="color :blue; text-align: right; " >' +
      cost +
      "</div>";
    $(".activeAboutUs").append(skinLighteningDiv);
  }
}

// funtion - builds skinlightening div
function displayBodyWaxing() {
  for (var i = 0; i < bodyWaxing.length; i++) {
    var services = bodyWaxing[i][0];
    var cost = bodyWaxing[i][1];

    var bodyWaxingDiv =
      '<div class="col-xs-6" style="text-align : right; padding-left: 40px;">' +
      services +
      "</div>" +
      '<div class="col-sm-2" style="color :blue; text-align: right; " >' +
      cost +
      "</div>";
    $(".activeAboutUs").append(bodyWaxingDiv);
  }
}

//Function displaying full body pacakges
function displayFullBodyPackages() {
  var fullBodyPackageDiv =
    "<div style='text-align: center; padding-top: 40px; '>" +
    "<div class='container'><div class='row'>" +
    "<div class='col-sm-4'><div class= ' fullbodyBtn' > <h1>$ 90</h1> </br><span style='font-size: 16px'>Brazillian </br> full legs </br> underarms </br>Upper Lips</div> </div>" +
    "<div class='col-sm-4'><div class= ' fullbodyBtn' > <h1>$ 120</h1> </br><span style='font-size: 16px'>Package 1 +  </br> stomach </br> Full arms </div> </div>" +
    "<div class='col-sm-4'><div class= ' fullbodyBtn' > <h1>$ 150</h1> </br><span style='font-size: 16px'>Package 1 +  </br> Back </br> Buttocks </br>hand and feet</div> </div>" +
    "</div>" +
    "</div></div>";
  $(".activeAboutUs").append(fullBodyPackageDiv);
}

//Show about us on page load
$(document).ready(function() {
  displayFacialWaxingAndThreading();
});

//Toggle about us nav and scroll to the corret div
$(".aboutUsNavItem").click(function() {
  $(this)
    .toggleClass("selected")
    .siblings()
    .removeClass("selected");
  $(".activeAboutUs").empty();
  displayFacialWaxingAndThreading();
});

$(".ourStoryNavItem").click(function() {
  $(this)
    .toggleClass("selected")
    .siblings()
    .removeClass("selected");
  $(".activeAboutUs").empty();
  DisplaySkinLightening();
});
$(".ourVisionNavItem").click(function() {
  $(this)
    .toggleClass("selected")
    .siblings()
    .removeClass("selected");
  $(".activeAboutUs").empty();
  displayBodyWaxing();
});
$(".ourTeamNavItem").click(function() {
  $(this)
    .toggleClass("selected")
    .siblings()
    .removeClass("selected");
  $(".activeAboutUs").empty();
  displayFullBodyPackages();
});
