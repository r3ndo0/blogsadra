import articles from "../pages/articles";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ articles }) => {
  return (
    <div className="grid grid-cols-3 mx-6 mt-44 text-center gap-5">
      {articles &&
        articles.map((article, i) => {
          return (
            <Link href="/">
              <div
                key={i}
                className="border-2 cursor-pointer border-black p-6  "
              >
                <Image
                  className="py-2"
                  src={article.img}
                  width={400}
                  height={250}
                />
                {article.title}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Posts;
