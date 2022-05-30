import img from '../../assets/abidjan.png';

const abidjan = {
    id: 'ABIDJAN',
    nom: 'ABIDJAN',
    image: img,
    presentation: [
        {propNom: 'Nom Local', propValue: 'Baselique notre Dame de la paix'},
        {propNom: 'Culte', propValue: 'Catholique Romain'},
        {propNom: 'Type', propValue: 'Baselique'},
        {propNom: "Date d'Inauguration", propValue: '1989'},
        {propNom: 'Architecte', propValue: 'Pierre Fakhoury'},
    ],
    geographie: [
        {propNom: 'Pays', propValue: "Côte d'Ivoire"},
        {propNom: 'Ville', propValue: 'Yamoussoukro'},
        {propNom: 'Coordonnées', propValue: "6°48'40' nord,5° 1749 ouest"},
        {propNom: "Sol", propValue: "Marbre importé d'italie, d'Espagne et du portugal"},
    ],
    dimensions: [
        {propNom: 'Superficie', propValue: '30 000 m2'},
        {propNom: 'Volume', propValue: '800 000 m3'},
        {propNom: 'Largeur', propValue: '150 m'},
        {propNom: "Profondeur", propValue: '30 m'},
        {propNom: 'Population', propValue: '18 000 personnes'},
    ]
};

export default abidjan;