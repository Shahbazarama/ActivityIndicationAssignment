var AI = {
  show: function(style){
		var styleTest = style;
    if(styleTest === "style1"){
		var mu = "<div class='fadeBox1'> <div class='spinner1'> </div> </div>";
		} else if(styleTest === "style2"){
		var mu = "<div class='fadeBox2'> <div class='spinner2'> </div> </div>";
	  } else{
		var mu = "<div class='fadeBox'> <div class='spinner'> </div> </div>";
		}
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
		$(".fadeBox1").remove();
		$(".fadeBox2").remove();
  }
}
