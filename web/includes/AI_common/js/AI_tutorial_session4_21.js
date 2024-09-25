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
//var Tutorial_text01="This colored/B&W bar represents the spectrum image — what you see through a spectroscope when a light source is split by a diffraction grating into its component wavelengths (or colors or energies)";
var Tutorial_text01 =
  "This bar represents the <strong>spectrum image</strong>—what you see through a spectroscope when a light source is split by a diffraction grating into its component wavelengths (or colors, or energies).";
var Tutorial_text02 =
  "This is the <strong>spectrum graph</strong>, which is a plot of the spectrum. It shows how much light the source emits or reflects at a given wavelength (or color, or energy). The spectrum is taken at one moment in time.";
var Tutorial_text03 =
  "The <strong>x-axis</strong> tells you the <strong>wavelength</strong> of the light at a given brightness level. For simplicity, the tool’s x-axis will always use microns as the wavelength unit.<br/><small>(Sometimes spectra are displayed with energy as the x-axis. Recall that when wavelength increases, energy decreases.)</small>";
var Tutorial_text04 =
  "The <strong>y-axis</strong> on a spectrum graph tells you the <strong>relative amount of light being emitted or reflected</strong> at each wavelength. This could also be labeled “brightness” or “intensity.” This spectrum tool scales the brightness of every source to values between 0 and 1.";
var Tutorial_text05 =
  "This <strong>measuring tool</strong> tells you the wavelength or energy of the light at a specific part of the spectrum.";
var Tutorial_text06 =
  "This <strong>measuring tool dropdown menu</strong> lets you choose the units (in wavelength or energy) that are reported by the measuring tool.";
var Tutorial_text07 =
  "This <strong>spectrum plot dropdown menu</strong> lets you toggle whether to display the spectrum data as individual points (<strong>scatter plot</strong>) or with a line connecting the points (<strong>line chart</strong>).<br/><small>(Some spectra have high wavelength resolution and show many data points within a wavelength range. Others have low wavelength resolution and show few data points within a wavelength range. Using the scatter plot option can make it easier to see differences between data sets in spectral resolution.)</small>";
var Tutorial_text08 =
  'This slider lets you change the range of wavelengths that is plotted on the x-axis.<br/>Visible light has wavelengths that range from 0.4-0.7 microns. Ultraviolet (UV) radiation has wavelengths shorter than visible, and infrared (IR) radiation has wavelengths longer than visible.<br/>Our tool can display spectra with wavelengths from 0.2-30 microns. The image below shows the full electromagnetic spectrum, including types of light (gamma ray, x-ray, microwave, and radio) that are not shown in our tool.<p><img src="includes/AI_common/images/EM_spectrum_wavelengths_editedfromNASAs.jpg" class="rounded" id="session3_image_8" alt="sun"></p>';
