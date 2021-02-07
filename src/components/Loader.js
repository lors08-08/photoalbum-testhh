import React from "react";
import { Loading, CircleLoader } from "./styled/index";

function Loader() {
  return (
    <Loading>
      <div>
        <CircleLoader />
        <div>Пожалуйста подождите, идет загрузка...</div>
      </div>
    </Loading>
  );
}

export default Loader;
