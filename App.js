// In App.js in a new project

import * as React from 'react';
import { View, Text, Button} from 'react-native';
import {NavContainer} from "./src/services/navigation";

function App() {
  return (
    <NavContainer/>
  );
}

export {App};