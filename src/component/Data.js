import { BsMailbox, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

export const liste = [
  {
    id: 1,
    text: "home",
    url: "/"
  },
  {
    id: 2,
    text: "apropos",
    url: "/apropos"
  },
  {
    id: 3,
    text: "contacte",
    url: "/Contacte"
  }
];
// !============== themes Colors=======!
export const ColorsThemes = [
  {
    id: 1,
    theme: "red",
    text: "red"
  },
  {
    id: 2,
    theme: "blue",
    text: "blue"
  },
  {
    id: 3,
    theme: "green",
    text: "green"
  },
  {
    id: 4,
    theme: "gray",
    text: "gray"
  },
  {
    id: 5,
    theme: "yellow",
    text: "yellow"
  },
  {
    id: 5,
    theme: "pink",
    text: "pink"
  },
  {
    id: 6,
    theme: "cyan",
    text: "cyan"
  }
];
// ===========info pers========
export const Infopers = [
  {
    id: new Date().getSeconds(),
    Rps: "Rachid",
    text: "prenome"
  },
  {
    id: new Date().getSeconds(),
    Rps: "Messoudi",
    text: "nome"
  },
  {
    id: new Date().getSeconds(),
    Rps: "38",
    text: "age"
  },
  {
    id: new Date().getSeconds(),
    Rps: "LOT ZINEB GH 2 APT 13 Titte mlille casablanca",
    text: <ImLocation2 />
  },

  {
    id: new Date().getSeconds(),
    Rps: <a href="rachidmessoudi37@gmail.com">rachidmessoudi37@gmail.com</a>,
    text: <BsMailbox />
  },
  {
    id: new Date().getSeconds(),
    Rps: "+212 82 10 48 92",
    text: <BsFillTelephoneFill />
  },
  {
    id: new Date().getSeconds(),
    Rps: "Marocain",
    text: "nationalite"
  }
];
// ===============caractéristique===========
// Discipliné Dynamique Esprit d’équipe Digne de confiance Sociable
export const COMPETENCES = [
  {
    id: new Date().getSeconds(),
    competence: "Catia",
    pourcentage: "70"
  },
  {
    id: new Date().getSeconds(),
    competence: "Gibbscam",
    pourcentage: "90"
  },
  {
    id: new Date().getSeconds(),
    competence: "Javascript",
    pourcentage: "65"
  },
  {
    id: new Date().getSeconds(),
    competence: "HTML",
    pourcentage: "90"
  },
  {
    id: new Date().getSeconds(),
    competence: "css",
    pourcentage: "90"
  }
];
// ============= EXPERIENCE==========
export const EXPERIENCE = [
  {
    entreprise: "UniversAcier",
    ex: [
      {
        id: new Date().getSeconds(),

        poste: "technicien EAF",
        exper: "+10",
        description: `Chargement du four par ferraille<br/>contrôle des types d'acier,
    <br/>fusion de ferrailles par procédure Arc électrique, <br/>assurer les
    interfaces avec les fonctions support (maintenance, contrôle  
   de qualité, sécurité).
    <br/>Etablissement du rapport d'activité du poste.`
      }
    ]
  },
  {
    entreprise: "AIRCELLE MAROC",
    ex: [
      {
        id: new Date().getSeconds(),

        poste: "Magasinier",
        exper: "-1",
        description: `Réception <br/>
    contrôle <br/>
    stockage <br/>`
      }
    ]
  },
  {
    entreprise: "SOMADIAZ",
    ex: [
      {
        id: new Date().getSeconds(),

        poste: "Operateur de machine conventionnelle",
        exper: "+1",
        description:
          "Montage d'usinage <br/>Méthode de fabrication Gestion de production <br/>Qualité Statistique en production <br/>,Procèdes d'usinage (tournage, frisage)"
      }
    ]
  }
];
// ============Education============
export const Educ = [
  {
    id: new Date().getSeconds(),
    institut: "Gomycode",
    option: "Front End Developer (react js)",
    annee: "2003"
  },
  {
    id: new Date().getSeconds(),
    institut: " Institut Spécialisé de Technologie Appliquée",
    option: " Machine-outil à commande numérique (MOCN)",
    annee: "2009 / 2010"
  },
  {
    id: new Date().getSeconds(),
    institut: " Institut Spécialisé de Technologie Appliquée",
    option: " Technicien Spécialisé en Méthode de Fabrication Mécanique",
    annee: "2007 / 2009"
  },
  {
    id: new Date().getSeconds(),
    institut: "  Lycée Technique Al Khwarizmi de Casablanca",
    option: " Baccalauréat Technique option Fabrication Mécanique",
    annee: "2003 / 2006"
  }
];
