module.exports = function(collection) {
    const data = {};
    collection.forEach( function(post) {
        if (post.data.id) {
            let key = post.data.id.toString();
            data[key] = {
                "title": post.data.title,
                "url": post.url
            }
        }
    });
    return data;
};