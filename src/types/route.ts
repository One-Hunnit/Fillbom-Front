export interface ITab {
  name: string;
  title: string;
  tabBarIcon?: ((props: { focused: boolean; color: string; size: number }) => React.ReactNode) | undefined;
}
