import { paddingHorizontal } from "@/constants/styles";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
    return (
        <>
          <View style={styles.container}>
            <View style={styles.headerWrapper}>
              <View>
                <View>
                  <Text>Dashboard</Text>
                </View>
              </View>
              <View></View>
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
    justifyContent: "center",
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal
  }
});

export default index;