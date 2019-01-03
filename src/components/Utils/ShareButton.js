import React, { Component} from 'react';
import { FacebookShareButton } from "react-simple-share";

export default class ShareButton extends Component {
  render() {
    return (
       <FacebookShareButton
       url="google.com"
       size="40px"/>)
  }
}