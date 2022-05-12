// // var fs = require('fs');
class OpenOptions{
	constructor(opt){
		this.opt_compact = opt ? opt.opt_compact : true;
		this.Always_On_top = opt ? opt.Always_On_top : false;
		this.Show_pilots = opt ? opt.Show_pilots : false;
		this.Circles = opt ? opt.Circles : false;
		this.Node_size = opt ? opt.Node_size : 9;
		this.Angular_Widths = opt ? opt.Angular_Widths : 0;
		this.frameBorder = opt ? opt.frameBorder : true;
		// this.opt_colorStatics = opt ? opt.opt_colorStatics : true;
		this.opt_colorStatics = opt ? (opt.opt_colorStatics == 'undefined' ? true : opt.opt_colorStatics) : true;
		
		this.color_back 		= opt ? opt.color_back 		: "#1A1A1A";
		this.color_t1 			= opt ? opt.color_t1 		: "#FFFFFF";
		this.color_t2 			= opt ? opt.color_t2 		: "#bfbfbf";
		this.color_fr1 			= opt ? opt.color_fr1 		: "#262626";
		this.color_fr2 			= opt ? opt.color_fr2 		: "#1A1A1A";
		this.color_sys 			= opt ? opt.color_sys 		: "#FFFFFF";
		this.color_sys2 		= opt ? opt.color_sys2 		: "#000000";
		this.color_High 		= opt ? opt.color_High 		: "#00CCFF";
		this.color_Low 			= opt ? opt.color_Low 		: "#FFFF00";
		this.color_Null 		= opt ? opt.color_Null 		: "#6633CC";
		this.color_C1 			= opt ? opt.color_C1 		: "#00FF00";
		this.color_C2 			= opt ? opt.color_C2 		: "#33CC00";
		this.color_C3 			= opt ? opt.color_C3 		: "#55BB00";
		this.color_C4 			= opt ? opt.color_C4 		: "#BB5500";
		this.color_C5 			= opt ? opt.color_C5 		: "#CC2200";
		this.color_C6 			= opt ? opt.color_C6 		: "#CC0000";
		this.color_C13 			= opt ? opt.color_C13 		: "#CC6699";
		this.color_C14 			= opt ? opt.color_C14 		: "#999966";
		this.color_C15 			= opt ? opt.color_C15 		: "#999966";
		this.color_C16 			= opt ? opt.color_C16 		: "#999966";
		this.color_C17 			= opt ? opt.color_C17 		: "#999966";
		this.color_Abyss 		= opt ? opt.color_Abyss 	: "#996633";
		this.color_Thera 		= opt ? opt.color_Thera 	: "#660033";
		this.color_Pochven 		= opt ? opt.color_Pochven 	: "#660000";

	}
	save(opt){//console.log(this);
		var to_save = {
			"opt_compact" : this.opt_compact,
			"Always_On_top" : this.Always_On_top,
			"Show_pilots" : this.Show_pilots,
			"Circles" : this.Circles,
			"Node_size" : this.Node_size,
			"Angular_Widths" : this.Angular_Widths,
			"frameBorder" : this.frameBorder,		
			"opt_colorStatics" : this.opt_colorStatics			
		};
		setCookie('options',this);
	}

