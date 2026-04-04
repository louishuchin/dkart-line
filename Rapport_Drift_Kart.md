

## 1

## <


























MMPE – Rapport Karting de Drift
## A25
## Maël Perdoux, Antoine Daroux, Louis Huchin

## 2

## Sommaire
INTRODUCTION GÉNÉRALE .............................................................................................. 4
PARTIE I – CADRAGE DU PROJET ET APPROCHE MÉTHODOLOGIQUE .................................. 4
I.1 Présentation du projet ................................................................................................. 4
I.2 Organisation de l’équipe et gestion de projet .............................................................. 8
I.3 Planification et jalons du projet ................................................................................. 10
PARTIE II – Analyse du kart donneur et étude fonctionnelle du drift ................................... 12
II.1 Étude du premier prototype et du kart donneur ........................................................ 12
II.2 Étude des spécificités du drift .................................................................................. 15
II.3 Étude des paramètres de direction ........................................................................... 16
PARTIE III – CONCEPTION MÉCANIQUE ET CAO ................................................................. 23
III.1 Architecture générale du kart .................................................................................. 23
III.2 Conception CAO globale .......................................................................................... 26
III.3 Conception du châssis ............................................................................................ 32
III.3.1 Géométrie générale du châssis............................................................................. 32
III.3.2 Répartition des masses ........................................................................................ 32
III.3.3 Intégration du réglage d’assiette .......................................................................... 33
III.3.4 Préparation à la fabrication et logique d’usinage .................................................. 34
III.3.5 Adaptations successives et évolution du châssis ................................................. 34
III.4 Étude et choix du matériau du châssis .................................................................... 34
III.5 Conception de la direction et des fusées ................................................................. 37
III.6 Paramétrisation avancée de la CAO ........................................................................ 39
PARTIE IV – DIMENSIONNEMENT DU GROUPE MOTOPROPULSEUR ................................... 40
IV.1 Définition des besoins énergétiques ....................................................................... 40
IV.2 Dimensionnement du moteur .................................................................................. 41
IV.3 Choix de la transmission.......................................................................................... 42
IV.4 Choix de la batterie .................................................................................................. 43
IV.5 Choix du contrôleur ................................................................................................. 46
PARTIE V – PRÉPARATION À LA FABRICATION..................................................................... 47
V.1 Anticipation des procédés de fabrication ................................................................. 47
V.2 Conception des gabarits et outillages ...................................................................... 48
V.3 Préparation des fichiers de fabrication ..................................................................... 51
PARTIE VI – FABRICATION ET RÉALISATION ........................................................................ 53
VI.1 Découpe et soudure du châssis ............................................................................... 53
VI.2 Usinage des fusées avant ........................................................................................ 56

## 3

VI.3 Découpe plasma des pièces plates ......................................................................... 58
VI.4 Gestion des écarts et retards ................................................................................... 59
PARTIE VII – RECHERCHE DE SPONSORS ET FINANCEMENT .............................................. 61
VII.1 Modèle de financement .......................................................................................... 61
VII.2 Recherche de sponsors .......................................................................................... 61
PARTIE VIII – TRAVAUX RESTANTS ET PRÉVISIONNEL DU PROJET ...................................... 62
PARTIE IX - CONCLUSION GÉNÉRALE ................................................................................. 63





## 4

## PROJET « KARTING DE DRIFT »
## INTRODUCTION GÉNÉRALE
La conception d’un véhicule dédié au drift impose de repenser les principes classiques
du  karting,  où  l’adhérence  maximale  n’est  plus  l’objectif  principal.  Le  contrôle  du
glissement  du  train  arrière  devient  alors  un  enjeu  central,  influençant  directement  les
choix de conception mécanique, de géométrie de direction et de motorisation.
Ce  rapport  s’inscrit  dans  cette  problématique  et  présente  une  démarche  de
développement complète appliquée à un kart électrique conçu spécifiquement pour le
drift.  Il  expose  les  méthodes  employées,  les  choix  techniques  retenus  ainsi  que  les
compromis   réalisés  tout  au  long  du  projet,  depuis  les  phases  d’étude  et  de
dimensionnement jusqu’à la fabrication et aux premiers essais.
L’objectif de ce document est de formaliser l’approche d’ingénierie mise en œuvre et de
mettre  en  évidence  les  enseignements  techniques  et  méthodologiques  tirés  de  ce
travail.

## PARTIE I – CADRAGE DU PROJET ET
## APPROCHE MÉTHODOLOGIQUE
I.1 Présentation du projet
Le projet « Karting de Drift », mené sous le nom DHP Dynamics, s’inscrit dans le cadre
d’un projet étudiant réalisé au cours du semestre A25 à l’Université de Technologie de
Troyes.  L’objectif  principal  est  la  conception  et  la  réalisation  d’un  kart  électrique
spécifiquement  dédié  à  la  pratique  du  drift,  discipline  automobile  caractérisée  par  un
glissement contrôlé du train arrière tout en conservant la maîtrise de la trajectoire.
Contrairement   à   un   karting   classique,   un   kart   de   drift   impose   des   contraintes
mécaniques   et   dynamiques   particulières,   notamment   en   termes   de   géométrie   de
direction,  de  répartition  des  masses  et  de  gestion  du  couple  moteur.  Le  projet  ne  se
limite   donc   pas   à l’assemblage  de  composants  existants,  mais  repose  sur  une
conception complète et sur mesure, allant de l’étude théorique jusqu’à la fabrication et
aux essais.

## 5

Ce projet vise également un objectif pédagogique fort : appliquer de  manière concrète
les   connaissances   acquises   en   mécanique,   conception   assistée   par   ordinateur,
dimensionnement, procédés de fabrication et gestion de projet, au travers d’un système
réel, fonctionnel et soumis à de fortes contraintes d’usage.
Objectifs du projet
Les objectifs du projet peuvent être regroupés en trois catégories principales.
Objectifs techniques
- Concevoir un kart électrique capable de drifter de manière fluide et contrôlée.
- Atteindre une plage de fonctionnement comprise entre 25 et 35 km/h, avec une
vitesse maximale d’environ 45 km/h.
- Développer  une direction  à  grand  angle  de  braquage adaptée  au  drift,  avec  un
réglage possible de tous les angles.
- Assurer une fiabilité mécanique compatible avec une utilisation répétée.
- Intégrer un groupe motopropulseur électrique performant et réglable.
Objectifs pédagogiques
- Mettre en pratique les méthodes de conception mécanique complète.
- Apprendre  à  gérer  un  projet  réel  avec  contraintes  de  temps,  de  budget  et  de
moyens.
- Travailler sur des problématiques concrètes de fabrication et d’assemblage.
- Développer une approche critique face aux écarts entre théorie et pratique.
Objectifs humains et organisationnels
- Travailler en équipe sur un projet technique de longue durée.
- Répartir efficacement les tâches en fonction des compétences.
- Communiquer avec des fournisseurs, des techniciens et des encadrants.
- Gérer les imprévus et adapter la stratégie du projet en conséquence.


## 6

Contraintes de fabrication
Le projet de karting de drift s’inscrit dans un cadre universitaire, ce qui implique plusieurs
contraintes fortes ayant directement influencé les choix techniques et la méthodologie
de  conception.  Contrairement  à  un  contexte  industriel,  les  ressources  financières,  les
moyens de production et le temps disponible sont limités et imposés. L’objectif du projet
n’a  donc  pas  été  de  rechercher  une  optimisation  théorique  maximale,  mais  de
développer  une  solution  techniquement  cohérente,  réalisable  et  fiable,  en  adéquation
avec ces contraintes.

1) Contraintes budgétaires
Le  budget  du  projet  est  limité  à  un  cadre  étudiant.  Cette  contrainte  a  conduit  à  un
compromis  permanent  entre  performances  attendues  et  coûts  engagés.  Les  choix
techniques ont été orientés vers des solutions offrant un bon rapport performance/prix,
plutôt que  vers  des  solutions  haut  de  gamme  peu  compatibles  avec  les  moyens
financiers disponibles.
Dans cette optique, le recours à un kart donneur a permis de réduire significativement
les coûts en réutilisant des composants mécaniques éprouvés tels que l’essieu arrière,
le  système  de  freinage,  certains  éléments  de  transmission  et  de  direction.  Cette
stratégie a également permis de limiter les risques liés à la conception de composants
critiques à partir de zéro.
Les matériaux et procédés ont également été sélectionnés en fonction de leur coût, de
leur  disponibilité  et  de  leur  facilité  de  mise  en  œuvre.  Des  matériaux  standards,
largement  utilisés  en  construction  mécanique,  ont  été  privilégiés  afin  de  limiter  les
dépenses tout en garantissant une fiabilité suffisante pour l’usage visé.

2) Contraintes de fabrication
La  fabrication  du  kart  repose  essentiellement  sur  les  moyens  disponibles  dans  les
ateliers  de  l’UTT.  Ceux-ci  comprennent  principalement  des  machines  d’usinage
conventionnelles,  des  postes  de  soudure,  un  procédé  de  découpe  plasma  pour  les
pièces plates, ainsi que l’impression 3D pour la réalisation de gabarits.
Ces  moyens  imposent  certaines  limites  en  termes  de  précision  et  de  complexité
géométrique. La conception a donc été adaptée dès le départ aux capacités réelles de
fabrication, en privilégiant des géométries simples, des assemblages accessibles et des
solutions  robustes.  L’utilisation  de  la  découpe  plasma,  par  exemple,  nécessite

## 7

d’anticiper des tolérances plus larges que des procédés industriels plus précis, ce qui a
été intégré dans la conception des pièces concernées.
L’impression 3D a joué un rôle important comme outil d’aide à la fabrication, notamment
pour la réalisation de gabarits de soudure et de positionnement. Ces gabarits ont permis
d’améliorer la précision et la répétabilité des assemblages, en particulier pour les sous-
ensembles sensibles comme la direction.
3) Contraintes temporelles
Le projet s’inscrit dans la durée d’un semestre universitaire, avec des périodes de forte
charge académique et des créneaux d’accès aux ateliers limités. À cela s’ajoutent des
délais de livraison variables pour certains composants et matériaux.
Ces contraintes temporelles ont rendu la planification et l’anticipation essentielles. Les
différentes phases du projet (conception, approvisionnement, fabrication, assemblage)
ont dû être organisées de manière rigoureuse afin de limiter les pertes de temps et les
retards. Les choix techniques ont parfois été orientés vers des solutions plus simples et
plus rapides à mettre en œuvre, afin de garantir l’avancement global du projet dans les
délais impartis.

4) Élaboration d’un budget prévisionnel
Afin  de  maîtriser  l’impact  financier  et  d’éviter  les  dépenses  imprévues,  un  budget
prévisionnel a été établi dès les premières phases du projet. Il a permis :
- d’identifier  les  postes  les  plus  coûteux  (groupe  motopropulseur,  pièces
usinées, sous-traitance),
- d’anticiper  les  achats  incontournables  (acier,  consommables,  visserie,
roulements),
- de  comparer  différentes  stratégies  (réutilisation  donneur  vs  achat  neuf,
plasma vs laser, fabrication interne vs fournisseur),
- et de dimensionner une marge financière destinée aux aléas (erreurs, pièces
refaites, retards).
Ce budget a constitué un outil de décision : il ne s’agissait pas uniquement de lister des
coûts, mais de guider les choix techniques en fonction de leur faisabilité économique,
tout en conservant l’objectif de performance et de sécurité.



