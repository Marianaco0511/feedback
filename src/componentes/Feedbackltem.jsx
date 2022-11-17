import { useState } from "react"

const FeedbackItem = () =>{

    //Estados: presisten informacion a traves del ciclo de vida
    // de un unico componente
    
    //estados iniciales
    const [rating, setRating] = useState(2)
    const [text, setText] = useState("Mejorar Curso, mejores recursos")

    const cambiarNota=()=>{
        //Cambiar estado a rating
        //parametro para el valor anterior 
        setRating((prev)=>{
            return prev + 1
        })
    }
    const addNota=()=>{
        //Cambiar estado a rating
        //parametro para el valor anterior 
        setRating((prev)=>{
            return prev + 1
        })
    }

    const restNota=()=>{
        //Cambiar estado a rating
        //parametro para el valor anterior 
        setRating((prev)=>{
            return prev - 1
        })
    }


    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { text }
            </div>
            <button className="btn btn-primary" onClick={ cambiarNota}>
                cambiar nota
            </button>
            <button className="btn btn-primary"onClick={ addNota}>
                sumar nota
            </button>
            <button className="btn btn-primary"onClick={ restNota}>
                restar nota
            </button>
        </div>
    )
}

export default FeedbackItem