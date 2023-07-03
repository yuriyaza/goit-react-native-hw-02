import { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, Pressable } from 'react-native';

export const RegistrationScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  function passwordHide() {
    setIsPasswordHidden(state => (state.isPasswordHidden = !isPasswordHidden));
  }

  return (
    <>
      <Image style={styles.background} source={require('../assets/img/background-photo-min.jpg')} />
      <View style={styles.registrationForm}>
        <View style={styles.userPhoto}>
          <Pressable style={styles.btnAddPhoto}>
            <Image style={styles.btnAddPhotoIcon} source={require('../assets/img/button-add-photo-min.png')} />
          </Pressable>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} textContentType='username' placeholder='Логін' />
          <TextInput style={styles.input} textContentType='emailAddress' placeholder='Адреса електронної пошти' />
          <View>
            <TextInput style={[styles.input, styles.lastInput]} textContentType='password' secureTextEntry={isPasswordHidden} placeholder='Пароль' />
            <Pressable style={styles.btnShow} onPress={passwordHide}>
              <Text style={styles.btnShowLabel}>Показати</Text>
            </Pressable>
          </View>
          <Pressable style={styles.btnRegister}>
            <Text style={styles.btnRegisterLabel}>Зареєструватися</Text>
          </Pressable>
          <Pressable style={styles.btnLogin}>
            <Text style={styles.btnLoginLabel}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  registrationForm: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',

    paddingTop: 92,
    paddingBottom: 29,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },

  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  userPhoto: {
    position: 'absolute',
    alignSelf: 'center',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  btnAddPhoto: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },

  btnAddPhotoIcon: {
    width: '100%',
    height: '100%',
  },

  title: {
    marginBottom: 32,
    fontFamily: 'Roboto-500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
  },

  input: {
    marginBottom: 16,
    padding: 16,

    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },

  lastInput: {
    marginBottom: 43,
  },

  btnShow: {
    position: 'absolute',
    top: 22,
    right: 16,
  },

  btnShowLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },

  btnRegister: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  btnRegisterLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  btnLogin: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },

  btnLoginLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
});
