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
        this.cim.html(adat.cim);
        this.leiras.html(adat.leiras);
        this.hatarido.html(adat.hatarido);
        this.user.html(adat.user);
        this.status.html(adat.status);
    }

}
