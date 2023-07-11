import { useState, useEffect } from "react";

import { Form } from "react-bootstrap";

const Result = ({ valuetomap }) => {
  const [forms, setforms] = useState([]);

  useEffect(() => {
    setforms(valuetomap);
  }, [valuetomap]);

  return (
    <div className="Result">
      <Form className=" bg-info  p-4 mb-3">
        <h3 className="text-center"> Fill The fields accordingly</h3>

        {forms.map((value, index) => {
          return (
            <Form.Group key={index} controlId={value.name}>
              <Form.Label>{value.name}</Form.Label>
              <Form.Control
                type={value.type}
                name={value.name}
                placeholder={value.name}
              ></Form.Control>
            </Form.Group>
          );
        })}
      </Form>
    </div>
  );
};

export default Result;
