import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { FormsModule } from '@angular/forms';
import { GeminiService } from './gemini.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkeletonComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_with_gemini';

  prompt: string = '';

  geminiService: GeminiService = inject(GeminiService);


  sendData(){
    if(this.prompt){
      this.geminiService.generateText(this.prompt);

    }
  }
}
