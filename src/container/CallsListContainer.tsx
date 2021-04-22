import React, { useEffect } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Avatar, Divider, List, ProgressBar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Call } from "../models/call";
import { getCalls } from "../redux/modules/communication/actions";
import {
  getCallsSelector,
  getIsLoadingCalls,
} from "../redux/modules/communication/selectors";
import { CallType, StreamType } from "../utils/enums";
import { kebabCase } from "lodash";
import { Colors } from "../utils/colors";
import FABComponent from "../components/FABComponent";

const CallsListContainer = () => {
  const dispatch = useDispatch();
  const calls = useSelector(getCallsSelector);
  const isLoading = useSelector(getIsLoadingCalls);

  useEffect(() => {
    dispatch(getCalls());
  }, [dispatch]);

  const handlePress = (chat: Call) => {};

  const buildLeadingColor = (type: CallType): string => {
    if (type === CallType.callMissed) {
      return Colors.red;
    }

    return Colors.green;
  };

  if (isLoading) return <ProgressBar />;

  return (
    <View>
      <ScrollView>
        {calls.map((call: Call, index) => {
          const { id, person } = call.communication;

          return (
            <View key={id}>
              {index !== 0 && <Divider />}
              <List.Item
                style={styles.item}
                title={`${person.first_name} ${person.last_name}`}
                titleStyle={styles.title}
                description={() => (
                  <View style={styles.description}>
                    <List.Icon
                      icon={kebabCase(CallType[call.call_type])}
                      color={buildLeadingColor(call.call_type)}
                    />
                    <Text style={styles.trailing}>{call.formatDate()}</Text>
                  </View>
                )}
                descriptionStyle={styles.description}
                descriptionNumberOfLines={1}
                left={() => (
                  <Avatar.Image
                    style={styles.avatar}
                    source={{ uri: person.avatar }}
                  />
                )}
                right={() => (
                  <List.Icon
                    style={styles.trailing}
                    icon={StreamType[call.stream_type].toString()}
                  />
                )}
                onPress={() => handlePress(call)}
              />
            </View>
          );
        })}
      </ScrollView>
      <FABComponent
        icon="phone-plus"
        onPress={() => console.log("FAB pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  item: { backgroundColor: Colors.white },
  description: { flexDirection: "row" },
  avatar: { margin: 5, alignSelf: "center" },
  trailing: {
    alignSelf: "center",
  },
});

export default CallsListContainer;
