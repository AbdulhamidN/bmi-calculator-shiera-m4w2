import type { BmiCalculation, BmiCategory } from './types'

export function parsePositiveNumber(raw: string): number | null {
  const trimmed = raw.trim()
  if (trimmed === '') {
    return null
  }

  const value = Number(trimmed)
  if (!Number.isFinite(value) || value <= 0) {
    return null
  }

  return value
}

export function getBmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) {
    return 'Underweight'
  }
  if (bmi < 25) {
    return 'Normal weight'
  }
  if (bmi < 30) {
    return 'Overweight'
  }
  return 'Obese'
}

export function calculateBmi(
  heightCm: number | null,
  weightKg: number | null,
): BmiCalculation | null {
  if (heightCm === null || weightKg === null) {
    return null
  }

  const heightM = heightCm / 100
  if (heightM <= 0) {
    return null
  }

  const bmi = weightKg / heightM ** 2
  if (!Number.isFinite(bmi)) {
    return null
  }

  return {
    value: Math.round(bmi * 100) / 100,
    category: getBmiCategory(bmi),
  }
}

export function sanitizeNumericInput(raw: string): string {
  const cleaned = raw.replace(/[^\d.]/g, '')
  const firstDot = cleaned.indexOf('.')
  if (firstDot === -1) {
    return cleaned
  }

  return (
    cleaned.slice(0, firstDot + 1) +
    cleaned.slice(firstDot + 1).replace(/\./g, '')
  )
}
