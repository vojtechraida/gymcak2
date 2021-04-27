  
const button = ({children, color, onClick}) => {
    if(!children) return <button>Prázdné tlačítko</button>

    return <button style={{background: color}} onClick={onClick}>{children}</button>
}

export const greeting = (name) => "Hello " + name;

export const superGreeting = ({name})=>"Hello there " + name;

export default button;