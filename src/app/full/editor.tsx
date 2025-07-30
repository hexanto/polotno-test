import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { SidePanel } from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { PagesTimeline } from "polotno/pages-timeline";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import data from "@/app/designs/d3.json";

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

  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@blueprintjs/core@5/lib/css/blueprint.css"
      />
      <SidePanelWrap>
        <SidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
        <PagesTimeline store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
}
