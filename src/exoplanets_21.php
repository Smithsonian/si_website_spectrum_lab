<!DOCTYPE html>
<html lang="en">
<head>
<title>Exploring Exoplanets Spectrum Tool</title>
<!--Based of 23_8  And 24_8-->
<meta charset="utf-8">
<meta name="author" content=" Science Education Department at the Harvard-Smithsonian Center for Astrophysics">
<meta name="author" content="Alaalden Ibrahim">
<meta content="DIY planet search,planet search,planets search,exoplanet, super earth, extrasolar planet, nasa, kepler, alien planet, another earth, new planet, planets outside our solar system, planetquest, hot jupiter, alien earth" http-equiv="keywords">
<meta content="NASA's portal for planet hunters to search for new Planets and Earths, and more." name="description">
<!--****************************************--> 
<!--****************************************-->
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--****************************************--> 
<!--****************************************-->
<link rel="stylesheet" href="includes/AI_common/Bootstrap/4.5.0/css/bootstrap.min.css">
<script src="includes/AI_common/js/jquery/3.5.1/jquery.min.js"></script> 
<script src="includes/AI_common/Bootstrap/4.5.0/js/popper.min.js"></script> 
<script src="includes/AI_common/Bootstrap/4.5.0/js/bootstrap.min.js"></script> 
<!--****************************************-->
<link type="text/css" rel="stylesheet" href="includes/AI_common/css/spectrum_styles_exoplanets.css">
<!--****************************************-->
<link href="includes/AI_common/css/fontawesome/all.css" rel="stylesheet">
<!--load all styles --> 
<!--****************************************-->
<!--****************************************-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N4BDY9ZWS8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N4BDY9ZWS8');
</script>
<!--****************************************--> 
</head>
<!--****************************************-->
<body>
<!--****************************************--> 
<!--****************************************-->

<div class="jumbotron text-center spectrum_banner" style="margin-bottom:0">
  <h1>Spectrum Lab</h1>
  <p>Exploring the world of color</p>
</div>
<nav class="site-header sticky-top py-1">
  <div class="container d-flex flex-column flex-md-row justify-content-between">
      <!--<a class="py-2 d-none d-md-inline-block" href="#">Home</a>-->
      <a class="py-2 d-none d-md-inline-block" href="session2.html">Session 2</a>
      <a class="py-2 d-none d-md-inline-block" href="session3.html">Session 3</a>
      <a class="py-2 d-none d-md-inline-block" href="session4.html">Session 4</a>
      <a class="py-2 d-none d-md-inline-block" href="fishtank.html">Fish Tank</a>
      <a class="py-2 d-none d-md-inline-block active" href="exoplanets.html">ExoPlanets</a>
      <a class="py-2 d-none d-md-inline-block" href="playground.html">Playground</a> </div>
