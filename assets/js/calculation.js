$(function(){
    $('.submit').click(function() {
      let sum = 0;
      let eas = 1;
      let a = 2.94;
      let c = 3.67;
      let d = 0.28;

      $('.scale-driver').each(function(i){
        sum += Number(this.value);
        console.log(sum);
      });

      $('.cost-driver').each(function(i) {
        eas *= Number(this.value);
        console.log(eas);
      });

      let e = 0.91 + ((0.01)*sum);
      let kloc = $('.kloc').val();
      let cost = $('.cost').val();
      let effort = a*(Math.pow(kloc, e));
      let time = c*(Math.pow(effort, d));
      let tcost = cost*effort;
      $( "<div class=\"container-fluid bg-3 text-center input-group mb-3\">\n" +
          "<input  id='effort' class=\"form-control\" type=\"text\" placeholder=\"Effort:\" readonly>\n" +
          "</div>" + "<div class=\"container-fluid bg-3 text-center input-group mb-3\">\n" +
          "<input id='time' class=\"form-control\" type=\"text\" placeholder=\"Time of Development:\" readonly>\n" +
          "</div>" + "<div class=\"container-fluid bg-3 text-center input-group mb-3\">\n" +
          "<input id='tcost' class=\"form-control\" type=\"text\" placeholder=\"Total Cost:\" readonly>\n" +
          "</div><br><br>" ).insertBefore( ".footer" );
      $("#effort").val('Effort: ' + effort + ' Person-Month');
      $("#time").val('Time of development: ' + time + ' Months');
      $("#tcost").val('Total cost: $' + tcost);
    });

});
