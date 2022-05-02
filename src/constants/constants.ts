export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export const questionsArray = [
  {
    question: "Which of the following is not a linux distribution",
    options: ["Debian", "Getian", "Fedora", "Pop OS"],
    answer: "Getian",
  },
];

export const quiz = {
  quizTitle: "Identify distors",
  imgSrc:
    "https://cdn.pixabay.com/photo/2020/02/22/16/29/penguin-4871045__340.png",
};

export const categoryArray = [
  {
    quizTitle: "Linux distros",
    imgSrc:
      "https://cdn.pixabay.com/photo/2020/02/22/16/29/penguin-4871045__340.png",
    description: "Are you using Linux? then you will rock it.",
  },
  {
    quizTitle: "Money heist",
    imgSrc:
      "https://www.pngplay.com/wp-content/uploads/13/Money-Heist-Mask-Free-PNG.png",
    description: "Are you a fan of money heist? Give it a try.",
  },
  {
    quizTitle: "Books",
    imgSrc: "https://www.freeiconspng.com/thumbs/book-png/book-png-12.png",
    description: "Do you have habit of reading? If not start making it.",
  },
];


