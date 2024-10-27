package com.ssafy.ws;

public class Audience {
	
	private Movie movie;
	
	public Audience(Movie movie) {
		this.movie = movie;	
	}
	
	public void watch() {
		System.out.println("관객이 " + movie.getInfo() + " 영화를 봅니다.");
	}
}
