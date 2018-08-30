
const getFirstSelector = selector => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector('#nested .target')
}

const increaseRankBy = n => {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++ ) {
    rankedLists[i].innerHTML = (i + 1).toString()
  }
}

const deepestChild = (el) =>{
  el = el || document.querySelector('#grand-node')

  if (el.children.length > 0) {
    return deepestChild(el.children[0])
  } else {
    return el;
  }
}

// const deepestChild = () =>{
//   let el = document.querySelector('#grand-node')
//   while (el.children.length > 0) {
//     el = el.children[0]
//   }
//   return el;
// }
