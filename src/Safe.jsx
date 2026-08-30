import { Component } from 'react'

// Aísla un subárbol: si algo dentro falla, no tumba la página.
// Muestra `fallback` (o nada si no se pasa).
export default class Safe extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(err) {
    // eslint-disable-next-line no-console
    console.error('Safe: subárbol falló', err)
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null
    return this.props.children
  }
}
