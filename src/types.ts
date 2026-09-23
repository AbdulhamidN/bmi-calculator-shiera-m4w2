export type BmiCategory =
  | 'Underweight'
  | 'Normal weight'
  | 'Overweight'
  | 'Obese'

export interface BmiCalculation {
  value: number
  category: BmiCategory
}

export interface BmiEntry {
  id: string
  heightCm: number
  weightKg: number
  bmi: number
  category: BmiCategory
  savedAt: string
}
