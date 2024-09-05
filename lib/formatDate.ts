export function getFormatedDate (startDate: string) {
    const date = new Date(startDate);

    // Format the date using `toLocaleDateString`
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    

    return formattedDate;
}