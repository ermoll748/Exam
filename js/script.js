document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction:'left',
        hoverEnabled: false
    });

    var elems2 = document.querySelectorAll('.sidenav');
    var instances2 = M.Sidenav.init(elems2, {});
  });