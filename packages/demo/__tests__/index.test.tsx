// @ts-ignore
import React from 'react'
import App from '../index'
import { describe, expect, it } from '@jest/globals'
// import { renderHook, act } from '@testing-library/react-hooks'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App', () => {
  it('should App render', async () => {
    render(<App />)
    expect(screen.getByText('0')).toBeTruthy()
    await waitFor(() => screen.getByText('3'))
    expect(screen.getByText('3')).toBeTruthy()
  })
})
