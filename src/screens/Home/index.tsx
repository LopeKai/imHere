import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if(participants.includes(participantName)) {
            return Alert.alert("convidado existe", "Já existe esse convidado na lista.")
        }
        setParticipants(prevState => [...prevState,participantName])
        setParticipantName("")
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Tem certeza que deseja remover o convidado(a) ${name}?`,[
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Aniversário do Kaique
            </Text>

            <Text style={styles.eventDate}>
                sext, 4 de novembro 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicionar convidado"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
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
                        onRemove={() => handleParticipantRemove(item)} 
                    />
                )}
            />
        </View>
    )
}