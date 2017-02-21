#Charged
##A Chrome Extension for determining how charged your news is.

##How to Use
Navigate to any site that displays its headlines as links. Click on the Charged icon in your Google Chrome browser toolbar. Within a few seconds, highlights will slowly begin to appear across the headlines, indicating which ones use positive language, and which ones use negative language. Neutral headlines will be left un-highlighted. The extension has to crawl across the entire web page, so full analysis may take a minute. The analysis is based on keywords and an external API, so is not perfect, but in general we have found it to be 90% accurate.


##Use
News sources claim to be neutral, but can often spin headlines and articles to be positive or negative, skewing the reader's judgement of the subject matter without their awareness of it. This tool highlights the sentiment contained in the language used by the news source, and the reader can then assess whether the news is being delivered with any sort of bias. Pay special attention to trends on whether specific topics and individuals are being shown in a predominantly positive or negative light.

##Background
Built in JavaScript and a teeny bit of HTML. This extension scans the DOM for headline elements, based on anything under the anchor (or link) tag, ```<a>```, and sends the entire phrase to the Twinword Sentiment Analysis API. This returns a sentiment score and ratio, as well as a rating of positive, negative, or neutral. Based on the sentiment returned by the API, headlines are highlighted in green if they are construed as positive, and red if they are assessed to be more negative.

##How Sentiment Analysis is performed.
Taken from [Mashable Site](https://market.mashape.com/twinword/sentiment-analysis/overview)

###Interpreting the Score and Ratio of Sentiment Analysis

**SCORE**

The score indicates how negative or positive the overall text analyzed is. Anything below a score of -0.05 we tag as negative and anything above 0.05 we tag as positive. Anything in between inclusively, we tag as neutral.

Since we have provided the actual scores we used determine the type, you are free to reject our interpretation and interpret the actual scores yourself and create your own negative and positive minimum scores.

**RATIO**

The ratio is the combined total score of negative words compared to the combined total score of positive words, ranging from -1 to 1. Take the below for example.

Let’s say we are analyzing words A, B, C and D.

Scenario 1) If words A and B are negative words having a combined total score of -5.0 and words C and D are positive words having a combined total score of 5.0, then the ratio would be 0 (or 1:1) as both sides are balanced.

Scenario 2) If negative words have a total combined score of -5.0 while positive words have a total combined score of 2.5, then the ratio would be -0.667 (or 2:1).

Scenario 3) If negative words total -5.0 and positive words total 0.0, then the ratio would be -1 (or 1:0).

Find out more at [Twinword Sentiment Analysis site](https://www.twinword.com/api/)
