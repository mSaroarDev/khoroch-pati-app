import { AppText } from "@/components/AppText";
import { FONTS } from "@/configs/fonts";
import { colors } from "@/constants/styles";
import { AntDesign, Feather } from '@expo/vector-icons';
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LoginMain = () => {

  return (
    <>
    <StatusBar style="auto" backgroundColor={colors.mainColor} />
      <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>সাইন ইন </Text>
          <AppText style={styles.subtitle}>
            লরিম ইপসাম হল simply dummy টেক্সট অফ দ্য প্রিন্টিং এবং টাইপসেটিং ইন্ডাস্ট্রি
          </AppText>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => console.log("Continue with Google pressed")}
          >
            <AntDesign name="google" size={24} color="#EA4335" />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
            <Feather name="arrow-right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB300',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  topSection: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  registerText: {
    fontSize: 16,
    color: 'black',
    fontFamily: FONTS.SemiBold,
  },
  title: {
    fontSize: 32,
    color: 'black',
    marginBottom: 10,
    fontFamily: FONTS.Bold,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.7)',
    lineHeight: 20,
    fontFamily: FONTS.Regular,
  },
  bottomSection: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 60,
    alignItems: 'center',
    height: "auto"
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  googleButtonText: {
    fontSize: 16,
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.Medium,
  }
});

export default LoginMain;
