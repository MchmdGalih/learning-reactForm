import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingForm from "./ShoppingForm";
import ValidateShoppingForm from "./ValidateShoppingForm";
function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, product: "milk", quantity: 2 },
    { id: 2, product: "tommato", quantity: 3 },
  ]);

  const addItem = (newItem) => {
    if (!newItem.product) return;
    setItems((prevItems) => [...prevItems, { ...newItem, id: uuidv4() }]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
      {/* <ShoppingForm onAddItem={addItem} /> */}
      <ValidateShoppingForm onAddItem={addItem} />
    </div>
  );
}

export default ShoppingList;
