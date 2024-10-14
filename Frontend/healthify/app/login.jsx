import { Link,useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    // Implement login logic here
    const CorrectU = "riyaTorgal"
    const CorrectP = "riya123"
    console.log('Login attempted with:', username, password);
    if (username === CorrectU && password === CorrectP){
      try{
        await AsyncStorage.setItem('isLoggedIn', 'true');
        router.replace('/home');
      }
      catch (error){
        console.error('Error saving the login state', error);
        Alert.alert("Error", "Failed to save the Login state")
      }
    }
    else{
      Alert.alert("Login Failed", "Incorrect Username or Password")
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-sky-950 p-5">
      <View className="bg-white p-5 rounded-3xl">
        <View className="items-center mb-[30px]">
          <Image
            source={require('../assets/images/FaviconRB1.png')} // Replace with your actual logo path
            className="w-[110px] h-[110px]"
            resizeMode="contain"
          />
          <Text className=" text-slate-900 font-nbold text-3xl">Healthify</Text>
        </View>
        <Text className=" text-black font-nbold text-center text-2xl mb-2">Login</Text>
        <Text className=" text-slate-500 font-nregular text-lg text-center mb-3">Please enter your credentials to access your account</Text>
        <TextInput
          className="min-w-full font-nlight text-slate-600 h-[50px] rounded-md border p-2 border-slate-300"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          className="min-w-full  font-nlight text-slate-600 mt-3 h-[50px] rounded-md border p-2 border-slate-300"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        {/* Show Password Checkbox */}
        <View className="flex-row items-center mt-3">
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="mr-2 w-6 h-6 justify-center items-center rounded border border-slate-400"
          >
            {showPassword && <Text className="text-sky-950">✓</Text>}
          </TouchableOpacity>
          <Text className="text-slate-500 font-nregular text-lg">Show Password</Text>
        </View>
        <TouchableOpacity 
        className="min-w-full bg-sky-950 h-[50px] justify-center items-center mt-6 rounded-lg"
        onPress={handleLogin}>
          <Text className="text-white font-nbold text-lg">Log In</Text>
        </TouchableOpacity>
        <Link className="mt-4" href="/signin">
          <Text className="text-lg font-nregular text-slate-500">Dont have an account? </Text>
          <Text className="text-lg ml-1 font-nregular text-sky-950">Sign in</Text>
        </Link>
        </View>
    </View>
  );
};

export default LoginScreen;