<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <title>SHIFT LA</title>
      <link href="img_shift/icon/favicon.png" rel="shortcut icon" type="image/icon">
      <title> State of California Certified Small Business</title>
	<title></title>

	<!-- Favicons-->
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">

	<!-- GOOGLE WEB FONT -->
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">

	<!-- BASE CSS -->
	<link href="css_shift/style.css" rel="stylesheet">

	<!-- YOUR CUSTOM CSS -->
	<link href="css_shift/custom.css" rel="stylesheet">
    
	<script type="text/javascript">
    function delayedRedirect(){
        window.location = "shift.html"
    }
    </script>

</head>
<body onLoad="setTimeout('delayedRedirect()', 8000)" style="background-color:#fff;">
<?php
						$mail = $_POST['email'];

						/*$subject = "".$_POST['subject'];*/
						$to = "shift@mworks.design";		/* YOUR EMAIL HERE */
						$subject = "Quotation for Web3 Shift";
						$headers = "From: Quotation from Shift LA <noreply@mworks.design>";
						$message = "DETAILS\n";
						$message .= "\n1) What does your business need?\n" ;
						foreach($_POST['question_1'] as $value) 
							{ 
							$message .=   "- " .  trim(stripslashes($value)) . "\n"; 
							};
						$message .= "\n2) Additional info: " . $_POST['additional_message'];						
	
						/* FILE UPLOAD */
						if(isset($_FILES['fileupload'])){
							  $errors= array();
							  $file_name = $_FILES['fileupload']['name'];
							  $file_size =$_FILES['fileupload']['size'];
							  $file_tmp =$_FILES['fileupload']['tmp_name'];
							  $file_type=$_FILES['fileupload']['type'];
							  $file_ext=strtolower(end(explode('.',$_FILES['fileupload']['name'])));

							  $expensions= array("jpeg","jpg","png","pdf","doc","docx");// Define with files are accepted
							  
							  $OriginalFilename = $FinalFilename = preg_replace('`[^a-z0-9-_.]`i','',$_FILES['fileupload']['name']); 
							  $FileCounter = 1; 
							  while (file_exists( 'upload_files/'.$FinalFilename )) // The folder where the files will be stored; set the permission folder to  0755. 
   							 $FinalFilename = $FileCounter++.'_'.$OriginalFilename; 

							  if(in_array($file_ext,$expensions)=== false){
								 $errors[]="Extension not allowed, please choose a gif, jpg, jpeg, .png, .pdf, .doc, .docx file.";
							  }
							// Set the files size limit. Use this tool to convert the file size param http://freeola.com/support/unit_convertor.php
							  if($file_size > 51200){
								 $errors[]='File size must be max 50Kb';
							  }
							  if(empty($errors)==true){
								 move_uploaded_file($file_tmp,"upload_files_shift/".$FinalFilename);
								 $message .= "\nFile name: " .$FinalFilename;
							  }else{
								 $message .= "\nFile name: no files uploaded";
							  }
						   };
						/* end FILE UPLOAD */
						$message .= "\n\n3) What is your budget? $" . $_POST['budget'] . "\n";
						$message .= "\nFirst Name: " . $_POST['firstname'];
						$message .= "\nLast Name: " . $_POST['lastname'];
						$message .= "\nEmail: " . $_POST['email'];
						$message .= "\nTelephone: " . $_POST['telephone'];
						$message .= "\nTerms and conditions accepted: " . $_POST['terms'] . "\n";
												
						//Receive Variable
						$sentOk = mail($to,$subject,$message,$headers);
						
						//Confirmation page
						$user = "$mail";
						$usersubject = "Thank You";
						$userheaders = "From: shift@mworks.design\n";
						/*$usermessage = "Thank you for your time. Your request has been successfully submitted.\n"; WITH OUT SUMMARY*/
						//Confirmation page WITH  SUMMARY
						$usermessage = "Thank you for your time. Your quotation has been successfully submitted. We will reply shortly.\n\nBELOW A SUMMARY\n\n$message"; 
						mail($user,$usersubject,$usermessage,$userheaders);
	
?>
<!-- END SEND MAIL SCRIPT -->   

<div id="success">
    <div class="icon icon--order-success svg">
         <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
          <g fill="none" stroke="#8EC343" stroke-width="2">
             <circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
             <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
          </g>
         </svg>
     </div>
	<h4><span>Request successfully sent!</span>Thank you for your time</h4>
	<small>You will be redirect back in 5 seconds.</small><p><a href="index.html">return to our homepage</a></p>
</div>
</body>
</html>