## 8

I.2 Organisation de l’équipe et gestion de projet
La réussite d’un projet technique de cette ampleur repose non seulement sur les choix
de  conception,  mais  également  sur  une  organisation  d’équipe  efficace  et  une
méthodologie de travail adaptée aux contraintes du cadre universitaire.

Composition de l’équipe
Le  projet  «  Karting  de  Drift  »  est  mené  par  une  équipe  composée  de  trois  étudiants.
Chacun des membres de l’équipe est impliqué dans l’ensemble du projet, depuis les
phases d’étude et de conception jusqu’aux étapes de fabrication et d’assemblage. Cette
implication  globale  permet  à  chaque  membre  de  conserver  une  vision  complète  du
système, indispensable pour un projet technique de cette ampleur.
Malgré cette implication transversale, une répartition des responsabilités s’est mise en
place de manière naturelle, en fonction des compétences, des affinités techniques et de
l’expérience de chacun. Cette organisation a permis d’améliorer l’efficacité du travail
tout  en  évitant  une  spécialisation  excessive  qui  aurait  pu  nuire  à  la  compréhension
globale du projet.

Répartition des rôles
La répartition des rôles au sein de l’équipe n’a pas été strictement figée, mais s’est
structurée  autour  de  grands  pôles  de  responsabilité.  Certains  membres  ont  été  plus
particulièrement  impliqués  dans  la  conception  mécanique  et  la  modélisation  CAO,
notamment pour le châssis et la direction, tandis que d’autres ont pris en charge des
aspects  liés  au  dimensionnement  du  groupe  motopropulseur,  à  l’intégration  des
composants électriques et à la gestion des approvisionnements.
Cette organisation flexible a permis d’assurer une continuité du projet, même en cas
d’indisponibilité ponctuelle d’un membre, et a facilité les échanges entre les différentes
parties  du  système.  Les  décisions  techniques  importantes  ont  systématiquement  été
discutées  collectivement  afin  de  garantir  leur  cohérence  globale  et  leur  compatibilité
avec les contraintes du projet.


## 9

Méthodologie de travail
La  méthodologie  de  travail  adoptée  repose  sur  une  progression  structurée,  allant  de
l’étude théorique vers la réalisation concrète. Une phase de recherche et d’analyse
approfondie a été menée en amont afin de définir les besoins, d’identifier les contraintes
spécifiques à la pratique du drift et de s’appuyer sur des solutions existantes lorsque
cela était pertinent.
La conception du kart a ensuite été réalisée de manière progressive à l’aide de la CAO,
et du  premier  prototype.  Les  modèles  ont  été  conçus  de  façon  paramétrée  afin  de
permettre des ajustements rapides des dimensions et des géométries, notamment pour
les sous-ensembles critiques comme la direction. Cette approche a facilité les itérations
successives et la possibilité d’essayer différentes configurations.
Les choix techniques ont été validés de manière continue par confrontation à la réalité
de  la  fabrication.  Chaque  décision  importante  a  été  évaluée  non  seulement  sur  des
critères  théoriques,  mais  également  en  fonction  de  sa  faisabilité  pratique  avec  les
moyens disponibles. Cette démarche itérative a permis d’anticiper certains problèmes
et de s’adapter rapidement aux imprévus rencontrés au cours du projet.

Outils utilisés
Plusieurs outils ont été utilisés afin de structurer le travail et d’assurer le suivi du projet.
La conception mécanique a été réalisée à l’aide d’un logiciel de CAO (Creo Parametric),
servant à la fois d’outil de conception, de validation géométrique et de support à la
fabrication.
La planification du projet a été assurée à l’aide d’outils simples de gestion du temps
(Plannings, agenda,  excel, matrice  de  décision, Clockify,...) permettant  de  définir  les
grandes étapes, d’identifier les jalons importants et de suivre l’avancement réel par
rapport au planning prévisionnel. Des comptes rendus réguliers ont été rédigés afin de
conserver une trace des décisions prises, de l’état d’avancement  et  des  difficultés
rencontrées.
L’ensemble de ces outils et méthodes a permis de maintenir une organisation claire tout
au long du projet et de garantir une bonne coordination entre les différentes phases de
conception, de fabrication et d’intégration.



## 10

I.3 Planification et jalons du projet
La planification constitue un élément essentiel dans la conduite d’un projet technique
de  cette  envergure.  Elle  permet  de  structurer  le  travail  sur  la  durée  du  semestre,
d’anticiper les besoins en ressources et d’identifier les étapes clés nécessaires à la
réussite  du  projet.  Une  planification  prévisionnelle  a  ainsi  été  établie  dès  le  début  du
projet afin de disposer d’une vision globale de son déroulement.

Planification prévisionnelle
Le semestre a été découpé en grandes phases successives, correspondant aux étapes
classiques d’un projet de conception mécanique. Ces phases comprennent :
- une phase d’études préliminaires et de recherche technique, destinée à définir
les besoins, les contraintes et les orientations générales du projet ;
- une phase de conception CAO complète du kart, intégrant le châssis, la direction
et l’implantation des différents sous-ensembles ;
- une    phase    de    préparation    et    de    lancement    de    la    fabrication,    incluant
l’approvisionnement des matériaux et la préparation des fichiers de fabrication ;
- une  phase  d’assemblage  et  d’intégration  des  différents  sous-ensembles
mécaniques et électriques ;
- enfin, une phase de tests et de réglages, visant à valider le comportement du kart
et à ajuster les paramètres critiques.
Cette planification prévisionnelle a servi de cadre de référence pour organiser le travail
de l’équipe et répartir les efforts tout au long du semestre.

Évolution réelle du planning
Au cours du projet, le planning initial a dû être ajusté afin de tenir compte de plusieurs
aléas.  Ces  écarts  entre  la  planification  prévisionnelle  et  le  déroulement  réel  sont
principalement  liés  à  des  contraintes  extérieures,  telles  que  les  délais  fournisseurs,  la
disponibilité des moyens de fabrication et les limites de certains procédés utilisés.

## 11

Ces ajustements ont nécessité une adaptation régulière de l’organisation du travail,
notamment en modifiant l’ordre de certaines tâches ou en poursuivant des travaux de
conception   pendant   des   périodes   initialement   prévues   pour   la   fabrication.   Cette
flexibilité a permis de maintenir l’avancement global du projet malgré les imprévus
rencontrés.

Identification des points critiques
L’analyse du déroulement du projet a permis d’identifier plusieurs points critiques ayant
un  impact  direct  sur  le  planning.  Parmi  ceux-ci  figurent  notamment  la  dépendance  à
certains   fournisseurs   pour   des   composants   clés,   la   précision   limitée   de   certains
procédés   de   fabrication,   ainsi   que   la   disponibilité   restreinte   des   ateliers   et   des
machines.
L’identification de ces points critiques a permis de mieux comprendre les sources de
retard et d’adapter la stratégie du projet en conséquence. Elle constitue également un
élément  important  du  retour  d’expérience,  en  mettant  en  évidence  la  nécessité
d’anticiper  davantage  certaines  étapes  et  de  prévoir  des  marges  de  sécurité  dans  la
planification. Ces enseignements seront réutilisables dans de futurs projets techniques
de même nature.

Au cours du projet, cette planification a dû être ajustée afin de tenir compte de plusieurs
aléas, notamment liés aux fournisseurs et aux procédés de fabrication. Ces ajustements
font partie intégrante de l’apprentissage et seront analysés plus en détail dans  les
parties suivantes.


## 12

PARTIE II – Analyse du kart donneur et étude
fonctionnelle du drift
II.1 Étude du premier prototype et du kart donneur
Etude du premier prototype

Avant le lancement du présent projet dans le cadre universitaire, un premier kart orienté
vers  la  pratique  du  drift  avait  été  conçu  et  réalisé  en  dehors  de  l’UTT par  Antoine
DAROUX.  Bien  que  ce  prototype  ne  corresponde  pas  exactement  aux  objectifs  et  aux
contraintes  du  projet  actuel,  il  constitue  un  retour  d’expérience  particulièrement
pertinent.  Il  a  permis  de  confronter  une  première  approche  théorique  à  une  utilisation
réelle, et d’identifier les points clés influençant le comportement dynamique d’un kart
de drift.
L’analyse  de  ce  premier  prototype  a  mis  en  évidence  plusieurs  enseignements
fondamentaux.  En  premier  lieu,  il  est  apparu  que  la  pratique  du  drift  impose  des
contraintes  bien  plus  sévères  qu’un  usage  classique  du  karting,  notamment  sur  la
direction et la répartition des masses. Une direction insuffisamment réglable ou limitée
en angle de braquage rend rapidement le contrôle du véhicule difficile, voire impossible,
lorsque les angles de dérive deviennent importants. Ce constat a souligné la nécessité
de  concevoir  une  direction  spécifiquement  dédiée  au  drift,  intégrant  dès  le  départ  de
grandes plages de réglage.
Par ailleurs, ce premier prototype a montré les limites d’une adaptation de solutions
existantes à un usage pour lequel elles n’ont pas été initialement conçues. Les fusées

## 13

utilisées ne permettait pas un contrôle de la trajectoire optimal, et rendaient la direction
dures.    Également,    la    conception    du    premier    châssis ne    permettait    pas un
positionnement  cohérent  des  masses.  Cela  se  traduisait  par  un  comportement  peu
prévisible,  avec un  équilibre  parfois  difficile  à  maîtriser  entre  stabilité  du  train  avant  et
perte d’adhérence du train arrière. Ce point a conduit à la conclusion que  des  fusées
standards,   même   modifiées, et   le   moteur   choisi,  ne   constituent pas   une   base
satisfaisante  pour la  direction  et  le  comportement d’un  kart  de  drift  performant  et
réglable.
L’utilisation du prototype a également mis en évidence l’importance de la cohérence
globale du système. Des choix pertinents pris isolément peuvent conduire à un résultat
médiocre s’ils ne sont pas intégrés dans une architecture d’ensemble cohérente. La
géométrie de direction, la rigidité du châssis, l’implantation du moteur et la répartition
des masses doivent être pensées conjointement pour obtenir un comportement stable
et progressif en drift.
Enfin, ce retour d’expérience a confirmé l’intérêt d’une approche itérative et évolutive.
Certaines solutions initialement envisagées se sont révélées peu efficaces ou difficiles
à  exploiter  en  pratique,  tandis  que  d’autres  ont  démontré  leur  pertinence  une fois
confrontées à l’usage réel. Ces observations ont directement influencé la philosophie
du  projet  actuel,  en  orientant  les  choix  vers  une  conception  entièrement  nouvelle,
pensée dès l’origine pour le drift, avec une forte attention portée à la réglabilité, et à la
précision de la direction.
Ainsi, l’analyse du premier prototype a servi de base de réflexion essentielle pour le
développement  du  nouveau  kart.  Elle  a  permis  d’identifier  les  points  critiques  à
améliorer,  de  valider  certaines  orientations  techniques  et  d’éviter  la  reproduction
d’erreurs déjà rencontrées, tout en s’appuyant sur les éléments qui se sont révélés
pertinents lors de l’utilisation réelle.


## 14

Étude du kart donneur

