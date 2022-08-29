 $(document).ready(function(){
    /* smooth scroll */
    smoothScroll();
    /* hideNavBar */
    $(document).on('click',function(){
        $('nav .collapse').collapse('hide');
    }); 
    /* catPanelEffect main*/
    $('.categories .collapse').on('show.bs.collapse', function () {
        $(this).prev().css('display','none');
    });
    /* catPanelEffect */
    $('.categories .collapse').on('shown.bs.collapse', function () {
        $(this).animate({opacity: '1'},700);
    });
    /* imgHover categories */
    imgHoverMain(".categories .img-cat",".categories .cat-block-element");
    /* imgHover socialIcons */
    imgHoverSocial(".social-icons-container",".social-icons");
    /* main modal form checkers */
    $('.name-js').on('blur', function(){
        var name = $(this).val().trim();
        if(name.length === 0){
            glyphRemove($(this),'.ch-name');
            $('.name-info').hide().fadeOut().html('<p class="form-control-static modal-error-msg">Введите ваше имя!</p>').slideDown().fadeIn('slow');
        }
        else{
            glyphOk($(this),'.ch-name');
            $('.name-info').slideUp().fadeOut().html('');
        }
    });
    
    $('.surname-js').on('blur', function(){
        var name = $(this).val().trim();
        if(name.length === 0){
            glyphRemove($(this),'.ch-surname');
            $('.surname-info').hide().fadeOut().html('<p class="form-control-static modal-error-msg">Введите вашу фамилию!</p>').slideDown().fadeIn('slow');
        }
        else{
            glyphOk($(this),'.ch-surname');
            $('.surname-info').slideUp().fadeOut().html('');
        }
    });
        
    $('.email-js').on('blur', function(){
        var email = $(this).val().trim();
        if(email.length === 0){
            glyphRemove($(this), '.ch-email');
            $('.email-info').hide().fadeOut().html('<p class="form-control-static modal-error-msg">Введите ваш Email!</p>').slideDown().fadeIn('slow');
        }
        else if(!emailVal(email)){
            glyphRemove($(this), '.ch-email');
            $('.email-info').hide().fadeOut().html('<p class="form-control-static modal-error-msg">Введите корректный Email!</p>').slideDown().fadeIn('slow');
        }
        else{
            glyphOk($(this), '.ch-email');
            $('.email-info').slideUp().fadeOut().html('');
        }
    });
       
    $('.psw-js').on('blur',function(){
       if($(this).val().trim().length < 6){
            glyphRemove($(this), '.ch-psw');
            $('.psw-info').hide().fadeOut().html('<p class="form-control-static modal-error-msg">Пароль должен быть не менее 6 символов!</p>').slideDown().fadeIn('slow');
        }
        else{
            glyphOk($(this), '.ch-psw');
             $('.psw-info').slideUp().fadeOut().html('');
        }
    });
    
    /* clear main modals data fields  */
    /* bug fix body padding reduces */
    $('#LoginModal').on('show.bs.modal', function () {
        clearMainModalFields ('.ch-name', '.name-info');
        clearMainModalFields ('.ch-surname', '.surname-info');
        clearMainModalFields ('.ch-email', '.email-info');
        clearMainModalFields ('.ch-psw', '.psw-info');
        $('body').css('padding','0');
    });
    
    $('#RegisterModal').on('show.bs.modal', function () {
        clearMainModalFields ('.ch-email', '.email-info');
        clearMainModalFields ('.ch-psw', '.psw-info');
        $('body').css('padding','0');
    });
    
    $('#RestorePassModal').on('show.bs.modal', function () {
        clearMainModalFields ('.ch-email', '.email-info');
        $('body').css('padding','0');
    });
    
    /* imgHover all categories */
    imgHoverAllCat(".categories .cat-block-element");
    
});

function clearMainModalFields (parentClass, fieldClass) {
    $(fieldClass).find('p').remove();
    $(parentClass).removeClass('has-success has-feedback');
    $(parentClass).removeClass('has-error has-feedback');
    $(parentClass + ' span').remove();
}

function imgHoverMain(classContainer, classHoverOn) {
    classContainer = $(classContainer);
    classHoverOn = $(classHoverOn);
    classContainer.find("span").hide().end();
        classHoverOn.hover(function() {
            $(this).prev().find("span").stop(true, true).fadeIn('slow');
	}, 
        function() {
            $(this).prev().find("span").stop(true, true).fadeOut('slow');
	});
}

function imgHoverSocial(classContainer, classHoverOn) {
    classContainer = $(classContainer);
    classHoverOn = $(classHoverOn);
    classContainer.find("span").hide().end();
    classHoverOn.hover(function() {
        $(this).find("span").stop(true, true).fadeIn('slow');
    }, 
    function() {
        $(this).find("span").stop(true, true).fadeOut('slow');
    });
}

function imgHoverAllCat(classHoverOn) {
    classHoverOn = $(classHoverOn);
    classHoverOn.hover(function() {
            $(this).parent().prev().find(".img-cat-js").stop(true, true).fadeIn('slow');
	}, 
        function() {
            $(this).parent().prev().find(".img-cat-js").stop(true, true).fadeOut('slow');
	});
}

function glyphRemove(fieldId, parentId){
    $(parentId).removeClass('has-success has-feedback').addClass('has-error has-feedback');
    $(parentId + ' span').remove();
    $(fieldId).after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
}

function glyphOk(fieldId, parentId){
    $(parentId).removeClass('has-error has-feedback').addClass('has-success has-feedback');
    $(parentId + ' span').remove();
    $(fieldId).after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
}

function emailVal(email){
    var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(reg.test(email)){
        return true;
    }
    else{
        return false;
    }
}

function smoothScroll(){
    $("#scrollSpyArrow a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
    window.location.hash = hash;
    });
  });
}