export class Icon {
  public color: string;
  public textColor: string;
  public icon: string;

  constructor(color: string, textColor: string, icon: string) {
    this.color = color;
    this.textColor = textColor;
    this.icon = icon;
  }
}

export const IconIssueStatusDone: Icon = new Icon('grey-7', 'white', 'done');
export const IconIssueStatusInProgress: Icon = new Icon('green-7', 'white', 'trending_up');
export const IconIssueStatusUnSolve: Icon = new Icon('amber-7', 'white', 'more_horiz');


export const MONTH_NUM: number = 12;
export const WEEK_NUM: number = 7;

export const SUNDAY: number = 0;
export const MONDAY: number = 1;
export const TUESDAY: number = 2;
export const WEDNESDAY: number = 3;
export const THURSDAY: number = 4;
export const FRIDAY: number = 5;
export const SATURDAY: number = 6;
