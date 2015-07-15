


function translate(req)
{
var newScript = document.createElement('script');
 
newScript.type = 'text/javascript';
 
//Restful style GET calling
var source = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyB15tsSZiJ4RlEry2QMdbWZEMNZGLgg6wg&q='+ req.body.text +'&target=es&callback=translateText'
 
newScript.src = source;
 
//Adding  dynamic script to head
dcoument.getElementByTagName('head')[0].appendChild(newScript); //request will be sent
 
}
 
//callback function
function translateText(response)
{
var resultText = response.data.translations[0].trnslatedText;


module.exports = function



module.exports = function (req, res, resultText next) {
  var userName = req.body.user_name;
  var transText = 
  var botPayload = {
    text : + resultText +
  };
 
  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}