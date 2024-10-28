import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private generativeAI: GoogleGenerativeAI;

  constructor() { 
    this.generativeAI = new GoogleGenerativeAI('AIzaSyBQmGVdE_JdAfW8hVgEmd1Y-rIBCZipWAc');
  }


  async generateText(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({model: 'gemini-pro'});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
}
