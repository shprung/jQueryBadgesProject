$(function() {
 var url='https://www.codeschool.com/users/haro.json';
 $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var c=response.courses.completed,a;
      for(i in c){
        a="<div class='course'><h3>"+c[i].title+"</h3><img src='"+
          c[i].badge+"'><a href='"+c[i].url+"' target='_blank' class='btn btn-primary'>See Course</a></div>";
        $('#badges').append(a);
      }
    }
  });
});
