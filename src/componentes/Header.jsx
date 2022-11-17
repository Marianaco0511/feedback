import propTypes  from "prop-types";

const Header = ({bgColor , color}) =>{

    return(
        <header style={{backgroundColor: bgColor,color: color}}>
            Encabezado
        </header>
    )
}


//valores por defecto para las prop suministradas
Header.defaultProps = {
    bgColor:'rgba(0,0,0,0.4)',
    color:'#ff6a95'
}

//Validar las props con PropTupes
Header.propTypes = {
    bgColor: propTypes.string.isRequired    ,
    color: propTypes.string
}

export default Header;