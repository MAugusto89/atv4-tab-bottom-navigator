import * as React from "react";
import { Text, View } from "react-native";

import { WebView } from "react-native-webview";

export default function ChatScreen() {
  return (
    <WebView
      source={{
        uri: "https://newsapi.org/v2/everything?q=tesla&from=2024-07-03&sortBy=publishedAt&apiKey=b385191407df4f4e9dafa8e927000b3d",
      }}
    />
  );
}
