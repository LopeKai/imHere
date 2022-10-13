import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
    const participants = ['Rodrigo Valentin', 'Vini pereira', 'Beatriz fernanda', 'Karen Araujo', 'Felipe souza', 'João Silva', 'Mayk Brito', 'Renan Silva', 'Victoria pereira', 'Ana nieman', 'Neuza silva', 'Tia Maria']

    function handleParticipantAdd(name: string) {
        console.log(`Removido ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Niver do Kaique
            </Text>

            <Text style={styles.eventDate}>
                sext, 4 de novembro 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do convidado"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Lista vazia.
                    </Text>
                )}
                renderItem={({ item }) => (
                    <Participant 
                        name={item} 
                        onRemove={() => handleParticipantAdd(item)} 
                    />
                )}
            />
        </View>
    )
}