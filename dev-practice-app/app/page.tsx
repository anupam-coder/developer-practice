import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-start min-h-screen my-8">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="index.css" />
        <title>Machine coding</title>
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome To Machine Coding</h1>
        <p className="text-lg mb-8">
          Click on the below link to navigate to the respective topic
        </p>
        <ul className="text-lg">
          <li>
            <a
              href="https://anupam-coder.github.io/developer-practice/Machine-coding/tic-tac-toe/index.html"
              className="text-blue-500 hover:underline no-underline"
            >
              Tic Tac Toe
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
