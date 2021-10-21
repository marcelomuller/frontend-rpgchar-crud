import React from 'react';
import Axios from 'axios';

const System = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [race, setRace] = React.useState('');
  const [job, setJob] = React.useState('');
  const [weapon, setWeapon] = React.useState('');
  const nameRef = React.useRef();
  const ageRef = React.useRef();
  const raceRef = React.useRef();
  const jobRef = React.useRef();
  const weaponRef = React.useRef();

  const addChar = () => {
    if (
      !name ||
      !age ||
      !race ||
      !job ||
      !weapon ||
      /^\s*$/.test(name, age, race, job, weapon)
    ) {
      alert('Insert valid data.');
      return;
    }

    Axios.post('http://localhost:3001/insert', {
      name: name,
      age: age,
      race: race,
      job: job,
      weapon: weapon,
    });
    alert('Character created successfully!');
    nameRef.current.value = '';
    ageRef.current.value = '';
    raceRef.current.value = '';
    jobRef.current.value = '';
    weaponRef.current.value = '';
  };

  return (
    <div className="form">
      <h1>RPG Char Creator</h1>
      <form className="input-wrapper">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          ref={nameRef}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          ref={ageRef}
          onChange={({ target }) => setAge(target.value)}
          required
        />
        <label htmlFor="race">Race:</label>
        <input
          id="race"
          type="text"
          ref={raceRef}
          onChange={({ target }) => setRace(target.value)}
          required
        />
        <label htmlFor="job">Job:</label>
        <input
          id="job"
          type="text"
          ref={jobRef}
          onChange={({ target }) => setJob(target.value)}
          required
        />
        <label htmlFor="weapon">Weapon:</label>
        <input
          id="weapon"
          type="text"
          ref={weaponRef}
          onChange={({ target }) => setWeapon(target.value)}
          required
        />
      </form>
      <button className="btn" onClick={addChar}>
        Create
      </button>
    </div>
  );
};

export default System;
