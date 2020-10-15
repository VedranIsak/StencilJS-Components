import { Component, h } from '@stencil/core';

@Component({
  tag: 'dep-table',
  styleUrl: 'dep-table.css',
  shadow: true,
})
export class Table {
  render() {
    return (
        <table>
            <thead>
                <th>Avdelning</th>
                <th>Senaste</th>
                <th>Nästa</th>
                <th>Status</th>
            </thead>
            <tbody>
                <tr>
                    <td class="dep">Avdelning 9</td>
                    <td>2020-08-01</td>
                    <td>2020-09-02</td>
                    <td>Ej påbörjad</td>
                    <td><button class="begin-btn">Genomför</button></td>
                </tr>
                <tr>
                    <td class="dep">Avdelning 10</td>
                    <td>2020-08-01</td>
                    <td>2020-09-02</td>
                    <td>Ej påbörjad</td>
                    <td><button class="begin-btn">Genomför</button></td>
                </tr>
                <tr>
                    <td class="dep">Neurologen</td>
                    <td>2020-08-01</td>
                    <td>2020-09-02</td>
                    <td>Pågår</td>
                    <td><button class="continue-btn">Fortsätt</button></td>
                </tr>
                <tr>
                    <td class="dep">Kardiologen</td>
                    <td>2020-08-01</td>
                    <td>2020-09-02</td>
                    <td>Pågår</td>
                    <td><button class="continue-btn">Fortsätt</button></td>
                </tr>
                <tr>
                    <td class="dep">Avdelning 2</td>
                    <td>2020-08-01</td>
                    <td>2020-09-02</td>
                    <td>Ej påbörjad</td>
                    <td><button class="begin-btn">Genomför</button></td>
                </tr>
                <tr>
                    <td class="dep">Ortopeden</td>
                    <td>2020-08-01</td>
                    <td>2020-09-02</td>
                    <td>Ej påbörjad</td>
                    <td><button class="begin-btn">Genomför</button></td>
                </tr>
            </tbody>
        </table>
    )
  }
}