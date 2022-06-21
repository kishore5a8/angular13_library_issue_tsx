import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sampleLib',
  template: `
    <p>
      sample-lib works!
    </p>
  `,
  styles: [
  ]
})
export class SampleLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
