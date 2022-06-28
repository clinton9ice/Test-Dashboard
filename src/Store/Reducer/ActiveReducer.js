export const activeReducer = (state, action) => {
  switch (action.type) {
    case "LAST_HOUR":
      return { isActive: "Last hour" };
    case "TODAY":
      return { isActive: "Today" };
    case "YESTERDAY":
      return { isActive: "Yesterday" };
    case "LAST":
      return { isActive: "Last" };
    default:
      return state;
  }
};
export const activeState = { isActive: "Yesterday" };
