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
var Tutorial_text01="This bar represents the <strong>spectrum image</strong>—what you see through a spectroscope when a light source is split by a diffraction grating into its component wavelengths (or colors, or energies).";
var Tutorial_text02="This is the <strong>spectrum graph</strong>, which is a plot of the spectrum. It shows how much light the source emits or reflects at a given wavelength (or color, or energy). The spectrum is taken at one moment in time.";
var Tutorial_text03="The <strong>x-axis</strong> tells you the <strong>wavelength</strong> of the light at a given brightness level. For simplicity, the tool’s x-axis will always use microns as the wavelength unit.<br/><small>(Sometimes spectra are displayed with energy as the x-axis. Recall that when wavelength increases, energy decreases.)</small>";
var Tutorial_text04="The <strong>y-axis</strong> on a spectrum graph tells you the <strong>relative amount of light being emitted or reflected</strong> at each wavelength. This could also be labeled “brightness” or “intensity.” This spectrum tool scales the brightness of every source to values between 0 and 1.";
var Tutorial_text05="This is the <strong>measuring tool.</strong> This tool tells you the wavelength or energy of the light at a specific part of the spectrum.";
var Tutorial_text06="This <strong>measuring tool dropdown menu</strong> lets you choose the units (in wavelength or energy) that are reported by the measuring tool.<br/>Recall from Session 2 that photons with higher energy have shorter wavelengths than photons with lower energy.";
var Tutorial_text07="This <strong>spectrum plot dropdown menu</strong> lets you toggle whether to display the spectrum data as individual points (<strong>scatter plot</strong>) or with a line connecting the points (<strong>line chart</strong>).<br/><small>(Some spectra have high wavelength resolution and show many data points within a wavelength range. Others have low wavelength resolution and show few data points within a wavelength range. Using the scatter plot option can make it easier to see differences between data sets in spectral resolution.)</small>";
var Tutorial_text08="This slider lets you change the range of wavelengths that is plotted on the x-axis.<br/>Visible light has wavelengths that range from 0.4-0.7 microns. Ultraviolet (UV) radiation has wavelengths shorter than visible, and infrared (IR) radiation has wavelengths longer than visible.<br/>Our tool can display spectra with wavelengths from 0.2-30 microns. The image below shows the full electromagnetic spectrum, including types of light (gamma ray, x-ray, microwave, and radio) that are not shown in our tool.<p><img src=\"includes/AI_common/images/EM_spectrum_wavelengths_editedfromNASAs.jpg\" class=\"rounded\" id=\"session3_image_8\" alt=\"sun\"></p>";
var Tutorial_text09="You can click here to replay the <strong>Session 2 tutorial</strong> later if you need a refresher on this content.";
var Tutorial_text10="";
/////////////////////////////////////////////////////////////////////
var Current_Challenge="";
/////////////////////////////////////////////////////////////////////
function initial_tutorial() 
    {
        /*=======================================*/
        /*        configure the bottons          */
        /*=======================================*/
        $('#Tutorial_btns').css('padding-right','60px');
        $('#Tutorial_nextbtn').css('visibility','visible');
        $('#Tutorial_backbtn').css('visibility','hidden');
        closeInstructionsC4();
        /*=======================================*/
        /*    configure the active section       */
        /*=======================================*/
        $('#UpperRainbowActiveDiv').css('visibility','visible');
        /*=======================================*/
        /*           Change the text             */
        /*=======================================*/
        $("#challenge_Bbtn").css('visibility','hidden');
        $('#Intro_Challenge').css('visibility','hidden');
        $('#Intro_Challenge').css('display','none');
        $('#Intro_Challenge1').css('visibility','visible');
        $('#Intro_Challenge1').css('display','block');
        
        $('#Challenge1_Text').css('visibility','hidden');
        $('#Challenge1_Text').css('display','none');
        $('#Challenge1_TextD').css('visibility','hidden');
        $('#Challenge1_TextD').css('display','none');
        $('#Challenge2_Text1').css('visibility','hidden');
        $('#Challenge2_Text1').css('display','none');
        $('#Challenge2_Text2').css('visibility','hidden');
        $('#Challenge2_Text2').css('display','none');
        $('#Challenge2_Text3').css('visibility','hidden');
        $('#Challenge2_Text3').css('display','none');
        $('#Challenge3_Text').css('visibility','hidden');
        $('#Challenge3_Text').css('display','none');
        $('#Challenge4_Text').css('visibility','hidden');
        $('#Challenge4_Text').css('display','none');
        $('#Challenge5_Text').css('visibility','hidden');
        $('#Challenge5_Text').css('display','none');
        /*=======================================*/        
        for (var CB = 1; CB < 5; CB++)
            {
                $('#Challenge'+CB+'_btn').removeClass("active");
                $('#Challenge'+CB+'_Text').css('visibility','hidden');
                $('#Challenge'+CB+'_Text').css('display','none');
            }
        /*=======================================*/        
        $("#Challenge_Buttons_Div").addClass("disabledbutton");
        $("#Control_row_plot_units_type").addClass("disabledbutton");
        $("#Control_row_measurement_units").addClass("disabledbutton");
        $("#XAxis_Range").addClass("disabledbutton");
        /*=======================================*/
        
        $('#overlay2').fadeIn('fast');
        $('#Tutorial_arrow_up').css('visibility','visible');
        $('#Tutorial_arrow_dn').css('visibility','hidden');
        document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
        $("#Tutorial_nextbtn").attr("onclick","NextSlide('graph','pick')");
        /*=======================================*/
        SeacrhFor('Planets','Category1');
        SeacrhFor('Planets','Category1');
        SelectTarget('Mars','Targets1');
        SeacrhFor('Empty','Category2');
        $("#Mars_Category1").attr("selected","selected");
        SelectTarget('Mars','Targets1');
        $("#LowerGraphRow").css('visibility','hidden');
        /*=======================================*/
        document.getElementById("Category_box3").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Planets"></i>';
        document.getElementById("Category_box4").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Planets"></i>';
        
        
        /*$("#challenge_btn").css('width','170px');*/
       /* $('#challenge_btn_p').css('right','-10%');*/
        document.getElementById("challenge_btn").innerHTML ="GO TO CHALLENGE 1";
        
        $("#challenge_btn").attr("onclick","ShowChallenge(1,1)");
        $("#challenge_btn").css('visibility','hidden');
        openInstructions();
        /*=======================================*/
    }
