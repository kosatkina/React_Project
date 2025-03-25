export default function TabButton({children, onSelect, isSelected}) {
  
    return (
        <li>
            {/*Add prop 'onSelect' to output content dynamically */}
            {/*Add prop 'isSelected' to set styling dynamically */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
        );
}
