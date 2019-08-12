import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorModel } from 'src/app/models/editor.model';

@Component({
  selector: 'app-editor-edit',
  templateUrl: './editor-edit.component.html',
  styleUrls: ['./editor-edit.component.css']
})
export class EditorEditComponent implements OnInit {

  constructor(private edtService: EditorService, private route: ActivatedRoute, private router: Router) { }

  editor: EditorModel = {
    id: null,
    firstName: null,
    secondName: null,
    firstSurname: null,
    secondSurname: null,
    country: null,
    cellPhone: null,
    email: null,
    membership: null,
    education: null
  }

  ngOnInit() {
    this.searchEditor();
  }

  searchEditor(): void {
    let id = this.route.snapshot.params["id"];
    this.edtService.getEditorById(id).subscribe(item => {
      this.editor = item;
    });
  }

  updateEditor() {
    this.edtService.updateEditor(this.editor).subscribe(item => {
      alert("This article has been updated successfuly!");
      this.router.navigate(["/admin/editor/list"])
    })
  }

}
