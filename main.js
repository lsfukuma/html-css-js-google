//fare aprire il sottomenu
//quando l'utente clicca sull icona
// $('.fa-th').click(function(){
//     $('.menu-nascosto').fadeToggle();
// });


//piu generico

$('.header-right > ul > li > a').click(function(){
    $(this).next('.menu-nascosto').toggle()
});
