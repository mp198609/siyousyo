function getMainSheet() {
  if (getMainSheet.memoSheet) { return getMainSheet.memoSheet; }

  getMainSheet.memoSheet = SpreadsheetApp.getActive().getSheetByName('製作仕様書');
  return getMainSheet.memoSheet;
}

function onEdit(event){

  var objSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var objSheet = objSpreadsheet.getActiveSheet();
  var objSettingSheet = SpreadsheetApp.getSheetByName("プルダウン");
  var objCell = objSheet.getActiveCell();
  var sheetName = objSheet.getSheetName();
  var model = [[]];
  var coldhead = [[]];
  var comp = [[]];
  var N2gas = [[]];
  var container = [[]];
  var data  = objSettingSheet.getDataRange().getValues();

    // アクティブシートが"製作仕様書"の場合
    if(sheetName.match("製作仕様書"))
    {
      var str = objCell.getValue()
      
      
      //温度計
      if(str.match(/温度計有/)){
        objSheet.getRange("E9").setValue("必要");
      }
      if(str.match(/温度計無/)){
        objSheet.getRange("E9").setValue("不要");
      }
      
      //PSA
      if(str.match(/PSA有/)){
        if(str.match(/EMP-07/)){
          objSheet.getRange("E7").setValue("GN-10i");
        }
        if(str.match(/EMP-14/)){
          objSheet.getRange("E7").setValue("GN-10i");
        }
        if(str.match(/XL-1450/)){
          objSheet.getRange("E7").setValue("GN-10i");
        }
        
        if(str.match(/EMP-20/)){
          objSheet.getRange("E7").setValue("GN-15i");
        }
        if(str.match(/NS-200/)){
          objSheet.getRange("E7").setValue("GN-15i");
        }
        if(str.match(/XL-20100/)){
          objSheet.getRange("E7").setValue("GN-15i");
        }
        
        if(str.match(/NS-300/)){
          objSheet.getRange("E7").setValue("GN-20i");
        }
        if(str.match(/XL-30140/)){
          objSheet.getRange("E7").setValue("GN-20i");
        }
        
        if(str.match(/UMP-40W/)){
          objSheet.getRange("E7").setValue("GN-30i");
        }
        
        if(str.match(/UMK-14/)){
          objSheet.getRange("E7").setValue("GN-10U");
        }
        
      }else{
        objSheet.getRange("E7").setValue("無し");
      }
      
      //容器
      if(str.match(/EMP-07/)){
        objSheet.getRange("E8").setValue("48L 一般品");
      }
      if(str.match(/EMP-14/)){
        objSheet.getRange("E8").setValue("48L 一般品");
      }
      if(str.match(/XL-1450/)){
        objSheet.getRange("E8").setValue("48L 一般品");
      }
      
      if(str.match(/EMP-20/)){
        objSheet.getRange("E8").setValue("100L 一般品");
      }
      if(str.match(/NS-200/)){
        objSheet.getRange("E8").setValue("100L 一般品");
      }
      if(str.match(/XL-20100/)){
        objSheet.getRange("E8").setValue("100L 一般品");
      }
      
      if(str.match(/NS-300/)){
        objSheet.getRange("E8").setValue("125L 一般品");
      }
      if(str.match(/XL-30140/)){
        objSheet.getRange("E8").setValue("125L 一般品");
      }
      
      if(str.match(/UMP-40W/)){
        objSheet.getRange("E8").setValue("125L 一般品");
      }
      
      if(str.match(/MP-300K/)){
        objSheet.getRange("E8").setValue("125L 一般品");
      }
      
      if(str.match(/UMK-14/)){
        objSheet.getRange("E8").setValue("48L 一般品");
      }
      
      //冷凍機
      if(str.match(/EMP-07/)){
        objSheet.getRange("E5").setValue("S030Z");
      }
      
      if(str.match(/EMP-14/)){
        objSheet.getRange("E5").setValue("S050");
      }
      if(str.match(/XL-1450/)){
        objSheet.getRange("E5").setValue("S050");
      }
      if(str.match(/EMP-20/)){
        objSheet.getRange("E5").setValue("S050");
      }
      if(str.match(/NS-200/)){
        objSheet.getRange("E5").setValue("S050");
      }
      if(str.match(/XL-20100/)){
        objSheet.getRange("E5").setValue("S050");
      }
      if(str.match(/UMK-14/)){
        objSheet.getRange("E5").setValue("S050");
      }
      
      if(str.match(/NS-300/)){
        objSheet.getRange("E5").setValue("S050×2");
      }
      if(str.match(/XL-30140/)){
        objSheet.getRange("E5").setValue("S050×2");
      }
      if(str.match(/MP-300K/)){
        objSheet.getRange("E5").setValue("S050×2");
      }
      
      if(str.match(/UMP-40W/)){
        objSheet.getRange("E5").setValue("RMS150T");
      }
      
      //コンプレッサ
      if(str.match(/EMP-07A/)){
        objSheet.getRange("E6").setValue("SA112-C");
      }
      if(str.match(/EMP-07W/)){
        objSheet.getRange("E6").setValue("SW112-C");
      }
      
      if(str.match(/EMP-14A/)){
        objSheet.getRange("E6").setValue("SA115-C");
      }
      if(str.match(/EMP-14W/)){
        objSheet.getRange("E6").setValue("SW115-C");
      }
      if(str.match(/XL-1450/)){
        objSheet.getRange("E6").setValue("SA115-C");
      }
      if(str.match(/UMK-14/)){
        objSheet.getRange("E6").setValue("SA115-C");
      }
      
      if(str.match(/EMP-20/)){
        objSheet.getRange("E6").setValue("UW404");
      }
      if(str.match(/NS-200/)){
        objSheet.getRange("E6").setValue("UW404");
      }
      if(str.match(/XL-20100/)){
        objSheet.getRange("E6").setValue("UW404");
      }
      
      if(str.match(/NS-300/)){
        objSheet.getRange("E6").setValue("UW701N");
      }
      if(str.match(/XL-30140/)){
        objSheet.getRange("E6").setValue("UW701N");
      }
      if(str.match(/MP-300K/)){
        objSheet.getRange("E6").setValue("UW701N");
      }
      
      if(str.match(/UMP-40W/)){
        objSheet.getRange("E6").setValue("C30PMVRT");
      }
      
      //フローシート
      if(str.match(/UMP-40W/)){
        objSheet.getRange("E6").setValue("C30PMVRT");
      }
      
  
              
    } //ここ最後

  function checkSample() {
  // 現在A1:B10の範囲で設定されたチェック済み
  // または未チェックの値を含むセルの状態を 'checked'に変更します。
  var range = SpreadsheetApp.getActive().getRange('E12:T13');
  range.check();
    checkSample();
}

  
}