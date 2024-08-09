import * as React from "react";
import { Text, View, Button } from "react-native";
import { WebView } from "react-native-webview";

export default function NewsScreen() {
  return (
    <WebView
      source={{
        uri: "https://fast.com/pt/#",
      }}
      style={{
        width: "100%",
        marginTop: "8%",
        height: "100%",
        flex: 1,
      }}
    />
  );
}
