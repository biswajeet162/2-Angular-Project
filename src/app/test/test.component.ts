import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  public mycolor: String[] =["green", "red", "blue","orange","black"];
  
  constructor() { }

  ngOnInit(): void {
  }

}

