"use client";
import { useRouter } from "next/navigation";

export default function Create() {
  console.log("Create 페이지 작동");
  const router = useRouter();

  return (
    <>
      <h3 style={styles.title}>Create Form</h3>

      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.title.value;
          const message = e.target.message.value;
          const options = {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ title, message }),
          };

          fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/`, options)
            .then(res => res.json())
            .then(result => {
              // console.log(result);
              router.push(`/read/${result.id}`);
              router.refresh();
            });
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="글의 제목을 입력해주세요"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea name="message" className="form-control" id="message" rows="3"></textarea>

          <button type="submit" className="btn btn-primary">
            입력
          </button>
        </div>
      </form>
    </>
  );
}

const styles = {
  title: {
    color: "green",
  },
};