Afin de limiter les coûts et de disposer d’une base mécanique fiable, le projet s’est
appuyé sur l’achat d’un kart complet dit donneur, acquis sans jantes, sans roues et sans
baquet  (siège). Cette solution s’est révélée nettement plus économique que l’achat
séparé de chaque composant, tout en permettant de bénéficier d’organes mécaniques
haut de gamme déjà éprouvés en conditions réelles d’utilisation.
Le kart donneur a été partiellement démonté afin d’analyser en détail ses différents
sous-ensembles mécaniques. Cette étape avait plusieurs objectifs :
- comprendre l’architecture globale d’un kart de loisir,
- identifier les composants réutilisables dans le cadre du projet,
- relever précisément les cotes nécessaires à la modélisation CAO.
Les sous-ensembles analysés comprennent notamment :
- la transmission (chaîne, pignon, couronne, alignement),
- les systèmes de freinage avant et arrière,
- la direction (volant, colonne, principes de biellettes),
- l’essieu arrière et ses paliers.
À l’issue de cette analyse, plusieurs éléments ont été conservés pour le projet :
- l’essieu arrière aves ses paliers,
- la transmission,

## 15

- les systèmes de freinage avant et arrière,
- le volant et certains éléments de direction.
En revanche, le châssis d’origine n’a pas été retenu. Celui-ci n’est en effet ni adapté à la
pratique  du  drift,  ni  compatible  avec  l’intégration  d’un  groupe  motopropulseur
électrique de forte puissance. Sa géométrie, sa rigidité et son architecture générale ne
permettaient pas de répondre aux exigences spécifiques du projet. Le choix a donc été
fait  de  concevoir  un  châssis  entièrement  nouveau,  spécifiquement  dimensionné  pour
l’usage visé.

Apports du kart donneur pour la conception
L’étude du kart donneur a joué un rôle central dans la phase de conception. Elle a permis
de :
- sécuriser certaines fonctions mécaniques critiques,
- réduire les incertitudes liées à l’intégration des organes standards,
- accélérer la phase de conception CAO grâce à des relevés de cotes précis,
- garantir   la   compatibilité   entre   les   nouveaux   éléments   conçus   et   les
composants réutilisés.
Le kart donneur n’a donc pas été utilisé comme une base à modifier, mais comme une
référence technique permettant de concevoir un système cohérent, fiable et adapté aux
contraintes du drift. Cette approche a permis de concentrer les efforts de conception sur
les  sous-ensembles  réellement  différenciants  du  projet,  notamment  le  châssis,  la
direction et le groupe motopropulseur.

II.2 Étude des spécificités du drift
- Contraintes dynamiques du drift
- Importance de la direction en drift
- Rôle de la répartition des masses
- Choix des vitesses cibles et du comportement attendu
Spécificités dynamiques du drift appliqué au karting
Le  drift  se  caractérise  par  un glissement  volontaire  et  contrôlé  du  train  arrière,  tout  en
conservant la maîtrise de la trajectoire grâce au train avant. Cette pratique impose des
contraintes très différentes de celles rencontrées en karting classique.
Dans le cas d’un kart de drift :

## 16

- le train arrière doit être capable de perdre facilement l’adhérence, tout en gardant
du grip,
- le train avant doit conserver une adhérence directionnelle maximale,
- le pilote doit pouvoir corriger en permanence la trajectoire à l’aide du volant.
Ces contraintes impliquent une réflexion approfondie sur :
- la géométrie de direction,
- la répartition des masses,
- le dimensionnement du groupe motopropulseur,
- la progressivité et la réactivité du couple moteur.
Le choix d’un kart électrique renforce encore ces enjeux, le moteur électrique offrant un
couple instantané pouvant facilement provoquer une perte de contrôle si la conception
n’est pas adaptée. Il a donc été nécessaire de créer un châssis sur mesure.

II.3 Étude des paramètres de direction
Étude de la direction en drift
La direction est l’élément central du comportement dynamique d’un véhicule de drift.
Contrairement  à un kart classique, une direction de drift doit permettre des angles de
braquage très importants, tout en restant précise et contrôlable.

a) Angle de braquage élevé


## 17

Lors  d’un  drift,  le  véhicule  adopte  un  angle  de  glisse  important  par  rapport  à  sa
trajectoire.  Les  roues  avant  doivent  alors  être  braquées dans  le  sens  opposé  au
glissement afin de maintenir le contrôle.
Un angle de braquage élevé permet :
- de maintenir le contrôle à fort angle de dérive,
- de récupérer plus facilement une situation instable,
- de réduire le risque de tête-à-queue,
- d’effectuer des corrections fines pendant le drift.
Les  directions  de  véhicules  de  série  sont  généralement  limitées  à  des  angles  de
braquage  relativement  faibles  pour  éviter  les  interférences  mécaniques.  En  drift,  ces
limitations sont volontairement repoussées par une conception spécifique des fusées et
des points d’ancrage. C’est pourquoi nous avons choisi un angle de braquage de 75°.
b) Carrossage négatif
Le carrossage correspond à l’inclinaison de la roue par rapport à la verticale, observée
de face. Il peut être négatif lorsque le haut de la roue est incliné vers l’intérieur du kart,
positif lorsqu’il est incliné vers l’extérieur, ou neutre lorsque la roue  est  verticale.  Ce
paramètre  joue  un  rôle  essentiel  dans  l’adhérence  du  train  avant,  la  précision  de
direction et la stabilité du kart en virage.
Un carrossage négatif est particulièrement adapté à une utilisation dynamique du kart,
car il permet d’optimiser la surface de contact du pneu en virage. Il contribue à améliorer
l’adhérence  latérale,  la  précision  du  train  avant  et  la  stabilité  lors  des  phases  de
transition. En contrepartie, un carrossage trop important peut entraîner une diminution
de l’adhérence en ligne droite ainsi qu’une usure localisée des pneus.
À  l’inverse,  un  carrossage  positif  favorise  la  stabilité  en  ligne  droite  mais  dégrade
fortement l’adhérence en virage, ce qui le rend peu adapté à une conduite sportive. Un
carrossage  neutre  offre  un  comportement  plus  homogène  et  une  usure  plus  régulière
des pneus, mais ne permet pas d’exploiter pleinement le potentiel d’adhérence en
virage.

## 18

Dans le cadre du kart de drift, le carrossage négatif est parfaitement bénéfique : Il permet
de conserver beaucoup de grip à l’avant lors des drifts. Il se règle de telle façon qu’à 50%
du braquage, le pneu soit parallèle à l’horizontal. Cela permet d’avoir une direction
précise  et  stable. Il  a  été  intégré  comme  un  paramètre  ajustable  afin  de  permettre
l’optimisation du comportement du kart lors des phases d’essais et de mise au point.
c) Chasse
La chasse est l’angle  d’inclinaison du pivot  de direction  par rapport à  la  verticale,
observé de profil. Elle correspond à une chasse positive lorsque l’axe de pivot est incliné
vers l’arrière du kart en partie haute, configuration quasi systématique. Ce paramètre
influence  directement  la  stabilité  directionnelle,  le  retour  automatique  du  volant  et
l’effort nécessaire au braquage.
Une chasse positive améliore la stabilité en ligne droite et favorise le rappel naturel de la
direction  après  un  virage,  ce  qui  facilite  le  contrôle  du  kart.  En effet, une  chasse
importante augmente l’effort au volant (en augmentant l’effet Jacking, voir plus bas) et
peut réduire la vivacité de la direction lors de l’entrée en virage. À l’inverse, une chasse
plus faible rend la direction plus légère et plus réactive, mais au détriment de la stabilité
et du retour du volant.
Dans  le  cadre  du kart  de  drift,  la  chasse  doit  être  choisie  comme  un  compromis  entre
stabilité  et  maniabilité.  Une  valeur  suffisante  est  nécessaire  pour  conserver  un  bon
retour de direction et un comportement prévisible à fort angle, tout en restant modérée
afin de permettre des corrections rapides et précises pendant les phases de glisse. Il a
également été intégré comme un paramètre ajustable pour optimiser les performances
en  glisse. Par  ailleurs,  son  choix  dépend  aussi  du  scrub  radius.  Nous  sommes  donc
partis sur 1.5°.

## 19









d) Scrub radius
Le  scrub  radius,  ou  rayon  de  pivot  au  sol,  correspond  à  la  distance  entre  le  point  de
contact du pneu avec le sol et l’intersection au sol de l’axe de pivot de la direction. Ce
paramètre  influence  directement  les  efforts  transmis  au  volant,  la  sensibilité de  la
direction et le comportement du kart lors des phases de braquage.
Un  scrub  radius  important  augmente  les  efforts  au  volant  et  rend  la  direction  plus
sensible aux variations d’adhérence, ce qui peut nuire à la précision du pilotage. À
l’inverse, un scrub radius réduit permet une direction plus neutre, plus prévisible et
moins sensible aux perturbations, notamment lors des transitions rapides. Comme nous
avons récupérer les moyeux d’un karting, nous n’avons pas choisi sa valeur.


## 20

e) Parallélisme (ou Toe)
Le parallélisme, ou toe, correspond à l’orientation des roues avant par rapport à l’axe
longitudinal  du  kart.  Il  peut  être  réglé  en  pincement  (toe-in),  lorsque  les  roues  sont
orientées vers l’intérieur, ou en ouverture (toe-out), lorsqu’elles sont orientées  vers
l’extérieur. Ce paramètre influence directement la stabilité en ligne droite et la réactivité
du train avant.
Un   réglage   toe-in améliore   la   stabilité   directionnelle en   ligne   droite et   limite   les
comportements instables, mais réduit la vivacité de la direction à l’entrée en virage. À
l’inverse, un toe-out augmente la réactivité et facilite l’inscription en virage, au prix d’une
stabilité moindre en ligne droite.
Dans le cadre d’un kart de drift, le parallélisme constitue un réglage fin permettant
d’adapter le compromis entre stabilité et maniabilité. Une ouverture modérée à l’avant
est généralement privilégiée afin d’obtenir une direction plus vive et un meilleur contrôle
lors  des  phases  de  mise  en  glisse,  tout  en  conservant  un  comportement  maîtrisable.
Cependant,  cela  dépend de  la  vitesse  de  la  glisse : il faut donc qu’il soit totalement
réglable.


f) KPI (King Pin Inclination)
Le  KPI est l’angle d’inclinaison de l’angle de pivot par rapport à l’axe de rotation de la
roue   sur   une   fusée   (vu   de   face).  Il  influence  l’effet Jacking,  l’effort  au  volant,   le
comportement en virage et le retour automatique de la direction.
Nous  avons  privilégier  un  KPI  nul,  soit un  angle  de  90  degrés  entre  les  deux  axes,
notamment pour réduire l’effet Jacking (voir plus bas.

## 21









Tableau récapitulatif des différentes valeurs de angles choisis :
## Paramètre Valeur
Angle de braquage max 75°
Carrossage avant ≈ −1.5°
## Chasse 1,5°
Parallélisme (toe) Ouverture légère ≈ −1 à −2 mm
## KPI 0°
## Ackermann
0  % (recherché  mais  réglable  en  fonction  du  ressenti  du
pilote) (neutre)
Scrub radius Imposé par les moyeux


g) Effet Ackermann
L’effet Ackermann désigne  la  géométrie  de  direction  qui  permet  aux  roues  avant  de
braquer  avec  des  angles  différents  en  virage.  Il  améliore  la  précision  en  courbe  en
réduisant le glissement des pneus.
Il se décompose en 3 types :
- L’Ackermann : la roue intérieure braque plus que la roue extérieure.
- L’anti-Ackermann : la roue extérieure braque plus que la roue intérieure.
- Le neutre : les roues tournent aux mêmes angles.

