export default function Layout({ children }) {
  console.log("Update 레이아웃 작동");

  console.log(children);
  return (
    <form>
      <h2>Update Page</h2>
      {children}
    </form>
  );
}
