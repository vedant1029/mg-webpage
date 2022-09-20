export type UserDataType = {
  name: string;
  email: string;
  phone: string;
};

export type ConfigDataType = {
  config: string;
  data: {
    name: string;
    color: string;
    variant: string;
    subvariant: string;
  };
  timestamp: number;
};
