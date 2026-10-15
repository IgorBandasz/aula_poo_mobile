import { Text, View } from "react-native";

type CachorroProps = {
    nome: string;
    raca?: string;
}

export default function Cachorro(props: CachorroProps) {
    return ( 
        <View>
            <Text>Cachorro: {props.nome}</Text>
            {
                props.raca 
                &&
                <Text>Raça: {props.raca}</Text>
            }
        </View>
    )
}