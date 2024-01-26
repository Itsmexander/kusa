interface MenuInterface {
  key: string;
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  children?: MenuInterface[];
}
