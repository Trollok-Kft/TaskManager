$(function () {
    const ajax=new AjaxHivas();

    const eleresiUt="http://localhost:3000/tasks?_expand=user";
    const eleresiUt2="http://localhost:3000/tasks";


    ajax.getAjax(eleresiUt,adatKiiras);


    const szuloElem = $(".task");
    const sablonElem = $("#sablon .taskSablon");
    szuloElem.empty();
    sablonElem.show();

    

    function adatKiiras(tasks){
        tasks.forEach(function (adat) {
            let ujElem = sablonElem.clone().appendTo(szuloElem);
            const task = new Task(ujElem, adat);
            //console.log(adat);
        });
        sablonElem.hide();
}
$("#keres").on("keyup", function(){
    console.log($("#keres"));
    let mezoszerint = eleresiUt2 + "?q="+$("#keres").val();
    ajax.getAjax(mezoszerint, adatKiiras);
  });

});

