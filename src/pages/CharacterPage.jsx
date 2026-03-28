import { useParams } from 'react-router-dom'
import characters from '../data/characters'

export default function CharacterPage() {
  const { name } = useParams()

  const character = characters.find(c => c.name === name)

  if (!character) return <h2>Character not found</h2>

  return (
    <div className="container">

      <img
        src={character.image}
        alt={character.name}
        style={{ width: '300px', border: '1px solid #00eaff' }}
      />
      
      <h1>{character.name}</h1>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Affiliation:</strong> {character.affiliation}</p>
      <p>{character.description}</p>
    </div>
  )
}
