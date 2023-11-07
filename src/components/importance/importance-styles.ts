import { css } from "lit";

export const styles = css`
    /* Default styles for the selector */
    .custom-selector select {
        width: 150px;
        padding: 5px;
    }

    /* Color Scheme Pro styles */
    .custom-selector.scheme-pro sl-select sl-option{
        color: #FFFFFF;
        border: 2px solid #11f109d5;
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


    /* Color Scheme Con styles */
    .custom-selector.scheme-con sl-select sl-option{
        color: #FFFFFF;
        border: 2px solid #f3082bd6;
        //border: 2px solid purple
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
