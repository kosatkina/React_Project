export default function TabButton({children, isSelected, ...props}) {
  
    return (
        <li>
            {/*Add prop 'onSelect' to output content dynamically */}
            {/*Add prop 'isSelected' to set styling dynamically */}
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li>
        );
}
