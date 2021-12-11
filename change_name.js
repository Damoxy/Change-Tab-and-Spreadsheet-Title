function myFunction_2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; //Sheet 1
  var cell = sheet.getRange("B1");//Sheet1!b1    
  var value = cell.getValue();//Added
  sheet.setName(value +" Schedule");//Sheet2 name changed
  SpreadsheetApp.getActiveSpreadsheet().rename(value + "Schedule");

}
