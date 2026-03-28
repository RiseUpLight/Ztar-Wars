import { Link } from 'react-router-dom'

export default function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.name}`} className="card">
      <h2>{character.name}</h2>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Affiliation:</strong> {character.affiliation}</p>
      <p>{character.description}</p>
    </Link>
  )
}
