const linkedIn = require("./index");

const queryOptions = {
  keyword: "Senior Software Engineer",
  location: "United States",
  dateSincePosted: "past Week",
  jobType: "full time",
  remoteFilter: "remote",
  salary: "100000",
  experienceLevel: "senior",
  limit: "3",
  sortBy: "recent",
  page: "1",
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // An array of Job objects
});
