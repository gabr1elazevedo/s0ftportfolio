import emoji from "react-easy-emoji";

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Gabriel A Azevedo",
  description:
    "</> Um profissional dedicado, movido pela paixão sempre buscando oportunidades para contribuir no desenvolvimento de produtos abrangentes. Com expertise na criação de sistemas sociais, técnicos, sustentáveis e escaláveis, buscando constantemente gerar um impacto extraordinário.",
  og: {
    title: "Gabriel A Azevedo",
    type: "website",
    url: "www.gabrielaffonsoazevedo.com.br",
  },
};

//Home Page
const greeting = {
  title: emoji("Olá, Sou o Gabriel"),
  logo_name: "Gabriel",
  nickname: "@gabr1elazevedo_",
  subTitle:
    "</> Um profissional dedicado, movido pela paixão, sempre buscando oportunidades para contribuir no desenvolvimento de produtos abrangentes. Com expertise na criação de sistemas sociais, técnicos, sustentáveis e escaláveis, buscando constantemente gerar um impacto extraordinário.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/gabr1elazevedo/s0ftportfolio",
  githubProfile: "https://github.com/gabr1elazevedo",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/gabr1elazevedo/",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#171515",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gabr1elazevedo/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0A66C2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gabr1elazevedo_/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E1306C",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/951109139638149212/",
    fontAwesomeIcon: "fa-brands fa-discord",
    backgroundColor: "#5865F2",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/5516991533133?text=👋+Oi+Gabriel%21/",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
  {
    name: "E-mail",
    link: "mailto:gabrielaffonsoazevedo.com.br",
    fontAwesomeIcon: "fa-brands fa-microsoft",
    backgroundColor: "#1490DF",
  },
  {
    name: "X",
    link: "https://www.x.com/gabr1elazevedo_/",
    fontAwesomeIcon: "fa-brands fa-x-twitter",
    backgroundColor: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "Desenvolvimento FullStack",
      fileName: "FullStackImg",
      skills: [
        "· Desenvolvendo interfaces responsivas de sites utilizando React-Redux.",
        "· Liderando a criação de aplicativos móveis com experiência em Flutter, React Native e aplicativos Android individuais usando Kotlin.",
        "· Arquitetando backends robustos de aplicativos com proficiência em Node.js, Express e Flask.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E44F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CD6799",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#transparent",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#41873F",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#C12127",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2188B6",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#744C9E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#27AACD",
          },
        },
      ],
    },
    {
      title: "Ciência de Dados & IA",
      fileName: "DataScienceImg",
      skills: [
        "· Desenvolvimento de modelos altamente escaláveis e prontos para produção para diversos casos de uso em aprendizado profundo e estatística.",
        "· Experiência de trabalho em projetos de Visão Computacional e Processamento de Linguagem Natural (PLN).",
        "· Modelagem quantitativa complexa para previsões dinâmicas e análise de séries temporais",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            backgroundColor: "transparent",
            color: "#FF6F00",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java",
          style: {
            color: "#5382A1",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#387EB8",
          },
        },
      ],
    },
    {
      title: "Nuvem Infra Arquitetura",
      fileName: "CloudInfraImg",
      skills: [
        "· Experiência ampla em trabalhar em diversas plataformas de nuvem.",
        "· Habilidade na hospedagem e manutenção de sites em instâncias de máquinas virtuais, integrando de forma eficiente bancos de dados.",
        "· Implantação de modelos avançados de aprendizado profundo na nuvem para utilização eficaz em dispositivos móveis.",
        "· Estabelecendo com maestria trabalhos de streaming entre bancos de dados e servidores, tanto na GCP quanto na AWS.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#EA4535",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFC400",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#4AA73C",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2396ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326DE6",
          },
        },
      ],
    },
    {
      title: "Design UI/UX",
      fileName: "DesignImg",
      skills: [
        "· Criando interfaces de usuário esteticamente atraentes para aplicativos móveis e web.",
        "· Personalizando designs de logotipo com perfeição e desenvolvendo logotipos distintos desde o início.",
        "· Estruturando o fluxo contínuo das funcionalidades do aplicativo para otimizar a experiência do usuário.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF61F6",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF9A00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#07092D",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#E2A116",
      },
      profileLink: "https://leetcode.com/gabr1elazevedo/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#00EB64",
      },
      profileLink: "https://www.hackerrank.com/gabr1elazevedo/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5C463B",
      },
      profileLink: "https://www.codechef.com/users/gabr1elazevedo/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#2C3454",
      },
      profileLink: "https://www.hackerearth.com/gabr1elazevedo/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/gabr1elazevedo/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidade Anhanguera",
      subtitle: "Engenharia de Software · Bacharelado",
      logo_path: "ahanguera_logo.png",
      alt_name: "Ahanguera",
      duration: "Out 2024 - Presente",
      descriptions: [
        "· I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "· Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "· I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.anhanguera.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiências",
  subtitle: "Trabalhos, Estágios e Voluntários",
  description:
    "Trabalhei com muitas startups em evolução como desenvolvedor de ML e DL, designer e arquiteto de software. Também trabalhei com algumas empresas bem estabelecidas, principalmente como desenvolvedor de IA. Adoro organizar eventos e é por isso que também estou envolvido com muitas comunidades opensource como representante.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabalhos",
      work: true,
      experiences: [
        {
          title: "Assistente de Suporte de T.I",
          company: "MMarra Distribuidora Automotiva",
          company_url: "https://www.mmarra.com.br/",
          logo_path: "mmarra_logo.png",
          duration: "Mar 2024 - Presente",
          location: "Ribeirão Preto, SP · Presencial",
          description:
            "· Minha primeira incursão na Tecnologia da Informação foi fundamental para a aquisição, aplicação e desenvolvimento de conhecimentos profissionais em um ambiente corporativo. Essa experiência foi decisiva para meu crescimento, permitindo-me aprender de forma significativa e contribuir positivamente para as atividades do trabalho.",
          color: "#007bd1",
        },
        {
          title: "Assistente de Suporte de T.I",
          company: "MMarra Distribuidora Automotiva",
          company_url: "https://www.mmarra.com.br/",
          logo_path: "mmarra_logo.png",
          duration: "Mar 2024 - Presente",
          location: "Ribeirão Preto, SP · Presencial",
          description:
            "· Minha primeira incursão na Tecnologia da Informação foi fundamental para a aquisição, aplicação e desenvolvimento de conhecimentos profissionais em um ambiente corporativo. Essa experiência foi decisiva para meu crescimento, permitindo-me aprender de forma significativa e contribuir positivamente para as atividades do trabalho.",
          color: "#007bd1",
        },
      ],
    },
    {
      title: "Estágios",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description: "",
          color: "",
        },
      ],
    },
    {
      title: "Voluntários",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description: "",
          color: "",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos",
  description:
    "Meus projetos utilizam uma grande variedade de ferramentas tecnológicas de última geração. Minha melhor experiência é criar projetos de Data Science e implantá-los em aplicações web usando infraestrutura em nuvem.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicações",
  description:
    "Acumulei experiência em várias publicações, inclusive algumas que tive o privilégio de autoria própria. Meu percurso profissional abrange uma diversidade de contextos editoriais, enriquecendo minha habilidade na criação de conteúdo e na expressão escrita.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contatos",
    profile_image_path: "profile_picture.png",
    description:
      "Estou disponível em quase todas as redes sociais. Você pode me enviar uma mensagem, responderei dentro de 24 horas.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Para o empoderamento fundamental individual, gosto de escrever lições poderosas que criem impacto em cada leitor individualmente para mudar a essência de seu caráter.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Endereço",
    subtitle: "R. Humberto Ortolan 450, Ap 15",
    locality: "Sertãozinho, SP",
    country: "Brasil",
    region: "São Paulo",
    postalCode: "14160-210",
    streetAddress: "R. Humberto Ortolan 450",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/nNMxz2fTVGhMW9z66",
  },
  emailSection: {
    title: "E-mail",
    subtitle: "gabrielaffonsoazevedo@outlook.com.br",
  },
  phoneSection: {
    title: "Telefone",
    subtitle: "+55 (16) 99731-2515",
  },
};

export {
  certifications,
  competitiveSites,
  contactPageData,
  degrees,
  experience,
  greeting,
  projectsHeader,
  publications,
  publicationsHeader,
  seo,
  settings,
  skills,
  socialMediaLinks
};