</nav>
<!--****************************************--> 
<!--****************************************-->
<div class="container-fluid position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style="min-height: 850px;"> 
  <!--****************************************--> 
  <!--***********************************--> 
  <!--***********************************-->
  <div class="row mb-3"  style="display: none;">
    <div class="col-md-4 themed-grid-col2_0"> </div>
    <!--****************************************-->
    <div class="col-md-8 themed-grid-col"> 
      <!--****************************************-->
      <div class="Select_wrapper">
        <div  id="five">
          <div class="col">
            <input type="file" id="input-Tfile" class="" name="Tfilename" accept=".csv , .txt">
          </div>
        </div>
        <!--***********************************-->
        <div  id="six">
          <button id="read-Tfile" class="btn btn-primary">Read File</button>
        </div>
      </div>
      <!--****************************************--> 
    </div>
    <!--****************************************--> 
  </div>
  <!--***********************************--> 
    
    <?php
    echo "Working";
    ?>
  <!--***********************************-->
  <div class="row mb-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 themed-grid-col2_0">
      <div class="row mb-3" style="margin-bottom: 0.1rem!important;">
        <div class="col-md-2 themed-grid-col" style="font-size: 24px;margin-top: 10px;">
          <div class="rounded-circle Tutorial_circlebtn" id="intro_icon"> <i class="fas fa-info" style="cursor: pointer;" onClick="openInstructions()"></i> </div>
            
          <!--****************************************-->
          <!--****************************************--> 
        </div>
        <div class="col-md-9 themed-grid-col disabledbutton" id="Challenge_Buttons_Div"><span>Challenge</span>
          <button id="Challenge1_btn" class="btn btn-light btn-circle btn-circle-sm m-1 border border-dark" onClick="ShowChallenge(1,1)">1</button>
          <button id="Challenge2_btn" class="btn btn-light btn-circle btn-circle-sm m-1 border border-dark" onClick="ShowChallenge(2,1)">2</button>
          <button id="Challenge3_btn" class="btn btn-light btn-circle btn-circle-sm m-1 border border-dark" onClick="ShowChallenge(3,1)">3</button>
          <button id="Challenge4_btn" class="btn btn-light btn-circle btn-circle-sm m-1 border border-dark" onClick="ShowChallenge(4,1)">4</button>
        </div>
      </div>
      <div class="Challenge_Text px-2">
        <div id="Intro_Challenge">
            <h4 class="challenge_h1">
                
                Exploring Exoplanets<br>Tutorial: Modeling exoplanet atmospheres
            
            </h4>
            <div id="Intro_Challenge_Text0">
          
            <h4>Astronomers predict the theoretical spectrum they would expect to observe under ideal conditions.</h4>
            <p class="text-center">
          <img id="Intro_Challenge_img0" src="includes/AI_common/images/HazyHotJupiter_W500.png" class="rounded" alt="Hazy Hot Jupiter" style="width: 50%; height: 50%;">
            </p>
            <p>Each predictive model is specific to a particular set of atmospheric conditions. </p>
            <p>Let’s explore some of these models before analyzing the real data.</p>
            </div>
            
            <div id="Intro_Challenge_Text1">
            <h4>Model 1 - Clear Skies</h4>
<p>Compare the predicted features in the Clear Hot Jupiter Model to the laboratory atomic and molecular spectra</p>
                <p class="text-center">
          <img id="Intro_Challenge_img1" src="includes/AI_common/images/Clear_Hot_Jupiter_W500.png" class="rounded" alt="Hazy Hot Jupiter" style="width: 50%; height: 50%;">
            </p>
               <p> Select the comparison atoms and molecules in the bottom panel and complete the Spectrum Notebook Questions for the Tutorial.</p>

             </div>
            
            <div id="Intro_Challenge_Text2">
            <h4>Clear, Cloudy, or Hazy? </h4>
<p>How do the models predict that different atmospheric conditions affect an exoplanet spectrum?</p>
                 <p class="text-center">
          <img id="Intro_Challenge_img1" src="includes/AI_common/images/Clouds_Image_W500.png" class="rounded" alt="Hazy Hot Jupiter" style="width: 50%; height: 50%;">
            </p>
               <p> Based on the tutorial, continue completing the Spectrum Notebook Questions.</p>
            </div>
            <div id="Intro_Challenge_Text3">
                <h4>Clear, Cloudy, or Hazy? </h4>
<p>How do the models predict that different atmospheric conditions affect an exoplanet spectrum?</p>

<h4>Model 3 - Obscuring Hazes</h4>
 <p class="text-center">
          <img id="Intro_Challenge_img1" src="includes/AI_common/images/HazyHotJupiter_W500.png" class="rounded" alt="Hazy Hot Jupiter" style="width: 50%; height: 50%;">
            </p>
