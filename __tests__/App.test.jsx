import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/App'

describe('App component', () => {
  it('should display the banner', () => {
    const { getByText } = render(<App />)
    expect(getByText('React + Vite + Jest')).toBeInTheDocument()
  })
})
