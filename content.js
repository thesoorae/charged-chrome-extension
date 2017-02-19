var elements = document.getElementsByTagName('a');
var testprint = [];
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var sentiment = getSentiment(text);

            // var replacedText = text.replace(/trump/gi, "Piece of Poop");

            if(sentiment == "negative"){
              console.log("found negative");
              element.style.backgroundColor = "red";
            } else if(sentiment == "positive"){
              element.style.backgroundColor= "blue";
            }

            if (testprint.length<3){
              testprint.push(sentiment);
            }
            // if (replacedText !== text) {
            //     element.replaceChild(document.createTextNode(replacedText), node);
            // }
        }
    }
}
console.log(testprint);

function getSentiment(headline){
  var urltext = "text=" + headline.split(' ').join('+');
  var req = new XMLHttpRequest();
    req.open(
            "GET",
            "https://twinword-sentiment-analysis.p.mashape.com/analyze/?" +
            urltext,
            true);

    req.setRequestHeader("X-Mashape-Key", "SslmJdtX8pmshkcU1EX3vJJ2pirSp1HpVrJjsn5FIH75l6mAce");
    req.setRequestHeader("Accept", "application/json");
    req.onload = onResponseReceived;

    req.send(null);

    function onResponseReceived(response) {
        // console.log("It worked.");
        // console.log(response.currentTarget.response);
        var score = JSON.parse(response.currentTarget.response);
        sentiment = score.type;
        console.log(sentiment);
        // return response.currentTarget.response;
    }
    }
