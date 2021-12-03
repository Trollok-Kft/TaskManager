class Task {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;

        this.cim = this.elem.children("h3");
        this.leiras = this.elem.children(".description");
        this.hatarido = this.elem.children(".end-date");
        this.user = this.elem.children(".userId");
        this.status = this.elem.children(".status");
        this.gombt=this.elem.children(".torles");
        this.gombm=this.elem.children(".modosit");

        this.setAdatok(this.adat);

        this.gombt.on("click", () => {
            this.kattintas();
          });

    }
    kattintas() {
        this.kattintasTrigger();
      }
    
      kattintasTrigger() {
        let esemeny = new CustomEvent("torlesKattintas", { detail: this.adat });
        window.dispatchEvent(esemeny);
      }

    setAdatok(adat) {
        this.cim.html(adat.title);
        this.leiras.html(adat.description);
        this.hatarido.html(adat.enddate);
        this.user.html(adat.user.nev);
        this.status.html(adat.status);
    }


}


