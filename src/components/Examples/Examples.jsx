import { useState } from "react";
import TabButton from "../../components/TabButton/TabButton";
import { EXAMPLES } from "../../data";
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
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isActive={selectedTopic === "components"}
            onClickHandle={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isActive={selectedTopic === "jsx"}
            onClickHandle={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isActive={selectedTopic === "props"}
            onClickHandle={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isActive={selectedTopic === "state"}
            onClickHandle={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </main>
  );
}
