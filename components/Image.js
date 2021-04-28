const Image = ({ src, width, isSquare }) => {
    
const height = isSquare ? width : "auto"
    return <img 
        src={src}
        style={{width, height}}
        />
}

    
export default Image


const funsctionOne = (arg1, arg2 ) => 'Funkce'

funsctionOne("afasdas", "asdasd")

const funsctionTwo = (arg1, arg2 ) => 'Funkce'

funsctionOne({ arg1: "abc", arg2: "def" })