import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AddCategory, GifGrid, Footer, ToggleSwitch, ScrollToTop } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["welcome"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      toast.error(`El texto "${newCategory}" ya se ha buscado.`);
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="fw-bold text-center my-3">Gif Application</h1>

      <ToggleSwitch />

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      <hr className="mt-4" style={{ width: "50vw", margin: "auto" }} />

      {categories.map((category, index) => (
        <GifGrid key={index} category={category} />
      ))}
      
      <ScrollToTop />

      <Footer />

      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};