## 22

Ici on a privilégié l’Ackermann neutre, car ce réglage est sensé rendre la glisse des roues
arrières plus facile. Cependant, sur le papier, un anti-Ackermann doit nous donner plus
de grip lors d’un dérapage. C’est pour cela que nous avons prévu plusieurs réglages qui
nous permettrons de tester les différences.










h) Effet Jacking
L’effet Jacking est  le  phénomène  par  lequel  la  géométrie  de  la  direction  provoque  un
soulèvement de la roue arrière intérieure en virage. Il est créé par la chasse et l’angle de
KPI. Ce délestage compense l’absence de différentiel et améliore l’inscription du kart en
virage. Ce  phénomène  est  recherché  dans la pratique du grip, car elle permet d’éviter
une glisse du train arrière.
En revanche, c’est un effet que l’on a cherché à limiter  en  drift,  notamment car l’on
recherche un gros angle de braquage. En effet, plus l’on tourne, plus cet effet est
important, donc plus le kart se lève et la direction est dure.
C’est  donc  par  la combinaison de  tous  ces  facteurs que  nous  avons  conçu  notre
direction.



## 23

## PARTIE III – CONCEPTION MÉCANIQUE ET
## CAO
III.1 Architecture générale du kart
Choix d’un châssis tubulaire sur mesure
Le choix d’un châssis tubulaire sur mesure s’est imposé dès les premières phases du
projet.  En  effet, les châssis de karting existants, qu’ils soient issus du loisir ou de la
compétition, sont conçus pour une utilisation bien spécifique, avec des contraintes de
tenue de route, de rigidité et de géométrie qui ne correspondent pas à la pratique du drift.
Comme nous l’avons déjà vu le drift impose des exigences particulières donc un châssis
standard n’aurait pas permis d’intégrer ces contraintes sans modifications lourdes et
peu maîtrisées. Le choix d’un châssis tubulaire sur mesure permet au contraire :
- une liberté totale de conception, tant sur la géométrie que sur l’implantation des
composants,
- une bonne rigidité structurelle pour une masse contenue,
- une compatibilité optimale avec les moyens de fabrication disponibles (découpe,
cintrage, grugeage et soudure),
- une évolution possible du châssis en cas de modifications futures.

Dimensions globales du châssis
Les dimensions globales du kart ont été définies à partir de références existantes. Deux
références principales ont été utilisées :
- les dimensions usuelles des karts de location,
- les dimensions d’un ancien kart réalisé par Antoine Daroux, servant de retour
d’expérience.
À partir de ces éléments, et en tenant compte des contraintes spécifiques du projet, les
dimensions suivantes ont été retenues :
- longueur totale : environ 1,80 m,
- largeur du châssis : légèrement supérieure à 1 m.

## 24

Cette largeur est volontairement plus importante que celle d’un kart classique. Elle
s’explique  principalement  par  l’utilisation  d’un essieu  arrière  récupéré  sur  le  kart
donneur,   dont   la   largeur   est   particulièrement   importante.   Le   châssis   a   donc   été
dimensionné   pour   assurer   une   compatibilité   parfaite   avec   cet   essieu,   tout   en
garantissant une bonne stabilité latérale.
Ces dimensions offrent un compromis satisfaisant entre :
- stabilité en glisse,
- maniabilité,
- intégration des composants,
- sécurité du pilote.

Philosophie de conception : stabilité, drift et réglages
Comme établi dans les parties précédentes, l’objectif principal du projet est d’obtenir
un  kart  capable  de  perdre  volontairement  l’adhérence  du  train  arrière,  tout  en
conservant un maximum de contrôle et d’adhérence au niveau du train avant. Cette
philosophie a fortement influencé l’architecture générale du châssis.

Répartition des masses
La répartition des masses a été pensée dès la conception du châssis. Afin de favoriser la
perte de grip à l’arrière, les éléments les plus lourds du kart ont été volontairement
positionnés  à  proximité  du  train  arrière.  Pour  cela,  la  structure  tubulaire  arrière  a  été
conçue de manière à pouvoir accueillir :
- la batterie,
- le moteur,
- le contrôleur.
Les  tubes  ont  été  disposés  spécifiquement  pour  créer  des  volumes  dédiés  à  ces
composants, tout en assurant la rigidité de l’ensemble. Cette implantation permet de
concentrer la masse à l’arrière du kart, ce qui facilite l’entrée en drift et le maintien de la
glisse.


## 25

Intégration des éléments fonctionnels et de sécurité
Sur  les  côtés  du  châssis,  des tôles ont  été  intégrées.  Ces tôles remplissent  plusieurs
fonctions :
- permettre la fixation du frein à main hydraulique, indispensable à la pratique du
drift,
- renforcer localement la structure,
- offrir une base modulable pour d’éventuelles évolutions.
Des  supports  spécifiques  ont  également  été  prévus  pour  le baquet. L’ergonomie et la
position de conduite ont été prises en compte afin d’assurer à la fois le confort, le
contrôle du véhicule et la sécurité du pilote.
À l’avant du châssis, une autre platine en tôle a été intégrée afin de :
- fixer la direction réglable,
- assurer un positionnement précis et reproductible de l’ensemble directionnel.
Un bumper avant a également été prévu. Celui-ci a pour rôle de protéger les roues et une
partie du système de direction en cas de choc frontal ou légèrement latéral, contribuant
ainsi à la sécurité du pilote et à la durabilité du kart.

Stabilité, sécurité et évolutivité
L’architecture générale du kart cherche donc à concilier plusieurs objectifs :
- une stabilité suffisante pour encaisser les contraintes liées au drift,
- un haut niveau de sécurité grâce à une structure rigide et des zones protégées,
- une grande modularité, permettant d’effectuer des réglages, des essais et des
modifications sans remise en cause complète du châssis.
Cette approche garantit un kart à la fois performant, évolutif et adapté à une démarche
expérimentale, essentielle dans un projet de ce type.

## 26

III.2 Conception CAO globale


Présentation de l’assemblage CAO
La conception CAO du kart a été réalisée sous la forme d’un assemblage global unique,
servant de base à l’ensemble du projet. Cet assemblage regroupe la quasi-totalité des
composants mécaniques du kart et constitue une représentation fidèle du véhicule final,
tant en termes de géométrie que d’implantation des sous-ensembles.
L’assemblage principal est structuré autour du châssis, qui joue le rôle de référence
géométrique.  À  partir  de  ce  châssis,  les  différents  sous-ensembles  ont  été  intégrés
progressivement, au fur et à mesure de l’avancement du projet. Cette démarche a
parfois conduit à des adaptations et des réorganisations internes de l’assemblage, mais
elle reflète fidèlement la réalité du développement d’un projet technique réel.
La  CAO  ne  suit  donc  pas  une  logique  figée  dès  le  départ,  mais  une  logique  évolutive,
directement  liée  aux  choix  techniques,  aux  contraintes  de  fabrication  et  aux  retours
issus des études théoriques.


## 27

Châssis et structure principale

Le châssis tubulaire complet constitue la base de l’assemblage. Il intègre :
- la structure porteuse,
- les points de fixation des trains avant et arrière,
- les supports du baquet,
- les platines latérales et frontales.
Toutes les géométries du châssis ont été modélisées avec précision afin de garantir
une cohérence totale entre la CAO et la fabrication réelle.


## 28

Train arrière et essieu


La partie arrière regroupe l’ensemble des composants liés à la transmission du
mouvement :
- l’essieu arrière,
- les paliers,
- les moyeux,
- les disques et éléments de freinage,
- les jantes et pneus arrière.
Ce sous-ensemble a été intégré très tôt dans la CAO afin de vérifier :
- la compatibilité avec la largeur importante de l’essieu récupéré,
- l’alignement correct des composants,
- l’encombrement global par rapport au châssis.


## 29

Groupe motopropulseur

Le groupe motopropulseur (moteur, batterie, contrôleur) a été intégré sous forme de
modèles simplifiés mais dimensionnellement corrects. Ces composants ne reprennent
pas les détails internes, mais respectent :
- les dimensions extérieures réelles,
- les entraxes de fixation.
Cette approche a permis d’explorer différentes implantations possibles, d’évaluer leur
impact sur la répartition des masses et d’anticiper les contraintes liées aux supports et
aux fixations.


## 30

Direction et train avant









La direction constitue de loin le sous-ensemble le plus complexe et le plus central du
projet. Elle a fait l’objet d’un travail CAO particulièrement approfondi.
L’assemblage comprend notamment :
- les fusées avant,
- les biellettes de direction,
- la colonne de direction,
- les supports de pivot,
- le volant,
- les interfaces avec le châssis.

## 31

Ce  sous-ensemble a nécessité de nombreuses itérations, car il concentre l’ensemble
des   paramètres   critiques   du   drift   :   angle   de   braquage,   carrossage,   chasse,   KPI,
Ackermann et effet de jacking.

Utilisation de la CAO comme outil décisionnel
La CAO a joué un rôle bien plus important qu’un simple outil de modélisation. Elle a été
utilisée comme un véritable outil décisionnel, permettant de faire le lien entre la théorie
étudiée et son application concrète.
En particulier pour la direction, la CAO a permis :
- de visualiser précisément l’impact des différents angles de géométrie,
- de comprendre les interactions entre les paramètres,
- de tester différentes positions de points d’ancrage et de biellettes.
Il est rapidement apparu que des variations très faibles, de l’ordre du millimètre, avaient
un  impact  significatif  sur  le  comportement  de  la  direction.  Le  positionnement  des
perçages  pour  les  biellettes,  par  exemple,  influençait  fortement  l'effet  d'Ackermann et
les  efforts  transmis  au  volant.  Sans  la  CAO,  ces  effets  auraient  été  très  difficiles  à
anticiper.
La  CAO  a  ainsi  servi  de  support  à  la  prise  de  décision,  en  permettant  de  valider  ou
d’écarter certaines configurations avant toute fabrication.

Fidélité dimensionnelle et lien avec la fabrication
Un point fondamental de ce projet est que l’intégralité de la CAO est fidèle à la réalité au
millimètre près. Toutes les pièces mécaniques ont été :
- mesurées précisément,
- modélisées à l’échelle réelle,
- assemblées avec leurs jeux et leurs contraintes réelles.
Des exceptions existent :
- le baquet, modélisé de manière simplifiée, mais avec les dimensions extérieures
réelles,
- le  moteur,  la  batterie  et  le  contrôleur,  modélisés  en  volume  réel  avec  les  bons
entraxes de fixation, sans détails internes.

## 32

Cette rigueur dimensionnelle a permis de faire de la CAO un outil direct de fabrication.
Lors des phases d’usinage, de perçage ou de soudure, il suffisait de reprendre les cotes
issues de la CAO pour garantir la cohérence entre le modèle numérique et la pièce réelle.
Cette approche a considérablement facilité :
- la préparation de l’usinage,
- la réalisation des gabarits,
- la précision de l’assemblage final.

