import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  //Loading ou home page
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <h1>Home</h1>
      <br />
      <section className="all_card">
        {data.offers.map((offer) => {
          // Avatar
          return (
            <Link key={offer._id} to={`/offers/${offer._id}`}>
              <article>
                <section className="card">
                  <div className="avatar">
                    {offer.owner.account.avatar && (
                      <img
                        src={offer.owner.account.avatar?.secure_url}
                        alt={offer.owner.account.username}
                      />
                    )}
                    <br />
                    <span>{offer.owner.account.username}</span>
                  </div>
                  <img
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <p>{offer.product_price} €</p>
                  <p>{offer.product_details[1].TAILLE}</p>
                  <p>{offer.product_details[0].MARQUE}</p>
                </section>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
};
export default Home;
