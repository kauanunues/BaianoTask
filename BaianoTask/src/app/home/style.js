import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        color: '#ffa500',
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    inputContainer: {
        backgroundColor: '#000',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    iconContainer: {
        borderRadius: 25,
        elevation: 40,
        height: 50,
        weight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa500',
    },
})