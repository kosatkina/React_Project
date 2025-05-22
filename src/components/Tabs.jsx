export default function Tabs({children, buttons, buttonsContainer}) {
    // Create a variable to use it as a custom component
    // MUST start with a capital letter
    const ButtonContainer = buttonsContainer;

    // return a fragment with a menu element <- Wrapper component
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
}