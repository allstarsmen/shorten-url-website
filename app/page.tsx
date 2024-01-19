"use client";

import { generateUniqueString } from "@/lib/string";
import { useEffect, useState } from "react";

export default function Home() {
  const [originUrl, setOriginUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (url: string) => {
    setOriginUrl(url);
  };

  const handleOnClickToGenerateURL = () => {
    if (originUrl.trim() === "") return;

    setNewUrl(window.location.origin + `/${generateUniqueString()}`);
  };

  const handleOnCopy = () => {
    navigator.clipboard.writeText(newUrl).then(() => {
      setIsCopied(true);
    });
  };

  useEffect(() => {
    // Hide the copied message after 2s
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl">Best free tool for shortening URLs</h1>
      <div className="flex w-full gap-5 items-baseline mt-5">
        <input
          type="text"
          className="flex-grow mt-5 border border-gray-500 rounded px-3 py-1"
          placeholder="Enter your url here"
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button
          className="border border-gray-500 rounded px-3 py-1 bg-green-300 hover:bg-green-500"
          onClick={handleOnClickToGenerateURL}
        >
          Generate
        </button>
      </div>
      {newUrl && (
        <>
          <div className="mt-3 w-full text-xl font-bold">Result:</div>
          <div className="mt-2 w-full px-3 py-3 border flex items-baseline gap-5">
            <div className="flex-grow">
              <a
                href="{newUrl}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                {newUrl}
              </a>
            </div>
            <button
              className="border px-3 py-1 bg-blue-500 text-white hover:bg-blue-700"
              onClick={handleOnCopy}
            >
              Copy
            </button>
          </div>
          {isCopied && <div className="w-full mt-1">Copied to clipboard</div>}
        </>
      )}
    </main>
  );
}
