function checkSample() {
  // 現在A1:B10の範囲で設定されたチェック済み
  // または未チェックの値を含むセルの状態を 'checked'に変更します。
  var range = SpreadsheetApp.getActive().getRange('A1:B10');
  range.check();
}

