//fare aprire il sottomenu
//quando l'utente clicca sull icona
// $('.fa-th').click(function(){
//     $('.menu-nascosto').fadeToggle();
// });


//piu generico

$('.header-right > ul > li > a').click(function(){
    if ($(this).next('.menu-nascosto').hasClass('visible')) {
        //se l'elemento cliccato ha la classe menu nascosto, allora chiudo
        $(this).next('.menu-nascosto').removeClass('visible')
    } else {
        //l'elemento cliccato non ha la classe, quindi devo aggiungerla per poter visualizzare il sottomenu
        $(this).next('.menu-nascosto').addClass('visible')
    }
});

//click fuori per chiudere il sottomenu
// $(document).click(function(event){
//     var target = $(event.target);
//     console.log('target: '+ target);
//     //verifico che l'elemento su cui ho cliccato non sia l'a del sottomenu
//     if(!target.hasClass('menu-nascosto'));
//     //se l'elemento su cui ho cliccato NON ha la classe menu-nascosto,, allora chiudo il menu.
//     $('.menu-nascosto').removeClass('visible');
// });
