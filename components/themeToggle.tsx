import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const ToggleButton = styled.button`
  --toggle-width: 55px;
  --toggle-height: 30px;
  --toggle-padding: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
  line-height: 1;
  width: var(--toggle-width);
  height: 22px;
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  margin-left: 1rem;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding - 4);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 3));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 3));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(p: any) =>
    p.theme === 'dark'
      ? 'translate3d(calc(var(--toggle-width) - 28px), 0, 0)'
      : 'none'};
`

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(
    document.body.dataset.theme || ''
  )
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type='button'
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <ToggleThumb theme={activeTheme} />
      <span>🌙</span>
      <span>☀️</span>
    </ToggleButton>
  )
}

export default ThemeToggle
