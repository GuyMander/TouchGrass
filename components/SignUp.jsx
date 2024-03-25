import {React ,useState} from 'react'
import { View, Text, TextInput , Button } from 'react-native'

const SignUp =({setIsLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleAccountCreation = () => {
        /**
         * 
         * check database if the username is not the same 
         * use jwt to create username and hash password
         * then use jwt to get the auth token back
         * set isloggedin to auth token 
         * 
         */
        setIsLoggedIn(true)
        
    }
  

  return (
    <View>
    <Text>Sign Up</Text>
      <TextInput  
        value={username}
        placeholder={"User name"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />


      <Button title={"Sign up"} onPress={handleAccountCreation} />
      <Button title={"Cancel"} onPress={() => {}} />
    </View>
  )
}

export default SignUp