<p>Based on the tutorial, continue completing the Spectrum Notebook Questions.</p>
                
                
            </div>
            <div id="Intro_Challenge_Text4">
            </div>
        </div>
        <!--============================================-->
        <div id="Challenge1_Text">
            
          <h3 class="challenge_h1">Exploring Exoplanets.</h3>
           <h4 class="challenge_h1">Challenge 1:</h4>
            <h4>WASP-17b Case Study:</h4>
            <h4>How does real exoplanet spectral data compare to predicted models?</h4>
            <p>The top panel shows the transmission spectrum, captured by NASA’s Hubble Space Telescope, of a Hot Jupiter named WASP-17b.</p>
            <p>The bottom panel shows the predicted model transmission spectrum for a Clear Hot Jupiter.</p>
            <p>How do these spectra compare? Use the comparison dropdown menu to view different exoplanet models and different atoms and molecules. Can you draw any conclusions about what’s in the atmosphere of WASP-17b?</p>
            <p><small>Write your answers in your <strong>Spectrum Notebook.</strong></small></p>
        </div>
        <!--============================================-->
        <div id="Challenge2_Text">
          <h3 class="challenge_h1">Exploring Exoplanets.</h3>
           <h4 class="challenge_h1">Challenge 2:</h4>
            <h4>Comparative Exoplanetology!</h4>
            <h4>How do atmospheric conditions vary among exoplanets?</h4>
            <p>Now that you’ve examined WASP-17b, let’s look at some other exoplanets. In the top graph, choose a transmission spectrum of any of the other Exoplanet targets.</p>
            <p>Answer questions about it in your Spectrum Notebook.</p>
            <p><small>Write your answers in your <strong>Spectrum Notebook.</strong></small></p>
        </div>
        <!--============================================-->
        <div id="Challenge3_Text">
         <h3 class="challenge_h1">Exploring Exoplanets.</h3>
           <h4 class="challenge_h1">Challenge 3:</h4>
            <h4>Comparative Exoplanetology!</h4>
            <h4>How do atmospheric conditions vary among exoplanets?</h4>
            <p>Choose a second transmission spectrum of any of the other Exoplanet targets.</p>
            <p>Answer questions about it in your Spectrum Notebook.</p>
            <p><small>Write your answers in your <strong>Spectrum Notebook.</strong></small></p>

            
        </div>
        <!--============================================-->
        <div id="Challenge4_Text">
         <h3 class="challenge_h1">Exploring Exoplanets.</h3>
           <h4 class="challenge_h1">Challenge 4:</h4>
            <h4>You’re the Exoplanet Researcher!</h4>
            <h4>What exoplanet should NASA’s James Webb Space Telescope study?</h4>
            <p>Your <strong>Spectrum Notebook.</strong> gives you guidance for creating a hypothetical proposal to NASA based on your questions about the Exoplanets you have examined.</p>
            <p>Use this workspace to make decisions for your proposal, and to capture screenshots to describe the spectrum features for which you hope to get better data.</p>

        </div>
        <!--============================================-->
        <div id="Challenge5_Text">
            <h1 class="challenge_h1">Congratulations.</h1>
