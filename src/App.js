import React, {useState} from 'react';
import { Main, ActionButton, InitiativeTable } from './styles';
import Character from './components/Character'

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState('');
  const [idList, setIdList] = useState([]);  

  function removeCharacter (id) {
    const arrayCopy = characters.filter((row) => row.id !== id);
    setCharacters(arrayCopy);
    console.log(id)
  }
  
  function handleAdd () {
    setCharacters([...characters, newCharacter])
    setNewCharacter({name: '', init: '', ac: '', id: generateId()})
  }

  function SortCharactersByInit (characters) {
    const arrayCopy = characters.slice(0);
    arrayCopy.sort((a,b) => b.init - a.init);
    setCharacters(arrayCopy);
  }

  function generateId() {
    let id = Math.floor(Math.random() * 1000)

    while (idList.includes(id)) {
      id = Math.floor(Math.random() * 1000)
    }

    idList.push(id)
    setIdList(idList)
    return id;
  }

  function updateCharacter(update) {
    
    console.log(characters)
  }

  return (
    <Main>
      <InitiativeTable>

        <thead>
          <tr className='header'>
            <th>Name</th>
            <th>Initiative</th>
            <th>AC</th>
          </tr>
        </thead>

        <tbody>
        {characters.map(character => (
              <Character id={generateId} name={character.name} init={character.init} ac={character.ac}
              removeFunction ={removeCharacter}
              updateFunction ={updateCharacter}
              this = {character}/>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td><input type="text" value={newCharacter.name} placeholder="name" onChange={e => setNewCharacter({ ...newCharacter, name: e.target.value})}/></td>
            <td><input type="text" value={newCharacter.init} placeholder="init" onChange={e => setNewCharacter({ ...newCharacter, init: e.target.value})}/></td>
            <td><input type="text" value={newCharacter.ac} placeholder="ac" onChange={e => setNewCharacter({ ...newCharacter, ac: e.target.value})}/></td>
            <td><button type='button' onClick={handleAdd}>Add</button></td>
          </tr>
          <tr>
            <th><ActionButton type='button' onClick={() => SortCharactersByInit(characters)}>Sort</ActionButton></th>
            <th><ActionButton>Start</ActionButton></th>
            <th><ActionButton>Save</ActionButton></th>
          </tr>
        </tfoot>

      </InitiativeTable>
    </Main>
  );
}