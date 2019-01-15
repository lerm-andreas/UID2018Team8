import * as React from "react";
import {DropzoneComponent} from "react-dropzone-component";
import './filepicker.css';
import './dropzone.min.css';
import {Component} from "react";

class Uploader extends Component {
    // dropzone;

    uploaderPreviewTemplate = "<div class=\"dz-preview dz-image-preview\" style=\"min-height: 74px;\">\n" +
        "    <div class=\"dz-image\" style=\" height: 54px; width: 54px;\">\n" +
        "        <img data-dz-thumbnail/>\n" +
        "    </div>\n" +
        "    <div class=\"dz-details\"  style=\" height: 12px;\">\n" +
        "        <div class=\"dz-filename\">\n" +
        "            <span data-dz-name></span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"dz-progress\">\n" +
        "        <span class=\"dz-upload\" data-dz-uploadprogress=\"\"></span>\n" +
        "    </div>\n" +
        " <div class=\"dz-error-mark\">\n" +
        "       <span style=\"color: black; \">&#10004;</span>"+
        "      </div>" +
        " <div class=\"dz-message data-dz-message\">" +
        " <span>Your Custom Message</span> " +
        " </div>";


    constructor(props) {
        super(props);
    }

    initCallback(dropzone) {
        this.dropzone = dropzone;
    }

    render() {
        const componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif', '.pdf'],
            showFiletypeIcon: true,
            postUrl: '/hello'
        };
        const djsConfig = {
            addRemoveLinks: true,
            dictRemoveFile: 'Remove',
            clickable: true,
            previewTemplate: this.uploaderPreviewTemplate,
            parallelUploads: 3,
            maxFiles: 3
        };
        const eventHandlers = {
            init: (dropzone) => this.initCallback(dropzone),
        };
        return (
            <div onClick={this.props.onDrop}>
                <DropzoneComponent config={componentConfig} djsConfig={djsConfig} eventHandlers={eventHandlers}/>
            </div>
        )
    }
}

export default Uploader;