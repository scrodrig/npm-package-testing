import "./App.css";

import { ProductCard } from "scrodrig-product-card";
import { Product } from "scrodrig-product-card/dist/interfaces/interfaces";

const product:Product={
  id: '1',
  title: 'Cofee mug',
  img: './coffee-mug.png'
}

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductCard.Image
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductCard.Title title={"Coffee"} />
            <ProductCard.Buttons />
            {count}
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
