import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

// Importa todas las imágenes estáticas al principio
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';

const images = [image1, image2, image3, image4, image5];

const MenuExample = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  const closeModal = () => {
    setSelectedOption(null);
  };
//creacion de rama
  const applyOption = () => {
    console.log('Opción aplicada:', selectedOption);
    closeModal();

  };

  return (
    <View style={styles.container}>
            <StatusBar hidden />
      <TouchableOpacity style={[styles.button, styles.topLeftButton]} onPress={toggleMenuVisibility}>
        <Text style={styles.buttonText}>Botón 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.bottomRightButton]} onPress={toggleMenuVisibility}>
        <Text style={styles.buttonText}>Botón 2</Text>
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.menu}>
          {images.map((image, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={() => selectOption(index + 1)}>
              <Image source={image} style={styles.menuIcon} />
              <Text style={styles.menuText}>Motor {index + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Modal visible={selectedOption !== null} transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          {selectedOption !== null && (
            <View style={styles.modalContent}>
              <Image source={images[selectedOption - 1]} style={styles.modalImage} />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  closeButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MenuExample;