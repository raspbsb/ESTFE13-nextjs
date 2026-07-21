export default async function Read(props) {
  console.log(props);
  const { id } = await props.params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`);
  const topics = await response.json();

  console.log(`Read ${id}페이지 작동`);

  return (
    <>
      <h2>{topics.title}</h2>
      {/* id = 1, 2, 3 */}
      <p>{topics.message}</p>
    </>
  );
}
