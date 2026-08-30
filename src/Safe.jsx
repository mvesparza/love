import { Component } from 'react'

// Aísla un subárbol: si algo dentro falla, no tumba la página, solo se oculta.
export default class Safe extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(err) {
    // eslint-disable-next-line no-console
    console.error('Safe: subárbol falló y se ocultó', err)
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}
