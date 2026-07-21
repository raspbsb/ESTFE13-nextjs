"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  console.log("Update 페이지 작동");
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        message,
      }),
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
      .then(res => res.json())
      .then(result => {
        router.push(`/read/${id}`);
        router.refresh();
      });
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`)
      .then(res => res.json())
      .then(result => {
        setTitle(result.title);
        setMessage(result.message);
      });
  }, [id]);

  return (
    <>
      <h3 style={styles.title}>Update Form</h3>

      <form action="" onSubmit={handleSubmit}>
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
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
          ></textarea>

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
