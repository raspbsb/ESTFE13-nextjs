// "use client";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Script from "next/script";
import Controls from "./Controls";
// import { useState, useEffect } from "react";

export const metadata = {
  title: "웹 언어",
  description: "웹페이지 구현하기",
};

export default async function RootLayout({ children }) {
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`)
  //     .then(res => res.json())
  //     .then(result => setTopics(result));
  // }, []);

  // console.log(topics);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`);
  const topics = await response.json();

  console.log(topics);

  console.log("공통 레이아웃 작동");

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
            <h1>
              <Link className="navbar-brand" href="/">
                Home
              </Link>
            </h1>
            <ul className="nav d-flex">
              {
                // topics 배열을 활용해 메뉴 출력
              }
              {topics.map(topic => (
                <li className="nav-item" key={topic.id}>
                  <Link className="nav-link" href={`/read/${topic.id}`}>
                    {topic.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main>
          {children}

          <hr />

          <Controls />
        </main>
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
