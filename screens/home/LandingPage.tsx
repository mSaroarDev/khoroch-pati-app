import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';
import logo from "@/assets/images/brand.png";
import { AppText } from "@/components/AppText";
import { FONTS } from "@/configs/fonts";
import image1 from "@/assets/images/vector-1.svg";
import { colors, paddingHorizontal } from "@/constants/styles";
import Feather from '@expo/vector-icons/Feather';

const LandingPage = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Image
              source={logo}
              style={{ width: 200, height: 150, marginTop: -20 }}
              contentFit="contain"
            />
          </View>

          <View>
            <Image
              source={image1}
              style={{ width: 250, height: 250 }}
              contentFit="contain"
            />
          </View>
          <View>
            <AppText style={styles.welcomeText}>
              আপনার <AppText style={styles.brandText}>দৈনন্দিন হিসাব</AppText>
            </AppText>
            <AppText style={styles.welcomeText2}>
              সমস্ত আয়-ব্যায়, ধার-বাকির হিসাব নিকাশ হোক স্বচ্ছ ও গোছানো
            </AppText>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => router.navigate("/(screens)/login")}
              style={styles.getStartButton}
            >
              <AppText style={styles.buttonText}>শুরু করুন</AppText>
              <Feather name="arrow-right" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
  },
  welcomeText: {
    fontSize: 32,
    color: "#000",
    textAlign: "center",
    fontFamily: FONTS.Bold
  },
  welcomeText2: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    fontFamily: FONTS.Regular
  },
  buttonContainer: {
    marginBottom: 30,
    width: "100%"
  },
  getStartButton: {
    backgroundColor: colors.mainColor,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: paddingHorizontal,
    display: "flex",
    flexDirection: "row",
    gap: 10
  },
  buttonText: {
    color: "#fff",
    fontFamily: FONTS.SemiBold
  },
  brandText: {
    color: colors.mainColor,
    fontSize: 32,
    fontFamily: FONTS.Bold
  }
});


export default LandingPage;