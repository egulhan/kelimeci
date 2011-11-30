$(document).ready(function(){
	var 
		$f=$('.loginForm'),
		$alert=createFrmAlert();
	
	// Add the alert elem. to the form
	$f.append($alert);
	
	$('.loginForm').submit(function(){
		var
			username=$f.find('input[name="username"]').val(),
			password=$f.find('input[name="password"]').val();

		if(username=='' || password==''){

			var alertText='Kullanıcı adını ve şifreyi giriniz!';
			showFrmAlert($alert,alertText);
			return false;

		}

		var ajax=new simpleAjax();
		ajax.send(
			'?_ajax=users/login',
			'username='+encodeURI(username)+'&'+
				'password='+encodeURI(password),
			{'onSuccess':function(rsp,o){
				
				// Login okay
				if(rsp=='1'){
					window.location.href='/vocabulary';
				}
				else{
					// Alert the error
					showFrmAlert($alert,rsp);
				}
				return false;

			}}
		);
		return false;
	});
});
