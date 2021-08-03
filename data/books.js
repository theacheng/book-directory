const books = [
  {
    type: "book",
    title: "First They Killed My Father",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [],
  },
  {
    type: "book",
    title: "When The War Was Over: Cambodia And The Khmer Rouge",
    description: "Award-winning journalist Elizabeth Becker started covering Cambodia in 1973 for The Washington Post, when the country was perceived as little more than a footnote to the Vietnam War. Then, with the rise of the Khmer Rouge in 1975 came the closing of the border and a systematic reorganization of Cambodian society",
    authur: {
      type: "authur",
      first_name: "Elizabeth",
      last_name: "Becker",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "1986",
      },
      {
        type: "property",
        name: "Barnes & Noble",
        value: "5/5",
      },
      {
        type: "property",
        name: "Goodreads",
        value: "4.2/5",
      }
    ]
  },
  {
    type: "book",
    title: "My First Khmer Alphabets Picture Book with English",
    description: "Did you ever want to teach your kids the basics of Khmer ? Learning Khmer can be fun with this picture book. In this book you will find the following features: Khmer Alphabets Khmer Words English Translations Some Important Information Regarding Our Books: Each Alphabet has its own Page",
    authur: {
      type: "authur",
      first_name: "Chantou",
      last_name: "S",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "August 27, 2019",
      },
    ]
  },
  {
    type: "book",
    title: "A Cambodian odyssey",
    description: 'Best known for his academy award-winning role as Dith Pran in "The Killing Fields", for Haing Ngor his greatest performance was not in Hollywood but in the rice paddies and labour camps of war-torn Cambodia. Here, in his memoir of life under the Khmer Rouge, is a searing account of a country\'s descent into hell.',
    authur: {
      type: "authur",
      first_name: "Haing",
      last_name: "S. Ngor",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "1987",
      },
      {
        type: "property",
        name: "Genre",
        value: "Biography",
      },
      {
        type: "property",
        name: "AbeBooks",
        value: "4.5/5",
      },
    ]
  },
  {
    type: "book",
    title: "Never Fall Down",
    description: "When soldiers arrive in his hometown in Cambodia, Arn is just a kid, dancing to rock'n'roll, hustling for spare change, and selling icecream with his brother. But after the soldiers march the entire population into the countryside, his life is changed for ever.",
    authur: {
      type: "authur",
      first_name: "Patricia",
      last_name: "McCormick",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "May 8, 2012",
      },
      {
        type: "property",
        name: "Original language",
        value: "English",
      },
      {
        type: "property",
        name: "Pages",
        value: "224",
      },
      {
        type: "property",
        name: "Genres",
        value: "Historical Fiction, Biographical Fiction",
      },
    ]
  },
  {
    type: "book",
    title: "When Broken Glass Floats: Growing Up Under the Khmer",
    description: 'Chanrithy Him felt compelled to tell of surviving life under the Khmer Rouge in a way "worthy of the suffering which I endured as a child." In a mesmerizing story, Chanrithy Him vividly recounts her trek through the hell of the "killing fields."',
    authur: {
      type: "authur",
      first_name: "Chanrithy",
      last_name: "Him",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "The Khmer Kings and the History of Cambodia: 1595",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Angkor and the Khmer Civilization",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Cambodian literary reader and glossary",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Voices from S-21: Terror and History in Pol Pot's Secret Prison",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "In the Shadow of the Banyan",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Lucky Child",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Learn Khmer For Beginners! A Cambodian",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Khmer Alphabet Practice Workbook",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Cambodian for Beginners",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "A history of Cambodia",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "English‑Serbian (Cyrillic) Bilingual Children's Picture",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Facing the Khmer Rouge: A Cambodian Journey",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "Pol Pot: Anatomy of a Nightmare",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  },
  {
    type: "book",
    title: "The Gate",
    description: "A Daughter of Cambodia Remembers is a 2000 non-fiction book written by Loung Ung, a Cambodian author and childhood survivor of Democratic Kampuchea. It is her personal account of her experiences during the Khmer Rouge regime.",
    authur: {
      type: "authur",
      first_name: "Loung",
      last_name: "Ung",
    },
    properties: [
      {
        type: "property",
        name: "Originally published",
        value: "2000",
      },
      {
        type: "property",
        name: "Genres",
        value: "Biography, Autobiography",
      },
    ]
  }
]

export default books