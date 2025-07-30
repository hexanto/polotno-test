import { observer } from "mobx-react-lite";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import data from "@/app/designs/d4.json";
import { useEffect } from "react";

export default function Editor() {
  const store = createStore({
    key: process.env.NEXT_PUBLIC_POLOTNO_KEY!,
    showCredit: false,
  });
  // store.setRole("admin");

  // const page = store.addPage();
  // store.loadJSON(JSON.parse(initialState));
  store.loadJSON(data);
  store.waitLoading().then(() => {
    store.activePage.addElement({
      resizable: false,
      type: "text",
      text: "stuff",
      fontSize: 50,
      width: 200,
      height: 100,
      x: 50,
      y: 50,
    });

    store.activePage.addElement({
      name: "svg",
      resizable: false,
      type: "svg",
      src: "https://ucarecdn.com/21e9b028-1982-434d-bbe7-5e57c005c459/mylogo.svg",
      width: 300,
      height: 298,
      x: 150,
      y: 150,
    });
  });

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

    function handleOptionToggle() {
      /*
      1. 
      2. remove element
      3. 
      */
      const el = store.getElementById("DESItR7m5m");
      if (!el) return;

      //Method1: Move element outside of bounds
      // const outside = store.width + 100;
      // if (el.x == outside) {
      //   el.set({ x: el.custom.old.x });
      // } else {
      //   el.set({ x: outside, custom: { old: { x: el.x } } });
      // }

      //Method2: Use opacity
      // el.set({
      //   opacity: el.opacity ? 0 : 1,
      //   selectable: el.selectable ? false : true, //only works if role is not admin
      // });

      //Method3: use visibility
      el.set({
        visible: el.visible ? false : true,
      });
    }

    function handleSvgColorChange() {
      const elSvg = store.activePage.children.find((x) => x.name == "svg");
      elSvg.replaceColor("#000000", "#FF00FF");
    }

    function handleColorChange() {
      const elements = store.activePage.children.filter(
        (x) => x.custom?.color == "fill-color-1"
      );
      elements.forEach((x) => {
        x.set({ fill: "red" });
      });
    }

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
          <div>
            <input
              type="text"
              value={elLogo.src}
              onChange={(e) => elLogo.set({ src: e.target.value })}
            />
            <input
              type="text"
              value={elLogo.width}
              onChange={(e) => elLogo.set({ width: Number(e.target.value) })}
              size={5}
            />
            <input
              type="text"
              value={elLogo.height}
              onChange={(e) => elLogo.set({ height: Number(e.target.value) })}
              size={5}
            />
            <input
              type="text"
              value={elLogo.y}
              onChange={(e) => elLogo.set({ y: Number(e.target.value) })}
              size={5}
            />
          </div>
        )}
        <button onClick={handleColorChange}>Color</button>
        <button onClick={handleSvgColorChange}>Svg Color</button>
        <button onClick={handleOptionToggle}>Toggle</button>
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
