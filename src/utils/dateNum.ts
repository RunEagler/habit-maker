import moment from 'moment';
import { SATURDAY, SUNDAY, WEEK_NUM } from '@/constants/const';

moment.locale('ja');

export class DateUtil {
  d: Date;
  dateNum: number;
  year: number;
  month: number;

  constructor(date: Date) {
    this.d = date;
    this.dateNum = this.d.getDate();
    this.year = this.d.getFullYear();
    this.month = this.d.getMonth() + 1;
  }

  get formatDateTime(): string {
    return moment(this.d).format('YYYY/MM/DD hh:mm:ss');
  }

  get formatDate(): string {
    return moment(this.d).format('YYYY/MM/DD');
  }

  get day(): number {
    return this.d.getDay();
  }

  get firstDay(): number {
    return new Date(this.year, this.d.getMonth(), 1).getDay();
  }

  get lastDate(): number {
    return new Date(this.year, this.d.getMonth() + 1, 0).getDate();
  }

  get lastDay(): number {
    return new Date(this.year, this.d.getMonth() + 1, this.lastDate).getDay();
  }

  get lastDateOfPrevMonth(): number {
    return new Date(this.year, this.d.getMonth(), 0).getDate();
  }

  get isSaturDay(): boolean {
    return this.day === SATURDAY;
  }

  get isSunday(): boolean {
    return this.day === SUNDAY;
  }

  get weekCount(): number {
    return Math.ceil((this.lastDate + this.firstDay) / WEEK_NUM);
  }
}
