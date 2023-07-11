import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";

import Buttons from "../buttons/button";
import Result from "../resultpage/resultPage";

const Homepage = () => {
  const [values, setvalues] = useState([]);
  //   console.log(values);
  return (
    <div className="homepage">
      <Row>
        {/* Colum 1 is for showing the buttons  */}
        <Col>
          <Buttons setvalues={setvalues} />
        </Col>

        {/* Column 2 is for showing the results accordingly  */}
        <Col>
          <Result valuetomap={values} />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
