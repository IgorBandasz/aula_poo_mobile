import { Pressable, StyleSheet, Text, View } from "react-native";

type CachorroProps = {
    nome: string;
    raca?: string;
    index: number;
    onSelecionar: (index: number) => void;
}

export default function Cachorro(props: CachorroProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.fonte_grande}>Cachorro: {props.nome}</Text>
            {
                props.raca
                &&
                <Text style={styles.fonte_grande}>Raça: {props.raca}</Text>
            }


            <Pressable
                onPress={() => { props.onSelecionar(props.index) }}>
                <Text style={styles.fonte_grande}>SELECIONAR</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    fonte_grande: {
        fontSize: 20
    },
    container:{
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        borderStyle: 'solid'
        
    }
})