import { Serializable } from '@/models/serializable';

export class MockJSON {
  public List<T extends Serializable<T>>(type: new () => T, values: any[]): T[] {
    return values.map((value: any) => new type().deserialize(value));
  }
}
