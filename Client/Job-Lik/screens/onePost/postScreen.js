import React from 'react'
import { View , Text , StyleSheet , ImageBackground, Button} from 'react-native'

import Footer from '../Footer'


const PostScreen = (props) => {
    console.log(props)
    return (
        <View>
            <ImageBackground
        source={{
          uri: 
'https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png',
        }}
        style={styles.img}>
            <Text style={styles.title}>hello</Text>
            <Text style={styles.desc}>hello</Text>
            <Text style={styles.base}>Located :</Text>
            <Text style={styles.base}>Reward : </Text>
            <Text style={styles.base}>Recruiter :</Text>
            <Button color="#000000" title='Apply'></Button>
        </ImageBackground>
            
            <Footer /> 
        </View>
    )
}

const styles = StyleSheet.create({
  
    title: { 
      fontSize: 40,
      color: 'white'
    },
    desc: {
        fontSize: 10,
        color: 'white'
    },
    img: {
     width: 290,
    height: 250,
    alignItems : 'center'
    },
    inbtn: {
        color: 'black'
    },
    base:{
        color: '#ffffff'
    }
  })

export default PostScreen;