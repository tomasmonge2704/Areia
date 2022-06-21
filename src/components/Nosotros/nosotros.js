import Imagen1 from "../../SELECCION DE FOTOS/video1.png";
import Imagen2 from "../../SELECCION DE FOTOS/video2.png";
import Imagen3 from "../../SELECCION DE FOTOS/video3.png";
import Imagen4 from "../../SELECCION DE FOTOS/areia 13_11-060.png";
import Imagen5 from "../../SELECCION DE FOTOS/areia0412-29.png";
import Imagen6 from "../../SELECCION DE FOTOS/fotoCancha.png";
import Imagen7 from "../../SELECCION DE FOTOS/Areia editadas-45.jpg";
import Imagen8 from "../../SELECCION DE FOTOS/areia 13_11-043.jpg";
import Imagen9 from "../../SELECCION DE FOTOS/areia producto-3.jpg";
import Imagen10 from "../../SELECCION DE FOTOS/AREIA FECHA3-29.jpg";
import Imagen11 from "../../SELECCION DE FOTOS/areia1812-163.jpg";
import Imagen12 from "../../SELECCION DE FOTOS/areia producto-4.jpg";
import Imagen13 from "../../SELECCION DE FOTOS/Areia editadas-8.jpg";
import Imagen14 from "../../SELECCION DE FOTOS/areia 13_11-088.jpg";
import closeButton from "../../SELECCION DE FOTOS/closeButton.png";
import video1 from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import ContactoFooter from "../contactoFooter";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { BrowserView, MobileView, isIOS } from "react-device-detect";
export default function Nosotros() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  function unMute(e) {
    e.target.muted = false;
  }
  function Mute(e) {
    e.target.muted = true;
  }
  function play(e) {
    e.target.play();
    e.target.muted = false;
  }
  function stop(e) {
    e.target.pause();
    e.target.muted = true;
  }
  function closeAll() {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  }
  const handleClick1 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive1((current) => !current);
  };
  const handleClick2 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive2((current) => !current);
  };
  const handleClick3 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive3((current) => !current);
  };
  return (
    <>
      <div
        className={
          isActive1 || isActive2 || isActive3
            ? "closeButton-active"
            : "closeButton"
        }
        style={{ backgroundImage: `url(${closeButton})` }}
        onClick={closeAll}
      ></div>
      <BrowserView>
        <div className="homeVideos">
          <video
            className={isActive1 ? "activeVideo" : ""}
            src={video1}
            onMouseOver={unMute}
            onMouseLeave={Mute}
            onClick={handleClick1}
            autoPlay
            loop
            muted={isActive1 ? false : true}
          ></video>
          <video
            className={isActive2 ? "activeVideo" : ""}
            src={video2}
            onMouseOver={unMute}
            onMouseLeave={Mute}
            onClick={handleClick2}
            autoPlay
            loop
            muted={isActive2 ? false : true}
          ></video>
          <video
            className={isActive3 ? "activeVideo" : ""}
            src={video3}
            onMouseOver={unMute}
            onMouseLeave={Mute}
            onClick={handleClick3}
            autoPlay
            loop
            muted={isActive3 ? false : true}
          ></video>
          <div className="videoButtons">
            <a href="https://www.youtube.com/shorts/2pFB6DUgnKA">
              <button
                id="bottone1"
                className={isActive1 ? "videoButton1" : "displayNone"}
              >
                <strong style={{ fontWeight: "600" }}>Ir a YouTube</strong>
              </button>
            </a>
            <a href="https://www.youtube.com/shorts/3pfezF8Ejsw">
              <button
                id="bottone1"
                className={isActive2 ? "videoButton2" : "displayNone"}
              >
                <strong style={{ fontWeight: "600" }}>Ir a YouTube</strong>
              </button>
            </a>
            <a href="https://www.youtube.com/shorts/fAQLYpIoBB0">
              <button
                id="bottone1"
                className={isActive3 ? "videoButton3" : "displayNone"}
              >
                <strong style={{ fontWeight: "600" }}>Ir a YouTube</strong>
              </button>
            </a>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        {isIOS ? (
          <div className="homeVideos">
            <video
              src={video1}
              poster={Imagen1}
              onMouseOver={play}
              onMouseLeave={stop}
            ></video>
            <video
              src={video2}
              poster={Imagen2}
              onMouseOver={play}
              onMouseLeave={stop}
            ></video>
            <video
              src={video3}
              poster={Imagen3}
              onMouseOver={play}
              onMouseLeave={stop}
            ></video>
          </div>
        ) : (
          <div className="homeVideos">
            <video
              className={isActive1 ? "activeVideo" : ""}
              src={video1}
              poster={Imagen1}
              onMouseOver={play}
              onMouseLeave={stop}
              onClick={handleClick1}
              muted={isActive1 ? false : true}
            ></video>
            <video
              className={isActive2 ? "activeVideo" : ""}
              src={video2}
              poster={Imagen2}
              onMouseOver={play}
              onMouseLeave={stop}
              onClick={handleClick2}
              muted={isActive2 ? false : true}
            ></video>
            <video
              className={isActive3 ? "activeVideo" : ""}
              src={video3}
              poster={Imagen3}
              onMouseOver={play}
              onMouseLeave={stop}
              onClick={handleClick3}
              muted={isActive3 ? false : true}
            ></video>
          </div>
        )}
      </MobileView>
      <div
        className="nosotrosInfo"
        style={{ backgroundColor: "white", height: "18vw" }}
      >
        <p>
          <strong>AREIA</strong> es más que un torneo de fútbol.<br></br> Es una
          experiencia social y deportiva.
          <br />
          <br />
          <strong>PARA ENTENDERLA, HAY QUE VIVIRLA.</strong>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="contenedorTorneo"
      >
        <div
          className="imgTorneo"
          style={{
            zIndex: "10",
            width: "34vw",
            marginLeft: "10vw",
          }}
        >
          <img
            style={{ maxWidth: "100%", position: "relative", bottom: "2rem" }}
            src={Imagen4}
          />
          <img style={{ maxWidth: "100%", filter: "none" }} src={Imagen5} />
        </div>
        <div className="textTorneo">
          <h1
            style={{ color: "white", fontWeight: "200", paddingBottom: "2vh" }}
          >
            TORNEO
          </h1>
          <p style={{ color: "white", fontWeight: "200" }}>
            <strong style={{ color: "white", fontWeight: "500" }}>AREIA</strong>{" "}
            cuenta con una política de admisión
            <br />
            en base a un sistema de recomendaciones.
            <br />
            <br />
            Para ingesar al torneo es necesario recibir
            <br />
            la recomendación de dos capitanes.
            <br />
            <br />
            El acceso al predio es exclusivo para los <br />
            jugadores del torneo y sus invitados.
          </p>
        </div>
      </div>
      <div
        className="cont"
        style={{
          backgroundColor: "#f5ff35",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "400" }}>
          CALIDAD{" "}
          <strong style={{ fontSize: "38px" }}> ATENCIÓN AL CLIENTE </strong>{" "}
          SERVICIO
        </h1>
      </div>
      <div
        className="canchas"
        style={{
          backgroundImage: `url(${Imagen6})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="contenedor" style={{ height: "100%" }}>
          <h1
            className="titulo"
            style={{
              color: "white",
              fontWeight: "400",
              margin: "0",
              padding: "0",
              position: "relative",
              top: "16px",
            }}
          >
            5 HECTAREAS
          </h1>
          <div
            style={{
              backgroundColor: "white",
              width: "40%",
              display: "grid",
              placeContent: "space-evenly",
              paddingBottom: "5rem",
              height: "100%",
            }}
          >
            <h1>CANCHAS</h1>
            <p>
              -7 canchas de F7 Masculino
              <br />
              -2 canchas de F7 Femenino
              <br />
              -2 canchas de F6 Femenino (iluminadas)
              <br />
              -4 canchas de F5 Femenino (iluminadas)
            </p>
            <button id="bottone1">
              <strong>Ver mapa de canchas</strong>
            </button>
            <h1>PREDIO</h1>
            <p>
              -2 estacionamientos privados <br />
              -Vestuarios acondicionados
              <br />
              -Bar interno
              <br />
              -Bar Exterior + Sector Fuegos
              <br />
              -Sector lounge con + 50 livings y mesas
            </p>
          </div>
        </div>
      </div>
      <div
        className="contenedorWhite"
        style={{
          backgroundColor: "white",
          height: "10rem",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            paddingTop: "5%",
            color: "rgb(243 255 51)",
            fontWeight: "200",
          }}
        >
          GALERÍA
        </h1>
        <Carousel
          className="carouselDiv"
          variant="dark"
          style={{
            boxShadow: "16px 16px 32px #181818,-16px -16px 32px #202020",
            marginTop: "5%",
            filter: "drop-shadow(black 2px 4px 6px)",
          }}
        >
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen7}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen8}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen9}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen10}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen11}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen12}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen13}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                maxHeight: "90vh",
                filter: "drop-shadow(black 2px 4px 6px)",
              }}
              className="d-block w-100"
              src={Imagen14}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <ContactoFooter />
    </>
  );
}
