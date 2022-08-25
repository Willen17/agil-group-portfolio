import React, { useState } from "react";

const Signup = ({ open, onclose }) => {
  const [formSubmited, setFormSubmited] = useState(false);
  if (!open) return null;

  const submitForm = () => {
    setFormSubmited(true);
  };

  return <div>Signup</div>;
};

export default Signup;
