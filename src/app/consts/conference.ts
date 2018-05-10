import { Room, Time  } from '../consts';
import { Conference } from '../models';

export const ConferenceKeynote: Conference = {
  enable: true,
  time: Time.timeKeynote,
  room: Room.room1,
  title: `Omnimed, une entreprise inspirante de la région de l’Estrie.`,
  resume: `
    Pour cette seconde édition, nous avons le plaisir d'accueillir Xavier Boilard, 
    président-directeur général de l’entreprise Omnimed, une entreprise inspirante de la 
    région de l’Estrie.<br><br>
    Fondée par le Dr Jean Boilard en 1984, la compagnie se nomme alors Caduceus et est 
    spécialisée dans le développement et la commercialisation d’outils de gestion pour les 
    cliniques médicales. <br><br>
    Convaincu que le besoin en outils de gestion est beaucoup plus grand que ce qu’offre Caduceus, 
    il fonde alors Omnimed, en 1998. <br><br> 
    « Mon père disait que lorsqu'il avait commencé à pratiquer, la médecine était une science, 
    et que c'était devenu un art; celui de deviner ce que tu ne sais pas, car le patient ne 
    donne jamais toute l'information et le médecin a très rarement accès à toutes ses 
    consultations précédentes. À la fin de la journée, il était hanté par le doute, l'idée 
    qu'il avait pu se tromper et faire la mauvaise déduction. C'est pour réduire ce doute 
    qu'il a imaginé un dossier électronique partagé. » - Xavier Boilard, PDG d'Omnimed et 
    fils de Dr Boilard <br><br>
    Depuis ses débuts, l’entreprise est l’une des pionnières sur le marché émergent de 
    l’informatique médicale au Québec et est devenue au fil des années leader en matière 
    de développement logiciel.<br><br>
  `,
  company: `Omnimed`,
  presenters: [
    {
      name: `Xavier Boilard`,
      picture: `assets/speakers/xavier-boilard.png`,
      bio: `<br>`,
    },
  ],
};

