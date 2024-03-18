import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RadioButtons from "../components/RadioButton";
import { RadioGroup } from "../components/RadioGroup";

const HomePage: React.FC = () => {
  const items: { value: string; label: string }[] = [
    { value: "registercustomer", label: "Register Customer" },
    { value: "existingcustomer", label: "Existing Customer" },
  ];

  const [value, setValue] = useState<string | null>(null);
  return (
    <RadioGroup
      name="customer"
      items={items}
      value={value}
      onChange={setValue}
    />
  );
};
export default HomePage;
