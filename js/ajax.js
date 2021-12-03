class AjaxHivas {
    constructor() {}
  
    getAjax(fajlnev, myCallback) {
      const tasks = [];
      $.ajax({
        url: fajlnev,
        type: "GET",
        success: function (result) {
          result.forEach((element) => {
            tasks.push(element);
          });
          myCallback(tasks);
        },
      });
    }
  
    postAjax(fajlnev, adat) {
      console.log(adat);
      $.ajax({
        url: fajlnev,
        type: "POST",
        data: adat,
        success: function (result) {}
      });
    }
  
    putAjax(fajlnev, adat, id) {
      $.ajax({
        url: fajlnev + "/" + id,
        type: "PUt",
        data: adat,
        success: function (result) {}
      });
    }
  
    deleteAjax(fajlnev, id) {
      $.ajax({
        url: fajlnev + "/" + id,
        type: "DELETE",
        success: function (result) {}
      });
    }
  }
  