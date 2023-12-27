import { useCities } from "../../Contexts/CityProvider";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
function CountryList() {
  const { cities, isLoading } = useCities();
  // console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length) {
    return <Message message="Add your first city" />;
  }
  const countries = cities.reduce((arr, city) => {
    // console.log(city);
    // console.log(arr);
    if (!arr.map((el) => el.emoji).includes(city.emoji))
      return [...arr, { emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  );
}

export default CountryList;
