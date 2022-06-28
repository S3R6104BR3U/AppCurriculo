import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    
    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
    
      card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#FFF',
      },
    
      card_content: {
        marginTop: 20,
      },
    
      card_content_text: {
        color: '#939393',
        marginBottom: 10,
      }

})

export default style;