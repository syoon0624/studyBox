let people = [{
    name: "Susan",
    position: "WEB DEVELOPER",
    detail: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
}, 
{
    name: "Anna Johnson",
    position: "WEB DESIGNER",
    detail: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
},
{
    name: "Peter Jones",
    position: "INTERN",
    detail: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
},
{
    name: "Bill Anderson",
    position: "THE BOSS",
    detail: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
}]
let page = 0;


const showPerson = (p) => {
    document.querySelector(".name").innerHTML = p.name; 
}

const setPerson = () => {
    showPerson(people[0]);
}

const clickNextPage = () => {
    page++;
    showPerson(people[page]);
    if(page === 4) {
        page = 0;
    }
}

const clickPrevPage = () => {
    page--;
    showPerson(people[page]);
    if(page === -1) {
        page = 3;
    }
}
