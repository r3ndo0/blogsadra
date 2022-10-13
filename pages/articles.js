import React from "react";

function articles({ articles }) {
  return (
    <div>
      {articles.map((article) => {
        return article.title;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/posts`);
  const articles = await res.json();

  // Pass data to the page via props
  return { props: { articles } };
}
export default articles;
