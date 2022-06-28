export const pillData = [
  {
    _id: 'all',
    value: 'All',
    variant: 'secondary',
    filterFn: (todos) => (todos ? [...todos] : [])
  },
  {
    _id: 'notCompleted',
    value: 'Not Completed',
    variant: 'warning',
    filterFn: (todos) => (todos ? todos.filter(({ complete }) => !complete) : [])
  },
  {
    _id: 'completed',
    value: 'Completed',
    variant: 'success',
    filterFn: (todos) => (todos ? todos.filter(({ complete }) => complete) : [])
  },
  {
    _id: 'important',
    value: 'Important',
    variant: 'danger',
    filterFn: (todos) => (todos ? todos.filter(({ important }) => important) : [])
  }
];

export const pillData2 = {
  ids: ['All', 'notCompleted', 'completed', 'important'],
  data: {
    all: {
      _id: 'all',
      value: 'All',
      variant: 'secondary',
      filterFn: (todos) => (todos ? [...todos] : [])
    },
    notCompleted: {
      _id: 'notCompleted',
      value: 'Not Completed',
      variant: 'warning',
      filterFn: (todos) => (todos ? todos.filter(({ complete }) => !complete) : [])
    },
    completed: {
      _id: 'completed',
      value: 'Completed',
      variant: 'success',
      filterFn: (todos) => (todos ? todos.filter(({ complete }) => complete) : [])
    },
    important: {
      _id: 'important',
      value: 'Important',
      variant: 'danger',
      filterFn: (todos) => (todos ? todos.filter(({ important }) => important) : [])
    }
  }
};