III.3 Conception du châssis
III.3.1 Géométrie générale du châssis
La  géométrie  générale  du  châssis  a  été  définie  de  manière  à  répondre  simultanément
aux contraintes dynamiques du drift, aux exigences d’intégration des composants et aux
réalités de fabrication.
La hauteur du châssis a volontairement été conçue relativement importante, comparée
à un kart classique. Ce choix permet :
- d’offrir suffisamment de volume pour intégrer les composants électriques,
- de conserver des sections de tubes cohérentes d’un point de vue mécanique,
- de faciliter l’accès aux éléments lors de l’assemblage et de la maintenance.
Les longerons longitudinaux assurent la continuité structurelle entre l’avant et l’arrière,
tandis  que  des  traverses  viennent  rigidifier  l’ensemble  et  servir  de  supports  aux
différents sous-ensembles. L’avant du châssis est centré par rapport à l’axe longitudinal,
tandis  que  la  partie  centrale  a  été  pensée  comme  une  zone  de  transition  entre  la
direction et le train arrière, garantissant une bonne cohérence géométrique.

III.3.2 Répartition des masses
Comme établi dans les parties précédentes, la répartition des masses constitue un point
clé du comportement dynamique du kart. L’objectif recherché est de favoriser la perte
d’adhérence du train arrière, tout en conservant un train avant précis et stable.

## 33

Dans  cette  optique,  la  conception  du  châssis  a  été  directement  orientée  autour  de
l’implantation des éléments les plus lourds :la batterie, le moteur, le contrôleur.
Les tubes ont été disposés de manière à :
- positionner ces masses au plus proche de l’essieu arrière,
- limiter les porte-à-faux,
- conserver une rigidité suffisante malgré la concentration de charges.
Cette implantation permet d’augmenter la charge sur le train arrière, facilitant l’entrée
en drift, tout en évitant de pénaliser excessivement la maniabilité du train avant. La CAO
a   joué   un   rôle   central   dans   cette   réflexion,   en   permettant   de   tester   différentes
implantations avant toute fabrication.

III.3.3 Intégration du réglage d’assiette
Afin de rendre le kart plus polyvalent et d’ouvrir la voie à des phases de tests et de
réglages approfondies, un réglage d’assiette a été intégré dès la conception du châssis.
Ce système permet d’ajuster l’inclinaison longitudinale du kart, notamment via les
points de fixation de l’essieu arrière et la hauteur relative du train avant. L’objectif est de
pouvoir modifier la répartition des charges entre l’avant et l’arrière en fonction :
- du poids du pilote,
- des conditions d’utilisation,
- du comportement recherché (plus ou moins de facilité à décrocher l’arrière).
L’intégration  de  ce  réglage  dès  la  phase  de  conception  permet  d’éviter  toute
modification lourde ultérieure.
Ce choix s’inscrit dans une volonté de concevoir un kart à la fois qualitatif et largement
réglable,  même  si  ce  type  de  réglage  reste  non  indispensable  sur  un  kart  dépourvu  de
suspension, contrairement à un véhicule automobile classique.


## 34

III.3.4 Préparation à la fabrication et logique d’usinage
La  conception  du  châssis  a  été  pensée  en  tenant  compte  des  contraintes  réelles  de
fabrication. Les tubes ont été commandés en longueurs standards de 6 mètres, ce qui a
nécessité une réflexion préalable sur l’optimisation des découpes.
Avant toute opération de coupe, un plan de débit a été réalisé afin de limiter au maximum
les pertes de matière.

III.3.5 Adaptations successives et évolution du châssis
Au cours du projet, la conception du châssis a dû évoluer afin de s’adapter à certains
changements   techniques,   notamment   le   changement   de   groupe   motopropulseur.
L’intégration d’un moteur et d’une batterie différents de ceux initialement envisagés a
nécessité :
- une modification de certains volumes arrière,
- un repositionnement de supports,
- une adaptation locale de la structure tubulaire.
Ces évolutions ont été rendues possibles grâce au choix d’un châssis tubulaire sur
mesure  et  à  l’utilisation  intensive  de  la  CAO.  Chaque  modification  a  été  validée
numériquement avant d’être appliquée physiquement, limitant ainsi les erreurs et les
reprises.
Cette capacité d’adaptation illustre l’intérêt d’une conception évolutive, capable de
suivre l’évolution du projet sans remettre en cause l’ensemble de la structure.

III.4 Étude et choix du matériau du châssis
Le châssis est un élément structurel principal du kart, il doit assurer la rigidité globale, la
résistance   mécanique,   la   tenue   en   fatigue, une  bonne  soudabilité,  ...  Le  tout  en
respectant nos contraintes de coût et de faisabilité.
L’objectif ici est donc de comparer plusieurs métaux couramment utilisés pour des
constructions  mécaniques en  structures  tubulaires afin  de  déterminer celui  qui  est  le
plus pertinent pour notre conception de châssis.

## 35

Acier allié 25CrMo4 (Chromoly)
L’acier  25CrMo4  présente  d’excellentes  propriétés  mécaniques  avec  une  limite
d’élasticité comprise entre 460 et 600 MPa, tout en conservant un module d’Young
similaire aux aciers carbone (≈ 210 GPa).
Il permet donc d’obtenir des structures plus légères à rigidité équivalente (par exemple,
un tube Ø30×2 mm en 25CrMo4 est équivalent à un Ø30×3 mm en S235).
Cependant, ce matériau présente plusieurs inconvénients majeurs :
- Coût très élevé
- Soudage contraignant, nécessitant idéalement un procédé TIG, un métal
d’apport compatible et un traitement thermique (recuit nécessaire)
- Difficulté d’approvisionnement pour de petites quantités
Ces  contraintes  le  réservent  principalement  à  la  compétition  de  haut  niveau,  ce  qui  le
rend peu pertinent dans le cadre de ce projet.

Acier S235 et E235
Les  caractéristiques  mécaniques  des  aciers  S235  et  E235  sont  similaires,  avec  une
limite d’élasticité d’environ 235 MPa.
Ils se distinguent par :
- Une excellente soudabilité
- Une grande disponibilité
- Un coût très faible
- Une utilisation très répandue dans les structures tubulaires
Bien   que   leur   résistance   mécanique   soit   plus   faible,   cet   inconvénient   peut   être
compensé par un dimensionnement adapté des tubes. Le S235 reste aujourd’hui la
référence  dans  le  monde  du  karting,  notamment  pour  des  raisons  économiques  et de
normes.
Cette nuance d’acier semble donc bien adaptée à notre projet étudiant.




## 36

## Acier S355
La limite d’élasticité de l’acier S355 est élevé (355 MPa), nettement supérieure à celle du
S235.  Tout  en  restant  un  acier  standard  pour  les  constructions. Il  est  fréquemment
utilisé pour des structures mécaniques fortement sollicitées.
Sa soudabilité est jugée bonne, notamment pour des épaisseurs inférieures à 10 mm, où
le préchauffage n’est pas requis. Le soudage TIG est recommandé pour un meilleur
contrôle, bien qu’un procédé MIG correctement réglé reste possible.
En revanche :
- Son coût est plus élevé Il demande plus de rigueur en fabrication
- Le gain de performances n’est pas strictement nécessaire pour un
châssis de kart loisir

## Acier S275
L’acier S275 reste un compromis entre le  S235  et  le  S355.  Il  possède  lui  une  limite
d’élasticité d’environ 275 MPa. Sa mise en œuvre est relativement facile, avec un coût
modéré et une meilleure résistance que celle du S235.
Cependant, sa tenue en fatigue et sa durabilité restent inférieures à celles du S355 ou du
Chromoly. Il est donc davantage adapté à des châssis simples ou faiblement sollicités,
ce qui limite son intérêt dans une optique de durabilité.

Comparatif et choix du matériau
Afin de déterminer l’acier le plus adapté à notre utilisation, nous avons rassemblé tous
les  critères  qui  nous  importaient  dans  un  tableau  décisionnel.  Cela  nous  a  permis  de
classer les différentes nuances d’acier et de choisir celle pour notre châssis.


## 37

A la suite de cette étude comparative, nous avons décidé de partir sur de l’acier de
construction S235.
Concernant le choix du fournisseur des tubes, nous avons choisis de commander chez
ArcelorMittal.  Ce  choix  est  motivé car il s’agit d’un gage de qualité et qu’après avoir
simulé  des  commandes  chez  différents  fournisseur en France il s’agit de ceux avec le
moins de frais annexes. Ce qui nous ramène donc à un meilleur rapport qualité/prix.
La commande chez ArcelorMittal est alors composée de 18m de tubes Ø30×2 mm (3 fois
6m) afin d’avoir suffisamment pour réaliser le châssis au complet, tout en prévoyant une
marge d’erreur en cas de besoin plus importants.

III.5 Conception de la direction et des fusées
Rôle des fusées dans la direction d’un kart de drift
Les  fusées  constituent  un  élément  central  du  système  de  direction,  puisqu’elles
assurent le lien entre les roues avant, les biellettes et le châssis. Dans le cadre d’un kart
de  drift,  elles  doivent  permettre  d’atteindre  de  grands  angles  de  braquage  tout  en
conservant une direction précise et contrôlable. Leur conception influence directement
le comportement dynamique du train avant et la capacité du kart à rester stable lors des
phases de glisse.

Comparaison des types de fusées existantes
Les fusées de type BattleAero, bien que plus performantes pour une utilisation en drift
grâce à leur géométrie spécifique et à leurs grands angles de braquage, ne permettaient
pas l’intégration du système d’excentriques retenu pour le projet. Or, ce système  est
indispensable  pour  assurer  le  réglage  fin  de  la  chasse  et  du  carrossage,  paramètres
essentiels à la mise au point du kart. Afin de conserver cette capacité de réglage et de
rester cohérents avec la démarche de développement et d’optimisation du projet,  le
choix s’est donc porté sur des fusées classiques, plus adaptées à l’intégration de ces
dispositifs.





## 38










Paramétrisation CAO de la géométrie de direction
La  conception  des  fusées  a  été  intégrée  dans  une  démarche  de  paramétrisation  de  la
CAO. Les principaux angles de direction ont été définis comme des paramètres pilotant,
permettant de modifier rapidement la géométrie du train avant. Cette approche a facilité
les itérations de conception et la comparaison de différentes configurations sans reprise
complète du modèle.

Dessin technique des fusées
Les  fusées  ont  fait  l’objet  d’un  dessin  technique  sous  Creo,  intégrant  les  cotes
fonctionnelles nécessaires à leur fabrication. Cet aspect étant déjà traité dans la partie
consacrée à l’usinage, il n’est pas détaillé ici afin d’éviter les répétitions.

Vérification des interférences et des débattements
Des  simulations  de  braquage  ont  été  réalisées  en  CAO  afin  de  vérifier  l’absence
d’interférences  entre  les  différents  éléments  de  la  direction  et  du  châssis.  Les
débattements  ont  été  validés  jusqu’à  l’angle  maximal  visé,  garantissant  un
fonctionnement mécanique cohérent avant le passage en fabrication.



## 39

