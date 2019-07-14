import { Node } from './node';

export class SingleLinkedList<T> {
  private head: Node;
  private tail: Node;

  public add(obj: T): void {
    const node = new Node({ obj });
    if (this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  public length(): number {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
      counter++;
    }

    return counter;
  }

  public getLastNthNode(nthElement: number): T {
    let lastElement = this.head;
    let result = null;
    let counter = 1;
    while (lastElement) {
      lastElement = lastElement.next;
      if (counter === nthElement) {
        result = this.head;
      }
      if (counter > nthElement) {
        result = result.next;
      }
      counter++;
    }
    return result ? result.obj : null;
  }
}
