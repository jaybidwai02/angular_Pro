function supportPlaceholder(cont){
	var setCss=function(d){                
	var _d=$(d),
	ph=_d.attr('placeholder'),
	v=_d.val(),                                                                           
	paddL=_d.css('paddingLeft');
	_d.next('input.typeAhead').hide();//for email suggestion
	if(!(_d.parent('.wrpInput').length)){_d.css({position:'static'}).wrap('<span class="wrpInput"></span>');}
	var placeholderCont=$('<em></em>').css({'position':'absolute','background':'transparent','left':paddL}).addClass('placeholder').html(ph);                                                                
	if(v!=''){
		placeholderCont.hide();
	}
	if(!(_d.prev('.placeholder').length)){
		_d.parent('.wrpInput').prepend(placeholderCont);
	}
	
	_d.prev('.placeholder').on('click',function(){_d.focus();});//set focus on clicking on em
	
	_d.on('focus click',function(){_d.prev('.placeholder').hide();}).on('blur',function(){
		if($(this).val()==''){_d.prev('.placeholder').show();}});                                                    
	}

	var fakeInput=document.createElement('input');
	if(!('placeholder' in fakeInput)){
		if(!cont)
			cont = $("body");
		var inputs=cont.find('input[placeholder]');
		inputs.each(function(){var d=this;setCss(d);})    
	}
	fakeInput=null;
}

supportPlaceholder($('body'));