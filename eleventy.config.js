module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/img");

    // This tells Eleventy: If we are on GitHub Actions, use the repo name as prefix.
    // Otherwise (locally), use nothing.
    const pathPrefix = process.env.GITHUB_ACTIONS ? "/iraz.site/" : "/";

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