$(function () {
    const ajax=new AjaxHivas();

    const eleresiUt="http://localhost:3000/tasks?_expand=user";

    ajax.getAjax(eleresiUt,adatKiiras);


    const szuloElem = $("article");
    const sablonElem = $(".taskSablon");

    sablonElem.remove();

    function adatKiiras(tasks){
        tasks.forEach(function (adat) {
            let ujElem = sablonElem.clone().appendTo(szuloElem);
            const task = new Task(ujElem, adat);
            console.log(adat);
        });
}

});

