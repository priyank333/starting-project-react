import {useState} from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import TabButton from "./components/TabButton/TabButton";
import "./index.css";
import coreConcept from "./components/CoreConcept/CoreConcept";

function App() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    let tabContent = (selectedTopic != null ? <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
    </div> : <p>Please select a topic</p>)

    function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
        console.log(selectButton)
    }

    return (<div>
        <Header/>
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map(coreConcept => {
                        return (<CoreConcept key={coreConcept.title} {...coreConcept}/>);
                    })}
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton isActive={selectedTopic === "components"}
                               onClickHandle={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isActive={selectedTopic === "jsx"}
                               onClickHandle={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isActive={selectedTopic === "props"}
                               onClickHandle={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isActive={selectedTopic === "state"}
                               onClickHandle={() => handleSelect("state")}>State</TabButton>
                </menu>
                {tabContent}
            </section>
        </main>
    </div>);
}

export default App;
