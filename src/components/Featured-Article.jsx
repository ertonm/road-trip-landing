import featuredArticle from "../images/featured-article.jpg";

function FeaturedArticle() {
    return (
        <a href="/article/sahara-camping" className="featured-link">
            <article className="Featured-Article">
                <img src={featuredArticle} alt="Featured Article picture a woman posing with a camel" />
                <p>Featured Article</p>
                <h2>Wild Camping Along Sahara's Edge</h2>
            </article>
        </a>
    )
}

export default FeaturedArticle
