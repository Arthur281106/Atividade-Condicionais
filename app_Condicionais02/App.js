import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [OPCAO, setOPCAO] = useState(1);

  let img1= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A6dea1K3BsC5IQH1CNrMlr5xT2D465DwtQ&s';
  let img2 = 'https://i.pinimg.com/236x/58/83/71/5883719edede80221436679dd1438d7d.jpg';

  let corFundo1 = 'rgba(0, 0, 0, 0.2)';
  let corLetra1 = 'white';
  let tamanhoLetra1 = 40;

  if (OPCAO == 1)
    return (
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <Image source={{ uri: img1 }}
          style={{ width: '100%', height: '100%' }} />

        <TouchableOpacity onPress={() => setOPCAO(1)} style={{
          backgroundColor: corFundo1, left: 100, top: 100,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>OPÇÃO 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOPCAO(2)} style={{
          backgroundColor: corFundo1, left: 100, top: 300,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>OPÇÃO 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Saiu')} style={{
          backgroundColor: corFundo1, left: 130, top: 500,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>SAIR</Text>
        </TouchableOpacity>
      </View>
    );
  else
    return (
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <Image source={{ uri: img2 }}
          style={{ width: '100%', height: '100%' }} />

        <TouchableOpacity onPress={() => setOPCAO(1)} style={{
          backgroundColor: 'rgba(255, 0, 0, 0.2)', left: 100, top: 100,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>OPÇÃO 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOPCAO(2)} style={{
          backgroundColor: 'rgba(0, 255, 0, 0.2)', left: 100, top: 300,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>OPÇÃO 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Saiu')} style={{
          backgroundColor: 'rgba(0, 0, 255, 0.2)', left: 120, top: 550,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>SAIR</Text>
        </TouchableOpacity>
      </View>
    );
}