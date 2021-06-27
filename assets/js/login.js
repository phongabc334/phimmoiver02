// xử lí kịch bản cho login2.html - login2.js
function checkValidLogin2(fn) {
    //lấy giá trị 
	var name = document.getElementById("txtName").value;
    var pass = document.getElementById("txtPass").value;
    var check = document.getElementById("ckSave").checked;
	//tham chiếu nút bấm
	var btnLogin = document.getElementById("btnLogin");
	//
    if (name.trim()!="" && pass.trim()!="" && check && name.trim()!=messageName && pass.trim()!=messagePass) {
        btnLogin.disabled = false;
    } else {
        btnLogin.disabled = true;
    }
	if(name.trim()=="" || name.trim()==messageName){
		viewErrorName.innerHTML = "Bạn không được để trống";
		viewErrorName.style.color = "red"
	}else{
		viewErrorName.innerHTML = "";
	}
	if(pass.trim()==""|| pass.trim()==messagePass){
		viewErrorPass.innerHTML = "Bạn không được để trống";
		viewErrorPass.style.color = "red"
	}else{
		viewErrorPass.innerHTML = "";
	}
}
// khai báo biến global
var messageName ="Enter your account name";
var messagePass ="Enter your password";
var emp ="";
function setFirstTime(fn){
	fn.txtName.value = messageName;
	fn.txtPass.value = messagePass;
}
// ô nhập username
function setKeyWordName(fn, inClick){
	var valueN = fn.txtName.value;
	if(inClick)
	{
		if(valueN.trim()==messageName){
			fn.txtName.value = emp;
		}
	}else{
		if(valueN.trim()==emp){
		fn.txtName.value = messageName;
		}
	}
}
// ô nhập password
function setKeyWordPass(fn, inClick){
	var valueP = fn.txtPass.value;
	if(inClick)
	{
		if(valueP.trim()==messagePass){
			fn.txtPass.value = emp;
		}
	}else{
		if(valueP.trim()==emp){
		fn.txtPass.value = messagePass;
		}
	}
}