export const ConferenceAm1: Conference[] = [
  {
    enable: true,
    time: Time.timeAM1,
    room: Room.room1,
    title: `Faciliter le passage d'une organisation réactive à créative`,
    resume: `
      Les organisations d'aujourd'hui sont des entités qui doivent désormais composer 
      avec une complexité sans cesse grandissante. Les enjeux multiculturels, multi-générationnels, 
      les besoins changeants, la technologie, sont tous de plus en plus complexes. Les structures 
      organisationnelles en place peinent à maintenir le cap et l'adaptation est difficile, 
      ce qui cause des délais, de la frustration et du stress.<br><br>

      Il y a un besoin de naviguer collectivement à travers cette complexité en tant qu'organisation 
      afin de répondre au besoin d'adaptation rapide. Les entreprises d'aujourd'hui cherchent à créer 
      une expérience plus riche, autant pour leurs clients que leurs employés. La communication, les 
      relations et les échanges deviennent alors encore plus importants, mais sont aussi plus complexes.<br>
      - Comment faciliter la communication entre les différents secteurs de l'organisation?<br>
      - Comment engager les gens sur une base quotidienne quant à une intention globale?<br>
      - Comment connecter les gens entre eux pour créer un mouvement cohérent?<br>
      - Comment éviter les mauvaises interprétations?<br><br>
      
      Pour faire tout cela, il faut développer des compétences qui sont aujourd&#39;hui majoritairement 
      déficientes dans la plupart des entreprises :<br><br>

      - Prise de perspective inter unité/département<<br>
      - Initier et entretenir des conversations de qualité<br>
      - Présence complète<br>
      - Connaissance du fonctionnement humain<br>
      - Intelligence émotionnelle<br>
      - Poser les bonnes questions<br><br>
      
      Que ce soit entre deux personnes, une équipe de travail, un département, un secteur ou 
      l'entreprise tout entière, la facilitation organisationnelle dynamise les échanges à tous 
      ces niveaux et aide à dissoudre les silos qui freinent l'évolution d'une organisation. La 
      conférence se veut une exploration de ce sujet ainsi qu'une expérience directe de la facilitation 
      pour comprendre l'effet sur un groupe et les répercussions sur l’organisation.
    `,
    company: `Pyxis`,
    presenters: [
      {
        name: `Dave Jacques`,
        picture: `assets/speakers/dave-jacques.png`,
        bio: `
          Facilitateur organisationnel et coach Agile, Dave Jacques aide les groupes et les individus 
          à développer leur plein potentiel en leur offrant un environnement créatif pour comprendre et 
          grandir. Il est passionné par les dynamiques d’équipe, le développement humain et l’utilisation 
          de l’ensemble du corps dans la recherche d’une communication de qualité.
        `,
      },
      {
        name: `Gilles Duchesne`,
        picture: `assets/speakers/gilles-duchesne.png`,
        bio: `
          Passionné par l’humain, l’innovation et les idées émergentes, Gilles se spécialise à créer 
          et entretenir du mouvement et de l’alignement dans les organisations en misant avant tout sur 
          une durabilité humaine. Il agit en tant que facilitateur organisationnel et coach Agile avec 
          Pyxis Technologie depuis 8 ans et oeuvre entre autres auprès des grandes organisations 
          gouvernementales, financières et du domaine des assurances à Québec
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timeAM1,
    room: Room.room2,
    title: `Perspective d'IBM Bromont sur le rôle des gestionnaires de première ligne en mode Lean/Agile`,
    resume: `
      Le rôle de gestionnaire de première ligne lors d'une transformation agile d'une organisation 
      n'est pas toujours très clair. Bien qu'il existe un peu de littérature sur le sujet, le focus 
      est surtout mis sur le concept d'équipe autogéré. Quel est donc le rôle d'un gestionnaire 
      pendant et après une transformation Agile?<br><br>
      Une équipe de gestionnaire de différentes fonctions de l'entreprise s'est penchée sur cette 
      question afin de définir ce rôle. L'objectif de la conférence est de présenter cette réflexion 
      et les applications pratiques que nous vivons en lien avec cela chez IBM Bromont.
    `,
    company: `IBM`,
    presenters: [
      {
        name: `Benoit Lapointe`,
        picture: `assets/speakers/benoit-lapointe.png`,
        bio: `
          Benoit Lapointe est à l'emploi d'IBM Bromont depuis 2001. Depuis près de 10 ans, 
          il a expérimenté plusieurs approches : Rational Unified Process, Lean Software Developpement 
          (Kanban), eXtreme Programming, Scrum et Scaled Agile Framework.<br><br>Il est IBM Systems 
          Agile Champion pour l'usine de Bromont ce qui fait de lui un acteur important à la mise 
          en place de l'approche Agile/Scrum pour l'ensemble de l'usine. Dans le cadre de sa maîtrise 
          en administration des affaires (MBA), Benoit s'est intéressé à l'intégration des valeurs 
          et principes agiles dans la gestion de projet non relié aux technologies de l'information. 
          En plus d'accompagner une équipe de recherche et développement dans son parcours vers 
          l'agilité, il est impliqué au niveau des différents bureaux de projets de l'usine de Bromont 
          pour faire de l'accompagnement.<br><br>Finalement, Benoit est chargé de cours pour l’école 
          de gestion de l’université de Sherbrooke. Il enseigne le cours de gestion des opérations 
          pour les étudiants à la maitrise en administration des affaires (MBA).
        `,
      }
    ],
  },
  {
    enable: true,
    time: Time.timeAM1,
    room: Room.room3,
    title: `DDD et programmation fonctionnelle : des alliés naturels`,
    resume: `
      La popularité du DDD est à la hausse dans les dernières années avec la montée des 
      micro-services et dans un contexte d’architecture évolutive “Agile”.<br><br>

      Lorsqu’on pense au sujet du Domain-Driven Design, on pense naturellement à une 
      implémentation dans un langage orienté objet. Mais, peut-on imaginer des Bounded 
      Contexts et des Shared Kernels lorsque nous utilisons un paradigme axé sur les 
      fonctions? C’est ce que vous apprendrez dans cette présentation.<br><br>
    
      En utilisant des requis réalistes, nous modéliserons un domaine d’affaires avec le 
      langage F#. Tout en bâtissant du code sous la forme d’une documentation exécutable, 
      nous travaillerons à éliminer le plus d’effets de bord possibles en rendant les états 
      illégaux non-représentables.<br><br>
    
      Aucune connaissance de F# n’est nécessaire pour apprécier la présentation. Il s’agit 
      d’une introduction.<br><br>
      <strong>Public cible</strong>: Développeurs.
    `,
    company: `Elapse`,
    presenters: [
      {
        name: `Olivier Lafleur`,
        picture: `assets/speakers/olivier-lafleur.png`,
        bio: `
          Curieux de nature et aimant explorer de nouvelles technologies, Olivier aime aider les gens 
          à avoir plus de plaisir à développer du logiciel de qualité. Il agit chez Elapse en tant 
          que mentor technique et il aide à mettre en place de nouveaux processus qui visent à améliorer 
          le professionnalisme des programmeurs. Olivier est aussi enseignant au Cégep, où il adore 
          transmettre sa passion des bonnes pratiques et du clean code.
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timeAM1,
    room: Room.room4,
    title: `Kanban: livrer plus vite sans noyer vos équipes`,
    resume: `
      Lors de cet atelier, vous serez en compétition avec plusieurs équipes Kanban et devrai 
      livrer un maximum de valeur à l'aide de votre système Kanban. Avec un animateur à la 
      facilitation, un coach expert Kanban pour chacune des équipes et un environnement de 
      simulation original, vous aurez tout en main pour comprendre et approfondir les principes 
      et les pratiques Kanban.<br><br>

      Vous devrez travailler en équipe afin de faire les bons choix dans l'objectif de maximiser 
      la valeur livrée à vos clients.<br><br>
      
      Alors, serez-vous les champions du débit de valeur?
    `,
    company: `Facilité`,
    presenters: [
      {
        name: `Éric Lessard`,
        picture: `assets/speakers/eric-lessard.png`,
        bio: `
          Éric Lessard est un coach et praticien agile depuis plus de 10 ans. Il a occupé un éventail 
          de rôles différents dans les équipes agiles comme développeur, analyste, chef d’équipe, 
          coordonnateur et coach. Il préconise une approche pragmatique et concrète à l’agilité, 
          visant la livraison de résultats par des équipes humaines et engagées.
        `,
      },
      {
        name: `Alex Bergeron`,
        picture: `assets/speakers/alex-bergeron.png`,
        bio: `
          Formé en gestion de systèmes Kanban, Alex est un passionné de réalisation qui est devenu, au 
          travers de ses rôles de leadership, obsédé par la livraison de valeur en développement logiciel. 
          Il est maintenant un vrai geek de l’agilité et de la pensée systémique qui prend plaisir, de par 
          sa carrière en coaching, à partager ses connaissances et voir naître de fortes cultures d’ingénierie.
        `,
      },
    ],
  },
];

export const ConferencePm1: Conference[] = [
  {
    enable: true,
    time: Time.timePM1,
    room: Room.room1,
    title: `Lean Café: Jasons peu, mais jasons bien!`,
    resume: `
      Le comité Agile Tour Sherbrooke vous invite à une session Lean Café à propos de vos questions 
      et vos défis concernant l’agilité. 
      Le Lean Café est un atelier pour parler brièvement et de manière pertinente d’un ou plusieurs 
      sujets. On commence par une discussion de 7 minutes. Au terme de la période, le groupe décide 
      si la discussion mérite de continuer ou pas, par un vote à main levée. Si le groupe vote pour 
      une prolongation, on poursuit la discussion en réduisant la période à 5 minutes. Et l’on 
      continue selon l’envie et l’énergie du groupe. 
      <br><br>Pour en savoir plus, consulter le 
      site 
      <a href="http://agilecoffee.com/leancoffee/" target="_blank">http://agilecoffee.com/leancoffee/</a>.<br><br>
      Mathieu Boisvert, membre du comité organisateur, sera le facilitateur de la rencontre.<br><br>
      <strong>Apportez vos sujets! Mettez votre expertise à contribution!</strong>
    `,
    company: `Agile Sherbrooke`,
    presenters: [
      {
        name: `Mathieu Boisvert`,
        picture: `assets/speakers/mathieu-boisvert.png`,
        bio: `
          Expert en Agilité depuis maintenant 2004, Mathieu est un acteur important dans l’établissement 
          de la stratégie d’adoption des approches agiles pour de nombreuses équipes et entreprises.<br><br>

          Mathieu est également, un chargé de cours à la Chaire de gestion de projet de l’UQAM et au 
          Centre de formation continue de la Faculté de génie de l’Université de Sherbrooke, 
          un formateur reconnu par Scrum.org, un conférencier actif dans la communauté agile 
          et le coauteur, avec Sylvie Trudel, du livre « Choisir l’Agilité : du développement 
          logiciel à la gouvernance », paru dans la collection InfoPro chez DUNOD.
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timePM1,
    room: Room.room2,
    title: `Quand les contributeurs tardent à contribuer: les silos organisationnels qui freinent souvent la vélocité des équipes.`,
    resume: `
      John F Kennedy a dit, en 1961 "My fellow Americans, ask not what your country can do for 
      you, ask what you can do for your country". On pourrait adapter cette phrase pour plusieurs 
      équipes en soutien à des projets de solutions d'affaires ... "Oh toi projet, qui a besoin 
      de mon soutien pour accomplir ta mission, comment puis-je t'aider efficacement ?". La 
      réalité est tout autre, malheureusement... Les équipes de support - qu'elles soient 
      technologiques, légales, communicationnelles - sont souvent organisées en silo hiérarchiques 
      et sont régies par leurs propres règles et contraintes. L'appel à ces équipes devient 
      souvent - pour les équipes agiles - un parcours du combattant avec une multitude de 
      petites batailles. Nous explorerons, au cours de cette conférence, l'état de lieux et 
      les pistes de réflexions et d'améliorations qui pourraient aider ces équipes essentielles 
      à soutenir efficacement les projets agiles.Un peu de Lean, un grain de Management 3.0, 
      un soupçon de gestion matricielle ... les solutions possibles sont probablement un amalgame 
      d'outils et de techniques. Venez explorer avec nous !
    `,
    company: `Levio`,
    presenters: [
      {
        name: `Nathalie Ferron`,
        picture: `assets/speakers/nathalie-ferron.png`,
        bio: `
          Nathalie Ferron possède plus de trente années d’expérience dans le domaine des 
          technologies de l’information. Depuis les dix dernières années, celle-ci est 
          principalement intervenue dans des mandats nécessitant de créer des opportunités 
          d’innovation et de changements organisationnels afin à mettre en place des gains 
          de productivité, des diminutions de budget tout en gardant la qualité et la 
          satisfaction des milieux d’affaires. Nathalie navigue aisément dans différents 
          concepts de transformation et de bonnes pratiques principalement avec des approches 
          agile et lean.<br><br>

          Elle a eu la chance de participer activement à la mise en place de contextes agiles 
          dans le cadre de grandes transformations organisationnelles. Elle accompagne également 
          les équipes projet afin de les aider à faire un virage plus axé sur le produit, la 
          solution d'affaires.<br><br>
        
          Reconnue par ses pairs comme une excellente communicatrice, elle anime régulièrement 
          des ateliers de facilitations et donne de la formation et des conférences sur son 
          sujet préféré : l'agilité sous toutes ses formes, une agilité agnostique qui reconnait 
          qu'aucun modèle n'est LA recette, et que le "quoi" et le "comment" doivent d'abord être 
          déterminés en fonction du client, de son contexte et d'une vision stratégique plus 
          grande que la simple initiative.<br><br>
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timePM1,
    room: Room.room3,
    title: `Fatigué(e)s de mijoter les mêmes recettes ? Portez l’esprit d’innovation à ébullition !`,
    resume: `
      A toute époque, des défis impossibles aux yeux de tous ont été relevés par des équipes emmenées 
      par des individus « ordinaires » considérés depuis comme des visionnaires.<br><br>

      - Comment dépasser nos limites pour croire en nos rêves?<br>
      - Comment chacun de nous peut partager sa vision d'un meilleur à venir, d'un improbable possible?<br>
      - Comment amener nos collaborateurs à sortir des sentiers battus et réveiller en eux la flamme de 
      l’innovation?<br><br>
      
      Déroulement de la séance<br>
      En se prêtant à un jeu de rôles (nous sommes George Lucas rêvant d'aventures spatiales en 1973), 
      nous échangerons sur les limites à dépasser pour rendre le rêve possible et les moyens pour libérer 
      l'innovation avec ceux que nous aurons convaincu de suivre. Cet exercice fera apparaître une démarche 
      originale que le conférencier démontrera en réalisant un rêve personnel devant les participants.<br><br>
      
      Audience ciblée<br>
      Tout le monde. Les participants qui retireront le plus de cette conférence sont ceux qui entreront 
      avec l'envie sincère d'inspirer leur entourage à sortir des sentiers battus.<br>
    `,
    company: `Facilité`,
    presenters: [
      {
        name: `Valery Germain`,
        picture: `assets/speakers/valery-germain.png`,
        bio: `
          Conseiller en informatique depuis vingt ans, baignant avec bonheur dans l’agilité depuis 2010, 
          j’ai découvert l’agilité dans un projet Scrum et n’ai jamais regardé en arrière depuis. 
          J’interviens depuis comme Scrum Master, coach agile et formateur. Depuis deux ans, je mets 
          ma passion, mes connaissances, ma créativité et mon savoir-être au service de la transformation 
          agile d’un grand organisme public. Mon implication dans le Centre d’Excellence Agile de Facilité 
          me permet de nourrir mon insatiable envie de faire rayonner l’agilité.
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timePM1,
    room: Room.room4,
    title: `Atelier de User Story Mapping`,
    resume: `
      Le User Story Mapping est une activité collaborative très simple. On explore les besoins d'un usager 
      alors qu'il utilise notre produit et on construit un modèle visuel de ces besoins.  L'activité 
      rend explicite la direction du produit sous la perspective de l'usager et facilite la planification 
      des mises en productions.<br><br>
      L'atelier suggéré permet aux participants de vivre pleinement l'expérience afin qu'ils puissent la 
      reproduire dans leur environnement. Il s'adresse autant aux développeurs, aux propriétaires de produits, 
      qu'aux Scrum masters.<br><br>
      But: Donner aux participants les outils et les connaissances afin qu'ils puissent incorporer le User 
      Story Mapping dans leur travail.
    `,
    company: `Pyxis`,
    presenters: [
      {
        name: `Christian Bélisle`,
        picture: `assets/speakers/christian-belisle.png`,
        bio: `
          Dans le domaine du développement logiciel depuis 2000, Christian s’est toujours démarqué 
          comme quelqu’un qui apprend rapidement et qui reste toujours à l’affût des nouveautés 
          technologiques. Grâce à son expérience, il est en mesure de s’adapter facilement aux 
          différents défis qui s’offrent à lui. C’est en 2006 qu’il a eu la chance de suivre un cours 
          de formation sur Scrum avec Pyxis Technologies et ce fut le début d’une longue relation 
          avec l’Agilité. Depuis ce temps, il porte une attention constante à la recherche de méthodes 
          de travail optimales, qu’elles soient de nature technologique ou organisationnelle. 
          Lorsque les bases du projet sont établies, il sait s’investir corps et âme dans la livraison 
          de produits exceptionnels. Ayant joint l’équipe Pyxis en 2016, Christian souhaite de tout 
          son cœur pouvoir améliorer le monde, une itération à la fois
        `,
      },
      {
        name: `Luc St-Laurent`,
        picture: `assets/speakers/luc-stlaurent.png`,
        bio: `
          Luc est un professionnel certifié Scrum (CSP) et un coach Agile à Pyxis. Il a 
          commencé son parcours dans les technologies il y a plus de 20 ans, bien avant 
          d’adopter les valeurs Agiles en 2007 comme Product Owner. Facilitateur et coach, 
          il se dévoue maintenant à aider les équipes et leurs gestionnaires à mieux collaborer 
          afin de livrer un meilleur produit entre les mains de l’utilisateur.<br><br>

          En tant que conférencier, Luc a offert des conférences et des ateliers aux communautés 
          d’Agile Québec et d’Agile Montréal ainsi qu’aux participants des Agile Tours de Québec, 
          Montréal et Sherbrooke.
        `,
      },
    ],
  },
];

export const ConferencePm2: Conference[] = [
  {
    enable: true,
    time: Time.timePM2,
    room: Room.room1,
    title: `Ce que Scrum n’est pas`,
    resume: `
      Scrum est un cadre qui a fait ses preuves. Malheureusement, beaucoup de fausses croyances 
      à propos de ce que Scrum implique et représente causent l’échec de nombreuses transformations 
      agiles. Que ce soit pour vous outiller en vue de votre prochaine transformation ou pour 
      diagnostiquer vos pratiques actuelles, cette conférence vous propose d’explorer plusieurs 
      de ces croyances ainsi que des pistes de solution.
    `,
    company: `Coveo`,
    presenters: [
      {
        name: `Jean-Francois Morel`,
        picture: `assets/speakers/jeanfrancois-morel.png`,
        bio: `
          Jean-François Morel, 43ième de Génie Informatique, Sherbrooke et MBA en affaires 
          électroniques, Laval. Agiliste de vocation et fan fini de jeux de société (Individuals 
          and interactions…), il a directement supervisé plus d'une dizaine d'équipes au cours 
          des 12 dernières années et autant de transformations agiles dans des domaines aussi 
          variés que le jeu vidéo, la dentisterie numérique et la recherche intelligente. 
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timePM2,
    room: Room.room2,
    title: `Livrer de la valeur en production à chaque itération grâce à l’intégration et au déploiement en continu (CI/CD)`,
    resume: `
      L’intégration continue (CI) et le déploiement en continu (CD) sont souvent considérées comme 
      des pratiques purement technologiques, ou liées à la mise en production. Pourtant, avec la 
      gestion du code source et les principes itératifs, nous considérons que ce sont des piliers 
      essentiels d’une pratique agile saine et efficace. Chez PMCtire.com, ces principes constituent 
      le prisme principal à travers lequel nous nous appuyons pour livrer de la valeur en production 
      à chaque itération, soit à chaque semaine.<br><br>

      Venez entendre comment ces principes itératifs, l’intégration continue et le déploiement continus 
      nous ont permis d’accélérer et de mieux contrôler ces boucles itératives et nos mises en 
      production. Nous expliquerons comment Gitlab et ses outils de CI/CD (qui sont Open Source) 
      nous aident à supporter notre pratique. À travers notre retour d’expérience, nous poserons 
      un regard pragmatique et critique sur les pratiques Agile et Scrum. Intéressant peu importe 
      l’outil que vous utilisez.
    
    `,
    company: `PMC Tire`,
    presenters: [
      {
        name: `Benoit St-Andre`,
        picture: `assets/speakers/benoit-st-andre.png`,
        bio: `
          Benoit est Vice-président Technologies / CTO chez PMCtire.com. Durant les 20 dernières années, 
          Benoit a contribué à la vision technologique et l’implémentation de technologies Web à titre 
          de gestionnaire de développement, de conseiller technologique et de consultant pour plusieurs 
          organisations du monde de l’entreprise, du gouvernement et de l’éducation, particulièrement 
          en lien avec les logiciels libres et Open Source. Il oeuvrait précédemment à titre d’intrapreneur 
          à l’innovation au sein de Wolters Kluwer Canada où il dirigeait une équipe de développement de
          produits innovants et a contribué à l’amélioration des processus agile pour les équipes de 
          développement. 
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timePM2,
    room: Room.room3,
    title: `10 erreurs fréquentes à éviter pour un Product Owner`,
    resume: `
      Entre la théorie et la pratique du rôle du PO, nous allons partager notre expérience pratique de
      coaching de PO à travers des exemples concrets du vécu des équipes Scrum en identifiant les
      erreurs potentielles et proposer des pistes de solutions pour éviter ces erreurs.
    `,
    company: ``,
    presenters: [
      {
        name: `Mohamed Arezki `,
        picture: `assets/speakers/mohammed-arezki.png`,
        bio: `
          Mohamed est un coach en transformation Agile et Scrum Master senior depuis plus de 5 ans.  Il
          accompagne actuellement les équipes de développement et de projets à  la banque nationale. Il
          a plus de dix ans d’expérience dans la gestion des équipes de développement (Software,
          Hardware et Contrôle de qualité). Il a participé à la mise en place de l’approche Agile/Scrum
          chez Sherweb, CCH et BNC avec des équipes multidisciplinaires et auto-organisées. Il est certifié
          CSM et PMI-ACP. Mohamed est un des fondateurs et membre actif de la Communauté Agile de
          Sherbrooke. Il a obtenu sa maîtrise en informatique à l’université de Sherbrooke en 2001.
        `,
      },
    ],
  },
  {
    enable: true,
    time: Time.timePM2,
    room: Room.room4,
    title: `Management 3.0 par la pratique`,
    resume: `
      Le management en entreprise est encore une question de hiérarchie, avec des donneurs 
      d’ordres et des exécutants. La tendance amène votre organisation à prendre un virage 
      agile, avec des équipes auto-organisées. Il ne s’agit plus uniquement d’un rapport 
      hiérarchique entre salariés mais d’une collaboration basée sur la communication et 
      l’échange. Mais comment mettre cette collaboration concrètement en pratique ?  Cet 
      atelier vise à vous mettre en situation à travers quelques outils du management 3.0 
      simples et faciles à mettre en place. Vous pourrez ainsi expérimenter les principes 
      du Management 3.0 exposés par Jurgen Appelo et réfléchir à la mise en place de ces 
      outils dans le contexte de votre organisation.
    `,
    company: `Levio`,
    presenters: [
      {
        name: `Jean-Marie Perrono`,
        picture: `assets/speakers/jm-perrono.png`,
        bio: `
          Spécialisé en architecture des systèmes et en méthodologies de développement, notamment 
          dans des contextes orientés objets, Jean-Marie Perrono a tout naturellement été conduit 
          à se passionner dès 2003 pour les approches agiles comme Scrum, d'abord en tant que membre 
          d'équipe, puis en tant que Scrum Master certifié et coach Agile.<br><br>
          L'agilité est devenue sa seconde passion. Du développement piloté par les tests aux bonnes 
          pratiques de transformation agile des organisations, il accompagne, il forme et conseille.<br><br>
          Bon pédagogue, son expérience lui permet maintenant de situer ses interventions au niveau de la 
          formation et de l'accompagnement des équipes dans leur transition vers l'agilité, ainsi que de la 
          sensibilisation des organisations aux impacts induits par ces pratiques.
        `,
      },
    ],
  },
];