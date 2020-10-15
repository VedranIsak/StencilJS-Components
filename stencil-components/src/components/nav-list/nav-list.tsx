import { Component, h } from '@stencil/core';

@Component({
  tag: 'nav-list',
  styleUrl: 'nav-list.css',
  shadow: true,
})
export class List {
  render() {
    return (
        <nav>
            <ul>
                <li>Hem</li>
                <li>Skapa riskbedömning</li>
                <li>Statistik</li>
                <li>Information</li>
                <li>Manual</li>
            </ul>
        </nav>
    )
  }
}
