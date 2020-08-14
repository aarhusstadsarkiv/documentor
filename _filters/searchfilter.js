const lunr = require("lunr");
require("lunr-languages/lunr.stemmer.support")(lunr);
require("lunr-languages/lunr.da")(lunr);

var strip = function(text) {
    return text.replace(/(<([^>]+)>)/gi, "");
}
module.exports = function(collection) {
    const idx = lunr(function() {
        // this.use(lunr.da);
        this.ref('id');
        this.field('t', {
            boost: 10
        });
        this.field('s', {
            boost: 5
        });
        this.field('b');
        // Lunr 2.x-syntax
        collection.forEach( function(post) {
            let stripped = post.templateContent;
            this.add({
                id: post.data.id,
                t: post.data.title,
                s: post.data.summary,
                b: stripped
            })
        }, this);
    });
    return idx.toJSON();
};