export class Select {
  label: string;
  value: number;

  constructor(label: string, value: number) {
    this.label = label;
    this.value = value;
  }
}

export class Tree {
  id: number;
  label: string;
  avatar: string;
  icon: string;
  children: Tree[];

  parentID: number;

  constructor(id: number, parentID: number, label: string) {
    this.id = id;
    this.parentID = parentID;
    this.label = label;
    this.children = [];
  }
}
