import { Link } from "react-router-dom";

function Countries({ dataList }) {
  const data = dataList.map(
    ({ flag, name, population, region, capital, alpha3Code }, idx) => {
      return (
        <Link to={`/country/${alpha3Code}`} key={idx} className="item">
          <img src={flag} alt="" />
          <div className="contant">
            <h3>{name}</h3>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </Link>
      );
    }
  );

  return <div className="list p-20">{data}</div>;
}
export default Countries;
