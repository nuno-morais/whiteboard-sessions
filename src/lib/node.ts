export class Node {
  public obj: any;
  public next: Node;

  constructor(data: Partial<Node> = {}) {
    for (const propertyName in data) {
      if (data.hasOwnProperty(propertyName)) {
        this[propertyName] = data[propertyName];
      }
    }
  }
}
