import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.page.html',
  styleUrls: ['./tutorial-add.page.scss'],
})
export class TutorialAddPage implements OnInit {

  formTutorial : FormGroup;

  tutorial : {title:string, description:string} = {
    title : 'title',
    description : 'description'
  };

  constructor(private formBuilder : FormBuilder,
              private tutorialService : TutorialService) { 
              this.formTutorial = this.formBuilder.group({
                title : '',
                description : ''
              }); 
  }

  ngOnInit() {
  }

  submitForm(){

  }
}
