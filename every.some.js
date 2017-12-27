var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted;
  
  hasSubmitted = users.every(function(user){
      return user.hasSubmitted === true
  })


  ///////////////////

  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress;
  
  inProgress = requests.some(request => {
      return request.status === 'pending'
  })

  