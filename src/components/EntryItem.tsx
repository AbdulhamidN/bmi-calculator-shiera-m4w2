import type { BmiEntry } from '../types'

interface EntryItemProps {
  entry: BmiEntry
  onDelete: (id: string) => void
}

export function EntryItem({ entry, onDelete }: EntryItemProps) {
  const savedLabel = new Date(entry.savedAt).toLocaleString()

  return (
    <article className="entry-item">
      <div className="entry-details">
        <p>Height: {entry.heightCm} cm</p>
        <p>Weight: {entry.weightKg} kg</p>
        <p>BMI: {entry.bmi.toFixed(2)}</p>
        <p>Category: {entry.category}</p>
        <p className="entry-time">Saved: {savedLabel}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(entry.id)}
      >
        Delete
      </button>
    </article>
  )
}
