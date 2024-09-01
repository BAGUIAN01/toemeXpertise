import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

export const mobileAppSolutionsData =  [
  { name: 'Social networks', icon: '/images/solutions/mobileApp/socialNetwork.jpg', contain:"Création de plateformes sociales pour permettre aux utilisateurs de se connecter, de partager du contenu, de communiquer et d'interagir entre eux." },
  { name: 'E-Commerce', icon: '/images/solutions/mobileApp/e-commerce.png',contain:"Développement d'applications de commerce électronique pour permettre aux utilisateurs d'acheter et de vendre des produits ou des services en ligne." },
  { name: 'Delivery Services', icon: '/images/solutions/mobileApp/delivery.png',contain:"Création d'applications de livraison pour les services de nourriture, de courses, de colis, etc., offrant aux utilisateurs la possibilité de commander et de recevoir des articles à leur porte." },
  { name: 'Entertainment', icon: '/images/solutions/mobileApp/entertainment.jpeg',contain:"Création d'applications de streaming vidéo, de musique, de jeux, de lecture de livres électroniques, etc., pour divertir les utilisateurs et leur fournir du contenu de divertissement." },
];
  
 
export const mobileSolutionMultiTextData = [
  'Application mobile pour réseaux sociaux',
  'Application mobile pour commerce électronique',
  'Application mobile pour services de livraison',
  'Application mobile pour divertissement et médias',
]

export const Tools =  [
  { name: 'Flutter', icon: <SiFlutter size={30} /> },
  { name: 'React Native', icon: <TbBrandReactNative size={30} /> },
  { name: 'Windev Mobile', icon: <FaMobileAlt size={30} /> },
  { name: 'Kivy', icon: <FaMobileAlt size={30} /> },
];
 

export const PlateForm =  [
  { name: 'iOS', icon: <FaAppStoreIos size={30} /> },
  { name: 'Android', icon: <FaAndroid size={30} /> },
];

export const DataBaseData =  [
  { name: 'MySQL', icon: <TbBrandMysql size={30} /> },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql size={30} /> },
  { name: 'MongoDB', icon: <TbBrandMongodb size={30} /> },
  { name: 'SQLite', icon: <SiSqlite size={30} /> },
];