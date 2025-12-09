import React, { useState, useEffect } from 'react';
import { Shuffle, List, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

const PhilosophyQuiz = () => {
  const questions = [
    {
      id: 1,
      question: "The specificity of the mythological worldview:",
      options: [
        "The unity of man and the world",
        "Logical representation of the world",
        "Believing in one God",
        "Reasoning and proving",
        "Expressing inner side of the man"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Philosophical worldview has its own specifics:",
      options: [
        "based on the logical method of cognition",
        "based on the rational level of knowledge",
        "has its own set of concepts, categories, special terms",
        "is a system of knowledge",
        "all answer are correct"
      ],
      correct: 4
    },
    {
      id: 3,
      question: "The object of philosophy:",
      options: [
        "the man and society",
        "the nature and the god",
        "the being and reality",
        "the world and the man",
        "mind and thinking"
      ],
      correct: 3
    },
    {
      id: 4,
      question: "The subject of philosophy is:",
      options: [
        "the most general laws and patterns of development and functioning of human society, thinking and the universe",
        "the fundamental principles of being",
        "the Arche",
        "the man in the world",
        "space and time"
      ],
      correct: 0
    },
    {
      id: 5,
      question: "The main divisions of philosophy:",
      options: [
        "Sociology, culture, myth, religion",
        "Physics, psychology, chemistry",
        "Science, art, moral, politics",
        "Gnoseology, ontology, ethics, aesthetics",
        "Worldview, religion, mythology"
      ],
      correct: 3
    },
    {
      id: 4,
      question: "The subject of philosophy is:",
      options: [
        "the most general laws and patterns of development and functioning of human society, thinking and the universe",
        "the fundamental principles of being",
        "the Arche",
        "the man in the world",
        "space and time"
      ],
      correct: 0
    },
    {
      id: 5,
      question: "The main divisions of philosophy:",
      options: [
        "Sociology, culture, myth, religion",
        "Physics, psychology, chemistry",
        "Science, art, moral, politics",
        "Gnoseology, ontology, ethics, aesthetics",
        "Worldview, religion, mythology"
      ],
      correct: 3
    },
    {
      id: 6,
      question: "Which function doesn't belong to philosophy:",
      options: [
        "Worldview",
        "Scientific",
        "Ideological",
        "Critical",
        "Methodological"
      ],
      correct: 1
    },
    {
      id: 7,
      question: "The basic question of philosophy:",
      options: [
        "What is primary: consciousness or matter?",
        "What is primary: egg or hen?",
        "What is primary: man or nature?",
        "To be or not to be?",
        "What is the essence of life?"
      ],
      correct: 0
    },
    {
      id: 8,
      question: "The other side of the basic question of philosophy:",
      options: [
        "Relation of thinking to being",
        "Is there the God?",
        "What is the meaning of life?",
        "Who created the man?",
        "What is reality?"
      ],
      correct: 0
    },
    {
      id: 9,
      question: "Solution of the basic question of philosophy:",
      options: [
        "Gnosticism and agnosticism",
        "Dualism and monism",
        "Materialism and idealism",
        "Naturalism and sociologism",
        "Theism and atheism"
      ],
      correct: 2
    },
    {
      id: 10,
      question: "Solution of the other side of the basic question of philosophy:",
      options: [
        "Gnosticism and agnosticism",
        "Dualism and monism",
        "Materialism and idealism",
        "Naturalism and sociologism",
        "Theism and atheism"
      ],
      correct: 0
    },
    {
      id: 11,
      question: "Metaphysics in philosophy states:",
      options: [
        "the world is unreal",
        "the world is flux",
        "the world is static, unchanging",
        "the world is real",
        "the world is complex"
      ],
      correct: 2
    },
    {
      id: 12,
      question: "Dialectics in philosophy states:",
      options: [
        "the world is unreal",
        "the world is flux",
        "the world is static, unchanging",
        "the world is real",
        "the world is complex"
      ],
      correct: 1
    },
    {
      id: 13,
      question: "Consciousness is state of:",
      options: [
        "mental",
        "perception",
        "sensation",
        "thinking",
        "feeling"
      ],
      correct: 0
    },
    {
      id: 14,
      question: "The central problem of Consciousness:",
      options: [
        "Ideality",
        "Reality",
        "Mind and body",
        "Truth",
        "Qualia"
      ],
      correct: 2
    },
    {
      id: 15,
      question: "What does NOT belong to Sensory knowledge?",
      options: [
        "sensations",
        "perceptions",
        "representations",
        "reasoning",
        "imagination"
      ],
      correct: 3
    },
    {
      id: 16,
      question: "What does NOT belong to Rational knowledge?",
      options: [
        "concepts",
        "judgments",
        "conclusions",
        "intuition",
        "theories"
      ],
      correct: 3
    },
    {
      id: 17,
      question: "True being according to Plato:",
      options: [
        "atoms",
        "ideas",
        "things",
        "souls",
        "god"
      ],
      correct: 1
    },
    {
      id: 18,
      question: "Being according to Aristotle:",
      options: [
        "substance",
        "predicate",
        "quality",
        "quantity",
        "idea"
      ],
      correct: 0
    },
    {
      id: 19,
      question: "Being according to Heidegger:",
      options: [
        "essence",
        "substance",
        "existence",
        "reality",
        "ideality"
      ],
      correct: 2
    },
    {
      id: 20,
      question: "Human according to Social Darwinism is:",
      options: [
        "symbolic animal",
        "organism",
        "sentient being",
        "moral being",
        "social being"
      ],
      correct: 1
    },
    {
      id: 21,
      question: "Human according to Marxism:",
      options: [
        "symbolic animal",
        "organism",
        "sentient being",
        "moral being",
        "social being"
      ],
      correct: 4
    },
    {
      id: 22,
      question: "Human according to Descartes:",
      options: [
        "symbolic animal",
        "organism",
        "rational being",
        "moral being",
        "social being"
      ],
      correct: 2
    },
    {
      id: 23,
      question: "Moral is an object of study of:",
      options: [
        "axiology",
        "epistemology",
        "aesthetics",
        "ethics",
        "logics"
      ],
      correct: 3
    },
    {
      id: 24,
      question: "«Things-in itself» by Kant is:",
      options: [
        "Things we can cognize",
        "Things we cannot cognize",
        "Things existing",
        "Things non-existing",
        "Ideal things"
      ],
      correct: 1
    },
    {
      id: 25,
      question: "«noumena» by Kant is:",
      options: [
        "Unknowable world",
        "Knowable world",
        "Reality",
        "Sensual images of objects",
        "Existence"
      ],
      correct: 0
    },
    {
      id: 26,
      question: "«phenomena» by Kant is:",
      options: [
        "World",
        "Reality",
        "Sensual images of objects",
        "Essence",
        "Existence"
      ],
      correct: 2
    },
    {
      id: 27,
      question: "Tengrism can be defined as:",
      options: [
        "Monotheism",
        "Deism",
        "System of beliefs",
        "Philosophy",
        "Theism"
      ],
      correct: 2
    },
    {
      id: 28,
      question: "Shamanism is a form of:",
      options: [
        "Spiritualism",
        "Totemism",
        "Magic",
        "Mythology",
        "Religion"
      ],
      correct: 4
    },
    {
      id: 29,
      question: "Combination of different Beliefs, Faiths, Thoughts in one Unique Thinking System is called:",
      options: [
        "Syncretism",
        "Natural philosophy",
        "Science",
        "Mythology",
        "Religion"
      ],
      correct: 0
    },
    {
      id: 30,
      question: "Levy-Bruhl explained this quality by saying that the primitive mentality obeys something he called 'the law of participation', which means that thoughts can be joined by connections which having nothing in common with those of our logic. What did he mean?:",
      options: [
        "Animism",
        "Totemism",
        "Mythology",
        "Magic",
        "Spiritualism"
      ],
      correct: 2
    },
    {
      id: 31,
      question: "Kazakh nomads had various cults and rites. Which one was essential for Kazakh worldview?:",
      options: [
        "Cult of ancestors",
        "Cult of the Sun",
        "Cult of the fire",
        "Cult of the earth",
        "Cult of the sky"
      ],
      correct: 4
    },
    {
      id: 32,
      question: "What is the name of philosophical system of Marxism?",
      options: [
        "Objective idealism",
        "Subjective idealism",
        "Mechanical materialism",
        "Dialectical materialism",
        "Metaphysical materialism"
      ],
      correct: 3
    },
    {
      id: 33,
      question: "The central category of Marx's Historical materialism:",
      options: [
        "Politics",
        "Economics",
        "Forms of social consciousness",
        "Social-economic formation",
        "Industrial relations"
      ],
      correct: 3
    },
    {
      id: 34,
      question: "Freedom in accordance with the teachings of Baruch Spinoza is:",
      options: [
        "Human will",
        "God's will",
        "Human action",
        "Recognized necessity",
        "Natural law"
      ],
      correct: 3
    },
    {
      id: 35,
      question: "In the irrational philosophy of Soren Kierkegaard, the central problem is:",
      options: [
        "The essence of man",
        "Rational thinking",
        "The problem of truth",
        "Human existence",
        "Knowledge of God"
      ],
      correct: 3
    },
    {
      id: 36,
      question: "The ethical ideal of Nietzsche's philosophy is:",
      options: [
        "Hedonist",
        "Christian",
        "Muslim",
        "Stoick",
        "Superman"
      ],
      correct: 4
    },
    {
      id: 37,
      question: "The main philosophical categories of Albert Camus:",
      options: [
        "Being and thinking",
        "Absurdity and rebellion",
        "Existence and non-existence",
        "Essence and existence",
        "Life and death"
      ],
      correct: 1
    },
    {
      id: 38,
      question: "Why does Jean Paul Sartre believe that Existentialism is humanism?",
      options: [
        "Man is a free creature",
        "Man himself determines his existence",
        "Man loves",
        "Man is a god-like creature",
        "Man creates"
      ],
      correct: 1
    },
    {
      id: 39,
      question: "What layer of the human psyche was discovered by Sigmund Freud?",
      options: [
        "Thinking",
        "Unconscious",
        "Archetypes",
        "Imagination",
        "Memory"
      ],
      correct: 1
    },
    {
      id: 40,
      question: "What ancient Greek philosopher believed that the main task was self-knowledge:",
      options: [
        "Plato",
        "Socrates",
        "Aristotle",
        "Thales",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 41,
      question: "Translation of word \"axiology\":",
      options: [
        "Study of values",
        "Cosmo centrism",
        "Love Theo",
        "Pantheism",
        "Love Humanity"
      ],
      correct: 0
    },
    {
      id: 42,
      question: "\"There are only two substances in the beginning of the world – thinking and extended substances (dualism)\" is from philosophy of:",
      options: [
        "E.Kant",
        "D.Hume",
        "R.Descartes",
        "J.-P.Sartre",
        "Protagoras"
      ],
      correct: 2
    },
    {
      id: 43,
      question: "Theory of scientific knowledge is called as:",
      options: [
        "Cognition",
        "Epistemology",
        "Social philosophy",
        "Feeling",
        "Axiology"
      ],
      correct: 1
    },
    {
      id: 44,
      question: "The object of philosophy is:",
      options: [
        "Cognition process and the place of man in this world",
        "World in whole and the place of man in this world",
        "Human being",
        "Truth, unconcealment",
        "Mind at whole"
      ],
      correct: 1
    },
    {
      id: 45,
      question: "Ethic is:",
      options: [
        "A study of nature, origin and limits of human cognition",
        "A study of wisdom",
        "A study of morality and moral behaviour",
        "Branch of physics",
        "World religion"
      ],
      correct: 2
    },
    {
      id: 46,
      question: "Aesthetics is:",
      options: [
        "A study of nature, origin and limits of human cognition",
        "A philosophical study of principles, moral and human behaviour",
        "A study of beauty and art",
        "One of the directions of Buddhism",
        "Philosophy as a system"
      ],
      correct: 2
    },
    {
      id: 47,
      question: "The first historical type of outlook that is considered as is a system of ancient legends:",
      options: [
        "Philosophy",
        "Science",
        "Ethics",
        "Mythology",
        "Theology"
      ],
      correct: 3
    },
    {
      id: 48,
      question: "Faith in the supernatural force(-s), which is based on a strong system of moral norms and the special organization of people, is:",
      options: [
        "Religion",
        "Ontology",
        "Physics",
        "Epicureanism",
        "Substantialism"
      ],
      correct: 0
    },
    {
      id: 49,
      question: "The Socratic ethical rationalism was formulated as:",
      options: [
        "Virtue is religion",
        "Virtue is arts",
        "Virtue is knowledge",
        "Virtue is war",
        "Virtue is interests"
      ],
      correct: 2
    },
    {
      id: 50,
      question: "One of the outstanding French existentialist:",
      options: [
        "David Hume",
        "Georg Hegel",
        "Albert Camus",
        "Francis Bacon",
        "Martin Heidegger"
      ],
      correct: 2
    },
    {
      id: 51,
      question: "Division to Subjective spirit, Objective spirit, Absolute spirit comes from philosophy of:",
      options: [
        "Fichte",
        "Hegel",
        "Kant",
        "Shelling",
        "Marx"
      ],
      correct: 1
    },
    {
      id: 52,
      question: "Ancient eastern philosophy developed mainly in:",
      options: [
        "India and China",
        "India and Japan",
        "Persia and China",
        "Egypt and China",
        "India and Korea"
      ],
      correct: 0
    },
    {
      id: 53,
      question: "\"Act only on that maxim through which you can at the same time will that become a universal law\" is:",
      options: [
        "the Hegel's Categorical imperative",
        "the Kant's Categorical imperative",
        "the Kant's Hypothetical imperative",
        "the Fichte's Hypothetical imperative",
        "the Hegel's Hypothetical imperative"
      ],
      correct: 1
    },
    {
      id: 54,
      question: "The famous Descartes's formula \"Cogito, ergo sum\" is translated from Latin as:",
      options: [
        "I think, therefore, I have truth",
        "I think, therefore, I have power",
        "I think, therefore, I have faith",
        "I think, therefore, I exist",
        "I think, therefore, I have values"
      ],
      correct: 3
    },
    {
      id: 55,
      question: "Universal law in Indian philosophy, which operates in the past, present and future, is called:",
      options: [
        "Thinking",
        "Experience",
        "Analysis",
        "Induction",
        "Karma"
      ],
      correct: 4
    },
    {
      id: 56,
      question: "The first Fr.Baconian idol of all human mind is:",
      options: [
        "Cave",
        "Marketplace",
        "Tribe",
        "Theatre",
        "Mind"
      ],
      correct: 2
    },
    {
      id: 57,
      question: "The second Fr.Baconian idol of personal mind is:",
      options: [
        "Cave",
        "Marketplace",
        "Tribe",
        "Theatre",
        "Mind"
      ],
      correct: 0
    },
    {
      id: 58,
      question: "The third Fr.Baconian idol of mind referred to using terms and words is:",
      options: [
        "Cave",
        "Marketplace",
        "Tribe",
        "Theatre",
        "Mind"
      ],
      correct: 1
    },
    {
      id: 59,
      question: "The fourth Fr. Baconian idol of mind referred to authorities is:",
      options: [
        "Cave",
        "Marketplace",
        "Tribe",
        "Theatre",
        "Mind"
      ],
      correct: 3
    },
    {
      id: 60,
      question: "The doctrine about that knowledge is based on experience is:",
      options: [
        "Empiricism",
        "Rationalism",
        "Agnosticism",
        "Abstract general ideas",
        "Complexity"
      ],
      correct: 0
    },
    {
      id: 61,
      question: "E.Kant's categorical imperative is about:",
      options: [
        "There's no place like home",
        "The world is round",
        "Moral problems",
        "Everybody everywhere is pretty much the same",
        "Physical problems"
      ],
      correct: 2
    },
    {
      id: 62,
      question: "The translation of the word \"philosophy\":",
      options: [
        "Pantheism",
        "Love of wisdom",
        "Cosmo centrism",
        "Love Theo",
        "Love Human"
      ],
      correct: 1
    },
    {
      id: 63,
      question: "The word \"Sophist\" is translated from Greek as:",
      options: [
        "Wise man",
        "Warrior",
        "Judge",
        "Man",
        "Thinker"
      ],
      correct: 0
    },
    {
      id: 64,
      question: "He was called «the first teacher»:",
      options: [
        "Socrates",
        "Aristotle",
        "Plato",
        "Diogenes",
        "Heraclitus"
      ],
      correct: 1
    },
    {
      id: 65,
      question: "What beginning (Arche) did Heraclitus recognize?",
      options: [
        "Logos (fire)",
        "Virtue",
        "Intelligence",
        "Honor",
        "Pleasure"
      ],
      correct: 0
    },
    {
      id: 66,
      question: "What beginning did Pythagoras recognize?",
      options: [
        "Numbers",
        "Dialectical argument",
        "Rational instruction",
        "Learning from our mistakes",
        "Breathing"
      ],
      correct: 0
    },
    {
      id: 67,
      question: "A teaching of Aristotle is called as:",
      options: [
        "Academicism",
        "Peripatetism",
        "Buddhism",
        "Atheism",
        "Pantheism"
      ],
      correct: 1
    },
    {
      id: 68,
      question: "Under the Renaissance human was considered to be as:",
      options: [
        "Man is a political creature",
        "Man is a thinking being",
        "Man is a religious being",
        "Human is a creator, artist, enriched microcosm",
        "Man is a sinner"
      ],
      correct: 3
    },
    {
      id: 69,
      question: "\"I know that I know nothing\" was proclaimed by:",
      options: [
        "Thales",
        "Pythagoras",
        "Democritus",
        "Seneka",
        "Socrates"
      ],
      correct: 4
    },
    {
      id: 70,
      question: "A thinker who formulated 5 proofs of existence of God:",
      options: [
        "Augustine",
        "Erasmus of Rotterdam",
        "Thomas Aquinas",
        "Machiavelli",
        "Abelyar"
      ],
      correct: 2
    },
    {
      id: 71,
      question: "Myth of the Cave was developed by:",
      options: [
        "Augustine",
        "Erasmus of Rotterdam",
        "Plato",
        "Machiavelli",
        "Abelyar"
      ],
      correct: 2
    },
    {
      id: 72,
      question: "Theo centrism provides that in the center of the universe is:",
      options: [
        "God",
        "Something mystical",
        "Poetics",
        "Human",
        "Science"
      ],
      correct: 0
    },
    {
      id: 73,
      question: "Defining characteristic of the religious outlook is:",
      options: [
        "Belief in art of superstitions",
        "Belief in contemptuous attitude to science, the denial of their validity",
        "Belief in wisdom",
        "Belief in the supernatural, otherworldly forces, having the opportunity to influence the course of world events",
        "Belief in denial of human freedom, the belief that all actions originally defined by God"
      ],
      correct: 3
    },
    {
      id: 74,
      question: "One of the main characteristics of the Renaissance is:",
      options: [
        "Atheism",
        "Theology",
        "Sociocentrism",
        "Cosmocentrism",
        "Anthropocentrism"
      ],
      correct: 4
    },
    {
      id: 75,
      question: "Creationism is the idea that the world and mankind created by:",
      options: [
        "God",
        "Something mystical",
        "Poetics",
        "Human",
        "Science"
      ],
      correct: 0
    },
    {
      id: 76,
      question: "Searching human individuality is the specific feature of Philosophy of:",
      options: [
        "Conventionalism",
        "Life",
        "Existentialism",
        "Rationalism",
        "Conformism"
      ],
      correct: 2
    },
    {
      id: 77,
      question: "The idea that destinies of the world and people are determined by God is:",
      options: [
        "Freedom",
        "Desire",
        "Canon",
        "Providentialism",
        "Emotions"
      ],
      correct: 3
    },
    {
      id: 78,
      question: "Who offered psychoanalytic theory in human nature?",
      options: [
        "Leonardo da Vinci",
        "Nikolas of Cusa",
        "Loranzo Valla",
        "Tomaso Campanella",
        "Sigmund Freud"
      ],
      correct: 4
    },
    {
      id: 79,
      question: "\"Thus Spoke Zarathustra\" is a work of:",
      options: [
        "R.Descartes",
        "Nietzsche",
        "Albert Camus",
        "Karl Marx",
        "Martin Heidegger"
      ],
      correct: 1
    },
    {
      id: 80,
      question: "Branch of philosophy that studies historical knowledge and interpretation of historical process:",
      options: [
        "Philosophy of history",
        "Logics",
        "Ontology",
        "History of philosophy",
        "Epistemology"
      ],
      correct: 0
    },
    {
      id: 81,
      question: "The definition of social economic formation in materialism was first developed by:",
      options: [
        "Engels",
        "Stalin",
        "Marx",
        "Rousseau",
        "Lenin"
      ],
      correct: 2
    },
    {
      id: 82,
      question: "Who is the author of the books \"Either/or\", \"Fear and Trembling\"?",
      options: [
        "Rousseau",
        "Lenin",
        "Kierkegaard",
        "Marx",
        "Sartre"
      ],
      correct: 2
    },
    {
      id: 83,
      question: "Who indicated the difference between conscious and unconscious in human mind?",
      options: [
        "Plato",
        "Freud",
        "Hume",
        "Marx",
        "Sartre"
      ],
      correct: 1
    },
    {
      id: 84,
      question: "Aesthetical values are:",
      options: [
        "Love, friendship",
        "Beauty, art, harmony, style",
        "Civil rights",
        "Freedom of word and personality",
        "Social justice"
      ],
      correct: 1
    },
    {
      id: 85,
      question: "\"God is dead\" said:",
      options: [
        "Nietzsche",
        "Heraclitus",
        "Plato",
        "E.Kant",
        "F.Hegel"
      ],
      correct: 0
    },
    {
      id: 86,
      question: "What are the main founders of philosophy of existentialism:",
      options: [
        "Camus, Freud, Florensky",
        "Camus, Sartre, Kierkegaard",
        "Sartre, Spengler, Schelling B.Russel",
        "I.Kant, Freud, Florensky",
        "Russel, Popper, Adler"
      ],
      correct: 1
    },
    {
      id: 87,
      question: "«The man of absurd» according to Albert Camus is one who understands:",
      options: [
        "Essence of life",
        "Meaning of life",
        "Meaningless of existence",
        "Philosophy",
        "Others"
      ],
      correct: 2
    },
    {
      id: 88,
      question: "«The man of rebellion» according to Albert Camus is one who states:",
      options: [
        "I think, therefore I exist",
        "I rebel, therefore I exist",
        "I doubt, therefore I exist",
        "I agree, therefore I exist",
        "I argue, therefore I exist"
      ],
      correct: 1
    },
    {
      id: 89,
      question: "«Borderline situations» according to Sartre is the situation when a man becomes aware of:",
      options: [
        "Purpose of his life",
        "Problems",
        "Conflicts",
        "The meaning of his life",
        "His coming death"
      ],
      correct: 4
    },
    {
      id: 90,
      question: "According to Sartre: man is:",
      options: [
        "A project of himself",
        "A social animal",
        "Microcosmos",
        "Symbolic animal",
        "God's project"
      ],
      correct: 0
    },
    {
      id: 91,
      question: "According to Sigmund Freud «Neurotic» is:",
      options: [
        "A crazy man",
        "A healthy person with neurotic symptoms",
        "A schizophrenic person",
        "An anxious man",
        "A sick person"
      ],
      correct: 1
    },
    {
      id: 92,
      question: "According to Sigmund Freud «The Unconscious» is:",
      options: [
        "Ego",
        "Super Ego",
        "Id",
        "Other Ego",
        "Animus"
      ],
      correct: 2
    },
    {
      id: 93,
      question: "According to Carl Gustav Jung «Archetypes» are:",
      options: [
        "Symbols of Individual Unconscious",
        "Dreams",
        "Symbols of Collective Unconscious",
        "Myths",
        "Spirits"
      ],
      correct: 2
    },
    {
      id: 94,
      question: "According to Carl Gustav Jung human behaviour is determined by:",
      options: [
        "Individual unconsciousness",
        "Environment",
        "Education",
        "Parents",
        "Collective unconsciousness"
      ],
      correct: 4
    },
    {
      id: 95,
      question: "According to Sigmund Freud human behaviour is determined by three authorities:",
      options: [
        "Mind, will, desire",
        "Ego, Id, Super Ego",
        "Body, mind, soul",
        "Father, mother, teacher",
        "Nanny, teacher, boss"
      ],
      correct: 1
    },
    {
      id: 96,
      question: "According to S. Kierkegaard the main problem of philosophy is:",
      options: [
        "Human essence",
        "Human existence",
        "Human origin",
        "Human mind",
        "Human body"
      ],
      correct: 1
    },
    {
      id: 97,
      question: "S. Kierkegaard wanted to understand why:",
      options: [
        "Man is an animal",
        "Man is social",
        "Man was thrown into the world",
        "Man is evil",
        "Man is kind"
      ],
      correct: 2
    },
    {
      id: 98,
      question: "According to F. Nietzsche human manifests themselves in:",
      options: [
        "Will to die",
        "Will to live",
        "Will to power",
        "Will to kill",
        "Will to know"
      ],
      correct: 2
    },
    {
      id: 99,
      question: "According to F. Nietzsche, Superman is a person who:",
      options: [
        "Does not like people",
        "Does not suffer",
        "Does not like moral",
        "Does not die",
        "Does not believe in God"
      ],
      correct: 4
    },
    {
      id: 100,
      question: "Which ones are the typical Kazakh mythological forms?",
      options: [
        "Totemism and animism",
        "Tengrism and shamanism",
        "Magic and spiritualism",
        "Polytheism and paganism",
        "Pantheism and fetishism"
      ],
      correct: 1
    },
    {
      id: 101,
      question: "Philosophy of Marxism is called:",
      options: [
        "Metaphysical materialism",
        "Dialectical materialism",
        "Historical materialism",
        "Objective idealism",
        "Subjective materialism"
      ],
      correct: 1
    },
    {
      id: 102,
      question: "Socio-political theory of Marxism is called:",
      options: [
        "Metaphysical materialism",
        "Dialectical materialism",
        "Historical materialism",
        "Objective idealism",
        "Subjective materialism"
      ],
      correct: 2
    },
    {
      id: 103,
      question: "Philosophical method of Marxism is called:",
      options: [
        "Metaphysics",
        "Dialectics",
        "Deduction",
        "Induction",
        "Analogy"
      ],
      correct: 1
    },
    {
      id: 104,
      question: "The idea of Communism in Marxism represents:",
      options: [
        "Class society",
        "Classless society",
        "Perfect society",
        "Free society",
        "Rich society"
      ],
      correct: 1
    },
    {
      id: 105,
      question: "Historical type of societies in Marxism is called:",
      options: [
        "Basis and superstructure",
        "Social economic formation",
        "Class society",
        "Classless society",
        "Ideal society"
      ],
      correct: 1
    },
    {
      id: 106,
      question: "What is Consciousness?",
      options: [
        "function of brain",
        "reflection of reality",
        "self-awareness",
        "ideality",
        "all of them"
      ],
      correct: 4
    },
    {
      id: 107,
      question: "Elements of Consciousness according to A. G. Spirkin:",
      options: [
        "sensual",
        "rational",
        "value",
        "motivation",
        "all of them"
      ],
      correct: 4
    },
    {
      id: 108,
      question: "Which property of consciousness describes the immaterial essence of consciousness?",
      options: [
        "ideality",
        "intentionality",
        "ideationality",
        "reflection",
        "self-awareness"
      ],
      correct: 0
    },
    {
      id: 109,
      question: "who is Homo Sapiens?",
      options: [
        "Man with thinking",
        "Man with feelings",
        "Man with hands",
        "Man with eyes",
        "Man with soul"
      ],
      correct: 0
    },
    {
      id: 110,
      question: "consciousness according to theory of Dualism:",
      options: [
        "material substance",
        "ideationality",
        "immaterial substance",
        "reflection",
        "self-awareness"
      ],
      correct: 2
    },
    {
      id: 111,
      question: "consciousness according to theory of Darwinism:",
      options: [
        "property of man",
        "ideal property",
        "reflection of man",
        "self-awareness",
        "highest property of brain"
      ],
      correct: 4
    },
    {
      id: 112,
      question: "consciousness according to theory of Logical behaviorism:",
      options: [
        "thoughts",
        "speech",
        "acts",
        "instincts",
        "awareness"
      ],
      correct: 2
    },
    {
      id: 113,
      question: "Self-consciousness is the characteristic of consciousness which describes:",
      options: [
        "intentionality",
        "ideationality",
        "reflection",
        "ideality",
        "self-awareness"
      ],
      correct: 4
    },
    {
      id: 114,
      question: "Language is:",
      options: [
        "outer side of consciousness",
        "inner side of consciousness",
        "all ideas",
        "reflective organ",
        "self-awareness"
      ],
      correct: 0
    },
    {
      id: 115,
      question: "What is Ontology?",
      options: [
        "study of mind",
        "study of Being",
        "study of nature",
        "study of god",
        "study of man"
      ],
      correct: 1
    },
    {
      id: 116,
      question: "What the term «metaphysics» means?",
      options: [
        "Something real",
        "what comes after physics",
        "something unreal",
        "unknowable",
        "knowable"
      ],
      correct: 1
    },
    {
      id: 117,
      question: "What is Being?",
      options: [
        "real",
        "category for existence",
        "spiritual",
        "mental",
        "related to humans"
      ],
      correct: 1
    },
    {
      id: 118,
      question: "What is the problem of Being?",
      options: [
        "What is world",
        "what is the essence of the world",
        "what is reality",
        "what is the god",
        "what is the mind"
      ],
      correct: 1
    },
    {
      id: 119,
      question: "What is Substance?",
      options: [
        "matter",
        "independent entity",
        "spirit",
        "predicates of things",
        "essence of things"
      ],
      correct: 1
    },
    {
      id: 120,
      question: "Who said: «Being is, but there is not non-being»",
      options: [
        "Socrates",
        "Parmenides",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 121,
      question: "Who said: «If something denotes the essence of a thing, then it makes sense that being for it does not lie in something else»",
      options: [
        "Socrates",
        "Parmenides",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 2
    },
    {
      id: 122,
      question: "Who said: «Being is One»",
      options: [
        "Socrates",
        "Parmenides",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 123,
      question: "Who said: «Being is God»",
      options: [
        "Socrates",
        "Christianity",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 124,
      question: "Who said: «Being is Two»",
      options: [
        "Socrates",
        "Descartes",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 125,
      question: "Who said: «Being is plural»",
      options: [
        "Socrates",
        "Leibniz",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 126,
      question: "Who said: «Being is Absolute Idea»",
      options: [
        "Socrates",
        "Hegel",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 127,
      question: "Who said: «Being is Man»",
      options: [
        "Socrates",
        "Heidegger",
        "Aristotle",
        "Plato",
        "Plotinus"
      ],
      correct: 1
    },
    {
      id: 128,
      question: "Forms of Being:",
      options: [
        "Natural",
        "All of them",
        "Spiritual",
        "Human",
        "Social"
      ],
      correct: 1
    },
    {
      id: 129,
      question: "what is Matter?",
      options: [
        "Ideal being",
        "material being",
        "spiritual being",
        "divine being",
        "social being"
      ],
      correct: 1
    },
    {
      id: 130,
      question: "Attributes of Matter:",
      options: [
        "movement",
        "All of them",
        "time",
        "space",
        "reflection"
      ],
      correct: 1
    },
    {
      id: 131,
      question: "Forms of Motion:",
      options: [
        "physical",
        "all of them",
        "chemical",
        "biological",
        "social"
      ],
      correct: 1
    },
    {
      id: 132,
      question: "What is Development?",
      options: [
        "Motion from down to up",
        "motion from simple to complex",
        "motion from low to high",
        "motion from left to right",
        "motion from up to down"
      ],
      correct: 1
    },
    {
      id: 133,
      question: "Two concepts of Development:",
      options: [
        "Regress and progress",
        "methaphysical and dialectical",
        "cyclic and linear",
        "eternal return",
        "stagnation and change"
      ],
      correct: 0
    },
    {
      id: 134,
      question: "types of space:",
      options: [
        "wide",
        "Three-dimensional",
        "narrow",
        "virtual",
        "cosmos"
      ],
      correct: 1
    },
    {
      id: 135,
      question: "types of time:",
      options: [
        "physical",
        "all of them",
        "psychological",
        "biological",
        "social"
      ],
      correct: 1
    },
    {
      id: 136,
      question: "Philosophical category which describes visible and invisible sides of things:",
      options: [
        "Content and form",
        "Essence and phenomenon",
        "Cause and effect",
        "Necessity and contingency",
        "Possibility and reality"
      ],
      correct: 1
    },
    {
      id: 137,
      question: "Philosophical category which describes inner and outer side of things:",
      options: [
        "Content and form",
        "Essence and phenomenon",
        "Cause and effect",
        "Necessity and contingency",
        "Possibility and reality"
      ],
      correct: 0
    },
    {
      id: 138,
      question: "Philosophical category which describes determinism:",
      options: [
        "Content and form",
        "Essence and phenomenon",
        "Cause and effect",
        "Necessity and contingency",
        "Possibility and reality"
      ],
      correct: 2
    },
    {
      id: 139,
      question: "What is cognition?",
      options: [
        "Thinking abt smth",
        "mastering knowledge",
        "working on book",
        "imagining of smth",
        "awareness of smth"
      ],
      correct: 1
    },
    {
      id: 140,
      question: "What is knowledge?",
      options: [
        "books",
        "information",
        "traditions",
        "customs",
        "opinion"
      ],
      correct: 1
    },
    {
      id: 141,
      question: "What is common between Knowledge and Cognition?",
      options: [
        "They are the same",
        "knowledge is the result of cognitive process",
        "they are different",
        "both are process",
        "cognition needs prior knowledge"
      ],
      correct: 1
    },
    {
      id: 142,
      question: "What is Epistemology?",
      options: [
        "Theory of knowledge",
        "theory scientific knowledge",
        "theory of technology",
        "theory of methods",
        "theory of philosophical knowledge"
      ],
      correct: 1
    },
    {
      id: 143,
      question: "What is Gnoseology?",
      options: [
        "Theory of knowledge",
        "theory scientific knowledge",
        "theory of technology",
        "theory of methods",
        "theory of philosophical knowledge"
      ],
      correct: 0
    },
    {
      id: 144,
      question: "What is Gnosticism?",
      options: [
        "Cognitive pessimism",
        "cognitive optimism",
        "cognitive disbelief",
        "cognitive doubts",
        "cognitive negation"
      ],
      correct: 1
    },
    {
      id: 145,
      question: "What is Agnosticism?",
      options: [
        "Cognitive pessimism",
        "cognitive optimism",
        "cognitive disbelief",
        "cognitive doubts",
        "cognitive negation"
      ],
      correct: 0
    },
    {
      id: 146,
      question: "What is Skepticism?",
      options: [
        "Cognitive pessimism",
        "cognitive optimism",
        "cognitive disbelief",
        "cognitive doubts",
        "cognitive negation"
      ],
      correct: 3
    },
    {
      id: 147,
      question: "Which ideas are TRUE according to Descartes «Theory of Ideas»?",
      options: [
        "Mind ideas",
        "innate ideas",
        "sensory ideas",
        "authorities' ideas",
        "common sense"
      ],
      correct: 1
    },
    {
      id: 148,
      question: "Who believed that TRUTH can be proved in the process of socio-historical practice?",
      options: [
        "Hegel",
        "Marx",
        "Kant",
        "Bacon",
        "Lock"
      ],
      correct: 1
    },
    {
      id: 149,
      question: "Who believed that we can cognize only Phenomena?",
      options: [
        "Hegel",
        "Marx",
        "Kant",
        "Bacon",
        "Lock"
      ],
      correct: 2
    },
    {
      id: 150,
      question: "Type of Cognition based on Conceptual understanding the reality:",
      options: [
        "ordinary cogniton",
        "scientific cognition",
        "practical cognition",
        "artistic cognition",
        "moral cognition"
      ],
      correct: 1
    },
    {
      id: 151,
      question: "Levels of Cognition:",
      options: [
        "Ordinary and theoretical",
        "sensual and rational",
        "basic and complex",
        "lower and higher",
        "everyday and scentisfic"
      ],
      correct: 1
    },
    {
      id: 152,
      question: "What is Judgment?",
      options: [
        "Statement reflecting the things and their properties",
        "logical image that reproduces the essential properties of objects",
        "deduction from several interrelated judgments of a new judgment",
        "comprehend the truth by seeing it clear",
        "integral image of an object in the unity reflected through sensations"
      ],
      correct: 0
    },
    {
      id: 153,
      question: "What is Concept?",
      options: [
        "Statement reflecting the things and their properties",
        "logical image that reproduces the essential properties of objects",
        "deduction from several interrelated judgments of a new judgment",
        "comprehend the truth by seeing it clear",
        "integral image of an object in the unity reflected through sensations"
      ],
      correct: 1
    },
    {
      id: 154,
      question: "What is Inference?",
      options: [
        "Statement reflecting the things and their properties",
        "logical image that reproduces the essential properties of objects",
        "deduction from several interrelated judgments of a new judgment",
        "comprehend the truth by seeing it clear",
        "integral image of an object in the unity reflected through sensations"
      ],
      correct: 2
    },
    {
      id: 155,
      question: "What is Intuition?",
      options: [
        "Statement reflecting the things and their properties",
        "logical image that reproduces the essential properties of objects",
        "deduction from several interrelated judgments of a new judgment",
        "comprehend the truth by seeing it clear",
        "integral image of an object in the unity reflected through sensations"
      ],
      correct: 3
    },
    {
      id: 156,
      question: "What is Truth in Classical sense?",
      options: [
        "Truth is the correspondence of knowledge to reality",
        "this is what is confirmed by experience",
        "is a kind of agreement – a convention",
        "usefulness of the knowledge gained",
        "effectiveness of its use in practice"
      ],
      correct: 0
    },
    {
      id: 157,
      question: "What is correct about Fallacy?",
      options: [
        "Deliberate distortion of truth",
        "is the essential part of the cognitive process",
        "Lie",
        "Is the fail of cognitive process",
        "Ideological essence of cognition"
      ],
      correct: 1
    },
    {
      id: 158,
      question: "Axiology studies:",
      options: [
        "notions",
        "values",
        "norms",
        "taboos",
        "laws"
      ],
      correct: 1
    },
    {
      id: 159,
      question: "Absolute values:",
      options: [
        "yin - yang",
        "truth, beauty, good",
        "justice, injustice",
        "God",
        "Human health"
      ],
      correct: 1
    },
    {
      id: 160,
      question: "Classification of values by carrier:",
      options: [
        "material, spiritual",
        "individual, supra individual",
        "economical, political",
        "social, family",
        "absolute, specific"
      ],
      correct: 1
    },
    {
      id: 161,
      question: "Classification of values by existence:",
      options: [
        "material, spiritual",
        "individual, supra individual",
        "economical, political",
        "social, family",
        "absolute, specific"
      ],
      correct: 0
    },
    {
      id: 162,
      question: "What is Ethics?",
      options: [
        "theory of art",
        "theory of morality",
        "theory of society",
        "theory of religion",
        "theory of nature"
      ],
      correct: 1
    },
    {
      id: 163,
      question: "What is Morality?",
      options: [
        "social regulation form through beauty-ugly",
        "social regulation form through good-bad",
        "social regulation form through justice-injustice",
        "social regulation form through useful-useless",
        "social regulation form through faith-denial"
      ],
      correct: 1
    },
    {
      id: 164,
      question: "Why is Ethics practical science?",
      options: [
        "It is studied to know what is good",
        "it is studied in order to become virtuous",
        "It is studied to learn what is evil",
        "It is studied to know more",
        "It is studied to get wisdom"
      ],
      correct: 1
    },
    {
      id: 165,
      question: "Difference between Morality and Mores?",
      options: [
        "No difference",
        "difference between what is Due and what is Real",
        "norms and ideals",
        "good and bad",
        "week and strong"
      ],
      correct: 1
    },
    {
      id: 166,
      question: "Main Christian values:",
      options: [
        "Pride and humility",
        "faith, hope, love",
        "cupidity and generosity",
        "lust and chastity",
        "true and lie"
      ],
      correct: 1
    },
    {
      id: 167,
      question: "Which one is Stoic principle?",
      options: [
        "live for pleasure and well-being",
        "focus on what you control",
        "live a complete and fulfilling life",
        "usefulness, practicability, benefit",
        "prudence, courage, justice"
      ],
      correct: 1
    },
    {
      id: 168,
      question: "Which one is Hedonistic principle?",
      options: [
        "live for pleasure and well-being",
        "focus on what you control",
        "live a complete and fulfilling life",
        "usefulness, practicability, benefit",
        "prudence, courage, justice"
      ],
      correct: 0
    },
    {
      id: 169,
      question: "Which one is Pragmatic principle?",
      options: [
        "live for pleasure and well-being",
        "focus on what you control",
        "live a complete and fulfilling life",
        "usefulness, practicability, benefit",
        "prudence, courage, justice"
      ],
      correct: 3
    },
    {
      id: 170,
      question: "What is Epicureanism principle?",
      options: [
        "live for pleasure and well-being",
        "focus on what you control",
        "live a complete and fulfilling life",
        "usefulness, practicability, benefit",
        "prudence, courage, justice"
      ],
      correct: 2
    },
    {
      id: 171,
      question: "What is Eudemonism principle?",
      options: [
        "live for pleasure and well-being",
        "focus on what you control",
        "live a complete and fulfilling life",
        "usefulness, practicability, benefit",
        "prudence, courage, justice"
      ],
      correct: 2
    },
    {
      id: 172,
      question: "Essence of Art in classical sense:",
      options: [
        "Art is representation of reality",
        "Art is beauty, truth, good",
        "Art is expression of spiritual world of artist",
        "Art is only fine art",
        "Art is skill and mastery"
      ],
      correct: 1
    },
    {
      id: 173,
      question: "Essence of Art in Renaissance sense:",
      options: [
        "Art is representation of reality",
        "Art is beauty, truth, good",
        "Art is expression of spiritual world of artist",
        "Art is only fine art",
        "Art is skill and mastery"
      ],
      correct: 4
    },
    {
      id: 174,
      question: "Essence of Art in 17-18 centuries:",
      options: [
        "Art is representation of reality",
        "Art is beauty, truth, good",
        "Art is expression of spiritual world of artist",
        "Art is only fine art",
        "Art is skill and mastery"
      ],
      correct: 0
    },
    {
      id: 175,
      question: "Essence of Art in contemporary sense:",
      options: [
        "Art is representation of reality",
        "Art is beauty, truth, good",
        "Art is expression of spiritual world of artist",
        "Art is only fine art",
        "Art is skill and mastery"
      ],
      correct: 2
    },
    {
      id: 176,
      question: "Essence of Art in traditional sense:",
      options: [
        "Art is representation of reality",
        "Art is beauty, truth, good",
        "Art is expression of spiritual world of artist",
        "Art is only fine art",
        "Art is skill and mastery"
      ],
      correct: 4
    },
    {
      id: 177,
      question: "Aesthetic categories of Nietzsche:",
      options: [
        "sublimation",
        "Apollonian and Dionysian",
        "absurd",
        "mimesis",
        "catharsis"
      ],
      correct: 1
    },
    {
      id: 178,
      question: "Aesthetic categories of Freud:",
      options: [
        "sublimation",
        "Apollonian and Dionysian",
        "absurd",
        "mimesis",
        "catharsis"
      ],
      correct: 0
    },
    {
      id: 179,
      question: "Aesthetic categories of Existentialism:",
      options: [
        "sublimation",
        "Apollonian and Dionysian",
        "absurd",
        "mimesis",
        "catharsis"
      ],
      correct: 2
    },
    {
      id: 180,
      question: "Aesthetic categories of Plato:",
      options: [
        "sublimation",
        "Apollonian and Dionysian",
        "absurd",
        "mimesis",
        "catharsis"
      ],
      correct: 3
    },
    {
      id: 181,
      question: "Aesthetic categories of Aristotle:",
      options: [
        "sublimation",
        "Apollonian and Dionysian",
        "absurd",
        "mimesis",
        "catharsis"
      ],
      correct: 4
    },
    {
      id: 182,
      question: "Whose statement is this? – People are born free or slaves:",
      options: [
        "Erasmus",
        "Aristotle",
        "Spinoza",
        "Rousseau",
        "Fromm"
      ],
      correct: 1
    },
    {
      id: 183,
      question: "Whose statement is this? – Freedom is human illusion:",
      options: [
        "Erasmus",
        "Aristotle",
        "Spinoza",
        "Rousseau",
        "Fromm"
      ],
      correct: 2
    },
    {
      id: 184,
      question: "Whose statement is this? – Freedom is realized necessity:",
      options: [
        "Erasmus",
        "Aristotle",
        "Spinoza",
        "Rousseau",
        "Fromm"
      ],
      correct: 2
    },
    {
      id: 185,
      question: "Whose statement is this? – Freedom is democracy and equality:",
      options: [
        "Erasmus",
        "Aristotle",
        "Spinoza",
        "Rousseau",
        "Fromm"
      ],
      correct: 3
    },
    {
      id: 186,
      question: "Whose statement is this? – There is freedom from and freedom for:",
      options: [
        "Erasmus",
        "Aristotle",
        "Spinoza",
        "Rousseau",
        "Fromm"
      ],
      correct: 4
    },
    {
      id: 187,
      question: "Which one describes inevitable course of things which are unavoidable:",
      options: [
        "liberalism",
        "fatalism",
        "determinism",
        "voluntarism",
        "providentialism"
      ],
      correct: 1
    },
    {
      id: 188,
      question: "Which one describes individual, civil rights, free enterprise:",
      options: [
        "liberalism",
        "fatalism",
        "determinism",
        "voluntarism",
        "providentialism"
      ],
      correct: 0
    },
    {
      id: 189,
      question: "Which one describes that everything happens due to the objective laws:",
      options: [
        "liberalism",
        "fatalism",
        "determinism",
        "voluntarism",
        "providentialism"
      ],
      correct: 2
    },
    {
      id: 190,
      question: "Which one describes that everything happens due to somebody's will:",
      options: [
        "liberalism",
        "fatalism",
        "determinism",
        "voluntarism",
        "providentialism"
      ],
      correct: 3
    },
    {
      id: 191,
      question: "Which one describes the everything happens due to God's will:",
      options: [
        "liberalism",
        "fatalism",
        "determinism",
        "voluntarism",
        "providentialism"
      ],
      correct: 4
    },
    {
      id: 192,
      question: "Tick the criteria of society:",
      options: [
        "territory",
        "all of them",
        "self-regulation",
        "self-control",
        "integrity"
      ],
      correct: 1
    },
    {
      id: 193,
      question: "What is society?",
      options: [
        "Aggregate of individuals",
        "Social system",
        "community",
        "social relations",
        "social groups"
      ],
      correct: 1
    },
    {
      id: 194,
      question: "Which definition of society is of Social Darwinism?",
      options: [
        "Society is social relations",
        "society is organism",
        "Society is geographic adaptation",
        "Society is ideal place",
        "Society is summation of individuals"
      ],
      correct: 1
    },
    {
      id: 195,
      question: "Which definition of society is of Marxism?",
      options: [
        "Society is social relations",
        "society is organism",
        "Society is geographic adaptation",
        "Society is ideal place",
        "Society is summation of individuals"
      ],
      correct: 0
    },
    {
      id: 196,
      question: "Which definition of society is of Naturalism?",
      options: [
        "Society is social relations",
        "society is organism",
        "Society is geographic adaptation",
        "Society is ideal place",
        "Society is summation of individuals"
      ],
      correct: 2
    },
    {
      id: 197,
      question: "Which definition of society is of Utopian?",
      options: [
        "Society is social relations",
        "society is organism",
        "Society is geographic adaptation",
        "Society is ideal place",
        "Society is summation of individuals"
      ],
      correct: 3
    },
    {
      id: 198,
      question: "Which definition of society is of Atomism?",
      options: [
        "Society is social relations",
        "society is organism",
        "Society is geographic adaptation",
        "Society is ideal place",
        "Society is summation of individuals"
      ],
      correct: 4
    },
    {
      id: 199,
      question: "Which one is concise definition of Culture?",
      options: [
        "Scope of arts",
        "is material and spiritual environment created by man",
        "life style",
        "fine manners",
        "customs and traditions"
      ],
      correct: 1
    },
    {
      id: 200,
      question: "What are the main characteristics of a Mass Man according to Ortega y Gasset?",
      options: [
        "responsibility",
        "consumerism",
        "education",
        "high standards",
        "hard work"
      ],
      correct: 1
    }
  ];

  const [mode, setMode] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [questionOrder, setQuestionOrder] = useState([]);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [showRangeInput, setShowRangeInput] = useState(false);
  const [startQuestion, setStartQuestion] = useState(1);
  const [endQuestion, setEndQuestion] = useState(200);
  const [shuffleOptions, setShuffleOptions] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const createShuffledQuestion = (question) => {
    const optionsWithIndex = question.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    const shuffled = shuffleArray(optionsWithIndex);
    const newCorrectIndex = shuffled.findIndex(opt => opt.originalIndex === question.correct);
    
    return {
      ...question,
      options: shuffled.map(opt => opt.text),
      correct: newCorrectIndex
    };
  };

  const startQuiz = (quizMode) => {
    if (quizMode === 'sequential' || quizMode === 'random-range') {
      setShowRangeInput(true);
      setMode(quizMode);
      return;
    }
    
    setMode(quizMode);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIncorrectQuestions([]);
    setStats({ correct: 0, incorrect: 0 });
    
    const shuffled = [...Array(questions.length).keys()].sort(() => Math.random() - 0.5);
    setQuestionOrder(shuffled);
    
    if (shuffleOptions) {
      setShuffledQuestions(questions.map(q => createShuffledQuestion(q)));
    } else {
      setShuffledQuestions(questions);
    }
  };

  const startSequentialQuiz = () => {
    const start = Math.max(1, Math.min(startQuestion || 1, questions.length));
    const end = Math.max(start, Math.min(endQuestion || questions.length, questions.length));
    
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIncorrectQuestions([]);
    setStats({ correct: 0, incorrect: 0 });
    setShowRangeInput(false);
    
    const range = [];
    for (let i = start - 1; i < end; i++) {
      range.push(i);
    }
    
    if (mode === 'random-range') {
      setQuestionOrder(shuffleArray(range));
    } else {
      setQuestionOrder(range);
    }
    
    if (shuffleOptions) {
      setShuffledQuestions(questions.map(q => createShuffledQuestion(q)));
    } else {
      setShuffledQuestions(questions);
    }
  };

  const handleAnswer = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const currentQ = shuffledQuestions.length > 0 
      ? shuffledQuestions[questionOrder[currentIndex]]
      : questions[questionOrder[currentIndex]];
    const isCorrect = answerIndex === currentQ.correct;
    
    if (isCorrect) {
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
      // Автоматически переходим к следующему вопросу через 800ms
      setTimeout(() => {
        nextQuestion();
      }, 800);
    } else {
      setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      if (!incorrectQuestions.includes(questionOrder[currentIndex])) {
        setIncorrectQuestions(prev => [...prev, questionOrder[currentIndex]]);
      }
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questionOrder.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else if (incorrectQuestions.length > 0) {
      const newOrder = mode === 'random' || mode === 'random-range'
        ? shuffleArray(incorrectQuestions)
        : incorrectQuestions;
      setQuestionOrder(newOrder);
      setIncorrectQuestions([]);
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setMode(null);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIncorrectQuestions([]);
    setQuestionOrder([]);
    setStats({ correct: 0, incorrect: 0 });
    setShowRangeInput(false);
    setShuffledQuestions([]);
  };

  if (showRangeInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Выберите диапазон вопросов
            </h2>
            <p className="text-center text-gray-600 mb-8">С какого по какой вопрос хотите тренироваться?</p>
            
            {shuffleOptions && (
              <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-sm text-green-700">
                  ✓ Варианты ответов будут перемешаны
                </p>
              </div>
            )}
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  С вопроса:
                </label>
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={startQuestion}
                  onChange={(e) => {
                    const val = e.target.value;
                    setStartQuestion(val === '' ? '' : parseInt(val) || 1);
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  До вопроса:
                </label>
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={endQuestion}
                  onChange={(e) => {
                    const val = e.target.value;
                    setEndQuestion(val === '' ? '' : parseInt(val) || 1);
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>📊 Будет:</strong> {Math.max(0, Math.min(endQuestion || 200, 200) - Math.max((startQuestion || 1) - 1, 0))} вопросов
                  {mode === 'random-range' && <span className="text-purple-600"> (в случайном порядке)</span>}
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowRangeInput(false);
                    setMode(null);
                  }}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Назад
                </button>
                <button
                  onClick={startSequentialQuiz}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Начать тест
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button
                  onClick={() => {
                    setStartQuestion(1);
                    setEndQuestion(50);
                  }}
                  className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-sm text-indigo-700 transition-colors"
                >
                  1-50
                </button>
                <button
                  onClick={() => {
                    setStartQuestion(51);
                    setEndQuestion(100);
                  }}
                  className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-sm text-indigo-700 transition-colors"
                >
                  51-100
                </button>
                <button
                  onClick={() => {
                    setStartQuestion(101);
                    setEndQuestion(150);
                  }}
                  className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-sm text-indigo-700 transition-colors"
                >
                  101-150
                </button>
                <button
                  onClick={() => {
                    setStartQuestion(151);
                    setEndQuestion(200);
                  }}
                  className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-sm text-indigo-700 transition-colors"
                >
                  151-200
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!mode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Философия Тест
            </h1>
            <p className="text-center text-gray-600 mb-8">Выберите режим прохождения теста</p>
            
            <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shuffleOptions}
                  onChange={(e) => setShuffleOptions(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-gray-700 font-medium">
                  🔀 Перемешать варианты ответов
                </span>
              </label>
              <p className="text-xs text-gray-600 mt-2 ml-8">
                Порядок вариантов ответов будет случайным
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => startQuiz('sequential')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <List size={24} />
                <div className="text-left">
                  <div className="text-lg">По порядку</div>
                  <div className="text-sm opacity-90">Вопросы идут последовательно</div>
                </div>
              </button>
              
              <button
                onClick={() => startQuiz('random-range')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-6 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <Shuffle size={24} />
                <div className="text-left">
                  <div className="text-lg">Случайный порядок (с диапазоном)</div>
                  <div className="text-sm opacity-90">Выбрать диапазон + случайный порядок</div>
                </div>
              </button>
              
              <button
                onClick={() => startQuiz('random')}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-6 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <Shuffle size={24} />
                <div className="text-left">
                  <div className="text-lg">Все вопросы случайно</div>
                  <div className="text-sm opacity-90">Все 200 вопросов в случайном порядке</div>
                </div>
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>💡 Совет:</strong> Если вы ответите неправильно, вопрос появится снова позже, пока вы не дадите правильный ответ.
              </p>
            </div>
            
            <div className="mt-6 text-center text-gray-500">
              <p className="text-sm">Всего вопросов: {questions.length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions.length > 0 
    ? shuffledQuestions[questionOrder[currentIndex]]
    : questions[questionOrder[currentIndex]];
  const progress = ((currentIndex + 1) / questionOrder.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <RotateCcw size={18} />
                <span className="hidden sm:inline">Назад</span>
              </button>
              <div className="text-sm text-gray-600">
                {mode === 'sequential' ? '📋 По порядку' : '🎲 Случайно'}
              </div>
            </div>
            
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1 text-green-600">
                <CheckCircle size={18} />
                <span>{stats.correct}</span>
              </div>
              <div className="flex items-center gap-1 text-red-600">
                <XCircle size={18} />
                <span>{stats.incorrect}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Вопрос {currentIndex + 1} из {questionOrder.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            {incorrectQuestions.length > 0 && (
              <div className="mt-2 text-xs text-orange-600">
                📝 Неправильных ответов для повтора: {incorrectQuestions.length}
              </div>
            )}
          </div>

          {incorrectQuestions.length > 0 && currentIndex === 0 && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                🔄 Повторяем неправильные ответы ({incorrectQuestions.length} {incorrectQuestions.length === 1 ? 'вопрос' : 'вопросов'})
              </p>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correct;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      showCorrect
                        ? 'border-green-500 bg-green-50'
                        : showIncorrect
                        ? 'border-red-500 bg-red-50'
                        : isSelected
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800">{option}</span>
                      {showCorrect && <CheckCircle className="text-green-600" size={20} />}
                      {showIncorrect && <XCircle className="text-red-600" size={20} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showResult && (
            <div className="space-y-4">
              {selectedAnswer === currentQuestion.correct ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold flex items-center gap-2">
                    <CheckCircle size={20} />
                    Правильно! 🎉
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold flex items-center gap-2 mb-2">
                    <XCircle size={20} />
                    Неправильно
                  </p>
                  <p className="text-red-700 text-sm">
                    Правильный ответ: <strong>{currentQuestion.options[currentQuestion.correct]}</strong>
                  </p>
                  <p className="text-red-600 text-xs mt-2">
                    ℹ️ Этот вопрос появится снова
                  </p>
                </div>
              )}

              <button
                onClick={nextQuestion}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {currentIndex < questionOrder.length - 1 ? 'Следующий вопрос →' : 
                 incorrectQuestions.length > 0 ? 'Повторить неправильные →' : 'Завершить тест ✓'}
              </button>
            </div>
          )}

          {currentIndex === questionOrder.length - 1 && showResult && incorrectQuestions.length === 0 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Поздравляем! 🎊</h3>
              <p className="text-green-700">
                Вы правильно ответили на все вопросы!
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.correct}</div>
                  <div className="text-sm text-gray-600">Правильно</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{stats.incorrect}</div>
                  <div className="text-sm text-gray-600">Ошибок</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhilosophyQuiz;