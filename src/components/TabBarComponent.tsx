import React from "react";
import ChatsPage from "../routes/ChatsRoute";
import StatusPage from "../routes/StatusRoute";
import CallsPage from "../routes/CallsRoute";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTranslation } from "react-i18next";

const Tab = createMaterialTopTabNavigator();

const TabBarComponent = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen name={t("tab:chats")} component={ChatsPage} />
      <Tab.Screen name={t("tab:status")} component={StatusPage} />
      <Tab.Screen name={t("tab:calls")} component={CallsPage} />
    </Tab.Navigator>
  );
};

export default TabBarComponent;