III.6 Paramétrisation avancée de la CAO
La CAO du kart n’a pas été conçue comme un modèle figé, mais comme un outil évolutif,
capable de s’adapter aux besoins de réglage et d’optimisation du projet. Dans cette
optique,  une  paramétrisation  avancée  a  été  mise  en  place,  en  particulier  sur  les
éléments liés à la direction et à la géométrie du train avant.
Des  paramètres  pilotants  ont  été  définis  afin  de  contrôler  les  grandeurs  géométriques
essentielles, telles que le carrossage, la chasse, le KPI et l’angle de braquage.
Ces paramètres permettent de modifier rapidement la géométrie du système sans avoir
à reprendre l’ensemble de la modélisation. Chaque valeur est directement liée à des
cotes fonctionnelles de la CAO, ce qui garantit la cohérence globale de l’assemblage lors
des modifications.
Des  relations  géométriques  ont  ensuite  été  mises en  place  entre  les différents  angles.
Cette  approche  permet  de  visualiser  immédiatement  l’impact  d’une  variation  sur
l’ensemble  du  système  de  direction.  Il  a  ainsi  été  possible  d’observer  que  des
modifications très faibles, parfois de l’ordre du millimètre sur la position d’un point
d’ancrage, pouvaient entraîner des variations importantes sur les angles de direction et
sur le comportement global du kart. La CAO a donc servi de support pour comprendre et
maîtriser ces interactions complexes.
Cette paramétrisation présente un intérêt majeur pour les essais futurs et les réglages.
Elle permet d’anticiper les effets d’un réglage avant toute intervention mécanique, de
comparer différentes configurations et de préparer efficacement les phases de tests. En
cas de modification réelle sur le kart, la CAO pourra être mise à jour rapidement afin de
conserver   une   correspondance   fidèle   entre   le   modèle   numérique   et   le   véhicule
physique. Cette démarche facilite ainsi l’optimisation progressive du kart et renforce la
cohérence entre conception, fabrication et mise au point.





## 40

## PARTIE IV – DIMENSIONNEMENT DU
## GROUPE MOTOPROPULSEUR
IV.1 Définition des besoins énergétiques
La   définition   des   besoins   énergétiques   constitue   une   étape   essentielle   pour   le
dimensionnement du groupe motopropulseur. L’objectif est de déterminer un ordre de
grandeur  réaliste  de  la  puissance  et  de  l’énergie  nécessaires  pour  assurer  un
comportement adapté à la pratique du drift.
La masse totale du kart en ordre de marche a été estimée en prenant en compte :
- masse du châssis et des composants mécaniques : ~50 kg
- masse du groupe motopropulseur : ~30 kg
- masse du pilote : ~80 kg
Soit une masse totale estimée :m ≈ 160 kg

Conditions de roulage en drift
Le  kart  est  destiné  à  évoluer  à  des  vitesses  modérées  (25  à  35  km/h  en  drift,  45  km/h
max), mais avec :
- des accélérations instantanées fréquentes,
- des pertes d’adhérence du train arrière volontaires,
- une forte sollicitation du couple moteur.
Contrairement à un usage de karting classique, le dimensionnement n’est donc pas
guidé  uniquement  par  la  vitesse  maximale,  mais  surtout  par  la  capacité  du  moteur  à
fournir un couple instantané suffisant pour provoquer et maintenir la glisse.




## 41

IV.2 Dimensionnement du moteur
Le  moteur  constitue  l’élément  central  du  groupe  motopropulseur.  Son
dimensionnement doit permettre :
- d’assurer le roulage dans des conditions normales
- de déclencher volontairement la perte d’adhérence du train arrière
- de maintenir un drift stable par une modulation fine de la puissance.
Le critère dimensionnant n’est donc pas uniquement la vitesse maximale, mais surtout
la  capacité  du  moteur  à  fournir  un  couple  élevé  de  manière  instantanée,  tout  en
conservant une marge de fonctionnement suffisante.











## 42

Le  moteur qu’on a choisi est  le  VTB  Beast 28  kW.  Ce  moteur  présente  une  puissance
nominale  nettement supérieure  à  ce  que  nous  avons  déterminé  comme  puissance
nécessaire, ce qui permet d’absorber sans difficulté les pics de puissance liés au drift et
de ne pas toujours faire travailler le moteur à son régime maximum dans le but de limiter
les contraintes thermiques.
Par  ailleurs,  sur  les  2  courbes  ci-dessus,  on  peut  constater  que le  moteur  électrique
(courbe  de gauche)  dispose  de  beaucoup  de  plus  de  couple  instantané  que  le  moteur
thermique (courbe de droite).
Le choix de ce moteur est également justifié par plusieurs critères :
- Couple élevé disponible à bas régime, indispensable pour initier et
maintenir la glisse
- Puissance instantanée importante, adaptée aux relances répétées pour
maintenir une bonne trajectoire
- Format compact, facilitant l’intégration sur le châssis

IV.3 Choix de la transmission
Dans  de  nombreuses  applications  de  véhicules  électriques  légers  à  transmission  par
chaîne,   notamment   sur   des   véhicules   de   type   moto   électrique   ou   Sur-Ron,   la
transmission s’effectue généralement sur une seule roue de grand diamètre. Ces roues,
dont le diamètre est nettement supérieur à celui d’une roue de karting, nécessitent des
rapports de transmission élevés, couramment de l’ordre de 1:8, afin de compenser le
bras de levier important créé par le rayon de la roue et d’obtenir un couple suffisant au
sol.
À l’inverse, le kart de drift étudié est équipé de roues de karting de faible diamètre, ce qui
réduit significativement le bras de levier entre l’axe de roue et le point de contact au sol.
À couple moteur égal, le couple transmis au sol est donc naturellement plus élevé que
sur  une  roue  de  grand  diamètre.  Dans  ce  contexte,  l’adoption  d’un  rapport  de
transmission aussi élevé qu’un 1:8 conduirait à un excès de couple aux roues, rendant
le  comportement  du  kart  trop  brutal,  difficilement  contrôlable  en  drift,  et  augmentant
inutilement les contraintes mécaniques sur l’ensemble de la transmission.
Compte tenu du couple important délivré par le moteur électrique VTB Beast 28 kW, ainsi
que des dimensions réduites des roues, un rapport de transmission de 1:4 a été retenu.
Ce choix permet d’obtenir un couple largement suffisant pour provoquer et maintenir le
glissement  du  train  arrière,  tout  en  conservant  une  accélération  progressive  et  une
vitesse maximale compatible avec l’usage visé. À titre d’exemple, ce rapport peut être

## 43

obtenu par l’association d’un pignon moteur de 20 dents et d’une couronne arrière de 80
dents.
La  transmission  finale  est  réalisée  par  chaîne,  solution  privilégiée  en  karting  pour  sa
robustesse, son rendement élevé et sa facilité de mise en œuvre. Le choix s’est porté sur
une chaîne au pas 219, standard largement utilisé en compétition. Afin de supporter les
sollicitations importantes liées aux accélérations franches et aux variations rapides de
couple caractéristiques du drift, une chaîne renforcée DID Racing HTZ a été retenue.
Enfin, la transmission a été conçue pour assurer une compatibilité totale avec l’essieu
arrière  de  karting.  L’utilisation  d’une  couronne  219  montée  sur  un  porte-couronne
standard,  associée  à  un  alignement  précis  entre  le  pignon  moteur,  la  chaîne  et  la
couronne,   permet   une   intégration   simple,   fiable   et   facilement   modifiable.   Cette
modularité  constitue  un  atout  majeur  pour  les  phases  d’essais,  en  autorisant  des
ajustements rapides du rapport de transmission afin d’affiner le comportement du kart
en drift.

IV.4 Choix de la batterie
Lors des premières phases du projet, il avait été envisagé de fabriquer intégralement la
batterie   en   interne,   à   partir   de   cellules   lithium-ion   individuelles.   Cette   approche
consistait à :
- sélectionner  les  cellules  adaptées  en  termes  de  capacité  et  de  courant  de
décharge
- concevoir  l’architecture  série/parallèle  correspondant  à  la  tension  et  à  la
capacité souhaitées
- intégrer un système de gestion de batterie (BMS)
- réaliser les assemblages électriques par soudure ou par bandes de connexion
- assurer l’isolation, la protection mécanique et la ventilation du pack.
Cette   solution   présentait   plusieurs   avantages,   notamment   une   grande   liberté   de
conception, un coût potentiellement réduit et un fort intérêt pédagogique.
Cependant,  une  analyse  plus  approfondie  a  mis  en  évidence  plusieurs  contraintes
majeures :
- contraintes temporelles : la conception, l’assemblage et les essais d’une batterie
haute  puissance  représentent  un  temps  de  travail  conséquent, difficilement
compatible avec le calendrier du semestre

## 44

- contraintes de sécurité : la manipulation et l’assemblage de cellules lithium-ion
soumises  à  de  forts  courants  présentent  des  risques  importants  (court-circuit,
incendie)
- exigences  de  fiabilité  :  le  drift  impose  des  appels  de  courant  élevés  et  répétés,
nécessitant alors un   pack   parfaitement   maîtrisé   sur   les   plans   thermique,
électrique et mécanique
Ces   éléments   ont   conduit   à   remettre   en   question   la   pertinence   de notre   propre
fabrication de la batterie pour ce projet. Au regard de ces contraintes, il a été décidé de
confier la fabrication de la batterie à un fournisseur spécialisé, tout en conservant une
démarche de dimensionnement et de spécification précise avec lui. Ce choix permet de
garantir  un  niveau  de  sécurité  élevé,  d’assurer  une  qualité  d’assemblage
professionnelle,  de  bénéficier  de  protections  intégrées  (BMS  adapté,  équilibrage  des
cellules) et donc de réduire significativement  les risques techniques et humain lors de
l’utilisation du kart.
Les échanges avec   le   fournisseur ont   porté   notamment   sur la   tension   nominale
nécessaire pour exploiter pleinement notre moteur, la capacité permettant d’absorber
les  pics  de  courant  tout  en  conservant  une  autonomie  suffisante, le  courant  maximal
admissible en continu et en pic. Cette démarche collaborative a permis d’aboutir à une
batterie  spécifiquement  adaptée  au  kart  de  drift,  répondant  à  la  fois  aux  exigences  de
performance, de fiabilité et de sécurité.
## Caractéristiques :
- 80V Pour réduire la chauffe dans la
limite des capacités du contrôleur
- 50 Ah pour maximiser l’autonomie
- Pack cylindrique     en     22S10P
composé de cellules Reliance RS50
- Batterie étanche (montage
normée)
- BMS Bluetooth intelligent ANT



Concernant  les  cellules du  pack  cylindrique nous  avons  hésité  entre  trois  modèles
différents :

## 45

## Caractéristique
Reliance INR21700
## RS50
Molicel    INR21700
## P45B
## Samsung
## INR21700 50S
## Format 21700 21700 21700
Capacité nominale
≈ 5000 mAh (min ~4950
mAh)
≈ 4500 mAh ≈ 5000 mAh
Tension nominale 3,6 V 3,6 V  3,6 V
Courant continu
max
## 70 A 45 A  ≈ 35 A
Voltage charge
max
## 4,2 V 4,2 V  4,2 V
Voltage coupure
min
## 2,5 V  2,5 V  2,5 V
Poids approx. ~67 g ~68–70 g ~72 g
Prix indicatif (unité) ≈ 5 €  ≈ 7 € ≈ 6 €
On  voit  que c‘est  la  cellule  RS50  qui  a  le  courant  continu  maximum,  ce  qui  nous
permettra d’exploiter au mieux le moteur. En plus de cela, il s’agit du modèle de cellule
le moins cher.
C’est pourquoi nous avons choisi de faire notre batterie avec des Reliance RS50.



