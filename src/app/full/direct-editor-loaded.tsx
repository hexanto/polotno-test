import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import data from "@/app/designs/d3.json";

export default function DirectEditorLoaded() {
  const store = createStore({
    key: process.env.NEXT_PUBLIC_POLOTNO_KEY!,
    showCredit: false,
  });
  store.setRole("admin");

  // const page = store.addPage();
  // store.loadJSON(JSON.parse(initialState));
  store.loadJSON(data);
  store.waitLoading().then(() =>
    store.activePage.addElement({
      resizable: false,
      type: "text",
      text: "stuff",
      fontSize: 50,
      width: 200,
      height: 100,
      x: 50,
      y: 50,
    })
  );

  return (
    <div style={{ width: "500px", height: "500px", display: "block" }}>
      <Workspace
        store={store}
        pageControlsEnabled={true}
        backgroundColor="#00FF00"
        paddingX={0}
        paddingY={0}
        renderOnlyActivePage={true}
      />
    </div>
  );
}
