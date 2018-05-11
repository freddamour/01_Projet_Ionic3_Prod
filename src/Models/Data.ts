export  class Data {
    public name: string;
    public sousDossier: Array<Object>;
    public status: number;

    constructor(data:any) {
        
        this.name = data.name;
        this.sousDossier = data.sousDossier;
        this.status = data.status;
        
    }
}