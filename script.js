let cards = document.getElementsByClassName("card");
console.log(cards);
for (let card of cards){
    card.addEventListener("mouseover", imageHandler);
    console.log(card);
}

/*let health_div = document.getElementById("health");
let econ_div = document.getElementById("econ");
let edu_div = document.getElementById("edu");
let climate_div = document.getElementById("climate");*/
function imageHandler(event){
    let currentCard = event.currentTarget.id;
    let currentIcon = currentCard + "_icon";
    let source = "https://votechapeau.ca/images/h"+currentCard+".png";
    console.log(source);
    document.getElementById(currentIcon).src = source;
}
