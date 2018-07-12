window.onload = function inicio()
{

    $.LoadingOverlaySetup({
        color: "rgba(0, 0, 0, 0.4)",
        image: "../img/default.svg",
        maxSize: "100px",
        minSize: "20px",
        resizeInterval: 0,
        size: "50%"
    });
};


jQuery(document).ready(function () {

    var accordionsMenu = $('.cd-accordion-menu');

    if (accordionsMenu.length > 0) {

        accordionsMenu.each(function () {
            var accordion = $(this);
            //detect change in the input[type="checkbox"] value
            accordion.on('change', 'input[type="checkbox"]', function () {
                var checkbox = $(this);
                console.log(checkbox.prop('checked'));
                (checkbox.prop('checked')) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
            });
        });
    }




});

function MOSTRAR_PROCESAR() {
    $.LoadingOverlay("show");
}
function  OCULTAR_PROCESAR() {
    $.LoadingOverlay("hide");
}

c = 1;
function  Mostrar_Ocultar_Menu() {
    debugger;
    c = c + 1;
    var n=c % 2;
    if (n==0) {
        $(".aside_izquierdo").addClass("hide");
    } else {
        $(".aside_izquierdo").removeClass("hide");
    }
}