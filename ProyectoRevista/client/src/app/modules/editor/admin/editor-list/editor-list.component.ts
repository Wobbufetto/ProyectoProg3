import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor.service';
import { EditorModel } from 'src/app/models/editor.model';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {

  constructor(private edtService: EditorService) { }

  editorList : EditorModel[] = [];
  ngOnInit() {
    this.getAllEditors();
  }

  getAllEditors():void{
    this.edtService.getAllEditors().subscribe(items =>{
      this.editorList = items;
    })
  }

}
