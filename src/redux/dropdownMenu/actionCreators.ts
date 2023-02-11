import dropdownMenuTypes from "./actionTypes";

export const toggleDropMenuHttpMethod = (status: boolean) => {
  return {
    type: dropdownMenuTypes.TOGGLE_DROP_HTTP_METHOD,
    payload: status,
  };
};
