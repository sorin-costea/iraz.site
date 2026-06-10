module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/img");

    // Local development and the custom domain both serve the site from the root.
    const pathPrefix = "/";

    return {
        pathPrefix: pathPrefix,
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    };
};
