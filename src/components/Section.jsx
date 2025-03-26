// Using forwarding props (...props) which allows to define more props as needed
// Rest property - grouping all object properties into a  new object

export default function Section({title, children, ...props}) {
    return (
        // ... <- spread operator
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}