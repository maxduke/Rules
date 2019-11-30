/*
https:\/\/license\.pdfexpert\.com\/api\/.*\/(?:documents|pdfexpert6)\/subscription\/(refresh$|check$) url script-response-body Pdfexpert.vip.js
host: license.pdfexpert.com
*/

var obj = JSON.parse($response.body);

obj= {
  "originalTransactionId" : "20000625420102",
  "subscriptionState" : "trial",
  "isInGracePeriod" : false,
  "subscriptionExpirationDate" : "17:48 25/11/2099",
  "isDocuments6User" : true,
  "isEligibleForIntroPeriod" : false,
  "subscriptionAutoRenewStatus" : "autoRenewOff",
  "subscriptionReceiptId" : "1530908572000"
};

$done({body: JSON.stringify(obj)});
