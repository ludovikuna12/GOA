//სავარჯიშო 1:
 //დაწერეთ პირობითი დებულება, რომელიც ამოწმებს არის თუ არა რიცხვი 10-ზე მეტი. თუ ასეა, დაბეჭდეთ „რიცხვი მეტია 10-ზე“; წინააღმდეგ შემთხვევაში დაბეჭდეთ „რიცხვი არ არის 10-ზე მეტი“.



if(10 > 20) {
 console.log("რიცხვი არ არის 10-ზე მეტი")
} else {
 console.log("რიცხვი მეტია 10-ზე")
}




//სავარჯიშო 2:
//დაწერეთ პირობითი განცხადება, რომელიც ამოწმებს, არის თუ არა ადამიანის ასაკი 18-ზე მეტი ან ტოლი. თუ ასეა, დაბეჭდეთ „თქვენ გაქვთ ხმის მიცემის უფლება“;წინააღმდეგ შემთხვევაში, ბეჭდვა "თქვენ არ გაქვთ ხმის მიცემის უფლება". 


let humansAge = 14

if(humansAge > 18) {
 console.log("თქვენ გაქვთ ხმის მიცემის უფლება");
} else {
 console.log("თქვენ არ გაქვთ ხმის მიცემის უფლება")
}



//სავარჯიშო 3:
//დაწერეთ პირობითი დებულება, რომელიც ამოწმებს რიცხვი დადებითია, უარყოფითი ან ნული. დაბეჭდეთ შესაბამისი შეტყობინება თითოეული შემთხვევისთვის.


if(20 <  20) {
 console.log("20 მეტია მეორე რიცხვზე")
} else if (20 === 20) {
console.log("20 მეორე რიცხვის ტოლია");
} else {
 console.log("20 მეტია მეორე რიცხვი");
}


//სავარჯიშო 4:
 //დაწერეთ პირობითი განცხადება, რომელიც ამოწმებს, არის თუ არა ადამიანის ასაკი 13 წელზე ნაკლები. თუ ასეა, დაბეჭდეთ „ბავშვი ხარ“; თუ ის 13-დან 19-მდეა,
//ბეჭდვა "შენ ხარ მოზარდი"; წინააღმდეგ შემთხვევაში დაბეჭდეთ „სრულწლოვანი ხარ“



let me = 14

if(13 < me) {
 console.log("შენ ხარ მოზარდი");
} else {
    console.log("სრულწლოვანი ხარ");
}



//სავარჯიშო 5:
 
//მომხმარებელს შემოატანინეთ ქულა, თუ რიცხვი ტოლია 100, მაშინ გამოიტანეთ, რომ თქვენ დაგიფინანსდათ სწავლა სრულია, თუ ქულა მეტია 70 ზე, მაშინ გამოიტანეთ, თქვენ დაგიფინანსდათ სწავლა 3000 ლარით, თუ შემოტანილი ქულა მეტია 40 ზე, მაშინ გამმოიტანეთ, თქვენ დაგიფინანსდათ სწავლა 1000 ლარით, ხოლო თუ შემოტანილი ქულა ნაკლებია 20 ზე, მაშინ დაწერეთ თქვენ არ დაფინანსდათ სწავლა.


let number = 90

if(number === 100) {
 console.log("რომ თქვენ დაგიფინანსდათ სწავლა სრულია");
} else if(70 < number) {
 console.log("თქვენ დაგიფინანსდათ სწავლა 3000 ლარით");
} else if(number > 40)  {
    console.log("თქვენ დაგიფინანსდათ სწავლა 1000 ლარით");
} else if(number < 20) {
 console.log("მაშინ დაწერეთ თქვენ არ დაფინანსდათ სწავლა.");
}

