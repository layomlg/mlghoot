$(document).ready(function(){
	/*Active-Effekt am beim öffnen der Seite*/
	$('.triggerKlickNavTrigger__Element:first-child').addClass('active');
	$(".navKlickContent:first-child").addClass('active');

/*KlickElement*/
	$('.triggerContainer').on('click touchstart', '.triggerKlickNavTrigger__Element', function(){
	var dataAttrNav = $(this).attr("data-attribute");//data-attribute kann heißen wie es will. zum beispiel data-navattribut
	var dataAttrNav = dataAttrNav.replace(" ", "");
		
		$('.triggerKlickNavTrigger__Element').removeClass('active');
		$(this).addClass('active');
		$(".navKlickContent").removeClass('active');
		$(".navKlickContent").closest('#' + dataAttrNav).addClass('active');
	});
});