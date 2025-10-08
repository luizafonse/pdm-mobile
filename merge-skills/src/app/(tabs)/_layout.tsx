import { Tabs } from 'expo-router';
import Octicons from "@expo/vector-icons/Octicons"

export default function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home', tabBarInactiveTintColor: '#bdbdbd', tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />, headerShown: false }}/>
            <Tabs.Screen name="profile" options={{ title: 'Home', tabBarInactiveTintColor: '#bdbdbd', tabBarIcon: ({ color }) => <Octicons name="person" size={24} color={color} />, headerShown: false }}/>
        </Tabs>
    )
}