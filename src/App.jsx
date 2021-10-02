import { useState } from "react";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("안녕하세요.");
  const [newText, setNewText] = useState(text);

  const showEdit = () => {
    setEditMode(true);
  };

  let content = (
    <div>
      {text}
      <button onClick={showEdit}>수정모드로 변경</button>
    </div>
  );

  if (editMode) {
    const commitEdit = () => {
      setEditMode(false);
      setText(newText);
    };

    const cancelEdit = () => {
      setEditMode(false);
      setNewText(text);
    };

    content = (
      <>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setNewText(value);
          }}
          value={newText}
        />

        <button onClick={cancelEdit}>수정취소</button>
        <button onClick={commitEdit}>수정완료</button>
      </>
    );
  }

  return <div className="App">{content}</div>;
}

export default App;