<h4>You’re done!</h4>
<p>You have applied your Spectrum Lab analysis skills in the same way that professional astronomers are doing in their search for other worlds and other Earths!</p>
<p>
Join your class to discuss your proposal and questions you may have about how spectra can tell us about distant alien worlds.
</p>
        </div>
        <!--============================================-->
        <!--============================================-->
        
        <p class="text-right challenge_btn_p">
            <a id="challenge_btn" style="width: 170px;" class="btn btn-primary pull-right" href="javascript:void(0);" onClick="ShowChallenge(1,1)">START CHALLENGE 1</a>
        </p>
      </div>
      <!--****************************************--> 
      <!--****************************************--> 
    </div>
    <!--*****************col-md-4 themed-grid-col******************-->
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 themed-grid-col"> 
      <div id="All_Tools_And_Controls">
      <!--****************************************--> 
      <!--***** The Tools Code Starts Here    ****-->
      <!--****************************************--> 
      <div id="upperToolrow"> </div>
      <div class="row"  id="UpperGraphRow">
        <!--<div class="col-sm-6 col-md-12 col-lg-12 col-xl-4 themed-grid-col1_0"  id="upperToolright">-->
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 themed-grid-col1_0" >
          
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h4>Target Object</h4>
                  <img class="Harry_sun_spectrum"  width="180" height="160" id="UpperImg" src="includes/AI_common/images/Harry_sun_spectrum.jpg" alt="Image Holder icon"> </div>
                <div class="col-1"> 
                  <!--***********************************-->
                  <div id="Category_box1"  style="position: absolute; overflow: hidden; background-color: transparent; border: 0;"> <i class="fas fa-search" id="Cat1_folder"></i></div>
                </div>
                <div class="col-11">
                  <div class="row">
                    <div class="col-12"> 
                      <!--***********************************-->
                      <select name="Targets0" id="Targets0Filters"  class="disabled custom-select" onchange="SeacrhFor(this.value,'Category1')" style=" width: 70%;">
                        <option value="">Select Category</option>
                        <option value="Lamps">Lamps</option>
                        <option value="Stars">Stars</option>
                        <option value="Nature">Nature</option>
                        <option value="Atoms_and_Molecules">Atoms and Molecules</option>
                        <option value="Planets">Planets</option>
                        <option value="Exoplanets">Exoplanets</option>
                        <option value="Exoplanet_Models">Exoplanet Models</option>
                        <option value="Thermal_Spectra">Thermal Spectra</option>
                        <option value="Fishtank_Lights">Fish Tank</option>
                        <option value="Draw">Draw</option>
                      </select>
                    </div>
                    <div class="col-12"> 
                      <!--***********************************-->
                      <select name="Targets1" id="Targets1Filters"  class="disabled custom-select" onchange="SelectTarget(this.value,'Targets1')" style=" width: 70%;">
                        <option value="">Select Sub Category</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--***********************************--> 
        </div>
        <div class="col-sm-6 col-md-12 col-lg-12 col-xl-8 themed-grid-col1_1" id="upperToolleft"> 
          <!--***********************************-->
          <h5 class="Target_Name" id="Target_Name"></h5>
          <!--***********************************-->
          <div class="UpperCanvasDiv"> 
            <!--***********************************-->
            <div id="UpperRainbowActiveDiv" class="Tutorial_activeSection"></div>
            <!--***********************************-->
            <canvas class="UpperCanvasRainbow" id="UpperCanvasRainbow" style="position: absolute;top: 10px;left: 40px; z-index: 1; display: block;"  width="610" height="60"></canvas>
            <!--***********************************-->
            <canvas id="U_D_CRH" class="TopDrawCanvasRainbowHue" style="position: absolute;top: 10px;left: 40px; z-index: 4; display: block;"  width="610" height="60"></canvas>
            <!--***********************************-->
            <canvas id="U_R_I" class="UpperRainbowrIndicator" style="position: absolute;top: 10px;left: 40px; z-index: 4; display: block;"  width="610" height="20"></canvas>
            <!--***********************************--> 
            <!--***********************************-->
            <canvas id="UpperIndicatorCanvas" width="610" height="150"  style="position: absolute;top: 70px;left: 40px; z-index: 7;" onmousemove="updateLine(event,UIC_ctx)"></canvas>
            <!--***********************************-->
            <div id="UpperGraphActiveDiv" class="Tutorial_activeSection"></div>
            
            <!--***********************************-->
            <canvas id="UpperCanvasGraph" width="610" height="150"  style="position: absolute;top: 70px;left: 40px; z-index: 5;"> </canvas>
            <!--***********************************-->
            <div id="UpperGraphImageDiv">
            <p class="text-center">
          <img src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_NoLabels_W650.png" id="UpperGraphImageHolder" alt="UpperGraphImageHolder" style="width: 615px; height: 260px;">
            </p>
            </div>
            <!--***********************************-->
            <canvas id="myDrawCanvas" width="610" height="150"  style="position: absolute;top: 70px;left: 40px; z-index: 5;" onmousedown="dragStart(event)" onmouseup="dragStop(event)" onmousemove="drawCurve(event)" onmouseout="leavingCanvas(event)"> </canvas>
            <!--***********************************-->
            <canvas id="UpperCanvasXAxis" width="630" height="30"  style="position: absolute;top: 210px;left: 20px; z-index: 5;"> </canvas>
            <!--***********************************-->
            <canvas id="UpperCanvasYAxis" width="30" height="150"  style="position: absolute;top: 70px;left: 10px; z-index: 5;"> </canvas>
            <!--***********************************-->
            <p class="text-center" id="More_Light_Upper_Div"> More Light&nbsp;&nbsp;<i class="fas fa-arrow-right"></i> </p>
            <p class="text-center" id="Wavelength_Upper_Div"> Wavelength (Microns) </p>
            <!--***********************************--> 
          </div>
          <!--End of UpperCanvasDiv--> 
          <!--****************************************-->
          <div id="overlay2" class="overlay2"></div>
          <!--****************************************-->
          <div id="Tutorial_PopUp" class="Tutorial_PopUp">
            <p id="Tutorial_arrow_up" class="Tutorial_arrow_up"> <i id="t_arrow_up" class="fas fa-play"></i></p>
            <div id="boxpopup1" class="Spectrum_box"> <!--<a onclick="closeInstructions('boxpopup1')" class="boxclose"></a>-->
              <div id="content" class=" text-center">
                <p id="Tutorial_text_p"  class="mb-0">This is a high-resolution <strong><i>model</i></strong> of the predicted transmission spectrum from a cloud-free “Hot Jupiter” exoplanet.<br/><br/>It is based on what astronomers know about planetary atmospheres and the physics and chemistry of atoms and molecules at the temperatures and pressures found in these planets.</p>
                <div id="Tutorial_btns">
                  <div id="Tutorial_backbtn" class="btn btn-primary2 my-4 text-center  mr-4" onclick="PrevSlide('','')">Back</div>
                  <div id="Tutorial_nextbtn" class="btn btn-primary2 my-4 text-center" onclick="NextSlide('second','pick')">Next</div>
                </div>
              </div>
              <!--content--> 
            </div>
            <p id="Tutorial_arrow_dn" class="Tutorial_arrow_dn"> <i id="t_arrow_dn" class="fas fa-play"></i></p>
          </div>
          <!--****************************************-->
          <!--****************************************--> 
        </div>
      </div>
      <div class="row mb-3" style="margin-bottom: 0.2rem!important;">
        <div id="Control_row_plot_units_type" class="col-md-2 themed-grid-col2_0 disabledbutton"> plot type
          <select class="custom-select mr-sm-2" id="SelectPreference" onChange="initSpectrum() ">
            <option id="Line_Chart" value="Line">Line chart</option>
            <option id="Scatter_Plot" value="Scatter">Scatter plot</option>
          </select>
        </div>
        <div id="Control_row_measurement_units" class="col-md-3 themed-grid-col2_0 disabledbutton"> measurement unit
          <select class="custom-select mr-sm-2" id="SelectWavelength" onChange="initSpectrum()">
              <option id="WL_Microns" value="Microns">Wavelength: Microns</option>
              <option id="WL_Nanometers" value="Nanometers">Wavelength: Nanometers</option>
              <option id="WL_Angstrom" value="Angstrom">Wavelength: Angstroms</option>
              <option id="WL_ElectronVolt" value="Electronvolt">Energy: Electron volts</option>
          </select>
        </div>
        <div class="col-md-7 themed-grid-col2_0"> 
          <!--***********************************-->
          <div class="slidecontainer">
            <input type="range" min="1" max="100" value="20" class="slider" id="XAxis_Range">
          </div>
          <!--***********************************--> 
        </div>
          
          <!--****************************************-->
          <!--****************************************-->
      </div>
      <div class="row" id="LowerGraphRow"  style=" visibility:hidden;">
       <!-- <div class="col-md-4 themed-grid-col3_0" id="LowerToolright"> -->
          <div class="col-md-12 themed-grid-col3_0"> 
          <!--***********************************-->
            <div style=" width: 230px;">
          <h4>Comparison Object</h4>
          <img class="Harry_sun_spectrum w-75"  width="180" height="160" id="LowerImg" src="includes/AI_common/images/Harry_sun_spectrum.jpg" alt="calendar icon"> 
                
          <!--***********************************-->
          <div id="Category_box2" data-toggle="collapse" style="position: absolute; overflow: hidden; visibility: hidden; display: none;">
              <i class="fas fa-search" id="Cat2_folder"></i>
              <i class="fa fa-globe" id="Cat2_Exoplanet_Models"  data-toggle="tooltip" data-placement="bottom" title="Exoplanet Models" onclick="SeacrhFor('Exoplanet_Models','Category2')"></i> 
              <i class="fab fa-react" id="Cat2_Atoms_and_Molecules"  data-toggle="tooltip" data-placement="bottom" title="Atoms and Molecules" onclick="SeacrhFor('Atoms_and_Molecules1','Category2')"></i> 
              <i class="fas fa-sun" id="Cat2_Solar_System" style="visibility: hidden;"  data-toggle="tooltip" data-placement="bottom" title="Solar System" onclick="SeacrhFor('Solar_System','Category2')"></i> 
          </div>
          <!--***********************************-->
            <div id="Category_box4"  style="position: absolute; overflow: hidden;">
                <i class="fas fa-search" id="Cat4_search" data-toggle="tooltip" data-placement="bottom" title="search"></i>
            </div>
          <!--***********************************-->
          <!--***********************************-->
          <div id="four" style="position:absolute;top: 220px;top: 220px;left: 0px;z-index: 3; width: 30%;">
            <select name="Targets2" id="Targets2Filters" class="custom-select" onchange="SelectTarget(this.value,'Targets2')" style=" width: 60%;">
              <option value="">Select Sub Category</option>
            </select>
          </div>
              </div>  
          <!--***********************************--> 
        <!--</div>
        <div class="col-md-8 themed-grid-col3_1" id="LowerToolleft">--> 
          <!--***********************************-->
          <h5 class="Comparison_Name" id="Comparison_Name">Comparison Object Name</h5>
          <!--***********************************-->
          <div class="LowerCanvasDiv"> 
            <!--***********************************-->
            <canvas class="LowerCanvasRainbow" id="LowerCanvasRainbow" style="position: absolute;top: 10px;left: 40px; z-index: 1; display: block;"  width="610" height="60"></canvas>
            <!--***********************************-->
            <canvas id="L_D_CRH" class="LowerCanvasRainbowHue" style="position: absolute;top: 10px;left: 40px; z-index: 4; display: block;"  width="610" height="60"></canvas>
            <!--***********************************-->
            <canvas id="L_R_I" class="LowerRainbowrIndicator" style="position: absolute;top: 10px;left: 40px; z-index: 4; display: block;"  width="610" height="20"></canvas>
            <!--***********************************--> 
            <!--***********************************-->
            <canvas id="LowerIndicatorCanvas" width="610" height="150"  style="position: absolute;top: 70px;left: 40px; z-index: 6;" onmousemove="updateLine(event,LIC_ctx)"></canvas>
            <!--***********************************--> 
            <!--***********************************-->
            <canvas id="LowerCanvasGraph" width="610" height="150"  style="position: absolute;top: 70px;left: 40px; z-index: 5;"> </canvas><!--***********************************-->
            <div id="LowerGraphImageDiv">
            <p class="text-center">
          <img src="includes/AI_common/images/Exoplanets_Cloudy_Hot_Jupiter_Model_VerticalHoriz_Lines_W650.png" id="LowerGraphImageHolder" alt="LowerGraphImageHolder" style="width: 615px; height: 260px;">
            </p>
            </div>
            <!--***********************************-->
            <canvas id="LowerCanvasXAxis" width="610" height="30"  style="position: absolute;top: 210px;left: 20px; z-index: 5;"> </canvas>
            <!--***********************************-->
            <canvas id="LowerCanvasYAxis" width="30" height="150"  style="position: absolute;top: 70px;left: 10px; z-index: 5;"> </canvas>
            <!--***********************************--> 
            <!--***********************************--> 
            <!--***********************************-->
            <p class="text-center" id="More_Light_Lower_Div"> More Light&nbsp;&nbsp;<i class="fas fa-arrow-right"></i> </p>
            <p class="text-center" id="Wavelength_Lower_Div"> Wavelength (Microns) </p>
            <!--***********************************--> 
          </div>
          <!--End of LowerCanvasDiv--> 
          <!--***********************************--> 
          <!--***********************************--> 
        </div>
      </div>
      </div>
    
      <!--****************************************--> 
      <!--*****     The Tools Code Ends Here  ****-->
      <!--****************************************--> 
      <img src="includes/AI_common/images/Blue_and_Red_Stars.png" id="Challenge1_Image_session1" alt="Blue and Red Stars">
    </div>
    <!--*****************col-md-8 themed-grid-col******************--> 
  </div>
  <!--******************row mb-3*****************--> 
  <!--****************************************--> 
  <!--***********************************--> 
  <!--***********************************-->
  <div class="row mb-3"  style="display: none;">
    <div class="col-md-4 themed-grid-col2_0"> </div>
    <!--****************************************-->
    <div class="col-md-8 themed-grid-col"> 
      <!--****************************************-->
      <div class="Select_wrapper">
        <div  id="Seven">
          <div class="col">
            <input type="file" id="input-Cfile" class="" name="Cfilename" accept=".csv , .txt">
          </div>
        </div>
        <!--***********************************-->
        <div  id="Eight">
          <button id="read-Cfile" class="btn btn-primary">Read File</button>
        </div>
      </div>
      <!--****************************************--> 
    </div>
    <!--****************************************--> 
  </div>
  <!--***********************************--> 
  <!--***********************************--> 
  <!--****************************************--> 
  <!--****************************************--> 
  <!--****************************************-->
  <div class="row mb-3" style="margin-bottom: 0.2rem!important; display: none;"> 
    <!--******************************************-->
    <div class="col-md-3 themed-grid-col2_0"> 
      <!--***********************************--> 
      Calibrations
      <select name="Targets3" id="Targets3Filters"  class="custom-select" onchange="SelectTarget(this.value,'Targets3')">
        <option value="">Select Sub Category</option>
        <option value="Calibrate1">Calibrate</option>
        <option value="Calibrate2">Calibrate2</option>
        <option value="Calibrate3">Calibrate3</option>
        <option value="Calibrate4">Calibrate4</option>
        <option value="Calibrate5">Calibrate5</option>
        <option value="Calibrate6">Calibrate6</option>
        <option value="Calibrate7">Calibrate7</option>
      </select>
      <!--***********************************--> 
    </div>
    <div class="col-md-3 themed-grid-col2_0"> Spectrum Type 
      <!--***********************************-->
      <select class="custom-select mr-sm-2" id="SelectSpectrumType" onChange="initSpectrum() ">
        <option id="continuous_line_spectrum" value="Continuous">Continuous Line Spectrum</option>
        <option id="continuous_spectrum" value="Continuous">Continuous Spectrum</option>
        <option id="line_spectrum" value="Line">Line Spectrum</option>
      </select>
      <!--***********************************--> 
    </div>
    
    <!--***********************************-->
    <div class="col-md-2 themed-grid-col2_0"> Alpha_Range_Val
      <input type="range" min="1" max="100" value="100" class="slider" id="Alpha_Range">
      <p>Alpha Slider: <span id="Alpha_Range_Val"></span> </p>
    </div>
    <!--***********************************--> 
    <!--******************************************-->
    <div class="col-md-2 themed-grid-col2_0"> 
      <!--***********************************-->
      <div class="YAxis_Slidecontainer">
        <input type="range" min="1" max="100" value="1" class="YAxis_slider" id="YAxis_Range">
      </div>
      <div class="YAxis_Slide_Value"> <span id="Y_Axis_Slider"></span> </div>
      <!--***********************************--> 
    </div>
    <!--******************************************--> 
    
  </div>
  <!--***********************************--> 
  <!--***********************************--> 
  <!--***********************************-->
  <div style="display: none;"> 
    <!--***********************************-->
    <div style="display: none;"> <img id="rainbow" alt="" src="includes/AI_common/images/Visible_Spectrum_1.png"> <img id="rainbow2" alt="" src="includes/AI_common/images/Visible_Spectrum_1.png"> <img id="Triangle" alt="" src="includes/AI_common/images/play-button_2.png"> </div>
    <!--***********************************-->
    <p> <span id="demo3"></span> </p>
    <p> <span id="demo"></span> </p>
    <!--***********************************-->
    <div id="alphax"></div>
    <br>
    <div id="deltaX"></div>
    <p>drawIndicatorMousePos: <span id="drawIndicatorMousePos"></span> </p>
    <!--***********************************--> 
    <!--***********************************--> 
    <!--***********************************-->
    <hr>
    <!--***********************************-->
    <hr>
    <div id="MouseLocation"></div>
    <br>
    <p>X-Axis Slider: <span id="X_Axis_Slider_Val"></span> </p>
    <p>Y-Axis Slider: <span id="Y_Axis_Slider_Val"></span> </p>
    <!--***********************************--> 
  </div>
  
  <!--***********************************-->
  <!--***********************************--> 
