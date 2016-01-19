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

function navigationHandler(event){
	//find menu item that fired event
	var menuItem = $(event.target).closest('.slideoutMenuItem');
	//if the menu item for the current page was clicked on, do nothing
	if(menuItem.hasClass('.currentPage')){
		event.stopPropagation();
	}else{
		var navigateTo = menuItem.attr('navto');
		window.location.href = navigateTo;
	}
	//else, load the correct page

}