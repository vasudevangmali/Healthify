import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { MessageCircle, FilePlus, UsersRound } from 'lucide-react-native';

const TabIcon = ({ icon: Icon, color, name }) => {
  return (
    <View className="items-center justify-center">
      <Icon size={24} color={color} />
      <Text style={{ color, fontSize: 12 }}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 75,
          },
        }}
      >
        <Tabs.Screen 
          name='chat'
          options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={MessageCircle}
                color={focused ? "#161622" : "#9CA3AF"}
                name="Chat"
              />
            ),
          }}
        />
        <Tabs.Screen 
          name='files'
          options={{
            title: "Files",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={FilePlus}
                color={focused ? "#161622" : "#9CA3AF"}
                name="Files"
              />
            ),
          }}
        />
        <Tabs.Screen 
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={UsersRound}
                color={focused ? "#161622" : "#9CA3AF"}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout