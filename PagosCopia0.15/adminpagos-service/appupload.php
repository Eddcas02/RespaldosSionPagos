<?php  
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: multipart/form-data; application/json; charset=UTF-8");
	header("Access-Control-Allow-Methods: POST");
	header("Access-Control-Max-Age: 3600");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 
	
	require_once('fpdf/fpdf.php');

	if(isset($_FILES["file"])){ 
		$filename = $_FILES["file"]["name"];
		if($_FILES["file"]["type"] == 'image/jpeg'){ 
			$pdfname = substr_replace($filename, 'pdf', strlen($filename)-3, strlen($filename)-1);
			$pdf = new FPDF();
			$pdf->AddPage(); 
			$pdf->Image($_FILES["file"]["tmp_name"], 20, 20, 170, 260, 'jpg');
			$pdf->Output('../archivos/'.$pdfname, 'F');
			echo json_encode($pdfname); 
		}else if($_FILES["file"]["type"] == 'image/png'){ 
			$pdfname = substr_replace($filename, 'pdf', strlen($filename)-3, strlen($filename)-1);
			$pdf = new FPDF(); 
			$pdf->AddPage();
			$pdf->Image($_FILES["file"]["tmp_name"], 20, 20, 170, 260, 'png');
			$pdf->Output('../archivos/'.$pdfname, 'F'); 
			echo json_encode($pdfname);
		}else{
			move_uploaded_file($_FILES["file"]["tmp_name"], "../archivos/" . $filename);
			echo json_encode($filename);
		}
	}
?>