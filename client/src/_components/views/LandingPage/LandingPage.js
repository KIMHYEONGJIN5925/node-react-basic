import React, { useEffect } from "react";
import axios from "axios";
function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);
  return <div>LandingPage 입니다zz.</div>;
}

export default LandingPage;
