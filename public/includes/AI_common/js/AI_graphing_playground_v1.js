// Copyright 2024 Smithsonian Astrophysical Observatory

/////////////////////////////////////////////////////////////////////
import * as utils from './utils.js';

/////////////////////////////////////////////////////////////////////
var Targets1_folder = '';
var Targets2_folder = '';
/////////////////////////////////////////////////////////////////////
var yAxisOffset = 0;
var numOfBins = 100;
var flag = 'dontDraw';
var From_Top = 0;
var shrinky = 0.65; // this shrinks the y-scale so the graph is not as tall as the window
var xStretch, yStretch;
var legend_yAxisOffset = 20;
var rightOffset = 20;
var topOffset = 20;
var textColor = '#000000';
var dataColor = '#3778bd';
var borderColor = '#1e4c7d';
var indicatorColor = '#777777';
var legendColor = '#6ce3d0';
/////////////////////////////////////////////////////////////////////
var D_GraphPoints = [],
  D_pointsx = [],
  D_pointsy = [],
  D_pointsDx = [],
  D_pointsDy = [],
  D_loadedDX2 = [],
  D_loadedDY2 = [],
  pointsx = [],
  pointsy = [],
  loadedDX = [],
  loadedDY = [],
  loaded_Full_X = [],
  loaded_Full_Y = [],
  G_points_Full_X = [],
  G_points_Full_Y = [];
/////////////////////////////////////////////////////////////////////
var loaded1XBB = [];
var loaded1YBB = [];
/////////////////////////////////////////////////////////////////////
var Pxl_X_arr = [],
  Pxl_Y_arr = [],
  Pt_X_arr = [];
/////////////////////////////////////////////////////////////////////
var D_FirstPt, D_NextPt, D_NumPtBtw;
/////////////////////////////////////////////////////////////////////
var D_LinePtsX, D_LinePtDX, D_LinePtsY, D_LinePtDY;
/////////////////////////////////////////////////////////////////////
var D_LinePtsX1, D_LinePtDX1, D_LinePtsY1, D_LinePtDY1;
/////////////////////////////////////////////////////////////////////
var D_PtOnX, D_PtOnY, D_PtOnX1, D_PtOnY1;
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var XAxis_slider = document.getElementById('XAxis_Range');
var YAxis_slider = document.getElementById('YAxis_Range');
var Alpha_Range = document.getElementById('Alpha_Range');
var img = document.getElementById('rainbow');
var Triangle_img = document.getElementById('Triangle');
var rainbowHt = 60;
/////////////////////////////////////////////////////////////////////

var LampsArr0 = [
  'Incandescent_Bulb',
  'Fluorescent_Bulb',
  'Metal_Halide_Bulb',
  'Sodium_Vapor_Lamp_Low_Pressure',
  'Cool_White_LED',
  'Warm_White_LED',
  'LED_400nm',
  'LED_455nm',
  'LED_470nm',
  'LED_505nm',
  'LED_525nm',
  'LED_570nm',
  'LED_590nm',
  'LED_604nm',
  'LED_626nm',
  'LED_640nm',
];
/**/
var LampsArr1 = [
  'Incandescent Bulb',
  'Fluorescent Bulb',
  'Metal Halide Bulb',
  'Sodium Vapor Lamp (Low Pressure)',
  'LED White (Cool)',
  'LED White (Warm)',
  'LED 400 nm',
  'LED 455 nm',
  'LED 470 nm',
  'LED 505 nm',
  'LED 525 nm',
  'LED 570 nm',
  'LED 590 nm',
  'LED 604 nm',
  'LED 626 nm',
  'LED 640 nm',
];
/////////////////////////////////////////////////////////////////////
var StarsArr0 = [
  'O_Star',
  'B_Star',
  'A_Star',
  'F_Star',
  'G_Star',
  'K_Star',
  'M_Star',
  'sun_ref_colina96',
];
var StarsArr1 = [
  'O Star',
  'B Star',
  'A Star',
  'F Star',
  'G Star',
  'K Star',
  'M Star',
  'Sun',
];
/////////////////////////////////////////////////////////////////////
var PlantsArr0 = [
  'Red_flower',
  'Green_Grass',
  'Tree',
  'Purple_cactus',
  'Yellow_Aspen',
];
var PlantsArr1 = [
  'Red flower',
  'Green Grass',
  'Tree',
  'Purple cactus',
  'yellow Aspen',
];
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var NatureArr0 = [
  'Tree_in_Summer_Reflection',
  'Aspen_in_Fall_Reflection',
  'Red_Flower_Reflection',
  'Pansy_Reflection',
  'Cactus_Reflection',
  'Lawn_Grass_Reflection',
  'Moss_Reflection',
  'Lichen_Reflection',
  'Red_Brick_Reflection',
  'Jellyfish_Emission',
  'Volcano_Emission',
];
var NatureArr1 = [
  'Tree in Summer Reflection',
  'Aspen in Fall Reflection',
  'Red Flower Reflection',
  'Pansy Reflection',
  'Cactus Reflection',
  'Lawn Grass Reflection',
  'Moss Reflection',
  'Lichen Reflection',
  'Red Brick Reflection',
  'Jellyfish Emission',
  'Volcano Emission',
];
/////////////////////////////////////////////////////////////////////
var Fishtank_LightsArr0 = [
  'BlueHigh',
  'BlueMedium',
  'BlueLow',
  'GreenHigh',
  'GreenMedium',
  'GreenLow',
  'RedHigh',
  'RedMedium',
  'RedLow',
  'Orange_RedMediumGreenLow',
  'Teal_GreenHigh_BlueMedium',
];
var Fishtank_LightsArr1 = [
  'Blue Light (High)',
  'Blue Light (Medium)',
  'Blue Light (Low)',
  'Green Light (High)',
  'Green Light (Medium)',
  'Green Light (Low)',
  'Red Light (High)',
  'Red Light (Medium)',
  'Red Light (Low)',
  'Orange Light (Medium Red + Low Green)',
  'Teal Light (High Green + Medium Blue)',
];
/////////////////////////////////////////////////////////////////////
var Museum_ConservationArr0 = [
  'F1904-134_VNIR-SWIR_colors_Red_1',
  'F1904-134_VNIR-SWIR_colors_Red_2',
  'S2018-1-76_VNIR-SWIR_colors_Red_2',
  'F1904-134_VNIR-SWIR_colors_Blue_1',
  'F1904-134_VNIR-SWIR_colors_White_1',
  'S2018-1-76_VNIR-SWIR_colors_Red_1',
  'F1904-134_VNIR-SWIR_colors_Blue_2',
  'Painting_1_ROI-1_ROI-2_ROI_2',
  'Painting_1_ROI-1_ROI-2_ROI_1',
  'S2018-1-76_VNIR-SWIR_colors_Green_1',
  'S2018-1-76_VNIR-SWIR_colors_Yellow_1',
  'S2018-1-76_VNIR-SWIR_colors_Green_2',
  'F1904-134_VNIR-SWIR_colors_Green_1',
  'F1904-134_VNIR-SWIR_colors_Yellow',
  'F1904-134_VNIR-SWIR_colors_Green_2',
  'S2018-1-76_VNIR-SWIR_colors_Blue_2',
  'S2018-1-76_VNIR-SWIR_colors_Blue_1',
  'Painting_2_ROI-1_ROI-2_ROI_1',
  'Painting_2_ROI-1_ROI-2_ROI_2',
  'S2018-1-76_VNIR-SWIR_colors_White_1',
];
var Museum_ConservationArr1 = [
  'F1904-134_VNIR-SWIR_colors_Red_1',
  'F1904-134_VNIR-SWIR_colors_Red_2',
  'S2018-1-76_VNIR-SWIR_colors_Red_2',
  'F1904-134_VNIR-SWIR_colors_Blue_1',
  'F1904-134_VNIR-SWIR_colors_White_1',
  'S2018-1-76_VNIR-SWIR_colors_Red_1',
  'F1904-134_VNIR-SWIR_colors_Blue_2',
  'Painting_1_ROI-1_ROI-2_ROI_2',
  'Painting_1_ROI-1_ROI-2_ROI_1',
  'S2018-1-76_VNIR-SWIR_colors_Green_1',
  'S2018-1-76_VNIR-SWIR_colors_Yellow_1',
  'S2018-1-76_VNIR-SWIR_colors_Green_2',
  'F1904-134_VNIR-SWIR_colors_Green_1',
  'F1904-134_VNIR-SWIR_colors_Yellow',
  'F1904-134_VNIR-SWIR_colors_Green_2',
  'S2018-1-76_VNIR-SWIR_colors_Blue_2',
  'S2018-1-76_VNIR-SWIR_colors_Blue_1',
  'Painting_2_ROI-1_ROI-2_ROI_1',
  'Painting_2_ROI-1_ROI-2_ROI_2',
  'S2018-1-76_VNIR-SWIR_colors_White_1',
];
/////////////////////////////////////////////////////////////////////
var Museum_PigmentsArr0 = [
  'Pigments_for_TWT_2024-09-17_Azurite',
  'Pigments_for_TWT_2024-09-17_Cobalt_Yellow',
  'Pigments_for_TWT_2024-09-17_Cochineal',
  'Pigments_for_TWT_2024-09-17_Egyptian_Blue',
  'Pigments_for_TWT_2024-09-17_Indigo',
  'Pigments_for_TWT_2024-09-17_Lead_White',
  'Pigments_for_TWT_2024-09-17_Orpiment',
  'Pigments_for_TWT_2024-09-17_Prussian_Blue',
  'Pigments_for_TWT_2024-09-17_Red_Lead',
  'Pigments_for_TWT_2024-09-17_Shell_White',
  'Pigments_for_TWT_2024-09-17_Vermilion',
  'Spectral-Analysis-of-Genuine-Indian-Yellow-single-spectrum_Genuine_Indian_Yellow',
];
var Museum_PigmentsArr1 = [
  'Azurite',
  'Cobalt Yellow',
  'Cochineal',
  'Egyptian Blue',
  'Indigo',
  'Lead White',
  'Orpiment',
  'Prussian Blue',
  'Red Lead',
  'Shell White',
  'Vermilion',
  'Genuine Indian Yellow',
];
/////////////////////////////////////////////////////////////////////
var AtomsArr0 = [
  'Hydrogen_Emission',
  'Helium_Emission',
  'Neon_Emission',
  'Sodium_Absorption',
  'Sodium_Low_Pressure_Emission',
  'Potassium_Absorption',
  'Calcium_Emission',
  'Iron_Emission',
  'Mercury_Emission',
  'Ammonia_Absorption',
  'Carbon_Dioxide_Absorption_Near_to_Mid_IR',
  'Carbon_Dioxide_Absorption_Mid_to_Far_IR',
  'Dry_Ice_Reflection',
  'Ice_Reflection',
  'Iron_Oxide_Rust_Reflection',
  'Methane_Visible_Absorption',
  'Methane_Near_IR_Absorption',
  'Oxygen_Molecules_Absorption',
  'Ozone_Absorption_in_UV',
  'Ozone_Absorption_in_IR',
  'Water_Vapor_Absorption',
];

