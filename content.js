var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/trump/gi, "Piece of Poop");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
var req = new XMLHttpRequest();
    req.open(
            "GET",
            "https://twinword-sentiment-analysis.p.mashape.com/analyze/?" +
            "text=i+hate+all+its+price+tags!",
            true);

    req.setRequestHeader("X-Mashape-Key", "SslmJdtX8pmshkcU1EX3vJJ2pirSp1HpVrJjsn5FIH75l6mAce");
    req.setRequestHeader("Accept", "application/json");
    req.onload = onResponseReceived;

    req.send(null);

    function onResponseReceived(response) {
        console.log("It worked.");
        console.log(response.currentTarget.response);
    }
