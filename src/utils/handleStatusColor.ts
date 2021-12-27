const handleStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#009944";
      case "In progress":
        return "#e69138";
      case "Cancelled":
        return "#cf000f";
        case "Waiting":
        return "#23527C";
      default:
        return "gray";
    }
  };
export default handleStatusColor