## 46

IV.5 Choix du contrôleur
Le contrôleur est un élément essentiel du groupe motopropulseur électrique. Il assure
la   gestion   de   la   puissance   transmise   de   la   batterie   vers   le   moteur   et   influence
directement la réactivité, la progressivité de l’accélération et la sécurité du système.
Le  choix  du  contrôleur  a  été  réalisé  en  cohérence  avec  le  moteur  et  la  batterie,  en
privilégiant  des  composants  de  la  même  marque  afin  de  garantir  une  compatibilité
électrique optimale et de simplifier l’intégration. Cette approche permet de s’assurer
que les  niveaux  de  tension  et  de  courant  sont  adaptés  à  l’ensemble  du  groupe
motopropulseur.











Le  contrôleur  VTB  V9600  a  été  retenu  pour  ce  projet.  Il  est  compatible  avec  une
alimentation en 72 V et capable de gérer les courants nécessaires à l’exploitation du
moteur, tout en conservant une marge de sécurité. Il offre également des possibilités de
réglage particulièrement intéressantes pour la pratique du drift.
Le contrôleur est associé à une application dédiée, permettant d’accéder à l’ensemble
des paramètres de fonctionnement. Cette application offre une visualisation complète
des  données  et  permet  de  gérer  finement  le  comportement  du  kart.  Il  est  notamment
possible de créer et enregistrer différents modes de conduite, tels qu’un mode débutant,
un  mode  drift  ou  un  mode  plus  orienté  grip.  Cette  fonctionnalité  constitue  un  atout
important pour les essais, l’apprentissage et l’optimisation du kart en fonction des
conditions et du niveau du pilote.


## 47

## PARTIE V – PRÉPARATION À LA
## FABRICATION
V.1 Anticipation des procédés de fabrication
Avant d’entamer la phase de fabrication, un travail d’anticipation a été réalisé afin de
s’assurer que la conception du kart était compatible avec les moyens de production
réellement disponibles à l’UTT. Cette étape a permis de faire le lien entre la CAO et  la
fabrication, tout en limitant les risques d’erreurs ou d’imprévus lors du passage en
atelier.

Liste des opérations nécessaires
La réalisation complète du kart nécessite un ensemble d’opérations de fabrication
couvrant  plusieurs  domaines  de  la  mécanique.  Les  principales  opérations  identifiées
sont :
- découpe des tubes du châssis aux longueurs définies en CAO,
- cintrage de certains tubes pour respecter la géométrie du châssis,
- grugeage  des  extrémités  de  tubes  afin  d’assurer  un  bon  ajustement  avant
soudure,
- soudure de l’ensemble du châssis tubulaire,
- usinage de pièces spécifiques (fusées, supports, axes, entretoises),
- perçage et taraudage des pièces pour les systèmes de fixation,
- découpe de pièces plates (platines, supports) à partir de fichiers DXF,
- assemblage mécanique des différents sous-ensembles.
L’ensemble de ces opérations a été pris en compte dès la phase de conception afin
d’éviter toute solution irréalisable en pratique.

Machines disponibles à l’UTT
Les procédés de fabrication ont été définis en fonction des machines accessibles dans
les ateliers de l’UTT. Les principaux moyens utilisés ou prévus sont :
- scie à ruban pour la découpe des tubes et profilés,

## 48

- cintreuse pour la mise en forme des tubes du châssis,
- poste à souder pour l’assemblage de la structure tubulaire,
- tour conventionnel pour l’usinage des axes, bagues et filetages,
- fraiseuse conventionnelle pour les rainurages, perçages précis et reprises,
- découpe plasma pour les pièces plates à partir de tôles,
- imprimantes 3D pour la fabrication de gabarits et d’outillages d’aide à la soudure.
Le  choix  des  procédés  a  donc  été  volontairement  orienté  vers  des  solutions  simples,
robustes et reproductibles, compatibles avec un cadre universitaire.
Contraintes liées aux moyens de production
Les moyens de production disponibles impliquent plusieurs contraintes qui ont été
intégrées dès la conception :
- une précision limitée pour certains procédés, notamment la découpe plasma,
- des tolérances à anticiper lors de l’assemblage,
- des créneaux d’accès aux machines restreints, nécessitant une bonne
préparation en amont,
- la nécessité de limiter le nombre de reprises et d’opérations complexes.
Ces contraintes ont conduit à privilégier :
- des géométries simples et accessibles,
- l’utilisation de gabarits pour fiabiliser les assemblages,
- une CAO très fidèle à la réalité afin de réduire les ajustements en atelier.

V.2 Conception des gabarits et outillages


## 49



CAO des gabarits de soudure
Afin de  garantir la précision géométrique des assemblages soudés, en particulier pour
les éléments critiques de la direction, un ensemble de gabarits de soudure spécifiques
a  été  conçu  directement  en  CAO.  Ces  gabarits  ont  été  modélisés  à  partir  des  pièces
finales, en reprenant exactement les géométries, les entraxes et les positions relatives
définies dans l’assemblage principal.
Selon  les  besoins,  certains  gabarits  sont  réutilisables,  tandis  que  d’autres  ont  été
conçus en double, notamment pour distinguer les côtés gauche et droit  du kart. Cette
distinction est essentielle pour éviter toute erreur de symétrie, particulièrement sur les
pièces  de  direction  où  un  simple  décalage  peut  avoir  un  impact  important  sur  la
géométrie finale.





## 50

Impression 3D des gabarits


L’ensemble  des  pièces  imprimées  correspond  aux  différents  sous-ensembles   de
direction et de châssis, incluant notamment :
- des supports de positionnement de fusées,
- des gabarits de maintien pour les bras de châssis,
- des pièces de calage pour les soudures,

## 51

- des éléments dédiés aux assemblages gauche et droit.
Ces gabarits ont été conçus pour maintenir les pièces dans la bonne position pendant la
soudure, tout en laissant l’accès nécessaire au cordon de soudure.

Intérêt pour la précision et la répétabilité
L’utilisation de gabarits imprimés en 3D a joué un rôle clé dans la maîtrise de la précision
des assemblages. On souhaite limiter au maximum les erreurs liées :
- au positionnement manuel,
- aux déformations pendant la soudure,
- aux variations entre assemblages similaires.
Les gabarits ont permis :
- de respecter les cotes définies en CAO,
- d’assurer un positionnement reproductible des pièces,
- de réduire les ajustements a posteriori,
- de fiabiliser les assemblages gauche/droit.
Cette  approche  améliore  également  la  répétabilité  :  un  même  assemblage  peut  être
réalisé plusieurs fois avec une géométrie identique, ce qui est essentiel pour garantir un
comportement symétrique du kart.

V.3 Préparation des fichiers de fabrication
Les différentes pièces du châssis et de ses sous-ensembles ont été conçues pour être
réalisées à partir de tôles ou de plaques d’acier d’épaisseur comprise entre 2 mm et 6
mm. Dès la phase de conception, ces pièces ont été pensées pour être fabriquées par
découpe plasma, procédé disponible à la halle de l’UTT.


## 52


Plan du support d’étrier sur
## Creo




À partir de la modélisation CAO, l’ensemble des pièces a été mis en plan puis en DXF, en
respectant  la  méthode  vue  en  TN04  afin  que  les  plans  soient  compatibles  avec  les
machines de découpe plasma.

Les fichiers DXF ont ensuite été transmis pour la découpe plasma à la halle de l’UTT, en
respectant les épaisseurs de matière prévues lors de la conception.
Ce procédé présentait à première vue plusieurs avantages pour nous :
- disponibilité immédiate au sein de l’école
- coût réduit comparé à payer un prestataire privé
- adaptation correcte aux pièces de forme simple
Lors  de  la  préparation  des  fichiers  de  fabrication,  il  a  été  initialement  supposé  que  la
découpe plasma permettrait d’obtenir une précision dimensionnelle suffisante pour
l’ensemble des pièces plates du projet. Cette hypothèse reposait sur :
- l’épaisseur modérée des tôles utilisées (entre 2 mm et 6 mm)
- la simplicité géométrique de certaines pièces
Il a également été considéré au préalable que les écarts dimensionnels éventuels liés au
procédé  plasma  resteraient  faibles  et  compatibles  avec  les  tolérances  nécessaires  à
l’assemblage du châssis, notamment après un léger ajustement manuel si nécessaire.
Ainsi,  à  ce  stade  du  projet, nous  étions  convaincus  que  ce  procédé  allait  nous  suffire
largement  et  que  nous  allions  avoir  toutes  nos  pièces  plates, requérant  peut-être  une
légère reprise à la main.


## 53

## PARTIE VI – FABRICATION ET
## RÉALISATION
VI.1 Découpe et soudure du châssis

Découpe des tubes et de la taule


## 54

La  fabrication  du  châssis  a  débuté  par  la  découpe  des  tubes  en  acier  aux  longueurs
définies lors de la conception CAO. L’ensemble des longueurs nécessaires avait été
préalablement identifié afin de limiter les pertes de matière et d’optimiser l’utilisation
des barres de tubes disponibles.
La découpe a été réalisée à la scie à ruban, ce qui permet d’obtenir des coupes propres,
droites  et  suffisamment  précises  pour  un  assemblage  ultérieur.  Chaque  tube  a  été
identifié et contrôlé après découpe afin de garantir la conformité avec les cotes issues
de la CAO.

Cintrage et grugeage
Certains tubes du châssis nécessitent une mise en forme spécifique afin de respecter la
géométrie globale du kart. Ces tubes ont été cintrés à l’aide d’une cintreuse adaptée au
diamètre et à l’épaisseur choisis. Les rayons de cintrage ont été définis en amont lors de
la conception afin d’éviter toute déformation excessive ou écrasement du tube.
Le   grugeage   des   extrémités   de   tubes   a   ensuite   été   réalisé   pour   assurer   un   bon
ajustement entre les éléments avant soudure. Cette opération permet d’obtenir un
contact correct entre les tubes, ce qui facilite :
- le positionnement,
- la qualité de la soudure,
- la rigidité finale de la structure.
Soudure complète du châssis


## 55

Une fois l’ensemble correctement positionné et contrôlé, la soudure du châssis a été
réalisée.  La  soudure  a  été  effectuée  progressivement,  en  respectant  un  ordre  logique
afin de limiter les déformations dues aux contraintes thermiques.
Des points de soudure ont d’abord été réalisés pour figer la structure, avant de procéder
aux cordons définitifs. Cette méthode permet de vérifier l’alignement général du châssis
avant la soudure finale et d’effectuer d’éventuelles corrections si nécessaire.
À l’issue de cette étape, le châssis constitue une structure rigide et cohérente, prête à
recevoir  les  différents  sous-ensembles  mécaniques  du  kart.  La  qualité  de  cette  phase
est déterminante, car elle conditionne directement la précision de l’assemblage final et
le comportement dynamique du véhicule.

## 56

VI.2 Usinage des fusées avant




## 57