	// this.createOptions = function(prop,val){
		// // var opt = {
			// // "Always_On_top": false,
			// // "Show_pilots": false,
			// // "Circles": false,
			// // "Node_size": 9,
			// // "Angular_Widths": 0,
			// // "frameBorder": true
		// // };
		// // setCookie('options',saved_options);
	// };

}	
function loadOptions(data){
	if(!data){data = '{}';}
	// console.log(data);
	// console.log(JSON.parse(data));
	if(data){
		saved_options = new OpenOptions(JSON.parse(data));		
	}
	else{
		saved_options = new OpenOptions();
	}
	// console.log(saved_options);
	// console.log(saved_options[0].Always_On_top);
	document.getElementById("opt_compact") ? document.getElementById("opt_compact").checked = saved_options.opt_compact : null;
	document.getElementById("onTop") ? document.getElementById("onTop").checked = saved_options.onTop : null;
	document.getElementById("opt_pilots") ? document.getElementById("opt_pilots").checked = saved_options.Show_pilots : null;
	document.getElementById("opt_circles") ? document.getElementById("opt_circles").checked = saved_options.Circles : null;
	document.getElementById("opt_statics") ? document.getElementById("opt_statics").checked = saved_options.opt_statics : null;
	document.getElementById("opt_colorStatics") ? document.getElementById("opt_colorStatics").checked = saved_options.opt_colorStatics : null;
	document.getElementById("totalAngularWidths") ? document.getElementById("totalAngularWidths").value = saved_options.Angular_Widths : null;
	document.getElementById("nodeSize") ? document.getElementById("nodeSize").value = saved_options.Node_size : null;
	document.getElementById("noBorder") ? document.getElementById("noBorder").checked = !saved_options.frameBorder : null;
	
	saved_options.color_back 	= saved_options.color_back 	?	saved_options.color_back	: "#1A1A1A";	setJsColor("color_back",saved_options.color_back);opt_setNewColor(document.getElementById("color_back"),saved_options.color_back)
	saved_options.color_t1 		= saved_options.color_t1 	?	saved_options.color_t1		: "#FFFFFF";	setJsColor("color_t1",saved_options.color_t1);opt_setNewColor(document.getElementById("color_t1"),saved_options.color_t1)
	saved_options.color_t2 		= saved_options.color_t2 	?	saved_options.color_t2		: "#bfbfbf";	setJsColor("color_t2",saved_options.color_t2);opt_setNewColor(document.getElementById("color_t2"),saved_options.color_t2)
	saved_options.color_fr1 	= saved_options.color_fr1	?	saved_options.color_fr1		: "#262626";	setJsColor("color_fr1",saved_options.color_fr1);opt_setNewColor(document.getElementById("color_fr1"),saved_options.color_fr1)
	saved_options.color_fr2 	= saved_options.color_fr2 	?	saved_options.color_fr2		: "#1A1A1A";	setJsColor("color_fr2",saved_options.color_fr2);opt_setNewColor(document.getElementById("color_fr2"),saved_options.color_fr2)
	saved_options.color_sys 	= saved_options.color_sys 	?	saved_options.color_sys		: "#FFFFFF";	setJsColor("color_sys",saved_options.color_sys);opt_setNewColor(document.getElementById("color_sys"),saved_options.color_sys)
	saved_options.color_sys2 	= saved_options.color_sys2 	?	saved_options.color_sys2	: "#000000";	setJsColor("color_sys2",saved_options.color_sys2);opt_setNewColor(document.getElementById("color_sys2"),saved_options.color_sys2)
	// saved_options.color_text 	= saved_options.color_text 	?	saved_options.color_text	: "#FFFFFF";	setJsColor("color_text",saved_options.color_text);opt_setNewColor(document.getElementById("color_text"),saved_options.color_text)
	saved_options.color_High 	= saved_options.color_High 	?	saved_options.color_High	: "#00CCFF";	setJsColor("color_High",saved_options.color_High);
	saved_options.color_Low 	= saved_options.color_Low 	?	saved_options.color_Low		: "#FFFF00";	setJsColor("color_Low",saved_options.color_Low);
	saved_options.color_Null 	= saved_options.color_Null 	?	saved_options.color_Null	: "#6633CC";	setJsColor("color_Null",saved_options.color_Null);
	saved_options.color_C1 		= saved_options.color_C1 	?	saved_options.color_C1		: "#00FF00";	setJsColor("color_C1",saved_options.color_C1);
	saved_options.color_C2 		= saved_options.color_C2 	?	saved_options.color_C2		: "#33CC00";	setJsColor("color_C2",saved_options.color_C2);
	saved_options.color_C3 		= saved_options.color_C3 	?	saved_options.color_C3		: "#55BB00";	setJsColor("color_C3",saved_options.color_C3);
	saved_options.color_C4 		= saved_options.color_C4 	?	saved_options.color_C4		: "#BB5500";	setJsColor("color_C4",saved_options.color_C4);
	saved_options.color_C5 		= saved_options.color_C5 	?	saved_options.color_C5		: "#CC2200";	setJsColor("color_C5",saved_options.color_C5);
	saved_options.color_C6 		= saved_options.color_C6 	?	saved_options.color_C6		: "#CC0000";	setJsColor("color_C6",saved_options.color_C6);
	saved_options.color_C13 	= saved_options.color_C13 	?	saved_options.color_C13		: "#CC6699";	setJsColor("color_C13",saved_options.color_C13);
	saved_options.color_C14 	= saved_options.color_C14 	?	saved_options.color_C14		: "#999966";	setJsColor("color_C14",saved_options.color_C14);
	saved_options.color_C15 	= saved_options.color_C15 	?	saved_options.color_C15		: "#999966";	setJsColor("color_C15",saved_options.color_C15);
	saved_options.color_C16 	= saved_options.color_C16 	?	saved_options.color_C16		: "#999966";	setJsColor("color_C16",saved_options.color_C16);
	saved_options.color_C17 	= saved_options.color_C17 	?	saved_options.color_C17		: "#999966";	setJsColor("color_C17",saved_options.color_C17);
	saved_options.color_Abyss 	= saved_options.color_Abyss ?	saved_options.color_Abyss	: "#996633";	setJsColor("color_Abyss",saved_options.color_Abyss);
	saved_options.color_Thera 	= saved_options.color_Thera ?	saved_options.color_Thera	: "#660033";	setJsColor("color_Thera",saved_options.color_Thera);
	saved_options.color_Pochven = saved_options.color_Pochven ?	saved_options.color_Pochven	: "#660000";	setJsColor("color_Pochven",saved_options.color_Pochven);
	
	saved_options.save();
// console.log(document.getElementById("color_High"));
// console.log(saved_options.color_High);


fullmap = fullmap1(saved_options);
// constellations = constellations1(saved_options);
systemJumps = systemJumps1(saved_options);
regions = regions1(saved_options);
// holeTypes = holeTypes1(saved_options);
whSysInfo = whSysInfo1(saved_options);
// console.log(saved_options);
}
function setJsColor(id,color){
	document.getElementById(id) ? (document.getElementById(id).style.color = color, document.getElementById(id).style.backgroundColor = color, document.getElementById(id).value = color) : null;
}
function setColorDefault(){
	setJsColor("color_back","#1A1A1A");	opt_setNewColor(document.getElementById("color_back"),"#1A1A1A")
	setJsColor("color_t1","#FFFFFF");	opt_setNewColor(document.getElementById("color_t1"),"#FFFFFF")
	setJsColor("color_t2","#bfbfbf");	opt_setNewColor(document.getElementById("color_t2"),"#bfbfbf")
	setJsColor("color_fr1","#262626");opt_setNewColor(document.getElementById("color_fr1"),"#262626")
	setJsColor("color_fr2","#1A1A1A");opt_setNewColor(document.getElementById("color_fr2"),"#1A1A1A")
	setJsColor("color_sys","#FFFFFF");opt_setNewColor(document.getElementById("color_sys"),"#FFFFFF")
	setJsColor("color_sys2","#000000");opt_setNewColor(document.getElementById("color_sys2"),"#000000")
	// setJsColor("color_text","#FFFFFF");opt_setNewColor(document.getElementById("color_text"),"#FFFFFF")
	setJsColor("color_High","#00CCFF");opt_setNewColor(document.getElementById("color_High"),"#00CCFF")
	setJsColor("color_Low","#FFFF00");opt_setNewColor(document.getElementById("color_Low"),"#FFFF00")
	setJsColor("color_Null","#6633CC");opt_setNewColor(document.getElementById("color_Null"),"#6633CC")
	setJsColor("color_C1","#00FF00");opt_setNewColor(document.getElementById("color_C1"),"#00FF00")
	setJsColor("color_C2","#33CC00");opt_setNewColor(document.getElementById("color_C2"),"#33CC00")
	setJsColor("color_C3","#55BB00");opt_setNewColor(document.getElementById("color_C3"),"#55BB00")
	setJsColor("color_C4","#BB5500");opt_setNewColor(document.getElementById("color_C4"),"#BB5500")
	setJsColor("color_C5","#CC2200");opt_setNewColor(document.getElementById("color_C5"),"#CC2200")
	setJsColor("color_C6","#CC0000");opt_setNewColor(document.getElementById("color_C6"),"#CC0000")
	setJsColor("color_C13","#CC6699");opt_setNewColor(document.getElementById("color_C13"),"#CC6699")
	setJsColor("color_C14","#999966");opt_setNewColor(document.getElementById("color_C14"),"#999966")
	setJsColor("color_C15","#999966");opt_setNewColor(document.getElementById("color_C15"),"#999966")
	setJsColor("color_C16","#999966");opt_setNewColor(document.getElementById("color_C16"),"#999966")
	setJsColor("color_C17","#999966");opt_setNewColor(document.getElementById("color_C17"),"#999966")
	setJsColor("color_Abyss","#999966");	opt_setNewColor(document.getElementById("color_Abyss"),"#996633")
	setJsColor("color_Thera","#660033");	opt_setNewColor(document.getElementById("color_Thera"),"#660033")
	setJsColor("color_Pochven","#660000");	opt_setNewColor(document.getElementById("color_Pochven"),"#660000")
}
function check(that){
	console.log(that.id);
	writeOptions(that.id,that.checked);
	// var win = remote.getCurrentWindow();	
	// if(that.id == "onTop"){
		// win.setAlwaysOnTop(that.checked);	
		// // console.log(that.checked);
		 
	// }
	if(that.id == "opt_colorStatics"){		
		var allTxt = document.querySelectorAll('text[wh_color_check],a[wh_color_check]');
		for(var i=0;i<allTxt.length;i++){
			// console.log(allTxt[i]);
			allTxt[i].setAttribute('wh_color_check',that.checked);
		}
		writeOptions("opt_colorStatics",that.checked)
	}
	if(that.id == "opt_compact"){
		// var nodes = document.getElementsByClassName("nodeDiv");
		// if(nodes.length == 0){nodes = document.getElementsByClassName("nodeDiv_false");}
		// // console.log(nodes);
		// for(var i=0;i<nodes.length;i++){
		// console.log(nodes[i]);
			// if(nodes[i].className == "nodeDiv"){nodes[i].className = "nodeDiv_false";}else{nodes[i].className = "nodeDiv";} 
		// }
	}
	if(that.id == "opt_circles"){
		// console.log(this.$jit.Canvas.Background);
		// this.$jit.Canvas.Background = true;
	}
	if(that.id == "opt_statics"){
		// console.log(this.$jit.Canvas.Background);
		var staticsShort = document.getElementsByClassName("statics_short");
		// console.log(staticsShort);
		for (var i=0;i < staticsShort.length; i++){
			// console.log(staticsShort[i].style);
			if(that.checked == true)	{staticsShort[i].style.display = '';}
			if(that.checked == false)	{staticsShort[i].style.display = 'none';}
			
		}
		// writeOptions('ShowStatics',that.checked);
	}
	
}

