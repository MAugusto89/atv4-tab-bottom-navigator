import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles.js";

// dados de exemplo, mas precisa iniciar vazio

export default function App() {
  const [data, setData] = useState([]);
  const [task, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (task === "") {
      return;
    }
    const novaTarefa = [...data, task];
    setData(novaTarefa);
    setNovaTarefa("");
  };

  const remover = (indice) => {
    const novaTarefa = [...data];
    novaTarefa.splice(indice, 1);
    setData(novaTarefa);
  };

  const alterar = (indice, novaDescricao) => {
    const novaTarefa = [...data];
    novaTarefa[indice] = novaDescricao;
    setData(novaTarefa);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>

      <View style={styles.containerInput}>
        <View style={styles.inputText}>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setNovaTarefa(texto)}
            value={task}
          />
          <TouchableOpacity onPress={() => adicionarTarefa()}>
            <Entypo name="circle-with-plus" size={28} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.tarefa}>
            <Text style={styles.textoTarefa}>{item}</Text>
            <TouchableOpacity
              onPress={() => alterar(index, prompt("Nova Descrição:"))}
            >
              <Entypo name="check" size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => remover(index)}>
              <Entypo name="trash" size={28} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
