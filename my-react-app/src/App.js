import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      {/* Botón de menú en la parte superior izquierda */}
      <View style={[styles.topLeft, { top: 100 }]}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenuVisibility}>
          <AntDesign name="menu-fold" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Botón en la parte inferior derecha */}
      <View style={styles.bottomRight}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Botón presionado")}>
          <AntDesign name="tool" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Vista de menú */}
      {menuOpen && (
        <View style={styles.menuView}>
          <Text>Maquinas Electricas</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeft: {
    position: 'absolute',
    left: 20,
  },
  menuButton: {
    padding: 10,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    padding: 10,
  },
  menuView: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
