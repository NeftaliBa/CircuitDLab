import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import { useState } from 'react';
//Icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (

    <View style={styles.container}>
      <StatusBar />

      <TouchableOpacity style={styles.icondots} onPress={() => console.log("Dots stoD")}>
        <MaterialIcons name="more-horiz" size={40} color="#00FFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconpuzzle} onPress={() => setIsModalVisible(true)}>
        <MaterialCommunityIcons name="puzzle-plus" size={40} color="#00FFFF" />
      </TouchableOpacity>

      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="fade" presentationStyle="overFullScreen" transparent={true} >
        <View style={styles.modales}>
          <View style={styles.cuerpo}>
            <TouchableOpacity style={styles.equis} onPress={() => setIsModalVisible(true)}>
              <MaterialCommunityIcons name="close-thick" size={40} color="#00FFFF" onPress={() => setIsModalVisible(false)} />
            </TouchableOpacity>
            <Text style={styles.cambio}> HERRAMIENTAS </Text>
          </View>
          <View style={styles.cabecera}>
            <Text style={styles.textoCabecera}>MÁQUINAS</Text>
          </View>
        </View>

      </Modal>



      {/* iconos  
      <MaterialCommunityIcons name="connection" size={32} color="#000000"/>
      <MaterialIcons name="delete" size={32} color="#000000"/>
      <MaterialIcons name="more-horiz" size={32} color="#000000"/>
      <MaterialCommunityIcons name="content-save-all" size={32} color="#000000"/>
      <MaterialIcons name="launch" size={32} color="#000000"/>
      <MaterialCommunityIcons name="puzzle-plus" size={32} color="#000000"/>
      <MaterialCommunityIcons name="magnify" size={32} color="#000000"/>
      <MaterialIcons name="file-copy" size={32} color="#000000"/>


      logs
      onPress={() =>console.log("soy 3dots")}
      borra luego los logs xd
    */}
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
  // Menu de herramientas y maquinas
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
    paddingVertical: 150,
    paddingHorizontal: 300,
    alignItems: 'center',
  },
  cambio: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor:'#7D3C98'
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

});
