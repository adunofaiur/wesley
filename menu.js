function toggleSlideout(event){
	var slideout = $('#slideout');
	event.stopPropagation();
	if (slideout.hasClass('hidden')){
		showSlideout(slideout);
	}else{
		hideSlideout(slideout);
	}

}

function hideSlideout(slideout){
	slideout.removeClass('showed');

	slideout.addClass('hidden');
	document.body.removeEventListener('click', clickToHide)

}
function showSlideout(slideout){
	slideout.removeClass('hidden');
	slideout.addClass('showed');
	document.body.addEventListener('click', clickToHide)
}
function clickToHide(event){
	var maybeSlideout = $(event.target).closest('#slideout')
	if(maybeSlideout.length > 0){
		event.stopPropagation();
	}else{
		hideSlideout($("#slideout"));
	}
}