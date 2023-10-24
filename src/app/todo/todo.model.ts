export class Todo {
  text: string;
  done: boolean;
  comments: string[];
  showComment: boolean;
  newComment: string;

  constructor(text: string) {
    this.text = text;
    this.done = false;
    this.comments = [];
    this.showComment = false;
    this.newComment = '';
  }
}


