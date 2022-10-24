function hoge(){
  addData("ハンバーガー","U608c6306032f3fa798ff128eb5ded8f8");
}

// シート追加
function addSheet(name) {
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  let newSheet = sheetName.insertSheet();
  newSheet.setName(name);
  //初期値
  var sheetData = sheetName.getSheetByName(name);
  sheetData.getRange(1, 1).setValue(2);
}

// 注文データ追加
function addData(userMessage,userId){
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  // var lastRow = sheetData.getLastRow();

  //出力
  //現在の行取得
  let nowcol = sheetData.getRange(1,1).getValue();
  //最終行取得
  let lastRow = sheetData.getRange(1, nowcol).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow();
  //入力
  if(sheetData.getRange(1,nowcol).isBlank()) {
    sheetData.getRange(1, nowcol).setValue(userMessage);
  } else if (sheetData.getRange(1,nowcol).isBlank() == false && sheetData.getRange(2,nowcol).isBlank() == true){
    sheetData.getRange(2, nowcol).setValue(userMessage);
  } else {
    sheetData.getRange(lastRow+1, nowcol).setValue(userMessage);
  }

  // sheetData.appendRow([userMessage]);
  //sheetData.getRange(1, col).setValue(Utilities.formatDate(new Date(),"JST", "yyyy/MM/dd"));
  //var lastRow = sheetData.getRange(1,col).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow()+1;
  //sheetData.getRange(lastRow, lastCol).setValue(userMessage);
  // if (lastRow==0){
  //   sheetData.insertRows(1);
  // }
  // else{
  //   sheetData.getRange(lastRow, lastCol).setValue(userMessage);
  // }
}

// 注文データ取得 カートの取得
function getData(userId) {
  // スプレッドシート＆シートオブジェクトを取得
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  var lastRow = sheetData.getLastRow();
  let nowcol = sheetData.getRange(1,1).getValue();
  let str = "";
  for (var i=1; i<=lastRow; i++) {
    let tmp = sheetData.getRange(i, nowcol).getValue();
    str += "\n" + tmp;
  }
  console.log(str);
  return str
}

// 注文履歴
function getOrderHistory(userId) {
  // スプレッドシート＆シートオブジェクトを取得
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  var lastRow = sheetData.getLastRow();
  let nowcol = sheetData.getRange(1,1).getValue();
  let str = "";
  for (var j=2; j<=nowcol; j++){
    for (var i=1; i<=lastRow; i++) {
      let tmp = sheetData.getRange(i,j).getValue();
      str += "\n" + tmp;
    }
  }
  console.log(str);
  return str
}

// 注文完了
function close_order(userId){
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  // var lastRow = sheetData.getLastRow();
  //sheetData.appendRow(["注文おわり"]);

  //出力
  //現在の行取得
  let nowcol = sheetData.getRange(1,1).getValue();
  
  //最終行取得
  let lastRow = sheetData.getRange(1, nowcol).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow();
  //入力
  if(sheetData.getRange(1,nowcol).isBlank()) {
    sheetData.getRange(1, nowcol).setValue(Utilities.formatDate(new Date(),"JST", "yyyy/MM/dd　hh:mm"));
  } else if (sheetData.getRange(1,nowcol).isBlank() == false && sheetData.getRange(2,nowcol).isBlank() == true){
    sheetData.getRange(2, nowcol).setValue(Utilities.formatDate(new Date(),"JST", "yyyy/MM/dd　hh:mm"));
  } else {
    sheetData.getRange(lastRow+1, nowcol).setValue(Utilities.formatDate(new Date(),"JST", "yyyy/MM/dd　hh:mm"));
  }
  sheetData.getRange(1,1).setValue(sheetData.getRange(1,1).getValue()+1);
  //sheetData.getRange(1, lastCol).setValue(Utilities.formatDate(new Date(),"JST", "yyyy/MM/dd"));
  //sheetData.getRange(1, lastCol+1).setValue("個数");
  //return lastCol;
}

// 注文キャンセル
function cancel(userId){
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  let nowcol = sheetData.getRange(1,1).getValue();
  sheetData.getRange(1,nowcol,1000,nowcol).clearContent();
}

// シートがあるかどうか
function isSheet(userId){
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  if (!sheetData){
    // シートがない
    return false
  }
  else{
    // シートがある
    return true
  }
}

