import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newMeals = [];
      const res = await fetch(
        `https://react-burger-builder-a797e-default-rtdb.firebaseio.com/.json`
      );

      if (!res.ok) return;

      const data = await res.json();

      for (let key in data) {
        newMeals.push(data[key]);
      }

      setMeals(newMeals);
    };
    fetchData();
  }, []);

  let mealsList;

  if (meals.length !== 0) {
    mealsList = meals.map((meal) => {
      return (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      );
    });
  } else mealsList = 'Loading';

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
