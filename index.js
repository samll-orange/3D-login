function $(elem) {
    return document.querySelector(elem);
}

function $$(elem) {
    return document.querySelectorAll(elem);
}

$('header .login').onclick = function(e){
    e.stopPropagation();
    $('.turn-modal').style.display='block';
};

$('.turn-modal').addEventListener('click', function(e){
    e.stopPropagation();

    if(e.target.classList.contains('login')){
        $('.turn-modal').classList.remove('register');
        $('.turn-modal').classList.add('login');
    }

    if(e.target.classList.contains('register')){
        $('.turn-modal').classList.remove('login');
        $('.turn-modal').classList.add('register');
    }

    if(e.target.classList.contains('close')){
        $('.turn-modal').style.display = 'none';
    }
})

document.addEventListener('click', function(){
    $('.turn-modal').style.display = 'none';
})

$('.login-modal form').addEventListener('submit', function(e){
    e.preventDefault();
    if(!/^\w{3,8}$/.test($('.login-modal input[name=username]').value)){
        $('.login-modal .errortips').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
        return false
    }

    if(!/^\w{6, 10}$/.test($('.login-modal input[name=password]').value)){
        $('.login-modal .errortips').innerText = "密码需输入6-10个字符，包括字母数字下划线"
        return false
    }
    this.submit;
})


$('.register-modal form').addEventListener('submit', function(e){
    e.preventDefault();
    if(!/^\w{3,8}$/.test($('.register-modal input[name=username]').value)){
        $('.register-modal .errortips').innerText = "用户名需输入3-8个字符，包括字母数字下划线";
        return false;
    }
    if(/^chen$|^zhi$/.test($('.register-modal input[name=username]').value)){
        $('.register-modal .errortips').innerText = '用户名已存在'
        return false
    }
    if(!/^\w{6,10}$/.test($('.register-modal input[name=password]').value)){
        $('.register-modal .errortips').innerText = "密码需输入6-10个字符，包括字母数字下划线";
        return false;
    }
    
    if($('.register-modal input[name=password]').value !== $('.register-modal input[name=password2]').value){
        $('.register-modal .errortips').innerText = "两次输入的密码不一致";
        return false;
    }
    this.submit;
})