var Tutorial_text09 =
  "You can click here to replay the <strong>Session 2 tutorial</strong> later if you need a refresher on this content.";
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
  //$('#UpperRainbowActiveDiv').css('visibility','visible');
  /*=======================================*/
  /*           Change the text             */
  /*=======================================*/
  $("#overlay2").fadeIn("fast");
  $("#Tutorial_arrow_up").css("visibility", "visible");
  $("#Tutorial_arrow_dn").css("visibility", "hidden");
  document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text01;
  $("#Tutorial_nextbtn").attr("onclick", "NextSlide('graph','pick')");
  //SeacrhFor('Planets','Category1');
  //SeacrhFor('Planets','Category1');
  //SelectTarget('Mars','Targets1');
  //$("#Mars_Category1").attr("selected","selected");
  //SelectTarget('Mars','Targets1');
  document.getElementById("Category_box3").innerHTML =
    '<i class="fas fa-search" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="search"></i>';

  $("#challenge_btn").css("visibility", "visible");
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
  $("#Challenge1_Text1").css("visibility", "hidden");
  $("#Challenge1_Text1").css("display", "none");
  $("#Challenge1_Text2").css("visibility", "hidden");
  $("#Challenge1_Text2").css("display", "none");
  $("#Challenge1_Text3").css("visibility", "hidden");
  $("#Challenge1_Text3").css("display", "none");
  $("#Challenge2_Text1").css("visibility", "hidden");
  $("#Challenge2_Text1").css("display", "none");
  $("#Challenge2_Text2").css("visibility", "hidden");
  $("#Challenge2_Text2").css("display", "none");
  $("#Challenge2_Text3").css("visibility", "hidden");
  $("#Challenge2_Text3").css("display", "none");
  $("#Challenge3_Text").css("visibility", "hidden");
  $("#Challenge3_Text").css("display", "none");
  $("#Challenge4_Text").css("visibility", "hidden");
  $("#Challenge4_Text").css("display", "none");
  $("#Challenge5_Text").css("visibility", "hidden");
  $("#Challenge6_Text").css("visibility", "hidden");
  $("#Tutorial4_PopUp").css("display", "none");
  $("#Tutorial4_PopUp").css("visibility", "hidden");
  $("#LowerGraphRow").css("visibility", "visible");
  $("#All_Tools_And_Controls").css("visibility", "visible");
  $("#All_Tools_And_Controls").css("display", "block");
  document.getElementById("UpperImg").src =
    "includes/AI_common/images/Harry_sun_spectrum.jpg";
  document.getElementById("LowerImg").src =
    "includes/AI_common/images/Harry_sun_spectrum.jpg";
  document.getElementById("Target_Name").innerHTML = "";
  document.getElementById("Comparison_Name").innerHTML = "";
  //////////////////////////////////////////////////////
  Current_Challenge = Num;
  for (var CB = 1; CB < 6; CB++) {
    $("#Challenge" + CB + "_btn").removeClass("active");
    $("#Challenge" + CB + "_Text").css("visibility", "hidden");
    $("#Challenge" + CB + "_Text").css("display", "none");
  }

  /*=======================================*/
  $("#Challenge5_Text").css("display", "none");
  /*=======================================*/
  $("#Challenge" + Num + "_btn").addClass("active");
  /*=======================================*/
  $("#Challenge" + Num + "_Text").css("visibility", "visible");
  /*=======================================*/
  $("#Challenge" + Num + "_Text").css("display", "block");

  /*=======================================*/
  //console.log("Challenge (%s) and Section (%s)",Num,Section)
  if (Num == 1) {
    initialLineHdf();

    if (Section == 1) {
      //////////////////////////////////////////////////////
      SeacrhFor("Lamps", "Category1");
      document.getElementById("Category_box3").innerHTML =
        '<i class="fab fa-medapps" id="Cat1_Lamps" data-toggle="tooltip" data-placement="bottom" title="Lamps"></i>';
      document.getElementById("Targets1Filters").innerHTML =
        '<option value="">Incandescent bulb</option>';
      SeacrhFor("Lamps", "Category2");
      document.getElementById("Category_box4").innerHTML =
        '<i class="fab fa-medapps" id="Cat1_Lamps" data-toggle="tooltip" data-placement="bottom" title="Lamps"></i>';
      document.getElementById("Targets2Filters").innerHTML =
        '<option value="">Metal Halide</option>';
      SelectTarget("Incandescent_Bulb", "Targets1");
      SelectTarget("Metal_Halide_Bulb", "Targets2");
      //////////////////////////////////////////////////////
      $("#LowerGraphRow").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("display", "block");
      $("#Challenge1_Text1").css("visibility", "visible");
      $("#Challenge1_Text1").css("display", "block");
      //////////////////////////////////////////////////////
      $("#challenge_btn").attr("onclick", "ShowChallenge(1,2)");
      document.getElementById("challenge_btn").innerHTML = "GO TO DISCUSSION";
      //////////////////////////////////////////////////////
    } else if (Section == 2) {
      $("#All_Tools_And_Controls").css("visibility", "hidden");
      $("#All_Tools_And_Controls").css("display", "none");
      $("#Challenge1_Text2").css("visibility", "visible");
      $("#Challenge1_Text2").css("display", "block");
      //////////////////////////////////////////////////////
      $("#challenge_btn").attr("onclick", "ShowChallenge(1,3)");
      document.getElementById("challenge_btn").innerHTML = "GO TO PART II";
      //////////////////////////////////////////////////////
    } else if (Section == 3) {
      //////////////////////////////////////////////////////
      SeacrhFor("Lamps", "Category1");
      document.getElementById("Category_box3").innerHTML =
        '<i class="fab fa-medapps" id="Cat1_Lamps" data-toggle="tooltip" data-placement="bottom" title="Lamps"></i>';
      //////////////////////////////////////////////////////
      SeacrhFor("Lamps", "Category2");
      SelectTarget("Metal_Halide_Bulb", "Targets1");
      document.getElementById("Targets1Filters").innerHTML =
        '<option value="">Metal Halide Bulb</option>';
      SelectTarget("Metal_Halide_Bulb", "Targets1");
      document.getElementById("Target_Name").innerHTML = "Metal Halide Bulb";
      //////////////////////////////////////////////////////
      SeacrhFor("Atoms_and_Molecules", "Category2");
      document.getElementById("Category_box4").innerHTML =
        '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
      //////////////////////////////////////////////////////
      document.getElementById("Targets2Filters").innerHTML =
        '<option value="">Select Sub Category</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Hydrogen_Emission_Category2" value="Hydrogen_Emission">Hydrogen Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Helium_Emission_Category2" value="Helium_Emission">Helium Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Neon_Emission_Category2" value="Neon_Emission">Neon Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Sodium_Low_Pressure_Emission_Category2" value="Sodium_Low_Pressure_Emission">Sodium (low pressure) Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Mercury_Emission_Category2" value="Mercury_Emission">Mercury Emission</option>';
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      document.getElementById("S4C2P2_LampName1").innerHTML = "lamp #1";

      document.getElementById("S4C2P2_LampName2").innerHTML = "lamp #1";
      $("#LowerGraphRow").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("display", "block");
      $("#Challenge1_Text3").css("visibility", "visible");
      $("#Challenge1_Text3").css("display", "block");
      //////////////////////////////////////////////////////
      $("#challenge_btn").attr("onclick", "ShowChallenge(1,4)");
      document.getElementById("challenge_btn").innerHTML = "LAMP #2";
      //////////////////////////////////////////////////////
    } else if (Section == 4) {
      //////////////////////////////////////////////////////
      SeacrhFor("Lamps", "Category1");
      document.getElementById("Category_box3").innerHTML =
        '<i class="fab fa-medapps" id="Cat1_Lamps" data-toggle="tooltip" data-placement="bottom" title="Lamps"></i>';
      document.getElementById("Targets1Filters").innerHTML =
        '<option value="">Vapor Lamp</option>';
      SelectTarget("Sodium_Vapor_Lamp_Low_Pressure", "Targets1");
      SelectTarget("Sodium_Vapor_Lamp_Low_Pressure", "Targets1");
      document.getElementById("Target_Name").innerHTML = "Vapor Lamp";
      //////////////////////////////////////////////////////
      SeacrhFor("Atoms_and_Molecules", "Category2");
      document.getElementById("Category_box4").innerHTML =
        '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
      //////////////////////////////////////////////////////
      document.getElementById("Targets2Filters").innerHTML =
        '<option value="">Select Sub Category</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Hydrogen_Emission_Category2" value="Hydrogen_Emission">Hydrogen Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Helium_Emission_Category2" value="Helium_Emission">Helium Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Neon_Emission_Category2" value="Neon_Emission">Neon Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Sodium_Low_Pressure_Emission_Category2" value="Sodium_Low_Pressure_Emission">Sodium (low pressure) Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Mercury_Emission_Category2" value="Mercury_Emission">Mercury Emission</option>';
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////

      document.getElementById("S4C2P2_LampName1").innerHTML = "lamp #2";

      document.getElementById("S4C2P2_LampName2").innerHTML = "lamp #2";
      $("#LowerGraphRow").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("display", "block");
      $("#Challenge1_Text3").css("visibility", "visible");
      $("#Challenge1_Text3").css("display", "block");
      //////////////////////////////////////////////////////
      $("#challenge_btn").attr("onclick", "ShowChallenge(2,1)");
      document.getElementById("challenge_btn").innerHTML = "GO TO CHALLENGE 2";
      //////////////////////////////////////////////////////
    }
  } else if (Num == 2) {
    /*=======================================*/
    initialLineHdf();
    document.getElementById("Target_Name").innerHTML = "";
    document.getElementById("Comparison_Name").innerHTML = "";
    //////////////////////////////////////////////////////
    if (Section == 1) {
      //////////////////////////////////////////////////////
      $("#Challenge2_Text1").css("visibility", "visible");
      $("#Challenge2_Text1").css("display", "block");
      //////////////////////////////////////////////////////
      SeacrhFor("Atoms_and_Molecules", "Category1");
      document.getElementById("Category_box3").innerHTML =
        '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
      document.getElementById("Targets1Filters").innerHTML =
        '<option value="">Hydrogen Emission</option>';
      //////////////////////////////////////////////////////
      SeacrhFor("Atoms_and_Molecules", "Category2");
      document.getElementById("Category_box4").innerHTML =
        '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
      document.getElementById("Targets2Filters").innerHTML =
        '<option value="">Comparison spectrum</option>';
      //////////////////////////////////////////////////////
      SelectTarget("Hydrogen_Emission", "Targets1");
      SelectTarget("Hydrogen_Absorption", "Targets2");
      SelectTarget("Hydrogen_Emission", "Targets1");
      SelectTarget("Hydrogen_Absorption", "Targets2");
      document.getElementById("Comparison_Name").innerHTML =
        "Comparison spectrum";
      //////////////////////////////////////////////////////Hydrogen Emission
      $("#All_Tools_And_Controls").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("display", "block");
      $("#LowerGraphRow").css("visibility", "visible");
      //////////////////////////////////////////////////////
      $("#challenge_btn").attr("onclick", "ShowChallenge(2,2)");
      document.getElementById("challenge_btn").innerHTML = "GO TO DISCUSSION";
      //////////////////////////////////////////////////////
    } else if (Section == 2) {
      //////////////////////////////////////////////////////
      $("#Challenge2_Text2").css("visibility", "visible");
      $("#Challenge2_Text2").css("display", "block");
      //////////////////////////////////////////////////////
      $("#All_Tools_And_Controls").css("visibility", "hidden");
      $("#All_Tools_And_Controls").css("display", "none");
      $("#LowerGraphRow").css("visibility", "hidden");
      //////////////////////////////////////////////////////
      $("#challenge_btn").attr("onclick", "ShowChallenge(2,3)");
      document.getElementById("challenge_btn").innerHTML = "GO TO PART II";
      //////////////////////////////////////////////////////
    } else if (Section == 3) {
      //////////////////////////////////////////////////////
      document.getElementById("Category_box3").innerHTML =
        '<i class="fas fa-sun" id="Cat1_Stars" data-toggle="tooltip" data-placement="bottom" title="Stars"></i>';
      SeacrhFor("Stars", "Category1");
      SeacrhFor("Stars", "Category1");
      SelectTarget("sun_ref_colina96", "Targets1");
      $("#sun_ref_colina96_Category1").attr("selected", "selected");
      document.getElementById("Targets1Filters").innerHTML =
        '<option value="">Sun</option>';
      //////////////////////////////////////////////////////
      SeacrhFor("Atoms_and_Molecules", "Category2");
      document.getElementById("Category_box4").innerHTML =
        '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
      //////////////////////////////////////////////////////
      document.getElementById("Targets2Filters").innerHTML =
        '<option value="">Select Sub Category</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Hydrogen_Emission_Category2" value="Hydrogen_Emission">Hydrogen Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Helium_Emission_Category2" value="Helium_Emission">Helium Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Neon_Emission_Category2" value="Neon_Emission">Neon Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Calcium_Emission_Category2" value="Calcium_Emission">Calcium Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Iron_Emission_Category2" value="Iron_Emission">Iron Emission</option>';
      document.getElementById("Targets2Filters").innerHTML +=
        '<option id="Mercury_Emission_Category2" value="Mercury_Emission">Mercury Emission</option>';
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      $("#Challenge2_Text3").css("visibility", "visible");
      $("#Challenge2_Text3").css("display", "block");
      //////////////////////////////////////////////////////
      $("#LowerGraphRow").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("visibility", "visible");
      $("#All_Tools_And_Controls").css("display", "block");
      //////////////////////////////////////////////////////
      $("#challenge_btn").attr("onclick", "ShowChallenge(3,1)");
      document.getElementById("challenge_btn").innerHTML = "GO TO CHALLENGE 3";
      //////////////////////////////////////////////////////
    }
    /* SeacrhFor('Nature','Category1');
                SelectTarget('Cactus_Reflection','Targets1');
                document.getElementById('Targets1Filters').innerHTML='<option value="">Cactus Reflection</option>';
                SelectTarget('Cactus_Reflection','Targets1');
                //////////////////////////////////////////////////////
                document.getElementById("Category_box4").innerHTML ='<i class="fa fa-leaf" id="Cat2_Nature" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Nature"></i>';
                SeacrhFor('Nature','Category2');
                SelectTarget('Pansy_Reflection','Targets2');
                document.getElementById('Targets2Filters').innerHTML='<option value="">Pansy Reflection</option>';
                SelectTarget('Pansy_Reflection','Targets2');
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                $('#LowerGraphRow').css('visibility','visible');
                //////////////////////////////////////////////////////
                $("#challenge_btn").attr("onclick","ShowChallenge(3,1)");
                document.getElementById("challenge_btn").innerHTML ="NEXT CHALLENGE";
                //////////////////////////////////////////////////////*/
  } else if (Num == 3) {
    /*=======================================*/
    initialLineHdf();
    document.getElementById("Target_Name").innerHTML = "";
    document.getElementById("Comparison_Name").innerHTML = "";
    $("#Challenge3_Text").css("visibility", "visible");
    $("#Challenge3_Text").css("display", "block");
    /*=======================================*/
    SeacrhFor("Solar_System", "Category1");
    document.getElementById("Category_box3").innerHTML =
      '<i class="fa fa-globe" id="Cat1_Planets" data-toggle="tooltip" data-placement="bottom" title="Planets"></i>';

    SeacrhFor("Solar_System", "Category1");
    document.getElementById("Targets1Filters").innerHTML =
      '<option value="">Select Sub Category</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Earth_Reflection_Category1" value="Earth_Reflection">Earth Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Earth_Emission_Category1" value="Earth_Emission">Earth Emission</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Earth_Transmission_Category1" value="Earth_Transmission">Earth Transmission</option>';
    /*=======================================*/
    SeacrhFor("Atoms_and_Molecules", "Category2");
    document.getElementById("Category_box4").innerHTML =
      '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
    document.getElementById("Targets2Filters").innerHTML =
      '<option value="">Select Sub Category</option>';
    /*document.getElementById('Targets2Filters').innerHTML+='<option id="Neon_Emission_Category2" value="Neon_Emission">Neon Emission</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Mercury_Emission_Category2" value="Mercury_Emission">Mercury Emission</option>';*/
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ammonia_Absorption_Category2" value="Ammonia_Absorption">Ammonia Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Carbon_Dioxide_Absorption_Near_to_Mid_IR_Category2" value="Carbon_Dioxide_Absorption_Near_to_Mid_IR">Carbon Dioxide Absorption (Near to Mid IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Carbon_Dioxide_Absorption_Mid_to_Far_IR_Category2" value="Carbon_Dioxide_Absorption_Mid_to_Far_IR">Carbon Dioxide Absorption (Mid to Far IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Oxygen_Molecules_Absorption_Category2" value="Oxygen_Molecules_Absorption">Molecular oxygen absorption</option>';
    /* document.getElementById('Targets2Filters').innerHTML+='<option id="Ozone_Absorption_in_UV_Category2" value="Ozone_Absorption_in_UV">Ozone Absorption (UV)</option>';*/
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ozone_Absorption_in_IR_Category2" value="Ozone_Absorption_in_IR">Ozone Absorption (IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Water_Vapor_Absorption_Category2" value="Water_Vapor_Absorption">Water Vapor Absorption</option>';
    ///////////////////////////////////////////////
    /*document.getElementById('Targets2Filters').innerHTML='<option value="">Select Sub Category</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Hydrogen_Emission_Category2" value="Hydrogen_Emission">Hydrogen Emission</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Helium_Emission_Category2" value="Helium_Emission">Helium Emission</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Neon_Emission_Category2" value="Neon_Emission">Neon Emission</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Sodium_Low_Pressure_Emission_Category2" value="Sodium_Low_Pressure_Emission">Sodium (low pressure) Emission</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Mercury_Emission_Category2" value="Mercury_Emission">Mercury Emission</option>';*/
    ///////////////////////////////////////////////

    /*=======================================*/
    /*=======================================*/
    $("#LowerGraphRow").css("visibility", "visible");
    /*=======================================*/
    $("#challenge_btn").attr("onclick", "ShowChallenge(4,1)");
    document.getElementById("challenge_btn").innerHTML = "GO TO CHALLENGE 4";
    /*=======================================*/
  } else if (Num == 4) {
    /*=======================================*/
    initialLineHdf();

    $("#Challenge4_Text").css("visibility", "visible");
    $("#Challenge4_Text").css("display", "block");
    document.getElementById("Target_Name").innerHTML = "";
    document.getElementById("Comparison_Name").innerHTML = "";
    /*if(Section==1)
                    {*/
    /*=======================================*/
    SeacrhFor("Solar_System", "Category1");
    document.getElementById("Category_box3").innerHTML =
      '<i class="fa fa-globe" id="Cat1_Planets" data-toggle="tooltip" data-placement="bottom" title="Planets"></i>';
    SeacrhFor("Solar_System", "Category1");

    document.getElementById("Targets1Filters").innerHTML =
      '<option value="">Select Sub Category</option>';
    /*document.getElementById('Targets1Filters').innerHTML+='<option id="Venus_Reflection_Category1" value="Venus_Reflection">Venus Reflection</option>';*/
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Mars_Reflection_Category1" value="Mars_Reflection">Mars Reflection</option>';

    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Jupiter_Reflection_Category1" value="Jupiter_Reflection">Jupiter Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Europa_Reflection_Category1" value="Europa_Reflection">Europa Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Saturn_Reflection_Category1" value="Saturn_Reflection">Saturn Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Saturn_Rings_Reflection_Category1" value="Saturn_Rings_Reflection">Saturn Rings Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Titan_Reflection_Category1" value="Titan_Reflection">Titan Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Uranus_Reflection_Category1" value="Uranus_Reflection">Uranus Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Neptune_Reflection_Category1" value="Neptune_Reflection">Neptune Reflection</option>';
    /*=======================================*/
    SeacrhFor("Atoms_and_Molecules", "Category2");
    document.getElementById("Category_box4").innerHTML =
      '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
    ///////////////////////////////////////////////
    document.getElementById("Targets2Filters").innerHTML =
      '<option value="">Select Sub Category</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ammonia_Absorption_Category2" value="Ammonia_Absorption">Ammonia Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Carbon_Dioxide_Absorption_Near_to_Mid_IR_Category2" value="Carbon_Dioxide_Absorption_Near_to_Mid_IR">Carbon Dioxide Absorption (Near to Mid IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Carbon_Dioxide_Absorption_Mid_to_Far_IR_Category2" value="Carbon_Dioxide_Absorption_Mid_to_Far_IR">Carbon Dioxide Absorption (Mid to Far IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Dry_Ice_Reflection_Category2" value="Dry_Ice_Reflection">Dry Ice Reflection</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Methane_Visible_Absorption_Category2" value="Methane_Visible_Absorption">Methane Visible Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Methane_Near_IR_Absorption_Category2" value="Methane_Near_IR_Absorption">Methane Near IR Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Oxygen_Molecules_Absorption_Category2" value="Oxygen_Molecules_Absorption">Molecular oxygen absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ozone_Absorption_in_IR_Category2" value="Ozone_Absorption_in_IR">Ozone Absorption (IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Iron_Oxide_Rust_Reflection_Category2" value="Iron_Oxide_Rust_Reflection">Iron Oxide (Rust) Reflection</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Water_Vapor_Absorption_Category2" value="Water_Vapor_Absorption">Water Vapor Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ice_Reflection_Category2" value="Ice_Reflection">Ice (Water) Reflection</option>';

    ///////////////////////////////////////////////
    $("#LowerGraphRow").css("visibility", "visible");
    /*=======================================*/
    $("#challenge_btn").attr("onclick", "ShowChallenge(5,1)");
    document.getElementById("challenge_btn").innerHTML = "GO TO BONUS";
    /*=======================================*/
    /*   }
                if(Section==2)
                    {
                        $('#Challenge4_Text1').css('visibility','hidden');
                        $('#Challenge4_Text1').css('display','none');
                        $('#Challenge4_Text2').css('visibility','visible');
                        $('#Challenge4_Text2').css('display','block');
                        document.getElementById("Target_Name").innerHTML ="";
                        document.getElementById("Comparison_Name").innerHTML ="";
                        //////////////////////////////////////////////////////
                        SeacrhFor('Solar_System','Category1');
                        document.getElementById("Category_box3").innerHTML ="<i class=\"fa fa-globe\" id=\"Cat1_Planets\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Planets\"></i>";
                        SeacrhFor('Solar_System','Category1');
                        
                document.getElementById('Targets1Filters').innerHTML='<option value="">Select Sub Category</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Venus_Reflection_Category1" value="Venus_Reflection">Venus Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Mars_Reflection_Category1" value="Mars_Reflection">Mars Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Jupiter_Reflection_Category1" value="Jupiter_Reflection">Jupiter Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Europa_Reflection_Category1" value="Europa_Reflection">Europa Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Saturn_Reflection_Category1" value="Saturn_Reflection">Saturn Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Saturn_Rings_Reflection_Category1" value="Saturn_Rings_Reflection">Saturn Rings Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Titan_Reflection_Category1" value="Titan_Reflection">Titan Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Uranus_Reflection_Category1" value="Uranus_Reflection">Uranus Reflection</option>';
                document.getElementById('Targets1Filters').innerHTML+='<option id="Neptune_Reflection_Category1" value="Neptune_Reflection">Neptune Reflection</option>';
                        //////////////////////////////////////////////////////
                         SeacrhFor('Atoms_and_Molecules','Category2');
                        document.getElementById("Category_box4").innerHTML ="<i class=\"fab fa-react\" id=\"Cat1_Atoms_and_Molecules\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Atoms_and_Molecules\"></i>";
                        //////////////////////////////////////////////////////
                        $('#LowerGraphRow').css('visibility','visible');
                        //////////////////////////////////////////////////////
                        $("#challenge_btn").attr("onclick","ShowChallenge(5,1)");
                        document.getElementById("challenge_btn").innerHTML ="FINISH";
                    }*/
    /*=======================================*/
  } /*=======================================*/ else if (Num == 5) {
    initialLineHdf();
    //////////////////////////////////////////////////////
    $("#Challenge5_Text").css("visibility", "visible");
    $("#Challenge5_Text").css("display", "block");
    //////////////////////////////////////////////////////
    /*=======================================*/
    SeacrhFor("Solar_System", "Category1");
    document.getElementById("Category_box3").innerHTML =
      '<i class="fa fa-globe" id="Cat1_Planets" data-toggle="tooltip" data-placement="bottom" title="Planets"></i>';
    SeacrhFor("Solar_System", "Category1");

    document.getElementById("Targets1Filters").innerHTML =
      '<option value="">Select Sub Category</option>';
    /*document.getElementById('Targets1Filters').innerHTML+='<option id="Venus_Reflection_Category1" value="Venus_Reflection">Venus Reflection</option>';*/
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Mars_Reflection_Category1" value="Mars_Reflection">Mars Reflection</option>';

    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Jupiter_Reflection_Category1" value="Jupiter_Reflection">Jupiter Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Europa_Reflection_Category1" value="Europa_Reflection">Europa Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Saturn_Reflection_Category1" value="Saturn_Reflection">Saturn Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Saturn_Rings_Reflection_Category1" value="Saturn_Rings_Reflection">Saturn Rings Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Titan_Reflection_Category1" value="Titan_Reflection">Titan Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Uranus_Reflection_Category1" value="Uranus_Reflection">Uranus Reflection</option>';
    document.getElementById("Targets1Filters").innerHTML +=
      '<option id="Neptune_Reflection_Category1" value="Neptune_Reflection">Neptune Reflection</option>';
    /*=======================================*/
    SeacrhFor("Atoms_and_Molecules", "Category2");
    document.getElementById("Category_box4").innerHTML =
      '<i class="fab fa-react" id="Cat1_Atoms_and_Molecules" data-toggle="tooltip" data-placement="bottom" title="Atoms_and_Molecules"></i>';
    ///////////////////////////////////////////////
    document.getElementById("Targets2Filters").innerHTML =
      '<option value="">Select Sub Category</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ammonia_Absorption_Category2" value="Ammonia_Absorption">Ammonia Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Carbon_Dioxide_Absorption_Near_to_Mid_IR_Category2" value="Carbon_Dioxide_Absorption_Near_to_Mid_IR">Carbon Dioxide Absorption (Near to Mid IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Carbon_Dioxide_Absorption_Mid_to_Far_IR_Category2" value="Carbon_Dioxide_Absorption_Mid_to_Far_IR">Carbon Dioxide Absorption (Mid to Far IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Dry_Ice_Reflection_Category2" value="Dry_Ice_Reflection">Dry Ice Reflection</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Methane_Visible_Absorption_Category2" value="Methane_Visible_Absorption">Methane Visible Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Methane_Near_IR_Absorption_Category2" value="Methane_Near_IR_Absorption">Methane Near IR Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Oxygen_Molecules_Absorption_Category2" value="Oxygen_Molecules_Absorption">Molecular oxygen absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ozone_Absorption_in_IR_Category2" value="Ozone_Absorption_in_IR">Ozone Absorption (IR)</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Iron_Oxide_Rust_Reflection_Category2" value="Iron_Oxide_Rust_Reflection">Iron Oxide (Rust) Reflection</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Water_Vapor_Absorption_Category2" value="Water_Vapor_Absorption">Water Vapor Absorption</option>';
    document.getElementById("Targets2Filters").innerHTML +=
      '<option id="Ice_Reflection_Category2" value="Ice_Reflection">Ice (Water) Reflection</option>';

    ///////////////////////////////////////////////
    //////////////////////////////////////////////////////
    $("#challenge_btn").attr("onclick", "ShowChallenge(6,1)");
    document.getElementById("challenge_btn").innerHTML = "FINISH";
    //////////////////////////////////////////////////////
  } else if (Num == 6) {
    //////////////////////////////////////////////////////
    $("#Challenge6_Text").css("visibility", "visible");
    //////////////////////////////////////////////////////
    $("#Challenge6_Text").css("display", "block");
    $("#challenge_btn").css("visibility", "hidden");
    //////////////////////////////////////////////////////
    $("#All_Tools_And_Controls").css("visibility", "hidden");
    $("#All_Tools_And_Controls").css("display", "none");
    $("#LowerGraphRow").css("visibility", "hidden");
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
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
function NextSlide(Choice, pick) {
  //console.log('NextSlide('+Choice+')');
  switch (Choice) {
    case "rainbow":
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
      $("#boxpopup1").animate({ width: "580px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "300px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "24px" }, 500, function () {});
      break;
    case "graph":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('rainbow','pick')");
      $("#Tutorial_btns").css("padding-right", "0px");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('wavelength','pick')");
      $("#Tutorial_backbtn").css("visibility", "visible");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperRainbowActiveDiv").css("visibility", "hidden");
      $("#UpperGraphActiveDiv").css("visibility", "visible");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "620px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "255px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "150px" }, 500, function () {});
      /*=======================================*/
      break;
    case "wavelength":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('graph','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('MoreLight','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperGraphActiveDiv").css("visibility", "hidden");
      $("#Wavelength_Upper_Div").addClass("Active_text");
      //LowerGraphRow
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "700px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "215px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "220px" }, 500, function () {});
      /*=======================================*/
      break;
    case "MoreLight":
      /*=======================================*/
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('wavelength','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('Indicator','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Wavelength_Upper_Div").removeClass("Active_text");
      $("#More_Light_Upper_Div").addClass("Active_text");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "-5%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "550px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "150px" }, 500, function () {});
      /*=======================================*/
      break;
    case "Indicator":
      /*=======================================*/
      UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
      updateIndicator(307, 20);
      line1.x1 = 307;
      line1.y1 = 0;
      line1.x2 = 307;
      line1.y2 = UIC.height;
      UIC_ctx.lineWidth = 4;
      UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
      UIC_ctx.strokeStyle = "#fee567";
      UIC_ctx.stroke();
      line1.draw();
      /// color for background
      UIC_ctx.fillStyle = "#fee567";
      /// draw background rect assuming height of font
      UIC_ctx.fillRect(310, 109, 45, 15);
      UIC_ctx.font = "14px Myriad Pro";
      UIC_ctx.fillStyle = "#000";
      UIC_ctx.fillText("0.5660", 307 + 6, 122);
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('MoreLight','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('dropdown1','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#More_Light_Upper_Div").removeClass("Active_text");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "3%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "450px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "355px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "165px" }, 500, function () {});
      /*=======================================*/
      break;
    case "dropdown1":
      /*=======================================*/
      UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
      /*=======================================*/
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('Indicator','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('dropdown2','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#SelectWavelength").addClass("Tutorial_activeRounded");
      $("#SelectWavelength").addClass("Tutorial_activeSection");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "450px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ top: "288px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ left: "20px" }, 500, function () {});
      /*=======================================*/
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      /*=======================================*/
      break;
    case "dropdown2":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text07;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('dropdown1','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('slider','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/

      $("#SelectWavelength").removeClass("Tutorial_activeRounded");
      $("#SelectWavelength").removeClass("Tutorial_activeSection");
      $("#SelectPreference").addClass("Tutorial_activeRounded");
      $("#SelectPreference").addClass("Tutorial_activeSection");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "-37%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "650px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ top: "288px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      /*=======================================*/
      break;
    case "slider":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text08;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('dropdown2','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('replay','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#SelectPreference").removeClass("Tutorial_activeRounded");
      $("#SelectPreference").removeClass("Tutorial_activeSection");

      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("left", "3%");
      $("#boxpopup1").animate({ width: "860px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ top: "255px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      /*=======================================*/
      break;
    case "replay":
      $("#Tutorial_PopUp").animate({ left: "500%" }, 500, function () {});

      $("#Tutorial_Challenge_PopUp").css("display", "block");
      $("#Tutorial_Challenge_PopUp").css("visibility", "visible");
      $("#Tutorial_Challenge_arrow_up").css("visibility", "visible");
      $("#Tutorial_Challenge_nextbtn").css("visibility", "visible");
      $("#Tutorial_Challenge_backbtn").css("visibility", "visible");
      /*document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text09;*/
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      /* $("#Tutorial_backbtn").attr("onclick","PrevSlide('slider','pick')");
                $("#Tutorial_nextbtn").attr("onclick","closeInstructions('boxpopup1')");*/
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      /*$('#SelectPreference').removeClass("Tutorial_activeRounded");
                $('#SelectPreference').removeClass("Tutorial_activeSection");
                document.getElementById("Tutorial_nextbtn").innerHTML = 'Finish';*/

      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      /*$('#Tutorial_arrow_up').css('left','-40%');
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'-513px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'-27px'}, 500, function() {});*/
      /*=======================================*/
      break;
  }
}
/*====================================================*/
/*====================================================*/
/*====================================================*/
function PrevSlide(Choice, pick) {
  //console.log('PrevSlide('+Choice+')');
  switch (Choice) {
    case "rainbow":
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("visibility", "visible");
      $("#Tutorial_arrow_dn").css("visibility", "hidden");
      $("#upperToolright").addClass("Tutorial_active_rightSection");
      $("#upperToolleft").addClass("Tutorial_active_leftSection");
      $("#UpperRainbowActiveDiv").css("visibility", "hidden");
      $("#UpperRainbowActiveDiv").css("visibility", "visible");
      $("#UpperGraphActiveDiv").css("visibility", "hidden");
      $("#Tutorial_btns").css("padding-right", "60px");
      $("#Tutorial_nextbtn").css("visibility", "visible");
      $("#Tutorial_backbtn").css("visibility", "hidden");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('graph','pick')");
      /*=======================================*/
      /*           Change the text             */
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text01;
      $("#boxpopup1").animate({ width: "580px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "300px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "24px" }, 500, function () {});
      break;
    case "graph":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('rainbow','pick')");
      $("#Tutorial_btns").css("padding-right", "0px");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('wavelength','pick')");
      $("#Tutorial_backbtn").css("visibility", "visible");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperRainbowActiveDiv").css("visibility", "hidden");
      $("#UpperGraphActiveDiv").css("visibility", "visible");
      $("#Wavelength_Upper_Div").removeClass("Active_text");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#boxpopup1").animate({ width: "620px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "255px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "150px" }, 500, function () {});
      /*=======================================*/
      break;
    case "wavelength":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('graph','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('MoreLight','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#UpperGraphActiveDiv").css("visibility", "hidden");
      $("#Wavelength_Upper_Div").addClass("Active_text");
      $("#More_Light_Upper_Div").removeClass("Active_text");
      //LowerGraphRow
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "3%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "700px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "215px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "220px" }, 500, function () {});
      /*=======================================*/
      break;
    case "MoreLight":
      /*=======================================*/
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('wavelength','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('Indicator','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
      $("#Wavelength_Upper_Div").removeClass("Active_text");
      $("#More_Light_Upper_Div").addClass("Active_text");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "-5%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "550px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "150px" }, 500, function () {});
      /*=======================================*/
      break;
    case "Indicator":
      /*=======================================*/
      UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
      updateIndicator(307, 20);
      line1.x1 = 307;
      line1.y1 = 0;
      line1.x2 = 307;
      line1.y2 = UIC.height;
      UIC_ctx.lineWidth = 4;
      UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
      UIC_ctx.strokeStyle = "#fee567";
      UIC_ctx.stroke();
      line1.draw();
      /// color for background
      UIC_ctx.fillStyle = "#fee567";
      /// draw background rect assuming height of font
      UIC_ctx.fillRect(310, 109, 45, 15);
      UIC_ctx.font = "14px Myriad Pro";
      UIC_ctx.fillStyle = "#000";
      UIC_ctx.fillText("0.5660", 307 + 6, 122);
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('MoreLight','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('dropdown1','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#More_Light_Upper_Div").removeClass("Active_text");
      $("#SelectWavelength").removeClass("Tutorial_activeRounded");
      $("#SelectWavelength").removeClass("Tutorial_activeSection");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "3%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "450px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "355px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "165px" }, 500, function () {});
      /*=======================================*/
      break;
    case "dropdown1":
      /*=======================================*/
      UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
      /*=======================================*/
      /*=======================================*/
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('Indicator','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('dropdown2','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#SelectWavelength").addClass("Tutorial_activeRounded");
      $("#SelectWavelength").addClass("Tutorial_activeSection");
      $("#SelectPreference").removeClass("Tutorial_activeRounded");
      $("#SelectPreference").removeClass("Tutorial_activeSection");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "3%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "450px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "20px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "288px" }, 500, function () {});
      /*=======================================*/
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      /*=======================================*/
      break;
    case "dropdown2":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text07;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('dropdown1','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('slider','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/

      $("#SelectWavelength").removeClass("Tutorial_activeRounded");
      $("#SelectWavelength").removeClass("Tutorial_activeSection");
      $("#SelectPreference").addClass("Tutorial_activeRounded");
      $("#SelectPreference").addClass("Tutorial_activeSection");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").animate({ left: "-37%" }, 50, function () {});
      $("#boxpopup1").animate({ width: "650px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ top: "288px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      /*=======================================*/
      break;
    case "slider":
      document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text08;
      /*=======================================*/
      /*        configure the bottons          */
      /*=======================================*/
      $("#Tutorial_backbtn").attr("onclick", "PrevSlide('dropdown2','pick')");
      $("#Tutorial_nextbtn").attr("onclick", "NextSlide('replay','pick')");
      /*=======================================*/
      /*    configure the active section       */
      /*=======================================*/
      $("#SelectPreference").removeClass("Tutorial_activeRounded");
      $("#SelectPreference").removeClass("Tutorial_activeSection");

      $("#Tutorial_Challenge_PopUp").css("display", "none");
      $("#Tutorial_Challenge_PopUp").css("visibility", "hidden");
      $("#Tutorial_Challenge_arrow_up").css("visibility", "hidden");
      $("#Tutorial_Challenge_nextbtn").css("visibility", "hidden");
      $("#Tutorial_Challenge_backbtn").css("visibility", "hidden");
      /*=======================================*/
      /*       configure PopUp position        */
      /*=======================================*/
      $("#Tutorial_arrow_up").css("left", "3%");
      $("#boxpopup1").animate({ width: "860px" }, 50, function () {});
      $("#Tutorial_PopUp").animate({ left: "0px" }, 500, function () {});
      $("#Tutorial_PopUp").animate({ top: "255px" }, 500, function () {});
      /*=======================================*/
      break;
  }
}
/*====================================================*/
/*====================================================*/
function openInstructions() {
  //console.log('Clicked on openInstructions');
  $("#Challenge1_Image_session1").css("visibility", "hidden");
  $("#Challenge1_Image_session1").css("display", "none");
  $("#All_Tools_And_Controls").css("visibility", "visible");
  $("#All_Tools_And_Controls").css("display", "block");
  $("#Tutorial_nextbtn").attr("onclick", "NextSlide('graph','pick')");
  if ((Current_Challenge = "")) {
    SeacrhFor("Planets", "Category1");
    SeacrhFor("Planets", "Category1");
    SelectTarget("Mars", "Targets1");
    $("#Mars_Category1").attr("selected", "selected");
    SelectTarget("Mars", "Targets1");
    document.getElementById("Category_box3").innerHTML =
      '<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="search"></i>';
  }
  $("#Review_Text1").css("visibility", "hidden");
  $("#Review_Text1").css("display", "none");
  document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text01;
  $("#overlay2").fadeIn("fast");
  $("#challenge_btn").css("visibility", "hidden");
  $("#Tutorial_arrow_up").css("visibility", "visible");
  $("#Tutorial_arrow_dn").css("visibility", "hidden");
  document.getElementById("Tutorial_nextbtn").innerHTML = "Next";
  $("#Tutorial_arrow_up").css("left", "3%");
  $("#U_D_CRH").css("z-index", "4");
  $("#Tutorial_nextbtn").attr("onclick", "NextSlide('graph','pick')");
  /*=======================================*/
  /*       configure PopUp position        */
  /*=======================================*/
  $("#Tutorial_PopUp").css("display", "block");
  $("#boxpopup1").animate({ width: "580px" }, 50, function () {});
  $("#Tutorial_PopUp").css("top", "24px");
  $("#Tutorial_PopUp").animate({ left: "300px" }, 500, function () {});
  /*=======================================*/
  /*    configure the active section       */
  /*=======================================*/
  $("#UpperRainbowActiveDiv").css("visibility", "visible");
  /*=======================================*/
  /*        configure the bottons          */
  /*=======================================*/
  $("#Tutorial_backbtn").css("visibility", "hidden");
  $("#Tutorial_btns").css("padding-right", "60px");
}
/*==================*/
function closeInstructions(prospectElementID) {
  //console.log('Clicked on closeInstructions');
  $(function ($) {
    $(document).ready(function () {
      $("#challenge_btn").css("visibility", "visible");
      //console.log("closeInstructions and closeInstructions=(%s)",Current_Challenge);
      /* if(Current_Challenge==4)
                {$('#LowerGraphRow').css('visibility','visible');}
            else
                {$('#LowerGraphRow').css('visibility','hidden');}*/
      $("#Review_Text1").css("visibility", "visible");
      $("#Review_Text1").css("display", "block");

      $("#Tutorial_PopUp").animate({ left: "500%" }, 500, function () {
        $("#Tutorial_Challenge_PopUp").css("display", "none");
        $("#Tutorial_Challenge_PopUp").css("visibility", "hidden");
        $("#Tutorial_Challenge_arrow_up").css("visibility", "hidden");
        $("#Tutorial_Challenge_nextbtn").css("visibility", "hidden");
        $("#Tutorial_Challenge_backbtn").css("visibility", "hidden");
        $("#upperToolright").removeClass("Tutorial_active_rightSection");
        $("#upperToolleft").removeClass("Tutorial_active_leftSection");
        $("#UpperRainbowActiveDiv").css("visibility", "hidden");
        $("#UpperGraphActiveDiv").css("visibility", "hidden");
        $("#upper_resetbtn").removeClass("Tutorial_activeSection");
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
/*====================================================*/
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// END OF Script by Aladdin
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
