import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 2) {
      toast.error("El texto debe tener un mínimo de 2 caracteres.");
      return;
    }

    setInputValue("");
    onNewCategory(inputValue.trim().toLowerCase());
  };

  return (
    <form className="row justify-content-center" onSubmit={onSubmit}>
      <div className="col-6">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
          autoFocus
        />
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </form>
  );
};
