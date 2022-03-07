Page({
  data: {
    name: 'Firstname Lastname',
  },
  onTap: (e) => {
    console.log('in onTap()')
    console.log(JSON.stringify(e))
  },
  onLoad: async () => {
    console.log('in onLoad()');
  }
});
