// import React, { useState } from "react";
// import { View, TextInput, Button, Alert } from "react-native";
// import authService from "../services/authService";
// import { saveToken } from "../services/storage";

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const data = await authService.login(email, password);

//       // Save token
//       await saveToken(data.access);

//       Alert.alert("Success", "Login successful");
//     } catch (err) {
//       console.log(err);
//       Alert.alert("Error", err.message || "Login failed");
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ borderWidth: 1, marginBottom: 10 }}
//       />

//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={{ borderWidth: 1, marginBottom: 10 }}
//       />

//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }


// import React, { useState } from "react";
// import { View, TextInput, Button, Alert } from "react-native";
// import authService from "../services/authService";
// import { saveToken } from "../services/storage";

// export default function LoginScreen({ onLoginSuccess }) {  // ✅ RECEIVE PROP
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const data = await authService.login(email, password);

//       // Save token locally
//       await saveToken(data.access);

//       console.log("LOGIN SUCCESS:", data);

//       // 🔥 IMPORTANT → notify App.js
//       if (onLoginSuccess) {
//         onLoginSuccess(data);
//       }

//     } catch (err) {
//       console.log(err);
//       Alert.alert("Error", err.message || "Login failed");
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ borderWidth: 1, marginBottom: 10 }}
//       />

//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={{ borderWidth: 1, marginBottom: 10 }}
//       />

//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }