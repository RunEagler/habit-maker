import { DateUtil } from '@/utils/date';
import { TaskStatus } from '@/models/enum';
import { Serializable } from '@/models/serializable';
import { Issue } from '@/models/issue';

export class Task implements Serializable<Task> {
  public id: number;
  public entryDate: string;
  public startDate?: DateUtil;
  public endDate?: DateUtil;
  public goalID: number;
  public subject: string;
  public priority: number;
  public content: string;
  public minute: number;
  public tags: string[];
  public isAlways: boolean;
  public status: TaskStatus;

  deserialize(input: any): Task {
    this.id = input.id;
    this.entryDate = input.entryDate;
    this.goalID = input.goalID;
    this.subject = input.subject;
    this.priority = input.priority;
    this.content = input.content;
    this.minute = input.minute;
    this.tags = input.tags;
    this.isAlways = input.isAlways;
    // this.startDate = new DateUtil(new Date());
    // this.endDate = new DateUtil(new Date());
    this.status = input.status;
    return this;
  }

  constructor() {
    this.id = -1;
    this.entryDate = '';
    this.goalID = -1;
    this.subject = '';
    this.priority = -1;
    this.content = '';
    this.minute = 0;
    this.tags = [];
    this.isAlways = false;
    this.startDate = new DateUtil(new Date());
    this.endDate = new DateUtil(new Date());
    this.status = TaskStatus.NotCompleted;
  }
}

export interface TaskByGoalID {
  goalID: number;
  tasks: Task[];
}
