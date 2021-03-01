import { useEffect, useRef, useState } from "react";
import * as Permission from "expo-permissions";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default useNotifications = (notificationListenerParam) => {
  const [notification2, setNotification2] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotifications();
    //  This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current = Notifications.addNotificationReceivedListener(
    //   (notification) => {
    //     setNotification2(notification);
    //     console.log("hello");
    //     console.log(notification);
    //   }
    // );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    if (notificationListenerParam) {
      responseListener.current = Notifications.addNotificationResponseReceivedListener(
        notificationListenerParam
      );

      return () => {
        Notifications.removeNotificationSubscription(responseListener);
      };
    }
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
      console.log(token);
    } catch (error) {
      console.log("Error getting a push token notification", error);
    }
  };
};
