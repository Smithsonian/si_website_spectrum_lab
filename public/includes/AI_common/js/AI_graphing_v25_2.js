//////////////////////////////////////////////////////////////////////////////////////////////
/*
 * 	Copyright (c) 2020, 2021 All Right Reserved, aibrahim@cfa.harvard.edu
 *	All other rights reserved.
 */
//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Spectrum Lab
 * Version       24_6
 * Author     	 Alaalden Ibrahim <aibrahim AT cfa.harvard.edu>
 * Date          July 20 2020
 * DOCUMENTATION THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED
 * =============
 * --------------------------------------------------------------------------
 * --------------------------------------------------------------------------
 */
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var Targets_folder = "";
var Targets1_folder = "";
var Targets2_folder = "";
/////////////////////////////////////////////////////////////////////
var x, y, rightmostDragX, leftmostDragY, startingX;
/////////////////////////////////////////////////////////////////////
var yAxisOffset = 0;
var numOfBins = 100;
var flag = "dontDraw";
var From_Top = 0;
var shrinky = 0.65; // this shrinks the y-scale so the graph is not as tall as the window
var xStretch, yStretch;
var legend_yAxisOffset = 20;
var rightOffset = 20;
var topOffset = 20;
var textColor = "#000000";
var dataColor = "#3778bd";
var borderColor = "#1e4c7d";
var indicatorColor = "#777777";
var legendColor = "#6ce3d0";
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
  loaded_Full_X = [],
  loaded_Full_Y = [],
  G_points_Full_X = [],
  G_points_Full_Y = [];
/////////////////////////////////////////////////////////////////////
var Pxl_X_arr = [],
  Pxl_Y_arr = [],
  Pt_X_arr = [],
  Pt_Y_arr = [];
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
var XAxis_slider = document.getElementById("XAxis_Range");
var YAxis_slider = document.getElementById("YAxis_Range");
var Alpha_Range = document.getElementById("Alpha_Range");
var img = document.getElementById("rainbow");
var Triangle_img = document.getElementById("Triangle");
var rainbowHt = 60;
var LampsArr0 = [
  "Lamp1",
  "Lamp2",
  "Lamp3",
  "Lamp4",
  "Lamp5",
  "Lamp6",
  "Lamp7",
  "Blue_LED",
  "Red_LED",
  "Green_LED",
  "White_pixels",
];
var LampsArr1 = [
  "Lamp1: Metal Halide",
  "Lamp2: fluorescent light",
  "Lamp3: sodium low pressure",
  "Lamp4: Incandescent bulb",
  "Lamp5: mercury vapor",
  "Lamp6: Warm white LED",
  "Lamp7: Cool white LED",
  "Blue LED",
  "Red LED",
  "Green LED",
  "White pixels on a computer screen",
];
/////////////////////////////////////////////////////////////////////
var StarsArr0 = [
  "O_Star",
  "B_Star",
  "A_Star",
  "F_Star",
  "G_Star",
  "K_Star",
  "M_Star",
  "Sun",
];
var StarsArr1 = [
  "O Star",
  "B Star",
  "A Star",
  "F Star",
  "G Star",
  "K Star",
  "M Star",
  "Sun",
];
/////////////////////////////////////////////////////////////////////
var PlantsArr0 = [
  "Red_flower",
  "Green_Grass",
  "Tree",
  "Purple_cactus",
  "Yellow_Aspen",
];
var PlantsArr1 = [
  "Red flower",
  "Green Grass",
  "Tree",
  "Purple cactus",
  "yellow Aspen",
];
/////////////////////////////////////////////////////////////////////
var AtomsArr0 = ["Hydrogen", "Helium", "Mercury", "Nitrogen_or_other_gas"];
var AtomsArr1 = [
  "Hydrogen",
  "Helium",
  "Mercury",
  "Nitrogen or other gas tubes",
];
/////////////////////////////////////////////////////////////////////
var PlanetsArr0 = ["Mars", "Saturn", "Jupiter"];
var PlanetsArr1 = ["Mars", "Saturn", "Jupiter"];
/////////////////////////////////////////////////////////////////////
var TestsArr0 = ["test1", "test2", "test3"];
var TestsArr1 = ["test1", "test2", "test3"];
/////////////////////////////////////////////////////////////////////
var Targets_Titles = [];
var Targets_descriptions = [];
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          All Canvases
/////////////////////////////////////////////////////////////////////
//          Upper Canvases
/////////////////////////////////////////////////////////////////////
var UCG = document.getElementById("UpperCanvasGraph");
var UCGctx = UCG.getContext("2d");
/////////////////////////////////////////////////////////////////////
var UX_Axis = document.getElementById("UpperCanvasXAxis");
var UX_Axisctx = UX_Axis.getContext("2d");
/////////////////////////////////////////////////////////////////////
var UY_Axis = document.getElementById("UpperCanvasYAxis");
var UY_Axisctx = UY_Axis.getContext("2d");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var UCR = document.getElementById("UpperCanvasRainbow");
var UCRctx = UCR.getContext("2d");
/////////////////////////////////////////////////////////////////////
var UCR_Hue = document.getElementById("U_D_CRH");
var UCR_Huectx = UCR_Hue.getContext("2d");
/////////////////////////////////////////////////////////////////////
var UCRI = document.getElementById("U_R_I");
var UCRIctx = UCRI.getContext("2d");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          Lower Canvases
/////////////////////////////////////////////////////////////////////
var LCG = document.getElementById("LowerCanvasGraph");
var LCGctx = LCG.getContext("2d");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var LCR = document.getElementById("LowerCanvasRainbow");
var LCRctx = LCR.getContext("2d");
/////////////////////////////////////////////////////////////////////
var LX_Axis = document.getElementById("LowerCanvasXAxis");
var LX_Axisctx = LX_Axis.getContext("2d");
/////////////////////////////////////////////////////////////////////
var LCR_Hue = document.getElementById("L_D_CRH");
var LCR_Huectx = LCR_Hue.getContext("2d");
/////////////////////////////////////////////////////////////////////
var LCRI = document.getElementById("L_R_I");
var LCRIctx = LCRI.getContext("2d");
/////////////////////////////////////////////////////////////////////
var LY_Axis = document.getElementById("LowerCanvasYAxis");
var LY_Axisctx = LY_Axis.getContext("2d");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          Drawing Canvases
/////////////////////////////////////////////////////////////////////
var DrawCanvas = document.getElementById("myDrawCanvas");
var Drawing_ctx = DrawCanvas.getContext("2d");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//          Indicator Canvases
/////////////////////////////////////////////////////////////////////
var UIC = document.getElementById("UpperIndicatorCanvas");
UIC_ctx = UIC.getContext("2d");
line1 = new Line1(UIC_ctx);

var LIC = document.getElementById("LowerIndicatorCanvas");
LIC_ctx = LIC.getContext("2d");
line2 = new Line2(LIC_ctx);
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
var pxlsPerWv = UX_Axis.width / 750;
var deltaT = DrawCanvas.width / numOfBins; // The length of a segment or binSize
var eps = 0.5 * deltaT; // The middle of a bin
var binSize = deltaT;
var pxl_stretch;
var newXStretch;
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// DRAW INITIAL LINE FOR 'DRAW YOUR OWN CURVE' AND SHADE THE RAINBOW
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function initialLineHdf() {
  xStretch = XAxis_slider.value / 50;
  yStretch = YAxis_slider.value / 100;
  ////////////////////////////////
  //Build Upper Canvas Graph Area
  ////////////////////////////////
  UCGctx.fillStyle = "white";
  UCGctx.fillRect(0, 0, UCG.width, 150); // the graph area background
  ////////////////////////////////
  // REDRAW GRAPH AREA BACKGROUND
  Drawing_ctx.fillStyle = "white";
  Drawing_ctx.fillRect(0, 0, DrawCanvas.width, DrawCanvas.height); // the graph area background
  //Draw the X-Axis Values
  drawXAxis(UX_Axisctx, UX_Axis, xStretch);
  drawYAxis(UX_Axisctx, UX_Axis, xStretch);
  //Draw the Rainbow and Shade it
  //REDRAW RAINBOW BACKGROUND
  UCRctx.fillStyle = "#DDDDDD";
  UCRctx.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
  // DRAW RAINBOWS
  var rainbowx = 0 + (400 - 200) * pxlsPerWv * xStretch;
  var rainbowWidth = 250 * xStretch;
  UCRctx.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt);
  /////////////////////////////////////////////////////////////
  ////////////////////////////////
  //Build Lower Canvas Graph Area
  ////////////////////////////////
  LCGctx.fillStyle = "white";
  LCGctx.fillRect(0, 0, UCG.width, 150); // the graph area background
  ////////////////////////////////
  // REDRAW GRAPH AREA BACKGROUND
  LCGctx.fillStyle = "white";
  LCGctx.fillRect(0, 0, LCG.width, LCG.height); // the graph area background
  //Draw the X-Axis Values
  drawXAxis(LX_Axisctx, LX_Axis, xStretch);
  LCRctx.fillStyle = "#DDDDDD";
  LCRctx.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
  LCRctx.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt);
  /////////////////////////////////////////////////////////////
  //Shade all of Rainbow Canvas
  LCR_Huectx.clearRect(0, From_Top, 610, rainbowHt);
  LCR_Huectx.beginPath();
  LCR_Huectx.globalAlpha = 1;
  LCR_Huectx.rect(0, From_Top, 610, rainbowHt);
  LCR_Huectx.fillStyle = "black";
  LCR_Huectx.fill(); /**/
  //Shade all of Rainbow Canvas
  UCR_Huectx.clearRect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.beginPath();
  UCR_Huectx.globalAlpha = 1;
  UCR_Huectx.rect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.fillStyle = "black";
  UCR_Huectx.fill();
  /////////////////////////////////////////////////////////////
  // CLEAR THE ARRAY OF POINTS
  D_pointsx = [];
  D_pointsy = [];
  // FILL THE POINTSY ARRAY WITH THEIR STARTING VALUES
  for (i = 0; i < numOfBins; i++) {
    D_pointsy.push(undefined);
  }
}
/////////////////////////////////////////////////////////////////////
function initSpectrum() {
  (pointsx = []),
    (pointsy = []),
    (loaded_Full_X = []),
    (loaded_Full_Y = []),
    (G_points_Full_X = []),
    (G_points_Full_Y = []);

  if (typeof loaded1X !== "undefined") {
    plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
  }
  if (typeof loaded2X !== "undefined") {
    plotGraph(LCGctx, LCG, LCR_Huectx, LIC_ctx);
  }
}
//***********************************************//
/////////////////////////////////////////////////////////////////////
function Category_Choice() {
  $("#Cat_container").fadeIn("fast", function () {
    $("#box").css("display", "none");
    $("#box").animate({ left: "30%" }, 500);
    // $('.btn-group').button('toggle')
  });
}
//***********************************************//
/////////////////////////////////////////////////////////////////////
function SeacrhFor(val, obj) {
  Targets_Titles = [];
  Targets_descriptions = [];
  if (val == "Lamps") {
    Targets_Titles = LampsArr0;
    Targets_descriptions = LampsArr1;
    if (obj == "Category1") {
      Targets1_folder = "Lamps";
    }
    if (obj == "Category2") {
      Targets2_folder = "Lamps";
    }
  } else if (val == "Stars") {
    Targets_Titles = StarsArr0;
    Targets_descriptions = StarsArr1;
    if (obj == "Category1") {
      Targets1_folder = "Stars";
    }
    if (obj == "Category2") {
      Targets2_folder = "Stars";
    }
  } else if (val == "Plants") {
    Targets_Titles = PlantsArr0;
    Targets_descriptions = PlantsArr1;
    if (obj == "Category1") {
      Targets1_folder = "Plants";
    }
    if (obj == "Category2") {
      Targets2_folder = "Plants";
    }
  } else if (val == "Atoms_and_Molecules") {
    Targets_Titles = AtomsArr0;
    Targets_descriptions = AtomsArr1;
    if (obj == "Category1") {
      Targets1_folder = "Atoms_and_Molecules";
    }
    if (obj == "Category2") {
      Targets2_folder = "Atoms_and_Molecules";
    }
  } else if (val == "Planets") {
    Targets_Titles = PlanetsArr0;
    Targets_descriptions = PlanetsArr1;
    if (obj == "Category1") {
      Targets1_folder = "Planets";
    }
    if (obj == "Category2") {
      Targets2_folder = "Planets";
    }
  } else if (val == "Tests") {
    Targets_Titles = TestsArr0;
    Targets_descriptions = TestsArr1;
    if (obj == "Category1") {
      Targets1_folder = "Tests";
    }
    if (obj == "Category2") {
      Targets2_folder = "Tests";
    }
  } else if (val == "Draw") {
    ResetCanvas();
    document.getElementById("UpperIndicatorCanvas").style.zIndex = "-1";
    document.getElementById("myDrawCanvas").style.display = "block";
    document.getElementById("UpperCanvasGraph").style.display = "none";
  }
  ////////////////////////////////////////////////////////
  var Targets_Filters = "";
  if (obj == "Category1") {
    Targets_Filters = "Targets1Filters";
    $("#Category_box1").animate({ width: "35px" });
    $("#UpperCanvasGraph").show();
    document.getElementById("UpperIndicatorCanvas").style.zIndex = "6";
    document.getElementById("myDrawCanvas").style.display = "none";
  } else if (obj == "Category2") {
    Targets_Filters = "Targets2Filters";
    $("#Category_box2").animate({ width: "35px" });
  } else if (obj == "CategoryDraw") {
    $("#myDrawCanvas").show();
    $("#Category_box1").animate({ width: "35px" });
    $("#Category_box2").animate({ width: "35px" });
    document.getElementById("myDrawCanvas").style.display = "block";
  } else {
    Targets_Filters = "";
  }
  ////////////////////////////////////////////////////////
  if (Targets_Filters != "") {
    var TargetsFilters = document.getElementById(Targets_Filters);
    var T_num = Targets_Titles.length;
    TargetsFilters.innerHTML = '<option value="">Select Sub Category</option>';
    for (var TF = 0; TF < T_num; TF++) {
      TargetsFilters.innerHTML +=
        '<option value="' +
        Targets_Titles[TF] +
        '">' +
        Targets_descriptions[TF] +
        "</option>";
    }
  }
  ////////////////////////////////////////////////////////
}
/////////////////////////////////////////////////////////////////////
//////////////       BEGINNING OF SELECTION SECTION     /////////////
/////////////////////////////////////////////////////////////////////
function SelectTarget(targetName, ListNum) {
  (loadedDataArray = []),
    (pointsx = []),
    (pointsy = []),
    (loaded_Full_Y = []),
    (G_points_Full_X = []),
    (G_points_Full_Y = []);

  var TT = Targets_Titles.indexOf(targetName);
  Targets_Full_descriptions = Targets_descriptions[TT];
  // MAKE SURE THE TARGET IS REVEALED, SO WIPE AGAIN
  if (ListNum == "Targets1") {
    //Just Comment out for local//
    readTextFile(
      "includes/SpecLab_Data_Files/" +
        Targets1_folder +
        "/" +
        targetName +
        ".txt",
      ListNum,
      Targets_Full_descriptions,
    );
    document.getElementById("UpperImg").src =
      "includes/SpecLab_Data_Files/" +
      Targets1_folder +
      "/" +
      targetName +
      ".jpg"; //    UCGctx  UCG
    plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
  } else if (ListNum == "Targets2") {
    readTextFile(
      "includes/SpecLab_Data_Files/" +
        Targets2_folder +
        "/" +
        targetName +
        ".txt",
      ListNum,
      Targets_Full_descriptions,
    );
    document.getElementById("LowerImg").src =
      "includes/SpecLab_Data_Files/" +
      Targets2_folder +
      "/" +
      targetName +
      ".jpg";
    //LCGctx    LCG
    plotGraph(LCGctx, LCG, LCR_Huectx, LIC_ctx);
  } else if (ListNum == "Targets3") {
    readTextFile(
      "includes/SpecLab_Data_Files/Lamps/" + targetName + ".txt",
      ListNum,
      Targets_Full_descriptions,
    );
    if (targetName == "Calibrate3") {
      document.getElementById("UpperImg").src =
        "includes/SpecLab_Data_Files/Tests/discharge tube air180x160.jpg";
    }
    console.log("targetName (%s)", targetName);
    plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
  }
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// General Code
function readTextFile(file, plotNum, Targets_Full_descriptions) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        loadedDataArray = allText.split("&");
        if (plotNum == "Targets1") {
          document.getElementById("Target_Name").innerHTML =
            Targets_Full_descriptions;
          loaded1X = loadedDataArray[0].split(",");
          loaded1Y = loadedDataArray[1].split(",");
        } else if (plotNum == "Targets2") {
          document.getElementById("Comparison_Name").innerHTML =
            Targets_Full_descriptions;
          loaded2X = loadedDataArray[0].split(",");
          loaded2Y = loadedDataArray[1].split(",");
        } else if (plotNum == "Targets3") {
          document.getElementById("Target_Name").innerHTML =
            Targets_Full_descriptions;
          loaded1X = loadedDataArray[0].split(",");
          loaded1Y = loadedDataArray[1].split(",");
        }
      }
    }
  };
  rawFile.send(null);
}