</div>
<!--***********************************--> 
<!--***********************************--> 
<!--****************************--> 
<!--************* Row  ****************--> 
<!--***********************************--> 
<!--***********************************--> 
<!--***********************************-->
<hr>
<!--***********************************-->
<footer class="container py-5"> 
  <!--***********************************--> 
  <img src="includes/AI_common/images/CfA_Logo_Vertical_CMYK_W400.png" alt="NASA logo" class="logo1"> 
  <!--***********************************--> 
  <!--  <hr>-->
  <div class="row">
    <div class="col-12 col-md"> <small class="d-block mb-3 text-muted">© 2020<br>
      CENTER FOR ASTROPHYSICS  |  HARVARD &amp; SMITHSONIAN<br>
      60 GARDEN STREET, CAMBRIDGE, MA 02138 </small> </div>
  </div>
</footer>
<!--****************************************--> 
<script src="includes/AI_common/js/AI_graphing_exoplanets_21.js"></script> 
<script src="includes/AI_common/js/AI_tutorial_exoplanets_21.js"></script> 
<!--****************************************--> 
<script>
/*************************************/
    initial_tutorial() 
/*************************************/
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
/*************************************/ 
/*************************************/    
$(document).ready(function(){
    
    /*************************************/    
  $("#Category_box1").mouseenter(function(){
    $("#Category_box1").animate({width: "260px"});
    
      
  });
    /*************************************/    
  $("#Category_box2").mouseenter(function(){
    $("#Category_box2").animate({width: "260px"});
     
      $('#Cat2_folder').css('visibility','hidden');
  });
});
/*************************************/
</script>
</body>
</html>
