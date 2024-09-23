import Input from "./Input";
import Label from "./Label";

import React, { forwardRef } from "react";

const InputForm = forwardRef(
  (
    {
      type,
      placeholder,
      name,
      label,
    }: { type: string; placeholder: string; name: string; label: string },
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          ref={ref} // Implementasi ref agar cursor langsung fokus ke input email
        />
      </div>
    );
  },
);

export default InputForm;
