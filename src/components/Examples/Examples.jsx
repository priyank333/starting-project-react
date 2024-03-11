import { useState } from "react";
import TabButton from "../../components/TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  let tabContent =
    selectedTopic != null ? (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ) : (
      <p>Please select a topic</p>
    );

  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
    console.log(selectButton);
  }
  return (
    <main>
      <Section id="examples">
        <h2>Examples</h2>
        <Tabs
          ButtonsContainer="menu"
          buttons={
            <>
              <TabButton
                isActive={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isActive={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isActive={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isActive={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
          children={tabContent}
        />
      </Section>
    </main>
  );
}
