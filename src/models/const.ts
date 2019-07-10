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
