import type { BmiEntry } from '../types'
import { EntryItem } from './EntryItem'

interface EntryListProps {
  entries: BmiEntry[]
  onDelete: (id: string) => void
}

export function EntryList({ entries, onDelete }: EntryListProps) {
  return (
    <section className="entry-list">
      <h2>Saved Entries</h2>
      {entries.length === 0 ? (
        <p className="empty-entries">No saved entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <EntryItem entry={entry} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
