// import React from "react";
// import Posts from "../components/Posts";
// import { fetcher } from "../lib/api";

import Posts from "../components/Posts";

// function articles({ articles }) {
//   // console.log(articles.data[0].attributes.img.data[0].attributes.url);
//   return (
//     <div>
//       <Posts articles={articles} />
//     </div>
//   );
// }
// export default articles;

// export async function getServerSideProps() {
//   const articlesResponse = await fetcher(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=img`
//   );
//   return {
//     props: {
//       articles: articlesResponse,
//     },
//   };
// }

function articles({ sortedByDate }) {
  return (
    <div>
      <Posts articles={sortedByDate} />
    </div>
  );
}
export default articles;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/posts`);
  console.log(res);
  const articles = await res.json();
  const sortedByDate = articles.reverse();

  // Pass data to the page via props
  return { props: { sortedByDate } };
}
