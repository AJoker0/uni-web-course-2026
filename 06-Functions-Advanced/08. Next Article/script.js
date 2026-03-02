function getArticleGenerator(articles) {
    // find main div where we will add articles
    // make it one time to not search this every click
    let contentDiv = document.getElementById('content');

    //retrun function that will be called on every click
    return function() {
        // check leave if there articles in array
        if (articles.length > 0) {
            // method .shift() make two things:
            // 1) return first element of array
            // 2) remove this element from array
            let currentText = articles.shift();

            // create new article tag
            let newArticle = document.createElement('article');
            // set inside text of article
            newArticle.textContent = currentText;

            // add ready article inside div id="content"
            contentDiv.appendChild(newArticle);

        }
    }
}
