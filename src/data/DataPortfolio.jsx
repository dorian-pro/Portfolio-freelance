import Freelance from '../assets/images/portfolio/freelance.svg';
import Etude from '../assets/images/portfolio/etudiant.svg';
import Annuaire from '../assets/images/portfolio/notAnnuaire.svg';

export const DataPortfolio = [
  {
    title: "Portfolio Freelance",
    text: "Landing page: présentation, portfolio, prestation, contact",
    img: <img src={Freelance} alt="Portfolio Freelance" />,
    link: "https://dorianmarechal.fr",
    codeLink: "",
  },
  {
    title: "Portfolio Etudiant",
    text: "présentation des projet, parcoure de formation, objectif.",
    img: <img src={Etude} alt="Portfolio Etudian" />,
    link: "https://dorianmarechal.com",
    codeLink: "",
  },
  {
    title: "NotAnnuaire.app",
    text: "Back office pour que les instance de notaires puissent avoir une gestion global sur leur information",
    img: <img src={Annuaire} alt="Portfolio Freelance" />,
    link: "https://notannuaire.app",
    codeLink: "",
  },
];