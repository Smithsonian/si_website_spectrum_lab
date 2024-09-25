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
/////////////////////////////////////////////////////////////////////
var Current_Challenge = "";
/////////////////////////////////////////////////////////////////////
/*====================================================*/
SeacrhFor("Draw", "CategoryDraw");
/*====================================================*/
function ShowChallenge(Num, Section) {
  /*  Reset All Button and Set Active one     */
  var nextChallenge = 1;
  $("#challenge_btn").css("visibility", "visible");
  Current_Challenge = Num;
  for (var CB = 1; CB < 6; CB++) {
    $("#Challenge" + CB + "_btn").removeClass("active");
    $("#Challenge" + CB + "_Text").css("visibility", "hidden");
    $("#Challenge" + CB + "_Text").css("display", "none");
  }

  $("#Challenge3_Text").css("visibility", "hidden");
  /*=======================================*/
  $("#Challenge3_Text").css("display", "none");
  /*=======================================*/
  $("#Challenge" + Num + "_btn").addClass("active");
  /*=======================================*/
  $("#Challenge" + Num + "_Text").css("visibility", "visible");
  /*=======================================*/
  $("#Challenge" + Num + "_Text").css("display", "block");

  /*=======================================*/
  if (Num == 1) {
    initialLineHdf();
    /*=======================================*/
    document.getElementById("Target_Name").innerHTML = "";
    document.getElementById("Comparison_Name").innerHTML = "";
    document.getElementById("UpperImg").src =
      "includes/AI_common/images/Harry_sun_spectrum.jpg";
    SeacrhFor("Fishtank_Lights", "Category1");
    /*=======================================*/
    /*=======================================*/
    $("#Challenge1_Text").css("visibility", "visible");
    $("#Challenge1_Text").css("display", "block");
    $("#challenge_btn").attr("onclick", "ShowChallenge(2,1)");
    document.getElementById("challenge_btn").innerHTML = "BONUS";
  } else if (Num == 2) {
    /*=======================================*/
    initialLineHdf();
    /*=======================================*/
    document.getElementById("Target_Name").innerHTML = "";
    document.getElementById("Comparison_Name").innerHTML = "";
    document.getElementById("UpperImg").src =
      "includes/AI_common/images/Harry_sun_spectrum.jpg";
    SeacrhFor("Fishtank_Lights", "Category1");
    /*=======================================*/
    /*=======================================*/
    /*=======================================*/
    /*=======================================*/
    $("#challenge_btn").attr("onclick", "ShowChallenge(3,1)");
    document.getElementById("challenge_btn").innerHTML = "FINISH";
    /*=======================================*/
  } else if (Num == 3) {
    /*=======================================*/
    /*=======================================*/
    $("#Challenge3_Text").css("visibility", "visible");
    /*=======================================*/
    $("#Challenge3_Text").css("display", "block");
    $("#challenge_btn").css("visibility", "hidden");
  } else {
    $("#LowerGraphRow").css("visibility", "visible");
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
/*====================================================*/
/*====================================================*/
/*====================================================*/
/*====================================================*/
/*====================================================*/
/*====================================================*/
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// END OF Script by Aladdin
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
