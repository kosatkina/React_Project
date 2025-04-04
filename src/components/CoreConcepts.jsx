import CoreConcept from "./CoreConcept.jsx";
import {CORE_CONCEPTS} from "../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
                  <h2>Core Concepts</h2>
                  
                  <ul>
                    {/*For Outputing List ofData DYNAMICALLY as an array of JSX elements*/}
                    {/*Transfore array of objects into array of JSX elements (JSX code*/}
                    {/*Add 'key' prop as a unique identifier of data item listed*/}
                    {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
                    
                    {/* OLD - manual method
                    <CoreConcept 
                      title={CORE_CONCEPTS[0].title}
                      description={CORE_CONCEPTS[0].description}
                      image={CORE_CONCEPTS[0].image}
                    />
                    <CoreConcept {...CORE_CONCEPTS[1]}/>
                    <CoreConcept {...CORE_CONCEPTS[2]}/>
                    <CoreConcept {...CORE_CONCEPTS[3]}/> */}
                  </ul>
                </section>
    );
}