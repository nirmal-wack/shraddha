import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { IonIcon } from "../../components/Icons"; // Ensure you have IonIcon imported properly

const Profile= () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <IonIcon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=10", // Replace with your profile picture URL
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <IonIcon name="pencil" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.profileName}>Jenna Djsokivich</Text>
        <Text style={styles.phoneNumber}>+9123345456</Text>
      </View>

      {/* Account Overview Section */}
      <ScrollView style={styles.accountOverview}>
        <TouchableOpacity style={styles.option}>
          <IonIcon name="person-circle-outline" size={24} color="#3EB57C" />
          <Text style={styles.optionText}>My Profile</Text>
          <IonIcon name="chevron-forward-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <IonIcon name="cart-outline" size={24} color="#3EB57C" />
          <Text style={styles.optionText}>My Orders</Text>
          <IonIcon name="chevron-forward-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <IonIcon name="cash-outline" size={24} color="#3EB57C" />
          <Text style={styles.optionText}>Refund</Text>
          <IonIcon name="chevron-forward-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <IonIcon name="lock-closed-outline" size={24} color="#3EB57C" />
          <Text style={styles.optionText}>Change Password</Text>
          <IonIcon name="chevron-forward-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <IonIcon name="language-outline" size={24} color="#3EB57C" />
          <Text style={styles.optionText}>Change Language</Text>
          <IonIcon name="chevron-forward-outline" size={20} color="#ccc" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3EB57C",
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#3EB57C",
  },
  menuIcon: {
    marginRight: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#3EB57C",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  editIcon: {
    position: "absolute",
    top: 90,
    right: 140,
    backgroundColor: "#FF9800",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  phoneNumber: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
  accountOverview: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionIcons : {
    backgroundColor : '#000',
  },
  optionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#3E3E3E",
  },
});

export default Profile;
