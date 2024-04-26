import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Path, Svg } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from 'expo-router';


const Icons = {
  Google: () => (
    <Svg viewBox="0 0 48 48" height="24" width="24">
      <Path
        d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
        fill="#ffc107"
      />
      <Path
        d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
        fill="#ff3d00"
      />
      <Path
        d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
        fill="#4caf50"
      />
      <Path
        d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
        fill="#1976d2"
      />
    </Svg>
  ),
  Facebook: () => (
    <Svg height="24" width="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="m23 12c0-6.07578-4.9242-11-11-11-6.07578 0-11 4.92422-11 11 0 5.4914 4.02187 10.0418 9.2812 10.8668v-7.6871h-2.79292v-3.1797h2.79292v-2.42344c0-2.75644 1.6415-4.27968 4.1551-4.27968 1.2032 0 2.4621.21484 2.4621.21484v2.70703h-1.3879c-1.3664 0-1.7917.84863-1.7917 1.71875v2.0625h3.0507l-.4877 3.1797h-2.563v7.6871c5.2593-.825 9.2812-5.3754 9.2812-10.8668z"
        fill="#1877f2"
      />
      <Path
        d="m16.2818 15.1797.4877-3.1797h-3.0507v-2.0625c0-.87012.4253-1.71875 1.7917-1.71875h1.3879v-2.70703s-1.2589-.21484-2.4621-.21484c-2.5136 0-4.1551 1.52324-4.1551 4.27968v2.42344h-2.79292v3.1797h2.79292v7.6871c.5608.0881 1.1344.1332 1.7188.1332s1.158-.0451 1.7188-.1332v-7.6871z"
        fill="#fff"
      />
    </Svg>
  ),
};

export default function Page() {

  const { control } = useForm();
  const [show, setShow] = React.useState(true);

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (

    <SafeAreaView style={styles.container}>
      
      <ScrollView>

        <StatusBar style="light" />

        <View style={styles.main}>

          <View style={styles.heading}>

            <View style={styles.LoginIcon}>
              <Text style={styles.leading}> Log in to your Account✨</Text>
              <Icon name="brightness-3" size={25} color="white" style={styles.sunicon} />
            </View>

            <Text style={styles.subTitle}>Welcome back! Please enter your details</Text>

          </View>
          <View style={styles.form}>

            <View style={styles.control}>
              <Text style={styles.inputText}>
                Email
              </Text>
              <Icon name="mail-outline" size={20} color="#8c959f" style={styles.iconLeft} />
              <TextInput
                placeholder="Enter your email"
                textContentType="emailAddress"
                placeholderTextColor="gray"
                style={styles.input}
              />

            </View>

            <View style={styles.control}>
              <Text style={styles.inputText}>Password</Text>
              <Icon name="lock-outline" size={20} color="#8c959f" style={styles.iconLeft} />
              <TextInput style={styles.input}
                placeholder="************ "
                // value={password}
                onChangeText={setPassword}
                placeholderTextColor="gray"
                secureTextEntry={!showPassword} />


            </View>

            <Pressable onPress={togglePasswordVisibility}>
              <Icon name={showPassword ? "visibility" : "visibility-off"} size={27} color="#8c959f" style={styles.iconRight} />
            </Pressable>


          </View>

          <View style={styles.days}>
            <TouchableOpacity onPress={toggleCheckbox}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {isChecked ? (
                  <Icon name="check-box" size={15} color="white" />
                ) : (
                  <Icon name="check-box-outline-blank" size={15} color="white" />
                )}
              </View>
            </TouchableOpacity>
            <Text style={{ color: "gray" }}>Remember for 30days</Text>

            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", paddingLeft: 120, color: "white" }}>Forgot password</Text>

            </TouchableOpacity>

          </View>


          <View style={styles.wrapper}>

            <TouchableOpacity>

              <LinearGradient
                colors={["#A03232", "#a21caf"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>


            </TouchableOpacity>


            <TouchableOpacity
              style={styles.button}>
              <Icons.Google />
              <Text style={styles.buttonText}>Log in with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Icons.Facebook />
              <Text style={styles.buttonText}>Log in with Facebook </Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.textwrapper}>
          <Link href="/register">
            <Text style={{ color: "gray" }}>Don't have an account?</Text>
            <Text style={{ fontWeight: "bold", color: "white" }}>Sign Up</Text>
          </Link>
        </View>

      </ScrollView>

    </SafeAreaView >
  );

}

const styles = StyleSheet.create({

  key: {
    flex: 1
  },

  LoginIcon: {
    flexDirection: "row",
  },

  sunicon: {
    top: 5,
    paddingLeft: 40,
  },

  container: {
    backgroundColor: "#0a0a0a",
    justifyContent: "space-between",
    flex: 1,
  },

  main: {
    marginHorizontal: 16,
    marginTop: 40,
  },


  leading: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",


  },

  heading: {
    marginTop: 10,
    marginBottom: 50,
  },

  wrapper: {
    marginTop: 100,


  },

  form: {
    marginTop: 20,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },

  days: {
    flexDirection: "row",
    paddingLeft: 8,
    marginTop: 20
  },


  control: {
    marginVertical: 8,
  },

  iconLeft: {
    position: "absolute",
    bottom: 12,
    zIndex: 10,
    left: 10,
  },

  iconRight: {
    position: "absolute",
    bottom: 18,
    zIndex: 10,
    right: 10,
  },

  input: {
    backgroundColor: "#24292f",
    borderColor: "#424a53",
    fontWeight: "600",
    color: "#eaeef2",
    paddingVertical: 12,
    paddingRight: 12,
    paddingLeft: 40,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },

  subTitle: {

    color: "#6e7781",
    marginTop: 10,
    fontSize: 16,
  },

  buttonGradient: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 9,
    padding: 14,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#424a53",
    alignItems: "center",
    marginBottom: 14,
    borderRadius: 9,
    borderWidth: 1,
    padding: 12,
    gap: 10,

  },


  textwrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 120,
  },

  inputText: {
    color: "#f6f8fa",
    marginBottom: 4,
    fontSize: 14,
  },

});



