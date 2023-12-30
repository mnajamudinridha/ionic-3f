import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-edit',
  templateUrl: './tutorial-edit.page.html',
  styleUrls: ['./tutorial-edit.page.scss'],
})
export class TutorialEditPage implements OnInit {

  formTutorial : FormGroup;
  tutorial : {title:string, description:string} = {
    title : 'title',
    description : 'description'
  };
  constructor(private tutorialService:TutorialService,
              private loadingController:LoadingController,
              private route: ActivatedRoute,
              private navroute: NavController,
              private formBuilder : FormBuilder) { 
                this.formTutorial = this.formBuilder.group({
                  title : '',
                  description : ''
                }); 
              }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loadingDataDetail(id);
    console.log('id'+id);
  }

  async loadingDataDetail(id: string | null){
    const loading = await this.loadingController.create({
      message:'Loading ...',
      spinner:'crescent'
    });
    await loading.present();

    this.tutorialService.getTutorialDetail(id).subscribe((res) => {
      this.tutorial.title = res.Hasil[0].title;
      this.tutorial.description = res.Hasil[0].description;
      loading.dismiss();
    });
  }

  submitForm(){
    if(this.formTutorial.valid){
      this.tutorial = this.formTutorial.value;
      // this.tutorialService.tambahTutorial(this.tutorial).subscribe({
      //   next: (val:any) => {
      //     this.navroute.navigateRoot('/tutorial');
      //   },
      //   error:(err) => {
      //     console.log("ada error di : ",err);
      //   }
      // });
    }
  }

}
