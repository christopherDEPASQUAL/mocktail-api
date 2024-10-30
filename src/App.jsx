import { useState, useEffect } from "react";
import "./mocktail.css";

const Mocktail = () => {
  const [mocktail, setMocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMocktail = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        const data = await response.json();
        
        if (data.drinks) {
          const randomMocktail = data.drinks[Math.floor(Math.random() * data.drinks.length)];
          setMocktail(randomMocktail);
        }

      } catch (error) {
        console.log('Erreur lors de la récupération du Mocktail', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMocktail();
  }, []);

const getDayOfWeek = () => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const currentDay = new Date().getDay();
    return days[currentDay];
  };


  return (
    <>
      <div>
      <h2>Mocktail du {getDayOfWeek()}</h2>
        
        {loading ? (
          <p>Chargement de la  en cours...</p>

        ) : mocktail ? (
          <div className="card">
            <h2>Today's cocktail is : {mocktail.strDrink}</h2>
            <img src={mocktail.strDrinkThumb} alt={mocktail.strDrink} />
          </div>
        ) : (
          <p>Chargement du mocktail en cours...</p>
        )}

        
      </div>
    </>
  );
};

export default Mocktail;
