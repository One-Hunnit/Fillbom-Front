export type TStore<State> = State & {
  setState: <K extends keyof State>(key: K, value: State[K]) => void;
  initState: () => void;
};
