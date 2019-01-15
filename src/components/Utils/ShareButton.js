import React, { Component} from 'react';
import { FacebookShareButton } from "react-simple-share";

export default class ShareButton extends Component {
  render() {
    return (
       <FacebookShareButton
        url="https://www.b4l.cz/images/informace/Parking.jpg"
       size="40px"/>)
  }
}