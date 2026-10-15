import Cachorro from "@/components/Cachorro";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type CachorroType = {
  nome: string,
  raca?: string
}

export default function Index() {
  const cao1 = {nome: 'Totó', raca: 'Não definido'} as CachorroType;
  const cao2 = {nome: 'Bob', raca: 'Rottweiler'} as CachorroType;

  
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);
  const [listaCachorro, setListaCachorro] = useState<CachorroType[]>([cao1, cao2]);
  
  
  // const lista : CachorroType[] = [cao1, cao2];
  
  const router = useRouter();

  function selecionarCachorro(index: number){
    Alert.alert('Cachorro selecionado: '+ index);
    listaCachorro.splice(index, 1);
    setListaCachorro(listaCachorro);
    console.log(listaCachorro)
  }

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={listaCachorro} 
        renderItem={(item)=>{ 
          return (
            <Cachorro 
              nome={item.item.nome} 
              raca={item.item.raca}
              index={item.index}
              onSelecionar={selecionarCachorro}/>
            // <Text style={styles.fonte_grande}>{(item.index+1) + ' - ' + item.item}</Text>
          )
        }}/>

      <Pressable
        onPress={()=>{ router.navigate('/telaStyleText')  }}>
        <Text>Ir para Exemplo Style Text</Text>
      </Pressable>


      {/* <Pressable
        onPress={()=>{
          Alert.alert(`Campo: ${campo}`)
          }}>
        <Text>Boa noite.</Text>
      </Pressable>

      <TextInput 
        placeholder="Digite algo..."
        value={campo}
        onChangeText={(text)=> {setCampo(text)}}/>

      <Switch 
        value={ativado}
        onValueChange={(value)=>{setAtivado(value)}}/>

      <Text style={[styles.fonte_grande, ativado ? styles.cor_verde : styles.cor_vermelho ]}>Status</Text> 

      {
        (ativado)
        ? 
          <Text style={{fontSize: 20}}>Ativado</Text>  
        : 
        <Text style={{fontSize: 20}}>Desativado 1</Text>
      }    

      {
        texto()
      }

      <Image 
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={{width: 200, height: 200}}/>

      <Cachorro nome={"totó"} raca={"Não definida"} /> */}
    
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fonte_grande:{
    fontSize: 40
  },
  cor_verde:{
    color: 'green'
  },
  cor_vermelho:{
    color: 'red'
  }
});
