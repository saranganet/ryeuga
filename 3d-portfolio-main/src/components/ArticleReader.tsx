import { articles, Article } from "../data/articles";
import { FaArrowLeft } from "react-icons/fa";
import "./styles/ArticleReader.css";

interface ArticleReaderProps {
  articleId: string;
  onBack: () => void;
}

const ArticleReader = ({ articleId, onBack }: ArticleReaderProps) => {
  const article = articles.find((art) => art.id === articleId);

  if (!article) {
    return (
      <div className="article-reader-container">
        <button className="back-btn" onClick={onBack}>
          <FaArrowLeft /> Back
        </button>
        <div className="article-not-found">Article not found.</div>
      </div>
    );
  }

  return (
    <div className="article-reader-container">
      <button className="back-btn" onClick={onBack}>
        <FaArrowLeft /> Back
      </button>

      <article className="full-article">
        <header className="article-header">
          <div className="article-meta-row">
            <span className="article-category-badge">{article.category}</span>
            <span className="meta-separator">•</span>
            <span className="article-date">{article.date}</span>
            <span className="meta-separator">•</span>
            <span className="article-readtime">{article.readingTime}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-subtitle">{article.description}</p>
        </header>

        <div className="article-body">
          {article.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={index} className="body-heading">
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={index} className="body-paragraph">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default ArticleReader;