var AtomsArr1 = [
  'Hydrogen Emission',
  'Helium Emission',
  'Neon Emission',
  'Sodium Absorption',
  'Sodium (low pressure) Emission',
  'Potassium Absorption',
  'Calcium Emission',
  'Iron Emission',
  'Mercury Emission',
  'Ammonia Absorption',
  'Carbon Dioxide Absorption (Near to Mid IR)',
  'Carbon Dioxide Absorption (Mid to Far IR)',
  'Dry Ice Reflection',
  'Ice (Water) Reflection',
  'Iron Oxide (Rust) Reflection',
  'Methane Visible Absorption',
  'Methane Near IR Absorption',
  'Oxygen (Molecular) Absorption',
  'Ozone Absorption (UV)',
  'Ozone Absorption (IR)',
  'Water Vapor Absorption',
];
/////////////////////////////////////////////////////////////////////

var Solar_SystemArr0 = [
  'Earth_Reflection',
  'Earth_Emission',
  'Earth_Transmission',
  'Venus_Reflection',
  'Venus_Emission',
  'Mars_Reflection',
  'Mars_Emission',
  'Jupiter_Reflection',
  'Europa_Reflection',
  'Saturn_Reflection',
  'Saturn_Rings_Reflection',
  'Titan_Reflection',
  'Uranus_Reflection',
  'Neptune_Reflection',
];
var Solar_SystemArr1 = [
  'Earth Reflection',
  'Earth Emission',
  'Earth Transmission',
  'Venus Reflection',
  'Venus Emission',
  'Mars Reflection',
  'Mars Emission',
  'Jupiter Reflection',
  'Europa Reflection',
  'Saturn Reflection',
  'Saturn Rings Reflection',
  'Titan Reflection',
  'Uranus Reflection',
  'Neptune Reflection',
];
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var Exoplanet_ModelsArr0 = [
  'Clear_Hot_Jupiter_Model_Transmission',
  'Cloudy_Hot_Jupiter_Model_Transmission',
  'Hazy_Hot_Jupiter_Model_Transmission',
];
var Exoplanet_ModelsArr1 = [
  'Clear Hot Jupiter Model Transmission',
  'Cloudy Hot Jupiter Model Transmission',
  'Hazy Hot Jupiter Model Transmission',
];
/////////////////////////////////////////////////////////////////////
var ExoplanetsArr0 = [
  'WASP_17b',
  'WASP_39b',
  'HD189733b',
  'HAT_P_12b',
  'WASP_121b',
  'HD209458b',
  'WASP_12b',
  'K2_18b',
];
var ExoplanetsArr1 = [
  'WASP-17b',
  'WASP-39b',
  'HD 189733b',
  'HAT-P-12b',
  'WASP-121b',
  'HD 209458b',
  'WASP-12b',
  'K2-18b',
];
/////////////////////////////////////////////////////////////////////
var Thermal_SpectraArr0 = [
  '230K_blackbody',
  '312K_blackbody',
  '450K_blackbody',
  '1200K_blackbody',
  '1500K_blackbody',
  '2500K_blackbody',
  '3000K_blackbody',
  '4000K_blackbody',
  '5800K_blackbody',
  '7000K_blackbody',
  '9000K_blackbody',
  '11400K_blackbody',
  '15000K_blackbody',
  '30000K_blackbody',
];

/////////////////////////////////////////////////////////////////////

var Thermal_SpectraArr1 = [
  '230 K Blackbody',
  '312 K Blackbody',
  '450 K Blackbody',
  '1,200 K Blackbody',
  '1,500 K Blackbody',
  '2,500 K Blackbody',
  '3,000 K Blackbody',
  '4,000 K Blackbody',
  '5,800 K Blackbody',
  '7,000 K Blackbody',
  '9,000 K Blackbody',
  '11,400 K Blackbody',
  '15,000 K Blackbody',
  '30,000 K Blackbody',
];
/////////////////////////////////////////////////////////////////////
var Targets_Titles = [];
var Targets_descriptions = [];
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          All Canvases
/////////////////////////////////////////////////////////////////////
//          Upper Canvases
/////////////////////////////////////////////////////////////////////
var UCG = document.getElementById('UpperCanvasGraph');
var UCGctx = UCG.getContext('2d');
/////////////////////////////////////////////////////////////////////
var UX_Axis = document.getElementById('UpperCanvasXAxis');
var UX_Axisctx = UX_Axis.getContext('2d');
/////////////////////////////////////////////////////////////////////
var UY_Axis = document.getElementById('UpperCanvasYAxis');
var UY_Axisctx = UY_Axis.getContext('2d');
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var UCR = document.getElementById('UpperCanvasRainbow');
var UCRctx = UCR.getContext('2d');
/////////////////////////////////////////////////////////////////////
var UCR_Hue = document.getElementById('U_D_CRH');
var UCR_Huectx = UCR_Hue.getContext('2d');
/////////////////////////////////////////////////////////////////////
var UCRI = document.getElementById('U_R_I');
var UCRIctx = UCRI.getContext('2d');
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          Lower Canvases
/////////////////////////////////////////////////////////////////////
var LCG = document.getElementById('LowerCanvasGraph');
var LCGctx = LCG.getContext('2d');
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var LCR = document.getElementById('LowerCanvasRainbow');
var LCRctx = LCR.getContext('2d');
/////////////////////////////////////////////////////////////////////
var LX_Axis = document.getElementById('LowerCanvasXAxis');
var LX_Axisctx = LX_Axis.getContext('2d');
/////////////////////////////////////////////////////////////////////
var LCR_Hue = document.getElementById('L_D_CRH');
var LCR_Huectx = LCR_Hue.getContext('2d');
/////////////////////////////////////////////////////////////////////
var LCRI = document.getElementById('L_R_I');
var LCRIctx = LCRI.getContext('2d');
/////////////////////////////////////////////////////////////////////
var LY_Axis = document.getElementById('LowerCanvasYAxis');
var LY_Axisctx = LY_Axis.getContext('2d');
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          Drawing Canvases
/////////////////////////////////////////////////////////////////////
var DrawCanvas = document.getElementById('myDrawCanvas');
var Drawing_ctx = DrawCanvas.getContext('2d');
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          Indicator Canvases
/////////////////////////////////////////////////////////////////////
var UIC = document.getElementById('UpperIndicatorCanvas');
const UIC_ctx = UIC.getContext('2d');
var line1 = new Line1(UIC_ctx);

var LIC = document.getElementById('LowerIndicatorCanvas');
const LIC_ctx = LIC.getContext('2d');
var line2 = new Line2(LIC_ctx);
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var pxlsPerWv = UX_Axis.width / 750;
var deltaT = DrawCanvas.width / numOfBins; // The length of a segment or binSize
var eps = 0.5 * deltaT; // The middle of a bin
var binSize = deltaT;
var pxl_stretch;
var newXStretch;
var i; // Yes, this is used to communicate between functions. We'll need to fix this.
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// DRAW INITIAL LINE FOR 'DRAW YOUR OWN CURVE' AND SHADE THE RAINBOW
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function initialLineHdf(CanvasObj) {
  xStretch = XAxis_slider.value / 50;
  yStretch = YAxis_slider.value / 100;
  ////////////////////////////////
  if (CanvasObj === 'Category1' || CanvasObj === 'Both') {
    document.getElementById('Target_Name').innerHTML = '';
    ////////////////////////////////
    //Build Upper Canvas Graph Area
    ////////////////////////////////
    UCGctx.fillStyle = 'white';
    UCGctx.fillRect(0, 0, UCG.width, 150); // the graph area background
    ////////////////////////////////
    // REDRAW GRAPH AREA BACKGROUND
    Drawing_ctx.fillStyle = 'white';
    Drawing_ctx.fillRect(0, 0, DrawCanvas.width, DrawCanvas.height); // the graph area background
    //Draw the X-Axis Values
    drawXAxis(UX_Axisctx, UX_Axis, xStretch);
    drawYAxis(UX_Axisctx, UX_Axis, xStretch);
    //Draw the Rainbow and Shade it
    //REDRAW RAINBOW BACKGROUND
    UCRctx.fillStyle = '#DDDDDD';
    UCRctx.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
    // DRAW RAINBOWS
    var rainbowx = 0 + (400 - 200) * pxlsPerWv * xStretch;
    var rainbowWidth = 250 * xStretch;
    UCRctx.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt);
    /////////////////////////////////////////////////////////////
    //Shade all of Rainbow Canvas
    UCR_Huectx.clearRect(0, From_Top, 610, rainbowHt);
    UCR_Huectx.beginPath();
    UCR_Huectx.globalAlpha = 1;
    UCR_Huectx.rect(0, From_Top, 610, rainbowHt);
    UCR_Huectx.fillStyle = 'black';
    UCR_Huectx.fill();
    /////////////////////////////////////////////////////////////
    // CLEAR THE ARRAY OF POINTS
    D_pointsx = [];
    D_pointsy = [];
    // FILL THE POINTSY ARRAY WITH THEIR STARTING VALUES
    for (i = 0; i < numOfBins; i++) {
      D_pointsy.push(undefined);
    }
    /////////////////////////////////////////////////////////////
  }
  ////////////////////////////////
  if (CanvasObj === 'Category2' || CanvasObj === 'Both') {
    document.getElementById('Comparison_Name').innerHTML = '';
    ////////////////////////////////
    //Build Lower Canvas Graph Area
    ////////////////////////////////
    LCGctx.fillStyle = 'white';
    LCGctx.fillRect(0, 0, UCG.width, 150); // the graph area background
    ////////////////////////////////
    // REDRAW GRAPH AREA BACKGROUND
    LCGctx.fillStyle = 'white';
    LCGctx.fillRect(0, 0, LCG.width, LCG.height); // the graph area background
    //Draw the X-Axis Values
    drawXAxis(LX_Axisctx, LX_Axis, xStretch);
    LCRctx.fillStyle = '#DDDDDD';
    LCRctx.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
    LCRctx.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt);
    /////////////////////////////////////////////////////////////
    //Shade all of Rainbow Canvas
    LCR_Huectx.clearRect(0, From_Top, 610, rainbowHt);
    LCR_Huectx.beginPath();
    LCR_Huectx.globalAlpha = 1;
    LCR_Huectx.rect(0, From_Top, 610, rainbowHt);
    LCR_Huectx.fillStyle = 'black';
    LCR_Huectx.fill(); /**/
    /////////////////////////////////////////////////////////////
  }
  ////////////////////////////////
}

