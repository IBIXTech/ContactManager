import { useState } from "react";

import { v4 as uuid } from "uuid";

import "./App.css";
import ContactsList from "./components/ContactsList";

const initialList = [
  {
    id: uuid(),
    name: "Police",
    phone: "100",
  },
  {
    id: uuid(),
    name: "Ambulance",
    phone: "108",
  },
  {
    id: uuid(),
    name: "Fire Engine",
    phone: "101",
  },
];

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState(initialList);

  // Add Contact
  const addContact = () => {
    if (name === "" || phone === "") {
      return alert("All fields are required.");
    }

    const newContact = {
      id: uuid(),
      name,
      phone,
      isFavorite: false,
    };

    setContacts([...contacts, newContact]);
    setName("");
    setPhone("");
  };

  // Toggle Favorite
  const toggleFavorite = (id) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id
        ? { ...contact, isFavorite: !contact.isFavorite }
        : contact
    );

    setContacts(updatedContacts);
  };

  console.log(contacts);

  return (
    <div className="app-container">
      <h1>Favorite Contacts Manager</h1>

      {/* Inputs */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={addContact}>Add Contact</button>
      </div>

      <ContactsList contacts={contacts} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;
