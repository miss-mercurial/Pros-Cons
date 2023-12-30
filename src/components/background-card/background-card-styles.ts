import { css } from "lit";

export const styles = css`
    .center-container {
        display: flex;
        justify-content: center;
        padding-bottom: 40px;
        /*height: 100vh;  Adjust the height as needed */
    }

    .card-basic {
        --sl-panel-background-color: var(--sl-color-violet-300);
        min-width: fit-content;
    }
`;