function account(userId){
  var price = {"ビッグマック":410, "ダークモカチップフラペチーノ":525, "三角チョコパイ 黒":140};
  var total_pay = 0;
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  var lastRow = sheetData.getLastRow();
  let nowcol = sheetData.getRange(1,1).getValue();
  
  for (var i=1; i<=lastRow; i++) {
    let tmp = sheetData.getRange(i, nowcol).getValue();
    //Logger.log(tmp);
    if (tmp == "ビッグマック"){
      total_pay += price["ビッグマック"];
    }
    else if (tmp == "ダークモカチップフラペチーノ"){
      total_pay += price["ダークモカチップフラペチーノ"];
    }
    else if (tmp == "三角チョコパイ 黒"){
      total_pay += price["三角チョコパイ 黒"];
    }
  }

  // var order_data_str = getData(userId);
  // for (var i=0;i<=order_data.length;i++){
  //   if (order_data_str[i] == "ビックマック"){
  //     total_pay += price["ビックマック"];
  //   }
  //   else if (order_data[i] == "ダークモカチップフラペチーノ"){
  //     total_pay += price["ダークモカチップフラペチーノ"];
  //   }
  // }
  return total_pay
}

//ユーザーから受け取ったメッセージをオウム返しするサンプルコード
function doPost(e) {
  //LINE Messaging APIのチャネルアクセストークンを設定
  let token = "Zg7ZFXKeWQNj8nMb+mXD4m4NdJOv1PRWwgJvZH+qBpGClP1ANrSFLZ9dAvb7qGqw8IVj98xP3Nndn3Q6RU4/FIauTXsJU8zf/qTV+GZbcyTWczl2Cq3hzBvqXv57NEg9Jfu4q92+WAKcBVNnQpvcxwdB04t89/1O/w1cDnyilFU=";
  // WebHookで取得したJSONデータをオブジェクト化し、取得
  let eventData = JSON.parse(e.postData.contents).events[0];
  // ユーザID取得
  let userId = JSON.parse(e.postData.contents).events[0].source.userId;
  //取得したデータから、応答用のトークンを取得
  let replyToken = eventData.replyToken;
  //取得したデータから、メッセージ種別を取得
  let messageType = eventData.message.type;
  //取得したデータから、ユーザーが投稿したメッセージを取得
  let userMessage = eventData.message.text;
  // 応答メッセージ用のAPI URLを定義
  let url = 'https://api.line.me/v2/bot/message/reply';
  var sheetId = "1n1sKDH1fkGp9g2xaeSTxENNiDIsUsqOhJ2jFwt-hDME";
  var sheetName = SpreadsheetApp.openById(sheetId);
  var sheetData = sheetName.getSheetByName(userId);
  //var colum = sheetData.getRange(1, lastCol).getValue();
  if (!isSheet(userId)){
    addSheet(userId);
  }

  if (userMessage=="cancel"){
    cancel(userId);
  }

  order = getData(userId); 
  let replyMessage = "";
  let isFlex = false;
  let msg = "";

  if (userMessage=="注文確定"){
    close_order(userId);
    var lastRow = sheetData.getLastRow()+1;
    sheetData.insertRows(lastRow);
    replyMessage += "ありがとうございました"; 
  }
  else if (userMessage=="注文取消"){
    cancel(userId);
  }
  else if (userMessage=="注文履歴"){
    var hist = getOrderHistory(userId);
    replyMessage += "注文履歴：" + hist;
  }
  else if (userMessage=="Coming Soon..."){
  }
  else if (userMessage=="カート一覧" || userMessage=="注文内容確認"){
    var cart = getData(userId);
    replyMessage += "カート一覧：" + cart;
    replyMessage += "\n金額：" + account(userId);
  }
  else if (userMessage=="ビッグマック"){
    addData(userMessage,userId);
    replyMessage += "注文内容：" + userMessage ;
    replyMessage += "金額：" + account(userId) ;
    msg = flex_bigmac();
    isFlex = true;
  }
  else if (userMessage=="三角チョコパイ 黒"){
    addData(userMessage,userId);
    replyMessage += "注文内容：" + userMessage ;
    replyMessage += "金額：" + account(userId) ;
    msg = flex_choko();
    isFlex = true;
  }
  else if (userMessage=="ダークモカチップフラペチーノ"){
    addData(userMessage,userId);
    replyMessage += "注文内容：" + userMessage ;
    replyMessage += "金額：" + account(userId) ;
    msg = flex_moka();
    isFlex = true;
  }
  else if (userMessage=="オススメ"){
    addData("三角チョコパイ 黒",userId);
    // replyMessage += "注文内容：" + userMessage ;
    // replyMessage += "金額：" + account(userId) ;
    msg = flex_choko();
    isFlex = true;
  }
  else{
    addData("席番号:"+userMessage,userId);
    replyMessage += "メニューに戻り、NEXTを押して下さい";
    //replyMessage += "金額：" + account(userId) ;
  }
 
  // 注文完了したら
  //ユーザーからの投稿メッセージから応答メッセージを用意
  //APIリクエスト時にセットするペイロード値を設定する

  if(isFlex){
    let payload = {
      'replyToken': replyToken,
      'messages': [msg]
    };

    let options = {
      'payload' : JSON.stringify(payload),
      'myamethod'  : 'POST',
      'headers' : {"Authorization" : "Bearer " + token},
      'contentType' : 'application/json'
    };

    UrlFetchApp.fetch(url, options);
  } else {
    let payload = {
      'replyToken': replyToken,
      'messages': [{
          'type': 'text',
          'text': replyMessage
        }]
    };

    let options = {
      'payload' : JSON.stringify(payload),
      'myamethod'  : 'POST',
      'headers' : {"Authorization" : "Bearer " + token},
      'contentType' : 'application/json'
    };

    UrlFetchApp.fetch(url, options);
  }
}

