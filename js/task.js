class Task {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;

        this.cim = this.elem.children("h3");
        this.leiras = this.elem.children(".description");
        this.hatarido = this.elem.children(".end-date");
        this.user = this.elem.children(".userId");
        this.status = this.elem.children(".status");

        this.setAdatok(this.adat);

    }

    setAdatok(adat) {
        this.cim.html(adat.title);
        this.leiras.html(adat.description);
        this.hatarido.html(adat.enddate);
        this.user.html(adat.user.nev);
        this.status.html(adat.status);
    }

}
