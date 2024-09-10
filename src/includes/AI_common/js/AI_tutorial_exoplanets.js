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
var Tutorial_text01="This is a high-resolution <strong><i>model</i></strong> of the predicted transmission spectrum from a cloud-free “Hot Jupiter” exoplanet.<br/><br/>It is based on what astronomers know about planetary atmospheres and the physics and chemistry of atoms and molecules at the temperatures and pressures found in these planets.";
var Tutorial_text02="Sodium Vapor (Na), Potassium Vapor (K), and Water Vapor (H2O) are predicted to be prominent features of <strong>Clear</strong> Hot Jupiter atmospheres in the Visible and Near Infrared regions of the spectrum.<br/><br/>(The ability to detect the presence of water in distant solar systems is important to the ultimate search for signs of life in smaller, more hospitable worlds)";
var Tutorial_text03="Text3";
var Tutorial_text04="Different atmospheric conditions -- such as <strong>Clouds</strong> -- can change how individual spectral signatures appear, including the <strong>width</strong> and <strong>depth</strong> of specific absorption features";
var Tutorial_text05="Different atmospheric conditions can also change the overall <strong>shape</strong> and <strong>slope</strong> of the spectrum plot.<br/>(<strong>Clouds</strong> - opaque masses of condensed liquid or ice particles - block and scatter Visible and IR light equally, flattening out the spectrum.)";
var Tutorial_text06="Different atmospheric conditions change the overall<br/><strong>shape</strong> and <strong>slope</strong> of the spectrum plot.<br/>(<strong>Hazes</strong> - small suspended particles created by UV starlight - scatter shorter wavelengths away from the line of sight and allow longer wavelengths through.)";
var Tutorial_text07="<strong>Hazes</strong> also significantly dampen and obscure the expected deep absorption features";
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
        $('#UpperGraphImageDiv').css('visibility','visible');
        $('#LowerGraphRow').css('visibility','hidden');
        $("#Challenge_Buttons_Div").addClass("disabledbutton");
        /*=======================================*/
        /*    configure the active section       */
        /*=======================================*/
        $('#Intro_Challenge_Text0').css('visibility','visible');
        $('#Intro_Challenge_Text0').css('display','block');
        /*=======================================*/
        /*           Change the text             */
        /*=======================================*/
        document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_NoLabels_W650.png";
        document.getElementById('UpperImg').src="includes/AI_common/images/Clear_Hot_Jupiter_Model_Transmission.jpg";
        $('#overlay2').fadeIn('fast');
        $('#Tutorial_arrow_up').css('visibility','visible');
        $('#Tutorial_arrow_dn').css('visibility','hidden');
        document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
        $("#Tutorial_nextbtn").attr("onclick","NextSlide('second','pick')");
        SeacrhFor('Exoplanet_Models','Category1');
        SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
        document.getElementById("Category_box3").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Exoplanet_Models"></i>';
        SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
        $("#challenge_btn").css('visibility','hidden');
        
        $("#Clear_Hot_Jupiter_Model_Transmission_Category1").attr("selected","selected");
        /*=======================================*/
    }
