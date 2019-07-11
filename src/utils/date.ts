import moment from 'moment';
import { SATURDAY, SUNDAY, WEEK_NUM } from '@/constants/const';

moment.locale('ja');

export class DateUtil {
  private d: Date;

  constructor(date: Date) {
    this.d = date;
  }

  public formatDateTime(): string {
    return moment(this.d).format('yyyy/MM/dd hh:mm:dd');
  }

  public formatDate(): string {
    return moment(this.d).format('yyyy/MM/dd');
  }

  public year(): number {
    return this.d.getFullYear();
  }

  public month(): number {
    return this.d.getMonth();
  }

  public date(): number {
    return this.d.getDate();
  }

  public day(): number {
    return this.d.getDay();
  }

  public firstDay(): number {
    return new Date(this.year(), this.month(), 1).getDay();
  }

  public lastDate(): number {
    return new Date(this.year(), this.month() + 1, 0).getDate();
  }

  public lastDay(): number {
    return new Date(this.year(), this.month(), this.lastDate()).getDay();
  }

  public lastDateOfPrevMonth(): number {
    return new Date(this.year(), this.month(), 0).getDate();
  }

  public isSaturDay(): boolean {
    return this.day() === SATURDAY;
  }

  public isSunday(): boolean {
    return this.day() === SUNDAY;
  }

  public weekCount(): number {
    return Math.ceil((this.lastDate() + this.firstDay()) / WEEK_NUM);
  }
}
