async function demo(params, context) {console.log("context",context); return { "statusCode": 200, "body": "222Hello import from auto Lambda!" }; } export {  demo as default };