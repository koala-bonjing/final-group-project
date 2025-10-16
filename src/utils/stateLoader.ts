const STATE_VERSION = "v1";

export const loadState = () => {
  try {
    const saved = localStorage.getItem("stateVersion");
    if (saved !== STATE_VERSION) return undefined; // force reset old state
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
    localStorage.setItem("stateVersion", STATE_VERSION);
  } catch {
    // ignore errors
  }
};
