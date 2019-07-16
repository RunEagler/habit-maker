import { Priority } from '@/models/enum';
import { Serializable } from '@/models/serializable';

export class Goal implements Serializable<Goal> {
  public id: number;
  public parentID: number;
  public content: string;
  public priority: Priority;
  public createdAt?: Date;
  public deadline: string;
  public issueID: number;

  deserialize(input: any) {
    this.id = input.id;
    this.parentID = input.parentID;
    this.content = input.content;
    this.priority = input.priority;
    this.deadline = input.deadline;
    this.issueID = input.issueID;

    return this;
  }
}
