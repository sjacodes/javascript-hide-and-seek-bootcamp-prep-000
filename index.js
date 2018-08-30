
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

const deepestChild = () => {
  let node = document.getElementById("grand-node")
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
