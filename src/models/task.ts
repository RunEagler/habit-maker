import { DateUtil } from '@/utils/date';
import { TaskStatus } from '@/models/enum';
import { Serializable } from '@/models/serializable';

export class Task implements Serializable<Task> {
  public id: number;
  public entryDate: string;
  public startDate?: DateUtil;
  public endDate?: DateUtil;
  public goalID: number;
  public subject: string;
  public priority: number;
  public todo: string;
  public estimateTime: number;
  public actualTime: number;
  public tags: string[];
  public isAlways: boolean;
  public status: TaskStatus;

  deserialize(input: any): Task {
    this.id = input.id;
    this.entryDate = input.entryDate;
    this.goalID = input.goalID;
    this.subject = input.subject;
    this.priority = input.priority;
    this.todo = input.todo;
    this.estimateTime = input.estimateTime;
    this.actualTime = input.actualTime;
    this.tags = input.tags;
    this.isAlways = input.isAlways;
    // this.startDate = new DateUtil(new Date());
    // this.endDate = new DateUtil(new Date());
    this.status = input.status;
    return this;
  }
}

export interface TaskByGoalID {
  goalID: number;
  tasks: Task[];
}
