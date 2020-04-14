import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) =>{
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <Text>Nome: {props.nome}</Text>
                <Text>Celular: {props.celular}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: 42,
        backgroundColor: '#00FF7F',
        borderColor: '#00FF7F',
        borderWidth: 1,
        marginBottom: 8,
    }
});

export default ContatoItem;
