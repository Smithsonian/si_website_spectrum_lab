//////////////////////////////////////////////////////////////////////////////////////////////
/*
 * 	Copyright (c) 2020, 2021 All Right Reserved, aibrahim@cfa.harvard.edu
 *	All other rights reserved.
 */
//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Spectrum Lab
 * Version       25_4
 * Author     	 Alaalden Ibrahim <aibrahim AT cfa.harvard.edu>
 * Date          July 20 2020
 * DOCUMENTATION THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED
 * =============
 * --------------------------------------------------------------------------
 * --------------------------------------------------------------------------
 */
/////////////////////////////////////////////////////////////////////
var Tutorial_text01 =
  "This is the Spectrum Tool. You will use the Spectrum Tool to compare a spectrum image to its spectrum graph. You will also plot spectrum graphs of your own from the spectra that you observe.";
var Tutorial_text02 =
  "This is the <strong>Spectrum Image</strong>. This represents what you would see through a spectroscope when you point it at a light source.</br><small>(This spectrum represents a source that is emitting equally across all wavelengths.More typically, some wavelength sections will be brighter and others will be darker.)</small>";
var Tutorial_text03 =
  "The rainbow in the middle of the spectrum shows <strong>visible light</strong>. The gray region of the spectrum to the right of red is called <strong>infrared light</strong> (IR). The gray region to the left of violet is called <strong>ultraviolet light</strong> (UV). Only visible light can be seen by the human eye.<br/> <small>(Beyond IR is microwave and radio; beyond UV is X-ray and gamma-ray.)</small>";
var Tutorial_text04 =
  "This is where we will plot the <strong>Spectrum Graph</strong>. Sometimes you will draw the spectrum graph yourself, and sometimes you will look at graphs of actual spectral data or models. Click in the box to start drawing.";
var Tutorial_text05 =
  "This is the <strong>Reset Button</strong>. You can reset your spectrum graph if you ever want to start over from a blank screen.";
var Tutorial_text06 =
  "Sometimes you will get a second panel to see the spectrum of a <strong>Comparison Object</strong>. It will often be useful to compare the spectrum and graph from your top panel with another object in the lower panel.";
var Tutorial_text07 =
  "You can select which reference object you want to view from the dropdown menu.";
var Tutorial_text08 =
  "You can click here to replay the <strong>Session 2 tutorial</strong> later if you need a refresher on this content.";
var Tutorial_text09 =
  "If you’re all set with this tutorial, click the<br/>FIRST CHALLENGE button below to get started.";
