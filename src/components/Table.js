import React from 'react';
import Axios from 'axios';

const Table = () => {
  const [charList, setCharList] = React.useState([]);

  React.useEffect(() => {
    const getCharList = async () => {
      const response = await Axios.get('https://mern-rpgchar.herokuapp.com/read');
      setCharList(response.data);
    };
    getCharList();
  }, []);

  const updateValues = async (id) => {
    const newName = prompt('Enter new name:');
    const newAge = prompt('Enter new age:');
    const newRace = prompt('Enter new race:');
    const newJob = prompt('Enter new job:');
    const newWeapon = prompt('Enter new weapon:');

    if (
      !newName ||
      !newAge ||
      !newRace ||
      !newJob ||
      !newWeapon ||
      /^\s*$/.test(newName, newAge, newRace, newJob, newWeapon)
    ) {
      alert('Invalid data.');
      return;
    }

    await Axios.put('https://mern-rpgchar.herokuapp.com/update', {
      id: id,
      newName: newName,
      newAge: newAge,
      newRace: newRace,
      newJob: newJob,
      newWeapon: newWeapon,
    });

    setCharList(
      charList.map((char) => {
        return char._id === id
          ? {
              id: id,
              name: newName,
              age: newAge,
              race: newRace,
              job: newJob,
              weapon: newWeapon,
            }
          : char;
      })
    );
  };

  const deleteChar = async (id) => {
    await Axios.delete(`https://mern-rpgchar.herokuapp.com/delete/${id}`);
    setCharList(charList.filter((char) => char._id !== id));
  };

  return (
    <div className="char-list">
      <h1>Char List</h1>
      {charList.map((char, index) => (
        <div className="char" key={index}>
          <h3>
            Name: <span>{char.name}</span>
          </h3>
          <h4>
            Age: <span>{char.age}</span>
          </h4>
          <h4>
            Race: <span>{char.race}</span>
          </h4>
          <h4>
            Job: <span>{char.job}</span>
          </h4>
          <h4>
            Weapon: <span>{char.weapon}</span>
          </h4>
          <div key={index} className="char-btns">
            <button onClick={() => updateValues(char._id)}>Update</button>
            <button onClick={() => deleteChar(char._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
