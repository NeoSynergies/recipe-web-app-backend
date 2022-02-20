export const withId = (id:string, obj:any) => Object.assign(obj, {
  id: id
});

export const db:{
  [entity:string]: any
} = {
  recipes: {
    'da0dda0a-9f90-4431-a386-e26ade9766f0': {
      id: 'da0dda0a-9f90-4431-a386-e26ade9766f0',
      title: 'Smoked mackerel & leek hash with horseradish',
      imageUrl: '/assets/dummy.jpg',
      steps: ['Put the potatoes in a microwaveable bowl with a splash of water, cover, then cook on high for 5 mins until tender (or steam or simmer them).',
        'Meanwhile, heat the oil in a frying pan over a medium heat, add the leeks with a pinch of salt and cook for 10 mins, stirring so they don’t stick, until softened. Tip in the potatoes, turn up the heat and fry for a couple of mins to crisp them up a bit. Flake through the mackerel.',
        'Make four indents in the leek mixture in the pan, crack an egg into each, season, then cover the pan and cook for 6-8 mins until the whites have set and the yolks are runny. Serve the horseradish on the side, with the pan in the middle of the table.'],
      ingredients: [{
        label: 'New potatos, halved',
        unit: 'g',
        amount: 250
      },{
        label: 'Olive oil',
        unit: 'tablespoon',
        amount: 2
      },{
        label: 'Leek',
        unit: '',
        amount: 2
      },{
        label: 'Chicken egg',
        unit: '',
        amount: 4
      },{
        label: 'Peppered smoked mackerel',
        hint: 'skin removed',
        unit: 'g',
        amount: 100
      },{
        label: 'Creamed horseradish',
        unit: 'tablespoon',
        amount: 10
      }]
    },
    '195070ef-fcf5-45fc-9bb5-390e6e1edd0f': {
      id: '195070ef-fcf5-45fc-9bb5-390e6e1edd0f',
      title: 'A beetroot, hummus & crispy chickpea sandwich with a knife alongside Beetroot, hummus & crispy chickpea sub sandwich',
      imageUrl: '/assets/sandwich.jpg',
      steps: ['Blitz the whole beetroot, ¾ of the chickpeas, 2 tbsp pesto and 1 tbsp oil in a food processor with some seasoning until you have a thick, smooth hummus. Heat the ciabatta following the pack instructions.', 'Fry the remaining chickpeas in a little oil until crisp, then set aside. Toss the salad leaves with the remaining pesto and a splash of vinegar. Slice the rolls, then assemble the sandwiches with the hummus, beetroot slices, salad leaves and fried chickpeas.'],
      ingredients: [{
        amount: 300,
        unit: 'g',
        label: 'pack cooked beetroot in water, drained, half sliced'
      },{
        amount: 400,
        unit: 'g',
        label: 'can chickpeas, drained'
      },{
        amount: 3,
        unit: 'tablespoon',
        label: 'Olive oil',
      },{
        amount: 1,
        unit: 'splash',
        label: 'vinegar',
        hint: 'white wine vinegar if you have it' 
      },{
        amount: 2,
        unit: '',
        label: 'ciabatta rolls',
        hint: 'sliced in half'
      },{
        amount: 1,
        unit: '',
        label: 'mixed rocket, watercress & spinach salad'
      }]
    }
  },
  users: {
    'aijsndiusad': {
      id: 'aijsndiusad',
      name: 'quetal'
    }
  },
  ingredients: {
    'aijsndiusad': {
      id: 'aijsndiusad',
      ingredients: [{"label":"Olive oil","unit":"tablespoon","amount":2,"id":"vlzwjayr6l","category":"ingredients"}]
    },
  }
};
