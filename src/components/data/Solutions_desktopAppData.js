import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython, FaWindows, FaLinux } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { MdOutlineSdStorage } from "react-icons/md";
import { DiDotnet } from "react-icons/di"; 
import { IoLogoElectron } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

export const desktopAppSolutionsData =  [
  { name: 'ERP', icon: '/images/solutions/desktopApp/erp-software.jpg', contain:"Centralisez et gérez efficacement toutes les activités de votre entreprise, de la comptabilité à la gestion des ressources humaines, avec notre solution ERP sur mesure." },
  { name: 'SysDataOps', icon: '/images/solutions/desktopApp/dataAnalytic.jpeg',contain:"Organisez et sécurisez vos données importantes, gagnez en efficacité et améliorez vos processus opérationnels avec notre système de gestion de bases de données puissant et évolutif." },
  { name: 'Prod App', icon: '/images/solutions/desktopApp/productivity.jpg',contain:"Boostez la productivité de votre entreprise en automatisant les tâches récurrentes, en simplifiant les processus et en offrant des outils puissants pour optimiser votre flux de travail." },
  { name: 'CustomApp', icon: '/images/solutions/desktopApp/custom.jpg',contain:"Mettez en valeur votre travail, vos projets et réalisations avec un site web de portfolio, offrant une vitrine professionnelle pour votre talent et vos compétences." },
];
  
 
export const DesktopSolutionMultiTextData = [
  'Logiciel de gestion d\'entreprise (ERP)',
  'Logiciel de Traitement et Management de données (SDataOps)',
  'Logiciel de productivité (PPS/OPS)',
  'Application de bureau sur mesure (CustomApp)',
]


export const CodingData =  [
  { name: 'Python', icon: <FaPython size={30} /> },
  { name: 'Java', icon: <FaJava size={30} /> },
  { name: 'C#', icon: <DiDotnet size={30} /> },
  { name: 'Java Script', icon: <IoLogoJavascript size={30} /> },
];

export const Tools =  [
  { name: 'PyQt', icon: <FaPython size={30} /> },
  { name: 'JavaFX', icon: <FaJava size={30} /> },
  { name: 'Electron', icon: <IoLogoElectron size={30} /> },
  { name: 'Native', icon: <TbBrandReactNative size={30} /> },
];

export const PlateForm =  [
  { name: 'Windows', icon: <FaWindows size={30} /> },
  { name: 'Linux', icon: <FaLinux size={30} /> },
  { name: 'Mac', icon: <SiMacos size={30} /> },
  { name: 'Portable', icon: <MdOutlineSdStorage size={30} /> },
];

export const DataBaseData =  [
  { name: 'MySQL', icon: <TbBrandMysql size={30} /> },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql size={30} /> },
  { name: 'MongoDB', icon: <TbBrandMongodb size={30} /> },
  { name: 'SQLite', icon: <SiSqlite size={30} /> },
];