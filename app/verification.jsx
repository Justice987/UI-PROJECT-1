import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from 'expo-router';

export default function Page() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <View>

        <View style={styles.heading}>
          <Text style={styles.leading}> Check your email✨</Text>
          <Text style={styles.subTitle}> We sent a verification link to sara@cruz.com</Text>
        </View>

        <View style={styles.inputfield} >
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}
          />

        </View>

        <TouchableOpacity>

          <LinearGradient
            colors={["#A03232", "#a21caf"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Verify email</Text>
          </LinearGradient>


        </TouchableOpacity>


        <View style={styles.textwrapper}>
          <Text style={{ color: "gray", fontSize: 16 }}>Didn't recieve the email?</Text>

          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "white", paddingLeft: 10, fontSize: 16 }}>Click to resend</Text>
          </TouchableOpacity>

        </View>

      </View>


      <View style={styles.smallTest}>
        <Icon name="arrow-back" size={20} color="#8c959f" style={styles.icon} />

        <Link href="/">
          <Text style={{ color: "white", fontSize: 16, paddingLeft: 5 }}>Back to log in</Text>
        </Link>

      </View>


    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a0a0a",
    justifyContent: "space-between",
    flex: 1,
  },

  heading: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
  },

  leading: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },

  subTitle: {
    color: "#6e7781",
    marginTop: 10,
    fontSize: 16,
  },

  inputfield: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 16,
  },


  input: {
    backgroundColor: "#24292f",
    borderColor: "#424a53",
    fontWeight: "600",
    color: "#eaeef2",
    paddingVertical: 12,
    paddingRight: 12,
    paddingLeft: 20,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 20,
  },

  buttonGradient: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 9,
    padding: 14,
    marginTop: 40,
    marginHorizontal: 10,
  },

  textwrapper: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center"
  },

  buttonText: {
    fontSize: 18,
    color: "white",
  },

  smallTest: {
    justifyContent: "center",
    marginBottom: 400,
    flexDirection: "row"
  },

});
