import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { FormsModule } from '@angular/forms';
import { GeminiService } from './gemini.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkeletonComponent,FormsModule, NgFor, NgClass,FontAwesomeModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_with_gemini';

  prompt: string = '';

  geminiService: GeminiService = inject(GeminiService);

  chatHistory: any[] = [];
  loading: boolean = false;

  constructor(){
    this.geminiService.getMessageHistory ().subscribe((res) => {

     if(res){
      this.chatHistory.push(res);

     } 
 } )
}

   async sendData(){
    if(this.prompt){
      this.loading = true;
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
      this.loading = false;

    }
  }
}
