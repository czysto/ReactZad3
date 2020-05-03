const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 10, name: "Piotr B." },
      { id: 20, name: "Marcin W." },
      { id: 30, name: "Jan S." },
      { id: 40, name: "Batosz K." },
    ],
    value: "",
    index: null,
  };

  handleDelete = (name) => {
    let people = this.state.people.slice();

    people = people.filter((person) => name !== person.name);

    this.setState({
      people,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddPerson = () => {
    if (this.state.value === "") return alert("wpisz coś!");
    const people = this.state.people.concat(this.state.value);
    this.setState({
      people,
      value: "",
    });
    alert(
      `Osoba dodana. Aktualne osoby: ${people.map((people) => (
        <Person people={name} key={people.id} />
      ))}`
    );
  };

  render() {
    const people = this.state.people.map((person) => (
      <Person key={person.id} name={person.name} delete={this.handleDelete} />
    ));

    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddPerson}>Add person</button>
        <ul>{people}</ul>
      </>
    );
  }
}
ReactDOM.render(<List />, document.getElementById("root"));
