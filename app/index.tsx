import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';
// import logo from "@/assets/images/brand.png";
import { AppText } from "@/components/AppText";
import { FONTS } from "@/configs/fonts";
// import image1 from "@/assets/images/vector-1.svg";
import { colors, paddingHorizontal } from "@/constants/styles";
import Feather from '@expo/vector-icons/Feather';

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}>
        <View style={styles.glowTop} />
        <View style={styles.glowBottom} />
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <Image source={logo} style={styles.logo} contentFit="contain" /> */}
        </View>

        <View style={styles.heroCard}>
          {/* <Image source={image1} style={styles.heroImage} contentFit="contain" /> */}
        </View>

        <View style={styles.copy}>
          <AppText style={styles.welcomeText}>
            আপনার <AppText style={styles.brandText}>দৈনন্দিন হিসাব</AppText>
          </AppText>
          <AppText style={styles.welcomeText2}>
            সমস্ত আয়-ব্যায়, ধার-বাকির হিসাব নিকাশ হোক স্বচ্ছ ও গোছানো
          </AppText>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => router.push("/login")}
            style={styles.getStartButton}
          >
            <AppText style={styles.buttonText}>শুরু করুন</AppText>
            <Feather name="arrow-right" size={20} color="#fff" />
          </Pressable>
          <View style={styles.subtlePill} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  glowTop: {
    position: "absolute",
    top: -120,
    right: -80,
    width: 240,
    height: 240,
    backgroundColor: "rgba(16, 185, 129, 0.18)",
    borderRadius: 999,
  },
  glowBottom: {
    position: "absolute",
    bottom: -140,
    left: -90,
    width: 260,
    height: 260,
    backgroundColor: "rgba(59, 130, 246, 0.12)",
    borderRadius: 999,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 170,
    height: 110,
  },
  heroCard: {
    width: "100%",
    alignItems: "center",
    borderRadius: 24,
    paddingVertical: 18,
  },
  heroImage: {
    width: 240,
    height: 220,
  },
  copy: {
    width: "100%",
    gap: 10,
  },
  welcomeText: {
    fontSize: 30,
    color: "#0F172A",
    textAlign: "center",
    fontFamily: FONTS.Bold,
    lineHeight: 38,
  },
  welcomeText2: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    fontFamily: FONTS.Regular,
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  getStartButton: {
    backgroundColor: colors.mainColor,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    shadowColor: colors.mainColor,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontFamily: FONTS.SemiBold,
    fontSize: 16,
  },
  brandText: {
    color: colors.mainColor,
    fontSize: 30,
    fontFamily: FONTS.Bold,
  },
  subtlePill: {
    alignSelf: "center",
    width: 120,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#E2E8F0",
  },
});


export default LandingPage;
