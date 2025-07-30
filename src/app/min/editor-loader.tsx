"use client";

import dynamic from "next/dynamic";

export function EditorLoader() {
  const Editor = dynamic(() => import("./editor"), {
    ssr: false,
    loading: () => <p>Component loading...</p>,
  });
  return <Editor />;
}
