import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Feather, Menu, Stethoscope, Mic, Search } from 'lucide-react-native';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="bg-sky-700 p-8 pt-10 pb-10 h-[40vh]">
          <TouchableOpacity>
          <Menu name="menu" size={28} color="#ffffff" />
          </TouchableOpacity>
          <View className="justify-between items-center mt-4">
            <TouchableOpacity className="w-[75px] h-[75px] rounded-full justify-center items-center bg-white">
              <Feather name="user" size={36} color="#0056D2" />
            </TouchableOpacity>
          </View>
          <View className="mt-6 flex-col justify-between items-center mb-5">
            <View>
              <Text className="text-4xl text-center font-nbold text-white">Hi, Riya</Text>
              <Text className="text-2xl font-nbold text-white mt-1">How are you Feeling Today?</Text>
            </View>
          </View>
        </View>

        {/* White Section */}
        <View className="bg-white rounded-[30px] p-3 flex-1 mt-[-30px]" >
          <Text className="text-2xl font-nbold text-sky-900 text-center mb-4 mt-2">Ask any medical or health question</Text>

          {/* Search Bar */}
          <TouchableOpacity>
            <View className="flex-row items-center bg-slate-200 rounded-full p-3 mb-5">
              <Mic name="mic" size={24} color="#0056D2" className="mr-4"/>
              <View className="flex-1">
                <Text className="text-lg font-nregular text-slate-600">How to Lose Weight?</Text>
              </View>
              <Search name="search" size={24} color="#0056D2" />
            </View>
          </TouchableOpacity>
          

          <View className="bg-slate-200 rounded-xl p-4 flex-row justify-between items-center mb-5 mt-4">
            <View>
              <Text className="text-xl font-nbold mb-3">Symptoms or medical issues?</Text>
              <TouchableOpacity className=" bg-sky-500 rounded-full p-3 items-center mb-2 mr-10">
                <Text className="text-white font-nbold ">Start free diagnosis →</Text>
              </TouchableOpacity>
              <Text className="text-slate-500 text-xs font-nregular">TAKES 3-5 MINS</Text>
            </View>
            <Stethoscope name="stethoscope" size={50} color="#0056D2" />
          </View>

          {/* Consult Doctor Card
          <View style={styles.consultCard}>
            <Text className="text-xl font-nbold mb-3">Consult a Doctor</Text>
            <View style={styles.consultInfo}>
              <Feather name="zap" size={16} color="#0056D2" />
              <Text style={styles.consultText}>Prescription under 10 mins</Text>
            </View>
            <View style={styles.consultInfo}>
              <Feather name="star" size={16} color="#0056D2" />
              <Text style={styles.consultText}>Top 1% doctors in India</Text>
            </View>
            <View style={styles.doctorAvatars}>
              <Image
                style={styles.avatar}
                source={{ uri: "https://via.placeholder.com/40" }}
              />
              <Image
                style={[styles.avatar, styles.avatarOverlap]}
                source={{ uri: "https://via.placeholder.com/40" }}
              />
            </View>
          </View> */}
          {/* Footer */}
        <View className="flex-col justify-between ml-4 mb-3">
          <Text className=" mt-14 text-slate-400 font-nextrabold text-3xl">Stay healthy with</Text>
          <View className="flex-row items-center">
            <Image className="w-[94px] h-[59px]" source={require('../assets/images/FooterIMG.png')} />
            <Text className=" text-slate-400 font-nregular text-3xl"> Healthify</Text>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   consultCard: {
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//     padding: 20,
//   },
//   consultTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   consultInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   consultText: {
//     marginLeft: 5,
//   },
//   doctorAvatars: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   avatarOverlap: {
//     marginLeft: -15,
//   },
// });

export default App;