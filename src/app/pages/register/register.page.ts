import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacion-password': new FormControl("", Validators.required)

    })
  }
  ngOnInit() {
  }

  async registrar() {
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error de Registro',
        message: 'Debes llenar los campos',
        buttons: [ 'Reintentar' ]
      });

      await alert.present();
      return;
  }else{
    const alert = await this.alertController.create({
      header: ' Usuario Registrado',
      buttons: [ 'Redireccionar al Inicio' ]
    });
    this.navCtrl.navigateRoot('home/buscador');
    await alert.present();
  }}

}
