import { NgPosition } from './ng-position';

describe('Position', () => {
  it('should create an instance', () => {
    expect(new NgPosition()).toBeTruthy();
  });
  it('should create a default instance', () => {
    const basic = new NgPosition();
    expect(basic.fileName).toEqual('unknown');
    expect(basic.lineNumber).toEqual(0);
    expect(basic.columnNumber).toEqual(0);
  });
  it('should create a custom instance', () => {
    const file = 'hello', row = 12, col = 34;
    const basic = new NgPosition(file, row, col);
    expect(basic.fileName).toEqual(file);
    expect(basic.lineNumber).toEqual(row);
    expect(basic.columnNumber).toEqual(col);
  });
  it('should create a position string', () => {
    const file = 'hello', row = 12, col = 34;
    const posStr = file + ':' + row + ':' + col;
    const basic = new NgPosition(file, row, col);
    expect(basic.toString()).toEqual(posStr);
  });
  it('should create an instance from position string', () => {
    const file = 'hello', row = 12, col = 34;
    const posStr = file + ':' + row + ':' + col;
    const basic = NgPosition.fromString(posStr);
    expect(basic.fileName).toEqual(file);
    expect(basic.lineNumber).toEqual(row);
    expect(basic.columnNumber).toEqual(col);
    expect(basic.toString()).toEqual(posStr);
  });
});
