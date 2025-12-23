import "./App.css";
import ContactsList from "./components/ContactsList";

const initialList = [
  {
    id: 0,
    name: "Police",
    phone: "100",
  },
  {
    id: 1,
    name: "Ambulance",
    phone: "108",
  },
  {
    id: 2,
    name: "Fire Engine",
    phone: "101",
  },
];

const App = () => {
  // Add Contact

  // Toggle Favorite

  return (
    <div className="app-container">
      <h1>Favorite Contacts Manager</h1>

      {/* Inputs */}
      <div className="input-container">
        <input type="text" placeholder="Enter Name" />

        <input type="text" placeholder="Enter Phone Number" />

        <button>Add Contact</button>
      </div>

      <ContactsList contacts={initialList} />
    </div>
  );
};

export default App;
