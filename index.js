function getFirstSelector(selector) {
  // const main = document.getElementsByTagName('main')[0]
  return document.querySelector(selector)
}

function nestedTarget() {
  // pulls .target out of #nestedTarget =id
  return document.querySelector('div.target')
}

function deepestChild() {
  // return array of all elements in grand-node?
  let parent = document.getElementById('grand-node')
  // set the first child = to the first element in the array
  let child = parent.children[0]

  // while child[0]
  while(child) {
    // store child[0] in parent
    parent = child
    // reassign child (child[0]) to the child of child[0]
    child = parent.children[0]
  }
  // return child[0] as per the tests
  return parent
}

function increaseRankBy(n) {
  // create an array of all elements with ranked-list class
  const rankedLists = document.querySelectorAll('.ranked-list')

  // iterate over that array for every child
  for (let i = 0; i < rankedLists.length; i++) {
    // get all of the children of the first ranked-list and store them
    let children = rankedLists[i].children
    // iterate over all of the children of this list
    for (let x = 0; x < children.length; x++) {
      // take this specific child's .innerHTML, parse it into an Int and add n
      children[x].innerHTML = parseInt(children[x].innerHTML) + n
    }
  }
}
