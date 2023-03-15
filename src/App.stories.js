import React from 'react';

import App from "./App";

export default {
  title: "App",
  component: App,
};

export const Default = Template.bind({});
Default.args = {
  thanksMessage: false,
};
