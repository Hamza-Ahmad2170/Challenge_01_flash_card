import { useState } from "react";

function FlashCards({ questions }) {
  const [selectedId, setSelectedId] = useState(null);


const handleClick = (id) => setSelectedId(id !== selectedId ? id : null);



  return (
    <div className="flashcards">
      {questions.map((ques) => {
        return (
          <div
            key={ques.id}
            className={ques.id === selectedId ? "selected" : ""}
            onClick={() => handleClick(ques.id)}
          >
            <p>{ques.id === selectedId ? ques.answer : ques.question}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FlashCards;
