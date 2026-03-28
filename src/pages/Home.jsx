import { useState } from 'react'
import characters from '../data/characters'
import CharacterCard from '../components/CharacterCard'
import FilterBar from '../components/FilterBar'

export default function App() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? characters
    : characters.filter(c => c.affiliation === filter)

  return (
    <div className="container">
      <h1 className="title">Star Wars Archive</h1>

      <FilterBar setFilter={setFilter} />

      <div className="grid">
        {filtered.map((char, i) => (
          <CharacterCard key={i} character={char} />
        ))}
      </div>
    </div>
  )
}
