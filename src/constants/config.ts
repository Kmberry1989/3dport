type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "",
    fullName: "Rochelle Berry",
    email: "rochelleberry731@gmail.com",
  },
  hero: {
    name: "Rochelle Berry",
    p: ["Creative Strategist", "& Digital Storyteller"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `A dynamic and creative professional with a passion for fostering innovative experiences. I specialize in bringing ideas to life through compelling visual and digital strategies, connecting communities, and building lasting partnerships.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "My job",
      h2: "Creating Engaging Digital Experiences That Connect & Inspire.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A dynamic and creative professional with a passion for fostering innovative experiences, connecting communities, and building partnerships. With a strong background in event planning, digital marketing, and administrative support, I thrive on bringing ideas to life and driving engagement through compelling visual and digital strategies. I'm now seeking to leverage my diverse skillset in a dedicated Creative Digital Design role.`,
    },
  },
};
