// Presentation-only helpers for the redesigned interface (no de-identification logic here)
$(function(){
	// Home page mode cards and links switch to the matching tab
	$('body').on('click','[data-goto]',function(ev){
		ev.preventDefault();
		$($(this).data('goto')).tab('show');
	});
	// Bootstrap would normally do this; keep aria-selected in sync for screen readers
	$('#topbar-tabs').on('shown.bs.tab','.nav-link',function(){
		$('#topbar-tabs .nav-link').attr('aria-selected','false');
		$(this).attr('aria-selected','true');
	});
});
