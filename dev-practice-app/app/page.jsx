import Head from "next/head";
import Link from "next/link";
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
          <li>
            <a
              href="https://anupam-coder.github.io/developer-practice/Machine-coding/product-tour/index.html"
              className="text-blue-500 hover:underline no-underline"
            >
              Product Tour
            </a>
          </li>
          <li>
            <Link legacyBehavior href="/FolderStructure">
              <a className="text-blue-500 hover:underline no-underline">
                Folder Structure
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/StarRating">
              <a className="text-blue-500 hover:underline no-underline">
                Star Rating
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/TodoList">
              <a className="text-blue-500 hover:underline no-underline">
                Todo List
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Pagination">
              <a className="text-blue-500 hover:underline no-underline">
                Custom Pagination Component
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/StopWatch">
              <a className="text-blue-500 hover:underline no-underline">
                Stop Watch
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Accordion">
              <a className="text-blue-500 hover:underline no-underline">
                Accordion
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Carousal">
              <a className="text-blue-500 hover:underline no-underline">
                Carousal
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Modal">
              <a className="text-blue-500 hover:underline no-underline">
                Modal Component
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Comment">
              <a className="text-blue-500 hover:underline no-underline">
                Comments Component
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/TypeAhead">
              <a className="text-blue-500 hover:underline no-underline">
                TypeAhead
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
