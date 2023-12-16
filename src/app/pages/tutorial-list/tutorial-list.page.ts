import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.page.html',
  styleUrls: ['./tutorial-list.page.scss'],
})
export class TutorialListPage implements OnInit {

  tutorials : any[] = [];
  foto: string = 'https://source.unsplash.com/random/50×50';

  constructor(private tutorialService : TutorialService,
              private loadingController : LoadingController) { }

  ngOnInit() {
    this.loadingData();
  }

  async loadingData(){
    const loading = await this.loadingController.create({
      message:'Loading ...',
      spinner:'crescent'
    });
    await loading.present();

    this.tutorialService.getTutorial().subscribe((res) => {
      this.tutorials.push(...res.Hasil);
      console.log(this.tutorials);
      loading.dismiss();
    });
  }

}
