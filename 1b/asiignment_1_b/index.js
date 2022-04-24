$(document).ready(function(){
    $("#enquirymodal").modal('show');
});


$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  


  <div class="col-xl-4 col-md-12 mb-4">
            <div class="card">
                <!-- photo gallery within card-->
  
                <div class="card-body" >
                  <div class="row">
                    <canvas id="barchart"></canvas>
                  
                    <script>          
                      var ctx = document.getElementById('barchart').getContext('2d');
                      var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                          labels: ['JEE', 'NEET', 'BOARDS', 'KVPY', 'SAT'
                          ],
                          datasets: [{
                          backgroundColor: [
                            "#2ecc71",
                            "#3498db",
                            "#95a5a6",
                            "#9b59b6",
                            "#f1c40f"
                          ],
                          data: [70, 150, 3, 5, 2]
                        }]
                      },
                      options: {
                        legend: {
                          display: true,
                          responsive: true,
                          position: 'right',
                          labels: {
                            boxWidth: 20,
                            fontColor: 'black'
                          }
                        }
                      }
                    });     
                
                  </script>
                </div>
                </div>
  
  
                </div>
            </div>