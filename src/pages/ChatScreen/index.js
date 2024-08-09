import * as React from "react";
import { Text, View } from "react-native";

import { WebView } from "react-native-webview";

export default function ChatScreen() {
  return (
    <WebView
      source={{
        uri: "https://gemini.google.com/",
      }}
      style={{
        borderRadius: "90%",
        alignSelf: "center",
        width: "99%",
        marginTop: "8%",
        height: "100%",
        flex: 1,
      }}
    />
  );
}
