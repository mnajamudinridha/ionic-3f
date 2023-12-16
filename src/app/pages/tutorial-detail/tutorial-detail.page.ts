import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.page.html',
  styleUrls: ['./tutorial-detail.page.scss'],
})
export class TutorialDetailPage implements OnInit {

  tutorial : any[] = [];
  foto: string = 'https://source.unsplash.com/random/100×100';
  

  constructor(private tutorialService : TutorialService,
              private loadingController : LoadingController,
              private route : ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loadingDataDetail(id);
  }

  async loadingDataDetail(id: string | null){
    const loading = await this.loadingController.create({
      message:'Loading ...',
      spinner:'crescent'
    });
    await loading.present();

    this.tutorialService.getTutorialDetail(id).subscribe((res) => {
      this.tutorial.push(...res.Hasil);
      console.log(this.tutorial);
      loading.dismiss();
    });
  }

}
