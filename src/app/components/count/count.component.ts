import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
    @Input() set count(value: number) {
        this.value = value;
        
    }
    
    value: number;
    
    constructor() { }
    
    ngOnInit() {
    }
    
    private getCounterClass(value) {
        if (value > 0) {
            return 'positive';
        }
        
        if (value === 0) {
            return 'zero';
        }
        
        return 'negative';
    }

}
