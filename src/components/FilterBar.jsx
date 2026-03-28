const filters = ['All', 'Rebel', 'Friendly', 'Enemy']

export default function FilterBar({ setFilter }) {
  return (
    <div className="filters">
      {filters.map(f => (
        <button key={f} onClick={() => setFilter(f)}>
          {f}
        </button>
      ))}
    </div>
  )
}
