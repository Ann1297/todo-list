export class ToDoItem {
    id: number;
    task: string;
    isDone: boolean = false;
    isDeleted: boolean = false;

    constructor (init?:Partial<ToDoItem>) {
        Object.assign(this, init);
    }
}