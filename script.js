$(function () {
  let fajlnev = "http://localhost:3000/users";
  let ajaxHivas = new AjaxHivas();
  ajaxHivas.getAjax(fajlnev, nevLista);

  function nevLista(users) {
    const szuloElem = $(".user");
    const sablonElem = $(".tabla");
    users.forEach(function (adat) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const user = new User(ujElem, adat);
    });
    sablonElem.remove();
  }
});
