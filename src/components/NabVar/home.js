import Imagen1 from "../../SELECCION DE FOTOS/arei-66.jpg"
import Imagen2 from "../../SELECCION DE FOTOS/areia0412-10.jpg"
export default function Home (){
    return(
        <div className="home" style={{backgroundImage:`url(${Imagen2}), url(${Imagen1})`,backgroundRepeat:"no-repeat, no-repeat",backgroundSize:"50% 100%,50% 100%", backgroundPosition:"left, right"}}>
            
            <div>
                <button data-aos="fade-up" id="bottone1"><strong>INSCRIBITE</strong><p>en un click!</p>
                </button>
                </div>

        </div>
    )
}