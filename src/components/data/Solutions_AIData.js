import { MdOutlineLanguage } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";
import { CiFaceSmile } from "react-icons/ci";
import { FaFaceGrinBeam } from "react-icons/fa6";
import { TbAnalyzeFilled } from "react-icons/tb";
import { CiText } from "react-icons/ci";
import { BiSolidInvader } from "react-icons/bi";
import {
  SiNumpy,
  SiPandas,
  SiScipy,
  SiApachespark,
  SiPowerbi,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiBoost,
  SiPytorch,
  SiCaffeine,
  SiMicrosoftazure,
  SiGooglecloud,
  SiIbm,
  SiSpacy,
  SiChatbot,
  SiOpencv,
  SiYolo,
  SiDlib,
  SiApacheflink,
  SiApachekafka,
  SiGooglebigquery,
  SiApachehadoop,
  SiPlotly,
  SiD3Dotjs,
} from "react-icons/si";

export const AIAndDataScienceServices = [
  'Analyse de données',
  'Modélisation prédictive',
  'Apprentissage automatique (Machine Learning)',
  'Deep Learning',
  'Traitement du langage naturel (NLP)',
  'Vision par ordinateur',
  'Reconnaissance de motifs',
  'Analyse de sentiment',
  'Optimisation des processus',
  'Détection d\'anomalies',
  'Systèmes de recommandation',
  'Intelligence artificielle conversationnelle (Chatbots, Agents virtuels)',
  'Analyse de Big Data',
  'Data Mining',
  'Visualisation de données',
  'Développement d\'algorithmes personnalisés'
];



export const aiAndDataScienceSolutionsData = [
  { name: 'Data analysis', icon: '/images/solutions/ai-data-science/data-analysis.png', contain: "Analysez vos données pour extraire des informations précieuses et des insights exploitables, vous permettant de prendre des décisions éclairées et stratégiques pour votre entreprise." },
  { name: 'Predictive modeling', icon: '/images/solutions/ai-data-science/predictive-modeling.png', contain: "Créez des modèles statistiques pour prédire des événements futurs ou des tendances, vous aidant à anticiper les comportements des clients, les demandes du marché et les performances commerciales." },
  { name: 'Machine Learning', icon: '/images/solutions/ai-data-science/machine-learning.png', contain: "Développez des algorithmes et des modèles d'apprentissage automatique pour permettre à votre système de s'améliorer automatiquement à partir des données et de fournir des solutions personnalisées et intelligentes." },
  { name: 'Deep Learning', icon: '/images/solutions/ai-data-science/deep-learning.png', contain: "Exploitez des réseaux de neurones artificiels pour résoudre des problèmes complexes de reconnaissance de formes, de classification et de prédiction, ouvrant la voie à des applications avancées telles que la vision par ordinateur et le traitement du langage naturel." },
  { name: 'NLP & LLM', icon: '/images/solutions/ai-data-science/nlp.png', contain: "Développez des applications capables de comprendre, d'interpréter et de générer un langage humain de manière naturelle, permettant des interactions sophistiquées avec les utilisateurs, comme les chatbots ou les systèmes de recommandation." },
  { name: 'Computer vision', icon: '/images/solutions/ai-data-science/computer-vision.png', contain: "Développez des systèmes capables de comprendre et d'analyser visuellement le monde qui les entoure, ouvrant la voie à des applications telles que la reconnaissance d'objets, la détection de visages et la surveillance vidéo." },
  { name: 'Pattern recognition', icon: '/images/solutions/ai-data-science/pattern-recognition.png', contain: "Identifiez des motifs complexes dans les données pour découvrir des informations cachées, permettant une prise de décision plus efficace et une détection plus précise des tendances et des anomalies." },
  { name: 'Sentiment analysis', icon: '/images/solutions/ai-data-science/sentiment-analysis.png', contain: "Analysez les opinions, les émotions et les attitudes des utilisateurs à partir de textes, de commentaires ou de critiques, vous permettant de comprendre la perception de votre marque et d'adapter vos stratégies en conséquence." },
  { name: 'Process optimization', icon: '/images/solutions/ai-data-science/process-optimization.png', contain: "Optimisez vos opérations commerciales en identifiant et en améliorant les processus inefficaces, réduisant les coûts, en augmentant la productivité et en améliorant la qualité des produits ou services." },
  { name: 'Anomaly detection', icon: '/images/solutions/ai-data-science/anomaly-detection.png', contain: "Identifiez les comportements ou les événements inhabituels dans vos données, vous permettant de détecter et de prévenir les fraudes, les erreurs ou les incidents de sécurité." },
  { name: 'Recommendation systems', icon: '/images/solutions/ai-data-science/recommendation-systems.png', contain: "Développez des systèmes intelligents capables de recommander des produits, des services ou des contenus personnalisés en fonction des préférences et des comportements des utilisateurs, améliorant ainsi l'expérience utilisateur et stimulant les ventes." },
  { name: 'Chatbots', icon: '/images/solutions/ai-data-science/conversational-ai.png', contain: "Créez des agents virtuels capables de dialoguer de manière autonome avec les utilisateurs, fournissant un support client 24/7, répondant aux questions fréquentes et offrant une expérience utilisateur personnalisée et efficace." },
  { name: 'Big Data Analysis', icon: '/images/solutions/ai-data-science/big-data-analysis.png', contain: "Analysez des ensembles de données massifs pour extraire des informations significatives et des tendances émergentes, vous permettant de prendre des décisions stratégiques basées sur des données précises et en temps réel." },
  { name: 'Data Mining', icon: '/images/solutions/ai-data-science/data-mining.png', contain: "Explorez vos données pour découvrir des modèles et des relations cachés, vous aidant à identifier de nouvelles opportunités commerciales, à comprendre vos clients et à améliorer vos stratégies marketing." },
  { name: 'Data visualization', icon: '/images/solutions/ai-data-science/data-visualization.png', contain: "Transformez des données complexes en graphiques interactifs et visuels faciles à comprendre, vous permettant de communiquer efficacement des insights et des informations clés à tous les niveaux de votre organisation." },
  { name: 'Customized AI', icon: '/images/solutions/ai-data-science/customized-algorithm-development.png', contain: "Concevez des algorithmes sur mesure pour résoudre des problèmes spécifiques à votre entreprise, en tirant parti de techniques avancées en Intelligence Artificielle et en Data Science pour répondre à vos besoins uniques et complexes." }
];


