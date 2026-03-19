import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  let elemento = null;
  let i = 0;

  const AUTOR = 'Arthur de Souza Linsingen Vieira';
  const DATA = '03/2026';

  let ArrayNomes = ['Ana Clara', 'Arthur', 'Kawan', 'Bruno', 'Pedro', 'Julia', 'Marcia'];

  let ArrayImagens = [
    'https://media-poa1-1.cdn.whatsapp.net/v/t61.24694-24/503965852_3014264408741999_2155931271787175964_n.jpg?ccb=11-4&oh=01_Q5Aa4AEQQ9w1DwXzcyDh6vJ0IQz7xBo2HBZXIwAndnOQql1mNg&oe=69C9A7F1&_nc_sid=5e03e0&_nc_cat=102',
    'https://media-poa1-1.cdn.whatsapp.net/v/t61.24694-24/455197972_831713419105618_1089387044800261594_n.jpg?ccb=11-4&oh=01_Q5Aa4AGZyqhnfvDqbEfUF3SKJG5fXMkB3K7kXCtFPBetA9E0nA&oe=69C9889B&_nc_sid=5e03e0&_nc_cat=107',
    'https://media-poa1-1.cdn.whatsapp.net/v/t61.24694-24/636857175_1963934147540011_902727542162874092_n.jpg?ccb=11-4&oh=01_Q5Aa4AGNkDlJFSorr6fCZkQBjz4n4j0M5Xy88oKW7tEClV9CSQ&oe=69C97A06&_nc_sid=5e03e0&_nc_cat=109',
    'https://media-poa1-1.cdn.whatsapp.net/v/t61.24694-24/529443029_1480527159651712_6199190527379518962_n.jpg?ccb=11-4&oh=01_Q5Aa4AHx9bZTWjDx-piBw1bowx6GyQ_b8nAuxhVxYJfmm6VGXQ&oe=69C97E29&_nc_sid=5e03e0&_nc_cat=102',
    'https://media-poa1-1.cdn.whatsapp.net/v/t61.24694-24/239771185_6824034904337467_3948452399018774260_n.jpg?ccb=11-4&oh=01_Q5Aa4AEjVK9hk5Do96f9SvFHQ1D8eRr7bDAI8gCqHJURmwNq3g&oe=69C99906&_nc_sid=5e03e0&_nc_cat=106',
    'https://media-poa1-1.cdn.whatsapp.net/v/t61.24694-24/592524228_906843832110424_4269418690923251005_n.jpg?ccb=11-4&oh=01_Q5Aa4AHhItrI4jPUXcBgLYEYmU8SZs_GG42QROHheXNWoR0ybA&oe=69C98B34&_nc_sid=5e03e0&_nc_cat=103',
    'https://media-poa1-1.cdn.whatsapp.net/v/t61.24694-24/328618148_1154470725775131_5799021701508329766_n.jpg?ccb=11-4&oh=01_Q5Aa4AFoWWRFrxM2ihLnZorCD6xfi5Jy1E_YjxJw6_i80p3pdg&oe=69C99D36&_nc_sid=5e03e0&_nc_cat=109'
  ];

  while (i < ArrayNomes.length) {
    elemento =
      <>
        {elemento}
        <View style={{
          marginTop: 8,
          height: 90,
          width: '100%',
          backgroundColor: '#c94ae2',
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10
        }}>

          <Image
            source={{ uri: ArrayImagens[i] }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 15
            }}
          />

          <Text style={{ fontSize: 18, color: 'white' }}>
            Nome: {' '}
            <Text style={{ fontWeight: 'bold' }}>
              {ArrayNomes[i]}
            </Text>
          </Text>

        </View>
      </>
    ;
    i++;
  }

  return (
    <View style={{ backgroundColor: '#EAEAEA', flex: 1, padding: 10 }}>

      <View style={{
        borderTopRightRadius: 25, borderTopLeftRadius: 25,
        backgroundColor: '#5737af',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>
          REPETIÇÃO COM SCROLL
        </Text>

        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>
          ATIVIDADE COM FOTO E ROLAGEM
        </Text>
      </View>

      <ScrollView style={{
        backgroundColor: 'white',
        flex: 5,
        padding: 10
      }}>
        {elemento}
      </ScrollView>

      <View style={{
        backgroundColor: '#5737af',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 16, color: '#000000' }}>{AUTOR}</Text>
        <Text style={{ fontSize: 16, color: '#000000' }}>{DATA}</Text>
      </View>

    </View>
  );
}