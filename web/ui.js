// Presentation-only helpers for the redesigned interface (no de-identification logic here)
$(function(){
	// Home page mode cards and links switch to the matching tab
	$('body').on('click','[data-goto]',function(ev){
		ev.preventDefault();
		$($(this).data('goto')).tab('show');
	});
	// The embedded browser has no mail client hook, so offer the address for copying instead of a mailto link
	$('body').on('click','.copy-email',function(){
		var btn=$(this), email=btn.data('email');
		var done=function(){ btn.text('Copied!'); setTimeout(function(){ btn.text('Copy email'); },1800); };
		var fallback=function(){
			var t=$('<textarea>').val(email).css({position:'fixed',left:'-9999px'}).appendTo('body');
			t[0].select(); document.execCommand('copy'); t.remove(); done();
		};
		if(navigator.clipboard) navigator.clipboard.writeText(email).then(done,fallback);
		else fallback();
	});
	// Bootstrap would normally do this; keep aria-selected in sync for screen readers
	$('#topbar-tabs').on('shown.bs.tab','.nav-link',function(){
		$('#topbar-tabs .nav-link').attr('aria-selected','false');
		$(this).attr('aria-selected','true');
	});
});
