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
var Current_Challenge="";
/////////////////////////////////////////////////////////////////////
/*====================================================*/
initialLineHdf();
/*====================================================*/
function ShowChallenge(Num,Section)
{
        /*  Reset All Button and Set Active one     */
        var nextChallenge=1;
        /*=======================================*/
        document.getElementById("h4_target").innerHTML ="Target Object";
        $('#ChallengeIntro_Text').css('visibility','hidden');
        $('#ChallengeIntro_Text').css('display','none');
        /*=======================================*/
        Current_Challenge=Num;
        for (var CB = 1; CB < 6; CB++)
            {
                $('#Challenge'+CB+'_btn').removeClass("active");
                $('#Challenge'+CB+'_Text').css('visibility','hidden');
                $('#Challenge'+CB+'_Text').css('display','none');
            }
    
        /*=======================================*/
        $('#ChallengeIntro_Text').css('visibility','hidden');
        $('#ChallengeIntro_Text').css('display','none');      
        $('#Challenge2_Text1').css('visibility','hidden');
        $('#Challenge2_Text1').css('display','none');       
        $('#Challenge2_Text2').css('visibility','hidden');
        $('#Challenge2_Text2').css('display','none'); 
        $("#LowerDraw_Object").css('visibility','hidden');
        $("#LowerDraw_Object").css('display','none');
        $("#LowerComparison_Object").css('visibility','hidden');
        $("#LowerComparison_Object").css('display','none');
        /*=======================================*/
        $('#Challenge'+Num+'_btn').addClass("active");
        /*=======================================*/
        $('#Challenge'+Num+'_Text').css('visibility','visible');
        /*=======================================*/
        $('#Challenge'+Num+'_Text').css('display','block');
        /*=======================================*/
        $("#Challenges_btns").css('visibility','visible');
        $("#challenge_btn").css('visibility','visible');
        /*=======================================*/
        if(Num==1)
            {
                initialLineHdf();
                 $('#LowerGraphRow').css('visibility','hidden');
                initialLineHdf();
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";
                SeacrhFor('Nature','Category1');
                SelectTarget('Tree_in_Summer_Reflection','Targets1');
                document.getElementById('Targets1Filters').innerHTML='<option value="">Tree in Summer Reflection</option>';
                SelectTarget('Tree_in_Summer_Reflection','Targets1');
                /*<i class="fa fa-leaf" id="Cat1_Plants" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="" onclick="SeacrhFor('Plants','Category1')" data-original-title="Plants"></i>*/
                document.getElementById("Category_box3").innerHTML ='<i class="fa fa-leaf" id="Cat1_Nature" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Nature"></i>';
                document.getElementById("Category_box4").innerHTML ='<i class="fa fa-leaf" id="Cat2_Nature" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Nature"></i>';
                document.getElementById('UpperImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                //$("#Mars_Category1").removeAttr("selected","selected");
                $('#All_Tools_And_Controls').css('visibility','visible');
                $('#All_Tools_And_Controls').css('display','block');
                /*=======================================*/          
                $('#Challenge1_Text').css('visibility','visible');
                $('#Challenge1_Text').css('display','block');      
                /*=======================================*/
                $("#challenge_btn").attr("onclick","ShowChallenge(2,1)");
                document.getElementById("challenge_btn").innerHTML ="NEXT";
            }
        else if(Num==2)
            {
                initialLineHdf();
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";
                $("#LowerComparison_Object").css('visibility','visible');
                $("#LowerComparison_Object").css('display','block');
                /*=======================================*/
                SeacrhFor('Nature','Category1');
                SelectTarget('Cactus_Reflection','Targets1');
                document.getElementById("Category_box3").innerHTML ='<i class="fa fa-leaf" id="Cat2_Nature" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Nature"></i>';
                document.getElementById('Targets1Filters').innerHTML='<option value="">Cactus Reflection</option>';
                SelectTarget('Cactus_Reflection','Targets1');
                /*=======================================*/
                document.getElementById("Category_box4").innerHTML ='<i class="fa fa-leaf" id="Cat2_Nature" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Nature"></i>';
                SeacrhFor('Nature','Category2');
                SelectTarget('Pansy_Reflection','Targets2');
                document.getElementById('Targets2Filters').innerHTML='<option value="">Pansy Reflection</option>';
                SelectTarget('Pansy_Reflection','Targets2');
                /*=======================================*/
                /*=======================================*/
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/  
                if(Section==1)
                    {
                        /*=======================================*/          
                        $('#Challenge2_Text1').css('visibility','visible');
                        $('#Challenge2_Text1').css('display','block');
                document.getElementById('UpperImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                document.getElementById('LowerImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                        /*=======================================*/
                        $("#challenge_btn").attr("onclick","ShowChallenge(2,2)");
                        document.getElementById("challenge_btn").innerHTML ="NEXT";
                    }
                else if(Section==2)
                    {
                        

                        /*=======================================*/          
                        $('#Challenge2_Text2').css('visibility','visible');
                        $('#Challenge2_Text2').css('display','block');      
                        /*=======================================*/
                        $("#challenge_btn").attr("onclick","ShowChallenge(3,1)");
                        document.getElementById("challenge_btn").innerHTML ="NEXT";
                    }
            }
        else if(Num==3)
            {
                initialLineHdf();
                /*=======================================*/
                SeacrhFor('Fishtank_Lights','Category1');
                SeacrhFor('Draw','CategoryDraw');
                /*=======================================*/
                document.getElementById("h4_target").innerHTML ="Tank Lighting Choices.";
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";
                $('#LowerGraphRow').css('visibility','visible');
                /*=======================================*/
                $("#LowerComparison_Object").css('visibility','hidden');
                $("#LowerComparison_Object").css('display','none');
                $("#LowerDraw_Object").css('visibility','visible');
                $("#LowerDraw_Object").css('display','block');
                /*=======================================*/
                document.getElementById("Category_box3").innerHTML ='<i class="fas fa-fish" id="Cat3_fish" data-toggle="tooltip" data-placement="bottom" title="Fish Tank"></i>';
                /*=======================================*/
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";
                document.getElementById('UpperImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                SeacrhFor('Fishtank_Lights','Category1');
                /*=======================================*/          
                $('#Challenge3_Text').css('visibility','visible');
                $('#Challenge3_Text').css('display','block');      
                /*=======================================*/
                $("#challenge_btn").attr("onclick","ShowChallenge(4,1)");
                document.getElementById("challenge_btn").innerHTML ="BONUS";

            }
        /*=======================================*/
        else if(Num==4)
            {
                initialLineHdf();
                /*=======================================*/
                SeacrhFor('Fishtank_Lights','Category1');
                SeacrhFor('Draw','CategoryDraw');
                /*=======================================*/
                document.getElementById("h4_target").innerHTML ="Tank Lighting Choices.";
                document.getElementById("Target_Name").innerHTML ="";
                document.getElementById("Comparison_Name").innerHTML ="";
                $('#LowerGraphRow').css('visibility','visible');
                document.getElementById("Category_box3").innerHTML ='<i class="fas fa-fish" id="Cat3_fish" data-toggle="tooltip" data-placement="bottom" title="Fish Tank"></i>';
                /*=======================================*/
                $("#LowerComparison_Object").css('visibility','hidden');
                $("#LowerComparison_Object").css('display','none');
                $("#LowerDraw_Object").css('visibility','visible');
                $("#LowerDraw_Object").css('display','block');
                /*=======================================*/
                document.getElementById('UpperImg').src="includes/AI_common/images/Harry_sun_spectrum.jpg";
                /*=======================================*/    
                $('#Challenge4_Text').css('visibility','visible');
                $('#Challenge4_Text').css('display','block');   
                /*=======================================*/
                $("#challenge_btn").css('visibility','hidden');
                /*=======================================*/
                $("#challenge_btn").attr("onclick","ShowChallenge(5,1)");
                document.getElementById("challenge_btn").innerHTML ="FINISH";
                /*=======================================*/
            }
        /*=======================================*/
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