function flex_choko(){
  let message = 
{
        'type':'flex',　//ここの宣言が必須
        'altText':'this is a flex message',
        //↓このcontentsの部分にSimulatorのJSONをコピー
        'contents': 
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            // "action": {
            //   "type": "uri",
            //   "uri": "https://linecorp.com"
            // },
            "url": "https://www.mcdonalds.co.jp/product_images/1592/2142.m.webp?20221011135925"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            // "action": {
            //   "type": "uri",
            //   "uri": "https://linecorp.com"
            // },
            "contents": [
              {
                "type": "text",
                "size": "xl",
                "weight": "bold",
                "text": "三角チョコパイ 黒"
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "¥140",
                        "weight": "bold",
                        "margin": "sm",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": "339kcl",
                        "size": "sm",
                        "align": "end",
                        "color": "#AAAAAA"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
                "wrap": true,
                "color": "#AAAAAA",
                "size": "xxs"
              }
            ]
          },
          // "footer": {
          //   "type": "box",
          //   "layout": "vertical",
          //   "contents": [
          //     {
          //       "type": "button",
          //       "style": "primary",
          //       "color": "#905C44",
          //       "margin": "xxl",
          //       "action": {
          //         "type": "uri",
          //         "label": "Add to Cart",
          //         "uri": "https://linecorp.com"
          //       }
          //     }
          //   ]
          // }
        }
      }
  return message;
}


function flex_bigmac(){
  let message = 
      {
        'type':'flex',　//ここの宣言が必須
        'altText':'this is a flex message',
        //↓このcontentsの部分にSimulatorのJSONをコピー
        'contents': 
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "size": "full",
            "aspectRatio": "20:16",
            "aspectMode": "cover",
            // "action": {
            //   "type": "uri",
            //   "uri": "https://linecorp.com"
            // },
            "url": "https://www.mcdonalds.co.jp/product_images/725/1210-Big-Mac.m.m.webp?20220930044523"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            // "action": {
            //   "type": "uri",
            //   "uri": "https://linecorp.com"
            // },
            "contents": [
              {
                "type": "text",
                "size": "xl",
                "weight": "bold",
                "text": "ビッグマック"
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "¥410",
                        "weight": "bold",
                        "margin": "sm",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": "536kcl",
                        "size": "sm",
                        "align": "end",
                        "color": "#AAAAAA"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "text": "単品",
                "wrap": true,
                "color": "#AAAAAA",
                "size": "xxs"
              }
            ]
          },
          // "footer": {
          //   "type": "box",
          //   "layout": "vertical",
          //   "contents": [
          //     {
          //       "type": "button",
          //       "style": "primary",
          //       "color": "#905C44",
          //       "margin": "xxl",
          //       "action": {
          //         "type": "uri",
          //         "label": "Add to Cart",
          //         "uri": "https://linecorp.com"
          //       }
          //     }
          //   ]
          // }
        }
      }
  return message;
}


function flex_moka(){
  let message = 
{
        'type':'flex',　//ここの宣言が必須
        'altText':'this is a flex message',
        //↓このcontentsの部分にSimulatorのJSONをコピー
        'contents': 
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "size": "full",
            "aspectRatio": "20:20",
            "aspectMode": "cover",
            // "action": {
            //   "type": "uri",
            //   "uri": "https://linecorp.com"
            // },
            "url": "https://asset.menu.starbucks.co.jp/public/sku_images/4524785166059/4524785166059_1_m.jpg"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            // "action": {
            //   "type": "uri",
            //   "uri": "https://linecorp.com"
            // },
            "contents": [
              {
                "type": "text",
                "size": "xl",
                "weight": "bold",
                "text": "ダークモカチップフラペチーノ"
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "¥525",
                        "weight": "bold",
                        "margin": "sm",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": "428kcl",
                        "size": "sm",
                        "align": "end",
                        "color": "#AAAAAA"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "text": "Short",
                "wrap": true,
                "color": "#AAAAAA",
                "size": "xxs"
              }
            ]
          },
          // "footer": {
          //   "type": "box",
          //   "layout": "vertical",
          //   "contents": [
          //     {
          //       "type": "button",
          //       "style": "primary",
          //       "color": "#905C44",
          //       "margin": "xxl",
          //       "action": {
          //         "type": "uri",
          //         "label": "Add to Cart",
          //         "uri": "https://linecorp.com"
          //       }
          //     }
          //   ]
          // }
        }
      }
  return message;
}
