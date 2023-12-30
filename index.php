<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
	header("Content-Type:application/json");
	$conn = mysqli_connect('localhost', 'root', '', 'kelas3f'); 
	mysqli_set_charset($conn, 'utf8');
	$method = $_SERVER['REQUEST_METHOD'];
	$results = [];

	if ($method == 'GET') {
		if(isset($_GET['id'])){
			$id = $_GET['id'];
			$query = mysqli_query($conn, "SELECT * FROM tutorial WHERE id=$id");
			if (mysqli_num_rows($query) > 0) {
				while($row = mysqli_fetch_assoc($query)) {
					$results['Status']['success'] = true;
					$results['Status']['code'] = 200;
					$results['Status']['description'] = 'Request Valid';
					$results['Hasil'][] = [
						'id' => $row['id'],
						'title' => $row['title'],
						'description' => $row['description'],
						'tanggal' => $row['tanggal']
					];
				}
				$json = json_encode($results);
				print_r($json);
			}
			else{
				$results['Status']['code'] = 400;
				$results['Status']['description'] = 'Request Invalid';
			}
		}else{
			$query = mysqli_query($conn, 'SELECT * FROM tutorial');
			if (mysqli_num_rows($query) > 0) {
				while($row = mysqli_fetch_assoc($query)) {
					$results['Status']['success'] = true;
					$results['Status']['code'] = 200;
					$results['Status']['description'] = 'Request Valid';
					$results['Hasil'][] = [
						'id' => $row['id'],
						'title' => $row['title'],
						'description' => $row['description'],
						'tanggal' => $row['tanggal']
					];
				}
				$json = json_encode($results);
				print_r($json);
			}
			else{
				$results['Status']['code'] = 400;
				$results['Status']['description'] = 'Request Invalid';
			}
		}
	}elseif($method == 'POST'){
		if(isset($_GET['aksi']) && $_GET['aksi'] == "tambah"){
			//koding tambah
			$inputJSON = file_get_contents('php://input');
			$input = json_decode($inputJSON, true);
			$title = $input['title'];
			$description = $input['description'];
			$sql = "INSERT INTO tutorial (title, description, tanggal) VALUES ('$title', '$description',NOW())";
			$conn->query($sql);

			$query = mysqli_query($conn, 'SELECT * FROM tutorial ORDER BY id DESC LIMIT 1');
			if (mysqli_num_rows($query) > 0) {
				while($row = mysqli_fetch_assoc($query)) {
					$results['Status']['success'] = true;
					$results['Status']['code'] = 200;
					$results['Status']['description'] = 'Request Valid';
					$results['Hasil'][] = [
						'id' => $row['id'],
						'title' => $row['title'],
						'description' => $row['description'],
						'tanggal' => $row['tanggal']
					];
				}
				$json = json_encode($results);
				print_r($json);
			}
		}elseif(isset($_GET['aksi']) && $_GET['aksi'] == "edit"){
			//koding edit
		}elseif(isset($_GET['aksi']) && $_GET['aksi'] == "delete"){
			//koding delete
			$inputJSON = file_get_contents('php://input');
			$id = json_decode($inputJSON, true);
			$sql = "DELETE FROM tutorial WHERE id='$id'";
			$conn->query($sql);
		}else{
			$results['Status']['code'] = 404;
		}
	}else{
		$results['Status']['code'] = 404;
	}	
?>