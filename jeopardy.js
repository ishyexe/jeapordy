let NUM_CATEGORIES = [];

async function getCategoryIds() {
  let apiURL = "https://jservice.io/api/categories?count=100";
  await axios.get(apiURL);
  const randomIDs = randomCategoryID();
  const categories = response.data
    .map((result) => {
      return [result.id, result.title, result.clues_count];
    })
    .filter((result) => {
      return result[2] >= 5;
    });
}
const categoryIDs = randomIDs.map((index) => categories[index]);
NUM_CATEGORIES = [...categoryIDs];
NUM_CATEGORIES = NUM_CATEGORIES.map((arr) => arr[0]);
