<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="../css/reset.css" />
<link rel="stylesheet" type="text/css" href="../css/common.css" />
<style type="text/css">
.wordAdditionForm{
	/*Box Radius*/
	border-radius:5px;
	-moz-border-radius:5px;
	-khtml-border-radius:5px;
	-webkit-border-radius:5px;
	
	border:1px solid #D2D2D2;
	width:440px;
	padding:5px;
	
	/*
		IE İÇİN TEST ET 
	*/
	/* Box Shadow */
	box-shadow:0px 0px 15px #000;
	-moz-box-shadow:0px 0px 15px #000;
	-webkit-box-shadow:0px 0px 15px #000;
	/* For IE 8 */
	-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
	/* For IE 5.5 - 7 */
	filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000');
}
</style>

<form class="wordAdditionForm" method="post" action="">
	<label>Etiket:<input type="text" name="label" maxlength="100" /></label>
	<label>Kelime:<input type="text" name="word" maxlength="100" /></label>
	<input type="submit" name="wordAdditionFormSubmit" value="Ekle" />
</form>
