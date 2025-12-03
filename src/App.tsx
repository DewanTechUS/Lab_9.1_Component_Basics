import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

const App = () => {

  const users = [
    {
      id: "1",
      name: "Dewan Mahmud",
      email: "rockyit10@gmail.com",
      role: "Software Engineer Student of Per Scholas"
    },
    {
      id: "2",
      name: "Tishana Trainor",
      email: "tishana@test.com",
      role: "Teacher"
    },
    {
      id: "3",
      name: "Bryan Santos",
      email: "bryan@test.com",
      role: "Teacher"
    }
  ];

  const products = [
    {
      name: "Headphones",
      price: 199.99,
      description: "High quality wireless headphones",
      inStock: true
    },
    {
      name: "Keyboard",
      price: 59.99,
      description: "Mechanical keyboard with RGB lighting",
      inStock: false
    },
    {
      name: "Monitor",
      price: 299.99,
      description: "27-inch 144Hz gaming monitor",
      inStock: true
    }
  ];

  return (
    <div className="p-6 space-y-6">
      
      <AlertBox type="success" message="This is a success message" />
      <AlertBox type="error" message="This is an error message" />
      <AlertBox type="warning" message="This is a warning message" />
      <AlertBox type="info" message="This is an info message" />

      {/* multiple users */}
      {users.map((user) => (
        <UserProfileCard key={user.id} user={user} />
      ))}

      {/* multiple products */}
      {products.map((product, index) => (
        <ProductDisplay key={index} product={product} />
      ))}

    </div>
  );
};

export default App;
