<?php
require_once('ipage.php');
class indexController extends ipage {

	public function initialize(){
		$this->title='Kelimeci - Ana sayfa';
		$this->autRequired=false;
		parent::initialize();

	}

	public function run(){

		if($this->isLogined){

			header('location:/vocabulary');

		}

		parent::run();
	}
}
?>
