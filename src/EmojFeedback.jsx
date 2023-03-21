import { useEffect, useState } from "react";

export default function FeedbackForm() {
  const emojiScores = ["😦", "😞", "😐", "🙂", "😁"];
  const emojiArray = emojiScores.map((e) => {
    return { emoji: e, clicked: false };
  });
  const [foodScore, setFoodScore] = useState(0);
  const [serviceScore, setServiceScore] = useState(0);
  const [valueScore, setValueScore] = useState(0);
  const [foodButtons, setFoodButtons] = useState(emojiArray);
  const [serviceButtons, setServiceButtons] = useState(emojiArray);
  const [valueButtons, setValueButtons] = useState(emojiArray);

  const [toatlScrore, setTotalScore] = useState(0);

  const handleClick1 = (index) => {
    setFoodScore(index);
    const newEmojiButtons = emojiArray.map((e, i) => {
      if (i === index) return { emoji: e.emoji, clicked: !e.clicked };
      else return e;
    });
    setFoodButtons(newEmojiButtons);
  };
  const handleClick2 = (index) => {
    setServiceScore(index);
    const newEmojiButtons = emojiArray.map((e, i) => {
      if (i === index) return { emoji: e.emoji, clicked: !e.clicked };
      else return e;
    });
    setServiceButtons(newEmojiButtons);
  };
  const handleClick3 = (index) => {
    setValueScore(index);
    const newEmojiButtons = emojiArray.map((e, i) => {
      if (i === index) return { emoji: e.emoji, clicked: !e.clicked };
      else return e;
    });
    setValueButtons(newEmojiButtons);
  };
  useEffect(() => {
    const newTotalScore = foodScore + serviceScore + valueScore;

    setTotalScore(newTotalScore);
  }, [foodScore, serviceScore, valueScore]);

  return (
    <div className="App">
      <h2> Let us know how we did?</h2>
      <div>
        <p>Food</p>
        {foodButtons.map((e, index) => (
          <button
            onClick={() => handleClick1(index)}
            className={e.clicked ? "clickedButton" : "notClickedButton"}
            key={index}
          >
            {e.emoji}
          </button>
        ))}
      </div>
      <div>
        <p>Service</p>
        {serviceButtons.map((e, index) => (
          <button
            onClick={() => handleClick2(index)}
            className={e.clicked ? "clickedButton" : "notClickedButton"}
            key={index}
          >
            {e.emoji}
          </button>
        ))}
      </div>
      <div>
        <p>Value for money</p>

        {valueButtons.map((e, index) => (
          <button
            onClick={() => handleClick3(index)}
            className={e.clicked ? "clickedButton" : "notClickedButton"}
            key={index}
          >
            {e.emoji}
          </button>
        ))}
      </div>
      <h2>Total Score: {toatlScrore} /12</h2>
    </div>
  );
}
