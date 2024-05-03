import React from 'react';
import './Programming.css'
const Programming = ({quizName}) => {
  const quizQuestions = [
    {
      question: 'भोटो जात्राको प्रचलन कसले गरे ?',
      options: [' नरेन्द्र देवले', 'London', 'Berlin', 'Rome'],
      correctAnswer: ' नरेन्द्र देवले'
    },
    {
      question: 'स्वयम्भुको ज्वतिलाई छोपी सोमाथी चैत्यको निर्माण गर्ने राजा को हुन ?',
      options: ['२०१२ चैत्र १८ गते', '२०१२ चैत्र ११ गते', '२०१२ चैत्र १२ गते', '२०१२ चैत्र १० गते'],
      correctAnswer: '२०१२ चैत्र १८ गते'
    },
    {
      question: 'अमेरिकी स्वतंत्रता संघर्षको नेताको नाम के हो?',
      options: ['जॉर्ज वाशिंगटन', 'थॉमस जेफर्सन', 'बेन्जामिन फ्रांकलिन', 'अब्राहम लिंकन'],
      correctAnswer: 'जॉर्ज वाशिंगटन'
    },
    {
      question: 'भारतको पहिलो महिला प्रधानमन्त्री को हुन्?',
      options: ['इंदिरा गान्धी', 'सोनिया गान्धी', 'प्रतिभा पाटील', 'मेनका गांधी'],
      correctAnswer: 'इंदिरा गान्धी'
    },
    {
      question: 'नेपालको पहिलो राष्ट्रपति को हुन्?',
      options: ['त्रिभुवन विक्रम शाह', 'राम बहादुर शाह', 'गणेश मन सिंह', 'भूपेन्द्र बिरविक्रम शाह'],
      correctAnswer: 'त्रिभुवन विक्रम शाह'
    },
    {
      question: 'नेपालको लोकतान्त्रिक राजनीतिक दलको नाम के हो?',
      options: ['नेपाली कांग्रेस', 'नेपाली जनता पार्टी', 'राष्ट्रिय जनमोर्चा', 'राष्ट्रिय पार्टी'],
      correctAnswer: 'नेपाली कांग्रेस'
    },
    {
      question: 'नेपालको प्रधानमन्त्री को हुन्?',
      options: ['शेर बहादुर देउवा', 'केपी ओली', 'पुष्पा कमल दाहाल', 'बाबुराम भट्टराई'],
      correctAnswer: 'केपी ओली'
    },
    {
      question: 'नेपालको पहिलो गणतन्त्र अध्यक्ष को हुन्?',
      options: ['राम बहादुर शाह', 'गणेश मन सिंह', 'विद्याधर भट्टराई', 'विश्वेश्वर प्रसाद कोइराला'],
      correctAnswer: 'राम बहादुर शाह'
    },
    {
      question: 'कोरोना भाइरसको नेपालमा पहिलो संक्रमित व्यक्ति कहिले पाइएका थिए?',
      options: ['२०२० माघ ८', '२०२० फाल्गुन ५', '२०२० चैत्र २६', '२०२० बैशाख १६'],
      correctAnswer: '२०२० माघ ८'
    },
    {
      question: 'के मध्ये पाँच वर्ष लामो आयुको शान्ति समिति सम्मान सम्मेलन सम्पन्न भएको हो?',
      options: ['बीस २ श्रावण', 'बीस २ भदौ', 'बीस १ फाल्गुन', 'बीस १ चैत'],
      correctAnswer: 'बीस २ श्रावण'
    },
    {
      question: 'नेपालको पहिलो रेडियो स्टेशन कुन वर्षमा स्थापित भएको थियो?',
      options: ['१९४७ ई.स.', '१९४९ ई.स.', '१९५१ ई.स.', '१९५३ ई.स.'],
      correctAnswer: '१९४७ ई.स.'
    },
    // Add more questions as needed
  ];

  // State to store the user's selected answer for each question
  const [userAnswers, setUserAnswers] = React.useState(Array(quizQuestions.length).fill(null));

  // Function to handle selecting an answer
  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = selectedOption;
      return newAnswers;
    });
  };

  // Function to calculate the score
  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  return (
    <div>
      <h1>{quizName}</h1>
      <h2>Quiz Questions</h2>
      {quizQuestions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleAnswerSelect(index, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={() => alert(`Your score is ${calculateScore()}/${quizQuestions.length}`)}>
        Submit
      </button>
    </div>
  );
};

export default Programming;
