import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const useScreenSize = () => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(Dimensions.get("window").width);
  }, []);

  return {
    width,
  };
};

export default useScreenSize;
