	
	$(document).ready(function(){
		$("#items_container_div").css("marginLeft", -$("#items_container_div").width()/2 + "px");
		//$("#items_container_div").css("opacity", 1);
		$("#left_menyu_images").css("marginTop", -$("#left_menyu_images").height()/2 + "px");
		$("#left_menyu_images").css("opacity", 1);
		
		var h = setInterval(function(){
			
			$("#items_container_div").css("marginLeft", -$("#items_container_div").width()/2 + "px");
			$("#items_container_div").css("opacity", 1);
			
			$(".items_01").each(function(){
				$(this).css("fontSize", $("#anchor_point_img").width()/100*12 + "px");
			});
			
			$("#items_iframes_container_div_01").css("marginLeft", -$("#items_iframes_container_div_01").width()/2 + "px");
			$("#items_iframes_container_div_02").css("marginLeft", -$("#items_iframes_container_div_02").width()/2 + "px");
			$("#items_iframes_container_div_03").css("marginLeft", -$("#items_iframes_container_div_03").width()/2 + "px");
			$("#items_iframes_container_div_04").css("marginLeft", -$("#items_iframes_container_div_04").width()/2 + "px");
			/*$("#items_iframes_container_div_05").css("marginLeft", -$("#items_iframes_container_div_05").width()/2 + "px");*/
			
			$("body").find("div a img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").css("display", "none"); 
			
			$("#left_menyu_images").css("marginTop", -$("#left_menyu_images").height()/2 + "px");
			
		}, 10);
		
		$("#first_item_span_01").click(function(){
			
			$("#items_iframes_container_div_02").css("display", "none");
			$("#items_iframes_container_div_03").css("display", "none");
			$("#items_iframes_container_div_04").css("display", "none");
			/*$("#items_iframes_container_div_05").css("display", "none");*/
			$("#items_iframes_container_div_01").css("display", "none");
			
			$("#left_menyu_items_02_PDF").css("display", "none");
			$("#left_menyu_items_03_WORD").css("display", "none");
			/*$("#left_menyu_items_04_VISIO").css("display", "none");*/
			
			$("#items_iframes_container_div_02").css("width", "30%");
			$("#items_iframes_container_div_03").css("width", "30%");
			$("#items_iframes_container_div_04").css("width", "30%");
			/*$("#items_iframes_container_div_05").css("width", "30%");*/
			$("#items_iframes_container_div_01").css("width", "30%");
			
			$("#items_iframes_container_div_01").css("width", "70%");
			$("#items_iframes_container_div_01").css("opacity", 0);
			
			$("#download_link_02").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 Propratno pismo.pdf");
			$("#download_link_03").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 Propratno pismo.docx");
			/*$("#download_link_04").attr("href", "");*/
			
			$("#first_item_span_01").css("border", "0.4vw solid white");
			$("#second_item_span_02").css("border", "0.3vw solid white");
			$("#third_item_span_03").css("border", "0.3vw solid white");
			$("#fourth_item_span_04").css("border", "0.3vw solid white");
			
			setTimeout(function(){
				$("#items_iframes_container_div_01").css("display", "block");
				$("#items_iframes_container_div_01").css("opacity", 1);
				
				$("#left_menyu_items_02_PDF").css("display", "block");
				$("#left_menyu_items_03_WORD").css("display", "block");
			}, 300);
		});
		
		$("#second_item_span_02").click(function(){
			
			$("#items_iframes_container_div_01").css("display", "none");
			$("#items_iframes_container_div_03").css("display", "none");
			$("#items_iframes_container_div_04").css("display", "none");
			/*$("#items_iframes_container_div_05").css("display", "none");*/
			$("#items_iframes_container_div_02").css("display", "none");
			
			$("#left_menyu_items_02_PDF").css("display", "none");
			$("#left_menyu_items_03_WORD").css("display", "none");
			/*$("#left_menyu_items_04_VISIO").css("display", "none");*/
			
			$("#items_iframes_container_div_02").css("width", "30%");
			$("#items_iframes_container_div_03").css("width", "30%");
			$("#items_iframes_container_div_04").css("width", "30%");
			/*$("#items_iframes_container_div_05").css("width", "30%");*/
			$("#items_iframes_container_div_01").css("width", "30%");
			
			$("#items_iframes_container_div_02").css("width", "70%");
			$("#items_iframes_container_div_02").css("opacity", 0);
			
			$("#download_link_02").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 Motivaciono pismo.pdf");
			$("#download_link_03").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 Motivaciono pismo.docx");
			/*$("#download_link_04").attr("href", "Files_For_Download_My_Project_01_PRRA_Vanja_Sretenovic_8_2019/Visio_Timeline_Vanja_Sretenovic_8_2019.vsdx");*/
			
			$("#first_item_span_01").css("border", "0.3vw solid white");
			$("#second_item_span_02").css("border", "0.4vw solid white");
			$("#third_item_span_03").css("border", "0.3vw solid white");
			$("#fourth_item_span_04").css("border", "0.3vw solid white");
			
			setTimeout(function(){
				$("#items_iframes_container_div_02").css("display", "block");
				$("#items_iframes_container_div_02").css("opacity", 1);
				
				$("#left_menyu_items_02_PDF").css("display", "block");
				$("#left_menyu_items_03_WORD").css("display", "block");
				/*$("#left_menyu_items_04_VISIO").css("display", "block");*/
			}, 300);
		});
		
		$("#third_item_span_03").click(function(){
			$("#items_iframes_container_div_01").css("display", "none");
			$("#items_iframes_container_div_02").css("display", "none");
			$("#items_iframes_container_div_04").css("display", "none");
			/*$("#items_iframes_container_div_05").css("display", "none");*/
			$("#items_iframes_container_div_03").css("display", "none");
			
			$("#left_menyu_items_02_PDF").css("display", "none");
			$("#left_menyu_items_03_WORD").css("display", "none");
			/*$("#left_menyu_items_04_VISIO").css("display", "none");*/
			
			$("#items_iframes_container_div_02").css("width", "30%");
			$("#items_iframes_container_div_03").css("width", "30%");
			$("#items_iframes_container_div_04").css("width", "30%");
			/*$("#items_iframes_container_div_05").css("width", "30%");*/
			$("#items_iframes_container_div_01").css("width", "30%");
			
			$("#items_iframes_container_div_03").css("width", "70%");
			$("#items_iframes_container_div_03").css("opacity", 0);
			
			$("#download_link_02").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 CV.pdf");
			$("#download_link_03").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 CV.docx");
			/*$("#download_link_04").attr("href", "Files_For_Download_My_Project_01_PRRA_Vanja_Sretenovic_8_2019/Visio_Gantt_Dijagram_Vanja_Sretenovic_8_2019.vsdx");*/
			
			$("#first_item_span_01").css("border", "0.3vw solid white");
			$("#second_item_span_02").css("border", "0.3vw solid white");
			$("#third_item_span_03").css("border", "0.4vw solid white");
			$("#fourth_item_span_04").css("border", "0.3vw solid white");
			
			setTimeout(function(){
				$("#items_iframes_container_div_03").css("display", "block");
				$("#items_iframes_container_div_03").css("opacity", 1);
				
				$("#left_menyu_items_02_PDF").css("display", "block");
				$("#left_menyu_items_03_WORD").css("display", "block");
				/*$("#left_menyu_items_04_VISIO").css("display", "block");*/
			}, 300);
		});
		
		$("#fourth_item_span_04").click(function(){
			$("#items_iframes_container_div_01").css("display", "none");
			$("#items_iframes_container_div_02").css("display", "none");
			$("#items_iframes_container_div_03").css("display", "none");
			/*$("#items_iframes_container_div_05").css("display", "none");*/
			$("#items_iframes_container_div_04").css("display", "none");
			
			$("#left_menyu_items_02_PDF").css("display", "none");
			$("#left_menyu_items_03_WORD").css("display", "none");
			/*$("#left_menyu_items_04_VISIO").css("display", "none");*/
			
			$("#items_iframes_container_div_02").css("width", "30%");
			$("#items_iframes_container_div_03").css("width", "30%");
			$("#items_iframes_container_div_04").css("width", "30%");
			/*$("#items_iframes_container_div_05").css("width", "30%");*/
			$("#items_iframes_container_div_01").css("width", "30%");
			
			$("#items_iframes_container_div_04").css("width", "70%");
			$("#items_iframes_container_div_04").css("opacity", 0);
			
			$("#download_link_02").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 Biografija.pdf");
			$("#download_link_03").attr("href", "Vanja_Sretenovic_8_2019_My_CV_Documents/Vanja Sretenovic 8_2019 Biografija.docx");
			/*$("#download_link_04").attr("href", "Files_For_Download_My_Project_01_PRRA_Vanja_Sretenovic_8_2019/Visio_Plan_Sale_Vanja_Sretenovic_8_2019.vsdx");*/
			
			$("#first_item_span_01").css("border", "0.3vw solid white");
			$("#second_item_span_02").css("border", "0.3vw solid white");
			$("#third_item_span_03").css("border", "0.3vw solid white");
			$("#fourth_item_span_04").css("border", "0.4vw solid white");
			
			setTimeout(function(){
				$("#items_iframes_container_div_04").css("display", "block");
				$("#items_iframes_container_div_04").css("opacity", 1);
				
				$("#left_menyu_items_02_PDF").css("display", "block");
				$("#left_menyu_items_03_WORD").css("display", "block");
				/*$("#left_menyu_items_04_VISIO").css("display", "block");*/
			}, 300);
		});
		
		/*
		$("#fivth_item_span_05").click(function(){
			$("#items_iframes_container_div_01").css("display", "none");
			$("#items_iframes_container_div_02").css("display", "none");
			$("#items_iframes_container_div_03").css("display", "none");
			$("#items_iframes_container_div_04").css("display", "none");
			$("#items_iframes_container_div_05").css("display", "none");
			
			$("#left_menyu_items_02_PDF").css("display", "none");
			$("#left_menyu_items_03_WORD").css("display", "none");
			$("#left_menyu_items_04_VISIO").css("display", "none");
			
			$("#items_iframes_container_div_02").css("width", "30%");
			$("#items_iframes_container_div_03").css("width", "30%");
			$("#items_iframes_container_div_04").css("width", "30%");
			$("#items_iframes_container_div_05").css("width", "30%");
			$("#items_iframes_container_div_01").css("width", "30%");
			
			$("#items_iframes_container_div_05").css("width", "70%");
			$("#items_iframes_container_div_05").css("opacity", 0);
			
			$("#download_link_02").attr("href", "Files_For_Download_My_Project_01_PRRA_Vanja_Sretenovic_8_2019/Visio_Mind_Map_Plan Konferencije_Vanja_Sretenovic_8_2019.pdf");
			$("#download_link_03").attr("href", "");
			$("#download_link_04").attr("href", "Files_For_Download_My_Project_01_PRRA_Vanja_Sretenovic_8_2019/Visio_Mind_Map_Plan_Konferencije_Vanja_Sretenovic_8_2019.vsdx");
			
			setTimeout(function(){
				$("#items_iframes_container_div_05").css("display", "block");
				$("#items_iframes_container_div_05").css("opacity", 1);
				
				$("#left_menyu_items_02_PDF").css("display", "block");
				$("#left_menyu_items_04_VISIO").css("display", "block");
			}, 300);
		});
		*/
	});