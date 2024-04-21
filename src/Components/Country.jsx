import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { data } from "../data";
const Country = () => {
  const code = useParams();
  const country = data.find((item) => item.alpha3Code === code.id);
  const lang = country.languages.map((el) => el.name + ", ");
  let border;
  if (country.borders !== undefined) {
    border = country.borders.map((el, idx) => {
      // console.log(el.props.children);
      // console.log(el);
      return (
        <Link to={`/country/${el}`} key={idx}>
          <button>{el}</button>
        </Link>
      );
    });
  }

  // console.log(border);

  // console.log(country.borders);
  return (
    <>
      <Nav />
      <Link to="/">
        <button className="wbutton">
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          Back
        </button>
      </Link>
      {country ? (
        <div className="details">
          <div className="left">
            <img src={country.flag} alt="Img Country" />
          </div>
          <div className="right">
            <h1>{country.name}</h1>
            <div className="main">
              <div>
                <p>
                  Native Name: <span>{country.nativeName}</span>
                </p>
                <p>
                  Population: <span>{country.population}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </p>
                <p>
                  Currencies: <span>{country.currencies[0].name}</span>
                </p>
                <p>
                  Languages: <span>{lang}</span>
                </p>
              </div>
            </div>
            <div className="border">
              {country.borders === undefined ? (
                <h4></h4>
              ) : (
                <h4>Border Countries: </h4>
              )}
              <div style={{ width: "70%" }}>{border}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Country;
