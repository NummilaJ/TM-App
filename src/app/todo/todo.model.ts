
export class Todo {
  text: string;
  done: boolean;
  comment: string;
  showComment: boolean;

  constructor(text: string) {
    this.text = text;
    this.done = false;
    this.comment = '';
    this.showComment = false;
  }
}

