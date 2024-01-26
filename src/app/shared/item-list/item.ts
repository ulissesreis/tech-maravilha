import { v4 as uuidv4 } from 'uuid';

export class Item {
    public id: string;
    public nome: string;

    constructor(name: string) {
        this.nome = name;
        this.id = uuidv4();
    }
}