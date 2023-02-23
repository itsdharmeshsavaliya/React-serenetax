import React from "react";

export default function Input(props) {
  const { className, name, required, size, type } = props;
  return (
    <input
      className={className}
      name={name}
      required={required}
      size={size}
      type={type}
    />
  );
}
