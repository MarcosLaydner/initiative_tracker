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
  }
  
  function handleAdd () {
    const id = generateId();
    const add = { id: id, 
      char: <Character id={id} name={newCharacter.name} init={newCharacter.init} ac={newCharacter.ac}
      removeFunction ={removeCharacter}
      updateFunction ={updateCharacter}
      />}
    characters.push(add) // quando eu uso 'setCharacters[...characters, add]' a primeira não é adcionada na lista
    setCharacters(characters)
    setNewCharacter({name: '', init: '', ac: ''})
    console.log(characters)
  }

  function SortCharactersByInit (characters) {
    const arrayCopy = characters.slice(0);
    arrayCopy.sort((a,b) => b.char.props.init - a.char.props.init);
    console.log(arrayCopy[0].char.props)
    setCharacters(arrayCopy);
  }

  function generateId() {
    let id = Math.floor(Math.random() * 1000)

    while (idList.includes(id)) {
      id = Math.floor(Math.random() * 1000)
    }

    idList.push(id) // quando eu uso 'setIdList[...idList, id]', da um erro dizendo que .includes não é um método
    setIdList(idList)
    return id;
  }

  function updateCharacter(update) {
    
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
              character.char
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