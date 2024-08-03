import * as React from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function NewsScreen() {
  return (
    <WebView
      source={{
        uri: "https://plataforma.alerta.mapbiomas.org/mapa?monthRange[0]=2019-01&monthRange[1]=2024-07&sources[0]=All&territoryType=all&authorization=all&embargoed=all&locationType=alert_code&activeBaseMap=7&map=-14.288794%2C-54.290447%2C4",
      }}
    />
  );
}
