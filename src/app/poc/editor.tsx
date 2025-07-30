import { observer } from "mobx-react-lite";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import data from "@/app/designs/d4.json";
import { useEffect, useState } from "react";

export default function Editor() {
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

  // unsubscribe function
  // const off = store.on("change", (e: any) => {
  //   console.log("something changed", e);
  // });

  // useEffect(() => {
  //   // unstable_setTextOverflow("change-font-size");
  //   const el = store.activePage.children.find((x) => x.name == "team-name");
  //   el.set({ text: teamName });
  // }, [teamName]);

  const Tooltip = () => {
    return <div>Tooltip</div>;
  };

  const EditControls = observer(() => {
    const elText = store.activePage.children.find((x) => x.name == "team-name");
    const elLogo = store.activePage.children.find((x) => x.name == "logo");
    return (
      <div>
        {elText && (
          <input
            type="text"
            value={elText.text}
            onChange={(e) => elText.set({ text: e.target.value })}
          />
        )}
        {elLogo && (
          <input
            type="text"
            value={elLogo.src}
            onChange={(e) => elLogo.set({ src: e.target.value })}
          />
        )}
      </div>
    );
  });

  useEffect(() => {
    store.setScale(store.scaleToFit);
  }, []);

  return (
    <div>
      <div>
        <EditControls />
      </div>
      <div style={{ width: "500px", height: "500px", display: "block" }}>
        <Workspace
          store={store}
          pageControlsEnabled={true}
          backgroundColor="#00FF00"
          paddingX={0}
          paddingY={0}
          renderOnlyActivePage={true}
          components={{
            Tooltip: () => null,
          }}
        />
      </div>
    </div>
  );
}
