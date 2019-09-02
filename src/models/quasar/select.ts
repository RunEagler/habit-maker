export class Select<T> {
  label: string;
  value: T;

  constructor(label: string, value: T) {
    this.label = label;
    this.value = value;
  }
}
