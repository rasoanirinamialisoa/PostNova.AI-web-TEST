/* eslint-env vitest */
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('affiche le texte de bienvenue', () => {
    render(<App />)
    expect(screen.getByText(/Hello PostNova/i)).toBeInTheDocument()
  })
})
