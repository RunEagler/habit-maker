import { Priority } from '@/models/enum';

export class Goal {
  public id: number;
  public content: string;
  public priority: Priority;
  public createdAt?: Date;
  public deadline: string;

  constructor() {
    this.id = -1;
    this.content = '';
    this.priority = Priority.C;
    this.deadline = '';
    this.createdAt = new Date();
  }
}
