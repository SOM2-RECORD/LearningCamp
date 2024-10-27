<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SSAFY 사용자 관리</title>
</head>
<body>
	<h1>SSAFY 사용자 관리</h1>
	<form action="regist" method="post">
		<div>사용자 정보 입력</div>
		아이디 : <br>
		<input type="text" name="id"/> <br>
		비밀번호 : <br>
		<input type="text" name="password"/> <br>
		이름 : <br>
		<input type="text" name="name"/> <br>
		이메일 : <br>
		<input type="email" name="email"/> <br>
		나이 : <br>
		<input type="number" name="age"/> <br>
		<br>
		<input type="submit" value="등록"/>
		<input type="reset" value="초기화"/>
	</form>
</body>
</html>