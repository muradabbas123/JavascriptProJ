const RandomQuotes = [
"Success is not about being the smartest person in the room. It is about showing up every day, learning from your mistakes, and refusing to quit.",
  
  "The future belongs to those who believe in their dreams, work consistently toward them, and never stop improving themselves.",
  
  "Every expert was once a beginner who decided to keep practicing long after everyone else had given up.",
  
  "Your only competition is the person you were yesterday. Focus on becoming better every single day.",
  
  "Great things are built one small step at a time. Stay patient, trust the process, and keep moving forward.",
  
  "Discipline will take you places that motivation never can. Build habits that work even when you don't feel inspired.",
  
  "Failure is not the opposite of success. It is a lesson that teaches you how to succeed the next time.",
  
  "The best investment you can ever make is in yourself. Learn new skills, read more books, and keep growing.",
  
  "Confidence doesn't come from always winning. It comes from knowing you can handle whatever challenges come your way.",
  
  "Your dreams don't work unless you do. Put in the effort today so your future self will thank you tomorrow.",
  
  "Coding is not just about writing lines of code. It is about solving problems, thinking creatively, and building something meaningful.",
  
  "Small improvements made consistently over time create extraordinary results. Never underestimate the power of daily progress.",
  
  "Don't wait for the perfect opportunity. Start with what you have, where you are, and improve along the way.",
  
  "Every challenge you overcome makes you stronger, wiser, and more prepared for the opportunities waiting ahead.",
  
  "The road to success is filled with obstacles, but every obstacle is another chance to prove how determined you really are.",
  
  "Knowledge becomes powerful only when you apply it. Learn something new today and use it to create something valuable.",
  
  "Be patient with your progress. Trees don't grow overnight, but with time and care they become strong enough to weather any storm.",
  
  "Hard work opens doors that talent alone cannot. Stay consistent, stay humble, and never stop learning.",
  
  "Your potential is limitless when you combine curiosity, discipline, and the courage to take action every single day.",
  
  "The journey of a thousand miles begins with a single step. Take that step today, and let tomorrow be built on the effort you make now."
];


const ParaQuotes = document.getElementById("paraq")
const usedindexes = new Set()

function genquote() {

  if(usedindexes.size = RandomQuotes.length)
   usedindexes.clear()  
  
      while(true){

        const randomIdx = Math.floor(Math.random()*RandomQuotes.length);
              const quotes = RandomQuotes[randomIdx];
                   if(usedindexes.has(randomIdx)) continue
                       ParaQuotes.innerHTML = quotes;
                             usedindexes.add(randomIdx);
                                break
}
  }


function clearquote() {
  ParaQuotes.innerHTML = "";
}