function parseText(text) {
  const loadedDataArray = text.split("&");
  const x = loadedDataArray[0].split(",");
  const y = loadedDataArray[1].split(",");
  return [x, y];
}

function parseCSV(text) {
  const x = [];
  const y = [];
  const rows = text.split("\n");
  for (const row of rows) {
    const columns = row.split(/\s+/);
    x.push(columns[0]);
    y.push(columns[1]);
  }
  return [x, y];
}

function readDataFile(file, plotNum, Targets_Full_descriptions) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        const allText = rawFile.responseText;
        const ext = file.split(".").pop();
        let x, y;
        if (ext === "csv") {
          [x, y] = parseCSV(allText);
        } else {
          [x, y] = parseText(allText);
        }

        const targets2 = plotNum == "Targets2";
        const elementID = targets2 ? "Comparison_Name" : "Target_Name";
        document.getElementById(elementID).innerHTML =
          Targets_Full_descriptions;
        if (targets2) {
          loaded2X = x;
          loaded2Y = y;
        } else {
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
///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function DrawOn() {
  /////////////////////////////////////////////////////////////
  //REDRAW RAINBOW BACKGROUND
  UCRctx.fillStyle = "#DDDDDD";
  UCRctx.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
  // DRAW RAINBOWS
  var rainbowx = (400 - 200) * pxlsPerWv * xStretch;
  var rainbowWidth = 250 * xStretch;
  UCRctx.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt);
  //Shade all of Rainbow Canvas
  UCR_Huectx.clearRect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.beginPath();
  UCR_Huectx.globalAlpha = 1;
  UCR_Huectx.rect(0, From_Top, 610, rainbowHt);
  UCR_Huectx.fillStyle = "black";
  UCR_Huectx.fill();
  /////////////////////////////////////////////////////////////
  LCRctx.fillStyle = "#DDDDDD";
  var rainbowx = (400 - 200) * pxlsPerWv * xStretch;
  var rainbowWidth = 250 * xStretch;
  LCRctx.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
  LCRctx.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt);
  /////////////////////////////////////////////////////////////
  $("#myDrawCanvas").show();
  document.getElementById("myDrawCanvas").style.display = "block";
  document.getElementById("UpperCanvasGraph").style.display = "none";
  /////////////////////////////////////////////////////////////
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function clearCanvas(W_CTX, W_CAN, W_Rainbow, W_Hue) {
  // REDRAW GRAPH AREA BACKGROUND
  W_CTX.clearRect(0, 0, W_CAN.width, W_CAN.height);
  W_CTX.fillStyle = "white";
  W_CTX.fillRect(0, 0, W_CAN.width, W_CAN.height); // the graph area background
  /////////////////////////////////////////////////////////////
  //REDRAW RAINBOW BACKGROUND
  var rainbowx = 0 + (400 - 200) * pxlsPerWv * xStretch;
  var rainbowWidth = 250 * xStretch;
  /////////////////////////////////////////////////////////////
  W_Rainbow.fillStyle = "#DDDDDD";
  W_Rainbow.fillRect(0, 0, UCR.width, rainbowHt); // the rainbow background
  W_Rainbow.drawImage(img, rainbowx, 0, rainbowWidth, rainbowHt); // DRAW RAINBOWS
  /////////////////////////////////////////////////////////////
  W_Hue.clearRect(0, From_Top, 610, rainbowHt);
  W_Hue.beginPath();
  W_Hue.globalAlpha = 1;
  W_Hue.rect(0, From_Top, 610, rainbowHt);
  W_Hue.fillStyle = "black";
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
  UCR_Huectx.fillStyle = "black";
  UCR_Huectx.fill();
  clearCanvas(UCGctx, UCG, UCRctx, UCR_Huectx);
  clearCanvas(Drawing_ctx, DrawCanvas, UCRctx, UCR_Huectx);
}
///////////////////////////////////////////////////
///////////        Plot Graph         /////////////
///////////////////////////////////////////////////
function plotGraph(W_CTX, W_CAN, W_R, WIC_ctx) {
  var whichPlot = "";
  if (W_CTX == UCGctx && typeof loaded1X !== "undefined") {
    W_CAN = UCG;
    var From_Top = 0;
    upperx = loaded1X;
    uppery = loaded1Y;
    whichPlot = "Upper";
    document.getElementById("UpperIndicatorCanvas").style.zIndex = "6";
    clearCanvas(UCGctx, UCG, UCRctx, UCR_Huectx);
  } else if (W_CTX == LCGctx) {
    From_Top = 0;
    upperx = loaded2X;
    uppery = loaded2Y;
    whichPlot = "Lower";
    //console.log('Plot the lower graph from these points');
    clearCanvas(LCGctx, LCG, LCRctx, LCR_Huectx);
  }
  /////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  xStretch = XAxis_slider.value / 50;
  yStretch = YAxis_slider.value / 100;
  document.getElementById("Y_Axis_Slider").innerHTML = yStretch;
  ///////////////////////////////////////////////////////
  //newXStretch=isOdd(xStretch);
  newXStretch = xStretch;
  pxl_stretch = pxlsPerWv * newXStretch;
  pxl_stretch = pxl_stretch.toFixed(3);
  ///////////////////////////////////////////////////////
  shrinky = 0.65; // this shrinks the y-scale so the graph is not as tall as the window
  var xPosition = 0;
  var yPosition = 0;
  ///////////////////////////////////////////////////////
  //Shade all of Rainbow Canvas
  ///////////////////////////////////////////////////////
  if (upperx != []) {
    /////////////////////////////////////////////////////////////
    // clear previous rainbow shading
    /////////////////////////////////////////////////////////////
    for (var i = 0; i < upperx.length; i++) {
      W_CTX.beginPath();
      if (uppery[i] <= 1) {
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
        W_CTX.fillStyle = "blue"; //dataColor;
        W_CTX.fill();
        var PlotLine = document.getElementById("Line_Chart").selected; //Added by Aladdin
        if (PlotLine == true) {
          //Added by Aladdin
          W_CTX.lineTo(xNextPosition, yNextPosition);
          W_CTX.strokeStyle = dataColor;
          W_CTX.stroke();
        } //Added by Aladdin/**/

        var line_spectrum = document.getElementById("line_spectrum").selected; //Added by Aladdin
        if (line_spectrum == true) {
          //Added by Aladdin
          if (i == 1) {
            console.log("line_spectrum");
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
          W_R.fillStyle = "#000000";
          W_R.globalAlpha = alphax;
          W_R.clearRect(lastPt, From_Top, deltaX, rainbowHt);
          W_R.fillRect(lastPt, From_Top, deltaX, rainbowHt);

          if (i > 0 && i < 25) {
            console.log(
              "i(%s),lastPt(%s),nextPt(%s),deltaX(%s),alphax(%s)",
              i,
              lastPt,
              nextPt,
              deltaX,
              alphax,
            );
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
        G_FirstPt = parseFloat(xPosition);
        G_NextPt = parseFloat(xNextPosition);
        G_NumPtBtw = G_NextPt - G_FirstPt;
        if (G_NumPtBtw > 0.001) {
          ////////////////////////////////////////
          G_LinePtsX = parseFloat(upperx[i + 1]) - parseFloat(upperx[i]);
          G_LinePtDX = G_LinePtsX / G_NumPtBtw;
          G_LinePtsY = parseFloat(uppery[i + 1]) - parseFloat(uppery[i]);
          G_LinePtDY = G_LinePtsY / G_NumPtBtw;
          ////////////////////////////////////////
          G_LinePtsX1 = parseFloat(xNextPosition) - parseFloat(xPosition);
          G_LinePtDX1 = G_LinePtsX1 / G_NumPtBtw;
          G_LinePtsY1 = parseFloat(yNextPosition) - parseFloat(yPosition);
          G_LinePtDY1 = G_LinePtsY1 / G_NumPtBtw;
          ////////////////////////////////////////
          G_PtOnX = parseFloat(upperx[i]);
          G_PtOnY = parseFloat(parseFloat(uppery[i]));
          G_PtOnX1 = parseFloat(xPosition);
          G_PtOnY1 = parseFloat(yPosition);
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
    (Pxl_X_arr = []), (Pxl_Y_arr = []), (Pt_X_arr = []), (Pt_Y_arr = []);
    var Pxl_Alpha_now, Pxl_Alpha_next, Pxl_Alpha_Add;
    var Pxl_X_now, Pxl_X_nowC;
    var Pxl_X_next, Pxl_X_after, Pxl_Y_add;
    var Pxl_count = 0,
      Pt_count = 0;
    for (var pxl = 0; pxl < upperx.length; pxl++) {
      Pxl_Alpha_Add = 0;
      Pxl_Alpha_now = parseFloat(uppery[pxl]);
      Pxl_Alpha_now = Pxl_Alpha_now;
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
      "continuous_line_spectrum",
    ).selected; //Added by Aladdin
    if (continuous_line_spectrum == true) {
      //Added by Aladdin
      console.log("continuous_line_spectrum");
      W_CTX.lineTo(xNextPosition, yNextPosition);
      W_CTX.strokeStyle = dataColor;
      W_CTX.stroke();
      ////////////////////////////////////////////////////////////////
      //Now we need a loop to Shade the Rainbow
      ////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////
      for (var SR = 0; SR < Pxl_X_arr.length; SR++) {
        // THIS CODE SHADES THE RAINBOW, ACCORDING TO THE DATA POINTS
        /////////////////////////////////////////////////////////////
        var alphax = Alpha_Stretch - parseFloat(Pxl_Y_arr[SR]);
        var lastPt = parseInt(Pxl_X_arr[SR]);
        var nextPt = parseInt(Pxl_X_arr[SR + 1]);
        var deltaX = nextPt - lastPt;
        ////////////////////////////////////////////////
        W_R.fillStyle = "#000000";
        W_R.globalAlpha = alphax;
        if (Pxl_Y_arr[SR] > yStretch) {
          if (!isNaN(nextPt)) {
            W_R.clearRect(lastPt, From_Top, deltaX, rainbowHt);
            W_R.fillRect(lastPt, From_Top, deltaX, rainbowHt);
          }
        }
        if (SR == 0) {
          var firstDataPt = lastPt;
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
      "continuous_spectrum",
    ).selected; //Added by Aladdin
    if (continuous_spectrum == true) {
      //Added by Aladdin
      console.log("continuous_spectrum");
      W_CTX.lineTo(xNextPosition, yNextPosition);
      W_CTX.strokeStyle = dataColor;
      W_CTX.stroke();
      ////////////////////////////////////////////////////////////////
      //Now we need a loop to Shade the Rainbow
      ////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////
      for (var SR = 0; SR < loaded_Full_X.length; SR++) {
        // THIS CODE SHADES THE RAINBOW, ACCORDING TO THE DATA POINTS
        /////////////////////////////////////////////////////////////
        var alphax = 1 - loaded_Full_Y[SR];
        var lastPt = G_points_Full_X[SR];
        var nextPt = G_points_Full_X[SR + 1];
        var deltaX = nextPt - lastPt;
        ////////////////////////////////////////////////
        W_R.fillStyle = "#000000";
        W_R.globalAlpha = alphax;
        if (loaded_Full_Y[SR] > yStretch) {
          if (!isNaN(nextPt)) {
            W_R.clearRect(lastPt, From_Top, deltaX, rainbowHt);
            W_R.fillRect(lastPt, From_Top, deltaX, rainbowHt);
            if (SR > 0 && SR < 25) {
              console.log(
                "SR(%s),lastPt(%s),nextPt(%s),deltaX(%s),alphax(%s)",
                SR,
                lastPt,
                nextPt,
                deltaX,
                alphax,
              );
            }
          }
        }
        if (SR == 0) {
          var firstDataPt = lastPt;
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
function isOdd(num) {
  var lastone = +num.toString().split("").pop();
  Odd_or_Even = lastone % 2;
  if (num == 1) {
    NewNum = 0.99;
  } else if (Odd_or_Even == 1) {
    NewNum = num;
  } else {
    NewNum = num + 0.01;
  }

  return NewNum;
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function drawPoints() {
  clearCanvas(Drawing_ctx, DrawCanvas, UCRctx, UCR_Huectx);
  document.getElementById("UpperIndicatorCanvas").style.zIndex = "-1";
  // DRAW THE LINES THAT CONNECT THE CIRCULAR DATA POINTS
  (loadedDX = []), (loadedDY = []);
  (D_pointsDx = []), (points1y = []);
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  //Shade all of Rainbow Canvas
  ///////////////////////////////////////////////////////
  for (i = 0; i < numOfBins; i++) {
    // ERASE THE EXISTING INDEX POINT
    Drawing_ctx.fillStyle = "#ffffff";
    Drawing_ctx.fillRect(deltaT * i - eps, 62, deltaT, 158);
    // DRAW THE NEW POINT FROM POINTSY AT THE CURRENT INDEX
    Drawing_ctx.beginPath();
    Drawing_ctx.arc(deltaT * i, D_pointsy[i], 2, 0, 2 * Math.PI);
    Drawing_ctx.fillStyle = "#47bd6e";
    Drawing_ctx.fill();
    /////////////////////////////////////////
    if (!isNaN(D_pointsx[i])) {
      X_Cal = parseInt(D_pointsx[i]) / 810 + 0.2;
      loadedDX.push(X_Cal);
      D_pointsDx.push(D_pointsx[i]);
    }
    /////////////////////////////////////////
    if (!isNaN(D_pointsy[i])) {
      Y_Cal = 1 - D_pointsy[i] / 150;
      loadedDY.push(Y_Cal);
      D_pointsDy.push(D_pointsy[i]);
    }
    /////////////////////////////////////////
  }
  /////////////////////////////////////////
  //This loop to assign values to lines
  // in between points.
  (D_loadedDX2 = []), (D_loadedDY2 = []);
  (D_pointsDx2 = []), (D_pointsDy2 = []);
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
  UCR_Huectx.fillStyle = "black";
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
      var deltaX = nextPt - lastPt;
      ////////////////////////////////////////////////
      UCR_Huectx.fillStyle = "#000000";
      UCR_Huectx.globalAlpha = alphax;
      if (D_loadedDY2[p] > yStretch) {
        if (!isNaN(nextPt)) {
          UCR_Huectx.clearRect(lastPt, From_Top, 2, rainbowHt);
          UCR_Huectx.fillRect(lastPt, From_Top, 2, rainbowHt);
        }
      }
      if (p == 0) {
        var firstDataPt = lastPt;
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
  var LineColor = "#43d5ff";
  // DRAW THE LINES THAT CONNECT THE CIRCULAR DATA POINTS
  for (i = 0; i < numOfBins; i++) {
    var nextOne = 1;
    var SpaceBtw = 1;
    if (typeof D_pointsy[i + nextOne] === "undefined") {
      // does not exist
      for (FindNext = i + nextOne; FindNext < numOfBins; FindNext++) {
        if (typeof D_pointsy[FindNext] === "undefined") {
          SpaceBtw = SpaceBtw + 1;
        } else {
          nextOne = FindNext;
          LineColor = "#004160";
          FindNext = numOfBins;
          break;
        }
      }
    } else {
      // does exist
      LineColor = "#004160";
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
function drawConnectingLines2() {
  // DRAW THE LINES THAT CONNECT THE CIRCULAR DATA POINTS
  for (i = 0; i < D_GraphPoints.length; i++) {
    Drawing_ctx.beginPath();
    Drawing_ctx.moveTo(deltaT * i + 1, D_GraphPoints[i]);
    Drawing_ctx.lineTo(deltaT * (i + 1) - 1, D_GraphPoints[i + 1]);
    Drawing_ctx.lineWidth = 1;
    Drawing_ctx.strokeStyle = "#43d5ff";
    Drawing_ctx.stroke();
  }
}
//////////////////////////////////////////////////
function dragStart() {
  flag = "doDraw";
  var rect = DrawCanvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  startingX = nearestPointIndex(x);
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
  // erase the slim rectangle that extends from prior point all the way to the next point.
  var lastx = binSize * (thisPoint - 1);
  var nextx = binSize * (thisPoint + 1);
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
  var xLoc = legend_yAxisOffset + pxlsPerWv * xStretch * (100 * (x - 2));
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
  if (flag == "doDraw") {
    // FIND NEAREST INDEX POINT
    nearestPointIndex(x);
    index = i;
    // PUT THE Y VALUE INTO POINTSY AT THE INDEX POINT
    D_pointsx[index] = x;
    D_pointsy[index] = y;
    D_GraphPoints.push(y);
    // ERASE THE EXISTING INDEX POINT
    Drawing_ctx.fillStyle = "#ffffff";
    Drawing_ctx.fillRect(deltaT * index - eps, 62, deltaT, 158);
    // DRAW THE NEW POINT FROM POINTSY AT THE CURRENT INDEX
    Drawing_ctx.beginPath();
    Drawing_ctx.arc(deltaT * index, D_pointsy[index], 2, 0, 2 * Math.PI);
    Drawing_ctx.fillStyle = "#47bd6e";
    Drawing_ctx.fill();
  }
  // NOTE: WHEN YOU LET THE MOUSE UP (REMOVE FLAG), THEN DRAW THE LINES BETWEEN THE CIRCLES.
}
//////////////////////////////////////////////////
function dragStop() {
  flag = "dontDraw";
  // DRAW THE LINES BETWEEN THE POINTS
  Drawing_ctx.closePath();
  var check =
    Math.floor(117 / 6) +
    "  " +
    Math.floor(119 / 6) +
    "  " +
    Math.floor(116 / 6);
  drawPoints();
  drawConnectingLines();
}
///////////////////////////////////////////////////////////
function leavingCanvas() {
  flag = "leavingCanvas dontDraw";
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
  W_CTX.font = "11px Arial";
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
function drawYAxis(W_CTX, W_CAN, xStretch) {
  ///////////////////////////////////////////////////////
  UY_Axisctx.fillStyle = "#1e4c7d";
  UY_Axisctx.fillRect(0, 0, UY_Axis.width, UY_Axis.height); // the graph area background
  // Reset the current path
  UY_Axisctx.beginPath();
  //Write the Y Axis
  UY_Axisctx.font = "9px Myriad Pro";
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
  LY_Axisctx.fillStyle = "#1e4c7d";
  LY_Axisctx.fillRect(0, 0, LY_Axis.width, LY_Axis.height); // the graph area background
  // Reset the current path
  LY_Axisctx.beginPath();
  //Write the Y Axis
  LY_Axisctx.font = "9px Myriad Pro";
  LY_Axisctx.fillStyle = legendColor;
  for (var y = 0; y <= 10; y++) {
    var yLoc = y * 13 + 10;
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
function updateIndicator(PosX, PosY) {
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
  var r = LIC.getBoundingClientRect(),
    x = e.clientX - r.left,
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
  indicatorx = posx; // keep track of the position of the indicator line, so readout changes when XAxis_slider moves.
  document.getElementById("drawIndicatorMousePos").innerHTML = indicatorx;
  // now put up the wavelength readouts
  WIC_ctx.font = "14px Myriad Pro";
  WIC_ctx.fillStyle = textColor;
  var wavelength = (posx - 0) / (pxlsPerWv * xStretch) + 200; // 200 is the starting wavelength at the yAxisOffset
  wavelength = Math.round(wavelength) / 1000;
  ///////////////////////////////////////////////
  var readout_microns = String(wavelength.toFixed(3)) + "   " + "microns";
  var readout_nanometers = wavelength.toFixed(3) * 1000;
  var readout_angstrom = wavelength.toFixed(3) * 10000;
  var readout_eV = 12400 / (readout_nanometers * 10);
  readout_eV = String(readout_eV.toFixed(3)) + "   " + "eV";
  readout_nanometers =
    String(readout_nanometers.toFixed(0)) + "   " + "nanometers";
  readout_angstrom = String(readout_angstrom.toFixed(0)) + "   " + "Angstrom";

  ///////////////////////////////////////////////
  var WL_Microns = document.getElementById("WL_Microns").selected; //Added by Aladdin
  var WL_Nanometers = document.getElementById("WL_Nanometers").selected; //Added by Aladdin
  var WL_Angstrom = document.getElementById("WL_Angstrom").selected; //Added by Aladdin
  var WL_ElectronVolt = document.getElementById("WL_ElectronVolt").selected; //Added by Aladdin
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
  document.getElementById("MouseLocation").innerHTML =
    " UIC.width: " +
    UIC.width +
    " || yAxisOffset: " +
    yAxisOffset +
    " || pxlsPerWv: " +
    pxlsPerWv +
    " || xStretch: " +
    xStretch +
    " || pxlsPerWv * xStretch: " +
    pxl_stretch +
    " || x: " +
    x +
    " || posx: " +
    posx +
    " || y: " +
    y +
    " || posy: " +
    posy +
    " || microns: " +
    readout_microns +
    "";
  ///////////////////////////////////////////////
}
//////////////////////////////////////////////////|| wavelength: "+wavelength+"
//////////////////////////////////////////////////
Alpha_Stretch = Alpha_Range.value / 10;

//////////////////////////////////////////////////
Alpha_Range.oninput = function () {
  var Alpha_Range_Val = document.getElementById("Alpha_Range_Val");
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
  var X_Axis_Slider_Val = document.getElementById("X_Axis_Slider_Val");
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
  var Y_Axis_Slider_Val = document.getElementById("Y_Axis_Slider_Val");

  Y_Axis_Slider_Val.innerHTML = this.value;
  yStretch = this.value / 100;
  Y_Axis_Slider_Val.innerHTML = yStretch;
  document.getElementById("Y_Axis_Slider").innerHTML = yStretch;
  drawXAxis(UX_Axisctx, UX_Axis, xStretch);
  drawXAxis(LX_Axisctx, LX_Axis, xStretch);
  initSpectrum();
};
//////////////////////////////////////////////////

var readTFileBtn = document.getElementById("read-Tfile");
readTFileBtn.addEventListener("click", function () {
  console.log("read-Tfile clicked");
  var inputTFile = document.getElementById("input-Tfile");
  readTFile(inputTFile.files[0]);
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var input_Tfile = document.getElementById("input-Tfile");
input_Tfile.addEventListener("click", function () {
  var inputTFile = document.getElementById("input-Tfile");
  readTFile(inputTFile.files[0]);
});
//////////////////////////////////////////////////
//***********************************************//
function readTFile(file) {
  console.log("readTFile");
  var reader = new FileReader();
  reader.onload = function (evt) {
    var textContents = evt.target.result;
    textContents = textContents.replace(/\s/g, "");
    //console.log(textContents);
    loadedDataArray = textContents.split("&");
    loaded1X = loadedDataArray[0].split(",");
    loaded1Y = loadedDataArray[1].split(",");
    //Target_Name
    Target_Name = file.name;
    Target_Name_c = Target_Name.split(".");
    document.getElementById("Target_Name").innerHTML = Target_Name_c[0];
    if (typeof loaded1X !== "undefined") {
      $("#UpperCanvasGraph").show();
      document.getElementById("myDrawCanvas").style.display = "none";
      plotGraph(UCGctx, UCG, UCR_Huectx, UIC_ctx);
    }
  };
  reader.readAsText(file);
}
//***********************************************//

var readCFileBtn = document.getElementById("read-Cfile");
readCFileBtn.addEventListener("click", function () {
  console.log("read-Cfile clicked");
  var inputCFile = document.getElementById("input-Cfile");
  readCFile(inputCFile.files[0]);
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var input_Cfile = document.getElementById("input-Cfile");
input_Cfile.addEventListener("click", function () {
  var inputCFile = document.getElementById("input-Cfile");
  readCFile(inputCFile.files[0]);
});
//////////////////////////////////////////////////
//***********************************************//
function readCFile(file) {
  console.log("readCFile");
  var reader = new FileReader();
  reader.onload = function (evt) {
    var textContents = evt.target.result;
    textContents = textContents.replace(/\s/g, "");
    //console.log(textContents);
    loadedDataArray = textContents.split("&");
    loaded2X = loadedDataArray[0].split(",");
    loaded2Y = loadedDataArray[1].split(",");
    //Comparison_Name
    Comparison_Name = file.name;
    Comparison_Name_c = Comparison_Name.split(".");
    document.getElementById("Comparison_Name").innerHTML = Comparison_Name_c[0];
    if (typeof loaded2X !== "undefined") {
      plotGraph(LCGctx, LCG, LCR_Huectx, LIC_ctx);
    }
  };
  reader.readAsText(file);
}
//***********************************************//
//***********************************************//
/*function readFile(file) {
  var reader = new FileReader();
  reader.onload = function (evt) {
    var textContents = evt.target.result;
    loadedDataArray = textContents.split("&");
    loaded1X = loadedDataArray[0].split(",");
    loaded1Y = loadedDataArray[1].split(",");
     plotGraph(UCGctx,UCG,UCR_Huectx,UIC_ctx);
  };
  reader.readAsText(file);
}*/
//***********************************************//
//***********************************************//
//////////////////////////////////////////////////
initialLineHdf();
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// END OF Script by Aladdin
//////////////////////////////////////////////////
