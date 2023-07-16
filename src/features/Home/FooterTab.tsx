import { StyleSheet } from "react-native";
import { CButton, Footer } from "../../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SECONDARY_THEME } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationScreenProps } from "../../../App";

const FooterTab = () => {
  const navigation = useNavigation<NavigationScreenProps>();
  return (
    <Footer
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <CButton
        style={{
          button: style.tab$$button,
        }}
      >
        <Ionicons
          name="home-outline"
          size={30}
          color={SECONDARY_THEME}
        />
      </CButton>
      <CButton
        onPress={() => navigation.navigate("Favourite")}
        style={{
          button: style.tab$$button,
        }}
      >
        <Ionicons
          name="heart-outline"
          size={30}
          color={SECONDARY_THEME}
        />
      </CButton>
      <CButton
        onPress={() => navigation.navigate("Profile")}
        style={{
          button: style.tab$$button,
        }}
      >
        <Ionicons
          name="person-outline"
          size={30}
          color={SECONDARY_THEME}
        />
      </CButton>
    </Footer>
  );
};

const style = StyleSheet.create({
  tab$$button: {},
});

export default FooterTab;
