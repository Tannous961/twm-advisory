import type { IntentId } from "@/lib/intake";
import type { Lang } from "@/lib/content";

export type SignalPost = {
  slug: string;
  date: string;
  intent: IntentId;
  readingMinutes: number;
  title: Record<Lang, string>;
  insight: Record<Lang, string>;
  verdict: Record<Lang, string>;
  body: Record<Lang, string[]>;
};

export const signalPosts: SignalPost[] = [
  {
    slug: "temps-libere-et-marge",
    date: "2026-09-06",
    intent: "discover",
    readingMinutes: 4,
    title: {
      fr: "Le temps libéré n'est pas encore de la marge.",
      en: "Time freed up is not yet margin.",
    },
    insight: {
      fr: "La bonne question vient après le gain de temps : que devient cette capacité ?",
      en: "The right question comes after the time savings: what happens to that capacity?",
    },
    verdict: {
      fr: "Décider de l'usage du temps libéré avant de déployer.",
      en: "Decide how freed-up time will be used before deploying.",
    },
    body: {
      fr: [
        "Un agent qui traite une tâche en dix minutes au lieu d'une heure produit un changement réel, mais ce changement ne se mesure pas au temps affiché par l'outil. Il se mesure à ce que les personnes concernées font ensuite de cette heure retrouvée. Sans cette mesure, le gain reste une hypothèse.",
        "Trois situations sont à distinguer. La première : le temps libéré est réaffecté à des tâches à plus forte valeur, et la marge progresse réellement. La deuxième : le temps libéré se dilue en tâches de contrôle, de vérification ou de correction qui n'existaient pas avant, et le gain net est faible ou nul. La troisième : le temps libéré n'est simplement pas réaffecté, faute de plan, et il disparaît dans le fonctionnement courant sans effet visible.",
        "Ces trois issues ne se décident pas après coup. Elles se décident avant le déploiement, en définissant précisément ce que chaque poste concerné fera de la capacité libérée. Un déploiement sans cette décision produit un outil qui fonctionne et une organisation qui n'a pas changé.",
        "Pour un dirigeant, la question à poser avant tout projet d'automatisation n'est donc pas seulement combien de temps sera économisé, mais quelle décision de réaffectation a été prise, par qui, et comment son effet sera vérifié dans les mois suivants.",
      ],
      en: [
        "An agent that handles a task in ten minutes instead of an hour produces a real change, but that change is not measured by the time the tool displays. It is measured by what the people involved subsequently do with the hour they recovered. Without that measurement, the gain remains a hypothesis.",
        "Three situations should be distinguished. The first: freed-up time is reallocated to higher-value tasks, and margin genuinely improves. The second: freed-up time dissolves into checking, verification or correction tasks that did not exist before, and the net gain is small or nil. The third: freed-up time is simply not reallocated, for lack of a plan, and it disappears into day-to-day operations with no visible effect.",
        "These three outcomes are not decided after the fact. They are decided before deployment, by defining precisely what each affected role will do with the freed capacity. A deployment made without that decision produces a tool that works and an organization that has not changed.",
        "For a leader, the question to ask before any automation project is therefore not only how much time will be saved, but what reallocation decision has been made, by whom, and how its effect will be verified in the following months.",
      ],
    },
  },
  {
    slug: "gain-share-mesurable",
    date: "2026-09-05",
    intent: "strategy",
    readingMinutes: 5,
    title: {
      fr: "Un gain-share crédible commence par la mesure.",
      en: "A credible gain-share starts with measurement.",
    },
    insight: {
      fr: "Partager les gains suppose d'abord de s'entendre sur ce qui constitue un gain.",
      en: "Sharing gains requires first agreeing on what constitutes a gain.",
    },
    verdict: {
      fr: "Le protocole de mesure précède le modèle de rémunération.",
      en: "The measurement protocol comes before the compensation model.",
    },
    body: {
      fr: [
        "Un modèle de gain-share séduit par sa logique : aligner la rémunération d'un prestataire sur la valeur réellement produite. Mais cette logique ne tient que si le gain est défini avant l'intervention, et non reconstitué après coup à partir de chiffres disponibles.",
        "La définition d'une référence est la première étape. Il faut établir, avant tout changement, une mesure fiable de la situation initiale : volume traité, temps consommé, taux d'erreur, coût unitaire. Cette référence doit être acceptée par les deux parties avant que le projet ne commence, faute de quoi toute comparaison ultérieure sera contestable.",
        "L'assiette du gain doit ensuite être précisée : gain brut ou net des coûts additionnels, période de mesure, périmètre exact des activités concernées. Un gain calculé sur un périmètre flou ou une période trop courte ne reflète pas la réalité économique de l'intervention.",
        "La validation des chiffres doit être indépendante de la partie qui bénéficie du partage, et les limites d'attribution doivent être posées explicitement : quelle part du gain observé est attribuable au projet, et quelle part relève de facteurs externes — variation d'activité, changements organisationnels, saisonnalité. Sans cette discussion, le partage des gains devient un partage d'incertitude.",
      ],
      en: [
        "A gain-share model is appealing in its logic: align a provider's compensation with the value actually produced. But that logic only holds if the gain is defined before the intervention, not reconstructed afterward from whatever figures happen to be available.",
        "Establishing a baseline is the first step. Before any change, a reliable measure of the starting situation must be set: volume processed, time consumed, error rate, unit cost. This baseline must be accepted by both parties before the project begins, otherwise any later comparison will be contestable.",
        "The basis of the gain must then be clarified: gross gain or net of additional costs, measurement period, exact scope of the activities concerned. A gain calculated over a vague scope or too short a period does not reflect the actual economics of the intervention.",
        "Validation of the figures must be independent of the party benefiting from the sharing arrangement, and attribution limits must be stated explicitly: what share of the observed gain is attributable to the project, and what share results from external factors — activity variation, organizational changes, seasonality. Without that discussion, gain-sharing becomes uncertainty-sharing.",
      ],
    },
  },
  {
    slug: "premier-chantier-performance",
    date: "2026-09-04",
    intent: "use_case",
    readingMinutes: 4,
    title: {
      fr: "Choisir le premier chantier de performance.",
      en: "Choosing the first performance initiative.",
    },
    insight: {
      fr: "Le meilleur point de départ réunit valeur, faisabilité et capacité à prouver.",
      en: "The best starting point combines value, feasibility and the ability to prove results.",
    },
    verdict: {
      fr: "Étendre seulement après observation sur un périmètre délimité.",
      en: "Expand only after observation on a defined scope.",
    },
    body: {
      fr: [
        "Le premier chantier ne doit pas être le plus ambitieux, mais le plus démonstratif. Il faut choisir un problème délimité : un processus identifiable, des règles de décision claires, un volume suffisant pour que le résultat soit lisible, et des données déjà accessibles.",
        "Le coût complet doit être estimé avant l'engagement, et pas seulement le coût de mise en œuvre. Il faut inclure la supervision nécessaire, la maintenance du système, la formation des équipes et les ajustements prévisibles dans les premiers mois d'usage.",
        "Une porte de sortie doit être définie dès le départ : à quelles conditions le chantier sera-t-il arrêté, révisé ou poursuivi ? Cette décision ne doit pas dépendre de l'enthousiasme du moment, mais de critères fixés avant le lancement.",
        "Étendre le périmètre n'a de sens qu'après une période d'observation sur le chantier initial, suffisamment longue pour distinguer un effet réel d'un effet de démonstration. C'est cette observation, et non la promesse initiale, qui justifie l'investissement suivant.",
      ],
      en: [
        "The first initiative should not be the most ambitious, but the most demonstrative. Choose a well-defined problem: an identifiable process, clear decision rules, enough volume for the result to be legible, and data that is already accessible.",
        "The full cost must be estimated before committing, not just the implementation cost. It must include the necessary supervision, system maintenance, team training and the adjustments to be expected in the first months of use.",
        "An exit point must be defined from the outset: under what conditions will the initiative be stopped, revised or continued? That decision should not depend on momentary enthusiasm, but on criteria set before launch.",
        "Expanding the scope only makes sense after an observation period on the initial initiative, long enough to distinguish a real effect from a demonstration effect. It is that observation, not the initial promise, that justifies the next investment.",
      ],
    },
  },
];

export function getSignalPost(slug: string): SignalPost | undefined {
  return signalPosts.find((p) => p.slug === slug);
}

export function getAllSignalSlugs(): string[] {
  return signalPosts.map((p) => p.slug);
}