var loaded1X, loaded1Y;
var loaded2X, loaded2Y;

/////////////////////////////////////////////////////////////////////
function initSpectrum() {
  pointsx = [];
  pointsy = [];
  loaded_Full_X = [];
  loaded_Full_Y = [];
  G_points_Full_X = [];
  G_points_Full_Y = [];

  if (typeof loaded1X !== 'undefined') {
    plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
  }
  if (typeof loaded2X !== 'undefined') {
    plotGraph(LCGctx, LCG, LCR_Huectx, LIC_ctx);
  }
}
//***********************************************//
//***********************************************//
var Targets_Titles1, Targets_descriptions1;
var Targets_Titles2, Targets_descriptions2;
/////////////////////////////////////////////////////////////////////
function SeacrhFor(val, obj) {
  initialLineHdf(obj);
  /////////////////////////////////////////////////////////
  Targets_Titles = [];
  Targets_descriptions = [];
  if (val == 'Lamps') {
    if (obj == 'Category1') {
      Targets1_folder = 'Lamps';
      Targets_Titles1 = LampsArr0;
      Targets_descriptions1 = LampsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fab fa-medapps');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Lamps';
      Targets_Titles2 = LampsArr0;
      Targets_descriptions2 = LampsArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fab fa-medapps');
    }
  } else if (val == 'Stars') {
    if (obj == 'Category1') {
      Targets1_folder = 'Stars';
      Targets_Titles1 = StarsArr0;
      Targets_descriptions1 = StarsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fa fa-globe');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Stars';
      Targets_Titles2 = StarsArr0;
      Targets_descriptions2 = StarsArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fa fa-globe');
    }
  } else if (val == 'Plants') {
    if (obj == 'Category1') {
      Targets1_folder = 'Plants';
      Targets_Titles1 = PlantsArr0;
      Targets_descriptions1 = PlantsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fa fa-leaf');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Plants';
      Targets_Titles2 = PlantsArr0;
      Targets_descriptions2 = PlantsArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fa fa-leaf');
    }
  } else if (val == 'Nature') {
    if (obj == 'Category1') {
      Targets1_folder = 'Nature';
      Targets_Titles1 = NatureArr0;
      Targets_descriptions1 = NatureArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fa fa-leaf');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Nature';
      Targets_Titles2 = NatureArr0;
      Targets_descriptions2 = NatureArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fa fa-leaf');
    }
  } else if (val == 'Atoms_and_Molecules') {
    if (obj == 'Category1') {
      Targets1_folder = 'Atoms_and_Molecules';
      Targets_Titles1 = AtomsArr0;
      Targets_descriptions1 = AtomsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fab fa-react');
    }
    if (obj == 'Category2') {
      Targets_Titles2 = AtomsArr0;
      Targets_descriptions2 = AtomsArr1;
      Targets2_folder = 'Atoms_and_Molecules';
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fab fa-react');
    }
  } else if (val == 'Planets') {
    if (obj == 'Category1') {
      Targets1_folder = 'Solar_System';
      Targets_Titles1 = Solar_SystemArr0;
      Targets_descriptions1 = Solar_SystemArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fab fa-wpexplorer');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Solar_System';
      Targets_Titles2 = Solar_SystemArr0;
      Targets_descriptions2 = Solar_SystemArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fab fa-wpexplorer');
    }
  } else if (val == 'Exoplanet_Models') {
    if (obj == 'Category1') {
      Targets1_folder = 'Exoplanet_Models';
      Targets_Titles1 = Exoplanet_ModelsArr0;
      Targets_descriptions1 = Exoplanet_ModelsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fab fa-wpexplorer');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Exoplanet_Models';
      Targets_Titles2 = Exoplanet_ModelsArr0;
      Targets_descriptions2 = Exoplanet_ModelsArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fab fa-wpexplorer');
    }
  } else if (val == 'Exoplanets') {
    if (obj == 'Category1') {
      Targets1_folder = 'Exoplanets';
      Targets_Titles1 = ExoplanetsArr0;
      Targets_descriptions1 = ExoplanetsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fab fa-wpexplorer');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Exoplanets';
      Targets_Titles2 = ExoplanetsArr0;
      Targets_descriptions2 = ExoplanetsArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fab fa-wpexplorer');
    }
  } else if (val == 'Thermal_Spectra') {
    if (obj == 'Category1') {
      Targets1_folder = 'Thermal_Spectra';
      Targets_Titles1 = Thermal_SpectraArr0;
      Targets_descriptions1 = Thermal_SpectraArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fas fa-thermometer-three-quarters');
    }
    if (obj == 'Category2') {
      Targets_Titles2 = Thermal_SpectraArr0;
      Targets_descriptions2 = Thermal_SpectraArr1;
      Targets2_folder = 'Thermal_Spectra';
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fas fa-thermometer-three-quarters');
    }
  } else if (val == 'Fishtank_Lights') {
    if (obj == 'Category1') {
      Targets1_folder = 'Fishtank_Lights';
      Targets_Titles1 = Fishtank_LightsArr0;
      Targets_descriptions1 = Fishtank_LightsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fas fa-fish');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Fishtank_Lights';
      Targets_Titles2 = Fishtank_LightsArr0;
      Targets_descriptions2 = Fishtank_LightsArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fas fa-fish');
    }
  } else if (val == 'Museum_Conservation') {
    if (obj == 'Category1') {
      Targets1_folder = 'Museum_Conservation';
      Targets_Titles1 = Museum_ConservationArr0;
      Targets_descriptions1 = Museum_ConservationArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fas fa-landmark');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Museum_Conservation';
      Targets_Titles2 = Museum_ConservationArr0;
      Targets_descriptions2 = Museum_ConservationArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fas fa-landmark');
    }
  } else if (val == 'Museum_Pigments') {
    if (obj == 'Category1') {
      Targets1_folder = 'Museum_Conservation';
      Targets_Titles1 = Museum_PigmentsArr0;
      Targets_descriptions1 = Museum_PigmentsArr1;
      $('#Cat1_folder').removeClass();
      $('#Cat1_folder').addClass('fas fa-landmark');
    }
    if (obj == 'Category2') {
      Targets2_folder = 'Museum_Conservation';
      Targets_Titles2 = Museum_PigmentsArr0;
      Targets_descriptions2 = Museum_PigmentsArr1;
      $('#Cat2_folder').removeClass();
      $('#Cat2_folder').addClass('fas fa-landmark');
    }
  } else if (val == 'Draw') {
    ResetCanvas();
    document.getElementById('UpperIndicatorCanvas').style.zIndex = '-1';
    document.getElementById('myDrawCanvas').style.display = 'block';
    document.getElementById('UpperCanvasGraph').style.display = 'none';
    obj = 'CategoryDraw';
  }
  ////////////////////////////////////////////////////////
  var Targets_Filters = '';
  if (obj == 'Category1') {
    Targets_Filters = 'Targets1Filters';
    $('#Category_box1').animate({ width: '40px' });
    $('#UpperCanvasGraph').show();
    document.getElementById('UpperIndicatorCanvas').style.zIndex = '6';
    document.getElementById('myDrawCanvas').style.display = 'none';
  } else if (obj == 'Category2') {
    Targets_Filters = 'Targets2Filters';
    $('#Category_box2').animate({ width: '40px' });
  } else if (obj == 'CategoryDraw') {
    $('#myDrawCanvas').show();
    $('#Category_box1').animate({ width: '40px' });
    /*$("#Category_box2").animate({width: "35px"});*/
    document.getElementById('myDrawCanvas').style.display = 'block';
  } else {
    Targets_Filters = '';
  }
  ////////////////////////////////////////////////////////
  if (Targets_Filters != '') {
    var TargetsFilters = document.getElementById(Targets_Filters);
    TargetsFilters.innerHTML = '<option value="">Select Sub Category</option>';
    if (obj == 'Category1') {
      var T_num = Targets_Titles1.length;
      for (var TF = 0; TF < T_num; TF++) {
        TargetsFilters.innerHTML +=
          '<option id="' +
          Targets_Titles1[TF] +
          '_' +
          obj +
          '" value="' +
          Targets_Titles1[TF] +
          '">' +
          Targets_descriptions1[TF] +
          '</option>';
      }
    } else if (obj == 'Category2') {
      T_num = Targets_Titles2.length;
      for (TF = 0; TF < T_num; TF++) {
        TargetsFilters.innerHTML +=
          '<option id="' +
          Targets_Titles2[TF] +
          '_' +
          obj +
          '" value="' +
          Targets_Titles2[TF] +
          '">' +
          Targets_descriptions2[TF] +
          '</option>';
      }
    }
  }
  if (val == 'Empty') {
    document.getElementById('Targets1Filters').innerHTML =
      '<option value="">Select Sub Category</option>';
    document.getElementById('Targets2Filters').innerHTML =
      '<option value="">Select Sub Category</option>';
  }
  ////////////////////////////////////////////////////////
}
/////////////////////////////////////////////////////////////////////
//////////////       BEGINNING OF SELECTION SECTION     /////////////
/////////////////////////////////////////////////////////////////////
function SelectTarget(targetName, ListNum) {
  var TT = Targets_Titles.indexOf(targetName);
  var Targets_Full_descriptions = Targets_descriptions[TT];
  // MAKE SURE THE TARGET IS REVEALED, SO WIPE AGAIN
  if (ListNum == 'Targets1') {
    TT = Targets_Titles1.indexOf(targetName);
    //Just Comment out for local//
    Targets_Full_descriptions = Targets_descriptions1[TT];
    //Just Comment out for local//
    readTextFile(
      Targets1_folder,
      targetName,
      ListNum,
      Targets_Full_descriptions,
    ); //    UCGctx  UCG
    plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
    if (targetName == 'Earth') {
      document.getElementById('UpperImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets1_folder +
        '/' +
        targetName +
        '.gif';
    } else if (Targets1_folder == 'Stars') {
      document.getElementById('UpperImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets1_folder +
        '/B_W_mystery_star.jpg';
    } else if (
      Targets1_folder == 'Nature' &&
      targetName == 'Cactus_Reflection'
    ) {
      document.getElementById('UpperImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets1_folder +
        '/Cactus_Reflection.jpg';
    } else if (
      Targets1_folder == 'Nature' &&
      targetName == 'Pansy_Reflection'
    ) {
      document.getElementById('UpperImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets1_folder +
        '/Pansy_Reflection.jpg';
    } else if (
      Targets1_folder == 'Thermal_Spectra' ||
      Targets1_folder == 'Nature' ||
      Targets1_folder == 'Solar_System' ||
      Targets1_folder == 'Atoms_and_Molecules'
    ) {
      document.getElementById('UpperImg').src =
        'includes/AI_common/images/Harry_sun_spectrum.jpg';
    } else if (
      Targets1_folder == 'Lamps' &&
      (targetName == 'Cool_White_LED' ||
        targetName == 'Warm_White_LED' ||
        targetName == 'LED_400nm' ||
        targetName == 'LED_455nm' ||
        targetName == 'LED_470nm' ||
        targetName == 'LED_505nm' ||
        targetName == 'LED_525nm' ||
        targetName == 'LED_570nm' ||
        targetName == 'LED_590nm' ||
        targetName == 'LED_604nm' ||
        targetName == 'LED_626nm' ||
        targetName == 'LED_640nm')
    ) {
      document.getElementById('UpperImg').src =
        'includes/AI_common/images/Harry_sun_spectrum.jpg';
    } else {
      document.getElementById('UpperImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets1_folder +
        '/' +
        targetName +
        '.jpg';
    }
  } else if (ListNum == 'Targets2') {
    TT = Targets_Titles2.indexOf(targetName);
    Targets_Full_descriptions = Targets_descriptions2[TT];
    readTextFile(
      Targets2_folder,
      targetName,
      ListNum,
      Targets_Full_descriptions,
    );
    //LCGctx    LCG
    plotGraph(LCGctx, LCG, LCR_Huectx, LIC_ctx);
    if (targetName == 'Earth') {
      document.getElementById('LowerImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets2_folder +
        '/' +
        targetName +
        '.gif';
    } else if (Targets2_folder == 'Stars') {
      document.getElementById('LowerImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets2_folder +
        '/B_W_mystery_star.jpg';
    } else if (
      Targets2_folder == 'Nature' &&
      targetName == 'Cactus_Reflection'
    ) {
      document.getElementById('LowerImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets2_folder +
        '/Cactus_Reflection.jpg';
    } else if (
      Targets2_folder == 'Nature' &&
      targetName == 'Pansy_Reflection'
    ) {
      document.getElementById('LowerImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets2_folder +
        '/Pansy_Reflection.jpg';
    } else if (
      Targets2_folder == 'Thermal_Spectra' ||
      Targets2_folder == 'Nature' ||
      Targets2_folder == 'Solar_System' ||
      Targets2_folder == 'Atoms_and_Molecules'
    ) {
      document.getElementById('LowerImg').src =
        'includes/AI_common/images/Harry_sun_spectrum.jpg';
    } else if (
      Targets2_folder == 'Lamps' &&
      (targetName == 'Cool_White_LED' ||
        targetName == 'Warm_White_LED' ||
        targetName == 'LED_400nm' ||
        targetName == 'LED_455nm' ||
        targetName == 'LED_470nm' ||
        targetName == 'LED_505nm' ||
        targetName == 'LED_525nm' ||
        targetName == 'LED_570nm' ||
        targetName == 'LED_590nm' ||
        targetName == 'LED_604nm' ||
        targetName == 'LED_626nm' ||
        targetName == 'LED_640nm')
    ) {
      document.getElementById('LowerImg').src =
        'includes/AI_common/images/Harry_sun_spectrum.jpg';
    } else {
      document.getElementById('LowerImg').src =
        'includes/SpecLab_Data_Files/' +
        Targets2_folder +
        '/' +
        targetName +
        '.jpg';
    }
  } else if (ListNum == 'Targets3') {
    readTextFile('Lamps', targetName, ListNum, Targets_Full_descriptions);
    if (targetName == 'Calibrate3') {
      document.getElementById('UpperImg').src =
        'includes/SpecLab_Data_Files/Tests/discharge tube air180x160.jpg';
    }
    //console.log("targetName (%s)",targetName)
    plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
  }
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// General Code
function readTextFile(
  TheTargets_folder,
  targetName,
  plotNum,
  Targets_Full_descriptions,
) {
  var FileLoction =
    'includes/SpecLab_Data_Files/' +
    TheTargets_folder +
    '/' +
    targetName +
    '.txt';
  //console.log('in Target_Name and the plotNum=(%s) Targets_Full_descriptions=(%s) fileLoction=(%s)',plotNum,Targets_Full_descriptions,FileLoction);
  var rawFile = new XMLHttpRequest();
  rawFile.open('GET', FileLoction, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        const parsed = utils.parseText(allText);
        let [x, y] = parsed[0];
        y = utils.rangeNormalize(y);
        if (plotNum == 'Targets1') {
          document.getElementById('Target_Name').innerHTML =
            Targets_Full_descriptions;
          loaded1X = x;
          loaded1Y = y;
          /*if(targetName=="Earth")
                        {
                            readBBTextFile(TheTargets_folder,targetName,plotNum,Targets_Full_descriptions)
                        }*/
        } else if (plotNum == 'Targets2') {
          document.getElementById('Comparison_Name').innerHTML =
            Targets_Full_descriptions;
          loaded2X = x;
          loaded2Y = y;
        } else if (plotNum == 'Targets3') {
          document.getElementById('Target_Name').innerHTML =
            Targets_Full_descriptions;
          loaded1X = x;
          loaded1Y = y;
        }
      }
    }
  };
  rawFile.send(null);
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function clearCanvas(W_CTX, W_CAN, W_Rainbow, W_Hue) {
  // REDRAW GRAPH AREA BACKGROUND
  W_CTX.clearRect(0, 0, W_CAN.width, W_CAN.height);
  W_CTX.fillStyle = 'white';
  W_CTX.fillRect(0, 0, W_CAN.width, W_CAN.height); // the graph area background
  /////////////////////////////////////////////////////////////
  //REDRAW RAINBOW BACKGROUND
  var rainbowx = 0 + (400 - 200) * pxlsPerWv * xStretch;
  var rainbowWidth = 250 * xStretch;
  /////////////////////////////////////////////////////////////
  W_Rainbow.fillStyle = '#DDDDDD';
  W_Rainbow.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
  W_Rainbow.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt); // DRAW RAINBOWS
  /////////////////////////////////////////////////////////////
  W_Hue.clearRect(0, From_Top, 610, rainbowHt);
  W_Hue.beginPath();
  W_Hue.globalAlpha = 1;
  W_Hue.rect(0, From_Top, 610, rainbowHt);
  W_Hue.fillStyle = 'black';
  W_Hue.fill();
  /////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////
function ResetCanvas() {
  // CLEAR THE ARRAY OF POINTS
  D_pointsx = [];
  D_pointsy = [];
  loadedDX = [];
  loadedDY = [];
  D_pointsDx = [];
  D_pointsDy = [];
  //Shade all of Rainbow Canvas
  UCR_Huectx.clearRect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.beginPath();
  UCR_Huectx.globalAlpha = 1;
  UCR_Huectx.rect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.fillStyle = 'black';
  UCR_Huectx.fill();
  clearCanvas(UCGctx, UCG, UCRctx, UCR_Huectx);
  clearCanvas(Drawing_ctx, DrawCanvas, UCRctx, UCR_Huectx);
}

///////////////////////////////////////////////////
///////////        Plot Graph         /////////////
///////////////////////////////////////////////////
function plotGraph(W_CTX, W_CAN, W_R, WIC_ctx) {
  var upperx, uppery;
  var xNextPosition, yNextPosition;
  if (W_CTX == UCGctx && typeof loaded1X !== 'undefined') {
    W_CAN = UCG;
    var From_Top = 0;
    upperx = loaded1X;
    uppery = loaded1Y;
    document.getElementById('UpperIndicatorCanvas').style.zIndex = '6';
    clearCanvas(UCGctx, UCG, UCRctx, UCR_Huectx);
  } else if (W_CTX == LCGctx) {
    From_Top = 0;
    upperx = loaded2X;
    uppery = loaded2Y;
    //console.log('Plot the lower graph from these points');
    clearCanvas(LCGctx, LCG, LCRctx, LCR_Huectx);
  }
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  xStretch = XAxis_slider.value / 50;
  yStretch = YAxis_slider.value / 100;
  document.getElementById('Y_Axis_Slider').innerHTML = yStretch;
  ///////////////////////////////////////////////////////
  //newXStretch=isOdd(xStretch);
  newXStretch = xStretch;
  pxl_stretch = pxlsPerWv * newXStretch;
  pxl_stretch = pxl_stretch.toFixed(3);
  ///////////////////////////////////////////////////////
  shrinky = 0.65; // this shrinks the y-scale so the graph is not as tall as the window
  var xPosition = 0;
  var yPosition = 0;
  /////////////////////////////////////////////////////////////
  //Shade all of Rainbow Canvas
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  if (loaded1XBB != []) {
    for (var BB = 0; BB < loaded1XBB.length; BB++) {
      /////////////////////////////////////////////////////////////
      W_CTX.beginPath();
      /////////////////////////////////////////////////////////////
      const xPositionBB = (1000 * loaded1XBB[BB] - 200) * pxl_stretch;
      const yPositionBB = 200 * (1 - shrinky * loaded1YBB[BB]) + 5 - 65;
      //pointsxBB.push(xPositionBB);
      //pointsyBB.push(yPositionBB);
      /////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////
      W_CTX.arc(xPositionBB, yPositionBB, 1.5, 0, 2 * Math.PI);
      W_CTX.fillStyle = 'black'; //dataColor;
      W_CTX.fill();
      /////////////////////////////////////////////////////////////
    }
    /////////////////////////////////////////////////////////////
  }
  /////////////////////////////////////////////////////////////
  if (upperx != []) {
    /////////////////////////////////////////////////////////////
    // clear previous rainbow shading
    /////////////////////////////////////////////////////////////
    for (var i = 0; i < upperx.length; i++) {
      W_CTX.beginPath();
      if (uppery[i] <= 1) {
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        xPosition = (1000 * upperx[i] - 200) * pxl_stretch;
        yPosition = 200 * (1 - shrinky * uppery[i]) + 5 - 65;
        pointsx.push(xPosition);
        pointsy.push(yPosition);
        /////////////////////////////////////////////////////////////
        xNextPosition = (1000 * upperx[i + 1] - 200) * pxl_stretch;
        yNextPosition = 200 * (1 - shrinky * uppery[i + 1]) + 5 - 65;
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        W_CTX.arc(xPosition, yPosition, 1.5, 0, 2 * Math.PI);
        W_CTX.fillStyle = 'blue'; //dataColor;
        W_CTX.fill();
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        var PlotLine = document.getElementById('Line_Chart').selected; //Added by Aladdin
        if (PlotLine == true) {
          //Added by Aladdin
          W_CTX.lineTo(xNextPosition, yNextPosition);
          W_CTX.strokeStyle = dataColor;
          W_CTX.stroke();
        } //Added by Aladdin/**/

        var line_spectrum = document.getElementById('line_spectrum').selected; //Added by Aladdin
        if (line_spectrum == true) {
          //Added by Aladdin
          if (i == 1) {
            /*console.log('line_spectrum');*/
          }
          /////////////////////////////////////////////////////////////
          // THIS CODE SHADES THE RAINBOW, ACCORDING TO THE DATA POINTS
          /////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////
          // THIS CODE SHADES THE RAINBOW, ACCORDING TO THE DATA POINTS
          var alphax = 1 - uppery[i];
          var lastPt = (1000 * upperx[i] - 200) * pxl_stretch;
          var nextPt = (1000 * upperx[i + 1] - 200) * pxl_stretch;
          var deltaX = nextPt - lastPt;
          var lastDataPt =
            (1000 * upperx[upperx.length - 1] - 200) * pxl_stretch;
          W_R.fillStyle = '#000000';
          W_R.globalAlpha = alphax;
          W_R.clearRect(lastPt, From_Top, deltaX, rainbowHt);
          W_R.fillRect(lastPt, From_Top, deltaX, rainbowHt);

          if (i > 0 && i < 25) {
            //console.log('i(%s),lastPt(%s),nextPt(%s),deltaX(%s),alphax(%s)',i,lastPt,nextPt,deltaX,alphax);
          }
          if (i == 0) {
            var firstDataPt = lastPt;
          }
          W_R.fillRect(0, From_Top, firstDataPt, rainbowHt);
          if (lastDataPt < 610) {
            W_R.fillRect(lastDataPt, From_Top, 610 - lastDataPt, rainbowHt);
          }
          // END OF 'SHADING THE RAINBOW'
          /////////////////////////////////////////////////////////////
          // END OF 'SHADING THE RAINBOW'
          /////////////////////////////////////////////////////////////
        }
        /////////////////////////////////////////////////////////////
        //      This code added 27 July
        // find out all the point in between the init dots
        // if the space between two dots greater than 1
        // add dots in between to create continuous spectrum
        /////////////////////////////////////////////////////////////
        //loaded_Full_X=[], loaded_Full_Y=[];
        const G_FirstPt = parseFloat(xPosition);
        const G_NextPt = parseFloat(xNextPosition);
        const G_NumPtBtw = G_NextPt - G_FirstPt;
        if (G_NumPtBtw > 0.001) {
          ////////////////////////////////////////
          const G_LinePtsX = parseFloat(upperx[i + 1]) - parseFloat(upperx[i]);
          const G_LinePtDX = G_LinePtsX / G_NumPtBtw;
          const G_LinePtsY = parseFloat(uppery[i + 1]) - parseFloat(uppery[i]);
          const G_LinePtDY = G_LinePtsY / G_NumPtBtw;
          ////////////////////////////////////////
          const G_LinePtsX1 = parseFloat(xNextPosition) - parseFloat(xPosition);
          const G_LinePtDX1 = G_LinePtsX1 / G_NumPtBtw;
          const G_LinePtsY1 = parseFloat(yNextPosition) - parseFloat(yPosition);
          const G_LinePtDY1 = G_LinePtsY1 / G_NumPtBtw;
          ////////////////////////////////////////
          let G_PtOnX = parseFloat(upperx[i]);
          let G_PtOnY = parseFloat(parseFloat(uppery[i]));
          let G_PtOnX1 = parseFloat(xPosition);
          let G_PtOnY1 = parseFloat(yPosition);
          ////////////////////////////////////////
          for (var npb = 0; npb < G_NumPtBtw; npb++) {
            loaded_Full_X.push(G_PtOnX);
            loaded_Full_Y.push(G_PtOnY);
            G_points_Full_X.push(G_PtOnX1);
            G_points_Full_Y.push(G_PtOnY1);
            G_PtOnX = G_PtOnX + G_LinePtDX;
            G_PtOnY = G_PtOnY + G_LinePtDY;
            G_PtOnX1 = G_PtOnX1 + G_LinePtDX1;
            G_PtOnY1 = G_PtOnY1 + G_LinePtDY1;
          }
        }
        /////////////////////////////////////////////////////////////
        //       End of  code added 27 July
        //
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
      }
      ///////////////////////////////////////////////////
      ///////////////////////////////////////////////////
    } //end of for loop

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    Pxl_X_arr = [];
    Pxl_Y_arr = [];
    Pt_X_arr = [];
    var Pxl_Alpha_now, Pxl_Alpha_next, Pxl_Alpha_Add;
    var Pxl_X_now, Pxl_X_nowC;
    var Pxl_X_next, Pxl_X_after;
    var Pxl_count = 0,
      Pt_count = 0;
    for (var pxl = 0; pxl < upperx.length; pxl++) {
      Pxl_Alpha_Add = 0;
      Pxl_Alpha_now = parseFloat(uppery[pxl]);
      Pxl_Alpha_next = parseFloat(uppery[pxl + 1]);
      Pxl_X_now = (1000 * upperx[pxl] - 200) * pxl_stretch;
      Pxl_X_nowC = parseInt((1000 * upperx[pxl] - 200) * pxl_stretch);
      Pxl_X_next = parseInt((1000 * upperx[pxl + 1] - 200) * pxl_stretch);
      Pxl_count = 1;
      if (Pxl_X_nowC == Pxl_X_next) {
        Pxl_Alpha_Add =
          (parseFloat(Pxl_Alpha_now) + parseFloat(Pxl_Alpha_next)) / 2;
        //This mean these two numbers will interfer with each other
        //So join them and keep checking how many points are in the same Pixel
        for (var pt = 2; pt < 20; pt++) {
          Pxl_count = Pxl_count + 1;
          Pxl_X_after = parseInt((1000 * upperx[pxl + pt] - 200) * pxl_stretch);
          Pxl_Alpha_next = parseFloat(uppery[pxl + pt]);
          pxl = pxl + pt;
          if (Pxl_X_nowC == Pxl_X_after) {
            Pxl_Alpha_Add =
              (parseFloat(Pxl_Alpha_Add) + parseFloat(Pxl_Alpha_next)) /
              Pxl_count;
          } else if (Pxl_X_nowC < Pxl_X_after) {
            Pxl_X_arr.push(Pxl_X_now);
            Pxl_Y_arr.push(Pxl_Alpha_Add);
            Pt_X_arr.push(Pxl_count);
            break;
          }
        }
      } else {
        Pt_X_arr.push(Pt_count);
        Pxl_X_arr.push(Pxl_X_now);
        Pxl_Y_arr.push(Pxl_Alpha_now);
      }
      Pt_count = Pt_count + 1;
    } //end of for loop
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    Alpha_Stretch = Alpha_Range.value / 100;
    ////////////////////////////////////////////////////////////////
    var continuous_line_spectrum = document.getElementById(
      'continuous_line_spectrum',
    ).selected; //Added by Aladdin
    if (continuous_line_spectrum == true) {
      //Added by Aladdin
      //console.log('continuous_line_spectrum');
      W_CTX.lineTo(xNextPosition, yNextPosition);
      W_CTX.strokeStyle = dataColor;
      W_CTX.stroke();
      ////////////////////////////////////////////////////////////////
      //Now we need a loop to Shade the Rainbow
      ////////////////////////////////////////////////////////////////
      /*if(targetName=="Earth"){}*/
      ////////////////////////////////////////////////////////////////
      for (var SR = 0; SR < Pxl_X_arr.length; SR++) {
        // THIS CODE SHADES THE RAINBOW, ACCORDING TO THE DATA POINTS
        /////////////////////////////////////////////////////////////
        alphax = Alpha_Stretch - parseFloat(Pxl_Y_arr[SR]);
        lastPt = parseInt(Pxl_X_arr[SR]);
        nextPt = parseInt(Pxl_X_arr[SR + 1]);
        deltaX = nextPt - lastPt;
        ////////////////////////////////////////////////
        W_R.fillStyle = '#000000';
        W_R.globalAlpha = alphax;
        if (Pxl_Y_arr[SR] > yStretch) {
          if (!isNaN(nextPt)) {
            W_R.clearRect(lastPt, From_Top, deltaX, rainbowHt);
            W_R.fillRect(lastPt, From_Top, deltaX, rainbowHt);
          }
        }
        if (SR == 0) {
          firstDataPt = lastPt;
        }
        /////////////////////////////////////////////////////////////
        // END OF 'SHADING THE RAINBOW'
        /////////////////////////////////////////////////////////////
      } //Added by Aladdin/**/
    }
    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    var continuous_spectrum = document.getElementById(
      'continuous_spectrum',
    ).selected; //Added by Aladdin
    if (continuous_spectrum == true) {
      //Added by Aladdin
      //console.log('continuous_spectrum');
      W_CTX.lineTo(xNextPosition, yNextPosition);
      W_CTX.strokeStyle = dataColor;
      W_CTX.stroke();
      ////////////////////////////////////////////////////////////////
      //Now we need a loop to Shade the Rainbow
      ////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////
      for (SR = 0; SR < loaded_Full_X.length; SR++) {
        // THIS CODE SHADES THE RAINBOW, ACCORDING TO THE DATA POINTS
        /////////////////////////////////////////////////////////////
        alphax = 1 - loaded_Full_Y[SR];
        lastPt = G_points_Full_X[SR];
        nextPt = G_points_Full_X[SR + 1];
        deltaX = nextPt - lastPt;
        ////////////////////////////////////////////////
        W_R.fillStyle = '#000000';
        W_R.globalAlpha = alphax;
        if (loaded_Full_Y[SR] > yStretch) {
          if (!isNaN(nextPt)) {
            W_R.clearRect(lastPt, From_Top, deltaX, rainbowHt);
            W_R.fillRect(lastPt, From_Top, deltaX, rainbowHt);
            if (SR > 0 && SR < 25) {
              //console.log('SR(%s),lastPt(%s),nextPt(%s),deltaX(%s),alphax(%s)',SR,lastPt,nextPt,deltaX,alphax);
            }
          }
        }
        if (SR == 0) {
          firstDataPt = lastPt;
        }
        /////////////////////////////////////////////////////////////
        // END OF 'SHADING THE RAINBOW'
        /////////////////////////////////////////////////////////////
      } //Added by Aladdin/**/
    }
    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
  }
  ///////////////////////////////////////////////////////
  // SEE THE NEXT TWO SUBROUTINES
  // A QUICK FIX: REPEATEDLY DRAW RIGHT-HAND BORDER TO CUT OFF POINTS, RATHER THAN SPECIFY WIDTH OF THE PLOT.
  W_CTX.fillStyle = borderColor;
  W_CTX.fillRect(W_CAN.width, 0, rightOffset, W_CAN.height); // right border
  W_CTX.onmousemove = updateLine(Event, WIC_ctx);
  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
} /////          End of Plot Graph         /////////////////
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
function drawPoints() {
  clearCanvas(Drawing_ctx, DrawCanvas, UCRctx, UCR_Huectx);
  document.getElementById('UpperIndicatorCanvas').style.zIndex = '-1';
  // DRAW THE LINES THAT CONNECT THE CIRCULAR DATA POINTS
  loadedDX = [];
  loadedDY = [];
  D_pointsDx = [];
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  //Shade all of Rainbow Canvas
  ///////////////////////////////////////////////////////
  for (i = 0; i < numOfBins; i++) {
    // ERASE THE EXISTING INDEX POINT
    Drawing_ctx.fillStyle = '#ffffff';
    Drawing_ctx.fillRect(deltaT * i - eps, 62, deltaT, 158);
    // DRAW THE NEW POINT FROM POINTSY AT THE CURRENT INDEX
    Drawing_ctx.beginPath();
    Drawing_ctx.arc(deltaT * i, D_pointsy[i], 2, 0, 2 * Math.PI);
    Drawing_ctx.fillStyle = '#47bd6e';
    Drawing_ctx.fill();
    /////////////////////////////////////////
    if (!isNaN(D_pointsx[i])) {
      const X_Cal = parseInt(D_pointsx[i]) / 810 + 0.2;
      loadedDX.push(X_Cal);
      D_pointsDx.push(D_pointsx[i]);
    }
    /////////////////////////////////////////
    if (!isNaN(D_pointsy[i])) {
      const Y_Cal = 1 - D_pointsy[i] / 150;
      loadedDY.push(Y_Cal);
      D_pointsDy.push(D_pointsy[i]);
    }
    /////////////////////////////////////////
  }
  /////////////////////////////////////////
  //This loop to assign values to lines
  // in between points.
  D_loadedDX2 = [];
  D_loadedDY2 = [];
  const D_pointsDx2 = [];
  const D_pointsDy2 = [];
  for (var b = 0; b < D_pointsDx.length; b++) {
    D_FirstPt = D_pointsDx[b];
    D_NextPt = D_pointsDx[b + 1];
    D_NumPtBtw = D_NextPt - D_FirstPt;
    if (D_NumPtBtw > 1) {
      ////////////////////////////////////////
      D_LinePtsX = loadedDX[b + 1] - loadedDX[b];
      D_LinePtDX = D_LinePtsX / D_NumPtBtw;
      D_LinePtsY = loadedDY[b + 1] - loadedDY[b];
      D_LinePtDY = D_LinePtsY / D_NumPtBtw;
      ////////////////////////////////////////
      D_LinePtsX1 = D_pointsDx[b + 1] - D_pointsDx[b];
      D_LinePtDX1 = D_LinePtsX1 / D_NumPtBtw;
      D_LinePtsY1 = D_pointsDy[b + 1] - D_pointsDy[b];
      D_LinePtDY1 = D_LinePtsY1 / D_NumPtBtw;
      ////////////////////////////////////////
      D_PtOnX = loadedDX[b];
      D_PtOnY = loadedDY[b];
      D_PtOnX1 = D_pointsDx[b];
      D_PtOnY1 = D_pointsDy[b];
      ////////////////////////////////////////
      for (var npb = 0; npb < D_NumPtBtw; npb++) {
        D_loadedDX2.push(D_PtOnX);
        D_loadedDY2.push(D_PtOnY);
        D_pointsDx2.push(D_PtOnX1);
        D_pointsDy2.push(D_PtOnY1);
        D_PtOnX = D_PtOnX + D_LinePtDX;
        D_PtOnY = D_PtOnY + D_LinePtDY;
        D_PtOnX1 = D_PtOnX1 + D_LinePtDX1;
        D_PtOnY1 = D_PtOnY1 + D_LinePtDY1;
      }
    }
  }
  /////////////////////////////////////////
  //Shade all of Rainbow Canvas
  UCR_Huectx.clearRect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.beginPath();
  UCR_Huectx.globalAlpha = 1;
  UCR_Huectx.rect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.fillStyle = 'black';
  UCR_Huectx.fill(); /**/
  /////////////////////////////////////////
  for (var p = 0; p < D_loadedDX2.length - 1; p++) {
    if (D_loadedDX2[p] <= 1) {
      /////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////
      // THIS CODE SHADES THE RAINBOW, ACCORDING TO THE DATA POINTS
      var alphax = 1 - D_loadedDY2[p];
      var lastPt = 0 + D_pointsDx2[p];
      var nextPt = 0 + D_pointsDx2[p + 1];
      ////////////////////////////////////////////////
      UCR_Huectx.fillStyle = '#000000';
      UCR_Huectx.globalAlpha = alphax;
      if (D_loadedDY2[p] > yStretch) {
        if (!isNaN(nextPt)) {
          UCR_Huectx.clearRect(lastPt, From_Top, 2, rainbowHt);
          UCR_Huectx.fillRect(lastPt, From_Top, 2, rainbowHt);
        }
      }
      // END OF 'SHADING THE RAINBOW'
      /////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////
    }
    ///////////////////////////////////////////////////
  }
  ///////////////////////////////////////////////////
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
function drawConnectingLines() {
  var LineColor = '#43d5ff';
  // DRAW THE LINES THAT CONNECT THE CIRCULAR DATA POINTS
  for (i = 0; i < numOfBins; i++) {
    var nextOne = 1;
    var SpaceBtw = 1;
    if (typeof D_pointsy[i + nextOne] === 'undefined') {
      // does not exist
      for (let FindNext = i + nextOne; FindNext < numOfBins; FindNext++) {
        if (typeof D_pointsy[FindNext] === 'undefined') {
          SpaceBtw = SpaceBtw + 1;
        } else {
          nextOne = FindNext;
          LineColor = '#004160';
          FindNext = numOfBins;
          break;
        }
      }
    } else {
      // does exist
      LineColor = '#004160';
    }
    Drawing_ctx.beginPath();
    Drawing_ctx.moveTo(deltaT * i + 1, D_pointsy[i]);
    Drawing_ctx.lineTo(deltaT * (i + SpaceBtw) - 1, D_pointsy[i + SpaceBtw]);
    Drawing_ctx.lineWidth = 2;
    Drawing_ctx.strokeStyle = LineColor;
    Drawing_ctx.stroke();
  }
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
function dragStart() {
  flag = 'doDraw';
  //console.log('dragStart');
  $('#U_D_CRH').css('z-index', '4');
  var rect = DrawCanvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  var thisPoint;
  // determine the closest point -- i.e., the "i" -- to the clicked x
  var temp = Math.floor(x / binSize);
  var r = x % binSize;
  if (r < binSize / 2) {
    thisPoint = temp;
  } else if (r >= binSize / 2) {
    thisPoint = temp + 1;
  }
  // replace D_pointsy-i with the new y value.
  D_pointsx[thisPoint] = x;
  D_pointsy[thisPoint] = y;
}
//////////////////////////////////////////////////
function nearestPointIndex(thisX) {
  //////////////////////////////
  if (thisX < 0) {
    return 0;
  }
  //////////////////////////////
  if (thisX > DrawCanvas.width - eps) {
    return numOfBins;
  }
  //////////////////////////////
  for (i = 0; i <= numOfBins - 1; i++) {
    if (thisX >= i * deltaT - eps && thisX < i * deltaT + eps) {
      return i;
    }
  }
  //////////////////////////////
  return -1;
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
function drawCurve(event) {
  var rect = DrawCanvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  if (x < 1) {
    x = 1;
  }
  if (y < 1) {
    y = 1;
  }
  if (y > 148) {
    y = 148;
  }
  ////////////////////////
  if (flag == 'doDraw') {
    // FIND NEAREST INDEX POINT
    nearestPointIndex(x);
    const index = i;
    // PUT THE Y VALUE INTO POINTSY AT THE INDEX POINT
    D_pointsx[index] = x;
    D_pointsy[index] = y;
    D_GraphPoints.push(y);
    // ERASE THE EXISTING INDEX POINT
    Drawing_ctx.fillStyle = '#ffffff';
    Drawing_ctx.fillRect(deltaT * index - eps, 62, deltaT, 158);
    // DRAW THE NEW POINT FROM POINTSY AT THE CURRENT INDEX
    Drawing_ctx.beginPath();
    Drawing_ctx.arc(deltaT * index, D_pointsy[index], 2, 0, 2 * Math.PI);
    Drawing_ctx.fillStyle = '#47bd6e';
    Drawing_ctx.fill();
  }
  // NOTE: WHEN YOU LET THE MOUSE UP (REMOVE FLAG), THEN DRAW THE LINES BETWEEN THE CIRCLES.
}
//////////////////////////////////////////////////
function dragStop() {
  flag = 'dontDraw';
  // DRAW THE LINES BETWEEN THE POINTS
  Drawing_ctx.closePath();
  drawPoints();
  drawConnectingLines();
}
///////////////////////////////////////////////////////////
function leavingCanvas() {
  flag = 'leavingCanvas dontDraw';
  dragStop();
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function drawXAxis(W_CTX, W_CAN, xStretch) {
  var i;
  newXStretch = xStretch;
  pxl_stretch = pxlsPerWv * xStretch;
  pxl_stretch = pxl_stretch.toFixed(3);
  //Reset the X-Axis to Redraw
  W_CTX.clearRect(0, 0, W_CAN.width, W_CAN.height);
  ///////////////////////////////////////////////////////
  for (i = 0; i < 98; i++) {
    if (legend_yAxisOffset + pxl_stretch * 100 * i < W_CAN.width) {
      W_CTX.moveTo(legend_yAxisOffset + pxl_stretch * 100 * i, 10);
      W_CTX.lineTo(legend_yAxisOffset + pxl_stretch * 100 * i, 14);
      W_CTX.strokeStyle = legendColor;
      W_CTX.stroke();
    }
  }
  ///////////////////////////////////////////////////////
  W_CTX.beginPath();
  W_CTX.lineWidth = 1.5;
  for (i = 0; i < 60; i++) {
    if (legend_yAxisOffset + pxl_stretch * (800 + 1000 * i) < W_CAN.width) {
      W_CTX.moveTo(legend_yAxisOffset + pxl_stretch * (800 + 1000 * i), 10);
      W_CTX.lineTo(legend_yAxisOffset + pxl_stretch * (800 + 1000 * i), 16);
      W_CTX.strokeStyle = legendColor;
      W_CTX.stroke();
    }
  }
  ///////////////////////////////////////////////////////
  W_CTX.beginPath();
  W_CTX.lineWidth = 2.0;
  var LineSpacer = 0;
  for (i = 2; i < 6; i++) {
    if (i == 1) {
      LineSpacer = 9000;
    } else {
      LineSpacer = 10000;
    }
    //////////////////////////////////////
    if (
      legend_yAxisOffset + pxl_stretch * (-200 + LineSpacer * i) <
      W_CAN.width
    ) {
      W_CTX.moveTo(
        legend_yAxisOffset + pxl_stretch * (-200 + LineSpacer * i),
        10,
      );
      W_CTX.lineTo(
        legend_yAxisOffset + pxl_stretch * (-200 + LineSpacer * i),
        18,
      );
      W_CTX.strokeStyle = legendColor;
      W_CTX.stroke();
    }
  }
  ///////////////////////////////////////////////////////
  W_CTX.font = '11px Arial';
  W_CTX.fillStyle = legendColor;
  ///////////////////////////////////////////////////////
  ///  This for loop wrties numbers from 0.1 to 0.9
  for (i = 2; i < 10; i++) {
    var xLoc = legend_yAxisOffset + pxl_stretch * (100 * (i - 2));
    if (xStretch > 0.5) {
      W_CTX.fillText(String(i / 10), xLoc - 5, 28);
    }
  }
  ///////////////////////////////////////////////////////
  ///  This for loop wrties numbers from 1 to 10
  for (i = 0; i < 10; i++) {
    xLoc = legend_yAxisOffset + pxl_stretch * (800 + 1000 * i);
    W_CTX.fillText(String(i + 1), xLoc - 5, 28);
  }
  ///////////////////////////////////////////////////////
  ///  This for loop wrties numbers above 10
  for (i = 2; i < 6; i++) {
    xLoc = legend_yAxisOffset + pxl_stretch * (-200 + 10000 * i);
    W_CTX.fillText(String(i * 10), xLoc - 8, 28);
  }
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function drawYAxis() {
  ///////////////////////////////////////////////////////
  UY_Axisctx.fillStyle = '#1e4c7d';
  UY_Axisctx.fillRect(0, 0, UY_Axis.width, UY_Axis.height); // the graph area background
  // Reset the current path
  UY_Axisctx.beginPath();
  //Write the Y Axis
  UY_Axisctx.font = '9px Myriad Pro';
  UY_Axisctx.fillStyle = legendColor;
  for (var y = 0; y <= 10; y++) {
    var yLoc = y * 13 + 10;
    UY_Axisctx.fillText(String((10 - y) / 10), 10, yLoc);
    UY_Axisctx.strokeStyle = legendColor;
    UY_Axisctx.moveTo(25, yLoc);
    UY_Axisctx.lineTo(35, yLoc);
    // Make the line visible
    UY_Axisctx.stroke();
  }
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  LY_Axisctx.fillStyle = '#1e4c7d';
  LY_Axisctx.fillRect(0, 0, LY_Axis.width, LY_Axis.height); // the graph area background
  // Reset the current path
  LY_Axisctx.beginPath();
  //Write the Y Axis
  LY_Axisctx.font = '9px Myriad Pro';
  LY_Axisctx.fillStyle = legendColor;
  for (y = 0; y <= 10; y++) {
    yLoc = y * 13 + 10;
    LY_Axisctx.fillText(String((10 - y) / 10), 10, yLoc);
    LY_Axisctx.strokeStyle = legendColor;
    LY_Axisctx.moveTo(25, yLoc);
    LY_Axisctx.lineTo(35, yLoc);
    // Make the line visible
    LY_Axisctx.stroke();
  }
  ///////////////////////////////////////////////////////
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function updateIndicator(PosX) {
  UCRIctx.clearRect(0, 0, UCRI.width, 20);
  LCRIctx.clearRect(0, 0, UCRI.width, 20);
  UCRIctx.drawImage(Triangle_img, PosX - 10, 0, 20, 20);
  LCRIctx.drawImage(Triangle_img, PosX - 10, 0, 20, 20);
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function Line1(WIC_ctx) {
  var LinePos = this;
  this.x1 = 0;
  this.x2 = 0;
  this.y1 = 0;
  this.y2 = 0;
  this.draw = function () {
    WIC_ctx.beginPath();
    WIC_ctx.moveTo(LinePos.x1, LinePos.y1);
    WIC_ctx.lineTo(LinePos.x2, LinePos.y2);
    WIC_ctx.stroke();
  };
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function Line2(WIC_ctx) {
  var LinePos = this;
  this.x1 = 0;
  this.x2 = 0;
  this.y1 = 0;
  this.y2 = 0;
  this.draw = function () {
    WIC_ctx.beginPath();
    WIC_ctx.moveTo(LinePos.x1, LinePos.y1);
    WIC_ctx.lineTo(LinePos.x2, LinePos.y2);
    WIC_ctx.stroke();
  };
}
////////////////////////////////////////////////////
function updateLine(e, WIC_ctx) {
  UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
  UIC_ctx.lineWidth = 2;
  var r = UIC.getBoundingClientRect(),
    x = e.clientX - r.left,
    y = e.clientY - r.top;
  line1.x1 = x;
  line1.y1 = 0;
  line1.x2 = x;
  line1.y2 = UIC.height;
  line1.draw();
  ///////////////////////////////////////////////
  LIC_ctx.clearRect(0, 0, LIC.width, LIC.height);
  r = LIC.getBoundingClientRect();
  x = e.clientX - r.left;
  y = e.clientY - r.top;
  line2.x1 = x;
  line2.y1 = 0;
  line2.x2 = x;
  line2.y2 = UIC.height;
  line2.draw();
  ///////////////////////////////////////////////
  var posx = x;
  updateIndicator(posx, 20);
  ///////////////////////////////////////////////
  WIC_ctx.globalAlpha = 1;
  WIC_ctx.clearRect(0, 70, UIC.width, 220);
  WIC_ctx.clearRect(0, 70, LIC.width, 220);
  WIC_ctx.strokeStyle = indicatorColor;
  WIC_ctx.beginPath();
  WIC_ctx.moveTo(posx, 30 + topOffset);
  WIC_ctx.lineTo(posx, 190 + topOffset);
  WIC_ctx.clearRect(0, 400, UIC.width, 160);
  WIC_ctx.moveTo(posx, 400);
  WIC_ctx.lineTo(posx, 560);
  WIC_ctx.stroke();
  const indicatorx = posx; // keep track of the position of the indicator line, so readout changes when XAxis_slider moves.
  document.getElementById('drawIndicatorMousePos').innerHTML = indicatorx;
  // now put up the wavelength readouts
  WIC_ctx.font = '14px Myriad Pro';
  WIC_ctx.fillStyle = textColor;
  var wavelength = (posx - 0) / (pxlsPerWv * xStretch) + 200; // 200 is the starting wavelength at the yAxisOffset
  wavelength = Math.round(wavelength) / 1000;
  ///////////////////////////////////////////////
  var readout_microns = String(wavelength.toFixed(3)) + '   ' + 'microns';
  var readout_nanometers = wavelength.toFixed(3) * 1000;
  var readout_angstrom = wavelength.toFixed(3) * 10000;
  var readout_eV = 12400 / (readout_nanometers * 10);
  readout_eV = String(readout_eV.toFixed(3)) + '   ' + 'eV';
  readout_nanometers =
    String(readout_nanometers.toFixed(0)) + '   ' + 'nanometers';
  readout_angstrom = String(readout_angstrom.toFixed(0)) + '   ' + 'Angstrom';

  ///////////////////////////////////////////////
  var WL_Nanometers = document.getElementById('WL_Nanometers').selected; //Added by Aladdin
  var WL_Angstrom = document.getElementById('WL_Angstrom').selected; //Added by Aladdin
  var WL_ElectronVolt = document.getElementById('WL_ElectronVolt').selected; //Added by Aladdin
  if (WL_Nanometers == true) {
    //Added by Aladdin
    UIC_ctx.fillText(readout_nanometers, posx + 6, 15);
    LIC_ctx.fillText(readout_nanometers, posx + 6, 15);
  } else if (WL_Angstrom == true) {
    //Added by Aladdin
    UIC_ctx.fillText(readout_angstrom, posx + 6, 15);
    LIC_ctx.fillText(readout_angstrom, posx + 6, 15);
  } else if (WL_ElectronVolt == true) {
    //Added by Aladdin
    UIC_ctx.fillText(readout_eV, posx + 6, 15);
    LIC_ctx.fillText(readout_eV, posx + 6, 15);
  } else {
    UIC_ctx.fillText(readout_microns, posx + 6, 15);
    LIC_ctx.fillText(readout_microns, posx + 6, 15);
  }
  ///////////////////////////////////////////////
  var posy = y + 330; //uppery[i]
  ///////////////////////////////////////////////
  document.getElementById('MouseLocation').innerHTML =
    ' UIC.width: ' +
    UIC.width +
    ' || yAxisOffset: ' +
    yAxisOffset +
    ' || pxlsPerWv: ' +
    pxlsPerWv +
    ' || xStretch: ' +
    xStretch +
    ' || pxlsPerWv * xStretch: ' +
    pxl_stretch +
    ' || x: ' +
    x +
    ' || posx: ' +
    posx +
    ' || y: ' +
    y +
    ' || posy: ' +
    posy +
    ' || microns: ' +
    readout_microns +
    '';
  ///////////////////////////////////////////////
}
//////////////////////////////////////////////////|| wavelength: "+wavelength+"
//////////////////////////////////////////////////
var Alpha_Stretch = Alpha_Range.value / 10;

//////////////////////////////////////////////////
Alpha_Range.oninput = function () {
  var Alpha_Range_Val = document.getElementById('Alpha_Range_Val');
  Alpha_Range_Val.innerHTML = this.value;
  Alpha_Stretch = this.value / 100;
  Alpha_Range_Val.innerHTML = Alpha_Stretch;
  //Redraw the X-Axis
  drawXAxis(UX_Axisctx, UX_Axis, xStretch);
  drawXAxis(LX_Axisctx, LX_Axis, xStretch);
  initSpectrum();
};
//////////////////////////////////////////////////
//////////////////////////////////////////////////
XAxis_slider.oninput = function () {
  var X_Axis_Slider_Val = document.getElementById('X_Axis_Slider_Val');
  X_Axis_Slider_Val.innerHTML = this.value;
  xStretch = this.value / 50;
  X_Axis_Slider_Val.innerHTML = xStretch;
  //Redraw the X-Axis
  drawXAxis(UX_Axisctx, UX_Axis, xStretch);
  drawXAxis(LX_Axisctx, LX_Axis, xStretch);
  initSpectrum();
};
//////////////////////////////////////////////////
YAxis_slider.oninput = function () {
  var Y_Axis_Slider_Val = document.getElementById('Y_Axis_Slider_Val');

  Y_Axis_Slider_Val.innerHTML = this.value;
  yStretch = this.value / 100;
  Y_Axis_Slider_Val.innerHTML = yStretch;
  document.getElementById('Y_Axis_Slider').innerHTML = yStretch;
  drawXAxis(UX_Axisctx, UX_Axis, xStretch);
  drawXAxis(LX_Axisctx, LX_Axis, xStretch);
  initSpectrum();
};
//////////////////////////////////////////////////

var readTFileBtn = document.getElementById('read-Tfile');
readTFileBtn.addEventListener('click', function () {
  //console.log('read-Tfile clicked');
  var inputTFile = document.getElementById('input-Tfile');
  readTFile(inputTFile.files[0]);
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//***********************************************//
function readTFile(file) {
  //console.log('readTFile');
  var reader = new FileReader();
  reader.onload = function (evt) {
    var textContents = evt.target.result;
    const parsed = utils.parseFileContents(textContents);
    const [x, y] = parsed[0];
    loaded1X = x;
    loaded1Y = utils.rangeNormalize(y);
    //Target_Name
    const Target_Name = file.name;
    const Target_Name_c = Target_Name.split('.');
    document.getElementById('Target_Name').innerHTML = Target_Name_c[0];
    if (typeof loaded1X !== 'undefined') {
      $('#UpperCanvasGraph').show();
      document.getElementById('myDrawCanvas').style.display = 'none';
      plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
    }
  };
  reader.readAsText(file);
}
//***********************************************//

var readCFileBtn = document.getElementById('read-Cfile');
readCFileBtn.addEventListener('click', function () {
  //console.log('read-Cfile clicked');
  var inputCFile = document.getElementById('input-Cfile');
  readCFile(inputCFile.files[0]);
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//***********************************************//
function readCFile(file) {
  //console.log('readCFile');
  var reader = new FileReader();
  reader.onload = function (evt) {
    var textContents = evt.target.result;
    const parsed = utils.parseFileContents(textContents);
    const [x, y] = parsed[0];
    loaded2X = x;
    loaded2Y = utils.rangeNormalize(y);
    //Comparison_Name
    const Comparison_Name = file.name;
    const Comparison_Name_c = Comparison_Name.split('.');
    document.getElementById('Comparison_Name').innerHTML = Comparison_Name_c[0];
    if (typeof loaded2X !== 'undefined') {
      plotGraph(LCGctx, LCG, LCR_Huectx, LIC_ctx);
    }
  };
  reader.readAsText(file);
}
//***********************************************//
const inputT = document.getElementById('input-Tfile');
const previewT = document.querySelector('.previewT');
inputT.style.opacity = 0;
inputT.addEventListener('change', updateTargetDisplay);
//***********************************************//
function updateTargetDisplay() {
  console.log('updateTargetDisplay');
  while (previewT.firstChild) {
    previewT.removeChild(previewT.firstChild);
  }

  const curFiles = inputT.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    previewT.appendChild(para);
  } else {
    const list = document.createElement('ol');
    previewT.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if (validFileType(file)) {
        para.textContent = `File name ${
          file.name
        }, file size ${returnFileSize(file.size)}.`;
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
//***********************************************//
const inputC = document.getElementById('input-Cfile');
const previewC = document.querySelector('.previewC');
inputC.style.opacity = 0;
inputC.addEventListener('change', updateComparisonDisplay);
//***********************************************//
function updateComparisonDisplay() {
  console.log('updateComparisonDisplay');
  while (previewC.firstChild) {
    previewC.removeChild(previewC.firstChild);
  }

  const curFiles = inputC.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    previewC.appendChild(para);
  } else {
    const list = document.createElement('ol');
    previewC.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if (validFileType(file)) {
        para.textContent = `File name ${
          file.name
        }, file size ${returnFileSize(file.size)}.`;
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
//***********************************************//
const fileTypes = ['text/csv', 'text/plain', `text/txt`];
//***********************************************//
function validFileType(file) {
  return fileTypes.includes(file.type);
}
//***********************************************//
function returnFileSize(number) {
  if (number < 1024) {
    return number + 'bytes';
  } else if (number > 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB';
  } else if (number > 1048576) {
    return (number / 1048576).toFixed(1) + 'MB';
  }
}
//////////////////////////////////////////////////
initialLineHdf('Both');
//////////////////////////////////////////////////

export {
  initSpectrum,
  SeacrhFor,
  SelectTarget,
  updateLine,
  dragStart,
  dragStop,
  drawCurve,
  leavingCanvas,
  UIC_ctx,
  LIC_ctx,
};
