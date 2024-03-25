import React, { useState } from 'react'
import { Button, TextInput , Text  } from 'react-native'
import SignUp from './SignUp';

const WelcomePage = ({ setIsLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
   
    const handleLogIn = () => {
        setIsLoggedIn(true)
    }

    const handleSignUp = () => {
        setIsSignUp(true)
    }
    

    if (!isSignUp) {
        return  (
            <>
            <Text>Touch Grass</Text>
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
              <Button title={"Log in"} onPress={handleLogIn} />
              <Button title={"SignUp"} onPress={handleSignUp} />  
      
            </>
          )
    }

    return(
    <SignUp setIsLoggedIn={setIsLoggedIn} />
    )
  
   
  
  
  
}

export default WelcomePage
