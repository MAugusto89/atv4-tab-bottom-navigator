import * as React from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function NewsScreen() {
  return (
    <WebView
      source={{
        uri: "https://ead.ifms.edu.br/",
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
