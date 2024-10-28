import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private generativeAI: GoogleGenerativeAI;

  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor() { 
    this.generativeAI = new GoogleGenerativeAI('AIzaSyBQmGVdE_JdAfW8hVgEmd1Y-rIBCZipWAc');
  }


  async generateText(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({model: 'gemini-pro'});
    this.messageHistory.next({
      from: 'user',
      message: prompt
    })
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    this.messageHistory.next({
      from: 'bot',
      message: text

  })
}

public getMessageHistory(): Observable<any> {
  return this.messageHistory.asObservable();

}
}