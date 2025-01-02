
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/Searchbox/SearchBox";
import ContactForm from "./components/Contactform/ContactForm";

function App() {

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
        />
        <SearchBox
        />
        <ContactList
        />
      </div>
    </>
  );
}

export default App;
