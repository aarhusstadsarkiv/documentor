const lunr = require("lunr");
// const newLocal = require("lunr-languages/lunr.da")(lunr);

module.exports = function(collection) {
    // what fields we'd like our index to consist of
    const idx = lunr(function () {
        // this.use(lunr.da);
        this.ref('id');
        this.field('title');
        this.field('text');
    });

    collection.forEach( function(post) {
        idx.add({
            id: post.url,
            title: post.data.title,
            text: post.templateContent
        });
    });
    return idx.toJSON();
};