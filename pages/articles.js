import Posts from "../components/Posts";

function articles({ sortedByDate }) {
  console.log(sortedByDate);
  return (
    <div>
      <Posts articles={sortedByDate} />
    </div>
  );
}
export default articles;

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/posts`);
  const articles = await res.json();
  const sortedByDate = articles.reverse();

  // Pass data to the page via props
  return { props: { sortedByDate } };
}
