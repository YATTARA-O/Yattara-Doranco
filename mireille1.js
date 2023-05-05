var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World, Nous avons besoin de chacun de vous!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Votre don, servira à créer une activité artistique, pour acheter des crayons de couleur, des feuilles, de la peinture, des craies, pour donner une activité d\'art thérapeutique aux enfants orphelins dans un temps calme. Ou bien, participer a l\'achat de perles, de fil, pour la confection de bracelet et colliers, pour les moments de créativité. Mais aussi à proposer un goûter, un don en nourriture, où encore à rémunérer des intervenants, comme des professeurs d\'instruments de musique, pour l\'éveil à la musique. Votre geste, comptera pour Dessiner un Sourire, sur le visage d\'un enfant orphelin,ou vulnérable. Comme on dit en lingala " singa ya famille ekatanaka te" ce qui veux dire que le "fil familliale ne se casse pas", merci pour vos dons, pendant un instant vous serez le fil familiale d\'un de ces enfants orphelins. ')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Avec gratitude, <strong> ILELA Mireille Présidente de l\'Association Singa Ya Famille.!</strong>')
    .pauseFor(2500)
    .start();