const medievalRecipes = [
  {
    id: 1,
    name: "Bouillasse de Poularde",
    img: "https://media.focus-cuisine.com/i/847/8471431/medieval-poulet-citron-miel-L-qhFH8J.jpeg",
    price: 8,
    category: "main course",
    allergen: "-",
    lien: "",
  },
  {
    id: 2,
    name: "Façou à l’oseille",
    img: "https://recettemedievale.fr/wp-content/uploads/2018/11/farcou-300x225.jpg.webp",
    price: 1,
    category: "main course",
    allergen: "wheat",
    lien: "https://recettemedievale.fr/farcou-a-loseille/",
  },
  {
    id: 3,
    name: "Francherepue de Porçouaille",
    img: "https://www.voyageurs-du-temps.fr/images/sites/cuisine/cochonnet01.jpg",
    price: 12,
    category: "main course",
    allergen: "-",
    recette: "",
  },
  {
    id: 4,
    name: "Tourte de Champignons",
    img: "https://recettemedievale.fr/wp-content/uploads/2021/03/Tourte-de-champignons-2-400x400.jpg",
    price: 5,
    category: "main course",
    allergen: "cheese, egg",
    recette: "https://recettemedievale.fr/tourte-de-champignons/",
  },
  {
    id: 5,
    name: "Fouace",
    img: "https://recettemedievale.fr/wp-content/uploads/2018/10/Fouace-300x200.jpg.webp",
    price: 5,
    category: "main course",
    allergen: "wheat, egg",
    recette: "https://www.cuisineaz.com/recettes/fouace-28973.aspx",
  },
  {
    id: 6,
    name: "Soupière de Poisscaille",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Soupe_de_machoiron_%C3%A0_table.jpg",
    price: 5,
    category: "main course",
    allergen: "-",
    recette: "",
  },
  {
    id: 7,
    name: "Pain Médiéval et le tranchoir au ragout d’orges et de bière d’hobb trois doigts",
    img: "https://www.thedirtyalchimiste.com/wp-content/uploads/2022/08/301217915_401271518806354_312447361898100088_n-scaled.jpg",
    price: 7,
    category: "main course",
    allergen: "-",
    recette: "",
  },
  {
    id: 8,
    name: "Porée blanche",
    img: "https://recettemedievale.fr/wp-content/uploads/2020/10/Poree-blanche-a-jour-de-careme-selon-le-Menagier-de-Paris-1-300x300.jpg.webp",
    price: 3,
    category: "main course",
    allergen: "milk",
    recette: "https://recettemedievale.fr/poree-blanche-a-jour-de-careme/",
  },
  {
    id: 9,
    name: "Darioles",
    img: "https://recettemedievale.fr/wp-content/uploads/2020/04/darioles-2-sur-3-300x300.jpg",
    price: 2,
    category: "dessert",
    allergen: "milk, egg",
    recette: "https://recettemedievale.fr/darioles/",
  },
  {
    id: 10,
    name: "Tartasse au citron",
    img: "https://ekladata.com/xtc2FOsRfMFwNGq-Tce2XCV-nIM.jpg",
    price: 3,
    category: "dessert",
    allergen: "-",
    recette: "",
  },
  {
    id: 11,
    name: "Hydromel aux épices",
    img: "https://recettemedievale.fr/wp-content/uploads/2018/10/bochet-300x300.jpg",
    price: 3,
    category: "drink",
    allergen: "-",
    recette: "https://recettemedievale.fr/bochet/",
  },
  {
    id: 12,
    name: "Hericoq d’agneau",
    img: "https://recettemedievale.fr/wp-content/uploads/2019/06/H%C3%A9ricoq-dagneau-300x300.jpg.webp",
    price: 8,
    category: "main course",
    allergen: "-",
    recette: "https://recettemedievale.fr/hericoq-dagneau/",
  },
  {
    id: 13,
    name: "Cuissot de Sanglier",
    img: "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2019.2F01.2F02.2Fc770982c-a7bb-4d27-a97f-306ad8d24548.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgRGFycXXDqS9TdWNyw6kgc2Fsw6kgLyBDdWlzaW5lIEFjdHVlbGxl/focus-point/2908%2C2011/cuissot-de-sanglier-au-four.jpeg",
    price: 13,
    category: "main course",
    allergen: "-",
    recette: "",
  },
  {
    id: 14,
    name: "Letelorye - Flan",
    img: "https://recettemedievale.fr/wp-content/uploads/2018/11/letelorye-300x300.jpg",
    price: 2,
    category: "dessert",
    allergen: "egg, milk, butter",
    recette: "https://recettemedievale.fr/letelorye/",
  },
  {
    id: 15,
    name: "Pot au feu de viandasse",
    img: "https://media.focus-cuisine.com/i/869/8696086/chaudronnee-medievale-T-at6JkH.jpeg",
    price: 6,
    category: "main course",
    allergen: "-",
    recette: "",
  },
  {
    id: 16,
    name: "Tourte aux pommes",
    img: "https://recettemedievale.fr/wp-content/uploads/2020/10/Tourte-aux-pommes-selon-Taillevent-300x261.jpeg.webp",
    price: 2,
    category: "dessert",
    allergen: "egg",
    recette: "https://recettemedievale.fr/tourte-aux-pommes-2/",
  },
  {
    id: 17,
    name: "Cyvé de Boeuf",
    img: "https://media.focus-cuisine.com/i/847/8471432/medieval-cyve-boeuf-bourguignon-L-XD4t4z.jpeg",
    price: 8,
    category: "main course",
    allergen: "-",
    recette: "",
  },
  {
    id: 18,
    name: "Cormary - Porc",
    img: "https://recettemedievale.fr/wp-content/uploads/2018/11/Cormary-240x300.jpg",
    price: 9,
    category: "main course",
    allergen: "-",
    recette: "https://recettemedievale.fr/cormary/",
  },
  {
    id: 19,
    name: "Ambroisie",
    img: "https://recettemedievale.fr/wp-content/uploads/2018/10/ambroisie-2-200x300.jpg",
    price: 3,
    category: "drink",
    allergen: "-",
    recette: "https://recettemedievale.fr/ambroisie/",
  },
  {
    id: 20,
    name: "Vinasse",
    img: "https://www.journalvignette.fr/wp-content/uploads/2021/03/histoire-medecine-vin-soigner.jpg",
    price: 2,
    category: "drink",
    allergen: "-",
    recette: "",
  },
  {
    id: 21,
    name: "Espinarde en brouet",
    img: "https://recettemedievale.fr/wp-content/uploads/2018/10/espinarde-en-brouet-300x300.jpg.webp",
    price: 6,
    category: "main course",
    allergen: "orge",
    recette: "https://recettemedievale.fr/espinarde-en-brouet/",
  },
];

export default medievalRecipes;
