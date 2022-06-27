import ContactoFooter from "../contactoFooter";
import imagenHome from "../../SELECCION DE FOTOS/eventosHome.png";
import logo from "../../SELECCION DE FOTOS/spanAeria.png";
import imagen2 from "../../SELECCION DE FOTOS/espacioAeria.png";
import imagen3 from "../../SELECCION DE FOTOS/casamientoAeria.png";
import imagen4 from "../../SELECCION DE FOTOS/fotoEventos1.png";
import imagen5 from "../../SELECCION DE FOTOS/fotoEventos2.png";
import img1x4 from "../../SELECCION DE FOTOS/foto1x4.png"
import img3x4 from "../../SELECCION DE FOTOS/foto2x4.png"
import img2x4 from "../../SELECCION DE FOTOS/foto3x4.png"
import img4x4 from "../../SELECCION DE FOTOS/foto4x4.png"
import './Eventos.css'
export default function Eventos() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imagenHome})`,
          backgroundSize: "cover",
          height: "55vh",
          display: "grid",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
        className='divEventosHome'
      >
        <h1 style={{ color: "white", fontWeight: "200",margin:"0" }}>
        SÓLO TENÉS QUE DISFRUTAR.
        </h1>
        <div style={{ display: "flex", alignItems: "baseline",alignContent:"center",flexDirection:"row" }}>
          <img className="spanAeria" style={{ height: "20px" }} src={logo} />
          <p style={{ color: "#C3D900", fontSize: "20px" }}>/eventos</p>
        </div>
      </div>
      <div
        className="eventosAbout"
        style={{
          backgroundColor: "white",
          height: "25vw",
          display: "grid",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <strong style={{ fontSize: "15px" }}>ABOUT US</strong>
        <p style={{ fontSize: "17px", marginTop: "2%" }}>
          AREIA es una empresa con{" "}
          <strong style={{ fontSize: "17px" }}>
            mas de 10 años de experiencia
          </strong>
          <br />
          en la organizacion de eventos tanto sociales como corporativos.
          <br />
          <br />
          Queremos que cada persona que nos visita <br /> se lleve de recuerdo
          una experiencia inolvidable.
          <br />
          <br />
          Trabajamos en cada detalle y con dedicacion para que tu evento sea un
          exito.
        </p>
      </div>
      <div className="nuestroEspacio">
        <div
          className="nuestroEspacio-text"
          style={{
            height: "100%",
            display: "grid",
            padding: "10%",
            paddingLeft: "12%",
            alignContent: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "15px", fontWeight: "500" }}>
            NUESTRO ESPACIO
          </h2>
          <h1 style={{ fontSize: "32px", fontWeight: "200" }}>
            CONTAMOS CON UN<br/> AMBIENTE ATRACTIVO <br /> Y NATURAL.
          </h1>
          <p style={{ fontSize: "15px", fontWeight: "200" }}>
            Las mas de 5 hectareas de espacio verde son ideales para
            desconectarse de la rutina y vivir <br /> una experiencia unica.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "200" }}>
            La versatilidad de nuestras instalaciones permite que nos podamos
            adaptar perfectamente al tamaño del evento a realizar.
          </p>
        </div>
        <img
          className="nuestroEspacio-img"
          src={imagen2}
          style={{
            height: "100%",
            width: "53%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div
        className="divCasamiento"
        style={{
          height: "42vh",
          margin: "9vh 10vw 9vh 46.5vw",
          alignItems: "center",
        }}
      >
        <img className="imgCasamiento" src={imagen3} />
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "2vw 12vh 4vw 15vh",
            display: "grid",
            alignContent: "center",
          }}
        >
          <h2 style={{ fontSize: "15px", fontWeight: "600" }}>UBICACION</h2>
          <h1 style={{ fontSize: "40px", fontWeight: "400" }}>
            AREIA SIEMPRE ESTUVO CERCA.
          </h1>
          <p style={{ fontSize: "18px", fontWeight: "400", color: "black" }}>
            A 35km de Capital Federal con facil y rapido acceso en una zona
            segura rodeada de barrios cerrados.
          </p>
          <a href="https://www.google.com/maps/place/AREIA/@-34.4241246,-58.7635257,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9f15237e7635:0x1c84373c9462bdd2!8m2!3d-34.424129!4d-58.761337?shorturl=1">
          <button id="bottone1">
            <strong style={{ fontWeight: "600" }}>VER MAPA</strong>
          </button>
          </a>
        </div>
      </div>
      <div className="divOrg">
        <div className="contt" style={{height:"100%",display:"grid",backgroundColor:"white",color:"black",width:"47vw",alignItems:"center",justifyItems:"center",padding:"3%",textAlign:"center"}}>
          <h1>
            TENEMOS UN EQUIPO QUE SE ENCARGA <br/> DE TODOS LOS ASPECTOS DE TU EVENTO.
          </h1>
          <img src={imagen4} style={{ height:"31vw",width:"58%",objectFit:"cover",borderRadius:"5%",margin:"10px"}} />
          <h1>LA ORGANIZACION, COORDINACION<br/> Y ASESORAMIENTO REQUERIDO.</h1>
          <p> Realizamos Eventos Sociales y Corporativos, sintiéndolos<br/> propio acompaniando al cliente en todos los pasos a dar.</p>
        </div>
        <img src={imagen5} className="contt2" style={{height:"100%",width:"53vw",objectFit:"cover"}}/>
      </div>
      <div className="ofrecemos" style={{display:"grid",textAlign:"center"}} >
        <h1>OFRECEMOS</h1>
        <p>Estacionamiento privado para mas de 500 autos <br/>Seguridad privada<br/>Catering<br/>Tecnica/Iluminacion & DJs<br/>Servicio de cocteleria<br/>Event Planner</p>
      </div>
      <div className="eventos4x4Cont" >
        <div className="fotos4x4"style={{width:"100%"}}>
          <img src={img1x4}/>
          <img src={img2x4}/>
          <img src={img3x4}/>
          <img src={img4x4}/>
        </div>
        <div style={{position:"relative", bottom:"24vw",width:"100%",display:"flex",justifyContent:"center"}}>
          <a href="mailto: eventos@AREIA.com.ar" className="eventosButton">
        <button id="bottone1" style={{borderRadius:"0px"}}>
            <h1 style={{ fontWeight: "200",fontSize:"25px" }}>EVENTOS@AREIA.COM.AR</h1>
          </button>
          </a>
          </div>
      </div>
      <ContactoFooter />
    </>
  );
}