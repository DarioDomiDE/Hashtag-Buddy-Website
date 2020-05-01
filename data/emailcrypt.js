$(document).ready(function() {
	
	// Crypt Mail
	// see: http://jumk.de/nospam/
	function UnCryptMailto(s)
	{
		var n = 0;
		var r = '';
		for( var i = 0; i < s.length; i++)
		{
			n = s.charCodeAt( i );
			if( n >= 8364)
				n = 128;
			r += String.fromCharCode( n - 1 );
		}
		return r;
	}
	var key = 'ebsjpAjoopdmjr/ef';
	var email = UnCryptMailto(key);
	var emailHtml = '<a href="'+UnCryptMailto('nbjmup;') + email + '">' + email + '</a>';
	$('.email').html(emailHtml);
	
	
});