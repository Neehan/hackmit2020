import React from "react";

import StateManager from "../stateClasses/StateManager";
import StateManagerContext from "../contexts/StateManagerContext";

export default function StateManagerProvider(props) {
  const { children } = props;
  const stateManager = new StateManager();

  return (
    <StateManagerContext.Provider value={stateManager}>
      { children }
    </StateManagerContext.Provider>
  );
}
