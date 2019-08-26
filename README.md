## Stencil render performance investigation

Investigate why using jsx

```jsx
  {this.showNo === 0 && <app-cmp1 class='cmp'></app-cmp1>}
  {this.showNo === 1 && <app-cmp2 class='cmp'></app-cmp2>}
  {this.showNo === 2 && <app-cmp3 class='cmp'></app-cmp3>}
  {this.showNo === 3 && <app-cmp1 class='cmp'></app-cmp1>}
```

to switch the render state of simple stencil components causes flickering. 