var Tutorial_text10 = "";
/////////////////////////////////////////////////////////////////////
var Current_Challenge = "";
/////////////////////////////////////////////////////////////////////
function initial_tutorial() {
  /*=======================================*/
  /*        configure the bottons          */
  /*=======================================*/
  $("#Tutorial_btns").css("padding-right", "60px");
  $("#Tutorial_nextbtn").css("visibility", "visible");
  $("#Tutorial_backbtn").css("visibility", "hidden");
  /*=======================================*/
  /*    configure the active section       */
  /*=======================================*/
  $("#upperToolright").addClass("Tutorial_active_rightSection");
  $("#upperToolleft").addClass("Tutorial_active_leftSection");
  /*=======================================*/
  /*           Change the text             */
  /*=======================================*/
  $("#overlay2").fadeIn("fast");
  $("#Tutorial_arrow_up").css("visibility", "visible");
  $("#Tutorial_arrow_dn").css("visibility", "hidden");
  document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text01;
  $("#Tutorial_nextbtn").attr("onclick", "NextSlide('spectrum_image','pick')");
  SeacrhFor("Draw", "CategoryDraw");
  SeacrhFor("Lamps", "Category2");
  SelectTarget("Lamp1", "Targets2");

  SelectTarget("Lamp1", "Targets2");

  $("#challenge_btn").css("visibility", "hidden");
  /*=======================================*/
}
/*====================================================*/
/*====================================================*/
function ShowChallenge(Num, Section) {
  /*  Reset All Button and Set Active one     */
  var nextChallenge = 1;
  $("#challenge_btn").css("visibility", "visible");
  $("#Intro_Challenge").css("visibility", "hidden");
  $("#Intro_Challenge").css("display", "none");
  $("#Challenge4_Text2").css("visibility", "hidden");
  $("#Challenge4_Text2").css("display", "none");
  $("#Tutorial4_PopUp").css("display", "none");
  $("#Tutorial4_PopUp").css("visibility", "hidden");
  Current_Challenge = Num;
  for (var CB = 1; CB < 6; CB++) {
    $("#Challenge" + CB + "_btn").removeClass("active");
    $("#Challenge" + CB + "_Text").css("visibility", "hidden");
    $("#Challenge" + CB + "_Text").css("display", "none");
  }
  /*=======================================*/
  $("#Challenge" + Num + "_btn").addClass("active");
  /*=======================================*/
  $("#Challenge" + Num + "_Text").css("visibility", "visible");
  /*=======================================*/
  $("#Challenge" + Num + "_Text").css("display", "block");
  /*=======================================*/
  if (Num == 4) {
    SelectTarget("Lamp1", "Targets2");
    $("#UpperGraphRow").css("visibility", "visible");
    $("#LowerGraphRow").css("visibility", "visible");
    $("#Tutorial4_PopUp").css("display", "block");
    $("#Tutorial4_PopUp").css("visibility", "visible");
    $("#Tutorial4_arrow_dn").css("visibility", "visible");
    $("#Tutorial4_nextbtn").css("visibility", "visible");
    $("#Tutorial4_btns").css("padding-right", "90px");
    if (Section == 1) {
      $("#Challenge4_Text1").css("visibility", "visible");
      $("#Challenge4_Text1").css("display", "block");
      $("#challenge_btn").attr("onclick", "ShowChallenge(4,2)");
      document.getElementById("challenge_btn").innerHTML = "NEXT";
    } else if (Section == 2) {
      $("#Challenge4_Text1").css("visibility", "hidden");
      $("#Challenge4_Text1").css("display", "none");
      $("#Challenge4_Text2").css("visibility", "visible");
      $("#Challenge4_Text2").css("display", "block");
      $("#challenge_btn").attr("onclick", "ShowChallenge(5,1)");
      document.getElementById("challenge_btn").innerHTML = "NEXT CHALLENGE";
    } else {
      $("#Challenge4_Text1").css("visibility", "visible");
      $("#Challenge4_Text1").css("display", "block");
      $("#Challenge4_Text2").css("visibility", "hidden");
      $("#Challenge4_Text2").css("display", "none");
      $("#challenge_btn").attr("onclick", "ShowChallenge(4,2)");
      document.getElementById("challenge_btn").innerHTML = "NEXT";
    }

    /*=======================================*/
  } else {
    if (Num == 5) {
      $("#UpperGraphRow").css("visibility", "hidden");
      $("#Draw_message1").css("display", "none");
      $("#LowerGraphRow").css("visibility", "visible");
    } else {
      $("#UpperGraphRow").css("visibility", "visible");
      $("#LowerGraphRow").css("visibility", "hidden");
    }
    /*=======================================*/
    document.getElementById("challenge_btn").innerHTML = "NEXT CHALLENGE";
    /*=======================================*/
    if (Num < 4 && Num > 0) {
      nextChallenge = Num + 1;
      $("#challenge_btn").attr(
        "onclick",
        "ShowChallenge(" + nextChallenge + ",1)",
      );
    }
  }

  /*=======================================*/
}
/*====================================================*/
/*====================================================*/
function NextSlide4(Choice, pick) {
  switch (Choice) {
    case "spectrum_image":
      document.getElementById("Tutorial4_text_p").innerHTML =
        "The spectrum image and spectrum graph of your comparison object will appear here. How does it compare to the spectrum image and graph above?";
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial4_btns").css("padding-right", "0px");
      $("#Tutorial4_backbtn").attr("onclick", "PrevSlide4('dropdown','pick')");
      $("#Tutorial4_nextbtn").attr("onclick", "NextSlide4('icon','pick')");
      $("#Tutorial4_backbtn").css("visibility", "visible");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup4").animate({ width: "650px" }, 50, function () {});
      $("#Tutorial4_PopUp").animate({ left: "85px" }, 500, function () {});
      $("#Tutorial4_PopUp").animate({ top: "80px" }, 500, function () {});
      /*=======================================*/
      break;
    case "icon":
      document.getElementById("Tutorial4_text_p").innerHTML =
        "Sometimes this icon will appear as a button, and you can choose a different category of comparison objects. Not for this challenge though.";
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial4_btns").css("padding-right", "0px");
      $("#Tutorial4_backbtn").attr(
        "onclick",
        "PrevSlide4('spectrum_image','pick')",
      );
      $("#Tutorial4_nextbtn").attr(
        "onclick",
        "closeInstructions4('boxpopup4')",
      );
      $("#Tutorial4_backbtn").css("visibility", "visible");
      document.getElementById("Tutorial4_nextbtn").innerHTML = "Finish";
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup4").animate({ width: "650px" }, 50, function () {});
      $("#Tutorial4_PopUp").animate({ left: "-570px" }, 500, function () {});
      $("#Tutorial4_PopUp").animate({ top: "240px" }, 500, function () {});
      /*=======================================*/
      break;
  }
}
/*====================================================*/
function PrevSlide4(Choice, pick) {
  switch (Choice) {
    case "dropdown":
      document.getElementById("Tutorial4_text_p").innerHTML =
        "Time to use the Comparison Object panel. You can select different objects from this dropdown to compare their spectra with your spectra above.";
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial4_btns").css("padding-right", "90px");
      $("#Tutorial4_nextbtn").attr(
        "onclick",
        "NextSlide4('spectrum_image','pick')",
      );
      $("#Tutorial4_backbtn").css("visibility", "hidden");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup4").animate({ width: "580px" }, 50, function () {});
      $("#Tutorial4_PopUp").animate({ left: "-415px" }, 500, function () {});
      $("#Tutorial4_PopUp").animate({ top: "240px" }, 500, function () {});
      /*=======================================*/
      break;
    case "spectrum_image":
      document.getElementById("Tutorial4_text_p").innerHTML =
        "The spectrum image and spectrum graph of your comparison object will appear here. How does it compare to the spectrum image and graph above?";
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial4_backbtn").attr("onclick", "PrevSlide4('dropdown','pick')");
      $("#Tutorial4_nextbtn").attr("onclick", "NextSlide4('icon','pick')");
      document.getElementById("Tutorial4_nextbtn").innerHTML = "Next";
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup4").animate({ width: "650px" }, 50, function () {});
      $("#Tutorial4_PopUp").animate({ left: "85px" }, 500, function () {});
      $("#Tutorial4_PopUp").animate({ top: "80px" }, 500, function () {});
      /*=======================================*/
      break;
  }
}
/*====================================================*/
function closeInstructions4(prospectElementID) {
  console.log("Clicked on closeInstructions4");
  $(function ($) {
    $(document).ready(function () {
      $("#Tutorial4_PopUp").animate({ left: "500%" }, 500, function () {
        $("#Tutorial4_PopUp").css("left", "500%");
        /*	$('#overlay1').fadeOut('fast');
				$('#overlay2').fadeOut('fast');*/
      });
    });
  });
}
/*====================================================*/
function NextSlide(Choice, pick) {
  console.log("NextSlide(" + Choice + ")");
  switch (Choice) {
    case "tool":
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("visibility", "visible");
      $("#Tutorial_arrow_dn").css("visibility", "hidden");
      $("#upperToolright").addClass("Tutorial_active_rightSection");
      $("#upperToolleft").addClass("Tutorial_active_leftSection");
      $("#UpperRainbowActiveDiv").css("visibility", "hidden");
      /*=======================================*/
      /*           Change the text             */
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text01;
      $("#boxpopup1").animate({ width: "520px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "230px" }, 500, function () {});
      break;
    case "spectrum_image":
      SeacrhFor("Draw", "CategoryDraw");
      $("#U_D_CRH").css("z-index", "0");
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_btns").css("padding-right", "0px");
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('tool','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('rainbow','pick')");
      $("#Tutorial_backbtn").css("visibility", "visible");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperRainbowActiveDiv").css("visibility", "visible");
      $("#upperToolright").removeClass("Tutorial_active_rightSection");
      $("#upperToolleft").removeClass("Tutorial_active_leftSection");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "650px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "30px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "24px" }, 500, function () {});
      /*=======================================*/
      break;
    case "rainbow":
      SeacrhFor("Draw", "CategoryDraw");
      $("#U_D_CRH").css("z-index", "0");
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr(
        "onclick",
        "PrevSlide('spectrum_image','pick')",
      );
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('graph','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "600px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "25px" }, 500, function () {});
      /*=======================================*/
      break;
    case "graph":
      SeacrhFor("Draw", "CategoryDraw");
      $("#U_D_CRH").css("z-index", "4");
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('rainbow','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('reset','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperRainbowActiveDiv").css("visibility", "hidden");
      $("#UpperGraphActiveDiv").css("visibility", "visible");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "600px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "55px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "150px" }, 500, function () {});
      /*=======================================*/
      break;
    case "reset":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('graph','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('comparison','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperGraphActiveDiv").css("visibility", "hidden");
      $("#upper_resetbtn").addClass("Tutorial_activeSection");
      //LowerGraphRow
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "550px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-397px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "197px" }, 500, function () {});
      /*=======================================*/
      break;
    case "comparison":
      SeacrhFor("Lamps", "Category2");
      SelectTarget("Lamp1", "Targets2");
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
      $("#Lamp1_Category2").attr("selected", "selected");
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('reset','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('dropdown','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#LowerToolright").addClass("Tutorial_active_rightSection");
      $("#LowerToolleft").addClass("Tutorial_active_leftSection");
      $("#upper_resetbtn").removeClass("Tutorial_activeSection");
      $("#Tutorial_arrow_up").css("visibility", "hidden");
      $("#Tutorial_arrow_dn").css("visibility", "visible");
      $("#LowerGraphRow").css("visibility", "visible");

      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/

      $("#boxpopup1").animate({ width: "550px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-252px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "-10px" }, 500, function () {});
      /*=======================================*/
      break;
    case "dropdown":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text07;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('comparison','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('tutorial','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("visibility", "hidden");
      $("#Tutorial_arrow_dn").css("visibility", "visible");
      $("#LowerGraphRow").css("visibility", "visible");
      $("#LowerToolright").removeClass("Tutorial_active_rightSection");
      $("#LowerToolleft").removeClass("Tutorial_active_leftSection");

      $("#four").addClass("Tutorial_activeSection");
      $("#four").addClass("Tutorial_activeRounded");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "450px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-325px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "225px" }, 500, function () {});
      /*=======================================*/
      break;
    case "tutorial":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text08;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('dropdown','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('challenge','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("visibility", "visible");
      $("#Tutorial_arrow_dn").css("visibility", "hidden");

      $("#four").removeClass("Tutorial_activeSection");
      $("#four").removeClass("Tutorial_activeRounded");
      $("#intro_icon").addClass("Tutorial_activeSection");

      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("left", "7%");
      $("#boxpopup1").animate({ width: "310px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-765px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "-25px" }, 500, function () {});
      /*=======================================*/
      break;
    case "challenge":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text09;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('tutorial','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "closeInstructions('boxpopup1')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("visibility", "hidden");
      $("#Tutorial_arrow_dn").css("visibility", "visible");
      $("#intro_icon").removeClass("Tutorial_activeSection");
      $("#challenge_btn").addClass("Tutorial_activeSection");
      document.getElementById("Tutorial_nextbtn").innerHTML = "Finish";

      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("left", "45%");
      $("#boxpopup1").animate({ width: "600px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-655px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "345px" }, 500, function () {});
      /*=======================================*/
      break;
  }
}
/*====================================================*/
/*====================================================*/
/*====================================================*/
function PrevSlide(Choice, pick) {
  console.log("PrevSlide(" + Choice + ")");
  switch (Choice) {
    case "tool":
      $("#U_D_CRH").css("z-index", "4");
      $("#Tutorial_btns").css("padding-right", "60px");
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text01;
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#upperToolright").addClass("Tutorial_active_rightSection");
      $("#upperToolleft").addClass("Tutorial_active_leftSection");
      $("#UpperRainbowActiveDiv").css("visibility", "hidden");
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").css("visibility", "hidden");
      $("#Tutorial_nextbtn").attr(
        "onclick",
        "NextSlide('spectrum_image','pick')",
      );
      $("#Tutorial_btns").css("padding-right", "60px");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_PopUp").css("display", "block");
      $("#Tutorial_PopUp").css("top", "230px");
      $("#boxpopup1").animate({ width: "520px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "230px" }, 500, function () {});
      /*=======================================*/
      break;
    case "spectrum_image":
      SeacrhFor("Draw", "CategoryDraw");
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
      $("#U_D_CRH").css("z-index", "0");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#upperToolright").removeClass("Tutorial_active_rightSection");
      $("#upperToolleft").removeClass("Tutorial_active_leftSection");
      $("#Tutorial_btns").css("padding-right", "0px");
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('tool','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('rainbow','pick')");
      $("#Tutorial_backbtn").css("visibility", "visible");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "650px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "30px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "24px" }, 500, function () {});
      /*=======================================*/
      break;
    case "rainbow":
      SeacrhFor("Draw", "CategoryDraw");
      $("#U_D_CRH").css("z-index", "0");
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr(
        "onclick",
        "PrevSlide('spectrum_image','pick')",
      );
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('graph','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperRainbowActiveDiv").css("visibility", "visible");
      $("#UpperGraphActiveDiv").css("visibility", "hidden");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "600px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "25px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "24px" }, 500, function () {});
      /*=======================================*/
      break;
    case "graph":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('rainbow','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('reset','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#upper_resetbtn").removeClass("Tutorial_activeSection");
      $("#UpperGraphActiveDiv").css("visibility", "visible");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "600px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "55px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "150px" }, 500, function () {});
      /*=======================================*/
      break;
    case "reset":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('graph','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('comparison','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#upper_resetbtn").addClass("Tutorial_activeSection");
      $("#Tutorial_arrow_dn").css("visibility", "hidden");
      $("#Tutorial_arrow_up").css("visibility", "visible");
      $("#LowerGraphRow").css("visibility", "hidden");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "550px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-397px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "197px" }, 500, function () {});
      /*=======================================*/
      break;
    case "comparison":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('reset','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('dropdown','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("visibility", "hidden");
      $("#Tutorial_arrow_dn").css("visibility", "visible");
      $("#LowerGraphRow").css("visibility", "visible");
      $("#LowerToolright").addClass("Tutorial_active_rightSection");
      $("#LowerToolleft").addClass("Tutorial_active_leftSection");

      $("#four").removeClass("Tutorial_activeSection");
      $("#four").removeClass("Tutorial_activeRounded");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/

      $("#boxpopup1").animate({ width: "550px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-252px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "-10px" }, 500, function () {});
      /*=======================================*/
      break;
    case "dropdown":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text07;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('comparison','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('tutorial','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#intro_icon").removeClass("Tutorial_activeSection");
      $("#Tutorial_arrow_up").css("visibility", "hidden");
      $("#Tutorial_arrow_dn").css("visibility", "visible");
      $("#four").addClass("Tutorial_activeSection");
      $("#four").addClass("Tutorial_activeRounded");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "450px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-325px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "225px" }, 500, function () {});
      /*=======================================*/
      break;
    case "tutorial":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text08;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('dropdown','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('challenge','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("visibility", "visible");
      $("#Tutorial_arrow_dn").css("visibility", "hidden");

      $("#four").removeClass("Tutorial_activeSection");
      $("#four").removeClass("Tutorial_activeRounded");
      $("#intro_icon").addClass("Tutorial_activeSection");
      document.getElementById("Tutorial_nextbtn").innerHTML = "Next";

      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("left", "7%");
      $("#boxpopup1").animate({ width: "310px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "-765px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "-25px" }, 500, function () {});
      /*=======================================*/
      break;
  }
}
/*====================================================*/
function Hide_Draw_Msg1() {
  $("#Draw_message1").css("display", "none");
}
/*====================================================*/
function openInstructions() {
  console.log("Clicked on openInstructions");
  $("#overlay2").fadeIn("fast");
  $("#challenge_btn").css("visibility", "hidden");
  $("#Tutorial_arrow_up").css("visibility", "visible");
  $("#Tutorial_arrow_dn").css("visibility", "hidden");
  document.getElementById("Tutorial_nextbtn").innerHTML = "Next";
  $("#Tutorial_arrow_up").css("left", "45%");
  $("#U_D_CRH").css("z-index", "4");
  $("#Tutorial_nextbtn").attr("onclick", "NextSlide('spectrum_image','pick')");
  /*=======================================*/
  /*       configure PopUp position        */
  /*=======================================*/
  $("#Tutorial_PopUp").css("display", "block");
  $("#boxpopup1").animate({ width: "520px" }, 50, function () {});
  $("#Tutorial_PopUp").css("top", "230px");
  $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
  /*=======================================*/
  /*    configure the active section       */
  /*=======================================*/
  $("#upperToolright").addClass("Tutorial_active_rightSection");
  $("#upperToolleft").addClass("Tutorial_active_leftSection");
  /*=======================================*/
  /*        configure the bottons          */
  /*=======================================*/
  $("#Tutorial_backbtn").css("visibility", "hidden");
  $("#Tutorial_btns").css("padding-right", "60px");
  document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text01;
}
/*==================*/
function closeInstructions(prospectElementID) {
  console.log("Clicked on closeInstructions");
  $(function ($) {
    $(document).ready(function () {
      $("#challenge_btn").css("visibility", "visible");
      console.log(
        "closeInstructions and closeInstructions=(%s)",
        Current_Challenge,
      );
      if (Current_Challenge == 4) {
        $("#LowerGraphRow").css("visibility", "visible");
      } else {
        $("#LowerGraphRow").css("visibility", "hidden");
      }

      $("#Tutorial_PopUp").animate({ left: "500%" }, 500, function () {
        $("#upperToolright").removeClass("Tutorial_active_rightSection");
        $("#upperToolleft").removeClass("Tutorial_active_leftSection");
        $("#Tutorial_PopUp").css("left", "500%");
        $("#overlay1").fadeOut("fast");
        $("#overlay2").fadeOut("fast");
      });
    });
  });
}
/*====================================================*/
/*====================================================*/
/*====================================================*/
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// END OF Script by Aladdin
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
