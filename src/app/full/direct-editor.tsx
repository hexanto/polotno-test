"use client";

import dynamic from "next/dynamic";

export function DirectEditor() {
  const DirectEditorLoaded = dynamic(() => import("./direct-editor-loaded"), {
    ssr: false,
    loading: () => <p>Component loading...</p>,
  });
  return <DirectEditorLoaded />;
}
