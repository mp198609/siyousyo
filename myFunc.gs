function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("プルダウン");
  var data  = sheet.getDataRange().getValues();
  for (var i=1; i<data.length; i++){
    Logger.log(data[i][1]);
  }
}