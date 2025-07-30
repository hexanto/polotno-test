import { Suspense } from "react";
import { DirectEditor } from "./direct-editor";

export default function Home() {
  return (
    <Suspense fallback="loading">
      <DirectEditor />
    </Suspense>
  );
}
