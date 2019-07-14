// tslint:disable:no-expression-statement
import test from 'ava';
import { SingleLinkedList } from './single-linked-list';

// describe: #add

test('when a new single linked list is created and a new item is added', t => {
  const subject = new SingleLinkedList();
  t.is(subject.length(), 0);
  subject.add(1);
  t.is(subject.length(), 1);
});

// describe: #length
test('when a new single linked list is created and new items are added, it returns the number of elements', t => {
  const subject = new SingleLinkedList();
  t.is(subject.length(), 0);
  subject.add(1);
  subject.add(2);
  subject.add(3);
  subject.add(4);
  t.is(subject.length(), 4);
});

// describe: #getLastNthNode
test('it returns the last element', t => {
  const subject = new SingleLinkedList();
  subject.add(1);
  subject.add(2);
  subject.add(3);
  subject.add(4);
  t.is(subject.getLastNthNode(1), 4);
});

test('it returns the 3rd element from the last element', t => {
  const subject = new SingleLinkedList();
  subject.add(1);
  subject.add(2);
  subject.add(3);
  subject.add(4);
  t.is(subject.getLastNthNode(3), 2);
});

test('when the list does not has sufficient elements to get the last n th element, it returns null', t => {
  const subject = new SingleLinkedList();
  subject.add(1);
  subject.add(2);
  subject.add(3);
  subject.add(4);
  t.is(subject.getLastNthNode(5), null);
});
