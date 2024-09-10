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
var Tutorial_text01="This is the Spectrum Tool. You will use the Spectrum Tool to compare a spectrum image to its spectrum graph. You will also plot spectrum graphs of your own from the spectra that you observe.";
var Tutorial_text02="This is the <strong>Spectrum Image</strong>. This represents what you would see through a spectroscope when you point it at a light source.</br><small>(The spectrum shown here represents a source that is emitting equally across all wavelengths. More typically, some wavelength sections will be brighter and others will be darker.)</small>";
var Tutorial_text03="The rainbow in the middle of the spectrum shows <strong>visible light</strong>. The gray region of the spectrum to the right of red is called <strong>infrared light</strong> (IR). The gray region to the left of violet is called <strong>ultraviolet light</strong> (UV). Only visible light can be seen by the human eye.<br/> <small>(Beyond IR is microwave and radio; beyond UV is X-ray and gamma-ray.)</small>";
var Tutorial_text04="This is where we will plot the <strong>Spectrum Graph</strong>. Sometimes you will draw the spectrum graph yourself, and sometimes you will look at graphs of actual spectral data or models. Click in the box to start drawing.";
var Tutorial_text05="This is the <strong>Reset Button</strong>. You can reset your spectrum graph if you ever want to start over from a blank screen.";
var Tutorial_text06="Sometimes you will get a second panel to see the spectrum of a <strong>Comparison Object</strong>. It will often be useful to compare the spectrum and graph from your top panel with another object in the lower panel.";
var Tutorial_text07="You can select which reference object you want to view from the dropdown menu.";
var Tutorial_text08="You can click here to replay the <strong>Session 2 tutorial</strong> later if you need a refresher on this content.";
var Tutorial_text09="If you’re all set with this tutorial, click the<br/>FIRST CHALLENGE button below to get started.";
var Tutorial_text10="";
/////////////////////////////////////////////////////////////////////
var Current_Challenge="";
var TheChallenge_btn=document.getElementById("challenge_btn");
var challenge_btn_Text=0;
/////////////////////////////////////////////////////////////////////
function initial_tutorial() 
    {
        /*=======================================*/
        /*        configure the bottons          */
        /*=======================================*/
        $('#Tutorial_btns').css('padding-right','60px');
        $('#Tutorial_nextbtn').css('visibility','visible');
        $('#Tutorial_backbtn').css('visibility','hidden');
        /*=======================================*/
        /*    configure the active section       */
        /*=======================================*/
        $('#upperTool').addClass("Tutorial_activeSection");
        /*=======================================*/
        /*           Change the text             */
        /*=======================================*/
        //$('#overlay2').fadeIn('fast');
        $('#Tutorial_arrow_up').css('visibility','visible');
        $('#Tutorial_arrow_dn').css('visibility','hidden');
        document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
        $("#Tutorial_nextbtn").attr("onclick","NextSlide('spectrum_image','pick')");
        SeacrhFor('Draw','CategoryDraw');
        SeacrhFor('Lamps','Category2');
        SelectTarget('Fluorescent_Bulb','Targets2');        
        SelectTarget('Fluorescent_Bulb','Targets2');        
        $("#challenge_btn").css('visibility','hidden');
        /*=======================================*/
        closeInstructionsC4();
        /*=======================================*/
    }
