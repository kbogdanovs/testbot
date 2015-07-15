module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var sourceText = req.body.text;
  var googleResponse = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyB15tsSZiJ4RlEry2QMdbWZEMNZGLgg6wg&q='+ sourceText +'&target=es&callback=translateText';
  var botPayload = {
    text : + googleResponse.data.translations.translatedText +
  };
 
  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}