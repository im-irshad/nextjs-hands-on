import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
}
export default Home;
