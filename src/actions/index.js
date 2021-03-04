import { SAVE_COMMENT } from "actions/types";

export const savecomment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};
