import Home from "./pages/Home/Home";
import styles from './App.module.css'; 

const lorem =
  "Product Description";

const data = [
  {
    id: 1,
    title: "Countdown Chicken Thighs Skinless Boneless Medium Pk",
    price: "14.9"
  },
  {
    id: 2,
    title: "Countdown Beef Frying Nz Scotch Fillet Small Pk",
    price: "27.9"
  },
  {
    id: 3,
    title: "Fresh Produce Oranges Navel Imported",
    price: "4"
  },
  {
    id: 4,
    title: "Fresh Produce Pumpkin Crown Whole",
    price: "3"
  },
  {
    id: 5,
    title: "Sanitarium So Good Soy Milk Regular Long Life",
    price: "3"
  },
  {
    id: 6,
    title: "Coca Cola Zero Soft Drink",
    price: "3.8"
  },
  {
    id: 7,
    title: "Kelloggs Nutrigrain Cereal ",
    price: "5"
  },
  {
    id: 8,
    title: "Griffins Toffee Pops Chocolate Biscuits Original",
    price: "3.7"
  },
  {
    id: 9,
    title: "Copper Kettle Potato Chips Salt & Vinegar",
    price: "3.79"
  },
  {
    id: 10,
    title: "Fresh Produce The Odd Bunch Apples ",
    price: "2"
  },
  {
    id: 11,
    title: "Cotton Softs Toilet Paper 12Pk 3 Ply Posh",
    price: "5"
  },
  {
    id: 12,
    title: "Fresh Produce Potatoes Perlas",
    price: "5"
  },
  {
    id: 13,
    title: "Heineken Lager",
    price: "40"
  },
  {
    id: 14,
    title: "Fresh Produce Leader Brand Salad Crispy",
    price: "3.5"
  },
  {
    id: 15,
    title: "Alpine Butter ",
    price: "5"
  }
];

function App() {
  return (
    <div className={styles.App}>
      <Home boxData={data} />
    </div>
  );
}

export default App;
