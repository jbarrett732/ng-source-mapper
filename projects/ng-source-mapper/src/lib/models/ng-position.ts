export class NgPosition {
  constructor(
    public fileName: string = 'unknown',
    public lineNumber: number = 0,
    public columnNumber: number = 0
  ) {}
  static fromString(str: string): NgPosition {
    const position = new NgPosition();
    const i = str.lastIndexOf(':');
    if (i >= 0 && i < str.length - 1) {
      position.columnNumber = +str.substring(i + 1);
      const j = str.lastIndexOf(':', i - 1);
      if (j >= 0 && j < i) {
        position.lineNumber = +str.substring(j+1, i);
        position.fileName = str.substring(0, j);
      }
    }
    return position;
  }
  toString() {
    return this.fileName + ':' + this.lineNumber + ':' + this.columnNumber;
  }
}
