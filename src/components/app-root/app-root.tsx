import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() showNo: number = 0;

  render() {
    return (
      <div>
        <header>
          <h1>Hit button to switch between rendered components</h1>
        </header>

        <main>
          <div class="controls">
            <button onClick={() => this.showNo = 0}>1</button>
            <button onClick={() => this.showNo = 1}>2</button>
            <button onClick={() => this.showNo = 2}>3</button>
            <button onClick={() => this.showNo = 3}>1 (copy)</button>
          </div>
          {this.showNo === 0 && <app-cmp1 class='cmp'></app-cmp1>}
          {this.showNo === 1 && <app-cmp2 class='cmp'></app-cmp2>}
          {this.showNo === 2 && <app-cmp3 class='cmp'></app-cmp3>}
          {this.showNo === 3 && <app-cmp1 class='cmp'></app-cmp1>}
        </main>
      </div>
    );
  }
}
