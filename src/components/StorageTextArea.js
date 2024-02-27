"use client";

import { useState, useEffect } from "react";

export default function StorageTextArea({ storageKey, question }) {
  if (!storageKey) {
    storageKey = question;
  }

  const [text, setText] = useState(
    () => window.localStorage.getItem(storageKey) || ""
  );

  function handleChange(event) {
    setText(event.target.value);
  }

  useEffect(() => {
    window.localStorage.setItem(storageKey, text);
  }, [text]);

  return (
    <div className="mt-4">
      <label htmlFor="comment" className="block text-sm font-medium leading-6">
        {question}
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name={storageKey}
          id={storageKey}
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={handleChange}
          placeholder={question}
          value={text}
        />
      </div>
    </div>
  );
}
