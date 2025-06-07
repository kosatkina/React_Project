export default function Tabs({children, buttons, ButtonsContainer = 'menu'}) {
    // Create a variable to use it as a custom component OR set directly as prop
    // Component identifier MUST start with a capital letter
    // const ButtonContainer = buttonsContainer;

    // return a fragment with a menu element <- Wrapper component
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}