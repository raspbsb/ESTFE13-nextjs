export default async function Read(props) {
  const { id } = await props.params;

  console.log(`Read ${id}페이지 작동`);

  return (
    <>
      <h2>Read</h2>
      {/* id = 1, 2, 3 */}
      <p>parameter: {id}</p>
    </>
  );
}
