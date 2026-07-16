export default function Layout({ children }) {
  console.log("Delete 레이아웃 작동");

  console.log(children);
  return (
    <>
      <h2>Delete Page</h2>
      {children}
    </>
  );
}
