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
      <img 
        class="ztar-title"
        src={import.meta.env.BASE_URL + "images/ztarwars.png"}
        alt="Ztar Wars"
        className="logo"
      />

      <FilterBar setFilter={setFilter} />

      <div className="grid">
        {filtered.map((char, i) => (
          <CharacterCard key={i} character={char} />
        ))}
      </div>
    </div>
  )
}
