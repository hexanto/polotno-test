import { Suspense } from "react";
import { EditorLoader } from "./editor-loader";

export default function Home() {
  return (
    <Suspense fallback="loading">
      <EditorLoader />
    </Suspense>
  );
}
