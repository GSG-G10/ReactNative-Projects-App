const handleStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#009944";
      case "In progress":
        return "#e69138";
      case "Cancelled":
        return "#cf000f";
      default:
        return "gray";
    }
  };
export default handleStatusColor