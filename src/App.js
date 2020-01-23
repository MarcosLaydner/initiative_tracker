import React, {useState} from 'react';
import './App.css'

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState('');
  const [idList, setIdList] = useState([]);  

  function RemoveCharacter (id) {
    const arrayCopy = characters.filter((row) => row.id !== id);
    setCharacters(arrayCopy);
  }
  
  function handleAdd () {
    setCharacters([...characters, newCharacter])
    setNewCharacter({name: '', init: '', ac: '', id: generateId()})
  }

  function SortCharactersByInit (characters) {
    const arrayCopy = characters.slice(0);
    arrayCopy.sort((a,b) => b.init - a.init);
    setCharacters(arrayCopy)
  }

  function generateId() {
    let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)

    while (idList.includes(id)) {
      id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    }

    idList.push(id)
    setIdList(idList)
    return id;
  }

  return (
    <body>
      <table>

        <thead>
          <tr className='header'>
            <th>Name</th>
            <th>Init</th>
            <th>AC</th>
          </tr>
        </thead>

        <tbody>
        {characters.map(character => (
            <tr key={character.id} className='contents'>
              <td>{character.name}</td>
              <td>{character.init}</td>
              <td>{character.ac}</td>
              <td>
                <button onClick={() => RemoveCharacter(character.id)} >remove</button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
        <tr>
            <td><input type="text" value={newCharacter.name} placeholder="name" onChange={e => setNewCharacter({ ...newCharacter, name: e.target.value})}/></td>
            <td><input type="text" value={newCharacter.init} placeholder="init" onChange={e => setNewCharacter({ ...newCharacter, init: e.target.value})}/></td>
            <td><input type="text" value={newCharacter.ac} placeholder="ac" onChange={e => setNewCharacter({ ...newCharacter, ac: e.target.value})}/></td>
            <td><button type='button' onClick={handleAdd}>Add</button></td>
          </tr>
        </tfoot>

      </table>
     
      <div>
        <button className='buttons' type='button' onClick={() => SortCharactersByInit(characters)}>Sort</button>
        <button className='buttons'>clear all</button>
      </div>

    </body>
  );
}

