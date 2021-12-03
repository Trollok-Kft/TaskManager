$(function () {
  let fajlnev = "http://localhost:3000/users";
  let ajaxHivas = new AjaxHivas();
  ajaxHivas.getAjax(fajlnev, nevLista);

  function nevLista(users) {
    const szuloElem = $(".tabla");
    const sablonElem = $(".user");
    users.forEach(function (adat) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const user = new User(ujElem, adat);
    });
    sablonElem.remove();
  }
});
