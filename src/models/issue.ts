import { Icon, IconIssueStatusDone, IconIssueStatusInProgress, IconIssueStatusUnSolve } from '@/models/const';
import { Serializable } from '@/models/serializable';
import { Select } from '@/models/quaser';
import { Emergency, IssueStatus } from '@/models/enum';

export class Issue implements Serializable<Issue> {
  id: number;
  content: string;
  emergency: Emergency;
  deadline: string;
  status: IssueStatus;
  field: string;
  createdAt?: Date;

  emergencySelect: Select;

  deserialize(input: any) {
    this.id = input.id;
    this.content = input.content;
    this.emergency = input.emergency;
    this.deadline = input.deadline;
    this.field = input.field;
    this.status = input.status === undefined ? IssueStatus.Unsolved : input.status;
    this.createdAt = input.createdAt;

    this.emergencySelect = this.toEmergencySelect;

    return this;
  }

  get toEmergencySelect(): Select {
    switch (this.emergency) {
      case Emergency.Low:
        return new Select('低い', Emergency.Low);
      case Emergency.Normal:
        return new Select('普通', Emergency.Normal);
      case Emergency.High:
        return new Select('高い', Emergency.High);
    }
  }

  get statusIcon(): Icon {
    switch (this.status) {
      case IssueStatus.Unsolved:
        return IconIssueStatusUnSolve;
      case IssueStatus.InProgress:
        return IconIssueStatusInProgress;
      case IssueStatus.Done:
        return IconIssueStatusDone;
    }
  }

  get statusListColor(): string {
    switch (this.status) {
      case IssueStatus.Unsolved:
        return 'bg-amber-1';
      case IssueStatus.InProgress:
        return 'bg-green-1';
      case IssueStatus.Done:
        return 'bg-grey-3';
    }
  }
}

export interface IssueByField {
  field: string;
  issues: Issue[];
}
