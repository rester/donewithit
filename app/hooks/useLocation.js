import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync({});
      setLocation({ latitude, longitude });
    })();
  }, []);

  return location;
}
