import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === text)) {
        alert("同じ要素が存在ます");
        return prevArray;
      }
      return [...prevArray, text]
    })
  }, [text])

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, [])

  return {text, array, handleAdd, handleChange}
}