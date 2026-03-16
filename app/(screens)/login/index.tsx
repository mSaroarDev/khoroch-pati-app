import { AppText } from "@/components/AppText";
import { FONTS } from "@/configs/fonts";
import { colors } from "@/constants/styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import vector2 from "@/assets/images/vector-2.svg";
import logo from "@/assets/images/brand.png";

const LoginMain = () => {

  return (
    <>
      <StatusBar style="dark" backgroundColor="#F7F8FA" />
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.bubbleTop} />
          <View style={styles.bubbleBottom} />
        </View>
        {/* Top Section */}
        <View style={styles.topSection}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="arrow-left" size={22} color="#0F172A" />
            </TouchableOpacity>
            <Image source={logo} style={styles.logo} contentFit="contain" />
            <View style={styles.headerSpacer} />
          </View>
          <Image source={vector2} style={styles.vector} contentFit="contain" />
          <Text style={styles.title}>সাইন ইন</Text>
          <AppText style={styles.subtitle}>
            আপনার হিসাবের হিসাব, খরচের হিসাব, ধার-বাকির হিসাব, আয়-ব্যয়ের হিসাব, লেনদেনের হিসাব
          </AppText>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => console.log("Continue with Google pressed")}
          >
            <AntDesign name="google" size={22} color="#g" />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appleButton}
            onPress={() => console.log("Continue with Apple pressed")}
          >
            <AntDesign name="apple" size={24} color="white" />
            <Text style={styles.appleButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    alignItems: "center",
    justifyContent: "space-between",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  bubbleTop: {
    position: "absolute",
    top: -90,
    right: -60,
    width: 220,
    height: 220,
    backgroundColor: "rgba(16, 185, 129, 0.16)",
    borderRadius: 999,
  },
  bubbleBottom: {
    position: "absolute",
    bottom: 120,
    left: -80,
    width: 240,
    height: 240,
    backgroundColor: "rgba(59, 130, 246, 0.12)",
    borderRadius: 999,
  },
  topSection: {
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 28,
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "#0F172A",
    fontFamily: FONTS.Bold,
    textAlign: "center",
    marginTop: 50,
  },
  vector: {
    width: 220,
    height: 180,
    marginBottom: 8,
    marginTop: 50
  },
  logo: {
    width: 150,
    height: 50,
  },
  headerSpacer: {
    width: 40,
    height: 40,
  },
  bottomSection: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 48,
    alignItems: "center",
    gap: 12,
    shadowColor: "#0F172A",
    shadowOpacity: 0.05,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -6 },
    elevation: 3,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#0F172A",
    fontFamily: FONTS.Medium,
  },
  appleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#0F172A",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 10,
  },
  appleButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: FONTS.Medium,
  },
  subtitle: {
    fontSize: 16,
    color: "#0F172A",
    fontFamily: FONTS.Regular,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 5,
    paddingHorizontal: 20,
  }
});

export default LoginMain;
