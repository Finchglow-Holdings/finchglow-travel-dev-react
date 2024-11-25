// server/index.js
import "ignore-styles";

import { register } from "@babel/register";
register({
  extensions: [".js", ".jsx"],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

import "./server";