function openOptPanel(){
	console.log("%c Opening options","background: #fff; color: orange");
	var rightPanel = document.getElementById("right_panel");
	var expandButton = document.getElementById("expand_button");
	if(rightPanel.style.width == "150px"){
		rightPanel.style.width = "0px";
		expandButton.style.right = "0px";
	}
	else{
		rightPanel.style.width = "150px";
		expandButton.style.right = "150px";
	}
				
}

function writeOptions(prop,val){
		saved_options[prop] = val;
		// console.log(saved_options);
		setCookie('options',saved_options);
}

function opt_setNewBackGround(that,color){
	
}
function opt_setNewColor(that,color,nodeDiv){
	var type = that.id.substring(6,11);
	// console.log(type);
	var objects = document.querySelectorAll("[color_type='"+type+"']");
	that.style.color = color;
	if(type == 'back'){
		for(var i=0;i<objects.length;i++){
			objects[i].style.backgroundColor = color;
		}	
	}else if(type == 't1'){
		var objects = document.querySelectorAll("[color_type='back']");	
		for(var i=0;i<objects.length;i++){
			objects[i].style.color = color;
		}	
	}else if(type == 'sys2'){
		var objects = document.querySelectorAll("[color_type='sys']");	
		for(var i=0;i<objects.length;i++){
			objects[i].style.backgroundColor = color;
		}	
	}else if(type == 'fr1' || type == 'fr2'){
		
		var objects = document.querySelectorAll("[color_type='fr1']");

			// console.log(objects.length,objects);	
			for(var i=0;i<objects.length;i++){
							// console.log(objects[i]);
				objects[i].style.background = '-webkit-linear-gradient(top,'+saved_options.color_fr1+' 0%,'+saved_options.color_fr2+' 100%)';	
			}	
		
		// background: -webkit-linear-gradient(top,#262626 0%,#1A1A1A 100%);	
	}else{
		// console.log(that);
		// var objects = document.querySelectorAll("text[color_type='"+type+"'][wh_color_check='true']");
		var d=0;
		for(var i=0;i < objects.length;i++){
			d++;
			// console.log(objects[i]);
			objects[i].style.color= color;
			// objects[i].setAttribute('style','color:'+color);
		}
		// console.log(objects.length,d);
		
		var objects = document.querySelectorAll("text[color_type='"+type+"'][wh_color_check='false']");
		// console.log(objects);
		for(var i=0;i<objects.length;i++){
			// console.log(objects[i]);
			objects[i].style.color= saved_options.color_t2;;
			// objects[i].setAttribute('style','color:'+color);
		}
		// saved_options.color_High = color;
			// saved_options.save();
	}
	if(!jQuery.isEmptyObject(saved_options)){
	// console.log(saved_options);
	writeOptions('color_'+type,color);
	}
}