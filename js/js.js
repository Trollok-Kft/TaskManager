$(function () {
    const ajax = new AjaxHivas();

    const eleresiUt = "http://localhost:3000/tasks?_expand=user";
    const torlesEleresiUt = "http://localhost:3000/tasks";

    ajax.getAjax(eleresiUt, adatKiiras);


    const szuloElem = $("article");
    const sablonElem = $(".taskSablon");

    sablonElem.remove();

    function adatKiiras(tasks) {
        tasks.forEach(function (adat) {
            let ujElem = sablonElem.clone().appendTo(szuloElem);
            const task = new Task(ujElem, adat);
            console.log(adat);
        });
    }
    $(window).on("torlesKattintas", (event) => {
        console.log(event.detail.id);
        //ajax.deleteAjax(torlesEleresiUt,event.detail.id);
        //ajax.getAjax(eleresiUt, adatKiiras);
      });

});

