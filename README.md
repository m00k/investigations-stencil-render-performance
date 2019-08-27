## Stencil render performance

There is noticable flickering when using conditional rendering even with the simplest stencil component.

```jsx
  {this.showNo === 0 && <app-cmp1 class='cmp'></app-cmp1>}
  {this.showNo === 1 && <app-cmp2 class='cmp'></app-cmp2>}
  {this.showNo === 2 && <app-cmp3 class='cmp'></app-cmp3>}
  {this.showNo === 3 && <app-cmp1 class='cmp'></app-cmp1>}
```

*Tested with Chrome Version 76.0.3809.132 (Official Build) (64-bit) on Linux Ubuntu 18.10*
