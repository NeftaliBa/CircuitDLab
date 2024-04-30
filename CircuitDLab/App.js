import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Importa todas las imágenes estáticas al principio
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMotor, setSelectedMotor] = useState(null);
  const [selectedMotorImage, setSelectedMotorImage] = useState(null); // Nuevo estado para la imagen seleccionada

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const selectMotor = (motor, image) => {
    setSelectedMotor(motor);
    setSelectedMotorImage(image); // Almacena la URL de la imagen seleccionada
    toggleModalVisibility(); // Cierra el modal después de seleccionar un motor
  };

  // Objeto que mapea cada motor con su respectiva imagen
  const motorImages = {
    "Motor 1": image1,
    "Motor 2": image2,
    "Motor 3": image3,
    "Motor 4": image4,
    "Motor 5": image5,
  };

  return (
    <View style={styles.container}>
      <StatusBar />

      <TouchableOpacity style={styles.icondots} onPress={() => console.log("Dots stoD")}>
        <MaterialIcons name="more-horiz" size={40} color="#00FFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconpuzzle} onPress={toggleModalVisibility}>
        <MaterialCommunityIcons name="puzzle-plus" size={40} color="#00FFFF" />
      </TouchableOpacity>

      <Modal visible={isModalVisible} onRequestClose={toggleModalVisibility} animationType="fade" presentationStyle="overFullScreen" transparent={true}>
        <View style={styles.modales}>
          <View style={styles.cabecera}>
            <Text style={styles.textoCabecera}>MÁQUINAS</Text>
          </View>
          <View style={styles.cuerpo}>
            <TouchableOpacity style={styles.equis} onPress={toggleModalVisibility}>
              <MaterialCommunityIcons name="close-thick" size={40} color="#00FFFF" />
            </TouchableOpacity>
            {selectedMotorImage && ( // Renderiza la imagen seleccionada si hay una
              <Image source={selectedMotorImage} style={styles.selectedImage} />
            )}
            <Text style={styles.cambio}>HERRAMIENTAS</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => selectMotor("Motor 1", motorImages["Motor 1"])}>
              <Image source={motorImages["Motor 1"]} style={styles.menuItemImage} />
              <Text style={styles.menuText}>Motor 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => selectMotor("Motor 2", motorImages["Motor 2"])}>
              <Image source={motorImages["Motor 2"]} style={styles.menuItemImage} />
              <Text style={styles.menuText}>Motor 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => selectMotor("Motor 3", motorImages["Motor 3"])}>
              <Image source={motorImages["Motor 3"]} style={styles.menuItemImage} />
              <Text style={styles.menuText}>Motor 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => selectMotor("Motor 4", motorImages["Motor 4"])}>
              <Image source={motorImages["Motor 4"]} style={styles.menuItemImage} />
              <Text style={styles.menuText}>Motor 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => selectMotor("Motor 5", motorImages["Motor 5"])}>
              <Image source={motorImages["Motor 5"]} style={styles.menuItemImage} />
              <Text style={styles.menuText}>Motor 5</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icondots: {
    backgroundColor: "#7D3C98",
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    borderRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
  },
  iconpuzzle: {
    backgroundColor: "#7D3C98",
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    paddingRight: 20,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  modales: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cabecera: {
    backgroundColor: '#7D3C98',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  cuerpo: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 100,
    alignItems: 'center',
  },
  cambio: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#7D3C98'
  },
  textoCabecera: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  equis: {
    position: 'absolute',
    backgroundColor: "#FF3C98",
    top: -20,
    right: -10,
    padding: 5,
    paddingRight: 5,
    borderRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  menuItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 20,
    color: '#7D3C98',
  },
  menuItemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  selectedImage: {
    width: 200, // Tamaño arbitrario, puedes ajustarlo según tus necesidades
    height: 200, // Tamaño arbitrario, puedes ajustarlo según tus necesidades
    marginVertical: 20,
  },
});
