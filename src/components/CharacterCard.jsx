export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Affiliation:</strong> {character.affiliation}</p>
      <p>{character.description}</p>
    </div>
  )
}
