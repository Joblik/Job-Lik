import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Footer from "../Footer";


const CreatePost = ({ navigation }) => {
  const [title, setTitle] = useState("");
  
  

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>New Post</Text>
            <Text style={styles.base}>Title</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert The Title"
                style={styles.inputText}
              />
            </View>
            <Text style={styles.base}>Image</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert Your Image"
                style={styles.inputText}
              />
            </View>
            <Text style={styles.base}>Description</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert The Description"
                style={styles.inputText}
              />
            </View>
            <Text style={styles.base}>Adress</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert Your Adress"
                style={styles.inputText}
              />
            </View>

            <TouchableOpacity style={styles.postBtn}>
              <Text
                color="#000000"
                title="Post"
                style={styles.postText}
              >
                POST
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    padding: "35%",
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: "#fb5b5a",
    textAlign: "center",
    marginBottom: 18,
    
  },
  desc: {
    fontSize: 10,
    color: "white",
  },
  img: {
    width: 290,
    height: 450,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 0.5,
  },

  base: {
    color: "#ffffff",
    textShadowColor: "black",
    textShadowRadius: 5,
  },
  inputText: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  postBtn: {
    width: 90,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "93%",
  },
  postText: {
    color: "white",
  },
});

export default CreatePost;
