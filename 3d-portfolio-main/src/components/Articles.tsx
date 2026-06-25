import { useState } from "react";
import { articles, Article } from "../data/articles";
import { FaArrowRight, FaRocket, FaRobot, FaCode, FaGraduationCap } from "react-icons/fa";
import "./styles/Articles.css";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Startups":
      return <FaRocket style={{ fontSize: "1.75rem", color: "var(--accent)" }} />;
    case "AI":
      return <FaRobot style={{ fontSize: "1.75rem", color: "var(--accent)" }} />;
    case "Coding":
      return <FaCode style={{ fontSize: "1.75rem", color: "var(--accent)" }} />;
    case "College":
      return <FaGraduationCap style={{ fontSize: "1.75rem", color: "var(--accent)" }} />;
    default:
      return <FaRocket style={{ fontSize: "1.75rem", color: "var(--accent)" }} />;
  }
};

const categories = ["Latest", "AI", "Startups", "Coding", "College"];

interface ArticlesProps {
  onSelectArticle: (articleId: string) => void;
}

const Articles = ({ onSelectArticle }: ArticlesProps) => {
  const [activeCategory, setActiveCategory] = useState("Latest");

  const filteredArticles = activeCategory === "Latest"
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="articles-section">
      <h2 className="articles-heading">Latest Articles</h2>
      
      {/* Category Tabs */}
      <div className="categories-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="articles-list">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article: Article) => (
            <a
              href={article.link}
              key={article.id}
              className="article-card-link"
              onClick={(e) => {
                e.preventDefault();
                onSelectArticle(article.id);
              }}
            >
              <div className="article-item-card">
                <div className="article-left-icon">
                  <span className="article-emoji">{getCategoryIcon(article.category)}</span>
                </div>
                
                <div className="article-item-content">
                  <div className="article-item-meta">
                    <span className="meta-dash">—</span>
                    <span className="article-date">{article.date}</span>
                    <span className="meta-separator">•</span>
                    <span className="article-readtime">{article.readingTime}</span>
                  </div>
                  <h3 className="article-item-title">{article.title}</h3>
                  <p className="article-item-desc">{article.description}</p>
                </div>

                <div className="article-right-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="no-articles">
            No articles found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
