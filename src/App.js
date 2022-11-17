import Header from "./componentes/Header";
import FeedbackItem from "./componentes/Feedbackltem";

    //objeto de estilos:
    const HeaderStyles ={
        backgroundColor: '#ed5bad',
        color:'red'
    }

function App(){
    return(
        <div className="container">
            { /* props: atributos de etiqueta de un componente react*/ }
            <Header     
                bgColor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color}
            />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
        </div>
        
    )
}


export default App;