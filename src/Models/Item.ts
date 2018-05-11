export class Item {
    public reference: string;
    public name: string;
    public state:number;

    constructor(data:any) {
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
        
    }
}