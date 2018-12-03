$(document).ready(function() {
     $('#share_project_table').DataTable({
        "bProcessing": true,
		 "destroy": true,
		 responsive: false,
		"bLengthChange": false,
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
    
    $("#proj_comment_btn").click(function(){
        window.location.href = 'projectcomments.html';
    });
     $("#project_comments_back_btn , #save_comment_btn").click(function(){
        window.location.href = 'openproject.html';
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