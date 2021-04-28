  
const Button = ({children, color, onClick}) => {
    if(!children) return <button>Prázdné tlačítko</button>

    return <Button style={{background: color}} onClick={onClick}>{children}</Button>
}

export const greeting = (name) => "Hello " + name;

export const superGreeting = ({name})=>"Hello there " + name;

export default Button;