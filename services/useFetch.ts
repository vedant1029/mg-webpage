import { useEffect, useState } from "react";
import { UserDataType, ConfigDataType } from "../constants/DataTypes";

export default function useFetch(url: string) {
  let [userData, setUserData] = useState<UserDataType | undefined>(undefined);
  let [configData, setConfigData] = useState<ConfigDataType>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url, {
          method: "GET",
          redirect: "follow",
        });
        console.log(data);
        const jsonData = await data.json();
        console.log(jsonData);
        setUserData(jsonData.User);
        setConfigData(jsonData.Configurations);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [url]);

  // if (userData == undefined)
  //   setUserData({
  //     name: "John",
  //     email: "jonathan@example.com",
  //     phone: "7999927777",
  //   });
  // if (configData.length==0) setConfigData(["a", "b", "c", "d"]);

  return { userData, configData };
}
