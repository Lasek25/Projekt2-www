$(document).ready(function () {
    slider();
});

function slider() {
    //wybierz slajd kolejny (prawy, czy lewy) i wyświetlSlajd
    poprz = $(".prev");
    nast = $(".next");
    slide = $(".slade");
    aktualny = 0;
    liczba = slide.length;
    // alert(liczba);
    //wylicz aktualny
    nast.click(function(){
        //policz aktualny
        // wyswietlSlajd(aktualny);
        if(aktualny===liczba-1)
            aktualny=0;
        else
            aktualny++;
        wyswietlSlajd(aktualny);
    });
    poprz.click(function(){
        //policz aktualny
        if(aktualny===0)
            aktualny=liczba-1;
        else
            aktualny--;
        wyswietlSlajd(aktualny);
    });
    wyswietlSlajd(aktualny);
}
function wyswietlSlajd(aktualny) {
    sliderCo=$("#slajder #slades");
    sliderCo.fadeOut(200,function () {
        slide.removeClass("active");
        slide.eq(aktualny).addClass("active");
        sliderCo.fadeIn(700);
    });
}