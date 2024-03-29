import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <Root />
    </Fragment>
  );
}
