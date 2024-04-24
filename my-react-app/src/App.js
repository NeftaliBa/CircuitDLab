import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MenuExample = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.topLeftButton]} onPress={toggleMenuVisibility}>
        <Text style={styles.buttonText}>Botón 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.bottomRightButton]} onPress={toggleMenuVisibility}>
        <Text style={styles.buttonText}>Botón 2</Text>
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Opción 1 seleccionada")}>
            <Image source={require('./opcion1.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Opción 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Opción 2 seleccionada")}>
            <Image source={require('./opcion2.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Opción 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Opción 3 seleccionada")}>
            <Image source={require('./opcion3.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Opción 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  topLeftButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'purple',
  },
  bottomRightButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'purple',
  },
  menu: {
    position: 'absolute',
    top: 100,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default MenuExample;
