import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
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
              private route : NavController,
              private tutorialService : TutorialService) { 
              this.formTutorial = this.formBuilder.group({
                title : '',
                description : ''
              }); 
  }

  ngOnInit() {
  }

  submitForm(){
    if(this.formTutorial.valid){
      this.tutorial = this.formTutorial.value;
      this.tutorialService.tambahTutorial(this.tutorial).subscribe({
        next: (val:any) => {
          this.route.navigateRoot('/tutorial');
        },
        error:(err) => {
          console.log("ada error di : ",err);
        }
      });
    }
  }
}
