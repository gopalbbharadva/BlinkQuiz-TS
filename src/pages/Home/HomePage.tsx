import "./HomePage.css";
import QuizIntro from "../../assets/Images/QuizIntro.svg";
import { QuizCategory } from "./components/QuizCategory";
import { categoryArray } from "../../constants/constants";

export const HomePage = () => {
  return (
    <main>
      <div className="app-intro flex-center">
        <div className="intro-section flex-center">
          <p className="intro-header logo-link fs-xlg ">BlinkQuiz</p>
          <p className="intro-quote align-center fs-lg mg-vrtl-md">
            Test your knowledge with BlinkQuiz and have fun.
          </p>
          <p className="intro-greeting fs-btw-ml">Good Luck 👍</p>
          <a
            href="#quiz-section"
            className="btn mg-vrtl-lg is-outline fs-btw-ml bg-transparent"
          >
            Explore Quizzes
          </a>
        </div>
        <img className="intro-image" src={QuizIntro} alt="reading hero" />
      </div>

      <h1 className="quiz-section-title align-center">Categories</h1>
      <div id="quiz-section" className="quiz-wrapper">
        {categoryArray.map((category) => (
          <QuizCategory categoryItem={category} />
        ))}
      </div>
    </main>
  );
};
