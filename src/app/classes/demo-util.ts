import { NgPosition } from  'ng-source-mapper';

export class DemoUtil {

  /*
  Static Functions
 */
  public static getStackTrace(): string[] {
    const error = new Error();
    return error.stack.split('\n');
  }

  public static getPosition(stackLine: string): NgPosition {
    // strip base path, then parse filename, line, and column
    const position = stackLine.substring(stackLine.lastIndexOf('\/') + 1, stackLine.indexOf(')'));
    const dataArray = position.split(':');
    if (dataArray.length === 3) {
      return new NgPosition(dataArray[0], +dataArray[1], +dataArray[2]);
    }
    return new NgPosition('unknown', 0, 0);
  }

  public static getTranspileLocation(stackLine: string): string {
    return  stackLine.substring(stackLine.indexOf('(') + 1, stackLine.indexOf(')'));
  }

  public static getMapFilePath(stackLine: string): string {
    const file = DemoUtil.getTranspileLocation(stackLine);
    const mapFullPath = file.substring(0, file.lastIndexOf(':'));
    return mapFullPath.substring(0, mapFullPath.lastIndexOf(':')) + '.map';
  }

  public static getPositionStringFromTraceLine(line: string): string {
    const start = line.indexOf('(') + 1;
    const end = line.indexOf(')');
    if(start && end && start < end) {
      return line.substring(start, end);
    }
    // not found
    return line;
  }

  public static getPositionFromTraceLine(line: string): NgPosition {
    return NgPosition.fromString(DemoUtil.getPositionStringFromTraceLine(line));
  }

  public static replacePositionTraceLine(line: string, newPos: NgPosition): string {
    const oldPosStr = DemoUtil.getPositionStringFromTraceLine(line);
    return line.replace(oldPosStr, newPos.toString());
  }

  public static printStack(stack: string[]) {
    for (const line of stack) {
      console.log(line);
    }
  }

}
