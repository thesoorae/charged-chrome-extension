function highlightSentiment(){
  var elements = document.getElementsByTagName('a');

console.log("in the function");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // for (var j = 0; j < element.childNodes.length; j++) {
        // var node = element.childNodes[j];
        // if (node.nodeType === 3) {

        function highlight(element, sentiment){
          if(sentiment.type == "negative"){
            element.style.backgroundColor = "red";
            console.log("neg");
          } else if(sentiment.type == "positive"){
            console.log("pos");
            element.style.backgroundColor = "blue";
          }
        }

            // element.className="pos-rel";
            var text = element.textContent;
            console.log(text);
            // var neg_highlight = document.createElement('div');
            // neg_highlight.className="neg-highlight";
            // var pos_highlight = document.createElement('div');
            // pos_highlight.className="pos-highlight";
            // console.log(text);
            getSentiment(text).then(highlight.bind(null, element), function(status){
              console.log("error");
            });
          }}
            // var replacedText = text.replace(/trump/gi, "Piece of Poop");


            // if (replacedText !== text) {
            //     element.replaceChild(document.createTextNode(replacedText), node);
            // }





function getSentiment(headline){
  var urltext = "text=" + headline.split(' ').join('+');
  return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest();
      req.open(
              "GET",
              "https://twinword-sentiment-analysis.p.mashape.com/analyze/?" +
              urltext,
              true);

      req.setRequestHeader("X-Mashape-Key", "SslmJdtX8pmshkcU1EX3vJJ2pirSp1HpVrJjsn5FIH75l6mAce");
      req.setRequestHeader("Accept", "application/json");
      req.responseType='json';
      req.onload = onResponseReceived;

      req.send(null);


      function onResponseReceived() {
        var status = req.status;
        if(status ==200){
          resolve(req.response);
        }else {
          reject(status);
        }
      }
  });

    }


    // chrome.app.runtime.onLaunched.addListener(function() {
      highlightSentiment();
    // });
