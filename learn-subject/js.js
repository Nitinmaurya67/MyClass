const colors = [

  "#80CBC4", // Teal
  "#FFAB40", // Orange

  "#B39DDB", // Lavender
  "#F8BBD0", // Light Pink
  "#A5D6A7", // Light Green
  "#64B5F6", // Light Blue
 
  "#90A4AE", // Gray Blue
  "#F0B3A4", // Soft Salmon


  "#FF6F61", // Soft Red
  "#4DB6AC", // Teal Green


];


const topics = document.querySelectorAll(".topic");

topics.forEach((topic, index) => {
  topic.style.backgroundColor = colors[index % colors.length];
});
