$(document).ready(function() {
     $('#share_project_table').DataTable({
        "bProcessing": true,
		 "destroy": true,
		 responsive: false,
        "bLengthChange": false,
         //"scrollX": true,
       "bAutoWidth": true,
       "oLanguage": { "sSearch": "" } ,
    });  

    /***********Button Page Redirect  Events**********/
    $('#projects_btn').click(function(){
        window.location.href='projects.html';
     })

     $('#share_project').click(function(){
        window.location.href='shareprojects.html';
     })
     $('#logout_btn').click(function(){
        window.location.href = '../index.html';
    });
    $("#share_project_back_btn").click(function(){
        window.location.href = 'projects.html';
    });
    $("#shareproject_btn").click(function(){
        window.location.href = 'shareprojectwith.html';
    });
    $("#share_project_with_back_btn").click(function(){
        window.location.href = 'shareprojects.html';
    });
    $("#download_projects").click(function(){
        window.location.href = 'downloadprojects.html';
    });
    $("#upload_projects").click(function(){
        window.location.href = 'uploadprojects.html';
    });
    $("#projects_back_btn").click(function(){
        window.location.href = 'homepage.html';
    });
    $("#site_projects").click(function(){
        window.location.href = 'siteproject/siteprojects.html';
    });
    $("#site_project_back_btn").click(function(){
        window.location.href = '../homepage.html';
    });
    $("#open_proj").click(function(){
        window.location.href = 'openproject.html';
    });
    $("#open_project_back_btn").click(function(){
        window.location.href = 'siteprojects.html';
    });
    $("#download_proj_btn").click(function(){
        window.location.href = 'siteproject/siteprojects.html';
    });
    $("#proj_comment_btn").click(function(){
        window.location.href = 'projectcomments.html';
    });
     $("#project_comments_back_btn , #save_comment_btn").click(function(){
        window.location.href = 'openproject.html';
    });
    
    $(".got_to_product_info").click(function(){
        window.location.href = 'product_related.html';
    });
    
    $("#got_to_hw_set").click(function(){
        window.location.href = 'hwsets.html';
    });
    $("#report_proj_btn").click(function(){
        window.location.href = 'hw_related.html';
    });
    $("#hw_info_save_btn").click(function(){
        window.location.href = 'siteproject/openproject.html';
    });
   
    $("#static_table").click(function(){
        window.location.href = '../hwsets.html';
    });
    
    
    /***********Button Page Redirect Events End**********/
 /****************Table Click Event************ */
 $(document).ready(function() { 
     var table = $('#site_project_table').DataTable({
        "bProcessing": true,
        "destroy": true,
        responsive: false,
       "bLengthChange": false,
      "bAutoWidth": true,
      "oLanguage": { "sSearch": "" } ,
     });
      $('#site_project_table tbody').on('click', 'tr', function ()
      {
         //  var data = table.row( this ).data(); alert( 'You clicked on '+data[0]+'\'s row' ); 
         window.location.href = 'openproject.html';
        
        } ); 
    } );
 /****************Table Click Event End  ************ */
 
} );

$(document).ready(function(){
    // $("#camera").click(function(){
    //     $("#file_upload").click()
    // });
    
    // Remove Image
    $("#remove_image").click(function(){
         
        $('#pic_upload').attr('src', "../images/blank.png ");
  
        $('#pic_upload').hide();
        $('#pic_upload').fadeIn(300);
    });

    $("#file_upload").change(function() {
        readURL(this);
      });

});
function readURL(input) {

    if (input.files && input.files[0]) {
       
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#pic_upload').attr('src', e.target.result);
  
        $('#pic_upload').hide();
        $('#pic_upload').fadeIn(650);
  
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }