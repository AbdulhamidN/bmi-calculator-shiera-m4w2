import type { BmiCalculation } from '../types'

interface BMIResultProps {
  result: BmiCalculation | null
}

export function BMIResult({ result }: BMIResultProps) {
  return (
    <section className="bmi-result" aria-live="polite">
      <h2>Live result</h2>
      {result ? (
        <>
          <p className="bmi-value">
            BMI: <strong>{result.value.toFixed(2)}</strong>
          </p>
          <p className="bmi-category">
            Category: <strong>{result.category}</strong>
          </p>
        </>
      ) : (
        <p className="bmi-placeholder">
          Enter a valid height and weight to see your BMI.
        </p>
      )}
    </section>
  )
}
