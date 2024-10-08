import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
  const { store, actions } = useContext(Context);
  const { elementType, uid } = useParams();
  const [detailsCard, setDetailsCard] = useState();
  const [image, setImage] = useState(
    `https://starwars-visualguide.com/assets/img/${elementType}/${uid}.jpg`
  );

  useEffect(() => {
    actions
      .getInfoDetails(`https://www.swapi.tech/api/${elementType}/${uid}`)
      .then((responseDetails) => {
        setDetailsCard(responseDetails)
      setImage(`https://starwars-visualguide.com/assets/img/${elementType}/${uid}.jpg`)
      });
  }, [elementType, uid]);

  if (elementType == "planets") {
    return (
      <div className="container">
        <div className="d-flex">
          <img className="img-fluid" src={image ? image : "Cargando.."} />
          <div className="p-5 text-center">
            <h3>{detailsCard ? detailsCard.name : "Cargando"}</h3>
            <p>
              Phasellus ac arcu vehicula, scelerisque eros vel, tempor purus.
              Phasellus rutrum vel ipsum ut tempor. Sed consequat leo sed congue
              imperdiet. Nulla bibendum arcu lorem, ac commodo dui ultricies
              quis. Proin mollis nulla ac facilisis varius. Morbi nisi arcu,
              tempor id est quis, viverra maximus erat. Sed leo risus, porta at
              lacinia vel, volutpat ac enim. In vel viverra elit, a condimentum
              arcu. Pellentesque sit amet enim id elit pellentesque accumsan nec
              eu tellus.
            </p>
          </div>
        </div>
        <hr className="mt-5" style={{ color: "red" }} />
        <div className="my-5 row" style={{ color: "red" }}>
          <div className="col-3">
            <p>{detailsCard ? "Diameter" : ""}</p>
            <p>{detailsCard ? detailsCard.diameter : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Climate" : ""}</p>
            <p>{detailsCard ? detailsCard.climate : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Terrain" : ""}</p>
            <p>{detailsCard ? detailsCard.terrain : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Population" : ""}</p>
            <p>{detailsCard ? detailsCard.population : ""}</p>
          </div>
        </div>
        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    );
  }

  if (elementType == "people") {
    return (
      <div className="container">
        <div className="d-flex">
          <img
            className="img-fluid"
            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
          />
          <div className="p-5 text-center">
            <h3>{detailsCard ? detailsCard.name : "Cargando"}</h3>
            <p>
              Phasellus ac arcu vehicula, scelerisque eros vel, tempor purus.
              Phasellus rutrum vel ipsum ut tempor. Sed consequat leo sed congue
              imperdiet. Nulla bibendum arcu lorem, ac commodo dui ultricies
              quis. Proin mollis nulla ac facilisis varius. Morbi nisi arcu,
              tempor id est quis, viverra maximus erat. Sed leo risus, porta at
              lacinia vel, volutpat ac enim. In vel viverra elit, a condimentum
              arcu. Pellentesque sit amet enim id elit pellentesque accumsan nec
              eu tellus.
            </p>
          </div>
        </div>
        <hr className="mt-5" style={{ color: "red" }} />
        <div className="my-5 row" style={{ color: "red" }}>
          <div className="col-3">
            <p>{detailsCard ? "Height" : ""}</p>
            <p>{detailsCard ? detailsCard.height : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Birth Year" : ""}</p>
            <p>{detailsCard ? detailsCard.birth_year : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Hair Color" : ""}</p>
            <p>{detailsCard ? detailsCard.hair_color : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Eye Color" : ""}</p>
            <p>{detailsCard ? detailsCard.eye_color : ""}</p>
          </div>
        </div>
        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    );
  }

  if (elementType == "vehicles") {
    return (
      <div className="container">
        <div className="d-flex">
          <img className="img-fluid" src={image ? image : "Cargando.."} />
          <div className="p-5 text-center">
            <h3>{detailsCard ? detailsCard.name : "Cargando"}</h3>
            <p>
              Phasellus ac arcu vehicula, scelerisque eros vel, tempor purus.
              Phasellus rutrum vel ipsum ut tempor. Sed consequat leo sed congue
              imperdiet. Nulla bibendum arcu lorem, ac commodo dui ultricies
              quis. Proin mollis nulla ac facilisis varius. Morbi nisi arcu,
              tempor id est quis, viverra maximus erat. Sed leo risus, porta at
              lacinia vel, volutpat ac enim. In vel viverra elit, a condimentum
              arcu. Pellentesque sit amet enim id elit pellentesque accumsan nec
              eu tellus.
            </p>
          </div>
        </div>
        <hr className="mt-5" style={{ color: "red" }} />
        <div className="my-5 row" style={{ color: "red" }}>
          <div className="col-3">
            <p>{detailsCard ? "Model" : ""}</p>
            <p>{detailsCard ? detailsCard.model : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Manufacturer" : ""}</p>
            <p>{detailsCard ? detailsCard.manufacturer : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Passengers" : ""}</p>
            <p>{detailsCard ? detailsCard.passengers : ""}</p>
          </div>
          <div className="col-3">
            <p>{detailsCard ? "Length" : ""}</p>
            <p>{detailsCard ? detailsCard.length : ""}</p>
          </div>
        </div>
        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    );
  }
};