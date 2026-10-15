import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default () => {
    const [ativado, setAtivado] = useState(false);

    function construir(){
        if(ativado){
            return <Text style={styles.fonte_grande}>Ativado</Text>
        }else{
            return <Text style={styles.fonte_grande}>Desativado</Text>
        }
    }

    return (
        <View>
            <Switch
                value={ativado}
                onValueChange={(value) => { setAtivado(value) }} />

            <Text style={styles.fonte_grande}>Construção condicional direta no return</Text>
            {
                (ativado)
                    ?
                    <Text style={styles.fonte_grande}>Ativado</Text>
                    :
                    <Text style={styles.fonte_grande}>Desativado</Text>
            }

            <Text style={styles.fonte_grande}>Construção condicional através de função declarada fora do return</Text>
            {
                construir()
            }
        </View>
    )
}

const styles = StyleSheet.create({
    fonte_grande: {
        fontSize: 20
    }
})