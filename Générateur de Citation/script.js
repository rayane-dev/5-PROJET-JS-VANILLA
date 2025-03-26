const citations = [
  {
    auteur: "Albert Einstein",
    profession: "Physicien théoricien",
    citation: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
    image: "https://hips.hearstapps.com/hmg-prod/images/albert-einstein-sticks-out-his-tongue-when-asked-by-news-photo-1681316749.jpg"
  },
  {
    auteur: "Oscar Wilde",
    profession: "Écrivain et dramaturge",
    citation: "Soyez vous-même, les autres sont déjà pris.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated.jpg/800px-Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated.jpg"
  },
  {
    auteur: "Confucius",
    profession: "Philosophe chinois",
    citation: "Celui qui déplace une montagne commence par déplacer de petites pierres.",
    image: "https://www.litteratureaudio.com/wp-content/uploads/Confucius-vers-1770-e1653082627688.jpg"
  },
  {
    auteur: "Socrate",
    profession: "Philosophe grec",
    citation: "La seule vraie sagesse est de savoir que l'on ne sait rien.",
    image: "https://static.nationalgeographic.fr/files/styles/image_3200/public/og-socrates.jpg?w=1600"
  },
  {
    auteur: "Maya Angelou",
    profession: "Poétesse et militante des droits civiques",
    citation: "Les gens oublieront ce que vous avez dit, mais ils n’oublieront jamais ce que vous leur avez fait ressentir.",
    image: "https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=2292,h=1528,q=80/content/images/aac7a41bab7fe2fa6836ab376d1f87e8792b7b80.jpeg"
  },
  {
    auteur: "Steve Jobs",
    profession: "Entrepreneur et inventeur",
    citation: "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu’un d’autre.",
    image: "https://img.macg.co/2015/3/macgpic-1426495028-336974476806162-sc-op.jpg"
  },
  {
    auteur: "Nelson Mandela",
    profession: "Homme d'État et militant anti-apartheid",
    citation: "Je ne perds jamais. Soit je gagne, soit j’apprends.",
    image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/14BC8/production/_106763948_gettyimages-91120693.jpg.webp"
  },
  {
    auteur: "Mark Twain",
    profession: "Écrivain et humoriste",
    citation: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"
  },
  {
    auteur: "Antoine<br>de Saint-Exupéry",
    profession: "Écrivain et aviateur",
    citation: "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.",
    image: "https://www.babelio.com/users/AVT_Antoine-de-Saint-Exupery_208.jpg"
  }
];

//Button generating
let button = document.querySelector('button');

//Title & texte
let auteur = document.querySelector('h2');
let citation = document.querySelector('h3');
let profession = document.querySelector('.right p');
let image = document.querySelector('.right');


console.log(auteur)
console.log(citation)
console.log(profession)
console.log(image)

  

function generateCitation(citations){
    let random = Math.floor(Math.random() * citations.length);
    let background = citations[random].image

    console.log(citations[random].citation);
    console.log(citations[random].auteur);
    console.log(citations[random].profession);
    console.log(citations[random].image)

    auteur.innerHTML = citations[random].auteur;
    citation.innerHTML = citations[random].citation;
    profession.innerHTML = citations[random].profession;
    image.style.backgroundImage = "url(" + citations[random].image + ")";


}



button.addEventListener('click', function() {
  generateCitation(citations);
})


generateCitation(citations);





