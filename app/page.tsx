"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { generateURL } from "./actions";
import Toasts from "./toasts";
import { InitState } from "./types/initState";

const initState: InitState = {
  message: "",
  success: false,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="border border-gray-500 rounded px-3 py-1 bg-green-300 hover:bg-green-500"
      aria-disabled={pending}
    >
      Generate
    </button>
  );
};

function newURL(str: string | undefined) {
  if (str) return window.location.origin + "/" + str;

  return "";
}

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const [state, formAction] = useFormState(generateURL, initState);

  const handleOnCopy = () => {
    navigator.clipboard.writeText(newURL(state.uniqueStr)).then(() => {
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
    <>
      <main className="flex min-h-screen flex-col items-center p-10">
        <h1 className="text-3xl">Best free tool for shortening URLs</h1>
        <form
          action={formAction}
          className="flex w-full gap-5 items-baseline mt-5"
        >
          <input
            type="text"
            name="originUrl"
            className="flex-grow mt-5 border border-gray-500 rounded px-3 py-1"
            placeholder="Enter your url here"
            required
          />
          <SubmitButton />
        </form>
        {!state.success && state.message && (
          <div className="w-full mt-1 text-red-500">{state.message}</div>
        )}
        {state.success && (
          <>
            <div className="mt-3 w-full text-xl font-bold">Result:</div>
            <div className="mt-2 w-full px-3 py-3 border flex items-baseline gap-5">
              <div className="flex-grow">
                <a
                  href={newURL(state.uniqueStr)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  {newURL(state.uniqueStr)}
                </a>
              </div>
              <button
                className="border px-3 py-1 bg-blue-500 text-white hover:bg-blue-700"
                onClick={handleOnCopy}
              >
                Copy
              </button>
            </div>
          </>
        )}
      </main>
      {isCopied && <Toasts />}
    </>
  );
}
