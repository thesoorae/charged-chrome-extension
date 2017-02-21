function highlightSentiment(){
  var elements = document.getElementsByTagName('a');

console.log("analyzing sentiment..");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
        function highlight(element, sentiment){
          if(sentiment.type == "negative"){
            element.style.backgroundColor = "#EEA6A6";
            // console.log("neg");
            // console.log(sentiment);
          } else if(sentiment.type == "positive"){
            // console.log("pos");
            element.style.backgroundColor = "#C3E2A6";
          }
        }
            var text = element.textContent;
            getSentiment(text).then(highlight.bind(null, element), function(status){
              console.log("error");
            });
          }}




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
        } else {
          reject(status);
        }
      }
  });
}

highlightSentiment();
