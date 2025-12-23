import "./index.css";

const ContactsList = ({ contacts }) => {
  return (
    <ul className="contacts-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-item">
          <div>
            <p>
              <strong>{contact.name}</strong>
            </p>
            <p>📞{contact.phone}</p>
          </div>

          <button className={contact.isFavorite ? "favorite" : ""}>
            {contact.isFavorite ? "⭐ Favorite" : "Add Favorite"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