/*====================================================*/
/*====================================================*/
function ShowChallenge(Num,Section)
{
        ////////////////////////////////////////////////   
        closeInstructionsC4(); 
        /*  Reset All Button and Set Active one     */
        var nextChallenge=1;
        $("#challenge_btn").css('visibility','visible');
        $("#challenge_Bbtn").css('visibility','hidden');
        $('#Intro_Challenge').css('visibility','hidden');
        $('#Intro_Challenge').css('display','none');
    
        $('#Intro_Challenge1').css('visibility','hidden');
        $('#Intro_Challenge1').css('display','none');
        /*$("#challenge_btn").css('width','150px');*/
        ////////////////////////////////////////////////
        /*$('#challenge_btn_p').css('right','-10%');*/
        $('#Challenge1_Image_session1').css('visibility','hidden');
        $('#Challenge1_Image_session1').css('display','none');
        $('#All_Tools_And_Controls').css('visibility','visible');
        $('#All_Tools_And_Controls').css('display','block');
        ////////////////////////////////////////////////    
        $('#Challenge1_Text').css('visibility','hidden');
        $('#Challenge1_Text').css('display','none');
        $('#Challenge1_TextD').css('visibility','hidden');
        $('#Challenge1_TextD').css('display','none');
        $('#Challenge2_Text1').css('visibility','hidden');
        $('#Challenge2_Text1').css('display','none');
        $('#Challenge2_Text2').css('visibility','hidden');
        $('#Challenge2_Text2').css('display','none');
        $('#Challenge2_Text3').css('visibility','hidden');
        $('#Challenge2_Text3').css('display','none');
        $('#Challenge3_Text').css('visibility','hidden');
        $('#Challenge3_Text').css('display','none');
        $('#Challenge4_Text').css('visibility','hidden');
        $('#Challenge4_Text').css('display','none');
        $('#Challenge5_Text').css('visibility','hidden');
        $('#Challenge5_Text').css('display','none');
    
        $('#Tutorial4_PopUp').css('display','none');
        $('#Tutorial4_PopUp').css('visibility','hidden');
        Current_Challenge=Num;
        for (var CB = 1; CB < 5; CB++)
            {
                $('#Challenge'+CB+'_btn').removeClass("active");
                $('#Challenge'+CB+'_Text').css('visibility','hidden');
                $('#Challenge'+CB+'_Text').css('display','none');
            }
    
        $('#Challenge6_Text').css('visibility','hidden');
        /*=======================================*/
        $('#Challenge6_Text').css('display','none');
        /*=======================================*/
        $('#Challenge'+Num+'_btn').addClass("active");
        /*=======================================*/
        $('#Challenge'+Num+'_Text').css('visibility','visible');
        /*=======================================*/
        $('#Challenge'+Num+'_Text').css('display','block');    
        /*=======================================*/
        if(Num==1)
            {
                initialLineHdf();
                if(Section==1)
                    { 
                        $('#LowerGraphRow').css('visibility','hidden');
                        SeacrhFor('Empty','');
                        $('#Challenge1_Text').css('visibility','visible');
                        $('#Challenge1_Text').css('display','block');
                        $('#All_Tools_And_Controls').css('visibility','hidden');
                        $('#All_Tools_And_Controls').css('display','none');
                        $('#Challenge1_Image_session1').css('visibility','visible');
                        $('#Challenge1_Image_session1').css('display','block');
                        $("#challenge_btn").attr("onclick","ShowChallenge(1,2)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO DISCUSSION";
                    }
                else if(Section==2)
                    {
                        
                        $('#Challenge1_Text').css('visibility','hidden');
                        $('#Challenge1_Text').css('display','none');
                        $('#Challenge1_TextD').css('visibility','visible');
                        $('#Challenge1_TextD').css('display','block');
                        $('#All_Tools_And_Controls').css('visibility','hidden');
                        $('#All_Tools_And_Controls').css('display','none');
                        $('#Challenge1_Image_session1').css('visibility','hidden');
                        $('#Challenge1_Image_session1').css('display','none');
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,1)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO CHALLENGE 2";
                    }
            }
        /*=======================================*/
        else if(Num==2)
            {
                initialLineHdf();
                $('#LowerGraphRow').css('visibility','hidden');
                /*=======================================*/
                if(Section==1)
                    {   
                        $('#All_Tools_And_Controls').css('visibility','visible');
                        $('#All_Tools_And_Controls').css('display','block');
                        $('#Challenge2_Text1').css('visibility','visible');
                        $('#Challenge2_Text1').css('display','block');
                        $('#C2P1_Comment1').css('visibility','visible');
                        $('#C2P1_Comment1').css('display','block');
                        $('#Challenge1_Image_session1').css('visibility','hidden');
                        $('#Challenge1_Image_session1').css('display','none');
                        document.getElementById("C2P1_StarType").innerHTML ="our Sun.";
                        document.getElementById("C2P1_StarName1").innerHTML ="<strong><i>Sun</i></strong>";
                        SeacrhFor('Stars','Category1');SeacrhFor('Stars','Category1');
                        SelectTarget('sun_ref_colina96','Targets1');
                        document.getElementById("Category_box3").innerHTML ="<i class=\"fas fa-sun\" id=\"Cat1_Stars\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stars\" onclick=\"SeacrhFor('Stars','Category1')\"></i>";
                        document.getElementById('Targets1Filters').innerHTML='<option value="">Sun</option>';
                        /////////////////////////////////////////////////
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,2)");
                        /*$("#challenge_btn").css('width','170px');*/
                        document.getElementById("challenge_btn").innerHTML ="GO TO M STAR";
                        /////////////////////////////////////////////////
                        
                        
                    }
                else if (Section==2)
                    {
                        $('#Challenge2_Text1').css('visibility','visible');
                        $('#Challenge2_Text1').css('display','block');
                        $('#C2P1_Comment1').css('visibility','hidden');
                        $('#C2P1_Comment1').css('display','none');
                        
                        document.getElementById("C2P1_StarType").innerHTML ="an <strong>M</strong> star.";
                        document.getElementById("C2P1_StarName1").innerHTML ="<strong><i>M</i></strong> star";
                        SelectTarget('M_Star','Targets1');
                        document.getElementById('Targets1Filters').innerHTML='<option value="">M Star</option>';
                        /////////////////////////////////////////////////
                        /*$("#challenge_btn").css('width','170px');*/
                        $("#challenge_Bbtn").css('visibility','visible');
                        document.getElementById("challenge_Bbtn").innerHTML ="BACK TO SUN";
                        $("#challenge_Bbtn").attr("onclick","ShowChallenge(2,1)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO B STAR";
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,3)");                        
                        /////////////////////////////////////////////////
                    }
                else if (Section==3)
                    {
                        
                        $('#Challenge2_Text1').css('visibility','visible');
                        $('#Challenge2_Text1').css('display','block');
                        $('#C2P1_Comment1').css('visibility','hidden');
                        $('#C2P1_Comment1').css('display','none');
                        document.getElementById("C2P1_StarType").innerHTML ="a <strong>B</strong> star.";
                        document.getElementById("C2P1_StarName1").innerHTML ="<strong><i>B</i></strong> star";
                        SelectTarget('B_Star','Targets1');
                        document.getElementById('Targets1Filters').innerHTML='<option value="">B Star</option>';
                        /////////////////////////////////////////////////
                        $("#challenge_Bbtn").css('visibility','visible');
                        document.getElementById("challenge_Bbtn").innerHTML ="BACK TO M STAR";
                        $("#challenge_Bbtn").attr("onclick","ShowChallenge(2,2)");
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,4)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO DISCUSSION";
                        /////////////////////////////////////////////////
                    }
                else if (Section==4)
                    {
                        
                        $('#Challenge2_Text1').css('visibility','hidden');
                        $('#Challenge2_Text1').css('display','none');
                        $('#Challenge2_Text2').css('visibility','visible');
                        $('#Challenge2_Text2').css('display','block');
                        $('#All_Tools_And_Controls').css('visibility','hidden');
                        $('#All_Tools_And_Controls').css('display','none');
                        
                        document.getElementById("C2P1_StarType").innerHTML ="a different type of star (a B star—but again, don’t worry about what the letter means).";
                        document.getElementById("C2P1_StarName1").innerHTML ="<i>B</i> star";
                        SelectTarget('B_Star','Targets1');
                        document.getElementById('Targets1Filters').innerHTML='<option value="">B Star</option>';
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,5)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO PART II";
                    }
                else if (Section==5)
                    {
                        
                        $('#Challenge2_Text1').css('visibility','hidden');
                        $('#Challenge2_Text1').css('display','none');
                        $('#Challenge2_Text2').css('visibility','hidden');
                        $('#Challenge2_Text2').css('display','none');
                        $('#Challenge2_Text3').css('visibility','visible');
                        $('#Challenge2_Text3').css('display','block');
                        $('#All_Tools_And_Controls').css('visibility','visible');
                        $('#All_Tools_And_Controls').css('display','block');
                        //////////////////////////////////////////////////////
                        document.getElementById("C2P2_StarType").innerHTML ="Sun.";
                        document.getElementById("C2P2_StarName1").innerHTML ="Sun";
                        document.getElementById("C2P2_StarName2").innerHTML ="Sun";
                        //////////////////////////////////////////////////////
                        SeacrhFor('Stars','Category1');SeacrhFor('Stars','Category1');
                        SelectTarget('sun_ref_colina96','Targets1');
                        document.getElementById("Category_box3").innerHTML ="<i class=\"fas fa-sun\" id=\"Cat1_Stars\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stars\" onclick=\"SeacrhFor('Stars','Category1')\"></i>";
                        document.getElementById('Targets1Filters').innerHTML='<option value="">Sun</option>';
                        /////////////////////////////////////////////////
                        SeacrhFor('Thermal_Spectra','Category2');
                        document.getElementById("Comparison_Name").innerHTML ="";
                        document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                        document.getElementById("Category_box4").innerHTML ="<i class=\"fas fa-thermometer-three-quarters\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                        //Thermal_Spectra                
                        document.getElementById('Targets2Filters').innerHTML='<option value="">Select Sub Category</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="450K_blackbody_Category2" value="450K_blackbody">450 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="2500K_blackbody_Category2" value="2500K_blackbody">2,500 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="5800K_blackbody_Category2" value="5800K_blackbody">5,800 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="9000K_blackbody_Category2" value="9000K_blackbody">9,000 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="15000K_blackbody_Category2" value="15000K_blackbody">15,000 K Blackbody</option>';
                        //////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////
                        $('#LowerGraphRow').css('visibility','visible');
                        //////////////////////////////////////////////////////
                        
                        
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,6)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO M STAR";
                    }
                else if (Section==6)
                    {
                        
                        $('#Challenge2_Text1').css('visibility','hidden');
                        $('#Challenge2_Text1').css('display','none');
                        $('#Challenge2_Text2').css('visibility','hidden');
                        $('#Challenge2_Text2').css('display','none');
                        $('#Challenge2_Text3').css('visibility','visible');
                        $('#Challenge2_Text3').css('display','block');
                        $('#All_Tools_And_Controls').css('visibility','visible');
                        $('#All_Tools_And_Controls').css('display','block');
                        //////////////////////////////////////////////////////
                        document.getElementById("C2P2_StarType").innerHTML ="M star.";
                        document.getElementById("C2P2_StarName1").innerHTML ="M star";
                        document.getElementById("C2P2_StarName2").innerHTML ="M star";
                        //////////////////////////////////////////////////////
                        SelectTarget('M_Star','Targets1');
                        document.getElementById('Targets1Filters').innerHTML='<option value="">M Star</option>';
                        document.getElementById("Category_box3").innerHTML ="<i class=\"fas fa-sun\" id=\"Cat1_Stars\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stars\" onclick=\"SeacrhFor('Stars','Category1')\"></i>";
                        /////////////////////////////////////////////////
                        SeacrhFor('Thermal_Spectra','Category2');
                        document.getElementById("Comparison_Name").innerHTML ="";
                        document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                        document.getElementById("Category_box4").innerHTML ="<i class=\"fas fa-thermometer-three-quarters\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                        //Thermal_Spectra                
                        document.getElementById('Targets2Filters').innerHTML='<option value="">Select Sub Category</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="450K_blackbody_Category2" value="450K_blackbody">450 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="2500K_blackbody_Category2" value="2500K_blackbody">2,500 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="5800K_blackbody_Category2" value="5800K_blackbody">5,800 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="9000K_blackbody_Category2" value="9000K_blackbody">9,000 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="15000K_blackbody_Category2" value="15000K_blackbody">15,000 K Blackbody</option>';
                        //////////////////////////////////////////////////////
                        $('#LowerGraphRow').css('visibility','visible');
                        //////////////////////////////////////////////////////
                        $("#challenge_Bbtn").css('visibility','visible');
                        document.getElementById("challenge_Bbtn").innerHTML ="BACK TO SUN";
                        $("#challenge_Bbtn").attr("onclick","ShowChallenge(2,5)");
                        //////////////////////////////////////////////////////                        
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,7)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO B STAR";
                        //////////////////////////////////////////////////////
                    }
                else if (Section==7)
                    {
                        
                        $('#Challenge2_Text1').css('visibility','hidden');
                        $('#Challenge2_Text1').css('display','none');
                        $('#Challenge2_Text2').css('visibility','hidden');
                        $('#Challenge2_Text2').css('display','none');
                        $('#Challenge2_Text3').css('visibility','visible');
                        $('#Challenge2_Text3').css('display','block');
                        $('#All_Tools_And_Controls').css('visibility','visible');
                        $('#All_Tools_And_Controls').css('display','block');
                        //////////////////////////////////////////////////////
                        document.getElementById("C2P2_StarType").innerHTML ="B star.";
                        document.getElementById("C2P2_StarName1").innerHTML ="B star";
                        document.getElementById("C2P2_StarName2").innerHTML ="B star";
                        //////////////////////////////////////////////////////
                        SelectTarget('B_Star','Targets1');
                        document.getElementById('Targets1Filters').innerHTML='<option value="">B Star</option>';
                        document.getElementById("Category_box3").innerHTML ="<i class=\"fas fa-sun\" id=\"Cat1_Stars\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stars\" onclick=\"SeacrhFor('Stars','Category1')\"></i>";
                        /////////////////////////////////////////////////
                        SeacrhFor('Thermal_Spectra','Category2');
                        document.getElementById("Comparison_Name").innerHTML ="";
                        document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                        document.getElementById("Category_box4").innerHTML ="<i class=\"fas fa-thermometer-three-quarters\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                        //Thermal_Spectra                
                        document.getElementById('Targets2Filters').innerHTML='<option value="">Select Sub Category</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="450K_blackbody_Category2" value="450K_blackbody">450 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="2500K_blackbody_Category2" value="2500K_blackbody">2,500 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="5800K_blackbody_Category2" value="5800K_blackbody">5,800 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="9000K_blackbody_Category2" value="9000K_blackbody">9,000 K Blackbody</option>';
                        document.getElementById('Targets2Filters').innerHTML+='<option id="15000K_blackbody_Category2" value="15000K_blackbody">15,000 K Blackbody</option>';
                        //////////////////////////////////////////////////////
                        $('#LowerGraphRow').css('visibility','visible');
                        //////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////
                        $("#challenge_Bbtn").css('visibility','visible');
                        document.getElementById("challenge_Bbtn").innerHTML ="BACK TO M STAR";
                        $("#challenge_Bbtn").attr("onclick","ShowChallenge(2,6)");
                        //////////////////////////////////////////////////////
                        $("#challenge_btn").attr("onclick","ShowChallenge(3,1)");
                        document.getElementById("challenge_btn").innerHTML ="GO TO CHALLENGE 3";
                        //////////////////////////////////////////////////////
                    }
                
            }
        /*=======================================*/
        else if(Num==3)
            {
                /*=======================================*/
                $('#Challenge3_Text').css('visibility','visible');
                $('#Challenge3_Text').css('display','block');
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                initialLineHdf();
                //////////////////////////////////////////////////////
                SeacrhFor('Lamps','Category1');
                SelectTarget('Incandescent_Bulb','Targets1');
                document.getElementById("Category_box3").innerHTML ="<i class=\"fab fa-medapps\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                document.getElementById('Targets1Filters').innerHTML='<option value="">Incandescent bulb</option>';
                
                SelectTarget('Incandescent_Bulb','Targets1');
                //////////////////////////////////////////////////////
                SeacrhFor('Thermal_Spectra','Category2');
                document.getElementById("Comparison_Name").innerHTML ="";
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById("Category_box4").innerHTML ="<i class=\"fas fa-thermometer-three-quarters\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                //Thermal_Spectra                
                document.getElementById('Targets2Filters').innerHTML='<option value="">Select Sub Category</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="450K_blackbody_Category2" value="450K_blackbody">450 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="1200K_blackbody_Category2" value="1200K_blackbody">1,200 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="2500K_blackbody_Category2" value="2500K_blackbody">2,500 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="5800K_blackbody_Category2" value="5800K_blackbody">5,800 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="15000K_blackbody_Category2" value="15000K_blackbody">15,000 K Blackbody</option>';
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                $('#LowerGraphRow').css('visibility','visible');
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                $('#LowerGraphRow').css('visibility','visible');
                //////////////////////////////////////////////////////
                $("#challenge_btn").attr("onclick","ShowChallenge(4,1)");
                document.getElementById("challenge_btn").innerHTML ="GO TO CHALLENGE 4";
                /*=======================================*/                
            }
        else if(Num==4)
            {
                document.getElementById("XAxis_Range").value=50;
                //////////////////////////////////////////////////////
                initialLineHdf();
                //////////////////////////////////////////////////////
                SeacrhFor('Planets','Category1');
                SelectTarget('Earth','Targets1');
                document.getElementById("Category_box3").innerHTML ="<i class=\"fa fa-globe\" id=\"Cat1_Planets\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Planets\"></i>";
                document.getElementById('Targets1Filters').innerHTML='<option value="">Earth Emission</option>';
                SelectTarget('Earth','Targets1');
                //////////////////////////////////////////////////////
                /*=======================================*/
                document.getElementById("Comparison_Name").innerHTML ="";
                SeacrhFor('Thermal_Spectra','Category2');
                //////////////////////////////////////////////////////
                
                document.getElementById("Category_box4").innerHTML ="<i class=\"fas fa-thermometer-three-quarters\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                //Thermal_Spectra
                document.getElementById('Targets2Filters').innerHTML='<option value="">Select Sub Category</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="230K_blackbody_Category2" value="230K_blackbody">230 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="312K_blackbody_Category2" value="312K_blackbody">312 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="450K_blackbody_Category2" value="450K_blackbody">450 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="1500K_blackbody_Category2" value="1500K_blackbody">1,500 K Blackbody</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="5800K_blackbody_Category2" value="5800K_blackbody">5,800 K Blackbody</option>';
                /*=======================================*/
                $('#Tutorial_PopUpC4').animate({'left':'16.2%'}, 500, function() {});
                /*=======================================*/
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/
                $("#challenge_btn").attr("onclick","ShowChallenge(5,1)");
                /*$('#challenge_btn_p').css('right','-18%');*/
                
                document.getElementById("challenge_btn").innerHTML ="FINISH";                
                /*=======================================*/
            }
        else if(Num==5)
            {
                /*=======================================*/
                $('#All_Tools_And_Controls').css('visibility','hidden');
                $('#All_Tools_And_Controls').css('display','none');
                $('#Challenge6_Text').css('visibility','hidden');
                /*=======================================*/
                $('#Challenge6_Text').css('display','block');
                $("#challenge_btn").css('visibility','hidden');
            }
        else
            {
                
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/
                document.getElementById("challenge_btn").innerHTML ="NEXT CHALLENGE";
                /*=======================================*/
                if(Num<4 && Num>0)
                    {
                        nextChallenge=Num+1;
                        $("#challenge_btn").attr("onclick","ShowChallenge("+nextChallenge+",1)");
                    }
            }
        
        /*=======================================*/
    
}
/*====================================================*/
/*====================================================*/
function NextSlide(Choice,pick) 
	{
		//console.log('NextSlide('+Choice+')');
		switch(Choice){
          case "rainbow":
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#Tutorial_arrow_dn').css('visibility','hidden');
                $('#upperToolright').addClass("Tutorial_active_rightSection");
                $('#upperToolleft').addClass("Tutorial_active_leftSection");
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                /*=======================================*/
                /*           Change the text             */
                /*=======================================*/
                document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
                $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'300px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'24px'}, 500, function() {});
          break;
          case "graph":
                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('rainbow','pick')");
                $('#Tutorial_btns').css('padding-right','0px');
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('wavelength','pick')");
                $('#Tutorial_backbtn').css('visibility','visible');
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                $('#UpperGraphActiveDiv').css('visibility','visible');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'620px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'255px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "wavelength":
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('graph','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('MoreLight','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                $('#Wavelength_Upper_Div').addClass("Active_text");
                //LowerGraphRow
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'700px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'215px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'220px'}, 500, function() {});
                /*=======================================*/
          break;
          case "MoreLight":                
                /*=======================================*/                
                /*=======================================*/                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;                
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('wavelength','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('Indicator','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Wavelength_Upper_Div').removeClass("Active_text");
                $('#More_Light_Upper_Div').addClass("Active_text");                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-5%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "Indicator":
                /*=======================================*/
                UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
                updateIndicator(307,20)
                line1.x1 = 307;
                line1.y1 = 0;
                line1.x2 = 307;
                line1.y2 = UIC.height;
                UIC_ctx.lineWidth = 4;
                UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
                UIC_ctx.strokeStyle = '#fee567';
                UIC_ctx.stroke();
                line1.draw();
                /// color for background
                UIC_ctx.fillStyle = '#fee567';
                /// draw background rect assuming height of font
                UIC_ctx.fillRect(310, 109, 45, 15);
                UIC_ctx.font = "14px Myriad Pro";
                UIC_ctx.fillStyle = '#000';
                UIC_ctx.fillText('0.5660', 307 + 6, 122);
                /*=======================================*/                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('MoreLight','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('dropdown1','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/                
                $('#More_Light_Upper_Div').removeClass("Active_text");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'3%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'450px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'355px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'165px'}, 500, function() {});
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
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('Indicator','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('dropdown2','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/             
                $('#SelectWavelength').addClass("Tutorial_activeRounded");
                $('#SelectWavelength').addClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'450px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'top':'288px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'left':'20px'}, 500, function() {});
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
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('dropdown1','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('slider','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                
                $('#SelectWavelength').removeClass("Tutorial_activeRounded");
                $('#SelectWavelength').removeClass("Tutorial_activeSection");
                $('#SelectPreference').addClass("Tutorial_activeRounded");
                $('#SelectPreference').addClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-37%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'650px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'top':'288px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                /*=======================================*/
          break;
          case "slider":
                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text08;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('dropdown2','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('replay','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#SelectPreference').removeClass("Tutorial_activeRounded");
                $('#SelectPreference').removeClass("Tutorial_activeSection");
                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('left','3%');
                $('#boxpopup1').animate({'width':'860px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'top':'255px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                /*=======================================*/
          break;
          case "replay":
                $('#Tutorial_PopUp').animate({'left':'500%'}, 500, function() {});
                   
                $('#Tutorial_Challenge_PopUp').css('display','block');
                $('#Tutorial_Challenge_PopUp').css('visibility','visible');
                $('#Tutorial_Challenge_arrow_up').css('visibility','visible');
                $('#Tutorial_Challenge_nextbtn').css('visibility','visible');
                $('#Tutorial_Challenge_backbtn').css('visibility','visible');
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
function PrevSlide(Choice,pick) 
	{
		//console.log('PrevSlide('+Choice+')');
		switch(Choice){
            case "rainbow":
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#Tutorial_arrow_dn').css('visibility','hidden');
                $('#upperToolright').addClass("Tutorial_active_rightSection");
                $('#upperToolleft').addClass("Tutorial_active_leftSection");
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                $('#UpperRainbowActiveDiv').css('visibility','visible');
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                $('#Tutorial_btns').css('padding-right','60px');
                $('#Tutorial_nextbtn').css('visibility','visible');
                $('#Tutorial_backbtn').css('visibility','hidden');
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('graph','pick')");
                /*=======================================*/
                /*           Change the text             */
                /*=======================================*/
                document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
                $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'300px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'24px'}, 500, function() {});
          break;
          case "graph":
                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('rainbow','pick')");
                $('#Tutorial_btns').css('padding-right','0px');
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('wavelength','pick')");
                $('#Tutorial_backbtn').css('visibility','visible');
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                $('#UpperGraphActiveDiv').css('visibility','visible');
                $('#Wavelength_Upper_Div').removeClass("Active_text");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'620px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'255px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "wavelength":
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('graph','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('MoreLight','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                $('#Wavelength_Upper_Div').addClass("Active_text");
                $('#More_Light_Upper_Div').removeClass("Active_text");      
                //LowerGraphRow
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'3%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'700px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'215px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'220px'}, 500, function() {});
                /*=======================================*/
          break;
          case "MoreLight":                
                /*=======================================*/                
                /*=======================================*/                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;                
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('wavelength','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('Indicator','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
                $('#Wavelength_Upper_Div').removeClass("Active_text");
                $('#More_Light_Upper_Div').addClass("Active_text");                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-5%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "Indicator":
                /*=======================================*/
                UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
                updateIndicator(307,20)
                line1.x1 = 307;
                line1.y1 = 0;
                line1.x2 = 307;
                line1.y2 = UIC.height;
                UIC_ctx.lineWidth = 4;
                UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
                UIC_ctx.strokeStyle = '#fee567';
                UIC_ctx.stroke();
                line1.draw();
                /// color for background
                UIC_ctx.fillStyle = '#fee567';
                /// draw background rect assuming height of font
                UIC_ctx.fillRect(310, 109, 45, 15);
                UIC_ctx.font = "14px Myriad Pro";
                UIC_ctx.fillStyle = '#000';
                UIC_ctx.fillText('0.5660', 307 + 6, 122);
                /*=======================================*/                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('MoreLight','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('dropdown1','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/                
                $('#More_Light_Upper_Div').removeClass("Active_text");
                $('#SelectWavelength').removeClass("Tutorial_activeRounded");
                $('#SelectWavelength').removeClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'3%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'450px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'355px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'165px'}, 500, function() {});
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
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('Indicator','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('dropdown2','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/             
                $('#SelectWavelength').addClass("Tutorial_activeRounded");
                $('#SelectWavelength').addClass("Tutorial_activeSection");
                $('#SelectPreference').removeClass("Tutorial_activeRounded");
                $('#SelectPreference').removeClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'3%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'450px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'20px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'288px'}, 500, function() {});
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
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('dropdown1','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('slider','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                
                $('#SelectWavelength').removeClass("Tutorial_activeRounded");
                $('#SelectWavelength').removeClass("Tutorial_activeSection");
                $('#SelectPreference').addClass("Tutorial_activeRounded");
                $('#SelectPreference').addClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-37%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'650px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'top':'288px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                /*=======================================*/
          break;
          case "slider":
                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text08;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('dropdown2','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('replay','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#SelectPreference').removeClass("Tutorial_activeRounded");
                $('#SelectPreference').removeClass("Tutorial_activeSection");
                
                   
                $('#Tutorial_Challenge_PopUp').css('display','none');
                $('#Tutorial_Challenge_PopUp').css('visibility','hidden');
                $('#Tutorial_Challenge_arrow_up').css('visibility','hidden');
                $('#Tutorial_Challenge_nextbtn').css('visibility','hidden');
                $('#Tutorial_Challenge_backbtn').css('visibility','hidden');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('left','3%');
                $('#boxpopup1').animate({'width':'860px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'255px'}, 500, function() {});
                /*=======================================*/
          break;
        }
    }
/*====================================================*/
/*====================================================*/
function openInstructions() 
{
    //console.log('Clicked on openInstructions');
    closeInstructionsC4();
    $('#Challenge1_Image_session1').css('visibility','hidden');
    $('#Challenge1_Image_session1').css('display','none');
    $('#All_Tools_And_Controls').css('visibility','visible');
    $('#All_Tools_And_Controls').css('display','block');
    $("#Challenge_Buttons_Div").addClass("disabledbutton");
    $("#Control_row_plot_units_type").addClass("disabledbutton");
    $("#Control_row_measurement_units").addClass("disabledbutton");
    $("#XAxis_Range").addClass("disabledbutton");
    ////////////////////////////////////////////
    $("#Tutorial_nextbtn").attr("onclick","NextSlide('graph','pick')");
    if(Current_Challenge="")
        {
        SeacrhFor('Planets','Category1');
        SeacrhFor('Planets','Category1');
        SelectTarget('Mars','Targets1');
        $("#Mars_Category1").attr("selected","selected");
        SelectTarget('Mars','Targets1');
        document.getElementById("Category_box3").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="search"></i>';
        }
    /*$('#Review_Text1').css('visibility','hidden');
    $('#Review_Text1').css('display','none');*/
    document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
	$('#overlay2').fadeIn('fast');
    $("#challenge_btn").css('visibility','hidden');
    $('#Tutorial_arrow_up').css('visibility','visible');
    $('#Tutorial_arrow_dn').css('visibility','hidden');
    document.getElementById("Tutorial_nextbtn").innerHTML = 'Next';
    $('#Tutorial_arrow_up').css('left','3%');
    $('#U_D_CRH').css('z-index','4');
    $("#Tutorial_nextbtn").attr("onclick","NextSlide('graph','pick')");
    /*=======================================*/
    /*       configure PopUp position        */
    /*=======================================*/   
	$('#Tutorial_PopUp').css('display','block');
    $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
    $('#Tutorial_PopUp').css('top','24px');
	$('#Tutorial_PopUp').animate({'left':'300px'}, 500, function() {});
    /*=======================================*/
    /*    configure the active section       */
    /*=======================================*/
    $('#UpperRainbowActiveDiv').css('visibility','visible');
    /*=======================================*/
    /*        configure the bottons          */
    /*=======================================*/
    $('#Tutorial_backbtn').css('visibility','hidden');
    $('#Tutorial_btns').css('padding-right','60px');

}
/*==================*/
function closeInstructions(prospectElementID) {
	//console.log('Clicked on closeInstructions');
	$(function($) {
		$(document).ready(function() {
            $("#challenge_btn").css('visibility','visible');
            $("#Challenge_Buttons_Div").removeClass("disabledbutton");
            $("#Control_row_plot_units_type").removeClass("disabledbutton");
            $("#Control_row_measurement_units").removeClass("disabledbutton");
            $("#XAxis_Range").removeClass("disabledbutton");
            /////////////////////////////////////
            //console.log("closeInstructions and closeInstructions=(%s)",Current_Challenge);
           /* if(Current_Challenge==4)
                {$('#LowerGraphRow').css('visibility','visible');}
            else
                {$('#LowerGraphRow').css('visibility','hidden');}*/
                /*$('#Review_Text1').css('visibility','visible');
                $('#Review_Text1').css('display','block');*/
            
			$('#Tutorial_PopUp').animate({'left':'500%'}, 500, function() {
                
                $('#Tutorial_Challenge_PopUp').css('display','none');
                $('#Tutorial_Challenge_PopUp').css('visibility','hidden');
                $('#Tutorial_Challenge_arrow_up').css('visibility','hidden');
                $('#Tutorial_Challenge_nextbtn').css('visibility','hidden');
                $('#Tutorial_Challenge_backbtn').css('visibility','hidden');
				$('#upperToolright').removeClass("Tutorial_active_rightSection");
                $('#upperToolleft').removeClass("Tutorial_active_leftSection");                
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                $('#upper_resetbtn').removeClass("Tutorial_activeSection");
                /*=======================================*/
                $('#Wavelength_Upper_Div').removeClass("Active_text");
                $('#More_Light_Upper_Div').removeClass("Active_text");
                /*=======================================*/
                UIC_ctx.clearRect(0, 0, UIC.width, UIC.height);
                $('#SelectPreference').removeClass("Tutorial_activeRounded");
                $('#SelectPreference').removeClass("Tutorial_activeSection");
                $('#SelectWavelength').removeClass("Tutorial_activeRounded");
                $('#SelectWavelength').removeClass("Tutorial_activeSection");
                /*=======================================*/
				$('#Tutorial_PopUp').css('left','500%');
				$('#overlay1').fadeOut('fast');
				$('#overlay2').fadeOut('fast');
			});
		});
	});
}
/*====================================================*/

function closeInstructionsC4() {
    $('#Tutorial_PopUpC4').animate({'left':'500%'}, 500, function() {});
}
/*====================================================*/
/*====================================================*/
/*====================================================*/
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// END OF Script by Aladdin
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////