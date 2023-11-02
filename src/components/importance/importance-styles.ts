import { css } from "lit";

export const styles = css`
    /* Default styles for the dropdown */
    .custom-selector select {
        width: 150px;
        padding: 5px;
    }

    /* Color Scheme Pro styles */
    .custom-selector.scheme-pro sl-select sl-option {
        background-color: #FF5733;
        color: #FFFFFF;
        border: 2px solid red;
    }

    .custom-selector.scheme-pro sl-select sl-option:hover {
        background-color: #FF5733;
        color: #FFFFFF;
        border: 2px solid purple;
    }

    /* Color Scheme Con styles */
    .custom-selector.scheme-con sl-select {
        background-color: #3498DB;
        color: #FFFFFF;
    }

    .custom-selector.scheme-con {
        background-color: #3498DB;
        color: #FFFFFF;
    }
`;
