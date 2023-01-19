import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    public loading: LoadingController,
    public toast: ToastController,
    public alert: AlertController
  ) { }


  /**
   * Loader
   * To stop loader use:
   * this.helper.loading.dismiss();
   * @author Jocimar Lopes
   */
  async loader() {
    const loading = await this.loading.create({
      cssClass: 'loader',
      spinner: 'bubbles',
      message: 'por favor, aguarde..'
    });
    await loading.present();
  }

  /**
   *  Toast message
   *  message, time, color
   * @author Jocimar Lopes
   */
  async message(message: string, time: number, color: string) {
    const toast = await this.toast.create({
      message: message,
      duration: time,
      color: color,
    });
    toast.present();
  }

  /**
   * Alert message pattern
   * @author Jocimar Lopes
   */
  async alertMessage(title: string, subtitle: string, message: string) {
    const alert = await this.alert.create({
      header: title,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
