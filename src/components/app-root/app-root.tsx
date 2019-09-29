import { Component, h, State } from '@stencil/core';
import { Cmp1 } from '../cmp1/cmp1';
import { Cmp2 } from '../cmp2/cmp2';
import { Cmp3 } from '../cmp3/cmp3';


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
            <button onClick={this.setNo1}>1</button>
            <button onClick={this.setNo2}>2</button>
            <button onClick={this.setNo3}>3</button>
            <button onClick={this.setNo1Copy}>1 (copy)</button>
          </div>
          {this.showNo === 0 && <Cmp1/>}
          {this.showNo === 1 && <Cmp2/>}
          {this.showNo === 2 && <Cmp3/>}
          {this.showNo === 3 && <Cmp1/>}
        </main>
      </div>
    );
  }

  private setNo(no: number) {
    this.showNo = no;
  }

  private setNo1 = this.setNo.bind(this, 0);
  private setNo2 = this.setNo.bind(this, 1);
  private setNo3 = this.setNo.bind(this, 2);
  private setNo1Copy = this.setNo.bind(this, 3);
}