/*====================================================*/
/*====================================================*/
function ShowChallenge(Num,Section)
    {
        /*  Reset All Button and Set Active one     */
        var nextChallenge=1;
        $("#challenge_btn").css('visibility','visible');
        closeInstructionsC4();
        ////////////////////////////////////////////////////////////
        $('#Intro_Challenge').css('visibility','hidden');
        $('#Intro_Challenge').css('display','none');
        $('#Challenge3_Text1').css('visibility','hidden');
        $('#Challenge3_Text1').css('display','none');
        $('#Challenge3_Text2').css('visibility','hidden');
        $('#Challenge3_Text2').css('display','none');
        $('#Challenge4_Text2').css('visibility','hidden');
        $('#Challenge4_Text2').css('display','none');
        $('#Challenge5_Text1').css('visibility','hidden');
        $('#Challenge5_Text1').css('display','none');
        $('#Challenge5_Text2').css('visibility','hidden');
        $('#Challenge5_Text2').css('display','none');
        $('#Challenge6_Text1').css('visibility','hidden');
        $('#Challenge6_Text1').css('display','none');
        $('#Challenge6_Text2').css('visibility','hidden');
        $('#Challenge6_Text2').css('display','none');
        $('#Challenge6_Text3').css('visibility','hidden');
        $('#Challenge6_Text3').css('display','none');
        $('#Challenge6_Text4').css('visibility','hidden');
        $('#Challenge6_Text4').css('display','none');
        ////////////////////////////////////////////////////////////
        $('#Tutorial4_PopUp').css('display','none');
        $('#Tutorial4_PopUp').css('visibility','hidden');
        ////////////////////////////////////////////////////////////
        $('#upperTool').css('visibility','visible');
        $('#upperTool').css('display','block');
        ////////////////////////////////////////////////////////////
        $('#Control_row_measurement_units').css('visibility','hidden');
        $('#LowerCanvasGraph_message1').css('visibility','hidden');
        $('#LowerCanvasGraph_message1').css('display','none');
        Current_Challenge=Num;
        for (var CB = 1; CB < 7; CB++)
            {
                $('#Challenge'+CB+'_btn').removeClass("active");
                $('#Challenge'+CB+'_Text').css('visibility','hidden');
                $('#Challenge'+CB+'_Text').css('display','none');
            }
        $('#Challenge7_Text').css('visibility','hidden');
        /*=======================================*/
        $('#Challenge7_Text').css('display','none');
        /*=======================================*/
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
                //This else statment apply for 1,2,3
                $('#UpperGraphRow').css('visibility','visible');
                $('#UpperGraphRow').css('display','block');
                $('#LowerGraphRow').css('visibility','hidden');
                $('#Control_row_measurement_units').css('visibility','hidden');
                /*=======================================*/
                challenge_btn_Text=(Num+1);
                TheChallenge_btn.innerHTML ="GO TO CHALLENGE "+challenge_btn_Text+"";
                /*=======================================*/
                if(Num>0 && Num<4)
                    {
                        nextChallenge=Num+1;
                        $("#challenge_btn").attr("onclick","ShowChallenge("+nextChallenge+",1)");
                    }
            }
        else if(Num==3)
            {
                initialLineHdf();
                //This else statment apply for 1,2,3
                $('#UpperGraphRow').css('visibility','visible');
                $('#UpperGraphRow').css('display','block');
                $('#LowerGraphRow').css('visibility','hidden');
                $('#Control_row_measurement_units').css('visibility','hidden');
                $('#Challenge3_Text1').css('visibility','hidden');
                $('#Challenge3_Text1').css('display','none');
                $('#Challenge3_Text2').css('visibility','hidden');
                $('#Challenge3_Text2').css('display','none');
                 if(Section==1)
                    {
                        $('#Challenge3_Text1').css('visibility','visible');
                        $('#Challenge3_Text1').css('display','block');
                        $("#challenge_btn").attr("onclick","ShowChallenge(3,2)");
                        TheChallenge_btn.innerHTML ="GO TO DISCUSSION";
                    }
                else
                    {
                        $('#Challenge3_Text2').css('visibility','visible');
                        $('#Challenge3_Text2').css('display','block');
                        $('#upperTool').css('visibility','hidden');
                        $('#upperTool').css('display','none');
                        
                        /*=======================================*/
                        challenge_btn_Text=(Num+1);
                        $("#challenge_btn").attr("onclick","ShowChallenge(4,1)");
                        TheChallenge_btn.innerHTML ="GO TO CHALLENGE "+challenge_btn_Text+"";
                        /*=======================================*/
                    }
            }
        else if(Num==4)
            {
                initialLineHdf();
                Clear_Lower_Canvas();
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById('Comparison_Name').innerHTML='';
                SeacrhFor('Lamps','Category2');
                //SelectTarget('Fluorescent_Bulb','Targets2');         
                document.getElementById("Category_box4").innerHTML ="<i class=\"fab fa-medapps\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                $('#UpperGraphRow').css('visibility','visible');
                $('#UpperGraphRow').css('display','block');
                $('#LowerGraphRow').css('visibility','visible');
                $('#Control_row_measurement_units').css('visibility','hidden');
                if(Section==1)
                    {
                        $('#Challenge4_Text1').css('visibility','visible');
                        $('#Challenge4_Text1').css('display','block');
                        $("#challenge_btn").attr("onclick","ShowChallenge(5,1)");
                        TheChallenge_btn.innerHTML ="GO TO CHALLENGE 5";
                    }
                    
                
                /*=======================================*/
            }
        else if(Num==5)
            {
                initialLineHdf();
                Clear_Lower_Canvas();
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById('Comparison_Name').innerHTML='';
                SeacrhFor('Lamps','Category2');
                //SelectTarget('Fluorescent_Bulb','Targets2');         
                document.getElementById("Category_box4").innerHTML ="<i class=\"fab fa-medapps\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                $('#UpperGraphRow').css('visibility','visible');
                $('#UpperGraphRow').css('display','block');
                $('#LowerGraphRow').css('visibility','visible');
                $('#Control_row_measurement_units').css('visibility','hidden');
                
                 if(Section==1)
                    {
                        $('#Challenge5_Text1').css('visibility','visible');
                        $('#Challenge5_Text1').css('display','block');
                        $("#challenge_btn").attr("onclick","ShowChallenge(5,2)");
                        TheChallenge_btn.innerHTML ="GO TO DISCUSSION";
                    }
                else if(Section==2)
                    {
                        
                        $('#UpperGraphRow').css('visibility','hidden');
                        $('#UpperGraphRow').css('display','none');
                        $('#LowerGraphRow').css('visibility','hidden');
                        $('#Control_row_measurement_units').css('visibility','hidden');
                        $('#Challenge5_Text2').css('visibility','visible');
                        $('#Challenge5_Text2').css('display','block');
                        $("#challenge_btn").attr("onclick","ShowChallenge(6,1)");
                        TheChallenge_btn.innerHTML ="GO TO CHALLENGE 6";
                    }
                /*=======================================*/
            }
        else if(Num==6)
            {
                SelectTarget('Fluorescent_Bulb','Targets2');         
                document.getElementById("Category_box4").innerHTML ="<i class=\"fab fa-medapps\" id=\"Cat1_Lamps\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lamps\"></i>";
                document.getElementById('Targets2Filters').innerHTML='<option value="">Fluorescent Bulb</option>';
                
                $('#UpperGraphRow').css('visibility','hidden');
                $('#UpperGraphRow').css('display','none');
                $('#LowerGraphRow').css('visibility','visible');
                $("#challenge_btn").attr("onclick","ShowChallenge(6,1)");
                $('#Draw_message1').css('display','none');
                $('#Control_row_measurement_units').css('visibility','hidden');
                $('#Challenge6_Text').css('visibility','visible');
                $('#Challenge6_Text').css('display','block');
                $('#Challenge6_Text1').css('visibility','hidden');
                $('#Challenge6_Text1').css('display','none');
                $('#Challenge6_Text2').css('visibility','hidden');
                $('#Challenge6_Text2').css('display','none');
                $('#Challenge6_Text3').css('visibility','hidden');
                $('#Challenge6_Text3').css('display','none');
                $('#Challenge6_Text4').css('visibility','hidden');
                $('#Challenge6_Text4').css('display','none');

                $('#LowerCanvasGraph_message1').css('visibility','visible');
                $('#LowerCanvasGraph_message1').css('display','block');
                /*=======================================*/
                if(Section==1)
                    {
                         document.getElementById("SelectWavelength").selectedIndex = "0";
                        $('#Challenge6_Text1').css('visibility','visible');
                        $('#Challenge6_Text1').css('display','block');
                        $("#challenge_btn").attr("onclick","ShowChallenge(6,2)");
                        TheChallenge_btn.innerHTML ="GO TO NANOMETERS";
                    }
                /*=======================================*/
                else if(Section==2)
                    {
                         document.getElementById("SelectWavelength").selectedIndex = "0";
                        $('#Challenge6_Text2').css('visibility','visible');
                        $('#Challenge6_Text2').css('display','block');
                        $('#Control_row_measurement_units').css('position','absolute');
                        $('#Control_row_measurement_units').css('top',' 370px');
                        $('#Control_row_measurement_units').css('left',' 180px');
                        $('#Control_row_measurement_units').css('visibility','visible');
                        $('#Tutorial_PopUpC4').animate({'left':'7%'}, 500, function() {});
                        $("#challenge_btn").attr("onclick","ShowChallenge(6,3)");
                        TheChallenge_btn.innerHTML ="GO TO ENERGY";
                    }
                /*=======================================*/
                else if(Section==3)
                    {
                        $('#Challenge6_Text3').css('visibility','visible');
                        $('#Challenge6_Text3').css('display','block');
                        $('#Control_row_measurement_units').css('visibility','visible');
                        $("#challenge_btn").attr("onclick","ShowChallenge(6,4)");
                        TheChallenge_btn.innerHTML ="GO TO BRIGHTNESS";
                    }
                /*=======================================*/
                else if(Section==4)
                    {
                        $('#Challenge6_Text4').css('visibility','visible');
                        $('#Challenge6_Text4').css('display','block');
                        $('#Control_row_measurement_units').css('visibility','visible');
                        $("#challenge_btn").attr("onclick","ShowChallenge(7,1)");
                        TheChallenge_btn.innerHTML ="FINISH";
                    }
                /*=======================================*/
                else
                    {
                        
                        $('#Challenge6_Text').css('visibility','hidden');
                        $('#Challenge6_Text').css('display','none');
                        $('#Challenge6_Text1').css('visibility','hidden');
                        $('#Challenge6_Text1').css('display','none');
                        $('#Challenge6_Text2').css('visibility','hidden');
                        $('#Challenge6_Text2').css('display','none');
                        $('#Challenge6_Text3').css('visibility','hidden');
                        $('#Challenge6_Text3').css('display','none');
                    }
                /*=======================================*/
            }
        else if(Num==7)
            {
              
                $('#Challenge6_btn').removeClass("active");
                $('#Challenge6_Text').css('visibility','hidden');
                $('#Challenge6_Text').css('display','none');
                $('#Challenge6_Text1').css('visibility','hidden');
                $('#Challenge6_Text1').css('display','none');
                $('#Challenge6_Text2').css('visibility','hidden');
                $('#Challenge6_Text2').css('display','none');
                $('#Challenge6_Text3').css('visibility','hidden');
                $('#Challenge6_Text3').css('display','none');
                /*=======================================*/
                $('#Challenge7_Text').css('visibility','visible');
                /*=======================================*/
                $('#Challenge7_Text').css('display','block');
                $("#challenge_btn").css('visibility','hidden');
                /*=======================================*/
            }
        else
            {
                //This else statment apply for 1,2,3
                $('#UpperGraphRow').css('visibility','visible');
                $('#UpperGraphRow').css('display','block');
                $('#LowerGraphRow').css('visibility','hidden');
                $('#Control_row_measurement_units').css('visibility','hidden');
                /*=======================================*/
                challenge_btn_Text=(Num+1);
                TheChallenge_btn.innerHTML ="GO TO CHALLENGE "+challenge_btn_Text+"";
                /*=======================================*/
                if(Num>0 && Num<4)
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
		console.log('NextSlide('+Choice+')');
		switch(Choice){
          case "tool":
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#Tutorial_arrow_dn').css('visibility','hidden');
                $('#upperTool').addClass("Tutorial_activeSection");
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                /*=======================================*/
                /*           Change the text             */
                /*=======================================*/
                document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
                $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'140px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'228px'}, 500, function() {});
          break;
          case "spectrum_image":
                SeacrhFor('Draw','CategoryDraw');
                $('#U_D_CRH').css('z-index','0');
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $('#Tutorial_btns').css('padding-right','0px');
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('tool','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('rainbow','pick')");
                $('#Tutorial_backbtn').css('visibility','visible');
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperRainbowActiveDiv').css('visibility','visible');
                $('#upperTool').removeClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'650px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'250px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'24px'}, 500, function() {});
                /*=======================================*/
          break;
          case "rainbow":
                SeacrhFor('Draw','CategoryDraw');
                $('#U_D_CRH').css('z-index','0');
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('spectrum_image','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('graph','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'600px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'245px'}, 500, function() {});
                /*=======================================*/
          break;
          case "graph":
                SeacrhFor('Draw','CategoryDraw');
                $('#U_D_CRH').css('z-index','4');
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('rainbow','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('reset','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                //$('#UpperGraphActiveDiv').css('visibility','visible');
                //myDrawCanvas Tutorial_activeSection
                
                $("#myDrawCanvas").addClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'600px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'275px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "reset":
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('graph','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('comparison','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                $("#myDrawCanvas").removeClass("Tutorial_activeSection");
                $('#upper_resetbtn').addClass("Tutorial_activeSection");
                //LowerGraphRow
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-25%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'197px'}, 500, function() {});
                /*=======================================*/
          break;
          case "comparison":
                SeacrhFor('Lamps','Category2');
                SelectTarget('Fluorescent_Bulb','Targets2');
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
                $("#Fluorescent_Bulb_Category2").attr("selected","selected");
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('reset','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('dropdown','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                
                $('#LowerGraphRow').addClass("Tutorial_activeSection");
                $('#upper_resetbtn').removeClass("Tutorial_activeSection");
                $('#Tutorial_arrow_up').css('visibility','hidden');
                $('#Tutorial_arrow_dn').css('visibility','visible');
                $('#LowerGraphRow').css('visibility','visible');
                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'3%'}, 50, function() {});
                
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'270px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'-10px'}, 500, function() {});
                /*=======================================*/
          break;
          case "dropdown":
                
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text07;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('comparison','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('tutorial','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('visibility','hidden');
                $('#Tutorial_arrow_dn').css('visibility','visible');
                $('#LowerGraphRow').css('visibility','visible');
                
                $('#LowerGraphRow').removeClass("Tutorial_activeSection");
                $('#Targets2Filters').addClass("Tutorial_activeSection");
                $('#Targets2Filters').addClass("Tutorial_activeRounded");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_dn').css('left','-21%');
                $('#boxpopup1').animate({'width':'450px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'225px'}, 500, function() {});
                /*=======================================*/
          break;
          case "tutorial":
                
                $('#Targets2Filters').removeClass("Tutorial_activeSection");
                $('#Targets2Filters').removeClass("Tutorial_activeRounded");
                document.getElementById("Tutorial_Challenge_text_p").innerHTML = Tutorial_text08;
                $('#Tutorial_PopUp').animate({'left':'500%'}, 500, function() {});
                   
                $('#Tutorial_Challenge_PopUp').css('display','block');
                $('#Tutorial_Challenge_PopUp').css('visibility','visible');
                $('#Tutorial_Challenge_arrow_up').css('visibility','visible');
                $('#Tutorial_Challenge_arrow_dn').css('visibility','hidden');
                $('#Tutorial_Challenge_nextbtn').css('visibility','visible');
                $('#Tutorial_Challenge_backbtn').css('visibility','visible');
                $("#Tutorial_Challenge_backbtn").attr("onclick","PrevSlide('dropdown','pick')");
                $("#Tutorial_Challenge_nextbtn").attr("onclick","NextSlide('challenge','pick')");
                document.getElementById("Tutorial_Challenge_nextbtn").innerHTML = 'Next';
                $('#boxpopup_Challenge').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_Challenge_PopUp').animate({'left':'-4px'}, 500, function() {});
                $('#Tutorial_Challenge_PopUp').animate({'top':'-35px'}, 500, function() {});
                /*=======================================*/
          break;
          case "challenge":
                
                document.getElementById("Tutorial_Challenge_text_p").innerHTML = Tutorial_text09;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_Challenge_backbtn").attr("onclick","PrevSlide('tutorial','pick')");
                $("#Tutorial_Challenge_nextbtn").attr("onclick","closeInstructions('boxpopup1')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_Challenge_arrow_up').css('visibility','hidden');
                $('#Tutorial_Challenge_arrow_dn').css('visibility','hidden');
                $('#intro_icon').removeClass("Tutorial_activeSection");
                $('#challenge_btn').addClass("Tutorial_activeSection");
                $("#challenge_btn").css('visibility','visible');
                document.getElementById("Tutorial_Challenge_nextbtn").innerHTML = 'Finish';
                
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_Challenge_arrow_dn').css('left','55%');                    
                $('#boxpopup_Challenge').animate({'width':'600px'}, 50, function() {});
                $('#Tutorial_Challenge_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_Challenge_PopUp').animate({'top':'-70px'}, 500, function() {});
                /*=======================================*/
          break;
                
        }
		
	}
/*====================================================*/
/*====================================================*/
/*====================================================*/
function PrevSlide(Choice,pick) 
	{
		console.log('PrevSlide('+Choice+')');
		switch(Choice){
          case "tool":
                $('#U_D_CRH').css('z-index','4');
                $('#Tutorial_btns').css('padding-right','60px');
                document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                
                $('#upperTool').addClass("Tutorial_activeSection");
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $('#Tutorial_backbtn').css('visibility','hidden');
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('spectrum_image','pick')");
                $('#Tutorial_btns').css('padding-right','60px');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_PopUp').css('display','block');
                $('#Tutorial_PopUp').css('top','230px');
                $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'140px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'228px'}, 500, function() {});
                /*=======================================*/
          break;
          case "spectrum_image":
                SeacrhFor('Draw','CategoryDraw');
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text02;
                $('#U_D_CRH').css('z-index','0');
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                
                $('#upperTool').removeClass("Tutorial_activeSection");
                $('#Tutorial_btns').css('padding-right','0px');
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('tool','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('rainbow','pick')");
                $('#Tutorial_backbtn').css('visibility','visible');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/                
                $('#boxpopup1').animate({'width':'650px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'250px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'24px'}, 500, function() {});
                /*=======================================*/
          break;
          case "rainbow":
                SeacrhFor('Draw','CategoryDraw');
                $('#U_D_CRH').css('z-index','0');
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text03;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('spectrum_image','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('graph','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#UpperRainbowActiveDiv').css('visibility','visible');
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#boxpopup1').animate({'width':'600px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'245px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'24px'}, 500, function() {});
                /*=======================================*/
          break;
          case "graph":
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text04;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('rainbow','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('reset','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#upper_resetbtn').removeClass("Tutorial_activeSection");
                //$('#UpperGraphActiveDiv').css('visibility','visible');
                
                $("#myDrawCanvas").addClass("Tutorial_activeSection");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'3%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'600px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'275px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'150px'}, 500, function() {});
                /*=======================================*/
          break;
          case "reset":
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text05;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('graph','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('comparison','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#upper_resetbtn').addClass("Tutorial_activeSection");
                $('#Tutorial_arrow_dn').css('visibility','hidden');
                $('#Tutorial_arrow_up').css('visibility','visible');
                $('#LowerGraphRow').css('visibility','hidden');
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'-25%'}, 50, function() {});
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'197px'}, 500, function() {});
                /*=======================================*/
          break;
          case "comparison":
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text06;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('reset','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('dropdown','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#Tutorial_arrow_up').css('visibility','hidden');
                $('#Tutorial_arrow_dn').css('visibility','visible');
                $('#LowerGraphRow').css('visibility','visible');
                
                $('#LowerGraphRow').addClass("Tutorial_activeSection");
                
                $('#four').removeClass("Tutorial_activeSection");
                $('#four').removeClass("Tutorial_activeRounded");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_up').animate({'left':'3%'}, 50, function() {});
                $('#Tutorial_arrow_dn').animate({'left':'3%'}, 50, function() {});
                
                $('#boxpopup1').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'270px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'-10px'}, 500, function() {});
                /*=======================================*/
          break;
          case "dropdown":
                
                $('#Tutorial_Challenge_PopUp').animate({'left':'-1500%'}, 500, function() {});
                document.getElementById("Tutorial_text_p").innerHTML = Tutorial_text07;
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_backbtn").attr("onclick","PrevSlide('comparison','pick')");
                $("#Tutorial_nextbtn").attr("onclick","NextSlide('tutorial','pick')");
                /*=======================================*/
                /*    configure the active section       */
                /*=======================================*/
                $('#intro_icon').removeClass("Tutorial_activeSection");
                $('#Tutorial_arrow_up').css('visibility','hidden');
                $('#Tutorial_arrow_dn').css('visibility','visible');
                $('#Targets2Filters').addClass("Tutorial_activeSection");
                $('#Targets2Filters').addClass("Tutorial_activeRounded");
                /*=======================================*/
                /*       configure PopUp position        */
                /*=======================================*/
                $('#Tutorial_arrow_dn').css('left','-21%');
                
                $('#boxpopup1').animate({'width':'450px'}, 50, function() {});
                $('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
                $('#Tutorial_PopUp').animate({'top':'225px'}, 500, function() {});
                /*=======================================*/
          break;
          case "tutorial":
                
                document.getElementById("Tutorial_Challenge_text_p").innerHTML = Tutorial_text08;
                $('#Tutorial_Challenge_PopUp').css('display','block');
                $('#Tutorial_Challenge_PopUp').css('visibility','visible');
                $('#Tutorial_Challenge_arrow_up').css('visibility','visible');
                $('#Tutorial_Challenge_arrow_dn').css('visibility','hidden');
                $('#Tutorial_Challenge_nextbtn').css('visibility','visible');
                $('#Tutorial_Challenge_backbtn').css('visibility','visible');
                document.getElementById("Tutorial_Challenge_nextbtn").innerHTML = 'Next';
                /*=======================================*/
                /*        configure the bottons          */
                /*=======================================*/
                $("#Tutorial_Challenge_backbtn").attr("onclick","PrevSlide('dropdown','pick')");
                $("#Tutorial_Challenge_nextbtn").attr("onclick","NextSlide('challenge','pick')");
                $('#boxpopup_Challenge').animate({'width':'550px'}, 50, function() {});
                $('#Tutorial_Challenge_PopUp').animate({'left':'-4px'}, 500, function() {});
                $('#Tutorial_Challenge_PopUp').animate({'top':'-35px'}, 500, function() {});
              
                /*=======================================*/
          break;
        }
    }
/*====================================================*/
/*====================================================*/
function openInstructions() 
{
    console.log('Clicked on openInstructions');
    closeInstructionsC4();
	//$('#overlay2').fadeIn('fast');
    $("#challenge_btn").css('visibility','hidden');
    $('#Tutorial_arrow_up').css('visibility','visible');
    $('#Tutorial_arrow_dn').css('visibility','hidden');
    /*=======================================*/
    $("#Challenge_Buttons_Div").addClass("disabledbutton");
    $("#intro_icon").addClass("disabledbutton");
    $("#Control_row_plot_units_type").addClass("disabledbutton");
    $("#Control_row_measurement_units").addClass("disabledbutton");
    $("#XAxis_Range").addClass("disabledbutton");
    /*=======================================*/
    document.getElementById("Tutorial_nextbtn").innerHTML = 'Next';
    
    $('#Tutorial_arrow_up').css('left','3%');
    $('#Tutorial_arrow_dn').css('left','3%');
    $('#U_D_CRH').css('z-index','4');
    $("#Tutorial_nextbtn").attr("onclick","NextSlide('spectrum_image','pick')");
    /*=======================================*/
    /*       configure PopUp position        */
    /*=======================================*/   
	$('#Tutorial_PopUp').css('display','block');
    $('#boxpopup1').animate({'width':'580px'}, 50, function() {});
    $('#Tutorial_PopUp').css('top','230px');
	$('#Tutorial_PopUp').animate({'left':'0px'}, 500, function() {});
    /*=======================================*/
    /*    configure the active section       */
    /*=======================================*/
    
    $('#upperTool').addClass("Tutorial_activeSection");
    
    /*=======================================*/
    /*        configure the bottons          */
    /*=======================================*/
    $('#Tutorial_backbtn').css('visibility','hidden');
    $('#Tutorial_btns').css('padding-right','60px');
    document.getElementById("Tutorial_text_p").innerHTML =Tutorial_text01;Mars

}
/*==================*/
function closeInstructions(prospectElementID) {
	//console.log('Clicked on closeInstructions');
    /*=======================================*/
    $("#Challenge_Buttons_Div").removeClass("disabledbutton");
    $("#intro_icon").removeClass("disabledbutton");
    $("#Control_row_plot_units_type").removeClass("disabledbutton");
    $("#Control_row_measurement_units").removeClass("disabledbutton");
    $("#XAxis_Range").removeClass("disabledbutton");
    /*=======================================*/
	$(function($) {
		$(document).ready(function() {
            $("#challenge_btn").css('visibility','visible');
            //console.log("closeInstructions and closeInstructions=(%s)",Current_Challenge);
            if(Current_Challenge==4)
                {$('#LowerGraphRow').css('visibility','visible');}
            else
                {$('#LowerGraphRow').css('visibility','hidden');}
                $('#Review_Text1').css('visibility','visible');
                $('#Review_Text1').css('display','block');
            
			$('#Tutorial_PopUp').animate({'left':'500%'}, 500, function() {
                
                $('#Tutorial_Challenge_PopUp').css('display','none');
                $('#Tutorial_Challenge_PopUp').css('visibility','hidden');
                $('#Tutorial_Challenge_arrow_up').css('visibility','hidden');
                $('#Tutorial_Challenge_nextbtn').css('visibility','hidden');
                $('#Tutorial_Challenge_backbtn').css('visibility','hidden');
                $('#upperTool').removeClass("Tutorial_activeSection");
                $('#UpperRainbowActiveDiv').css('visibility','hidden');
                $('#UpperGraphActiveDiv').css('visibility','hidden');
                
                $("#myDrawCanvas").removeClass("Tutorial_activeSection");
                $('#upper_resetbtn').removeClass("Tutorial_activeSection");
				$('#Tutorial_PopUp').css('left','500%');
				$('#overlay1').fadeOut('fast');
				//$('#overlay2').fadeOut('fast');
                $('#Tutorial_arrow_up').css('left','3%');
                $('#Tutorial_arrow_dn').css('left','3%');
			});
		});
	});
}
/*====================================================*/
function Hide_Draw_Msg1()
{
   $('#Draw_message1').css('display','none');
}
/*====================================================*/
/*====================================================*/

function closeInstructionsC4() {
    $('#Tutorial_PopUpC4').animate({'left':'500%'}, 500, function() {});
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