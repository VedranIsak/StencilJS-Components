import { Component, h } from '@stencil/core';

@Component({
  tag: 'stat-button',
  styleUrl: 'stat-button.css',
  shadow: true,
})
export class Button {
  render() {
    return <button>Statistik</button>
  }
}
