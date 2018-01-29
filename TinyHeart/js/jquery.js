// JavaScript Document
$(document).ready(function(e) {
   $("#submit").click(function(){
	  
		result=false;
		if($("#color").val()=="null"){
			alert("请至少选择一种颜色！");
			return result;
		}
		if($("#checknum").val()==""){
			alert("请输入验证码！");
			return result;
		}
		$("input:checkbox[name='interest']:checked").each(function(index, element) {
    		if($(element).val()!=""){
				result=true;
			}
			
		});
			if(result==false){
				alert("请至少选择一种爱好！");
				return result;
			}
			 if(CheckInput(loginid,'用户名') && CheckInput(pwd,'密码') && CheckInput(rpwd,'密码') &&CheckInput(uname,'昵称')){
				$.ajax({
					url:"doregister.php",
					data:"loginid="+$("#loginid").val()+"& pwd="+$("#pwd").val()+"& rpwd="+$("#rpwd").val()+"& uname="+$("#uname").val()+"& sex="+$("#sex").val()+"& birthday="+$("#birthday").val()+"& describe="
					+$("#describe").val()+"& checknum="+$("#checknum").val()+"& upimg="+$("#upimg").val()+"& color="+
					$("#color").val()+"& interest="+$("#interest").val(),
					type:"POST",
					dataType:"text",success: function(responseText){
						alert(responseText);
						if(responseText=="注册成功请立即登陆！"){
							window.location.href="login.html";
							}
						}
					
						})
					
			
			}
	});
	
});

	