import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "T1dsnfkl;anf;lkanf;lkandsfl;knadf;klnadsl;kfnads;lkfnas;ldkfnals;kdfnals;kndfsa",
    description:
      "Dasdaadfns;lkdsnflknsf;lkan;lfnas;lkfn;alskdnf;lkasnd;lfknas;lkfdnadslkfna;slknf;alksdnf;laksnfdl;kasndfl;kansd;lfknasd;lfnkasl;kdfna;lskfdnaskl;nfsakl;nfakl;nfd;laknf;lasknfa;lsknfasl;knfdl;aknl;ksadnfkl;nasdlk;fna;slkdnf;laskndfl;kasndfkl;sds",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "T#",
    description: "Dasdasdas2",
    image: require("../assets/me.jpg"),
  },
];

const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    // Delete the message from array
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Press", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 3,
              title: "T#######",
              description: "Dasdasdas2",
              image: require("../assets/me.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