export const data_Data_analysis =  [
  { name: 'NumPy', icon: <SiNumpy size={30} /> },
  { name: 'Pandas', icon: <SiPandas size={30} /> },
  { name: 'scipy', icon: <SiScipy size={30} /> },
  { name: 'Apache Spark', icon: <SiApachespark size={30} /> },
  { name: 'Power BI', icon: <SiPowerbi  size={30} /> },
];

 
export const data_Predictivemodeling =  [
  { name: 'Scikit-learn', icon: <SiScikitlearn size={30} /> },
  { name: 'XGBoost', icon: <SiBoost  size={30} /> },
  { name: 'SparkML', icon: <SiApachespark size={30} /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={30} /> },
  { name: 'Keras', icon: <SiKeras size={30} /> },
];

export const data_Machine_Learning =  [
  { name: 'Scikit-learn', icon: <SiScikitlearn size={30} /> },
  { name: 'XGBoost', icon: <SiBoost  size={30} /> },
  { name: 'SparkML', icon: <SiApachespark size={30} /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={30} /> },
  { name: 'Keras', icon: <SiKeras size={30} /> },
];

export const data_Deep_Learning =  [
  { name: 'TensorFlow', icon: <SiTensorflow size={30} /> },
  { name: 'Keras', icon: <SiKeras size={30} /> },
  { name: 'PyTorch', icon: <SiPytorch size={30} /> },
  { name: 'CNTK', icon: <SiMicrosoftazure  size={30} /> },
  { name: 'Caffe', icon: <SiCaffeine size={30} /> },
];


export const data_NLP =  [
  { name: 'NLTK', icon: <TbMessageLanguage size={30} /> },
  { name: 'SpaCy', icon: <SiSpacy size={30} /> },
  { name: 'Chatbot', icon: <SiChatbot size={30} /> },
  { name: 'LangChain', icon: <MdOutlineLanguage size={30} /> },
  { name: 'Huggingface', icon: <CiFaceSmile size={30} /> },
];
 

export const data_Computer_vision =  [
  { name: 'OpenCV', icon: <SiOpencv size={30} /> },
  { name: 'Yolo', icon: <SiYolo size={30} /> },
  { name: 'Dlib', icon: <SiDlib size={30} /> },
  { name: 'Tensorflow', icon: <SiTensorflow size={30} /> },
  { name: 'Pytorch', icon: <SiPytorch size={30} /> },
];

export const data_Pattern_recognition =  [
  { name: 'Scikit-learn', icon: <SiScikitlearn size={30} /> },
  { name: 'Weka', icon: <TbAnalyzeFilled size={30} /> },
  { name: 'KNINE', icon: <TbAnalyzeFilled size={30} /> },
  { name: 'Orange', icon: <FaFaceGrinBeam size={30} /> },
  { name: 'MATLAB', icon: <TbAnalyzeFilled size={30} /> },
];

export const data_Sentiment_analysis =  [
  { name: 'TextBlob', icon: <CiText size={30} /> },
  { name: 'VaderSentiment', icon: <BiSolidInvader size={30} /> },
  { name: 'IBM', icon: <SiIbm size={30} /> },
  { name: 'GCP', icon: <SiGooglecloud size={30} /> },
  { name: 'Azure', icon: <SiMicrosoftazure size={30} /> },
];

export const data_Big_Data_Analysis =  [
  { name: 'Hadoop', icon: <SiApachehadoop size={30} /> },
  { name: 'Apache Spark', icon: <SiApachespark size={30} /> },
  { name: 'Apache Kafka', icon: <SiApachekafka size={30} /> },
  { name: 'Apache Flink', icon: <SiApacheflink size={30} /> },
  { name: 'Google BigQuery', icon: <SiGooglebigquery size={30} /> },
];

export const data_Data_visualization =  [
  { name: 'Matplotlib', icon: <SiPlotly size={30} /> },
  { name: 'Seaborn', icon: <SiPlotly size={30} /> },
  { name: 'Plotly', icon: <SiPlotly size={30} /> },
  { name: 'Power BI', icon: <SiPowerbi size={30} /> },
  { name: 'D3.js', icon: <SiD3Dotjs size={30} /> },
];

 