Transmission des fichiers techniques
Les fusées avant étant des pièces critiques pour la géométrie de direction, leur usinage
a fait l’objet d’une préparation rigoureuse. Les fichiers techniques nécessaires à la
fabrication ont été transmis aux techniciens de l’UTT.
Ces fichiers comprenaient :
- les cotes fonctionnelles des différentes pièces,
- les tolérances dimensionnelles associées aux éléments critiques,
- les  tolérances  géométriques  nécessaires  au  respect  de  la  géométrie  de  la
direction,
- les spécifications des alésages et des filetages,
- ainsi  que  les  zones  recevant  les  roulements,  avec  les  ajustements  prévus  pour
assurer le bon fonctionnement de l’ensemble.

Réalisation par les techniciens de l’UTT
L’usinage des fusées a été réalisé par les techniciens de l’UTT, à partir des documents
fournis.  Les  pièces  obtenues  respectent  globalement  la  géométrie  définie  en  CAO  et
sont exploitables pour la suite du projet.
Toutefois,   lors   de   la   réception   des   pièces,   certaines   différences   par   rapport   aux
spécifications initiales ont été identifiées. Un contrôle visuel et fonctionnel a été réalisé
dès la réception des fusées afin de vérifier leur conformité.
Deux écarts principaux ont été constatés :
- Concernant les filetages, un pas de 2 mm a été réalisé, alors que le pas spécifié
sur les fichiers était de 1,5 mm.
- Concernant les logements de roulements, ceux-ci avaient été définis comme des
montages   serrés sur la   bague   extérieure.   Les   alésages   réalisés   présentent
toutefois un ajustement légèrement glissant.
Ces écarts ont été rapidement identifiés. Bien que ces différences ne correspondent pas
exactement aux spécifications initiales, elles restent rattrapables.


## 58

VI.3 Découpe plasma des pièces plates

Résultats obtenus
Des pièces plates du kart, ont été préparées à partir de fichiers DXF issus de la CAO. Ces
pièces concernent en grande partie la direction, et jouent donc un rôle essentiel dans la
précision globale de l’assemblage.
Initialement, la découpe de ces pièces devait être réalisée par découpe plasma au sein
des   moyens   disponibles.   Au   moment   prévu   pour   cette   opération,   de   nombreux
problèmes  techniques  sont  survenus,  entraînant  un  retard  global  d’environ  deux
semaines sur le planning initial.
À l’issue de ce délai, seule une partie des pièces a pu être découpée.

Problèmes de précision dimensionnelle
Après réception et contrôle des pièces découpées au plasma, il est apparu que les cotes
définies en CAO n’étaient pas respectées. Les écarts mesurés atteignaient près de 2 mm
par côté, ce qui pouvait représenter jusqu’à 4 mm d’erreur sur une longueur totale.

## 59

Ces  écarts  sont  incompatibles  avec  les  exigences  du  projet.  En  effet,  les  pièces
concernées sont majoritairement liées à la géométrie de la direction, pour laquelle une
très grande précision est indispensable.


VI.4 Gestion des écarts et retards
Analyse des causes
Les  écarts  constatés  lors  de  la  découpe  des  pièces  plates  sont  principalement  liés  au
procédé de découpe plasma, qui ne permet pas d’atteindre la précision dimensionnelle
requise pour des pièces directement liées à la géométrie de la direction.

Impact sur le planning
Ces difficultés sont survenues à un moment clé de la fabrication et ont entraîné un retard
d’environ deux semaines sur le planning initial. Certaines opérations d’assemblage ont
dû être reportées dans l’attente de pièces conformes.

Solutions mises en œuvre
Face aux écarts constatés, plusieurs solutions ont été étudiées :
- la reprise manuelle des pièces découpées au plasma,
- la modification des pièces pour compenser les erreurs,
- la refabrication complète avec un procédé plus précis.
La reprise ou l’adaptation des pièces plasma a rapidement été écartée, car sur certaines
pièces il était impossible de percer car la largeur de pièce était trop petite de 4mm.
La  solution  retenue  a  donc  été  un  changement  de  procédé  de  fabrication.  Les  fichiers
DXF ont été transmis à une entreprise spécialisée en découpe laser, offrant un niveau de
précision  bien  supérieur.  Les  pièces  obtenues  par  découpe  laser  respectent  les  cotes
définies en CAO et sont compatibles avec les exigences géométriques du projet.

## 60

Bien   que   cette   solution   ait   impliqué   un   retard,   un cout, et   une   adaptation   de
l’organisation initiale, elle a permis de sécuriser la suite du projet et d’assurer la qualité
finale du kart.

Pieces obtenues :

Différence entre la découpe laser (haut) et plasma (bas) :




## 61

## PARTIE VII – RECHERCHE DE SPONSORS
## ET FINANCEMENT
La  réalisation  du  projet  de  kart  implique  des  coûts  significatifs  liés  à  l’achat  des
matériaux, à la fabrication des pièces, ainsi qu’aux différentes étapes de mise au point
et d’assemblage. Dès le lancement du projet, la question du financement s’est donc
imposée comme un enjeu central afin de garantir la faisabilité technique tout en limitant
l’impact financier direct pour les membres de l’équipe.

VII.1 Modèle de financement
Une demande de financement a été déposée auprès du dispositif C2F de l’UTT.  Ce
dispositif vise à soutenir financièrement les projets étudiants.
Cette demande avait pour objectif de couvrir une partie des dépenses liées aux matières
premières et matériels nécessaires à la réalisation du kart.
En complément de cette démarche, le financement du projet repose actuellement sur la
Fondation  UTT  qui  permet  de  collecter  des  dons  dédiés  aux  projets  étudiants.  Un
avantage majeur de ce mode de financement réside dans le fait que les dons effectués
par des particuliers sont défiscalisables à hauteur de 66 %. Concrètement, nos familles
réalisent ces dons via la fondation. Ce mécanisme permet de réduire fortement le coût
réel supporté par l’équipe, puisque seule la part non défiscalisée reste à notre charge.
Cette  solution  constitue  un  levier  financier  particulièrement  efficace  et  permet  de
diminuer drastiquement le budget global réel du projet !

VII.2 Recherche de sponsors
En  parallèle  des  démarches de  financement  avec  la  fondation,  une  campagne  de
recherche de sponsors a été menée dès le début du semestre. L’objectif de cette
démarche est de nouer des partenariats avec des entreprises susceptibles d’apporter
un soutien financier, matériel ou technique au projet. Plusieurs entreprises ont ainsi été
démarchées, notamment par l’intermédiaire d’anciens étudiants de l’UTT aujourd’hui en
poste dans des structures industrielles ou techniques en lien avec le domaine du projet.
Cette approche permet de s’appuyer sur un réseau d’anciens élèves déjà sensibilisés à
l’environnement de l’UTT, et donc potentiellement plus réceptifs à un projet étudiant à

## 62

vocation technique. À ce stade du projet, aucun retour concret n’a encore été obtenu.
Cependant, cette situation est cohérente avec l’état d’avancement actuel : le projet
étant encore en phase de conception et de fabrication, il ne dispose pas encore d’un
produit finalisé ou d’un prototype pleinement fonctionnel à présenter.
Nous  allons  alors poursuivre  activement  le  démarchage en  particulier  à  partir  du
moment où un produit concret pourra être mis en avant. La présentation d’un kart
assemblé,  fonctionnel  et  testé  constituera  un  support  de  communication  bien  plus
attractif pour les entreprises, facilitant ainsi l’obtention de partenariats et de sponsors.

## PARTIE VIII – TRAVAUX RESTANTS ET
## PRÉVISIONNEL DU PROJET
À la fin du semestre A25, le projet n’a pas pu être mené jusqu’à son terme en raison des
retards  rencontrés notamment lors  de  la  fabrication  des  pièces  plates.  Ces  difficultés
ont  entraîné  un  décalage  dans  l’enchaînement  des  phases  d’assemblage  et  ont
empêché la réalisation complète de l’intégration et des essais dans le temps imparti.

L’intégration du groupe motopropulseur
Les travaux restant à  réaliser concernent en premier lieu l’intégration complète du
groupe  motopropulseur.  Cette  étape  comprendra  la  mise  en  place  du  moteur,  de  la
batterie et du contrôleur sur le châssis, ainsi que la vérification des encombrements et
de la cohérence de l’implantation avec la CAO. Elle sera suivie par le montage de la
direction et du train avant, incluant l’assemblage des fusées, des biellettes et de la
colonne  de  direction.  Les  gabarits  imprimés  en  3D  seront  utilisés  afin  de  garantir  le
respect  de  la  géométrie  définie  lors  de  la  conception.  Une  fois  ces  sous-ensembles
intégrés,  l’assemblage  final  du  kart  pourra  être  réalisé,  accompagné  des  finitions
mécaniques   et   des   vérifications   de   sécurité   nécessaires   avant   toute   mise   en
fonctionnement.

Tests statiques et dynamiques
Une phase de tests sera ensuite menée afin de valider les choix techniques réalisés au
cours  du  projet.  Des  essais  statiques  permettront  de  contrôler  les  serrages,  les  jeux
mécaniques et la sécurité électrique de l’ensemble. Ces vérifications seront suivies de
tests dynamiques à faible vitesse, destinés à observer le comportement général du kart

## 63

et à préparer les premiers essais en drift dans un environnement sécurisé. Cette phase
d’essais constituera une étape essentielle pour identifier les ajustements nécessaires.
Le semestre suivant sera principalement consacré à la finalisation et à l’optimisation du
kart. Les essais en conditions réelles permettront d’affiner la géométrie de direction,
d’optimiser la répartition des masses et d’ajuster le paramétrage du contrôleur  afin
d’obtenir un comportement adapté à la pratique du drift. Cette dernière phase permettra
de conclure le projet par la mise en service d’un kart fonctionnel, conforme aux objectifs
initiaux, et exploitable comme support d’essais et d’évolutions futures.

## PARTIE IX - CONCLUSION GÉNÉRALE
Le projet « Karting de Drift » a permis de mener une démarche complète de conception
et de réalisation d’un système mécanique complexe, depuis la définition du besoin
jusqu’aux premières phases de fabrication. À travers ce projet, une attention particulière
a été portée à l’adaptation du kart aux exigences spécifiques du drift, notamment en
termes de géométrie de direction, de répartition des masses et d’intégration d’un groupe
motopropulseur électrique.
Les différentes étapes du projet  ont mis en évidence l’importance du lien entre la
conception  numérique  et  la  fabrication  réelle.  La  CAO  a  joué  un  rôle  central,  à  la  fois
comme outil de conception, de validation et d’aide à la décision, permettant d’anticiper
de  nombreuses  contraintes  et  de  sécuriser  les  phases  de  fabrication.  Les  difficultés
rencontrées, en particulier lors de la découpe des pièces plates, ont souligné l’impact
du choix des procédés de fabrication sur la précision et le respect du planning, tout en
apportant une expérience concrète de gestion des imprévus.
Bien que le projet n’ait pas pu être entièrement finalisé dans le temps imparti, les bases
techniques sont solides et les étapes restantes clairement identifiées. La poursuite du
projet lors du semestre suivant permettra de finaliser l’assemblage, de réaliser les essais
et d’optimiser les réglages, afin d’aboutir à un kart fonctionnel et conforme aux objectifs
initiaux. Ce projet constitue ainsi une expérience formatrice, alliant théorie, pratique et
gestion  de  projet,  et  offrant  un  support  pertinent  pour  de  futures  améliorations  et
expérimentations.