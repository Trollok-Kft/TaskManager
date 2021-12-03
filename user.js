class User{
    constructor(elem,adat){
        this.elem = elem;
        this.adat = adat; 
        this.idelem = this.elem.children(".id");
        this.nevelem = this.elem.children(".nev");
        this.setAdatok(this.adat);

    }
    
    setAdatok(adat) {
        this.idelem = html(adat.id);
        this.nevelem = html(adat.nev);
        }

      kattintasTrigger(esemenyneve) {
        let esemeny = new CustomEvent(esemenyneve, { detail: this.adat,
        });
        window.dispatchEvent(esemeny); 
    }
}