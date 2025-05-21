import Head from "next/head";
import Link from "next/link";
import React from "react";
import "./style.css";

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
        <div className="items-container">
          <ul className="text-lg flex flex-row gap-10 flex-wrap justify-center w-full">
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
              <Link legacyBehavior href="/PaginationApp">
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
            <li>
              <a
                href="https://anupam-coder.github.io/developer-practice/Machine-coding/nestedChecbox/index.html"
                className="text-blue-500 hover:underline no-underline"
              >
                Nested Checkbox
              </a>
            </li>
            <li>
              <a
                href="https://anupam-coder.github.io/developer-practice/Machine-coding/asyncProgressBar/index.html"
                className="text-blue-500 hover:underline no-underline"
              >
                Async Progress Bar
              </a>
            </li>
            <li>
              <a
                href="https://anupam-coder.github.io/developer-practice/Machine-coding/WhatsappChat/index.html"
                className="text-blue-500 hover:underline no-underline"
              >
                Whatsapp Chat
              </a>
            </li>
            <li>
              <Link legacyBehavior href="/TabForm">
                <a className="text-blue-500 hover:underline no-underline">
                  TabForm
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/AutocompleteSearchBar">
                <a className="text-blue-500 hover:underline no-underline">
                  Autocomplete Search Bar
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/FileExplorer">
                <a className="text-blue-500 hover:underline no-underline">
                  File Explorer
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/ProgressBar">
                <a className="text-blue-500 hover:underline no-underline">
                  ProgressBar
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/ChessboardApp">
                <a className="text-blue-500 hover:underline no-underline">
                  Chessboard App
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://anupam-coder.github.io/developer-practice/Machine-coding/TrafficLights/index.html"
                className="text-blue-500 hover:underline no-underline"
              >
                Traffic Lights(Vanilla JS)
              </a>
            </li>
            <li>
              <Link legacyBehavior href="/TrafficLights">
                <a className="text-blue-500 hover:underline no-underline">
                  Traffic Lights(ReactJS)
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/InfiniteScroll">
                <a className="text-blue-500 hover:underline no-underline">
                  InfiniteScroll
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/OTPInput">
                <a className="text-blue-500 hover:underline no-underline">
                  OTP Input
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/NestedCheckbox">
                <a className="text-blue-500 hover:underline no-underline">
                  Nested Checkbox (React)
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/UndoRedo">
                <a className="text-blue-500 hover:underline no-underline">
                  UndoRedo
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/ChipsInput">
                <a className="text-blue-500 hover:underline no-underline">
                  ChipsInputs
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/EventCalendar">
                <a className="text-blue-500 hover:underline no-underline">
                  EventCalendar
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/PoolWidget">
                <a className="text-blue-500 hover:underline no-underline">
                  PoolWidget
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <footer className=" backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
          <div className="container mx-auto px-4 text-center text-red-200">
            <p>Made with 💗 by Anupam</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
