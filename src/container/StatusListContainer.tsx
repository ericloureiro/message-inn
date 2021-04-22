import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Divider, List, ProgressBar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import FABComponent from "../components/FABComponent";
import { Status } from "../models/status";
import { getUser } from "../redux/modules/auth/actions";
import { getStatus } from "../redux/modules/communication/actions";
import { getUserSelector } from "../redux/modules/auth/selectors";
import {
  getIsLoadingStatus,
  getStorySelector,
} from "../redux/modules/communication/selectors";
import { Colors } from "../utils/colors";

const theme = { colors: { primary: "#000" } };

const StatusListContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const me = useSelector(getUserSelector);
  const { recent, seen, silent } = useSelector(getStorySelector);
  const isLoading = useSelector(getIsLoadingStatus);
  const [recentExpanded, setRecentExpanded] = useState(true);
  const [seenExpanded, setSeenExpanded] = useState(true);
  const [silentExpanded, setSilentExpanded] = useState(false);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getStatus());
  }, [dispatch]);

  const handlePress = (status: Status) => {};

  const handleRecentPress = () => setRecentExpanded(!recentExpanded);

  const handleSeenPress = () => setSeenExpanded(!seenExpanded);

  const handleSilentPress = () => setSilentExpanded(!silentExpanded);

  const buildStory = (status: Status, index: number) => {
    const { id, person } = status.communication;

    return (
      <View key={id}>
        {index !== 0 && <Divider />}
        <List.Item
          style={styles.item}
          title={`${person.first_name} ${person.last_name}`}
          description={status.formatDate()}
          descriptionStyle={styles.description}
          descriptionNumberOfLines={1}
          left={() => (
            <Avatar.Image
              style={styles.avatar}
              source={{ uri: person.avatar }}
            />
          )}
          onPress={() => handlePress(status)}
        />
      </View>
    );
  };

  if (isLoading) return <ProgressBar />;

  return (
    <View>
      <ScrollView>
        <List.Item
          style={styles.item}
          title={t("status:title")}
          description={t("status:description")}
          right={() => (
            <List.Icon
              style={styles.trailing}
              icon="plus"
              color={Colors.blue}
            />
          )}
          left={() => (
            <Avatar.Image style={styles.avatar} source={{ uri: me.avatar }} />
          )}
          onPress={() => {}}
        />
        <Divider />
        {recent.length !== 0 && (
          <List.Accordion
            theme={theme}
            title={t("status:recent")}
            expanded={recentExpanded}
            onPress={handleRecentPress}
          >
            {recent.map(buildStory)}
          </List.Accordion>
        )}
        {seen.length !== 0 && (
          <List.Accordion
            theme={theme}
            title={t("status:seen")}
            expanded={seenExpanded}
            onPress={handleSeenPress}
          >
            {seen.map(buildStory)}
          </List.Accordion>
        )}
        {silent.length !== 0 && (
          <List.Accordion
            theme={theme}
            title={t("status:silent")}
            expanded={silentExpanded}
            onPress={handleSilentPress}
          >
            {silent.map(buildStory)}
          </List.Accordion>
        )}
      </ScrollView>
      <FABComponent icon="camera" onPress={() => console.log("FAB pressed")} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: { backgroundColor: Colors.white },
  description: { flexDirection: "row" },
  avatar: { margin: 5, alignSelf: "center" },
  trailing: {
    alignSelf: "center",
  },
});

export default StatusListContainer;
