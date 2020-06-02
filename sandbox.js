const list = document.querySelector('ul');

const addRecipe = (recipe) => {
  let html = `
  <li>
  <div>${recipe.title}</div>
  </li>
  `;

  list.innerHTML += html;
};

db.collection('recipes')
  .get()
  .then((snapshot) => {
    //when we have the data
    snapshot.docs.forEach((doc) => {
      addRecipe(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });
