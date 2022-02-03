const food = {
    "BreadOmlette": {
      "bread": 2,
      "eggs": 3,
      "onion": 2,
      "tomato": 2,
      "salt": 0.5
    },
    "Cake": {
      "eggs": 2,
      "flour": 1,
      "butter": 2,
      "sugar": 4
    },
    "FrenchToast": {
      "eggs": 3,
      "salt": 1,
      "milk": 1,
      "bread": 4,
      "flour": 1,
      "sugar": 4,
      "butter": 1
    },
    "Pudding": {
      "milk": 3,
      "flour": 5,
      "sugar": 4
    },
    "Sandwich": {
      "onion": 3,
      "tomato": 2,
      "lettuce": 3,
      "bread": 2
    }
  }
  
const cart_items = {}

Object.values(food).map((reciepe) => {
    for(item in reciepe) {
        Object.keys(cart_items).includes(item)  ?
            cart_items[item] = cart_items[item] + reciepe[item]
        :
            cart_items[item] = reciepe[item]
    }
})

console.log("cart", cart_items)