/*====================================================*/
/*====================================================*/
function NextSlide(Choice,pick) 
	{
        
                $('#Intro_Challenge_Text0').css('visibility','hidden');
                $('#Intro_Challenge_Text0').css('display','none');
                $('#Intro_Challenge_Text1').css('visibility','hidden');
                $('#Intro_Challenge_Text1').css('display','none');
                $('#Intro_Challenge_Text2').css('visibility','hidden');
                $('#Intro_Challenge_Text2').css('display','none');
                $('#Intro_Challenge_Text3').css('visibility','hidden');
                $('#Intro_Challenge_Text3').css('display','none');
		switch(Choice){
          case "first":
                
                $('#Intro_Challenge_Text0').css('visibility','visible');
                $('#Intro_Challenge_Text0').css('display','block');
                document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
                SelectTarget('Cloudy_Hot_Jupiter_Model_Transmission','Targets2');
                document.getElementById('Targets1Filters').innerHTML='<option id="Clear_Hot_Jupiter_Model_Transmission_Category1" value="Clear_Hot_Jupiter_Model_Transmission" selected="selected">Clear Hot Jupiter Model Transmission</option>';                
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#Tutorial_arrow_dn').css('visibility','hidden');
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('second','pick')");
                document.getElementById("Tutorial_nextbtn").innerHTML = 'Next';
                /*=======================================*/
                /*           Change the text             */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'300px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'155px'}, 500, function() {});
          break;
          case "second":
                $('#Intro_Challenge_Text0').css('visibility','visible');
                $('#Intro_Challenge_Text0').css('display','block');
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
                document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_Labels_W650.png";
                document.getElementById('Intro_Challenge_img0').src="includes/AI_common/images/Clear_Hot_Jupiter_W500.png";
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('first','pick')");
                $('#Tutorial_btns').css('padding-right','0px');
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('third','pick')");
                $('#Tutorial_backbtn').css('visibility','visible');
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $("#Control_row_plot_units_type").addClass("disabledbutton");
                $("#Control_row_measurement_units").addClass("disabledbutton");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'620px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'255px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "third":
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
                $('#UpperGraphImageDiv').css('visibility','hidden');
                $('#Intro_Challenge_Text1').css('visibility','visible');
                $('#Intro_Challenge_Text1').css('display','block');
                $("#Control_row_plot_units_type").removeClass("disabledbutton");
                $("#Control_row_measurement_units").removeClass("disabledbutton");
                
                document.getElementById("challenge_btn").innerHTML ="CONTINUE TUTORIAL";
                document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_NoLabels_W650.png";
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('fifth','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/    
                $("#challenge_btn").css('width','180px');
                $("#Challenge_Buttons_Div").addClass("disabledbutton");
                $("#challenge_btn").attr("onclick","NextSlide('fourth','pick')");
                $("#challenge_btn").css('visibility','visible');
                /*=======================================*/         
                $('#Tutorial_PopUp').animate({'top':'-500%'}, 500, function() 
                    {$('#overlay2').fadeOut('fast');});
                $('#LowerGraphRow').css('visibility','visible');
                SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
                /*=======================================*/
                document.getElementById('Targets1Filters').innerHTML='<option id="Clear_Hot_Jupiter_Model_Transmission_Category1" value="Clear_Hot_Jupiter_Model_Transmission" selected="selected">Clear Hot Jupiter Model Transmission</option>';
                /*=======================================*/
                SeacrhFor('Atoms_and_Molecules','Category2');
                document.getElementById("Category_box4").innerHTML ="<i class=\"fab fa-react\" id=\"Cat1_Atoms_and_Molecules\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Atoms_and_Molecules\"></i>";
                
                document.getElementById('Targets2Filters').innerHTML='<option id="Select_Category2" value="" onclick="initialLineHdf();">Select Sub Category</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Sodium_Absorption_Category2" value="Sodium_Absorption">Sodium Absorption</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Potassium_Absorption_Category2" value="Potassium_Absorption">Potassium Absorption</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Water_Vapor_Absorption_Category2" value="Water_Vapor_Absorption">Water Vapor Absorption</option>';
                /*=======================================*/                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
               /* $('#boxpopup1').animate({'width':'700px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'215px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'220px'}, 500, function() {});*/
                /*=======================================*/
          break;
          case "fourth":                
                /*=======================================*/
                $('#overlay2').fadeIn('fast');
                $("#Control_row_plot_units_type").addClass("disabledbutton");
                $("#Control_row_measurement_units").addClass("disabledbutton");                
               document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_Vertical_Horiz_Lines_W650.png";
               document.getElementById('LowerGraphImageHolder').src="includes/AI_common/images/Exoplanets_Cloudy_Hot_Jupiter_Model_VerticalHoriz_Lines_W650.png";
               document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
                
                /*=======================================*/
                document.getElementById("Category_box4").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Exoplanet_Models"></i>';
                SeacrhFor('Exoplanet_Models','Category2');
                SelectTarget('Cloudy_Hot_Jupiter_Model_Transmission','Targets2');
                SelectTarget('Cloudy_Hot_Jupiter_Model_Transmission','Targets2');
                $("#Cloudy_Hot_Jupiter_Model_Transmission_Category2").attr("selected","selected");
                $('#UpperGraphImageDiv').css('visibility','visible');
                $('#LowerGraphImageDiv').css('visibility','visible');
                $("#challenge_btn").css('visibility','hidden');
                $('#Intro_Challenge_Text2').css('visibility','visible');
                $('#Intro_Challenge_Text2').css('display','block');
               
                document.getElementById("challenge_btn").innerHTML ="START CHALLENGE 1";
                $("#challenge_btn").css('width','180px');
                $("#challenge_btn").attr("onclick","ShowChallenge(1,1)");
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('third','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('fifth','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/              
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_dn').css('visibility','hidden');
                $('#Tutorial_arrow_up').animate({'left':'-35%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'530px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'490px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'80px'}, 500, function() {});
                /*=======================================*/
          break;
          case "fifth":
                /*=======================================*/                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
               document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_W650.png"; document.getElementById('LowerGraphImageHolder').src="includes/AI_common/images/Exoplanets_Cloudy_Hot_Jupiter_Model_W650.png";
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#Tutorial_arrow_dn').css('visibility','visible');
                /*=======================================*/
                $('#Intro_Challenge_Text2').css('visibility','visible');
                $('#Intro_Challenge_Text2').css('display','block');
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('fourth','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('sixth','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/             
                
                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-35%'}, 50, function() {});
                $('#Tutorial_arrow_dn').animate({'left':'3%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'475px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'80px'}, 500, function() {});
                /*=======================================*/
          break;
          case "sixth":
                /*=======================================*/
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
                document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_W650.png";  document.getElementById('LowerGraphImageHolder').src="includes/AI_common/images/Exoplanets_Hazy_Hot_Jupiter_Model_W650.png";
                //
                SelectTarget('Hazy_Hot_Jupiter_Model_Transmission','Targets2');
                SelectTarget('Hazy_Hot_Jupiter_Model_Transmission','Targets2');
                $("#Hazy_Hot_Jupiter_Model_Transmission_Category2").attr("selected","selected");
               
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#Tutorial_arrow_dn').css('visibility','visible');
                /*=======================================*/
                /*=======================================*/
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('fifth','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('seveth','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Intro_Challenge_Text3').css('visibility','visible');
                $('#Intro_Challenge_Text3').css('display','block');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-35%'}, 50, function() {});
                $('#Tutorial_arrow_dn').animate({'left':'-35%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'475px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'80px'}, 500, function() {});
                /*=======================================*/
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                /*=======================================*/
          break;
         
          case "seveth":
                /*=======================================*/
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text07;
                document.getElementById('LowerGraphImageHolder').src="includes/AI_common/images/Exoplanets_Hazy_Hot_Jupiter_Model_NoLabels_W650.png";
                //
                document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_NoLabels_W650.png"; 
                $('#Tutorial_arrow_up').css('visibility','hidden');
                /*=======================================*/
                /*=======================================*/
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('sixth','pick')");
                $("#Tutorial_nextbtn").attr("onclick","closeInstructions('boxpopup1')");
                document.getElementById("Tutorial_nextbtn").innerHTML = 'Finish';
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Intro_Challenge_Text3').css('visibility','visible');
                $('#Intro_Challenge_Text3').css('display','block');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-35%'}, 50, function() {});
                $('#Tutorial_arrow_dn').animate({'left':'-35%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'475px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'80px'}, 500, function() {});
                /*=======================================*/
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
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
            case "first":
                document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
                document.getElementById('Intro_Challenge_img0').src="includes/AI_common/images/HazyHotJupiter_W500.png"; document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_NoLabels_W650.png";
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_btns').css('padding-right','60px');
                $('#Tutorial_nextbtn').css('visibility','visible');
                $('#Tutorial_backbtn').css('visibility','hidden');
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('second','pick')");
                /*=======================================*/
                /*           Change the text             */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'300px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'155px'}, 500, function() {});
          break;
          case "second":
                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Control_row_plot_units_type").addClass("disabledbutton");
                $("#Control_row_measurement_units").addClass("disabledbutton");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'620px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'255px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "third":
                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
                $('#UpperGraphImageDiv').css('visibility','hidden');
                $('#Intro_Challenge_Text0').css('visibility','hidden');
                $('#Intro_Challenge_Text0').css('display','none');
                $('#Intro_Challenge_Text1').css('visibility','visible');
                $('#Intro_Challenge_Text1').css('display','block');
                $('#Intro_Challenge_Text2').css('visibility','hidden');
                $('#Intro_Challenge_Text2').css('display','none'); document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_NoLabels_W650.png";
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Control_row_plot_units_type").removeClass("disabledbutton");
                $("#Control_row_measurement_units").removeClass("disabledbutton");
               /* $("#Tutorial_backbtn").attr("onclick","PrevSlide('second','pick')");*/
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('fifth','pick')");
                $('#LowerGraphImageDiv').css('visibility','hidden');
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                
    
                $("#challenge_btn").css('width','180px');
                document.getElementById("challenge_btn").innerHTML ="CONTINUE TUTORIAL";
                $("#Challenge_Buttons_Div").addClass("disabledbutton");
                $("#challenge_btn").attr("onclick","NextSlide('fourth','pick')");
                $("#challenge_btn").css('visibility','visible');
                $('#Tutorial_PopUp').animate({'top':'-500%'}, 500, function() 
                    {$('#overlay2').fadeOut('fast');});
                $('#LowerGraphRow').css('visibility','visible');
                SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
                
                /*=======================================*/
                SeacrhFor('Atoms_and_Molecules','Category2');
                document.getElementById("Category_box4").innerHTML ="<i class=\"fab fa-react\" id=\"Cat1_Atoms_and_Molecules\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Atoms_and_Molecules\"></i>";
                
                document.getElementById('Targets2Filters').innerHTML='<option id="Select_Category2" value="" onclick="initialLineHdf();">Select Sub Category</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Sodium_Absorption_Category2" value="Sodium_Absorption">Sodium Absorption</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Potassium_Absorption_Category2" value="Potassium_Absorption">Potassium Absorption</option>';
                document.getElementById('Targets2Filters').innerHTML+='<option id="Water_Vapor_Absorption_Category2" value="Water_Vapor_Absorption">Water Vapor Absorption</option>';
                /*=======================================*/
          break;
          case "fourth":                
               
                /*=======================================*/
                $('#overlay2').fadeIn('fast');
                $("#Control_row_plot_units_type").addClass("disabledbutton");
                $("#Control_row_measurement_units").addClass("disabledbutton");
                document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_Vertical_Horiz_Lines_W650.png";
                document.getElementById('LowerGraphImageHolder').src="includes/AI_common/images/Exoplanets_Cloudy_Hot_Jupiter_Model_VerticalHoriz_Lines_W650.png";
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
                /*=======================================*/
                document.getElementById("Category_box4").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Exoplanet_Models"></i>';
                SeacrhFor('Exoplanet_Models','Category2');
                SelectTarget('Cloudy_Hot_Jupiter_Model_Transmission','Targets2');
                SelectTarget('Cloudy_Hot_Jupiter_Model_Transmission','Targets2');
                $("#Cloudy_Hot_Jupiter_Model_Transmission_Category2").attr("selected","selected");
                
                $('#UpperGraphImageDiv').css('visibility','visible');
                $('#LowerGraphImageDiv').css('visibility','visible');
                $("#challenge_btn").css('visibility','hidden');
                $('#Intro_Challenge_Text0').css('visibility','hidden');
                $('#Intro_Challenge_Text0').css('display','none');
                $('#Intro_Challenge_Text1').css('visibility','hidden');
                $('#Intro_Challenge_Text1').css('display','none');
                $('#Intro_Challenge_Text2').css('visibility','visible');
                $('#Intro_Challenge_Text2').css('display','block');
                $('#Intro_Challenge_Text3').css('visibility','hidden');
                $('#Intro_Challenge_Text3').css('display','none');
               
                document.getElementById("challenge_btn").innerHTML ="START CHALLENGE 1";
                $("#challenge_btn").css('width','180px');
                $("#challenge_btn").attr("onclick","ShowChallenge(1,1)");
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('third','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('fifth','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/              
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_dn').css('visibility','hidden');
                $('#Tutorial_arrow_up').animate({'left':'-35%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'530px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'490px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'80px'}, 500, function() {});
                /*=======================================*/
          break;
          case "fifth":
               /*=======================================*/                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
               document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_W650.png"; document.getElementById('LowerGraphImageHolder').src="includes/AI_common/images/Exoplanets_Cloudy_Hot_Jupiter_Model_W650.png";
                $('#Tutorial_arrow_dn').css('visibility','visible');
                /*=======================================*/
                $('#Intro_Challenge_Text0').css('visibility','hidden');
                $('#Intro_Challenge_Text0').css('display','none');
                $('#Intro_Challenge_Text1').css('visibility','hidden');
                $('#Intro_Challenge_Text1').css('display','none');
                $('#Intro_Challenge_Text2').css('visibility','visible');
                $('#Intro_Challenge_Text2').css('display','block');
                $('#Intro_Challenge_Text3').css('visibility','hidden');
                $('#Intro_Challenge_Text3').css('display','none');
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('fourth','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('sixth','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/             
                
                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-35%'}, 50, function() {});
                $('#Tutorial_arrow_dn').animate({'left':'3%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'475px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'80px'}, 500, function() {});
                /*=======================================*/
          break;
                
          case "sixth":
                /*=======================================*/
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
                document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_W650.png";  document.getElementById('LowerGraphImageHolder').src="includes/AI_common/images/Exoplanets_Hazy_Hot_Jupiter_Model_W650.png";
                //
               
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#Tutorial_arrow_dn').css('visibility','visible');
                SelectTarget('Hazy_Hot_Jupiter_Model_Transmission','Targets2');
                SelectTarget('Hazy_Hot_Jupiter_Model_Transmission','Targets2');
                $("#Hazy_Hot_Jupiter_Model_Transmission_Category2").attr("selected","selected");
                /*=======================================*/
                /*=======================================*/
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('fifth','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('seveth','pick')");
                document.getElementById("Tutorial_nextbtn").innerHTML = 'Next';
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Intro_Challenge_Text0').css('visibility','hidden');
                $('#Intro_Challenge_Text0').css('display','none');
                $('#Intro_Challenge_Text1').css('visibility','hidden');
                $('#Intro_Challenge_Text1').css('display','none');
                $('#Intro_Challenge_Text2').css('visibility','hidden');
                $('#Intro_Challenge_Text2').css('display','none');
                $('#Intro_Challenge_Text3').css('visibility','visible');
                $('#Intro_Challenge_Text3').css('display','block');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-35%'}, 50, function() {});
                $('#Tutorial_arrow_dn').animate({'left':'-35%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'475px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'80px'}, 500, function() {});
                /*=======================================*/
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                /*=======================================*/
          break;
        }
    }
/*====================================================*/
/*====================================================*/
function openInstructions() 
{
        /*=======================================*/
        /*        configure the bottons          */
        /*=======================================*/
        document.getElementById("Tutorial_nextbtn").innerHTML = 'Next';
        $('#Tutorial_btns').css('padding-right','60px');
        $('#Tutorial_nextbtn').css('visibility','visible');
        $('#Tutorial_backbtn').css('visibility','hidden');
        $('#UpperGraphImageDiv').css('visibility','visible');
        $('#LowerGraphRow').css('visibility','hidden');
        $("#Challenge_Buttons_Div").addClass("disabledbutton");
        $('#Category_box4').css('visibility','visible');
        $('#Category_box4').css('display','block');
        $('#Category_box2').css('visibility','hidden');
        $('#Category_box2').css('display','none');
    
        $('#Intro_Challenge').css('visibility','visible');
        $('#Intro_Challenge').css('display','block');
        $('#Challenge1_Text').css('visibility','hidden');
        $('#Challenge1_Text').css('display','none');
        $('#Challenge2_Text').css('visibility','hidden');
        $('#Challenge2_Text').css('display','none');
        $('#Challenge3_Text').css('visibility','hidden');
        $('#Challenge3_Text').css('display','none');
        $('#Challenge4_Text').css('visibility','hidden');
        $('#Challenge4_Text').css('display','none');
        $('#Challenge5_Text').css('visibility','hidden');
        $('#Challenge5_Text').css('display','none');
        /*=======================================*/
        /*    configure the active section       */
        /*=======================================*/
        if(Current_Challenge!="")
            {
                $('#Challenge'+Current_Challenge+'_btn').removeClass("active");
                $('#Challenge'+Current_Challenge+'_Text').css('visibility','hidden');
                $('#Challenge'+Current_Challenge+'_Text').css('display','none');
            }
        /*=======================================*/
        /*           Change the text             */
        /*=======================================*/
        document.getElementById('UpperGraphImageHolder').src="includes/AI_common/images/Exoplanets_Clear_Hot_Jupiter_Model_NoLabels_W650.png";
        document.getElementById('UpperImg').src="includes/AI_common/images/Clear_Hot_Jupiter_Model_Transmission.jpg";
        $('#overlay2').fadeIn('fast');
        $('#Tutorial_arrow_up').css('visibility','visible');
        $('#Tutorial_arrow_dn').css('visibility','hidden');
        document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
        $("#Tutorial_nextbtn").attr("onclick","NextSlide('second','pick')");
        SeacrhFor('Exoplanet_Models','Category1');
        SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
        document.getElementById("Category_box3").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Exoplanet_Models"></i>';
        SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
        $("#challenge_btn").css('visibility','hidden');
        
        $("#Clear_Hot_Jupiter_Model_Transmission_Category1").attr("selected","selected");
        /*=======================================*/
                $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'300px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'155px'}, 500, function() {});

}
/*==================*/
function closeInstructions(prospectElementID) {
    /*************************************************************/
	$(function($) {
        /*************************************************************/
		$(document).ready(function() {
            
            SeacrhFor('Exoplanet_Models','Category1');
            SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
            SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets1');
            $("#Clear_Hot_Jupiter_Model_Transmission_Category1").attr("selected","selected");

            SeacrhFor('Exoplanet_Models','Category2');
            SelectTarget('Hazy_Hot_Jupiter_Model_Transmission','Targets2');
            SelectTarget('Hazy_Hot_Jupiter_Model_Transmission','Targets2');
            $("#Hazy_Hot_Jupiter_Model_Transmission_Category2").attr("selected","selected");
            document.getElementById("Category_box3").innerHTML ='<i class="fa fa-globe" id="Cat1_search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="search"></i>';
            
            
            $("#challenge_btn").css('visibility','visible');
            $('#UpperGraphImageDiv').css('visibility','hidden');
            $('#LowerGraphImageDiv').css('visibility','hidden');
            $("#Challenge_Buttons_Div").removeClass("disabledbutton");
            $("#Control_row_plot_units_type").removeClass("disabledbutton");
            $("#Control_row_measurement_units").removeClass("disabledbutton");
            $('#Review_Text1').css('visibility','visible');
            $('#Review_Text1').css('display','block');
            $('#LowerGraphRow').css('visibility','visible');
            /*************************************************************/
			$('#Tutorial_PopUp').animate({'left':'500%'}, 500, function() {
                
                $('#Tutorial_Challenge_arrow_up').css('visibility','hidden');
                $('#Tutorial_Challenge_nextbtn').css('visibility','hidden');
                $('#Tutorial_Challenge_backbtn').css('visibility','hidden');
				$('#upperToolright').removeClass("Tutorial_active_rightSection");
                $('#upperToolleft').removeClass("Tutorial_active_leftSection");         
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                $('#upper_resetbtn').removeClass("Tutorial_activeSection");
				$('#Tutorial_PopUp').css('left','500%');
				$('#overlay1').fadeOut('fast');
				$('#overlay2').fadeOut('fast');
			});
            /*************************************************************/
		});
        /*************************************************************/
	});
    /*************************************************************/
}
/*====================================================*/

/*====================================================*/
function ShowChallenge(Num,Section)
{
        /*  Reset All Button and Set Active one     */
        var nextChallenge=1;
        $("#challenge_btn").css('visibility','visible');
        $('#Intro_Challenge').css('visibility','hidden');
        $('#Intro_Challenge').css('display','none');
        Current_Challenge=Num;
        for (var CB = 1; CB < 6; CB++)
            {
                $('#Challenge'+CB+'_btn').removeClass("active");
                $('#Challenge'+CB+'_Text').css('visibility','hidden');
                $('#Challenge'+CB+'_Text').css('display','none');
            }
    
        $('#Challenge5_Text').css('visibility','hidden');
        /*=======================================*/
        $('#Challenge5_Text').css('display','none');
        /*=======================================*/
        $('#Challenge'+Num+'_btn').addClass("active");
        /*=======================================*/
        $('#Challenge'+Num+'_Text').css('visibility','visible');
        /*=======================================*/
        $('#Challenge'+Num+'_Text').css('display','block');
    
        /*=======================================*/
    //console.log("Challenge (%s) and Section (%s)",Num,Section)
        if(Num==1)
            {
                document.getElementById("Scatter_Plot").selected = true;
                initialLineHdf();
                /*=======================================*/
                $('#LowerGraphRow').css('visibility','visible');
                $('#Cat2_Solar_System').css('visibility','hidden');
                
                $('#Category_box4').css('visibility','hidden');
                $('#Category_box4').css('display','none');
                $('#Category_box2').css('visibility','visible');
                $('#Category_box2').css('display','block');
                /*=======================================*/
                $("#Cat2_Atoms_and_Molecules").attr("onclick","SeacrhFor('Atoms_and_Molecules1','Category2')");
                /*=======================================*/
                
                SeacrhFor('Exoplanets','Category1');
                SelectTarget('WASP_17b','Targets1');
                document.getElementById('Targets1Filters').innerHTML='<option value="">WASP-17b</option>';
                SelectTarget('WASP_17b','Targets1');
                /*=======================================*/
                SeacrhFor('Exoplanet_Models','Category2');
                SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets2');
                SelectTarget('Clear_Hot_Jupiter_Model_Transmission','Targets2');
                $("#Clear_Hot_Jupiter_Model_Transmission_Category2").attr("selected","selected");
                /*=======================================*/
                $('#All_Tools_And_Controls').css('visibility','visible');
                $('#All_Tools_And_Controls').css('display','block');
                $('#Challenge1_Text').css('visibility','visible');
                $('#Challenge1_Text').css('display','block');
                $("#challenge_btn").attr("onclick","ShowChallenge(2,1)");
                document.getElementById("challenge_btn").innerHTML ="NEXT CHALLENGE";
                $("#challenge_btn").css('width','160px');
                
                $("#Category_box2").animate({width: "200px"});
                $('#Cat2_folder').css('visibility','hidden');
            }
        /*=======================================*/
        else if(Num==2)
            {
                initialLineHdf();
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";                document.getElementById('UpperImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                /*=======================================*/
                $('#Cat2_Solar_System').css('visibility','hidden');
               
                $('#Category_box4').css('visibility','hidden');
                $('#Category_box4').css('display','none');
                $('#Category_box2').css('visibility','visible');
                $('#Category_box2').css('display','block');
                /*=======================================*/
                $("#Cat2_Atoms_and_Molecules").attr("onclick","SeacrhFor('Atoms_and_Molecules1','Category2')");
                /*=======================================*/
                SeacrhFor('Exoplanets','Category1');
                /*=======================================*/
                SeacrhFor('Exoplanet_Models','Category2');
                /*=======================================*/
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/
                document.getElementById("challenge_btn").innerHTML ="NEXT CHALLENGE";
                $("#challenge_btn").attr("onclick","ShowChallenge(3,1)");
                /*=======================================*/
                $("#Category_box2").animate({width: "200px"});
                $('#Cat2_folder').css('visibility','hidden');
                
            }
        /*=======================================*/
        else if(Num==3)
            {
                /*=======================================*/
                initialLineHdf();
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";                document.getElementById('UpperImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                /*=======================================*/
                $('#Cat2_Solar_System').css('visibility','hidden');
               
                $('#Category_box4').css('visibility','hidden');
                $('#Category_box4').css('display','none');
                $('#Category_box2').css('visibility','visible');
                $('#Category_box2').css('display','block');
                /*=======================================*/
                $("#Cat2_Atoms_and_Molecules").attr("onclick","SeacrhFor('Atoms_and_Molecules1','Category2')");
                /*=======================================*/
                SeacrhFor('Exoplanets','Category1');
                /*=======================================*/
                SeacrhFor('Exoplanet_Models','Category2');
                /*=======================================*/
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/
                document.getElementById("challenge_btn").innerHTML ="NEXT CHALLENGE";
                $("#challenge_btn").attr("onclick","ShowChallenge(4,1)");
                /*=======================================*/
                $("#Category_box2").animate({width: "200px"});
                $('#Cat2_folder').css('visibility','hidden');
                
            }
        /*=======================================*/
        else if(Num==4)
            {
                /*=======================================*/
                /*=======================================*/
                initialLineHdf();
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";                document.getElementById('UpperImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                /*=======================================*/
                $('#Cat2_Solar_System').css('visibility','visible');
                $('#Category_box4').css('visibility','hidden');
                $('#Category_box4').css('display','none');
                $('#Category_box2').css('visibility','visible');
                $('#Category_box2').css('display','block');
                /*=======================================*/
                
                $("#Cat2_Atoms_and_Molecules").attr("onclick","SeacrhFor('Atoms_and_Molecules','Category2')");
                
                /*=======================================*/
                SeacrhFor('Exoplanets','Category1');
                /*=======================================*/
                SeacrhFor('Exoplanet_Models','Category2');
                /*=======================================*/
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/
                document.getElementById("challenge_btn").innerHTML ="FINISH";
                $("#challenge_btn").attr("onclick","ShowChallenge(5,1)");
                /*=======================================*/
                $("#Category_box2").animate({width: "200px"});
                $('#Cat2_folder').css('visibility','hidden');
            } /*=========================================*/
        else if(Num==5)
            {
              
                /*=======================================*/
                $('#Challenge5_Text').css('visibility','visible');
                /*=======================================*/
                $('#Challenge5_Text').css('display','block');
                $("#challenge_btn").css('visibility','hidden');
            }
        else
            {
                
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/
                document.getElementById("challenge_btn").innerHTML ="FINISH";
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
/*====================================================*/
/*====================================================*/
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// END OF Script by Aladdin
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////