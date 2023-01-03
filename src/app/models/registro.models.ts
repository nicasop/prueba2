export class Registro{
    public cod: string;
    public razon: string;
    public nombre: string;
    public create: Date;
    constructor(cod: string, razon: string,nombre:string,){
        this.cod = cod;
        this.razon = razon;
        this.nombre=nombre
        this.create = new Date();
    }
}