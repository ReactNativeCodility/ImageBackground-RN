import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageStyle: {
        width: "100%",
        height: "80%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10
      },
      textHeader: {
        fontSize: 35,
        color: '#117864',
        marginBottom: 15
      }
});