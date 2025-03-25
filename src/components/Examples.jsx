// React Hook
import { useState } from 'react';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from "../data.js";



export default function Examples() {
    // Call react hooks only INSIDE of Coponent function & on TOP-level
  // Array produced & returned by React's useState() contains exactly TWO ELEMENTS
  // Use array destructuring to store those two elements we pull from the array
  // const [counter, setCounter] = useState(0);
  // counter: current state value
  // setCounter: state updating function
  // 0: initial state value
  
    const [selectedTopic, setSelectedTopic] = useState();  //initial value/state

    function handleSelect(selectedBtn) {
        // selectedBtn => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedBtn);
    }

    // Alternatively, use variable for rendering content conditionally - jxs code looks leaner
    // let tabContent = <p>Please select a topic.</p>;
    // if (selectedTopic) {
    // tabContent = (
            // <div id="tab_content">
            //   <h3>{EXAMPLES[selectedTopic].title}</h3>
            //   <p>{EXAMPLES[selectedTopic].description}</p>
            //   <pre>
            //     <code>
            //     {EXAMPLES[selectedTopic].code}
            //     </code>
            //   </pre>
            // </div>
        // );
    //}
    // then,in return: 
    //          </menu>
    //          {tabContent}  <- below menu
    //        </section>
        
    return (
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} 
                      onSelect={function() {handleSelect('components')}}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
                      onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
                      onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
                      onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
          {/*Conditional Output of content - if... elese...*/}
          {!selectedTopic ? <p>Please select a topic.</p> : null} 
          {/*same as: {!selectedTopic && <p>Please select a topic.</p> } */}
          {selectedTopic ? (
            <div id="tab_content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          ) : null} 
          {/*same as: {selectedTopic && <div>....</div> } */}
        </section>
    );
}