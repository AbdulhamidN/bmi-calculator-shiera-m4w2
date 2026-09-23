import { useMemo, useState, type ChangeEvent } from 'react'
import { calculateBmi, parsePositiveNumber, sanitizeNumericInput } from '../bmi'
import type { BmiEntry } from '../types'
import { BMIResult } from './BMIResult'
import { EntryList } from './EntryList'

function createEntryId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [entries, setEntries] = useState<BmiEntry[]>([])

  const heightCm = parsePositiveNumber(height)
  const weightKg = parsePositiveNumber(weight)
  const result = useMemo(
    () => calculateBmi(heightCm, weightKg),
    [heightCm, weightKg],
  )

  function handleNumericChange(
    setter: (value: string) => void,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setter(sanitizeNumericInput(event.target.value))
  }

  function handleSave() {
    if (result === null || heightCm === null || weightKg === null) {
      return
    }

    const entry: BmiEntry = {
      id: createEntryId(),
      heightCm,
      weightKg,
      bmi: result.value,
      category: result.category,
      savedAt: new Date().toISOString(),
    }

    setEntries((current) => [entry, ...current])
  }

  function handleDelete(id: string) {
    setEntries((current) => current.filter((entry) => entry.id !== id))
  }

  const canSave = result !== null

  return (
    <div className="bmi-app">
      <header className="bmi-header">
        <h1>BMI Calculator</h1>
        <p>Track your BMI live and save entries toward your goals.</p>
      </header>

      <form
        className="bmi-form"
        onSubmit={(event) => {
          event.preventDefault()
          handleSave()
        }}
      >
        <label htmlFor="height">
          Height (cm)
          <input
            id="height"
            name="height"
            type="number"
            inputMode="decimal"
            min="1"
            step="0.1"
            autoComplete="off"
            placeholder="e.g. 170"
            value={height}
            onChange={(event) => handleNumericChange(setHeight, event)}
          />
        </label>

        <label htmlFor="weight">
          Weight (kg)
          <input
            id="weight"
            name="weight"
            type="number"
            inputMode="decimal"
            min="1"
            step="0.1"
            autoComplete="off"
            placeholder="e.g. 65"
            value={weight}
            onChange={(event) => handleNumericChange(setWeight, event)}
          />
        </label>
      </form>

      <BMIResult result={result} />

      <button
        type="button"
        className="save-button"
        onClick={handleSave}
        disabled={!canSave}
      >
        Save Entry
      </button>

      <EntryList entries={entries} onDelete={handleDelete} />
    </div>
  )
}
