import { css } from "lit";

export const styles = css`

    .selector-container {
        display: flex;
        width: 360px;
    }

    /* Default styles for the selector */
    .custom-selector sl-option {
        padding: 5px;
    }

    /* Hover state Pro styles */
    .custom-selector.scheme-pro sl-option::part(base):hover {
        background-color:  #11f1097c;
        color: #FFFFFF;
        //border: 2px solid purple;
    }

    /* Focus state Pro styles */
    .custom-selector.scheme-pro sl-option:focus-within::part(base) {
        background-color: #11f1097c;
        color: #FFFFFF;
        //border: 2px solid purple;
    }

    /* Hover state Con styles */
    .custom-selector.scheme-con sl-option::part(base):hover {
        background-color: #f3082b8a;
        color: #FFFFFF;
        //border: 2px solid purple;
    }

    /* Focus state Con styles */
    .custom-selector.scheme-con sl-option:focus-within::part(base) {
        background-color: #f3082b8a;
        color: #FFFFFF;
        //border: 2px solid purple;
    }
`;
